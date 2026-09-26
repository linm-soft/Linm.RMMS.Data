import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const featureUrl = base + "/web-rmms-asset-hub";
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

async function login() {
  await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector('input[name="username"], input[type="password"]', {
    timeout: 15000,
  });
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

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector('[data-feature="web-rmms-asset-hub"], [data-feature="web-rmms-home"]');
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const ids = [
      "navBack",
      "walletTitle",
      "tileKcht",
      "tileList",
      "tileCollect",
      "tileAi",
      "tileAdjust",
      "rowGis",
      "AH-07",
      "ahGuestGate",
      "walletAsset",
    ].filter((id) => !!document.getElementById(id));
    const text = (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " ");
    return {
      feature: root?.getAttribute("data-feature") || null,
      mode: root?.getAttribute("data-mode") || null,
      zones: [...new Set(zones)],
      ids,
      text,
      href: location.href,
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
  await login();

  // S0 — Hub staff AH-* wallet + tiles
  {
    const res = await page.goto(featureUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    if (!res || !res.ok()) throw new Error("S0 HTTP " + (res ? res.status() : "none"));
    await captureCurrent(
      "S0",
      '[data-feature="web-rmms-asset-hub"] #walletTitle, [data-feature="web-rmms-asset-hub"] #ahGuestGate',
    );
  }

  // S1 — peer Home entry surface
  {
    const res = await page.goto(base + "/web-rmms-home", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    if (!res || !res.ok()) throw new Error("S1 HTTP " + (res ? res.status() : "none"));
    await captureCurrent(
      "S1",
      '[data-feature="web-rmms-home"], [data-mode="staff"], #walletAsset',
    );
  }

  // QA-20 — click Home → Hub (JWT kept)
  {
    const entry = page
      .locator(
        '#walletAsset, [href="/web-rmms-asset-hub"], [data-route="/web-rmms-asset-hub"]',
      )
      .first();
    if (await entry.count()) {
      await entry.click();
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-asset-hub"] #walletTitle, [data-feature="web-rmms-asset-hub"] #tileKcht',
      );
    } else {
      const res = await page.goto(featureUrl, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      if (!res || !res.ok()) throw new Error("QA-20 HTTP " + (res ? res.status() : "none"));
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-asset-hub"] #walletTitle, [data-feature="web-rmms-asset-hub"] #tileKcht',
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
        "capture_ahub · MFE /login · phone 430 · S0 Hub · S1 Home peer · QA-20 click→Hub · no kill worker",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
