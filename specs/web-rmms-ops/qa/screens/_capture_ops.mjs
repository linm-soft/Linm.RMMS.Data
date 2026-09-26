import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
mkdirSync(outDir, { recursive: true });
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

async function clearSession() {
  await page.goto(base + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.evaluate(() => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {
      /* ignore */
    }
  });
}

async function loginViaSheet() {
  await clearSession();
  await page.goto(base + "/web-rmms-home", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("#guestLogin", { timeout: 15000 });
  await page.locator("#guestLogin").click();
  await page.waitForSelector('#loginUser, [data-zone="SH-02"] input', { timeout: 15000 });
  const userSel = (await page.locator("#loginUser").count())
    ? "#loginUser"
    : '[data-zone="SH-02"] input[type="text"], [data-zone="SH-02"] input:not([type="password"])';
  const passSel = (await page.locator("#loginPass").count())
    ? "#loginPass"
    : '[data-zone="SH-02"] input[type="password"]';
  await page.fill(userSel, user);
  await page.fill(passSel, password);
  const submit = page.locator("#loginSubmit, [data-zone='SH-02'] button[type='submit']").first();
  await submit.click({ force: true });
  await page.waitForTimeout(2200);
  await page
    .waitForSelector(
      '[data-feature="web-rmms-home"][data-mode="staff"] #gridSupervise, [data-mode="staff"] #walletAsset',
      { timeout: 25000 },
    )
    .catch(() => {});
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-ops"], [data-feature="web-rmms-home"], [data-feature="web-rmms-shell"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) => el.getAttribute("data-zone"));
    const fields = [...document.querySelectorAll("[data-field]")].map((el) => el.getAttribute("data-field"));
    const text = (document.body?.innerText || "").slice(0, 800).replace(/\s+/g, " ");
    return {
      feature: root?.getAttribute("data-feature") || null,
      mode: root?.getAttribute("data-mode") || null,
      zones: [...new Set(zones)],
      fields: [...new Set(fields)],
      text,
      href: location.href,
    };
  });
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 20000 });
    await page.waitForTimeout(1200);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    const dump = await dumpZones();
    results.push({ id, result: "PASS", screenshot: file, href: page.url(), dump });
  } catch (err) {
    try {
      await page.screenshot({ path: abs, fullPage: true });
    } catch {
      /* ignore */
    }
    let dump = null;
    try {
      dump = await dumpZones();
    } catch {
      /* ignore */
    }
    results.push({
      id,
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
      dump,
    });
  }
}

try {
  // S0 — guest ops OP-00/01/06 guestGate
  await clearSession();
  await page.goto(base + "/web-rmms-ops", { waitUntil: "domcontentloaded", timeout: 60000 });
  await captureCurrent(
    "S0",
    '[data-feature="web-rmms-ops"][data-zone="OP-00"], #opsGuestGate, #opsGuestLogin, #opsTitle',
  );

  // S1 — staff inbox after LoginSheet · list/empty + chrome OP-01/02
  await loginViaSheet();
  await page.goto(base + "/web-rmms-ops", { waitUntil: "domcontentloaded", timeout: 60000 });
  await captureCurrent(
    "S1",
    '[data-feature="web-rmms-ops"][data-zone="OP-00"] #opsTitle, #opsRefresh, #opsEmpty, [data-zone="OP-03"], #opsLoading',
  );

  // QA-20 — login overlay from guest CTA via home (ops guest → home → SH-02)
  await clearSession();
  await page.goto(base + "/web-rmms-ops", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("#opsGuestLogin, #opsGuestGate", { timeout: 15000 });
  await page.locator("#opsGuestLogin").click();
  await page.waitForTimeout(800);
  // guest CTA navigates home — open LoginSheet
  const onHome = await page.locator("#guestLogin").count();
  if (onHome) {
    await page.locator("#guestLogin").click();
  }
  await captureCurrent("QA-20", '[data-zone="SH-02"] #loginUser, #loginUser, input[name="username"]');
} finally {
  await browser.close();
}

const ok = results.every((s) => s.result === "PASS");
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: base + "/web-rmms-ops",
      capturedAt: new Date().toISOString(),
      method:
        "capture_ops · phone 430 · S0 guest OP-* · S1 staff inbox · QA-20 SH-02 · playwright junction",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
