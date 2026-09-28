/**
 * Authoritative phone capture for web-rmms-mobile-a (edit delta).
 * STATUS mfeStdUrl `/web-rmms-mobile-a` → HTTP shell 200 but Memory 404 after rename;
 * live routes: `/m/tuan-duong` · `/m/tuan-duong/mo-ca`.
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const liveRoot = "/m/tuan-duong";
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

function fileHash(abs) {
  try {
    return createHash("sha256").update(readFileSync(abs)).digest("hex").slice(0, 16);
  } catch {
    return "";
  }
}

const results = [];
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 430, height: 900 },
  geolocation: { latitude: 21.0285, longitude: 105.8542, accuracy: 12 },
  permissions: ["geolocation"],
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

async function fatalUi(p) {
  await p.waitForTimeout(400);
  const overlay = p.locator(
    'iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay',
  );
  if (await overlay.count()) {
    const vis = await overlay.first().isVisible().catch(() => false);
    if (vis) {
      await p.waitForTimeout(800);
      const still = await overlay.first().isVisible().catch(() => false);
      if (still) return "webpack overlay";
    }
  }
  const t = await p.locator("body").innerText().catch(() => "");
  if (
    /Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(
      t,
    )
  ) {
    return "crash text: " + t.slice(0, 180).replace(/\s+/g, " ");
  }
  if (/404\s*Trang không tìm thấy/i.test(t)) {
    return "404 not found";
  }
  if (pageErrors.length) return "pageerror: " + pageErrors.slice(-1)[0];
  return null;
}

async function login() {
  await page.goto(base + "/dang-nhap", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector(
    'input[name="username"], input[type="password"], #f-pass',
    { timeout: 15000 },
  );
  const userEl = page
    .locator(
      'input[name="username"], input[name="userName"], #f-user, input[type="text"]',
    )
    .first();
  const passEl = page.locator('input[name="password"], input[type="password"], #f-pass').first();
  await userEl.fill(user);
  await passEl.fill(password);
  await Promise.all([
    page.waitForLoadState("networkidle").catch(() => {}),
    page
      .locator('button[type="submit"], #btn-login, button:has-text("Đăng nhập")')
      .first()
      .click(),
  ]);
  await page.waitForTimeout(1200);
}

async function capture(id, href, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    const res = await page.goto(href, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 25000 });
    await page.waitForTimeout(1500);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    const body = (await page.locator("body").innerText().catch(() => ""))
      .replace(/\s+/g, " ")
      .slice(0, 280);
    results.push({
      id,
      result: "PASS",
      screenshot: file,
      href: page.url(),
      hash16: fileHash(abs),
      body,
    });
  } catch (err) {
    try {
      await page.screenshot({ path: abs, fullPage: true });
    } catch {
      /* ignore */
    }
    results.push({
      id,
      result: "FAIL",
      screenshot: file,
      hash16: fileHash(abs),
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
    });
  }
}

try {
  await login();

  // STATUS SSOT alias — expect Memory/UI miss after rename
  await capture("S0-std-url", base + "/web-rmms-mobile-a", "body");

  // S0 — Field hub TD-00
  await capture(
    "S0",
    base + liveRoot,
    '[data-feature="web-rmms-mobile-a"], [data-des-id="TD-00"], body',
  );

  // S1 — session hub (history card) or lich-su — must ≠ S0 bytes
  let sessionHref = "";
  const hist = page.locator('a[href*="/tuan-duong/"], [href*="/tuan-duong/"]').filter({
    hasNotText: /mo-ca|lich-su|check-in/i,
  });
  if (await hist.count()) {
    const href = await hist.first().getAttribute("href");
    if (href) sessionHref = href.startsWith("http") ? href : base + (href.startsWith("/") ? href : `/${href}`);
  }
  if (!sessionHref) {
    const byCode = page.getByText(/TD-\d{8}-\d+/).first();
    if (await byCode.count()) {
      await byCode.click().catch(() => {});
      await page.waitForTimeout(1000);
      if (/tuan-duong\/[^/?#]+/.test(page.url()) && !/mo-ca|lich-su$/.test(page.url())) {
        sessionHref = page.url();
      }
    }
  }
  if (!sessionHref) {
    sessionHref = base + `${liveRoot}/lich-su`;
  }
  await capture(
    "S1",
    sessionHref,
    '[data-des-id="TD-01"], [data-des-id="TD-07"], [data-feature="web-rmms-mobile-a"], body',
  );

  // QA-20 — Mở ca form (route SearchInput · userName RO)
  await capture(
    "QA-20",
    base + `${liveRoot}/mo-ca`,
    '[data-des-id="TD-02"], [data-feature="web-rmms-mobile-a"], body',
  );
} finally {
  await browser.close();
}

const core = results.filter((s) => ["S0", "S1", "QA-20"].includes(s.id));
const hashes = core.map((s) => s.hash16).filter(Boolean);
const dup =
  hashes.length >= 2 && new Set(hashes).size < hashes.length ? "GAP-QA-E2E-DUP-01" : null;
const ok = core.every((s) => s.result === "PASS") && !dup;

writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: base + "/web-rmms-mobile-a",
      liveUrl: base + liveRoot,
      capturedAt: new Date().toISOString(),
      method:
        "capture_a · MFE /dang-nhap · phone 430 · geolocation mock · live /m/tuan-duong · edit delta T-QA-EDIT-01",
      steps: results,
      ok,
      dup,
      note: "STATUS mfeStdUrl /web-rmms-mobile-a alias soft · live /m/tuan-duong",
    },
    null,
    2,
  ),
  "utf8",
);
console.log(JSON.stringify({ ok, dup, steps: results }, null, 2));
process.exit(ok ? 0 : 1);
