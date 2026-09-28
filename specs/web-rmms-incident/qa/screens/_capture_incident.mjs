import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const HOME = "/m/trang-chu";
const LOGIN = "/m/dang-nhap";
const LIST = "/m/van-de";
const CREATE = "/m/van-de/moi";
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
        "[data-zone='INC-L'], [data-zone='INC-N'], [data-zone='LG-00'], #guestLogin, #f-user",
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
  await page.goto(base + HOME, { waitUntil: "domcontentloaded", timeout: 60000 });
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
  await page.goto(base + LOGIN, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("#f-user, [data-zone='LG-00'] input", { timeout: 20000 });
  await page.fill("#f-user", user);
  await page.fill("#f-pass", password);
  await page.locator("#btn-login").click({ force: true });
  await page.waitForTimeout(2500);
  await page
    .waitForFunction(
      () => !location.pathname.includes("dang-nhap"),
      null,
      { timeout: 25000 },
    )
    .catch(() => {});
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-incident"], [data-feature="trang-chu"], [data-feature="login"], [data-zone="INC-L"], [data-zone="INC-N"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const des = [...document.querySelectorAll("[data-des-id]")].map((el) =>
      el.getAttribute("data-des-id"),
    );
    const fields = [...document.querySelectorAll("[data-field]")].map((el) =>
      el.getAttribute("data-field"),
    );
    const actions = [...document.querySelectorAll("[data-action]")].map((el) =>
      el.getAttribute("data-action"),
    );
    const ids = [
      "loginUser",
      "loginPass",
      "loginSubmit",
      "guestLogin",
      "f-user",
      "f-pass",
      "btn-login",
    ].filter((id) => document.getElementById(id));
    const createBtn = document.querySelector('[data-field="create"]');
    const createDisabled = createBtn ? !!createBtn.disabled : null;
    const bannerEl = document.querySelector('[data-field="validate.banner"]');
    const bannerText = bannerEl ? (bannerEl.textContent || "").trim().slice(0, 400) : "";
    const text = (document.body?.innerText || "").slice(0, 1400).replace(/\s+/g, " ");
    const guestGate =
      /Đăng nhập để ghi sự cố/i.test(text) ||
      (location.pathname.includes("dang-nhap") && zones.includes("LG-00"));
    return {
      feature: root?.getAttribute("data-feature") || null,
      zones: [...new Set(zones)],
      des: [...new Set(des)],
      fields: [...new Set(fields)],
      actions: [...new Set(actions)],
      ids,
      text,
      href: location.href,
      guestGate,
      createDisabled,
      bannerText,
      patternB: {
        createAlwaysOn: createBtn ? createDisabled === false : null,
        hasValidateBanner: !!bannerEl,
        hasGpsLock: !!document.querySelector('[data-field="gpsLock"]'),
        hasGpsDenyModal: !!document.querySelector('[data-field="gps.deny.modal"]'),
      },
    };
  });
}

async function pickFirstAsset() {
  await page.waitForSelector("[data-field='assetPick'], [data-zone='INC-N']", {
    timeout: 25000,
  });
  await page.waitForTimeout(800);
  const option = page
    .locator("[data-field='assetPick'] button, [data-field='assetPick'] [role='button'], [data-field='assetPick'] li, [data-field='assetPick'] .card, [data-field='assetIdentify'] ~ * button")
    .first();
  if (await option.count()) {
    await option.click({ force: true });
    await page.waitForTimeout(1000);
  } else {
    // fallback: click first tile text PAVEMENT / Mặt đường
    const tile = page.getByText(/PAVEMENT|Mặt đường/i).first();
    if (await tile.count()) {
      await tile.click({ force: true });
      await page.waitForTimeout(1000);
    }
  }
}

async function captureCurrent(id, waitSel, assertFn) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 25000 });
    await page.waitForTimeout(1200);
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
  // S0 — guest Create → auth redirect LG-00 (gate)
  pageErrors.length = 0;
  await clearSession();
  await page.goto(base + CREATE, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent("S0", "[data-zone='LG-00'], [data-feature='login'], #f-user", (d) => {
    if (!d.guestGate && !d.zones.includes("LG-00")) return "GAP-QA-S0 auth gate missing";
    return null;
  });

  // QA-20 — Login from Home guest CTA
  pageErrors.length = 0;
  await clearSession();
  await page.goto(base + HOME, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector("#guestLogin", { timeout: 20000 });
  await page.locator("#guestLogin").click();
  await page.waitForTimeout(1200);
  await captureCurrent("QA-20", "#f-user, [data-zone='LG-00']", (d) => {
    if (!d.ids.includes("f-user") || !d.ids.includes("f-pass") || !d.ids.includes("btn-login")) {
      return "GAP-QA-20 login fields missing (f-user/f-pass/btn-login)";
    }
    return null;
  });

  // S1 — staff INC-L Live after login
  pageErrors.length = 0;
  await loginViaPage();
  await page.goto(base + LIST, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent(
    "S1",
    "[data-zone='INC-L'], [data-field='fab'], [data-field='search']",
    (d) => {
      if (!d.zones.includes("INC-L")) return "GAP-QA-S1 INC-L missing";
      if (!d.fields.includes("search") || !d.fields.includes("fab")) {
        return "GAP-QA-S1 INC-L fields missing";
      }
      return null;
    },
  );

  // Pattern B — pick asset → create always-on → empty submit banner
  pageErrors.length = 0;
  await page.goto(base + CREATE + "?miss=1", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await pickFirstAsset();
  await page.waitForSelector("[data-field='create'], [data-field='gpsLock']", {
    timeout: 25000,
  });
  await dismissOverlay(page);
  const createBtn = page.locator("[data-field='create']").first();
  if (!(await createBtn.count())) throw new Error("GAP-QA-PB-01 create field missing after asset");
  if (await createBtn.isDisabled()) throw new Error("GAP-QA-PB-01 create disabled before submit");
  await createBtn.click({ force: true });
  await page.waitForTimeout(900);
  await captureCurrent(
    "PB-01",
    "[data-field='create'], [data-zone='INC-N']",
    (d) => {
      if (d.createDisabled === true) return "GAP-QA-PB-01 create disabled (!creating)";
      if (!d.fields.includes("create")) return "GAP-QA-PB-01 create field missing";
      if (!d.fields.includes("gpsLock")) return "GAP-QA-PB-01 gpsLock missing";
      const hasBanner =
        d.fields.includes("validate.banner") ||
        !!d.bannerText ||
        /session|GPS|tài sản|offline|Chưa|cần/i.test(d.text || "");
      if (!hasBanner) return "GAP-QA-PB-03 validate banner missing after empty submit";
      return null;
    },
  );
  writeFileSync(
    join(outDir, "_inc_n.dump.json"),
    JSON.stringify(results.find((r) => r.id === "PB-01")?.dump || {}, null, 2),
  );

  // GPS deny on-submit (Pattern B)
  pageErrors.length = 0;
  await page.goto(base + CREATE + "?gps=deny", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await pickFirstAsset();
  await page.waitForSelector("[data-field='create'], [data-field='gpsLock']", {
    timeout: 25000,
  });
  await dismissOverlay(page);
  if (await page.locator("[data-field='create']").count()) {
    if (await page.locator("[data-field='create']").first().isDisabled()) {
      throw new Error("GAP-QA-PB-GPS create locked by GPS (Pattern A leak)");
    }
    await page.locator("[data-field='create']").first().click({ force: true });
    await page.waitForTimeout(900);
  }
  await captureCurrent(
    "PB-GPS",
    "[data-field='gpsLock'], [data-field='create'], [data-zone='INC-N']",
    (d) => {
      if (d.createDisabled === true) return "GAP-QA-PB-GPS create locked by GPS (Pattern A leak)";
      const ban = (d.bannerText || "") + " " + (d.text || "");
      const ok =
        d.fields.includes("gps.deny.modal") ||
        d.fields.includes("validate.banner") ||
        /gps|GPS|quyền|định vị|Chưa cấp/i.test(ban);
      if (!ok) return "GAP-QA-PB-GPS no deny banner/modal after submit";
      return null;
    },
  );
} catch (err) {
  results.push({
    id: "RUNTIME",
    result: "FAIL",
    error: err instanceof Error ? err.message : String(err),
  });
} finally {
  await browser.close();
}

const summary = {
  feature: "web-rmms-incident",
  changeScope: "edit_page",
  cases: results,
  pass: results.length > 0 && results.every((r) => r.result === "PASS"),
  at: new Date().toISOString(),
};
writeFileSync(join(outDir, "_capture_incident.result.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (!summary.pass) process.exit(1);
