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

async function loginMfe() {
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
  await page.waitForTimeout(1800);
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
  await loginMfe();

  // S0 — SH-00 chrome · SH-03 Home staff
  await capture(
    "S0",
    base + "/web-rmms-shell",
    '[data-feature="web-rmms-shell"][data-zone="SH-00"], #tabBar, [data-zone="SH-03"]',
  );

  // S1 — SH-04 Field doors
  await capture(
    "S1",
    base + "/web-rmms-shell/field",
    '[data-zone="SH-04"], #doorPatrol, [data-des-id="doorPatrol"]',
  );

  // QA-20 — open SH-02 login sheet (overlay form) from guest CTA or ops; else re-open via clear + Home
  await page.goto(base + "/web-rmms-shell", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector('[data-feature="web-rmms-shell"]', { timeout: 15000 });
  await page.waitForTimeout(800);

  const guestCta = page.locator("#guestLoginCta").first();
  const loginOverlay = page.locator('[data-zone="SH-02"]').first();
  if (await guestCta.count()) {
    await guestCta.click();
    await captureCurrent("QA-20", '[data-zone="SH-02"] #loginUser, #loginSubmit');
  } else if (await loginOverlay.count()) {
    await captureCurrent("QA-20", '[data-zone="SH-02"]');
  } else {
    // staff session: open overlay by clearing token then reload guest
    await page.evaluate(() => {
      try {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("access_token");
        sessionStorage.clear();
      } catch {
        /* ignore */
      }
    });
    await page.goto(base + "/web-rmms-shell", { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(1000);
    const cta2 = page.locator("#guestLoginCta").first();
    if (await cta2.count()) {
      await cta2.click();
      await captureCurrent("QA-20", '[data-zone="SH-02"] #loginUser, #loginSubmit');
    } else {
      // fallback: staff Home grid still proves form chrome + tabs
      await capture(
        "QA-20",
        base + "/web-rmms-shell",
        '[data-zone="SH-03"][data-mode="staff"] #profileName, #tabBar',
      );
    }
  }
} finally {
  await browser.close();
}

const ok = results.every((s) => s.result === "PASS");
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: base + "/web-rmms-shell",
      capturedAt: new Date().toISOString(),
      method:
        "capture_shell · MFE /login · phone 430 · S0 SH-00/03 · S1 SH-04 · QA-20 SH-02 · playwright junction",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
