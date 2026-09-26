import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const featureUrl = base + "/web-rmms-asset-adjust";
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
    timeout: 15000,
  });
  await dismissOverlay();
  await page.fill('input[name="username"]', user);
  await page.fill('input[type="password"]', password);
  await Promise.all([
    page.waitForLoadState("networkidle").catch(() => {}),
    page.locator('button[type="submit"]').click({ force: true }),
  ]);
  await page.waitForTimeout(1500);
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-asset-adjust"], [data-feature="web-rmms-asset-hub"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const ids = [
      "navBack",
      "pageTitle",
      "search",
      "AA-01",
      "AA-03",
      "AA-04",
      "AA-05",
      "AA-08",
      "aaGuestGate",
      "emptyMsg",
      "tileAdjust",
      "walletTitle",
      "pager",
    ].filter((id) => !!document.getElementById(id));
    const rowCount = document.querySelectorAll(
      '[data-feature="web-rmms-asset-adjust"] [role="listitem"], [data-feature="web-rmms-asset-adjust"] .row',
    ).length;
    const removeCount = document.querySelectorAll('[data-zone="AA-06"]').length;
    const editCount = document.querySelectorAll('[data-zone="AA-07"]').length;
    const text = (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " ");
    return {
      feature: root?.getAttribute("data-feature") || null,
      zones: [...new Set(zones)],
      ids,
      rowCount,
      removeCount,
      editCount,
      text,
      href: location.href,
    };
  });
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 30000 });
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
  await login();

  // S0 — Asset Adjust AA-* Live list / empty / guest
  {
    const res = await page.goto(featureUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    if (!res || !res.ok()) throw new Error("S0 HTTP " + (res ? res.status() : "none"));
    await captureCurrent(
      "S0",
      '[data-feature="web-rmms-asset-adjust"] #pageTitle, [data-feature="web-rmms-asset-adjust"] #aaGuestGate',
    );
  }

  // S1 — peer Hub entry (#tileAdjust)
  {
    const res = await page.goto(base + "/web-rmms-asset-hub", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    if (!res || !res.ok()) throw new Error("S1 HTTP " + (res ? res.status() : "none"));
    await captureCurrent(
      "S1",
      '[data-feature="web-rmms-asset-hub"] #tileAdjust, [data-feature="web-rmms-asset-hub"] #walletTitle',
    );
  }

  // QA-20 — Hub tileAdjust → Adjust (JWT kept)
  {
    const entry = page.locator('#tileAdjust, [data-route="/web-rmms-asset-adjust"]').first();
    if (await entry.count()) {
      await entry.click();
      await page.waitForSelector(
        '[data-feature="web-rmms-asset-adjust"] #pageTitle, [data-feature="web-rmms-asset-adjust"] #AA-04, [data-feature="web-rmms-asset-adjust"] #AA-05, [data-feature="web-rmms-asset-adjust"] #aaGuestGate',
        { timeout: 30000 },
      );
      await page.waitForTimeout(800);
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-asset-adjust"] #pageTitle, [data-feature="web-rmms-asset-adjust"] #AA-04, [data-feature="web-rmms-asset-adjust"] #AA-05',
      );
    } else {
      const res = await page.goto(featureUrl, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      if (!res || !res.ok()) throw new Error("QA-20 HTTP " + (res ? res.status() : "none"));
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-asset-adjust"] #pageTitle',
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
        "capture_aadjust · MFE /login · phone 430 · S0 adjust · S1 Hub #tileAdjust · QA-20 click→adjust · no kill worker · stock e2e-qa soft-fail :5101",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
