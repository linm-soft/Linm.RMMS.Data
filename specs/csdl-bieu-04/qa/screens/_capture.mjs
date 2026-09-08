import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const cfg = {"url":"http://localhost:9301/csdl-bieu-04","outDir":"D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-04\\qa\\screens","loginPage":"http://localhost:9100/login","company":"RMMS","headless":false,"pagesWait":null,"testid":"rmms-csdl-bieu-04-list-page","steps":[{"id":"S0","action":"goto","selector":"[data-testid=\"rmms-csdl-bieu-04-list-page\"]"}]};
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
  await page.goto(cfg.loginPage, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
  try { await page.waitForSelector('input[type="password"]', { timeout: 12000 }); } catch { return; }
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
  await page.keyboard.press("Enter");
  await page.waitForLoadState("networkidle").catch(() => {});
}

const browser = await chromium.launch({ headless: cfg.headless !== false });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
try {
  await fillLogin(page);
  if (cfg.pagesWait) {
    const origin = new URL(cfg.url).origin;
    const deadline = Date.now() + 120000;
    let switched = false;
    let last = "";
    while (Date.now() < deadline) {
      const json = await page.evaluate(async (u) => {
        const r = await fetch(u, { cache: "no-store" });
        if (!r.ok) return null;
        return r.json();
      }, origin + "/_manifest.json?t=" + Date.now());
      const map = json && (json.microfrontends || json.microfrontends);
      const entry = map && map[cfg.pagesWait.mfeKey];
      last = entry ? ((entry.version || "") + " " + (entry.url || "")) : "missing";
      if (entry
        && (!cfg.pagesWait.expectVersion || entry.version === cfg.pagesWait.expectVersion)
        && (!cfg.pagesWait.expectUrl || entry.url === cfg.pagesWait.expectUrl)) {
        switched = true;
        break;
      }
      await new Promise((x) => setTimeout(x, 1500));
    }
    if (!switched) throw new Error("GAP-QA-PAGES-01 manifest not switched: " + last);
  }
  for (const step of cfg.steps) {
    const file = shotName(step.id);
    const abs = join(cfg.outDir, file);
    try {
      if (step.action === "goto") {
        const res = await page.goto(cfg.url, { waitUntil: "domcontentloaded", timeout: 60000 });
        if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
        if (step.selector) {
          await page.waitForSelector(step.selector, { timeout: 20000 });
        }
        await new Promise((r) => setTimeout(r, 800));
      } else if (step.action === "click") {
        const loc = step.selector
          ? page.locator(step.selector).first()
          : page.getByRole("button", { name: step.text || "Xem" }).first();
        if (await loc.count()) {
          await loc.click({ timeout: 15000 });
          await new Promise((r) => setTimeout(r, 1200));
        }
      } else if (step.action === "assertText") {
        const needle = step.text || "";
        const body = await page.locator("body").innerText();
        if (needle && !body.includes(needle)) throw new Error("missing text: " + needle);
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
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
}, null, 2), "utf8");
if (results.some((s) => s.result === "FAIL")) process.exit(1);
