import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const cfg = {
  url: "http://localhost:9301/gis-patrol-map",
  liveUrl: "http://localhost:9301/gis/tuan-duong",
  outDir: "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\gis-patrol-map\\qa\\screens",
  loginPage: "http://localhost:9100/login",
  company: "RMMS",
  headless: true,
  testid: "rmms-gis-patrol-map-page",
  steps: [
    { id: "S0", action: "goto" },
    { id: "S1", action: "assertList" },
    { id: "QA-20", action: "inspect" },
  ],
};
const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const user = process.env.QLBD_USER || process.env.E2E_USER || process.env.QLBD_DEMO_USER || "";
const password = process.env.QLBD_PASSWORD || process.env.E2E_PASSWORD || process.env.QLBD_DEMO_PASS || "";
if (!user || !password) throw new Error("GAP-QA-E2E-03 missing QLBD_USER/PASSWORD");

async function fillLogin(page) {
  const userSel = [
    'input[name="username"]', 'input[name="userName"]', 'input[autocomplete="username"]',
    'input[placeholder*="tài khoản" i]', 'input[placeholder*="đăng nhập" i]',
    'input[type="text"]', 'input[type="email"]',
  ];
  const passSel = ['input[name="password"]', 'input[type="password"]'];
  const submitSel = ['button[type="submit"]', 'button:has-text("Đăng nhập")', 'button:has-text("Login")'];
  await page.goto(cfg.loginPage, { waitUntil: "domcontentloaded", timeout: 15000 }).catch(() => {});
  try { await page.waitForSelector('input[type="password"]', { timeout: 4000 }); } catch { return; }
  for (const s of userSel) {
    const el = page.locator(s).first();
    if (await el.count()) { await el.fill(user); break; }
  }
  for (const s of passSel) {
    const el = page.locator(s).first();
    if (await el.count()) { await el.fill(password); break; }
  }
  if (cfg.company) {
    const c = page.locator('input[name="company"], input[placeholder*="đơn vị" i]').first();
    if (await c.count()) await c.fill(cfg.company);
  }
  for (const s of submitSel) {
    const el = page.locator(s).first();
    if (await el.count()) {
      await Promise.all([page.waitForLoadState("networkidle").catch(() => {}), el.click()]);
      return;
    }
  }
}

async function openPatrol(page) {
  let res = await page.goto(cfg.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  if (!res || !res.ok()) {
    res = await page.goto(cfg.liveUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  }
  if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
  await page.waitForSelector(`[data-testid="${cfg.testid}"]`, { timeout: 30000 });
  // Wait Leaflet tiles/map host — soft timeout
  await page.waitForFunction(() => {
    const t = document.body?.innerText || "";
    return !t.includes("Đang tải Leaflet") && !!document.querySelector(".leaflet-container, [data-testid='rmms-gis-map-host'], .rmms-gis-map");
  }, { timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(1500);
}

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
try {
  await fillLogin(page);
  for (const step of cfg.steps) {
    const file = shotName(step.id);
    const abs = join(cfg.outDir, file);
    try {
      if (step.action === "goto") {
        await openPatrol(page);
      } else if (step.action === "assertList") {
        await openPatrol(page);
        const body = await page.locator("body").innerText();
        if (!/Nguyễn Văn A|Đang tuần|Tuần đường/i.test(body)) {
          throw new Error("missing list/person text on SCR-MAP");
        }
      } else if (step.action === "inspect") {
        await openPatrol(page);
        const person = page.locator("text=Nguyễn Văn A").first();
        if (await person.count()) {
          await person.click({ timeout: 10000 });
          await page.waitForTimeout(1200);
        }
        const pin = page.locator(".leaflet-marker-icon, .rmms-ci-pin-icon").first();
        if (await pin.count()) {
          await pin.click({ timeout: 8000 }).catch(() => {});
          await page.waitForTimeout(1200);
        }
      }
      await page.screenshot({ path: abs, fullPage: true });
      results.push({ id: step.id, result: "PASS", screenshot: file });
    } catch (err) {
      try { await page.screenshot({ path: abs, fullPage: true }); } catch { /* ignore */ }
      results.push({
        id: step.id,
        result: "FAIL",
        screenshot: file,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
} finally {
  await browser.close();
}
writeFileSync(join(cfg.outDir, "manifest.json"), JSON.stringify({
  url: cfg.url,
  liveUrl: cfg.liveUrl,
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
}, null, 2), "utf8");
if (results.some((s) => s.result === "FAIL")) process.exit(1);
