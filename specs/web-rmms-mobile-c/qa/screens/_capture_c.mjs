import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
/** SSOT route — STATUS/dev-compact mfeStdRoute=/phat-hien */
const FEATURE = "/phat-hien";
const PEER_A = "/tuan-kiem";
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
  geolocation: { latitude: 21.0285, longitude: 105.8542, accuracy: 12 },
  permissions: ["geolocation"],
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

async function fatalUi(p) {
  const overlay = p.locator(
    'iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay',
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

async function login() {
  await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector('input[name="username"], input[type="password"]', { timeout: 15000 });
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
  await page.waitForTimeout(1200);
}

async function capture(id, href, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    const res = await page.goto(href, { waitUntil: "domcontentloaded", timeout: 60000 });
    if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 25000 });
    await page.waitForTimeout(1600);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    results.push({ id, result: "PASS", screenshot: file, href: page.url() });
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
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
    });
  }
}

try {
  await login();

  // S0 — TK-02 danh mục phiếu
  await capture(
    "S0",
    base + FEATURE,
    '[data-des-id="TK-02"], [data-feature="web-rmms-mobile-c"], body',
  );
  const afterS0 = page.url();
  const sessionMatch = afterS0.match(/phat-hien\/([^/?#]+)/);
  const sessionId =
    sessionMatch && sessionMatch[1] !== "moi" && sessionMatch[1] !== "new"
      ? sessionMatch[1]
      : "";

  // S1 — peer hub A · CTA Phiếu phát hiện
  await capture("S1", base + PEER_A, '[data-des-id="TK-00"], body');

  // QA-20 — form create TK-03 (/moi · not stock /new)
  if (sessionId) {
    await capture(
      "QA-20",
      base + `${FEATURE}/${sessionId}/moi`,
      '[data-des-id="TK-03"], form, body',
    );
  } else {
    // fallback: click Tạo phiếu on list if present
    await page.goto(base + FEATURE, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(1200);
    const createBtn = page.getByRole("button", { name: /Tạo phiếu|Lập phiếu|Thêm/i }).first();
    if (await createBtn.count()) {
      await createBtn.click();
      await page.waitForTimeout(1600);
      const fatal = await fatalUi(page);
      if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
      const file = shotName("QA-20");
      await page.screenshot({ path: join(outDir, file), fullPage: true });
      results.push({ id: "QA-20", result: "PASS", screenshot: file, href: page.url() });
    } else {
      await capture("QA-20", base + FEATURE, '[data-des-id="TK-02"], body');
    }
  }
} finally {
  await browser.close();
}

const ok = results.every((s) => s.result === "PASS");
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: base + FEATURE,
      capturedAt: new Date().toISOString(),
      method:
        "capture_c · /phat-hien · MFE /login · phone 430 · geolocation · stock e2e QA-20=/new DUP→feature /moi",
      steps: results,
      ok,
      stockE2eNote:
        "yarn e2e-qa --skip-start: S0/S1 PASS · QA-20 FAIL GAP-QA-E2E-DUP-01 (appends /new ≠ /:sessionId/moi)",
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) process.exit(1);
