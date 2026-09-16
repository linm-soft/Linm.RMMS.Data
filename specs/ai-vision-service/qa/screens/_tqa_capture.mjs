import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
const out = "D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/qa/screens";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const results = [];
async function shot(id, url, sel) {
  try {
    const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    if (!res || !res.ok()) throw new Error("HTTP " + (res && res.status()));
    if (sel) await page.waitForSelector(sel, { timeout: 25000 }).catch(()=>{});
    await page.waitForTimeout(1200);
    // fail if 404 card visible
    const notFound = await page.locator("text=Trang không tìm thấy").count();
    const file = id + ".png";
    await page.screenshot({ path: join(out, file), fullPage: false });
    if (notFound) results.push({ id, result: "FAIL", screenshot: file, error: "404 page" });
    else results.push({ id, result: "PASS", screenshot: file });
  } catch (e) {
    const file = id + ".png";
    await page.screenshot({ path: join(out, file), fullPage: false }).catch(()=>{});
    results.push({ id, result: "FAIL", screenshot: file, error: String(e && e.message || e) });
  }
}
await shot("T-QA-AI-01", "http://localhost:9301/ai-vision-service", "[data-testid=\"rmms-ai-vision-service-hub\"]");
await shot("T-QA-FILTER-01", "http://localhost:9301/ai-kd/phat-hien-ts", "body");
await shot("T-QA-CRUD-01", "http://localhost:9301/ai-kd", "body");
await shot("T-QA-FORM-01", "http://localhost:9301/ai-kd/tao-moi", "body");
await page.setViewportSize({ width: 1280, height: 800 });
await shot("T-QA-FILTER-02-D", "http://localhost:9301/ai-kd/phat-hien-ts", "body");
await page.setViewportSize({ width: 768, height: 900 });
await shot("T-QA-FILTER-02-T", "http://localhost:9301/ai-kd/phat-hien-ts", "body");
await page.setViewportSize({ width: 375, height: 812 });
await shot("T-QA-FILTER-02-M", "http://localhost:9301/ai-kd/phat-hien-ts", "body");
await browser.close();
writeFileSync(join(out, "manifest-tqa.json"), JSON.stringify({ ok: results.every(r=>r.result==="PASS"), steps: results, capturedAt: new Date().toISOString() }, null, 2));
console.log(JSON.stringify(results, null, 2));
