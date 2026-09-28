import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
/** Live route after ui-align rename (STATUS mfeStdUrl `/web-rmms-mobile-b` → 404). */
const liveRoot = "/nhat-ky";
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
  // Overlay can flash during HMR — require still-visible after settle.
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
  if (/Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(t)) {
    return "crash text: " + t.slice(0, 180).replace(/\s+/g, " ");
  }
  if (/404\s*Trang không tìm thấy/i.test(t)) {
    return "404 not found";
  }
  if (pageErrors.length) return "pageerror: " + pageErrors.slice(-1)[0];
  return null;
}

async function login() {
  await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector('input[name="username"], input[type="password"]', { timeout: 15000 });
  await page.fill('input[name="username"]', user);
  await page.fill('input[type="password"]', password);
  await Promise.all([
    page.waitForLoadState("networkidle").catch(() => {}),
    page.click('button[type="submit"]'),
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
    await page.waitForTimeout(1500);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    const body = (await page.locator("body").innerText().catch(() => "")).replace(/\s+/g, " ").slice(0, 240);
    results.push({ id, result: "PASS", screenshot: file, href: page.url(), body });
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

  // STATUS SSOT URL — expected FAIL (alias missing after rename to /nhat-ky)
  await capture("S0-std-url", base + "/web-rmms-mobile-b", "body");

  // S0 — live TD-04 sổ
  await capture("S0", base + liveRoot, '[data-des-id="TD-04"], [data-feature="web-rmms-mobile-b"]');
  const afterS0 = page.url();
  const sessionMatch = afterS0.match(/nhat-ky\/([^/?#]+)/);
  const sessionId =
    sessionMatch && sessionMatch[1] !== "new" && sessionMatch[1] !== "moi"
      ? sessionMatch[1]
      : "";

  // S1 — Patrol hub peer A · CTA đợt B
  if (sessionId) {
    await capture("S1", base + `/tuan-duong/${sessionId}`, "body");
  } else {
    await capture("S1", base + "/tuan-duong", "body");
  }

  // QA-20 — form create TD-05
  if (sessionId) {
    await capture(
      "QA-20",
      base + `${liveRoot}/${sessionId}/moi`,
      '[data-des-id="TD-05"]',
    );
  } else {
    await capture("QA-20", base + liveRoot, '[data-des-id="TD-04"]');
  }
} finally {
  await browser.close();
}

const core = results.filter((s) => ["S0", "S1", "QA-20"].includes(s.id));
const ok = core.every((s) => s.result === "PASS");
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: base + "/web-rmms-mobile-b",
      liveUrl: base + liveRoot,
      capturedAt: new Date().toISOString(),
      method: "capture_b · MFE /login · phone 430 · geolocation mock · live /nhat-ky",
      steps: results,
      ok,
      note: "STATUS mfeStdUrl /web-rmms-mobile-b 404 · live /nhat-ky",
    },
    null,
    2,
  ),
  "utf8",
);
console.log(JSON.stringify({ ok, steps: results }, null, 2));
process.exit(ok ? 0 : 1);
