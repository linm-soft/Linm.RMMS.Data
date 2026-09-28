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
        "[data-feature='web-rmms-vis-capture'], #VIS, #sc-vis-capture, #visGuestGate, #loginUser",
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
  // Home SSOT: `/` → `/m/trang-chu` · guest CTA → `/m/dang-nhap` (LG-00 · #f-user/#f-pass)
  await page.goto(base + "/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector("#guestLogin", { timeout: 20000 });
  await page.locator("#guestLogin").click();
  await page.waitForSelector("#f-user, #loginUser", { timeout: 20000 });
  if (await page.locator("#f-user").count()) {
    await page.fill("#f-user", user);
    await page.fill("#f-pass", password);
    await page.locator("#btn-login").click({ force: true });
  } else {
    await page.fill("#loginUser", user);
    await page.fill("#loginPass", password);
    await page.locator("#loginSubmit").click({ force: true });
  }
  await page.waitForTimeout(3000);
  await page
    .waitForFunction(
      () => {
        const href = location.href || "";
        const t = document.body?.innerText || "";
        return (
          !/\/dang-nhap/i.test(href) &&
          (/Đăng xuất|Cán bộ|Khách/i.test(t) || !!document.querySelector('[data-feature="web-rmms-home"], [data-feature="trang-chu"]'))
        );
      },
      { timeout: 30000 },
    )
    .catch(() => {});
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-vis-capture"], [data-feature="web-rmms-home"], [data-feature="web-rmms-shell"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const des = [...document.querySelectorAll("[data-des-id]")].map((el) =>
      el.getAttribute("data-des-id"),
    );
    const ids = [
      "VIS",
      "sc-vis-capture",
      "visGuestGate",
      "visGuestLogin",
      "screenTitle",
      "sectionPhoto",
      "photos",
      "slot-camera",
      "rowLoc",
      "rowAcc",
      "rowClass",
      "rowSev",
      "detect",
      "btnAttach",
      "btnSkip",
      "gpsBanner",
      "modalGps",
      "validationBanner",
      "loginUser",
      "loginPass",
      "loginSubmit",
      "f-user",
      "f-pass",
      "btn-login",
      "guestLogin",
    ].filter((id) => document.getElementById(id));
    const text = (document.body?.innerText || "").slice(0, 1400).replace(/\s+/g, " ");
    const guestGate = /Đăng nhập để dùng Nhận diện sự cố/i.test(text);
    const titleOk = /Nhận diện sự cố/i.test(text);
    const detectDisabled = (() => {
      const el = document.getElementById("detect");
      return el ? el.disabled === true || el.hasAttribute("disabled") : null;
    })();
    const attachDisabled = (() => {
      const el = document.getElementById("btnAttach");
      return el ? el.disabled === true || el.hasAttribute("disabled") : null;
    })();
    const hasValidationBanner = !!document.getElementById("validationBanner");
    return {
      feature: root?.getAttribute("data-feature") || null,
      zones: [...new Set(zones)],
      des: [...new Set(des)],
      ids,
      text,
      href: location.href,
      guestGate,
      titleOk,
      detectDisabled,
      attachDisabled,
      hasValidationBanner,
    };
  });
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 25000 });
    await page.waitForTimeout(1400);
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

const VIS = "/chup-hien-truong";

try {
  // S0 — guest gate VIS (ROUTE-01)
  pageErrors.length = 0;
  await clearSession();
  await page.goto(base + VIS, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent(
    "S0",
    "[data-feature='web-rmms-vis-capture'] #visGuestGate, #visGuestGate",
  );

  // QA-20 — Login page LG-00 (supersedes SH-02 sheet for guest CTA)
  pageErrors.length = 0;
  try {
    await clearSession();
    await page.goto(base + "/", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await page.waitForSelector("#guestLogin", { timeout: 25000 });
    await page.locator("#guestLogin").click();
    await captureCurrent(
      "QA-20",
      "#f-user, #loginUser, [data-zone='LG-00'], [data-zone='SH-02']",
    );
  } catch (err) {
    results.push({
      id: "QA-20",
      result: "FAIL",
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
    });
  }

  // S1 — staff VIS surface after LoginSheet · Pattern B idle-on
  pageErrors.length = 0;
  try {
    await loginViaSheet();
    await page.goto(base + VIS, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await captureCurrent(
      "S1",
      "[data-feature='web-rmms-vis-capture'] #sc-vis-capture, #sc-vis-capture",
    );
  } catch (err) {
    results.push({
      id: "S1",
      result: "FAIL",
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
    });
  }

  // Mode dumps — Pattern B + prior GPS/Acc/SESS
  const modeCases = [
    { id: "MODE-banner", path: VIS + "?banner=1", wait: "#validationBanner, #sc-vis-capture" },
    { id: "MODE-gps-deny", path: VIS + "?gps=deny", wait: "#modalGps, #gpsBanner, #sc-vis-capture" },
    { id: "MODE-acc-45", path: VIS + "?acc=45", wait: "#sc-vis-capture" },
    { id: "MODE-nophoto", path: VIS + "?nophoto=1", wait: "#sc-vis-capture" },
    { id: "MODE-nosession", path: VIS + "?nosession=1", wait: "#sc-vis-capture" },
  ];
  for (const m of modeCases) {
    pageErrors.length = 0;
    await page.goto(base + m.path, { waitUntil: "domcontentloaded", timeout: 60000 });
    await captureCurrent(m.id, m.wait);
  }
} finally {
  await browser.close();
}

const core = results.filter((r) => ["S0", "S1", "QA-20"].includes(r.id));
const summary = {
  feature: "web-rmms-vis-capture",
  cases: results,
  corePass: core.every((r) => r.result === "PASS") && core.length === 3,
  pass: results.every((r) => r.result === "PASS"),
  at: new Date().toISOString(),
};
writeFileSync(join(outDir, "_capture_vis.result.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (!summary.corePass) process.exit(1);
