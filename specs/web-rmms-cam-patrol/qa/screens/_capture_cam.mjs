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
        "#cpGuestGate, #sc-cam-patrol, [data-feature='web-rmms-cam-patrol'], #guestLogin, #f-user, #loginUser",
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
  await page.goto(base + "/trang-chu", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await dismissOverlay(page);
  await page.waitForSelector("#guestLogin, [data-field='guestLoginCta']", {
    timeout: 30000,
  });
  await page.locator("#guestLogin, [data-field='guestLoginCta']").first().click({ force: true });
  await page.waitForSelector("#f-user, #loginUser", { timeout: 20000 });
  const userSel = (await page.locator("#f-user").count()) ? "#f-user" : "#loginUser";
  const passSel = (await page.locator("#f-pass").count()) ? "#f-pass" : "#loginPass";
  await page.fill(userSel, user);
  await page.fill(passSel, password);
  await page.locator("#btn-login, #loginSubmit").first().click({ force: true });
  await page.waitForTimeout(2500);
  await page
    .waitForSelector(
      "#gridSupervise, [data-mode='staff'] #walletAsset, #profileName",
      { timeout: 25000 },
    )
    .catch(() => {});
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-cam-patrol"], [data-feature="web-rmms-home"], [data-feature="web-rmms-shell"], #meRoot, #f-user',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const des = [...document.querySelectorAll("[data-des-id]")].map((el) =>
      el.getAttribute("data-des-id"),
    );
    const ids = [
      "cpGuestGate",
      "cpGuestLogin",
      "sc-cam-patrol",
      "mainCam",
      "finder",
      "stampRoute",
      "stampGps",
      "btnDetect",
      "detectCard",
      "btnConfirm",
      "btnSkip",
      "validationBanner",
      "emptyNoSession",
      "modalGps",
      "loginUser",
      "loginPass",
      "loginSubmit",
      "f-user",
      "f-pass",
      "btn-login",
      "guestLogin",
    ].filter((id) => document.getElementById(id));
    const text = (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " ");
    const scoreLeak =
      /%|\bscore\b|\bđiểm\b\s*\d/i.test(text) && /nhận diện|phát hiện|detect/i.test(text);
    const detectBtn = document.getElementById("btnDetect");
    const confirmBtn = document.getElementById("btnConfirm");
    return {
      feature: root?.getAttribute?.("data-feature") || null,
      zones: [...new Set(zones)],
      des: [...new Set(des)],
      ids,
      text,
      href: location.href,
      scoreLeak: !!scoreLeak,
      patternB: {
        validationBanner:
          !!document.getElementById("validationBanner") ||
          !!document.querySelector('[data-des-id="DES-MOB-CAM-VALIDATION"]'),
        detectDisabledIdle: detectBtn ? !!detectBtn.disabled : null,
        confirmDisabledIdle: confirmBtn ? !!confirmBtn.disabled : null,
      },
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

try {
  // S0 — guest CP-01 gate
  pageErrors.length = 0;
  try {
    await clearSession();
    await page.goto(base + "/camera-tuan", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await captureCurrent("S0", "#cpGuestGate, #CP-01, [data-feature='web-rmms-cam-patrol']");
  } catch (err) {
    results.push({
      id: "S0",
      result: "FAIL",
      error: err instanceof Error ? err.message : String(err),
    });
  }

  // QA-20 — Login page from Home guest CTA (shell /trang-chu → /dang-nhap)
  pageErrors.length = 0;
  try {
    await clearSession();
    await page.goto(base + "/trang-chu", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await dismissOverlay(page);
    await page.waitForSelector("#guestLogin, [data-field='guestLoginCta']", {
      timeout: 30000,
    });
    await page.locator("#guestLogin, [data-field='guestLoginCta']").first().click({ force: true });
    await captureCurrent("QA-20", "#f-user, #loginUser, [data-zone='SH-02']");
  } catch (err) {
    const file = shotName("QA-20");
    try {
      await page.screenshot({ path: join(outDir, file), fullPage: true });
    } catch {
      /* ignore */
    }
    results.push({
      id: "QA-20",
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
    });
  }

  // S1 — staff cam after login
  pageErrors.length = 0;
  try {
    await loginViaSheet();
    await page.goto(base + "/camera-tuan", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await captureCurrent(
      "S1",
      "#sc-cam-patrol, #mainCam, #emptyNoSession, #cpLoading, [data-feature='web-rmms-cam-patrol']",
    );
  } catch (err) {
    const file = shotName("S1");
    try {
      await page.screenshot({ path: join(outDir, file), fullPage: true });
    } catch {
      /* ignore */
    }
    results.push({
      id: "S1",
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
    });
  }
} finally {
  await browser.close();
}

const summary = {
  feature: "web-rmms-cam-patrol",
  cases: results,
  pass: results.every((r) => r.result === "PASS"),
  at: new Date().toISOString(),
};
writeFileSync(join(outDir, "_capture_cam.result.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (!summary.pass) process.exit(1);
