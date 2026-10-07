/**
 * E2E capture — web-rmms-cam-journal (product deep-link; stock alias may soft-fail)
 * Product: /nhat-ky/:sessionId · /moi · alias /web-rmms-cam-journal → /nhat-ky
 * HARD: cấm taskkill node/yarn · reuse start:std :9301
 */
import pw from "file:///D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.js";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const { chromium: chromiumLauncher } = pw;
const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
/** Prefer live hub session; override via E2E_SESSION_ID */
let SESSION = process.env.E2E_SESSION_ID || "cf7cea17-1b5f-4c12-8d8f-d01d0c5b1fb7";
let LIST = `${base}/nhat-ky/${SESSION}`;
let FORM = `${base}/nhat-ky/${SESSION}/moi`;

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
console.log("[jl] creds user_set=", !!user, "pass_len=", password.length);

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

const results = [];
console.log("[jl] launch headless phone 430");
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
        '[data-des-id="JL-01"], [data-des-id="JL-02"], [data-testid="roleGateBanner"], [data-feature="web-rmms-cam-journal"]',
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
  await page.goto(base + "/dang-nhap", { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
  if (!(await page.locator('#f-pass, input[type="password"]').count())) {
    await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  }
  await page.waitForSelector('#f-pass, input[type="password"]', { timeout: 20000 });
  const userEl = page.locator("#f-user, input[name='username'], input[type='text']").first();
  const passEl = page.locator("#f-pass, input[type='password']").first();
  await userEl.fill(user);
  await passEl.fill(password);
  await page.locator("#btn-login, button[type='submit'], button:has-text('Đăng nhập')").first().click({ force: true });
  await page.waitForFunction(() => !/\/dang-nhap|\/login/i.test(location.pathname), {
    timeout: 30000,
  });
  await page.waitForTimeout(1500);
  console.log("[jl] after login href=", page.url());
}

async function ensureStaff() {
  await page.goto(base + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
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
  await page.goto(base + "/tuan-duong", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector('[data-testid="sc-patrol-home"], [data-testid^="row-today-"]', {
    timeout: 30000,
  });
  await page.waitForTimeout(1500);
  const liveId = await page.evaluate(() => {
    const row = document.querySelector('[data-testid^="row-today-"]');
    const tid = row?.getAttribute("data-testid") || "";
    const m = tid.match(/^row-today-(.+)$/);
    return m ? m[1] : "";
  });
  if (liveId) {
    SESSION = liveId;
    LIST = `${base}/nhat-ky/${SESSION}`;
    FORM = `${base}/nhat-ky/${SESSION}/moi`;
  }
  console.log("[jl] session=", SESSION, "LIST=", LIST);
}

async function dumpZones() {
  return page.evaluate(() => {
    const testids = [
      "roleGateBanner",
      "jl-cta-create",
      "jl-cta-create-empty",
      "jl-cta-create-bottom",
      "jl-btn-save",
    ].filter((id) => document.querySelector(`[data-testid="${id}"]`));
    const desIds = ["JL-01", "JL-02", "JL-01v", "JL-02v"].filter((id) =>
      document.querySelector(`[data-des-id="${id}"]`),
    );
    const feature = !!document.querySelector('[data-feature="web-rmms-cam-journal"]');
    const text = (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " ");
    return { testids, desIds, feature, text, href: location.href };
  });
}

async function captureCurrent(id, mustAny) {
  const file = shotName(id);
  const abs = join(outDir, file);
  console.log("[jl] capture", id, mustAny);
  try {
    if (/\/dang-nhap|\/login/i.test(pathOf(page))) {
      throw new Error("still on login gate " + page.url());
    }
    const sel = mustAny.join(", ");
    await page.waitForSelector(sel, { timeout: 30000 });
    await page.waitForTimeout(1400);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    const dump = await dumpZones();
    if (!dump.feature && !dump.desIds.length) {
      throw new Error("missing JL zones got=" + JSON.stringify(dump));
    }
    if (/\/dang-nhap|\/login/i.test(pathOf(page))) {
      throw new Error("redirected to login after wait");
    }
    await page.screenshot({ path: abs, fullPage: true });
    results.push({ id, result: "PASS", screenshot: file, href: page.url(), dump });
    console.log("[jl]", id, "PASS", dump.testids.join(","), dump.desIds.join(","));
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
    console.log("[jl]", id, "FAIL", err instanceof Error ? err.message : String(err));
  }
}

try {
  pageErrors.length = 0;
  try {
    await ensureStaff();
    await page.goto(LIST, { waitUntil: "domcontentloaded", timeout: 60000 });
    await dismissOverlay(page);
    await page.waitForTimeout(2000);
    if (/\/dang-nhap|\/login/i.test(pathOf(page)) || (await page.locator("#f-pass").count())) {
      await fillLogin();
      await page.goto(LIST, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(2000);
    }
    await captureCurrent("S0", [
      '[data-des-id="JL-02"]',
      '[data-feature="web-rmms-cam-journal"]',
      '[data-testid="roleGateBanner"]',
    ]);
  } catch (err) {
    results.push({
      id: "S0",
      result: "FAIL",
      error: err instanceof Error ? err.message : String(err),
    });
  }

  pageErrors.length = 0;
  try {
    await page.goto(FORM, { waitUntil: "domcontentloaded", timeout: 60000 });
    await dismissOverlay(page);
    await page.waitForTimeout(1500);
    await captureCurrent("S1", [
      '[data-des-id="JL-01"]',
      '[data-feature="web-rmms-cam-journal"]',
      '[data-testid="roleGateBanner"]',
    ]);
  } catch (err) {
    results.push({
      id: "S1",
      result: "FAIL",
      error: err instanceof Error ? err.message : String(err),
    });
  }

  pageErrors.length = 0;
  try {
    const cancel = page.locator('button:has-text("Huỷ"), button:has-text("Hủy")').first();
    if (await cancel.count()) {
      await cancel.click({ force: true });
      await page.waitForTimeout(800);
      const leaveOk = page
        .locator(
          'button:has-text("Rời"), button:has-text("OK"), button:has-text("Đồng ý"), button:has-text("Huỷ"), button:has-text("Hủy")',
        )
        .first();
      if (await leaveOk.count()) await leaveOk.click({ force: true }).catch(() => {});
      await page.waitForTimeout(1000);
    } else {
      await page.goto(LIST, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(1500);
    }
    await dismissOverlay(page);
    await captureCurrent("QA-20", [
      '[data-des-id="JL-02"]',
      '[data-feature="web-rmms-cam-journal"]',
      '[data-testid="roleGateBanner"]',
    ]);
  } catch (err) {
    results.push({
      id: "QA-20",
      result: "FAIL",
      error: err instanceof Error ? err.message : String(err),
    });
  }
} finally {
  await browser.close();
  const ok = results.length > 0 && results.every((r) => r.result === "PASS");
  writeFileSync(
    join(outDir, "manifest.json"),
    JSON.stringify(
      {
        url: LIST,
        aliasUrl: "http://localhost:9301/web-rmms-cam-journal",
        sessionId: SESSION,
        method: "_capture_jl.mjs",
        capturedAt: new Date().toISOString(),
        steps: results.map((r) => ({
          id: r.id,
          result: r.result,
          screenshot: r.screenshot,
          href: r.href,
          error: r.error,
        })),
        dumps: results.map((r) => ({ id: r.id, dump: r.dump })),
        ok,
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ ok, results }, null, 2));
  process.exit(ok ? 0 : 1);
}
