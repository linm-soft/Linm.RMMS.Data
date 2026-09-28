import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const feature = "web-rmms-mnt-progress";
/** Standalone phone: address bar `/m/{path}` · MemoryRouter slug `/cong-viec/tien-do` */
const ROUTE = "/m/cong-viec/tien-do";
const HOME = "/m/trang-chu";
const LOGIN = "/m/dang-nhap";
/** Live in_progress WO — Mobile.Bff seed */
const WO_ID = "2a0b6ead-a87e-4df5-97ae-dd2962724781";
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

/** Force Mobile.Bff → local docker :5202 (baked build may point at cloud). */
await page.addInitScript(() => {
  window.__LINM_MF_MANIFEST__ = {
    microfrontends: {
      "@linm/rmms-mobile": {
        env: { VITE_MOBILE_API_URL: "http://localhost:5202/mobile-bff/api/v1" },
      },
    },
  };
});
await page.route("https://rmms-mobile-bff.linm-soft.com/**", async (route) => {
  const src = route.request().url();
  const dest = src.replace(
    "https://rmms-mobile-bff.linm-soft.com",
    "http://localhost:5202",
  );
  try {
    const res = await route.fetch({ url: dest });
    await route.fulfill({ response: res });
  } catch (err) {
    await route.abort("failed");
  }
});

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
        `[data-feature='${feature}'], [data-zone='WORK-P'], [data-zone='LG-00'], #loginUser, #sc-mnt-progress`,
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
  await page.goto(base + HOME, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(600);
}

async function hasToken() {
  return page.evaluate(() => {
    const keys = ["auth_token", "access_token", "accessToken", "token"];
    return keys.some((k) => !!(localStorage.getItem(k) || "").trim());
  });
}

async function loginFullPage() {
  await clearSession();
  await page.goto(base + LOGIN, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(
    '[data-zone="LG-00"] input, input[type="password"], #loginUser',
    { timeout: 20000 },
  );
  await dismissOverlay(page);
  if (await page.locator("#loginUser").count()) {
    await page.fill("#loginUser", user);
    await page.fill("#loginPass", password);
    await Promise.all([
      page
        .waitForResponse(
          (r) => /auth\/login|token|connect\/token/i.test(r.url()) && r.status() < 500,
          { timeout: 25000 },
        )
        .catch(() => null),
      page.locator("#loginSubmit").click({ force: true }),
    ]);
  } else {
    const inputs = page.locator('[data-zone="LG-00"] input, input');
    await inputs.nth(0).fill(user);
    await inputs.nth(1).fill(password);
    await Promise.all([
      page
        .waitForResponse(
          (r) => /auth\/login|token|connect\/token/i.test(r.url()) && r.status() < 500,
          { timeout: 25000 },
        )
        .catch(() => null),
      page
        .locator('[data-zone="LG-00"] button, button')
        .filter({ hasText: /Đăng nhập/i })
        .first()
        .click({ force: true }),
    ]);
  }
  await page.waitForTimeout(2800);
  if (!(await hasToken())) {
    throw new Error("GAP-QA-E2E-03 login no auth_token");
  }
  await page
    .waitForSelector(
      '[data-mode="staff"], [data-feature="web-rmms-home"], [data-zone="HM-00"], #guestLogin, [data-zone="WORK-P"]',
      { timeout: 25000 },
    )
    .catch(() => {});
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-mnt-progress"], [data-feature="web-rmms-home"], [data-feature="web-rmms-shell"]',
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
    const ids = [
      "loginUser",
      "loginPass",
      "loginSubmit",
      "guestLogin",
      "sc-mnt-progress",
      "mnt-pct",
      "mnt-note",
      "validationBanner",
    ].filter((id) => document.getElementById(id));
    const text = (document.body?.innerText || "").slice(0, 1600).replace(/\s+/g, " ");
    const progressBtn = document.querySelector('[data-field="submitProgress"]');
    const completeBtn = document.querySelector('[data-field="submitComplete"]');
    const photoInput = document.querySelector(
      '[data-field="photoLocalIds"] input[type="file"], input[capture]',
    );
    const banner = document.querySelector(
      '#validationBanner, [data-field="validationBanner"]',
    );
    return {
      feature: root?.getAttribute("data-feature") || null,
      zones: [...new Set(zones)],
      des: [...new Set(des)],
      fields: [...new Set(fields)],
      ids,
      text,
      href: location.href,
      ctaProgressDisabled: progressBtn ? !!progressBtn.disabled : null,
      ctaCompleteDisabled: completeBtn ? !!completeBtn.disabled : null,
      captureAttr: photoInput?.getAttribute("capture") || null,
      bannerVisible: banner
        ? !!(banner.offsetParent || banner.getClientRects().length)
        : false,
      bannerText: banner?.textContent?.trim()?.slice(0, 200) || null,
      gpsText:
        document.querySelector('[data-field="gps"]')?.textContent?.trim()?.slice(0, 120) ||
        null,
    };
  });
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 25000 });
    await page.waitForTimeout(1600);
    await dismissOverlay(page);
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
  // S0 — staff WORK-P Live GET{id} · GPS granted · CTAs enabled (Pattern B)
  pageErrors.length = 0;
  try {
    await loginFullPage();
    await page.goto(`${base}${ROUTE}?id=${encodeURIComponent(WO_ID)}`, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await page.waitForSelector(
      "[data-feature='web-rmms-mnt-progress'] [data-field='woHeader'], [data-field='woCode'], #sc-mnt-progress",
      { timeout: 35000 },
    );
    await page.waitForTimeout(1200);
    const gpsPin = page.locator('[data-field="gpsPin"]');
    if (await gpsPin.count()) {
      const gpsOk = await page.locator('[data-field="gps"]').innerText().catch(() => "");
      if (!/GPS OK|Đã có vị trí/i.test(gpsOk)) {
        await gpsPin.click({ force: true }).catch(() => {});
        await page.waitForTimeout(1500);
      }
    }
    await captureCurrent(
      "S0",
      "[data-feature='web-rmms-mnt-progress'] [data-field='submitProgress'], [data-field='woHeader']",
    );
    {
      const s0 = results[results.length - 1];
      if (s0?.result === "PASS" && s0.dump) {
        if (s0.dump.ctaProgressDisabled === true || s0.dump.ctaCompleteDisabled === true) {
          s0.result = "FAIL";
          s0.error = "Pattern B expect CTAs enabled when not saving (S0)";
        }
        if (s0.dump.fields?.includes("emptyWo")) {
          s0.result = "FAIL";
          s0.error = "S0 Live WO load failed (emptyWo)";
        }
      }
    }
  } catch (err) {
    const file = shotName("S0");
    await page.screenshot({ path: join(outDir, file), fullPage: true }).catch(() => {});
    results.push({
      id: "S0",
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
      dump: await dumpZones().catch(() => null),
    });
  }

  // QA-20 — Login from Home guest CTA → LG-00 full page (or SH-02 sheet)
  pageErrors.length = 0;
  try {
    await clearSession();
    await page.goto(base + HOME, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForSelector("#guestLogin, [data-field='guestLoginCta']", {
      timeout: 25000,
    });
    await page.locator("#guestLogin, [data-field='guestLoginCta']").first().click();
    await page.waitForSelector(
      '[data-zone="LG-00"], #loginUser, [data-zone="SH-02"]',
      { timeout: 15000 },
    );
    await captureCurrent(
      "QA-20",
      '[data-zone="LG-00"], #loginUser, [data-zone="SH-02"]',
    );
  } catch (err) {
    const file = shotName("QA-20");
    await page.screenshot({ path: join(outDir, file), fullPage: true }).catch(() => {});
    results.push({
      id: "QA-20",
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
      dump: await dumpZones().catch(() => null),
    });
  }

  // S1 — staff WORK-P + deny=1 · Pattern B: CTAs enabled · click → validationBanner
  pageErrors.length = 0;
  try {
    await loginFullPage();
    await page.goto(
      `${base}${ROUTE}?id=${encodeURIComponent(WO_ID)}&deny=1`,
      {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      },
    );
    await page.waitForSelector(
      "[data-feature='web-rmms-mnt-progress'] [data-zone='WORK-P-GPS'], [data-field='gps'], [data-field='submitProgress']",
      { timeout: 25000 },
    );
    await page.waitForTimeout(1200);
    await dismissOverlay(page);

    const preDump = await dumpZones();
    if (preDump.ctaProgressDisabled === true || preDump.ctaCompleteDisabled === true) {
      results.push({
        id: "S1",
        result: "FAIL",
        screenshot: "S1.png",
        error: "Pattern B: CTAs must stay enabled on GPS deny (disabled=saving only)",
        href: page.url(),
        dump: preDump,
      });
      await page.screenshot({ path: join(outDir, "S1.png"), fullPage: true }).catch(() => {});
    } else {
      await page.locator('[data-field="submitProgress"]').click({ force: true });
      await page.waitForSelector(
        '#validationBanner, [data-field="validationBanner"]',
        { timeout: 10000 },
      );
      await page.waitForTimeout(800);
      await captureCurrent(
        "S1",
        "#validationBanner, [data-field='validationBanner']",
      );
      {
        const s1 = results[results.length - 1];
        if (s1?.result === "PASS" && s1.dump) {
          if (!s1.dump.bannerVisible && !s1.dump.bannerText) {
            s1.result = "FAIL";
            s1.error = "Pattern B: expect validationBanner after click on GPS deny";
          }
          if (s1.dump.ctaProgressDisabled === true) {
            s1.result = "FAIL";
            s1.error = "Pattern B: CTA must not hard-disable on GPS deny";
          }
        }
      }
    }
  } catch (err) {
    const file = shotName("S1");
    await page.screenshot({ path: join(outDir, file), fullPage: true }).catch(() => {});
    results.push({
      id: "S1",
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
      dump: await dumpZones().catch(() => null),
    });
  }
} finally {
  await browser.close();
}

const summary = {
  feature,
  cases: results,
  pass: results.every((r) => r.result === "PASS"),
  at: new Date().toISOString(),
  pattern: "B",
  route: ROUTE,
};
writeFileSync(join(outDir, "_capture_mnt_progress.result.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (!summary.pass) process.exit(1);
