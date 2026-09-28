import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
/** STATUS mfeStdRoute — edit_page SSOT */
const featureUrl = base + "/tai-san/thu-thap";
const hubUrl = base + "/tai-san";
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
  geolocation: { latitude: 21.0285, longitude: 105.8542 },
  permissions: ["geolocation"],
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

async function dismissOverlay() {
  for (let i = 0; i < 25; i++) {
    const ov = page.locator(
      "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
    );
    if (!(await ov.count()) || !(await ov.first().isVisible().catch(() => false))) return;
    await page.evaluate(() => {
      document
        .querySelectorAll(
          "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
        )
        .forEach((el) => el.remove());
    });
    await page.waitForTimeout(300);
  }
}

async function fatalUi(p) {
  await dismissOverlay();
  const t = await p.locator("body").innerText().catch(() => "");
  if (
    /Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(
      t,
    )
  ) {
    return "crash text: " + t.slice(0, 180).replace(/\s+/g, " ");
  }
  const real = pageErrors.filter(
    (e) =>
      /Module build failed|Failed to compile|ChunkLoadError|TypeError|ReferenceError/i.test(e) &&
      !/removeChild/i.test(e),
  );
  if (real.length) return "pageerror: " + real.slice(-1)[0];
  return null;
}

async function login() {
  await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector('input[name="username"], input[type="password"]', {
    timeout: 20000,
  });
  await dismissOverlay();
  await page.fill('input[name="username"]', user);
  await page.fill('input[type="password"]', password);
  await Promise.all([
    page
      .waitForResponse(
        (r) => /auth\/login/i.test(r.url()) && r.status() < 500,
        { timeout: 25000 },
      )
      .catch(() => null),
    page.locator('button[type="submit"]').click({ force: true }),
  ]);
  await page.waitForTimeout(2000);
  await dismissOverlay();
  const hasToken = await page.evaluate(() => !!localStorage.getItem("auth_token"));
  if (!hasToken) throw new Error("GAP-QA-E2E-03 login no auth_token");
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-asset-collect"], [data-feature="web-rmms-asset-hub"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const ids = [
      "AC-00",
      "AC-01",
      "navBack",
      "acTitle",
      "fldName",
      "fldType",
      "fldRoute",
      "fldKmFrom",
      "fldStatus",
      "gpsCard",
      "gpsCoords",
      "btnGps",
      "btnPhotoAdd",
      "AC-09",
      "AC-10",
      "errBanner",
      "acGuestGate",
      "tileCollect",
      "walletTitle",
    ].filter((id) => !!document.getElementById(id));
    const searchInput = !!document.querySelector(
      '[data-control="SearchInput"], #fldRoute [data-control="SearchInput"], #fldRoute input',
    );
    const submit = document.getElementById("AC-09");
    const submitDisabled = submit ? !!submit.disabled : null;
    const text = (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " ");
    return {
      feature: root?.getAttribute("data-feature") || null,
      zones: [...new Set(zones)],
      ids,
      searchInput,
      submitDisabled,
      text,
      href: location.href,
    };
  });
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    await dismissOverlay();
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 45000 });
    await page.waitForTimeout(1400);
    await dismissOverlay();
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    const dump = await dumpZones();
    if (id === "S0" || id === "QA-20") {
      if (!dump.ids?.includes("fldName") || !dump.zones?.includes("AC-02")) {
        throw new Error("GAP-QA-E2E-FORM-01 form fields not loaded");
      }
      if (dump.ids?.includes("acGuestGate") && !dump.ids?.includes("fldName")) {
        throw new Error("GAP-QA-E2E-AUTH-01 still guest on collect");
      }
      if (!dump.searchInput) {
        throw new Error("GAP-QA-E2E-ROUTE-01 SearchInput missing on route");
      }
      if (dump.submitDisabled === true) {
        throw new Error("GAP-QA-E2E-PATTERN-B-01 submit disabled while not saving (canSave leak)");
      }
      if (!dump.ids?.includes("AC-09")) {
        throw new Error("GAP-QA-E2E-CTA-01 AC-09 submit missing");
      }
    }
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
  await login();

  // S0 — Collect form AC-* · Pattern B
  {
    const res = await page.goto(featureUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    if (!res || !res.ok()) throw new Error("S0 HTTP " + (res ? res.status() : "none"));
    await dismissOverlay();
    await captureCurrent(
      "S0",
      '[data-feature="web-rmms-asset-collect"] #fldName, [data-feature="web-rmms-asset-collect"] #AC-02',
    );
  }

  // S1 — peer Hub entry (#tileCollect)
  {
    const res = await page.goto(hubUrl, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    if (!res || !res.ok()) throw new Error("S1 HTTP " + (res ? res.status() : "none"));
    await dismissOverlay();
    await captureCurrent(
      "S1",
      '[data-feature="web-rmms-asset-hub"] #tileCollect, [data-feature="web-rmms-asset-hub"] #walletTitle',
    );
  }

  // QA-20 — Hub tileCollect → collect form (JWT kept)
  {
    const entry = page
      .locator('#tileCollect, [data-route="/tai-san/thu-thap"], a[href="/tai-san/thu-thap"]')
      .first();
    if (await entry.count()) {
      await entry.click();
      await dismissOverlay();
      await page.waitForSelector(
        '[data-feature="web-rmms-asset-collect"] #fldName, [data-feature="web-rmms-asset-collect"] #AC-02',
        { timeout: 45000 },
      );
      await page.waitForTimeout(800);
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-asset-collect"] #fldName, [data-feature="web-rmms-asset-collect"] #AC-02',
      );
    } else {
      const res = await page.goto(featureUrl, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      if (!res || !res.ok()) throw new Error("QA-20 HTTP " + (res ? res.status() : "none"));
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-asset-collect"] #fldName',
      );
    }
  }
} catch (err) {
  results.push({
    id: "FATAL",
    result: "FAIL",
    error: err instanceof Error ? err.message : String(err),
  });
} finally {
  await browser.close();
}

const ok =
  ["S0", "S1", "QA-20"].every((id) => results.some((r) => r.id === id && r.result === "PASS")) &&
  !results.some((r) => r.result === "FAIL");
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: featureUrl,
      capturedAt: new Date().toISOString(),
      method:
        "capture_acollect · MFE /login · phone 430 · S0 /tai-san/thu-thap · S1 Hub /tai-san #tileCollect · QA-20 click→collect · Pattern B · geo grant · dismiss overlay · no kill worker",
      changeScope: "edit_page",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
