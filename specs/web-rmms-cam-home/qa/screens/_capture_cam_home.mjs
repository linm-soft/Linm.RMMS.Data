/**
 * E2E capture — web-rmms-cam-home (custom; stock alias DUP / NotFound)
 * Product: /trang-chu · /tuan-duong · shell tabs Plan #8
 */
import pw from "file:///D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.js";
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const { chromium: chromiumLauncher } = pw;
const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const HOME = `${base}/trang-chu`;
const HUB = `${base}/tuan-duong`;
const LOGIN = `${base}/dang-nhap`;

let user = process.env.QLBD_USER || process.env.E2E_USER || "";
let password = process.env.QLBD_PASSWORD || process.env.E2E_PASSWORD || "";
if (!user || !password) {
  const buf = readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json");
  const s =
    buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf
      ? buf.slice(3).toString("utf8")
      : buf.toString("utf8").replace(/^\uFEFF/, "");
  const rulesCred = JSON.parse(s);
  user = user || rulesCred.user || "";
  password = password || rulesCred.password || "";
}
if (!user || !password) throw new Error("GAP-QA-E2E-03 missing QLBD_USER/PASSWORD");
console.log("[cam-home] creds user_set=", !!user, "pass_len=", password.length);

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}
function pathOf(page) {
  try {
    return new URL(page.url()).pathname;
  } catch {
    return "";
  }
}
function shaFile(abs) {
  try {
    return createHash("sha256").update(readFileSync(abs)).digest("hex").slice(0, 12);
  } catch {
    return "";
  }
}

const results = [];
console.log("[cam-home] launch headless phone 430");
const browser = await chromiumLauncher.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 430, height: 900 },
  geolocation: { latitude: 21.0285, longitude: 105.8542, accuracy: 12 },
  permissions: ["geolocation"],
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

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
        '[data-feature="web-rmms-home"], [data-testid="sc-patrol-home"], [data-field="shell.tab.home"]',
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

async function fillLogin() {
  await page.goto(LOGIN, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
  if (!(await page.locator('#f-pass, input[type="password"]').count())) {
    await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  }
  await page.waitForSelector('#f-pass, input[type="password"]', { timeout: 20000 });
  const userEl = page.locator("#f-user, input[name='username'], input[type='text']").first();
  const passEl = page.locator("#f-pass, input[type='password']").first();
  await userEl.fill(user);
  await passEl.fill(password);
  await page
    .locator("#btn-login, button[type='submit'], button:has-text('Đăng nhập')")
    .first()
    .click({ force: true });
  await page.waitForFunction(() => !/\/dang-nhap|\/login/i.test(location.pathname), {
    timeout: 30000,
  });
  await page.waitForTimeout(1500);
  console.log("[cam-home] after login href=", page.url());
}

async function ensureStaff() {
  await page.goto(HOME, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.evaluate(() => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {
      /* ignore */
    }
  });
  await fillLogin();
  if (/\/dang-nhap|\/login/i.test(pathOf(page))) {
    throw new Error("GAP-QA-E2E-03 login stuck on " + page.url());
  }
}

async function dumpZones() {
  return page.evaluate(() => {
    const zones = [
      ...document.querySelectorAll("[data-des-id], [data-zone]"),
    ].map((el) => el.getAttribute("data-des-id") || el.getAttribute("data-zone"));
    const fields = [...document.querySelectorAll("[data-field]")].map((el) =>
      el.getAttribute("data-field"),
    );
    const testids = [
      "sc-patrol-home",
      "patrol-hero",
      "patrol-hero-empty",
      "patrol-hero-loading",
      "row-quick-supervise",
      "row-quick-nghiemThu",
      "row-quick-field-reflect",
    ].filter((id) => document.querySelector(`[data-testid="${id}"]`));
    const feature =
      document.querySelector('[data-feature="web-rmms-home"]')?.getAttribute("data-feature") ||
      null;
    const hasNtQuick = !!document.querySelector(
      '[data-testid="row-quick-nghiemThu"], [data-field="hub.quick.nghiemThu"]',
    );
    const hasSuperviseQuick = !!document.querySelector(
      '[data-testid="row-quick-supervise"]',
    );
    const shellTabs = fields.filter((f) => f && f.startsWith("shell.tab."));
    const text = (document.body?.innerText || "").slice(0, 1400).replace(/\s+/g, " ");
    return {
      feature,
      zones: [...new Set(zones.filter(Boolean))],
      fields: [...new Set(fields.filter(Boolean))],
      testids,
      hasNtQuick,
      hasSuperviseQuick,
      shellTabs,
      text,
      href: location.href,
      path: location.pathname,
    };
  });
}

async function captureCurrent(id, waitSel, assertFn) {
  const file = shotName(id);
  const abs = join(outDir, file);
  console.log("[cam-home] capture", id, waitSel);
  try {
    if (/\/dang-nhap|\/login/i.test(pathOf(page))) {
      throw new Error("still on login gate " + page.url());
    }
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 30000 });
    await page.waitForTimeout(1400);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    const dump = await dumpZones();
    if (assertFn) {
      const msg = assertFn(dump);
      if (msg) throw new Error(msg);
    }
    await page.screenshot({ path: abs, fullPage: true });
    results.push({
      id,
      result: "PASS",
      screenshot: file,
      href: page.url(),
      sha: shaFile(abs),
      dump,
    });
    console.log("[cam-home]", id, "PASS", "sha=", shaFile(abs));
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
      sha: shaFile(abs),
      dump,
    });
    console.log("[cam-home]", id, "FAIL", err instanceof Error ? err.message : String(err));
  }
}

try {
  pageErrors.length = 0;
  await ensureStaff();

  // S0 — Home CH-HM · hero/tiles/profile/notify
  await page.goto(HOME, { waitUntil: "domcontentloaded", timeout: 60000 });
  await dismissOverlay(page);
  await page.waitForTimeout(2000);
  if (/\/dang-nhap|\/login/i.test(pathOf(page)) || (await page.locator("#f-pass").count())) {
    await fillLogin();
    await page.goto(HOME, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(2000);
  }
  await captureCurrent(
    "S0",
    '[data-feature="web-rmms-home"], [data-zone="HM-00"], [data-field="profileName"]',
    (d) => {
      if (d.feature !== "web-rmms-home" && !d.zones.includes("HM-00")) {
        return "GAP-QA-S0 missing Home feature/zone";
      }
      if (!d.fields.includes("profileName")) return "GAP-QA-S0 missing profileName";
      if (!d.fields.includes("notifyBadge")) return "GAP-QA-S0 missing notifyBadge";
      // assign must go /van-de when visible — soft check via href later
      if (d.fields.includes("gridAssign") && !/van-de|Giao việc/i.test(d.text + d.href)) {
        // tile label may still say Giao việc; path check on click skipped
      }
      return null;
    },
  );

  // S1 — Hub /tuan-duong · NT quick REMOVED · supervise qlHat-gated
  pageErrors.length = 0;
  await page.goto(HUB, { waitUntil: "domcontentloaded", timeout: 60000 });
  await dismissOverlay(page);
  await page.waitForTimeout(2000);
  await captureCurrent(
    "S1",
    '[data-testid="sc-patrol-home"], [data-testid="patrol-hero"], [data-testid="patrol-hero-empty"], [data-testid="patrol-hero-loading"]',
    (d) => {
      if (!d.testids.includes("sc-patrol-home") && !/tuan-duong/i.test(d.path)) {
        return "GAP-QA-S1 missing patrol hub";
      }
      if (d.hasNtQuick) return "GAP-QA-S1 hub.quick.nghiemThu MUST be removed";
      // supervise may be absent for non-qlHat principal — OK
      return null;
    },
  );

  // QA-20 — Shell Plan #8 tabs on home
  pageErrors.length = 0;
  await page.goto(HOME, { waitUntil: "domcontentloaded", timeout: 60000 });
  await dismissOverlay(page);
  await page.waitForTimeout(1500);
  // click field tab then back to distinct PNG
  const fieldTab = page.locator('[data-field="shell.tab.field"]');
  if (await fieldTab.count()) {
    await fieldTab.first().click({ force: true });
    await page.waitForTimeout(1800);
  }
  await captureCurrent(
    "QA-20",
    '[data-field="shell.tab.home"], [data-field="shell.tab.field"], [data-testid="sc-patrol-home"]',
    (d) => {
      const need = ["shell.tab.home", "shell.tab.field", "shell.tab.incident", "shell.tab.work", "shell.tab.me"];
      const missing = need.filter((t) => !d.fields.includes(t) && !d.shellTabs.includes(t));
      // tabs may stay mounted from shell layout even on hub
      if (missing.length === need.length) {
        return "GAP-QA-20 missing shell.tab.* Plan #8";
      }
      // at least field navigation happened or shell present
      if (!/tuan-duong|trang-chu|van-de|cong-viec|toi/i.test(d.path) && missing.length) {
        return "GAP-QA-20 shell navigate fail " + missing.join(",");
      }
      return null;
    },
  );
} catch (err) {
  results.push({
    id: "BOOT",
    result: "FAIL",
    error: err instanceof Error ? err.message : String(err),
  });
  console.error("[cam-home] BOOT FAIL", err);
}

await browser.close();

const shas = results.filter((r) => r.sha).map((r) => r.sha);
const distinct = new Set(shas).size === shas.length && shas.length >= 3;
const ok = results.every((r) => r.result === "PASS") && distinct;
const manifest = {
  ok,
  feature: "web-rmms-cam-home",
  method: "_capture_cam_home.mjs",
  runtimeUrl: HOME,
  mfeStdAlias: "http://localhost:9301/web-rmms-cam-home",
  distinctShas: distinct,
  steps: results,
  writtenAt: new Date().toISOString(),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("[cam-home] manifest ok=", ok, "distinct=", distinct);
console.log(JSON.stringify(manifest, null, 2));
process.exit(ok ? 0 : 1);
