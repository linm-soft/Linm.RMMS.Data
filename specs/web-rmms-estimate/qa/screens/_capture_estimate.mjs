import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const feature = "web-rmms-estimate";
/** Live demo incident — EST-OPEN / EST-EDIT after from-incident */
const DEMO_INCIDENT = "3e0eac06-9253-4d61-8b2c-ea427f571c31";
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
const password =
  process.env.QLBD_PASSWORD || process.env.E2E_PASSWORD || rulesCred.password || "";
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

/** Dev server deep-link returns 404 HTML — fulfill document nav with index. */
await page.route(/http:\/\/localhost:9301(\/[^?]*)?(\?.*)?$/, async (route) => {
  const req = route.request();
  if (req.resourceType() !== "document") {
    await route.continue();
    return;
  }
  const url = req.url();
  if (/\/(linm-rmms-mobile\.js|index\.html)(\?|$)/.test(url) || /\.[a-z0-9]+(\?|$)/i.test(url)) {
    await route.continue();
    return;
  }
  const r = await page.request.get(base + "/");
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: await r.text(),
  });
});

async function dismissOverlay(p) {
  await p
    .evaluate(() => {
      document
        .querySelectorAll(
          "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
        )
        .forEach((el) => el.remove());
    })
    .catch(() => {});
}

async function fatalUi(p) {
  await dismissOverlay(p);
  const overlay = p.locator(
    "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
  );
  if (await overlay.count()) {
    const vis = await overlay.first().isVisible().catch(() => false);
    const featureOk = await p
      .locator(
        `[data-feature='${feature}'], [data-zone='EST-EMPTY'], [data-zone='EST-OPEN'], #loginUser`,
      )
      .count();
    if (vis && featureOk === 0) return "webpack overlay";
  }
  const t = await p.locator("body").innerText().catch(() => "");
  if (
    /Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(
      t,
    )
  ) {
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
  await page.goto(base + "/web-rmms-home", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector("#guestLogin", { timeout: 20000 });
  await page.locator("#guestLogin").click();
  await page.waitForSelector("#loginUser, [data-zone='SH-02'] input", {
    timeout: 15000,
  });
  const userSel = (await page.locator("#loginUser").count())
    ? "#loginUser"
    : '[data-zone="SH-02"] input[type="text"], [data-zone="SH-02"] input:not([type="password"])';
  const passSel = (await page.locator("#loginPass").count())
    ? "#loginPass"
    : '[data-zone="SH-02"] input[type="password"]';
  await page.fill(userSel, user);
  await page.fill(passSel, password);
  await page
    .locator("#loginSubmit, [data-zone='SH-02'] button[type='submit']")
    .first()
    .click({ force: true });
  await page.waitForTimeout(2500);
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
      '[data-feature="web-rmms-estimate"], [data-feature="web-rmms-home"], [data-feature="web-rmms-shell"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const fields = [...document.querySelectorAll("[data-field]")].map((el) =>
      el.getAttribute("data-field"),
    );
    const controls = [...document.querySelectorAll("[data-control]")].map((el) =>
      el.getAttribute("data-control"),
    );
    const ids = ["loginUser", "loginPass", "loginSubmit", "guestLogin"].filter((id) =>
      document.getElementById(id),
    );
    const text = (document.body?.innerText || "").slice(0, 1600).replace(/\s+/g, " ");
    const woDisabled = !!document.querySelector(
      '[data-field="action.wo"][disabled], [data-zone="EST-WO"] button[disabled], button[data-field="action.wo"][disabled]',
    );
    return {
      feature: root?.getAttribute("data-feature") || null,
      zones: [...new Set(zones)],
      fields: [...new Set(fields)],
      controls: [...new Set(controls)],
      ids,
      text,
      href: location.href,
      woDisabled,
    };
  });
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 25000 });
    await page.waitForTimeout(1600);
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
  // S0 — guest EST-EMPTY (STD-MOUNT thiếu incidentId)
  pageErrors.length = 0;
  await clearSession();
  await page.goto(base + "/web-rmms-estimate", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent(
    "S0",
    "[data-feature='web-rmms-estimate'] [data-zone='EST-EMPTY'], [data-feature='web-rmms-estimate'][data-zone='EST-00'], [data-zone='EST-EMPTY']",
  );

  // QA-20 — LoginSheet SH-02 from Home guest
  pageErrors.length = 0;
  await clearSession();
  await page.goto(base + "/web-rmms-home", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector("#guestLogin", { timeout: 20000 });
  await page.locator("#guestLogin").click();
  await captureCurrent("QA-20", "#loginUser, [data-zone='SH-02']");

  // S1 — staff EST-F + ?incidentId= → header + EST-OPEN (or EST-EDIT if estimate exists)
  pageErrors.length = 0;
  await loginViaSheet();
  await page.goto(
    base + "/web-rmms-estimate?incidentId=" + encodeURIComponent(DEMO_INCIDENT),
    { waitUntil: "domcontentloaded", timeout: 60000 },
  );
  await page.waitForSelector(
    "[data-feature='web-rmms-estimate'] [data-zone='header.incident'], [data-zone='EST-OPEN'], [data-zone='EST-EDIT'], [data-zone='EST-LOCK']",
    { timeout: 25000 },
  );
  await page.waitForTimeout(1200);
  await dismissOverlay(page);
  await captureCurrent(
    "S1",
    "[data-feature='web-rmms-estimate'] [data-zone='header.incident'], [data-zone='EST-OPEN'], [data-zone='EST-EDIT']",
  );
} finally {
  await browser.close();
}

const summary = {
  feature,
  cases: results,
  pass: results.every((r) => r.result === "PASS"),
  at: new Date().toISOString(),
};
writeFileSync(join(outDir, "_capture_estimate.result.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (!summary.pass) process.exit(1);
