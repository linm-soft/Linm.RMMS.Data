import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { createHash } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const featureUrl = base + "/web-rmms-offline";
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
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

async function dismissOverlay() {
  for (let i = 0; i < 20; i++) {
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
    await page.waitForTimeout(250);
  }
}

async function fatalUi() {
  await dismissOverlay();
  const t = await page.locator("body").innerText().catch(() => "");
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
  await page.waitForSelector('#loginUser, [data-zone="SH-02"] input', { timeout: 15000 });
  const userSel = (await page.locator("#loginUser").count())
    ? "#loginUser"
    : '[data-zone="SH-02"] input[type="text"], [data-zone="SH-02"] input:not([type="password"])';
  const passSel = (await page.locator("#loginPass").count())
    ? "#loginPass"
    : '[data-zone="SH-02"] input[type="password"]';
  await page.fill(userSel, user);
  await page.fill(passSel, password);
  await page.locator("#loginSubmit, [data-zone='SH-02'] button[type='submit']").first().click({
    force: true,
  });
  await page.waitForTimeout(2200);
  await page
    .waitForSelector(
      '[data-feature="web-rmms-home"][data-mode="staff"] #gridSupervise, [data-mode="staff"] #walletAsset, #gridOffline',
      { timeout: 25000 },
    )
    .catch(() => {});
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector('[data-feature="web-rmms-offline"]');
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const fields = [...document.querySelectorAll("[data-field]")].map((el) =>
      el.getAttribute("data-field"),
    );
    const text = (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " ");
    return {
      feature: root?.getAttribute("data-feature") || null,
      desId: root?.getAttribute("data-des-id") || null,
      scId: root?.getAttribute("id") || null,
      zones,
      fields,
      text,
      hasSync: !!document.querySelector("#btn-sync"),
      segCheckIn: !!document.querySelector('[data-seg="checkIn"]'),
      segIncident: !!document.querySelector('[data-seg="incident"]'),
      banner: !!document.querySelector("#offline-banner,[data-zone='BANNER']"),
    };
  });
}

async function captureCurrent(id, waitSel) {
  pageErrors.length = 0;
  if (waitSel) {
    await page.waitForSelector(waitSel, { timeout: 25000 }).catch(() => {});
  }
  await page.waitForTimeout(800);
  await dismissOverlay();
  const fatal = await fatalUi();
  const dump = await dumpZones();
  const file = shotName(id);
  const buf = await page.screenshot({ path: join(outDir, file), fullPage: true });
  const hash = createHash("sha256").update(buf).digest("hex").slice(0, 16);
  const blank = buf.length < 1200;
  const featureOk =
    id === "QA-20"
      ? (dump.zones || []).includes("SH-02") || /loginUser|Tài khoản|Đăng nhập/i.test(dump.text || "")
      : dump.feature === "web-rmms-offline";
  const entry = {
    id,
    screenshot: file,
    sha16: hash,
    bytes: buf.length,
    blank,
    fatal,
    dump,
    url: page.url(),
    pass: !fatal && !blank && featureOk,
  };
  results.push(entry);
  console.log(JSON.stringify(entry));
  return entry;
}

// S0 — guest offline gate
await clearSession();
await page.goto(featureUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await captureCurrent("S0", '[data-feature="web-rmms-offline"][data-zone="OFF-00"]');

// QA-20 — LoginSheet from Home guest CTA (shell SH-02)
await clearSession();
await page.goto(base + "/web-rmms-home", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector("#guestLogin", { timeout: 20000 });
await page.locator("#guestLogin").click();
await page.waitForSelector('#loginUser, [data-zone="SH-02"]', { timeout: 15000 });
await captureCurrent("QA-20", '#loginUser, [data-zone="SH-02"]');

// S1 — staff offline · BANNER · SEG · empty OK
await loginViaSheet();
await page.goto(featureUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-feature="web-rmms-offline"] #btn-sync', { timeout: 20000 });
// seed one check-in for CARD evidence (local store · no invent GET)
await page.evaluate(() => {
  const key = "linm.offline.queue.v1";
  const item = {
    id: "qa-seed-checkin-1",
    kind: "checkIn",
    sessionId: "00000000-0000-4000-8000-000000000001",
    title: "QA seed check-in",
    location: "Km 0+000",
    content: "",
    timestamp: new Date().toISOString(),
    lat: 21.0285,
    lng: 105.8542,
    isPending: true,
    body: { note: "qa-seed" },
  };
  try {
    localStorage.setItem(key, JSON.stringify([item]));
  } catch {
    /* ignore */
  }
});
await page.reload({ waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-zone="CARD"], [data-zone="empty"], [data-zone="BANNER"]', {
  timeout: 15000,
});
await captureCurrent("S1", '[data-feature="web-rmms-offline"] #btn-sync');

// optional segment switch (incident empty · P1)
await page.locator('[data-seg="incident"]').click().catch(() => {});
await page.waitForTimeout(400);

await browser.close();

const hashes = results.map((r) => r.sha16);
const distinct = new Set(hashes).size === hashes.length;
const ok = results.every((r) => r.pass) && distinct && results.length >= 3;
const manifest = {
  feature: "web-rmms-offline",
  ok,
  method:
    "capture_offline · MFE /web-rmms-offline · phone 430 · S0 guest · S1 staff+seed CARD · QA-20 SH-02 · playwright junction",
  cases: results,
  distinctHashes: distinct,
  writtenAt: new Date().toISOString(),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify({ ok, cases: results.map((r) => ({ id: r.id, pass: r.pass, sha16: r.sha16 })) }));
if (!ok) process.exit(1);
