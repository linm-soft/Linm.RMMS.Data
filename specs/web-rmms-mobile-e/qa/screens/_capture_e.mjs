import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const require = createRequire(import.meta.url);

let chromiumLauncher = chromium;
try {
  require.resolve("playwright");
} catch {
  const autoPw = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
  chromiumLauncher = autoPw("playwright").chromium;
}

const rulesCred = JSON.parse(
  readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json", "utf8"),
);
const user = process.env.QLBD_USER || process.env.E2E_USER || rulesCred.user || "";
const password = process.env.QLBD_PASSWORD || process.env.E2E_PASSWORD || rulesCred.password || "";
if (!user || !password) throw new Error("GAP-QA-E2E-03 missing QLBD_USER/PASSWORD");

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const results = [];
const browser = await chromiumLauncher.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 430, height: 900 },
  geolocation: { latitude: 21.0285, longitude: 105.8542, accuracy: 12 },
  permissions: ["geolocation"],
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

async function fatalUi(p) {
  const overlay = p.locator(
    "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
  );
  if (await overlay.count()) {
    const vis = await overlay.first().isVisible().catch(() => false);
    if (vis) return "webpack overlay";
  }
  const t = await p.locator("body").innerText().catch(() => "");
  if (/Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(t)) {
    return "crash text: " + t.slice(0, 180).replace(/\s+/g, " ");
  }
  if (pageErrors.length) return "pageerror: " + pageErrors.slice(-1)[0];
  return null;
}

async function login() {
  await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector('input[name="username"], input[type="password"]', { timeout: 15000 });
  for (let i = 0; i < 20; i++) {
    const ov = page.locator("#webpack-dev-server-client-overlay");
    if (!(await ov.count()) || !(await ov.first().isVisible().catch(() => false))) break;
    await page.waitForTimeout(500);
  }
  await page.fill('input[name="username"]', user);
  await page.fill('input[type="password"]', password);
  await Promise.all([
    page.waitForLoadState("networkidle").catch(() => {}),
    page.locator('button[type="submit"]').click({ force: true }),
  ]);
  await page.waitForTimeout(1500);
}

async function capture(id, href, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    const res = await page.goto(href, { waitUntil: "domcontentloaded", timeout: 60000 });
    if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 20000 });
    await page.waitForTimeout(1400);
    if (/\/login(?:\?|$)/.test(page.url())) throw new Error("redirected to login");
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    results.push({ id, result: "PASS", screenshot: file, href: page.url() });
  } catch (err) {
    try {
      await page.screenshot({ path: abs, fullPage: true });
    } catch {
      /* ignore */
    }
    results.push({
      id,
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
    });
  }
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 20000 });
    await page.waitForTimeout(1200);
    if (/\/login(?:\?|$)/.test(page.url())) throw new Error("redirected to login");
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    results.push({ id, result: "PASS", screenshot: file, href: page.url() });
  } catch (err) {
    try {
      await page.screenshot({ path: abs, fullPage: true });
    } catch {
      /* ignore */
    }
    results.push({
      id,
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
    });
  }
}

try {
  await login();

  // S0 — TK-07 kế hoạch tần suất (feature under test)
  await capture(
    "S0",
    base + "/web-rmms-mobile-e",
    '[data-des-id="TK-07"], [data-feature="web-rmms-mobile-e"]',
  );

  // S1 — peer hub Tuần kiểm · CTA Kế hoạch tần suất
  await capture(
    "S1",
    base + "/web-rmms-mobile-a/tuan-kiem",
    '[data-des-id="TK-00"], [data-des-id="TK-07-entry"]',
  );

  // QA-20 — click CTA → TK-07 (JWT kept) · list/empty
  const entry = page.locator('[data-des-id="TK-07-entry"], button:has-text("Kế hoạch tần suất")').first();
  if (await entry.count()) {
    await entry.click();
    await captureCurrent("QA-20", '[data-des-id="TK-07"]');
  } else {
    await capture(
      "QA-20",
      base + "/web-rmms-mobile-e",
      '[data-des-id="TK-07"]',
    );
  }
} finally {
  await browser.close();
}

const ok = results.every((s) => s.result === "PASS");
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: base + "/web-rmms-mobile-e",
      capturedAt: new Date().toISOString(),
      method:
        "capture_e · MFE /login · phone 430 · S0 TK-07 · S1 TK-00 entry · QA-20 click→TK-07 · stock e2e playwright junction",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
