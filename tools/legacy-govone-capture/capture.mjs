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

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOOL_ROOT = __dirname;
const DATA_ROOT = resolve(TOOL_ROOT, "../..");

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
        "button, a.btn, input[type=submit], input[type=button], .btn, [role=button]",
      ),
    ]
      .map((el) => textOf(el) || el.getAttribute("value") || "")
      .filter(Boolean)
      .slice(0, 150);
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

async function collectMenuCandidates(page) {
  return page.evaluate(() => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const seen = new Set();
    const out = [];
    const push = (text, href, kind) => {
      const t = (text || "").replace(/\s+/g, " ").trim();
      if (!t || t.length > 100) return;
      const key = `${t}|${href || ""}`;
      if (seen.has(key)) return;
      seen.add(key);
      out.push({ text: t, href: href || "", kind });
    };
    for (const a of document.querySelectorAll("a[href]")) {
      const href = a.href || "";
      if (!href || href.startsWith("javascript:") || href.includes("logout")) continue;
      push(textOf(a), href, "link");
    }
    for (const el of document.querySelectorAll(
      "[role=treeitem], .dxm-item, .tree-node, .MenuItem, li[data-key]",
    )) {
      push(textOf(el).split("\n")[0], "", "tree");
    }
    return out.slice(0, 400);
  });
}

async function tryLogin(page, baseUrl, user, pass) {
  const appsUrl = `${baseUrl.replace(/\/$/, "")}${env("GOVONE_APPS_PATH", "/apps.aspx")}`;
  await page.goto(appsUrl, { waitUntil: "domcontentloaded", timeout: 60_000 });

  const userSel = env(
    "GOVONE_USER_SELECTOR",
    'input[type="text"], input[name*="User"], input[id*="User"], input[name*="Login"], input[id*="txt"]',
  );
  const passSel = env("GOVONE_PASS_SELECTOR", 'input[type="password"]');
  const submitSel = env(
    "GOVONE_SUBMIT_SELECTOR",
    'input[type="submit"], button[type="submit"], button:has-text("Đăng nhập"), input[value*="Đăng"]',
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

  const maxPages = Number(env("GOVONE_MAX_PAGES", "80")) || 80;
  const maxMenu = Number(env("GOVONE_MAX_MENU", "120")) || 120;
  const headless = boolEnv("GOVONE_HEADLESS", true);

  console.log(
    JSON.stringify({
      event: "start",
      baseUrl,
      outDir,
      userSet: Boolean(user),
      passLen: pass.length,
      maxPages,
      headless,
    }),
  );

  const browser = await chromium.launch({ headless });
  const context = await browser.newContext({
    locale: "vi-VN",
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const login = await tryLogin(page, baseUrl, user, pass);
  console.log(JSON.stringify({ event: "login", ...login, user: "[REDACTED]" }));

  const menu = (await collectMenuCandidates(page)).slice(0, maxMenu);
  writeFileSync(
    join(outDir, "menu-candidates.json"),
    JSON.stringify({ capturedAt: nowIso(), count: menu.length, menu }, null, 2),
    "utf8",
  );

  const visited = new Set();
  const pages = [];
  const queue = [];

  // Seed: current shell + unique hrefs from menu
  queue.push({
    text: "(shell)",
    href: page.url(),
    kind: "shell",
  });
  for (const m of menu) {
    if (m.href && m.href.startsWith("http")) queue.push(m);
  }

  while (queue.length && pages.length < maxPages) {
    const item = queue.shift();
    const key = item.href || item.text;
    if (visited.has(key)) continue;
    visited.add(key);

    try {
      if (item.href && item.href.startsWith("http")) {
        await page.goto(item.href, {
          waitUntil: "domcontentloaded",
          timeout: 45_000,
        });
      } else if (item.text && item.text !== "(shell)") {
        // Click by text in nav (WebForms postback)
        const clickable = page
          .getByRole("link", { name: item.text, exact: true })
          .or(page.locator(`text=${item.text}`).first());
        if (await clickable.first().isVisible({ timeout: 2000 }).catch(() => false)) {
          await clickable.first().click({ timeout: 10_000 });
          await page.waitForLoadState("domcontentloaded").catch(() => {});
          await page.waitForTimeout(800);
        } else {
          continue;
        }
      }

      const inv = await extractPageInventory(page);
      const id = `${String(pages.length + 1).padStart(3, "0")}-${slugify(item.text || inv.title)}`;
      const record = {
        id,
        menuText: item.text,
        kind: item.kind,
        href: item.href || null,
        finalUrl: page.url(),
        capturedAt: nowIso(),
        ...inv,
      };
      pages.push(record);
      writeFileSync(
        join(pagesDir, `${id}.json`),
        JSON.stringify(record, null, 2),
        "utf8",
      );

      if (boolEnv("GOVONE_SCREENSHOTS", true)) {
        await page.screenshot({
          path: join(shotDir, `${id}.png`),
          fullPage: false,
        });
      }

      // Expand menu from this page
      const more = await collectMenuCandidates(page);
      for (const m of more) {
        const k = m.href || m.text;
        if (!visited.has(k) && queue.length < maxMenu * 2) queue.push(m);
      }

      console.log(
        JSON.stringify({
          event: "page",
          id,
          menuText: item.text,
          fields: inv.fields.length,
          labels: inv.labels.length,
        }),
      );
    } catch (e) {
      console.log(
        JSON.stringify({
          event: "page_error",
          menuText: item.text,
          error: e instanceof Error ? e.message : String(e),
        }),
      );
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
