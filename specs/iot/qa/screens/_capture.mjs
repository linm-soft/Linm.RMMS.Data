/**
 * IoT E2E capture — channel=chrome (system) · headless
 * S0 list · S1 list reload · QA-20 create form
 * Avoids hung `npx playwright install` (dirlock).
 */
import { chromium } from "playwright";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "D:/AI-QLBD/Linm.RMMS.Data/specs/iot/qa/screens";
const base = "http://localhost:9309";
const steps = [
  { id: "S0", url: `${base}/iot`, selector: '[data-testid="rmms-iot-list-page"]' },
  { id: "S1", url: `${base}/iot`, selector: '[data-testid="rmms-iot-list-page"]' },
  { id: "QA-20", url: `${base}/iot/tao-moi`, selector: '[data-testid="rmms-iot-form-page"]' },
];

const results = [];
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  for (const step of steps) {
    const file = `${step.id}.png`;
    const abs = join(outDir, file);
    try {
      const res = await page.goto(step.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      if (!res || !res.ok()) throw new Error(`HTTP ${res ? res.status() : "no-response"}`);
      await page.waitForSelector(step.selector, { timeout: 20000 });
      await page.waitForTimeout(800);
      await page.screenshot({ path: abs, fullPage: true });
      const sha = createHash("sha256").update(readFileSync(abs)).digest("hex").slice(0, 16);
      results.push({ id: step.id, result: "PASS", screenshot: file, sha16: sha });
    } catch (err) {
      try {
        await page.screenshot({ path: abs, fullPage: true });
      } catch {
        /* ignore */
      }
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

const manifest = {
  url: `${base}/iot`,
  method: "playwright channel=chrome headless · contract fallback after yarn e2e-qa install fail",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
