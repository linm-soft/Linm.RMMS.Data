/**
 * GOVOne PMDB legacy capture — login → crawl apps → extract fields/menus.
 * Credentials: GOVONE_USER / GOVONE_PASS (env or .env.local). Never log secrets.
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { clickInnerItem, collectInnerNav } from "./deep-crawl.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOOL_ROOT = __dirname;
const DATA_ROOT = resolve(TOOL_ROOT, "../..");

/** shallow | deep | full — full = deep + higher limits */
function captureMode() {
  const m = env("GOVONE_MODE", "shallow").toLowerCase();
  if (m === "full" || m === "deep" || m === "shallow") return m;
  if (process.argv.includes("--full")) return "full";
  if (process.argv.includes("--deep")) return "deep";
  return "shallow";
}

function loadEnvFile(path) {
  if (!existsSync(path)) return;
  const text = readFileSync(path, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i < 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"'))
      || (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}

loadEnvFile(join(TOOL_ROOT, ".env.local"));
loadEnvFile(join(TOOL_ROOT, ".env"));

function env(name, fallback = "") {
  return (process.env[name] ?? fallback).trim();
}

function boolEnv(name, fallback) {
  const v = env(name, fallback ? "true" : "false").toLowerCase();
  return v === "1" || v === "true" || v === "yes";
}

function nowIso() {
  return new Date().toISOString();
}

function slugify(s) {
  return String(s || "page")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "page";
}

/** Strip session tokens from URLs before logging / writing artifacts. */
function redactUrl(u) {
  if (!u) return u;
  return String(u)
    .replace(/([?&]gtoken=)[^&#]+/gi, "$1[REDACTED]")
    .replace(/([?&]token=)[^&#]+/gi, "$1[REDACTED]")
    .replace(/([?&]access_token=)[^&#]+/gi, "$1[REDACTED]");
}

async function extractPageInventory(page) {
  return page.evaluate(() => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const labels = [...document.querySelectorAll("label")]
      .map((el) => textOf(el))
      .filter(Boolean)
      .slice(0, 200);
    const fields = [...document.querySelectorAll("input, select, textarea")]
      .map((el) => ({
        tag: el.tagName.toLowerCase(),
        type: el.getAttribute("type") || "",
        name: el.getAttribute("name") || "",
        id: el.id || "",
        placeholder: el.getAttribute("placeholder") || "",
        ariaLabel: el.getAttribute("aria-label") || "",
      }))
      .filter((f) => f.type !== "hidden")
      .slice(0, 300);
    const buttons = [
      ...document.querySelectorAll(
        "button, a.btn, input[type=submit], input[type=button], .btn, [role=button], .nav-link, .sidebar a, .menu-item, [class*=toolbar] a, [class*=Toolbar] button",
      ),
    ]
      .map((el) => textOf(el) || el.getAttribute("value") || el.getAttribute("title") || "")
      .filter(Boolean)
      .slice(0, 200);
    const tableHeaders = [...document.querySelectorAll("th")]
      .map((el) => textOf(el))
      .filter(Boolean)
      .slice(0, 200);
    const headings = [...document.querySelectorAll("h1,h2,h3,h4,.page-title,.Title")]
      .map((el) => textOf(el))
      .filter(Boolean)
      .slice(0, 40);
    const navHints = [
      ...document.querySelectorAll(
        "nav a, .menu a, .Sidebar a, .tree a, .dxm-content, .dxm-item, [class*=Menu] a, [class*=menu] a",
      ),
    ]
      .map((a) => ({
        text: textOf(a),
        href: a.href || a.getAttribute("href") || "",
      }))
      .filter((x) => x.text && x.text.length < 120)
      .slice(0, 200);
    const title = document.title || "";
    const bodySample = textOf(document.body).replace(/\s+/g, " ").slice(0, 4000);
    return {
      title,
      headings,
      labels,
      fields,
      buttons: [...new Set(buttons)],
      tableHeaders: [...new Set(tableHeaders)],
      navHints,
      bodySample,
    };
  });
}

const SKIP_TEXT_RE =
  /đăng xuất|log\s?off|log\s?out|quên mật khẩu|đăng ký|eKGIS|copyright|xin chào|hồ sơ của tôi|video hướng dẫn|^\.\.\.$|@|^\d{2,}/i;

function isSkippableHref(href, baseHost) {
  if (!href) return false;
  const h = href.toLowerCase();
  if (h.startsWith("javascript:") || h.startsWith("mailto:") || h.startsWith("tel:")) {
    return true;
  }
  if (h.includes("logoff") || h.includes("logout") || h.includes("recoverpassword")) {
    return true;
  }
  if (h.includes("facebook.com") || h.includes("ekgis.com")) return true;
  try {
    const u = new URL(href);
    if (u.hostname && baseHost && !u.hostname.endsWith(baseHost.replace(/^www\./, ""))) {
      // allow subdomain of govone.vn
      if (!u.hostname.endsWith("govone.vn") && !u.hostname.endsWith(baseHost)) {
        return true;
      }
    }
  } catch {
    /* ignore */
  }
  return false;
}

async function collectMenuCandidates(page, baseHost) {
  const raw = await page.evaluate(() => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const seen = new Set();
    const out = [];
    const push = (text, href, kind) => {
      const t = (text || "").replace(/\s+/g, " ").trim().split("\n")[0];
      if (!t || t.length > 120) return;
      const key = `${t}|${kind}`;
      if (seen.has(key)) return;
      seen.add(key);
      out.push({ text: t, href: href || "", kind });
    };

    // App tiles on apps.aspx (often href=# with JS open)
    const headings = [
      ...document.querySelectorAll(
        ".app-item, .AppItem, .appTile, [class*=App] a, .dashboard-app, h3, h4, .Title",
      ),
    ];
    for (const el of headings) {
      const t = textOf(el).split("\n")[0];
      if (
        /BẢN ĐỒ|DASHBOAD|DASHBOARD|GIÁM SÁT|VẤN ĐỀ|PHÂN QUYỀN|BÁO CÁO|TÀI SẢN|SỬA CHỮA|VIDEO/i.test(
          t,
        )
      ) {
        push(t.replace(/\s*\.\.\.\s*$/, "").trim(), "", "app-tile");
      }
    }

    for (const a of document.querySelectorAll("a[href]")) {
      const href = a.href || "";
      const t = textOf(a).split("\n")[0];
      if (!t) continue;
      const isHash =
        !href
        || href.endsWith("#")
        || href.includes("apps.aspx#")
        || href === location.href.split("#")[0] + "#";
      if (isHash && /BẢN ĐỒ|DASHBOAD|DASHBOARD|GIÁM SÁT|VẤN ĐỀ|PHÂN QUYỀN|BÁO CÁO|TÀI SẢN|SỬA CHỮA/i.test(t)) {
        push(t.replace(/\s*\.\.\.\s*$/, "").trim(), href, "app-tile");
        continue;
      }
      push(t, href, "link");
    }
    for (const el of document.querySelectorAll(
      "[role=treeitem], .dxm-item, .tree-node, .MenuItem, li[data-key], .dxm-content",
    )) {
      push(textOf(el).split("\n")[0], "", "tree");
    }
    return out.slice(0, 400);
  });

  return raw.filter(
    (m) =>
      !SKIP_TEXT_RE.test(m.text)
      && !isSkippableHref(m.href, baseHost)
      && m.text.length > 1,
  );
}

async function openAppTile(page, context, tileText) {
  const label = tileText.replace(/\s*\.\.\.\s*$/, "").trim();
  const locator = page
    .getByText(label, { exact: false })
    .first();
  if (!(await locator.isVisible({ timeout: 3000 }).catch(() => false))) {
    return { page, opened: false };
  }

  const popupPromise = context.waitForEvent("page", { timeout: 8000 }).catch(() => null);
  await locator.click({ timeout: 10_000 });
  const popup = await popupPromise;
  if (popup) {
    await popup.waitForLoadState("domcontentloaded").catch(() => {});
    await popup.waitForLoadState("networkidle", { timeout: 12_000 }).catch(() => {});
    await popup.waitForTimeout(2000);
    return { page: popup, opened: true, via: "popup" };
  }

  await page.waitForLoadState("domcontentloaded").catch(() => {});
  await page.waitForTimeout(1200);

  // iframe app shell
  const frames = page.frames().filter((f) => f.url() && !f.url().startsWith("about:"));
  if (frames.length > 1) {
    return { page, opened: true, via: "frame", frame: frames[frames.length - 1] };
  }
  return { page, opened: true, via: "nav" };
}

async function tryLogin(page, baseUrl, user, pass) {
  const appsUrl = `${baseUrl.replace(/\/$/, "")}${env("GOVONE_APPS_PATH", "/apps.aspx")}`;
  await page.goto(appsUrl, { waitUntil: "domcontentloaded", timeout: 60_000 });

  const userSel = env(
    "GOVONE_USER_SELECTOR",
    '#ctl00_mainContent_login1_LoginCtrl_UserName, input[name*="UserName"], input[type="text"]',
  );
  const passSel = env(
    "GOVONE_PASS_SELECTOR",
    '#ctl00_mainContent_login1_LoginCtrl_Password, input[type="password"]',
  );
  const submitSel = env(
    "GOVONE_SUBMIT_SELECTOR",
    '#ctl00_mainContent_login1_LoginCtrl_Login, input[type="submit"], button:has-text("Đăng nhập")',
  );

  const passBox = page.locator(passSel).first();
  const needLogin = await passBox.isVisible({ timeout: 8000 }).catch(() => false);
  if (!needLogin) {
    return { loggedIn: true, skippedLogin: true, url: page.url() };
  }

  const userBox = page.locator(userSel).first();
  await userBox.waitFor({ state: "visible", timeout: 15_000 });
  await userBox.fill(user);
  await passBox.fill(pass);

  const submit = page.locator(submitSel).first();
  if (await submit.isVisible().catch(() => false)) {
    await Promise.all([
      page.waitForLoadState("domcontentloaded").catch(() => {}),
      submit.click(),
    ]);
  } else {
    await passBox.press("Enter");
  }

  await page.waitForTimeout(2500);
  const stillLogin = await page
    .locator(passSel)
    .first()
    .isVisible({ timeout: 2000 })
    .catch(() => false);
  if (stillLogin) {
    throw new Error(
      "Login failed — password field still visible. Check GOVONE_USER/PASS or selectors.",
    );
  }
  return { loggedIn: true, skippedLogin: false, url: page.url() };
}

async function main() {
  const user = env("GOVONE_USER");
  const pass = env("GOVONE_PASS");
  if (!user || !pass) {
    console.error(
      "Missing GOVONE_USER / GOVONE_PASS. Copy .env.example → .env.local or set CI secrets.",
    );
    process.exit(1);
  }

  const baseUrl = env("GOVONE_BASE_URL", "https://pmdb.govone.vn");
  const outDir = resolve(
    DATA_ROOT,
    env("GOVONE_OUT_DIR", "docs/context/_raw/legacy-govone"),
  );
  const pagesDir = join(outDir, "pages");
  const shotDir = join(outDir, "screenshots");
  mkdirSync(pagesDir, { recursive: true });
  if (boolEnv("GOVONE_SCREENSHOTS", true)) mkdirSync(shotDir, { recursive: true });

  const mode = captureMode();
  const deep = mode === "deep" || mode === "full";
  const defaultMax = mode === "full" ? "200" : deep ? "120" : "80";
  const maxPages = Number(env("GOVONE_MAX_PAGES", defaultMax)) || 80;
  const maxMenu = Number(env("GOVONE_MAX_MENU", mode === "full" ? "200" : "120")) || 120;
  const maxInner = Number(env("GOVONE_MAX_INNER", mode === "full" ? "40" : "25")) || 25;
  // deep/full: mặc định HIỆN browser để theo dõi; set GOVONE_HEADLESS=true để ẩn
  // shallow: mặc định headless
  const headlessEnv = env("GOVONE_HEADLESS");
  const headless =
    headlessEnv !== ""
      ? boolEnv("GOVONE_HEADLESS", !deep)
      : !deep;
  const headedForce =
    process.argv.includes("--headed") || process.argv.includes("--show");
  const headlessForce = process.argv.includes("--headless");
  const useHeadless = headedForce ? false : headlessForce ? true : headless;

  console.log(
    JSON.stringify({
      event: "start",
      mode,
      deep,
      baseUrl,
      outDir,
      userSet: Boolean(user),
      passLen: pass.length,
      maxPages,
      maxInner,
      headless: useHeadless,
      showBrowser: !useHeadless,
    }),
  );

  const browser = await chromium.launch({
    headless: useHeadless,
    slowMo: useHeadless ? Number(env("GOVONE_SLOW_MO", "80")) || 80 : 0,
  });
  const context = await browser.newContext({
    locale: "vi-VN",
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const baseHost = new URL(baseUrl).hostname;
  const login = await tryLogin(page, baseUrl, user, pass);
  console.log(JSON.stringify({ event: "login", ...login, user: "[REDACTED]" }));

  // Always re-open apps shell as crawl home
  const appsUrl = `${baseUrl.replace(/\/$/, "")}${env("GOVONE_APPS_PATH", "/apps.aspx")}`;
  await page.goto(appsUrl, { waitUntil: "domcontentloaded", timeout: 60_000 });
  await page.waitForTimeout(1000);

  const menu = (await collectMenuCandidates(page, baseHost)).slice(0, maxMenu);
  writeFileSync(
    join(outDir, "menu-candidates.json"),
    JSON.stringify({ capturedAt: nowIso(), count: menu.length, menu }, null, 2),
    "utf8",
  );

  const visited = new Set();
  const pages = [];
  const queue = [];

  queue.push({ text: "(apps-shell)", href: appsUrl, kind: "shell" });
  const tiles = menu.filter((m) => m.kind === "app-tile");
  const others = menu.filter(
    (m) =>
      m.kind !== "app-tile"
      && m.href
      && m.href.startsWith("http")
      && !m.href.includes("apps.aspx#")
      && !m.href.endsWith("#"),
  );
  for (const t of tiles) queue.push(t);
  for (const o of others) queue.push(o);

  let active = page;

  while (queue.length && pages.length < maxPages) {
    const item = queue.shift();
    const key = `${item.kind}|${item.text}|${item.href || ""}`;
    if (visited.has(key)) continue;
    visited.add(key);

    try {
      // Return to apps shell before each tile click
      if (item.kind === "app-tile" || item.kind === "shell") {
        if (active !== page && !active.isClosed?.()) {
          await active.close().catch(() => {});
          active = page;
        }
        if (!page.url().includes("apps.aspx")) {
          await page.goto(appsUrl, {
            waitUntil: "domcontentloaded",
            timeout: 60_000,
          });
        }
      }

      let invTarget = page;
      let finalUrl = page.url();
      let via = item.kind;

      if (item.kind === "shell") {
        invTarget = page;
      } else if (item.kind === "app-tile") {
        const opened = await openAppTile(page, context, item.text);
        if (!opened.opened) {
          console.log(
            JSON.stringify({ event: "tile_miss", menuText: item.text }),
          );
          continue;
        }
        via = opened.via;
        if (opened.via === "popup") {
          active = opened.page;
          invTarget = opened.page;
          finalUrl = opened.page.url();
        } else if (opened.via === "frame" && opened.frame) {
          invTarget = opened.frame;
          finalUrl = opened.frame.url();
        } else {
          invTarget = page;
          finalUrl = page.url();
          // Session lost → login page: re-login and skip
          if (/login\.aspx/i.test(finalUrl)) {
            await tryLogin(page, baseUrl, user, pass);
            continue;
          }
        }
      } else if (item.href && item.href.startsWith("http")) {
        await page.goto(item.href, {
          waitUntil: "domcontentloaded",
          timeout: 45_000,
        });
        invTarget = page;
        finalUrl = page.url();
        if (/login\.aspx/i.test(finalUrl)) {
          await tryLogin(page, baseUrl, user, pass);
          continue;
        }
      } else if (item.kind === "tree") {
        const clickable = page.getByText(item.text, { exact: true }).first();
        if (!(await clickable.isVisible({ timeout: 2000 }).catch(() => false))) {
          continue;
        }
        await clickable.click({ timeout: 10_000 });
        await page.waitForTimeout(800);
        invTarget = page;
        finalUrl = page.url();
      } else {
        continue;
      }

      const savePage = async (menuText, kind, viaKind, target, url) => {
        if (pages.length >= maxPages) return null;
        const inv = await extractPageInventory(target);
        const id = `${String(pages.length + 1).padStart(3, "0")}-${slugify(menuText || inv.title)}`;
        const record = {
          id,
          menuText,
          kind,
          via: viaKind,
          href: item.href ? redactUrl(item.href) : null,
          finalUrl: redactUrl(url),
          capturedAt: nowIso(),
          mode,
          ...inv,
        };
        pages.push(record);
        writeFileSync(
          join(pagesDir, `${id}.json`),
          JSON.stringify(record, null, 2),
          "utf8",
        );
        if (boolEnv("GOVONE_SCREENSHOTS", true)) {
          const shotPage =
            active && typeof active.screenshot === "function" ? active : page;
          await shotPage
            .screenshot({ path: join(shotDir, `${id}.png`), fullPage: false })
            .catch(() => {});
        }
        console.log(
          JSON.stringify({
            event: "page",
            id,
            menuText,
            via: viaKind,
            fields: inv.fields.length,
            labels: inv.labels.length,
            url: redactUrl(url),
          }),
        );
        return record;
      };

      await savePage(item.text, item.kind, via, invTarget, finalUrl);

      // Deep: crawl inner nav inside popup before closing
      if (
        deep
        && item.kind === "app-tile"
        && via === "popup"
        && active !== page
        && !active.isClosed?.()
      ) {
        const inner = (await collectInnerNav(active)).slice(0, maxInner);
        for (const nav of inner) {
          if (pages.length >= maxPages) break;
          const ik = `inner|${item.text}|${nav.text}`;
          if (visited.has(ik)) continue;
          visited.add(ik);
          const ok = await clickInnerItem(active, nav.text);
          if (!ok) continue;
          await savePage(
            `${item.text} › ${nav.text}`,
            "inner",
            "deep",
            active,
            active.url(),
          );
        }
      } else if (!deep) {
        const more = await collectMenuCandidates(
          active && typeof active.evaluate === "function" ? active : page,
          baseHost,
        );
        for (const m of more.filter((x) => x.kind === "tree" || x.kind === "link")) {
          const k = `${m.kind}|${m.text}|${m.href || ""}`;
          if (!visited.has(k) && queue.length < maxMenu * 2) queue.push(m);
        }
      }

      // Close popup after tile (+ deep inner) done
      if (via === "popup" && active !== page && !active.isClosed?.()) {
        await active.close().catch(() => {});
        active = page;
      }
    } catch (e) {
      console.log(
        JSON.stringify({
          event: "page_error",
          menuText: item.text,
          error: e instanceof Error ? e.message : String(e),
        }),
      );
      if (active !== page) {
        await active.close().catch(() => {});
        active = page;
      }
    }
  }

  const catalog = {
    source: "govone-pmdb",
    baseUrl,
    capturedAt: nowIso(),
    loginOk: true,
    pageCount: pages.length,
    menuCount: menu.length,
    pages: pages.map((p) => ({
      id: p.id,
      menuText: p.menuText,
      title: p.title,
      finalUrl: p.finalUrl,
      fieldCount: p.fields?.length ?? 0,
      labelCount: p.labels?.length ?? 0,
      buttonCount: p.buttons?.length ?? 0,
    })),
  };
  writeFileSync(join(outDir, "catalog.json"), JSON.stringify(catalog, null, 2), "utf8");
  writeFileSync(
    join(outDir, "CAPTURE-SUMMARY.md"),
    [
      `# GOVOne legacy capture`,
      ``,
      `- **When:** ${catalog.capturedAt}`,
      `- **Base:** ${baseUrl}`,
      `- **Pages:** ${catalog.pageCount}`,
      `- **Menu candidates:** ${catalog.menuCount}`,
      ``,
      `Next: \`npm run map\` → feature fragments under \`features/\`.`,
      ``,
      `| id | menu | fields | labels |`,
      `|----|------|--------|--------|`,
      ...catalog.pages.map(
        (p) =>
          `| ${p.id} | ${p.menuText} | ${p.fieldCount} | ${p.labelCount} |`,
      ),
      ``,
    ].join("\n"),
    "utf8",
  );

  await browser.close();
  console.log(
    JSON.stringify({
      event: "done",
      pageCount: pages.length,
      outDir,
    }),
  );
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : String(e));
  process.exit(1);
});
