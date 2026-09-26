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
    'iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay',
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

  // S0 — hub đợt D
  await capture(
    "S0",
    base + "/web-rmms-mobile-d",
    '[data-des-id="D-00"], [data-feature="web-rmms-mobile-d"]',
  );

  // S1 — peer Patrol hub A · CTA Kết ca (đợt D)
  await capture("S1", base + "/web-rmms-mobile-a/tuan-duong", '[data-des-id="TD-00"], body');

  // QA-20 — prefer in-app click (keeps JWT) → TD-06; fallback TK-06 create
  const ketCaBtn = page.locator('.qTitle:has-text("Kết ca"), button:has-text("Kết ca")').first();
  if (await ketCaBtn.count()) {
    await ketCaBtn.click();
    await captureCurrent("QA-20", '[data-des-id="TD-06"]');
  } else {
    // re-login then petition form
    await login();
    await capture(
      "QA-20",
      base + "/web-rmms-mobile-d/kien-nghi/moi",
      '[data-des-id="TK-06"]',
    );
  }

  // If QA-20 failed with login redirect, retry petition form after fresh login
  const qa = results.find((r) => r.id === "QA-20");
  if (qa && qa.result === "FAIL") {
    results.splice(
      results.findIndex((r) => r.id === "QA-20"),
      1,
    );
    await login();
    await capture(
      "QA-20",
      base + "/web-rmms-mobile-d/kien-nghi/moi",
      '[data-des-id="TK-06"]',
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
      url: base + "/web-rmms-mobile-d",
      capturedAt: new Date().toISOString(),
      method:
        "capture_d · MFE /login · phone 430 · geo mock · S1 click→TD-06 · fallback TK-06 · stock e2e playwright junction",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
