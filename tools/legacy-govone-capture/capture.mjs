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
import {
  clickAllTabsAndMenus,
  clickCreateAndCaptureForm,
  clickInnerItem,
  clickSafe,
  collectLeftRailMenus,
  collectTabs,
  collectTopMenus,
  dismissFormOverlay,
  findCreateActions,
  isForbiddenClickLabel,
} from "./deep-crawl.mjs";
import {
  resolveMasterSlug,
  writeCaptureLeaf,
} from "./capture-paths.mjs";

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
    const short = (s, n = 80) => {
      const t = (s || "").replace(/\s+/g, " ").trim();
      return t.length > n ? `${t.slice(0, n)}…` : t;
    };
    const zoneOf = (el) => {
      let p = el;
      for (let i = 0; i < 8 && p; i += 1) {
        const c = `${p.className || ""} ${p.id || ""}`.toLowerCase();
        if (/toolbar|tool-bar|dxm-main|action-bar/.test(c)) return "toolbar";
        if (/sidebar|side-nav|tree|menu-left|leftnav/.test(c)) return "sidebar";
        if (/footer|status-bar|bottom/.test(c)) return "footer";
        if (/header|navbar|top-bar|page-title/.test(c)) return "header";
        if (/modal|dialog|popup|overlay/.test(c)) return "modal";
        if (/grid|datagrid|table|dxgv/.test(c)) return "grid";
        if (/filter|search-bar|form-filter/.test(c)) return "filter";
        p = p.parentElement;
      }
      return "content";
    };
    const inferActionKind = (label, el) => {
      const t = (label || "").toLowerCase();
      const type = (el.getAttribute("type") || "").toLowerCase();
      if (type === "submit" || /lưu|save|ghi|cập nhật|update|xác nhận|confirm/.test(t)) {
        return "submit";
      }
      if (/xóa|delete|hủy|cancel|bỏ|remove/.test(t)) return "destructive";
      if (/thêm|tạo|new|add|create|\+/.test(t)) return "create";
      if (/sửa|edit|chỉnh/.test(t)) return "edit";
      if (/xem|view|chi tiết|detail/.test(t)) return "view";
      if (/tìm|search|lọc|filter|làm mới|refresh/.test(t)) return "filter";
      if (/xuất|export|excel|in |print/.test(t)) return "export";
      if (/import|nhập/.test(t)) return "import";
      if (/đóng|close|thoát/.test(t)) return "close";
      if (el.tagName === "A" || el.getAttribute("href")) return "nav";
      return "action";
    };

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
        zone: zoneOf(el),
      }))
      .filter((f) => f.type !== "hidden")
      .slice(0, 300);

    // Toàn bộ button / action clickable (không chỉ class .btn)
    const actionSel = [
      "button",
      "a[href]",
      "input[type=submit]",
      "input[type=button]",
      "input[type=image]",
      "[role=button]",
      "[onclick]",
      "[ng-click]",
      "[data-action]",
      ".btn",
      ".button",
      ".dxbButton",
      ".dxm-item",
      ".dxm-content",
      ".toolbar button",
      ".toolbar a",
      "[class*=Toolbar] button",
      "[class*=toolbar] a",
      "[class*=Action] button",
      "[class*=action] a",
      ".nav-link",
      ".menu-item",
      ".sidebar a",
      "aside a",
      "[class*=IconButton]",
      "img[onclick]",
    ].join(", ");

    const seenAct = new Set();
    const actions = [];
    for (const el of document.querySelectorAll(actionSel)) {
      const label =
        short(textOf(el))
        || short(el.getAttribute("value") || "")
        || short(el.getAttribute("title") || "")
        || short(el.getAttribute("aria-label") || "")
        || short(el.getAttribute("alt") || "")
        || short(el.getAttribute("data-action") || "");
      if (!label || label.length > 100) continue;
      if (/^https?:\/\//i.test(label)) continue;
      const href = el.getAttribute("href") || "";
      if (/^(mailto:|tel:|javascript:void)/i.test(href)) continue;
      const zone = zoneOf(el);
      const kind = inferActionKind(label, el);
      const key = `${zone}|${kind}|${label}|${el.tagName}`;
      if (seenAct.has(key)) continue;
      seenAct.add(key);
      actions.push({
        label,
        kind,
        zone,
        tag: el.tagName.toLowerCase(),
        type: el.getAttribute("type") || "",
        href: href.startsWith("javascript:") ? "" : href.slice(0, 120),
        id: el.id || "",
        name: el.getAttribute("name") || "",
        title: short(el.getAttribute("title") || "", 60),
        disabled: Boolean(el.disabled || el.getAttribute("aria-disabled") === "true"),
        hasOnClick: Boolean(el.getAttribute("onclick") || el.getAttribute("ng-click")),
      });
      if (actions.length >= 400) break;
    }

    // Backward-compat: flat button labels
    const buttons = [...new Set(actions.map((a) => a.label))].slice(0, 300);

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

    const actionsByZone = {};
    for (const a of actions) {
      if (!actionsByZone[a.zone]) actionsByZone[a.zone] = [];
      actionsByZone[a.zone].push(a.label);
    }

    const title = document.title || "";
    const bodySample = textOf(document.body).replace(/\s+/g, " ").slice(0, 4000);
    return {
      title,
      headings,
      labels,
      fields,
      buttons,
      actions,
      actionsByZone,
      actionCount: actions.length,
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
  const captureRoot = join(outDir, "capture");
  mkdirSync(pagesDir, { recursive: true });
  mkdirSync(captureRoot, { recursive: true });
  if (boolEnv("GOVONE_SCREENSHOTS", true)) mkdirSync(shotDir, { recursive: true });

  const slugRules = (() => {
    try {
      return JSON.parse(
        readFileSync(join(TOOL_ROOT, "menu-slug-map.json"), "utf8"),
      ).rules;
    } catch {
      return [];
    }
  })();

  const mode = captureMode();
  const deep = mode === "deep" || mode === "full";
  const defaultMax = mode === "full" ? "200" : deep ? "120" : "80";
  const maxPages = Number(env("GOVONE_MAX_PAGES", defaultMax)) || 80;
  const maxMenu = Number(env("GOVONE_MAX_MENU", mode === "full" ? "200" : "120")) || 120;
  // Left-rail: full scan — default cao hơn
  const maxInner = Number(env("GOVONE_MAX_INNER", mode === "full" ? "80" : "50")) || 50;
  const maxCreate = Number(env("GOVONE_MAX_CREATE", "4")) || 4;
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

      const masterSlug =
        item.kind === "app-tile" || item.kind === "shell"
          ? resolveMasterSlug(item.text === "(apps-shell)" ? "shell" : item.text, slugRules)
          : resolveMasterSlug(item.text, slugRules);

      const saveLeaf = async ({
        menuText,
        kind,
        viaKind,
        target,
        url,
        pageKey,
        actionKey,
        formSample,
        masterTitle,
        pageTitle,
      }) => {
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
          masterTitle: masterTitle || item.text,
          pageTitle: pageTitle || pageKey,
          formSample: formSample || null,
          ...inv,
        };

        let shotBuf = null;
        if (boolEnv("GOVONE_SCREENSHOTS", true)) {
          const shotPage =
            active && typeof active.screenshot === "function" ? active : page;
          shotBuf = await shotPage.screenshot({ fullPage: false }).catch(() => null);
          if (shotBuf) {
            writeFileSync(join(shotDir, `${id}.png`), shotBuf);
          }
        }

        const leaf = writeCaptureLeaf({
          captureRoot,
          master: masterSlug,
          page: pageKey || "_root",
          action: actionKey || "view",
          record,
          screenshotBuf: shotBuf || undefined,
        });
        record.capturePath = leaf.rel;

        pages.push(record);
        writeFileSync(
          join(pagesDir, `${id}.json`),
          JSON.stringify(record, null, 2),
          "utf8",
        );

        console.log(
          JSON.stringify({
            event: "page",
            id,
            path: leaf.rel,
            menuText,
            via: viaKind,
            fields: inv.fields.length,
            labels: inv.labels.length,
            actions: inv.actionCount ?? inv.actions?.length ?? 0,
            formSample: Boolean(formSample),
            url: redactUrl(url),
          }),
        );
        return record;
      };

      // master/_root/view
      await saveLeaf({
        menuText: item.text,
        kind: item.kind,
        viaKind: via,
        target: invTarget,
        url: finalUrl,
        pageKey: "_root",
        actionKey: "view",
        masterTitle: item.text,
        pageTitle: "_root",
      });

      /** Tabs + top menus + Add (no Save) trên page hiện tại. */
      const exploreChromeAndAdd = async (pageKey, pageTitle) => {
        if (!deep || !active || active.isClosed?.()) return;

        const chrome = await clickAllTabsAndMenus(active, {
          maxTabs: mode === "full" ? 24 : 16,
          maxMenus: mode === "full" ? 18 : 12,
        });
        const reloadCount = chrome.log.filter((x) => x.reloaded).length;
        if (chrome.tabs || chrome.menus) {
          console.log(
            JSON.stringify({
              event: "chrome",
              master: masterSlug,
              page: pageKey,
              tabs: chrome.tabs,
              menus: chrome.menus,
              reloads: reloadCount,
            }),
          );
        }

        // Capture mỗi tab đã click (action = tab-{slug})
        for (const entry of chrome.log.filter((x) => x.kind === "tab" && x.ok)) {
          if (pages.length >= maxPages) break;
          const tk = `tab|${masterSlug}|${pageKey}|${entry.label}`;
          if (visited.has(tk)) continue;
          visited.add(tk);
          await saveLeaf({
            menuText: `${item.text} › ${pageTitle} › tab:${entry.label}`,
            kind: "tab",
            viaKind: "tab",
            target: active,
            url: active.url(),
            pageKey,
            actionKey: `tab-${slugify(entry.label)}`,
            masterTitle: item.text,
            pageTitle,
          });
        }

        // Add / Thêm — cấm Save/Submit
        const creates = (await findCreateActions(active))
          .filter((c) => !isForbiddenClickLabel(c.label))
          .slice(0, maxCreate);
        for (const c of creates) {
          if (pages.length >= maxPages) break;
          const ck = `create|${masterSlug}|${pageKey}|${c.label}`;
          if (visited.has(ck)) continue;
          visited.add(ck);

          const opened = await clickCreateAndCaptureForm(active, c.label);
          if (!opened.ok) {
            if (opened.reloaded) {
              console.log(
                JSON.stringify({
                  event: "reload_after_add",
                  master: masterSlug,
                  page: pageKey,
                  label: c.label,
                  reason: opened.reason,
                }),
              );
            }
            continue;
          }

          const formInv = await extractPageInventory(active);
          const formSample = {
            trigger: c.label,
            labels: formInv.labels,
            fields: formInv.fields,
            actions: (formInv.actions || []).filter(
              (a) => !isForbiddenClickLabel(a.label || a.text),
            ),
            headings: formInv.headings,
            note: "Captured form only — did NOT click Save/Submit",
          };

          await saveLeaf({
            menuText: `${item.text} › ${pageTitle} › ${c.label}`,
            kind: "form-sample",
            viaKind: "create",
            target: active,
            url: active.url(),
            pageKey,
            actionKey: /create|new|add|thêm/i.test(c.label)
              ? "create"
              : slugify(c.label),
            formSample,
            masterTitle: item.text,
            pageTitle,
          });

          await dismissFormOverlay(active);
        }
      };

      // Deep: chrome (tabs/menus/add) + left rail → mỗi page lại chrome + create
      if (
        deep
        && item.kind === "app-tile"
        && via === "popup"
        && active !== page
        && !active.isClosed?.()
      ) {
        // GIS / shell: tabs + top menu trên _root trước
        await exploreChromeAndAdd("_root", "_root");

        const rail = (await collectLeftRailMenus(active)).slice(0, maxInner);
        const tabs0 = await collectTabs(active);
        const top0 = await collectTopMenus(active);
        const masterDir = join(captureRoot, masterSlug);
        mkdirSync(masterDir, { recursive: true });
        writeFileSync(
          join(masterDir, "_left-rail.json"),
          JSON.stringify(
            {
              master: masterSlug,
              capturedAt: nowIso(),
              count: rail.length,
              rail,
              tabs: tabs0,
              topMenus: top0,
            },
            null,
            2,
          ),
          "utf8",
        );
        console.log(
          JSON.stringify({
            event: "left_rail",
            master: masterSlug,
            count: rail.length,
            tabs: tabs0.length,
            topMenus: top0.length,
          }),
        );

        for (const nav of rail) {
          if (pages.length >= maxPages) break;
          const ik = `rail|${masterSlug}|${nav.text}`;
          if (visited.has(ik)) continue;
          visited.add(ik);

          const navClick = await clickSafe(active, nav.text, {
            allowListEmpty: true,
            reloadOnEmpty: true,
            expectUiChange: false,
          });
          if (!navClick.ok && !navClick.reloaded) continue;
          if (navClick.reloaded) {
            // Sau reload thử click lại menu
            const again = await clickInnerItem(active, nav.text);
            if (!again) continue;
          }

          await saveLeaf({
            menuText: `${item.text} › ${nav.text}`,
            kind: "left-rail",
            viaKind: "deep",
            target: active,
            url: active.url(),
            pageKey: nav.text,
            actionKey: "view",
            masterTitle: item.text,
            pageTitle: nav.text,
          });

          await exploreChromeAndAdd(nav.text, nav.text);
        }

        // Nếu không có left-rail (vd GIS map-only) — vẫn đã exploreChrome trên _root
        if (rail.length === 0) {
          console.log(
            JSON.stringify({
              event: "no_left_rail",
              master: masterSlug,
              hint: "used tabs/top-menus/add on _root only",
            }),
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
    mode,
    layout: "capture/{master}/{page}/{action}/",
    captureRoot: "capture/",
    pageCount: pages.length,
    menuCount: menu.length,
    formSampleCount: pages.filter((p) => p.formSample || p.kind === "form-sample").length,
    pages: pages.map((p) => ({
      id: p.id,
      capturePath: p.capturePath || null,
      menuText: p.menuText,
      title: p.title,
      kind: p.kind,
      finalUrl: p.finalUrl,
      fieldCount: p.fields?.length ?? 0,
      labelCount: p.labels?.length ?? 0,
      actionCount: p.actionCount ?? p.actions?.length ?? p.buttons?.length ?? 0,
      hasFormSample: Boolean(p.formSample),
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
      `- **Mode:** ${mode}`,
      `- **Layout:** \`capture/{master}/{page}/{action}/\` (inventory.json · screenshot · form-sample)`,
      `- **Leaves:** ${catalog.pageCount} · **form samples:** ${catalog.formSampleCount}`,
      `- **Menu candidates:** ${catalog.menuCount}`,
      ``,
      `Next: \`npm run map\` → feature fragments under \`features/\`.`,
      ``,
      `| id | path | menu | fields | actions | form |`,
      `|----|------|------|--------|---------|------|`,
      ...catalog.pages.map(
        (p) =>
          `| ${p.id} | \`${p.capturePath || "—"}\` | ${p.menuText} | ${p.fieldCount} | ${p.actionCount} | ${p.hasFormSample ? "yes" : ""} |`,
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
      formSampleCount: catalog.formSampleCount,
      captureRoot: join(outDir, "capture"),
      outDir,
    }),
  );
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : String(e));
  process.exit(1);
});
