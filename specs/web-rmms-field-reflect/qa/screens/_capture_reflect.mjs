import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
/** SSOT mfeStdRoute — cấm /web-rmms-field-reflect */
const reflectPath = "/phan-anh";
const homePath = "/trang-chu";
const loginPath = "/dang-nhap";
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
  geolocation: { latitude: 21.0285, longitude: 105.8542 },
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
        "[data-feature='web-rmms-field-reflect'], #FR-REFLECT, [data-des-id='FR-00'], [data-des-id='FR-01'], [data-feature='login'], #f-user, #loginUser",
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

async function loginViaPage() {
  await clearSession();
  await page.goto(base + loginPath, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector("#f-user, #loginUser", { timeout: 20000 });
  const userSel = (await page.locator("#f-user").count()) ? "#f-user" : "#loginUser";
  const passSel = (await page.locator("#f-pass").count()) ? "#f-pass" : "#loginPass";
  const submitSel = (await page.locator("#btn-login").count())
    ? "#btn-login"
    : "#loginSubmit";
  await page.fill(userSel, user);
  await page.fill(passSel, password);
  await page.locator(submitSel).first().click({ force: true });
  await page.waitForTimeout(2800);
  await page
    .waitForSelector(
      '[data-feature="web-rmms-home"][data-mode="staff"], [data-mode="staff"] #walletAsset, [data-feature="web-rmms-home"]',
      { timeout: 30000 },
    )
    .catch(() => {});
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-field-reflect"], [data-feature="web-rmms-home"], [data-feature="web-rmms-shell"], [data-feature="login"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const des = [...document.querySelectorAll("[data-des-id]")].map((el) =>
      el.getAttribute("data-des-id"),
    );
    const actions = [...document.querySelectorAll("[data-action]")].map((el) =>
      el.getAttribute("data-action"),
    );
    const ids = [
      "FR-REFLECT",
      "loginUser",
      "loginPass",
      "loginSubmit",
      "guestLogin",
      "f-user",
      "f-pass",
      "btn-login",
      "validationBanner",
      "btnDetect",
      "btnCreate",
    ].filter((id) => document.getElementById(id));
    const detectBtn = document.querySelector(
      '[data-action="detect"], #btnDetect, button[data-action="detect"]',
    );
    const createBtn = document.querySelector(
      '[data-action="create"], #btnCreate, button[data-action="create"]',
    );
    const banner = document.querySelector(
      "#validationBanner, [data-action='validationBanner']",
    );
    const text = (document.body?.innerText || "").slice(0, 1400).replace(/\s+/g, " ");
    const guestGate = /Đăng nhập để phản ánh hiện trường/i.test(text);
    return {
      feature: root?.getAttribute("data-feature") || null,
      zones: [...new Set(zones)],
      des: [...new Set(des)],
      actions: [...new Set(actions)],
      ids,
      text,
      href: location.href,
      guestGate,
      detectDisabled: detectBtn ? Boolean(detectBtn.disabled) : null,
      createDisabled: createBtn ? Boolean(createBtn.disabled) : null,
      bannerVisible: banner
        ? banner.getAttribute("hidden") == null &&
          getComputedStyle(banner).display !== "none"
        : false,
      bannerText: banner?.textContent?.slice(0, 400)?.replace(/\s+/g, " ") || "",
    };
  });
}

async function captureCurrent(id, waitSel, assertFn) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 25000 });
    await page.waitForTimeout(1400);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    const dump = await dumpZones();
    if (assertFn) {
      const msg = assertFn(dump);
      if (msg) throw new Error(msg);
    }
    await page.screenshot({ path: abs, fullPage: true });
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
  // S0 — guest gate reflect
  pageErrors.length = 0;
  await clearSession();
  await page.goto(base + reflectPath, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent(
    "S0",
    "[data-feature='web-rmms-field-reflect'], #FR-REFLECT",
    (d) => (d.guestGate ? null : "GAP-QA-S0 guestGate missing"),
  );

  // QA-20 — Login page LG-00 (replaces LoginSheet SH-02)
  pageErrors.length = 0;
  await clearSession();
  await page.goto(base + homePath, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector("#guestLogin", { timeout: 20000 });
  await page.locator("#guestLogin").click();
  await captureCurrent(
    "QA-20",
    "#f-user, [data-feature='login'], #loginUser, [data-zone='LG-00'], [data-zone='SH-02']",
    (d) => {
      if (d.ids.includes("f-user") || d.ids.includes("loginUser") || d.feature === "login") {
        return null;
      }
      if (d.zones.includes("LG-00") || d.zones.includes("SH-02")) return null;
      return "GAP-QA-20 login surface missing";
    },
  );

  // S1 — staff FR-00 pick after login
  pageErrors.length = 0;
  await loginViaPage();
  await page.goto(base + reflectPath, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent(
    "S1",
    "[data-feature='web-rmms-field-reflect'] [data-des-id='FR-00'], [data-action='assetPick']",
  );

  const card = page
    .locator("[data-action='assetPick'] button.assetCard, [data-action='assetPick'] button")
    .first();
  if ((await card.count()) > 0) {
    await card.click();
    await page.waitForTimeout(1200);
    const fr01 = await page.locator("[data-des-id='FR-01']").count();
    if (fr01) {
      const dump = await dumpZones();
      writeFileSync(join(outDir, "_fr01.dump.json"), JSON.stringify(dump, null, 2));
    }
  }

  // T-QA-VAL-B — Pattern B: ?miss=1
  pageErrors.length = 0;
  await page.goto(base + reflectPath + "?miss=1", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent(
    "VAL-B-miss",
    "[data-feature='web-rmms-field-reflect'] [data-des-id='FR-01'], #validationBanner, [data-action='validationBanner']",
    (d) => {
      if (d.detectDisabled === true) return "GAP-QA-VAL-B detect disabled idle";
      if (d.createDisabled === true) return "GAP-QA-VAL-B create disabled idle";
      if (!d.bannerVisible && !/Cần|thiếu|chọn|ca|Không có/i.test(d.bannerText + d.text)) {
        return "GAP-QA-VAL-B miss banner missing";
      }
      return null;
    },
  );

  // T-QA-VAL-B — GPS deny
  pageErrors.length = 0;
  await page.goto(base + reflectPath + "?deny=1", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector(
    "[data-des-id='FR-01'] [data-action='detect'], [data-action='detect'], #btnDetect",
    { timeout: 20000 },
  );
  await page.waitForTimeout(800);
  const denyDump0 = await dumpZones();
  if (denyDump0.detectDisabled === true) {
    results.push({
      id: "VAL-B-deny",
      result: "FAIL",
      error: "GAP-QA-VAL-B GPS deny locked Detect CTA",
      dump: denyDump0,
      screenshot: shotName("VAL-B-deny"),
    });
    await page.screenshot({ path: join(outDir, shotName("VAL-B-deny")), fullPage: true });
  } else {
    await page
      .locator("[data-action='detect'], #btnDetect")
      .first()
      .click({ force: true });
    await page.waitForTimeout(900);
    await captureCurrent(
      "VAL-B-deny",
      "#validationBanner, [data-action='validationBanner'], [data-des-id='FR-01']",
      (d) => {
        if (d.detectDisabled === true) return "GAP-QA-VAL-B detect disabled after deny click";
        if (!d.bannerVisible && !/GPS|định vị|quyền|Cần/i.test(d.bannerText + d.text)) {
          return "GAP-QA-VAL-B deny banner missing on Detect";
        }
        return null;
      },
    );
  }

  // T-QA-VAL-B — Acc>30
  pageErrors.length = 0;
  let detectPosted = false;
  const onReq = (req) => {
    if (/ai-vision\/detect/i.test(req.url()) && req.method() === "POST") detectPosted = true;
  };
  page.on("request", onReq);
  await page.goto(base + reflectPath + "?acc=1", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector(
    "[data-des-id='FR-01'] [data-action='detect'], [data-action='detect'], #btnDetect",
    { timeout: 20000 },
  );
  await page.waitForTimeout(800);
  await page.locator("[data-action='detect'], #btnDetect").first().click({ force: true });
  await page.waitForTimeout(1200);
  page.off("request", onReq);
  await captureCurrent(
    "VAL-B-acc",
    "#validationBanner, [data-action='validationBanner'], [data-des-id='FR-01']",
    (d) => {
      if (detectPosted) return "GAP-QA-VAL-B Acc>30 still POSTed detect";
      if (!d.bannerVisible && !/30|Sai số|GPS|ảnh|Cần/i.test(d.bannerText + d.text)) {
        return "GAP-QA-VAL-B Acc>30 banner missing";
      }
      return null;
    },
  );
} finally {
  await browser.close();
}

const summary = {
  feature: "web-rmms-field-reflect",
  route: reflectPath,
  cases: results,
  pass: results.every((r) => r.result === "PASS"),
  at: new Date().toISOString(),
};
writeFileSync(join(outDir, "_capture_reflect.result.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (!summary.pass) process.exit(1);
