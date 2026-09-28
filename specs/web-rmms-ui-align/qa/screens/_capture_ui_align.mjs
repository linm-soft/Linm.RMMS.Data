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
  if (/Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(t)) {
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

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-ui-align"], [data-feature="web-rmms-home"], [data-feature="web-rmms-shell"], [data-feature="login"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const tabs = [...document.querySelectorAll("#tabBar a, #tabBar [id^=tab]")].map(
      (el) => ({ id: el.id, text: (el.textContent || "").replace(/\s+/g, " ").trim() }),
    );
    const text = (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " ");
    return {
      feature: root?.getAttribute("data-feature") || null,
      mode: root?.getAttribute("data-mode") || null,
      zones: [...new Set(zones)],
      tabs,
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
  // S0 — alias /web-rmms-ui-align → Home · UA-00 · DES-MOB-TABBAR 5 (Tôi)
  await clearSession();
  await page.goto(base + "/web-rmms-ui-align", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent(
    "S0",
    '[data-zone="UA-00"] #tabBar #tabMe, [data-zone="DES-MOB-TABBAR"] #tabMe, #tabMe',
  );

  // S1 — Me tab DES-MOB-ME (profile / offline / signal / logout)
  await page.goto(base + "/web-rmms-shell/me", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await captureCurrent(
    "S1",
    '[data-zone="DES-MOB-ME"] #meRoot, #meRoot, [data-feature="web-rmms-ui-align"][data-zone="UA-00"]',
  );

  // QA-20 — Login form (standalone /m/login · LG-00 · LeaveConfirm path)
  await clearSession();
  await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  await captureCurrent(
    "QA-20",
    '[data-feature="login"][data-zone="LG-00"] input[type="password"], input[name="username"], #loginUser',
  );
} finally {
  await browser.close();
}

const ok = results.every((s) => s.result === "PASS");
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: base + "/web-rmms-ui-align",
      capturedAt: new Date().toISOString(),
      method:
        "capture_ui_align · phone 430 · S0 alias+TabBar5 · S1 DES-MOB-ME · QA-20 LG-00 · playwright junction",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
