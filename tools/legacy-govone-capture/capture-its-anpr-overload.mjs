import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const cfg = {
  url: "http://localhost:9303/its-anpr-overload",
  outDir: "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\its-anpr-overload\\qa\\screens",
  testid: "rmms-its-anpr-overload-list-page",
  steps: [
    { id: "S0", action: "goto", selector: '[data-testid="rmms-its-anpr-overload-list-page"]' },
    { id: "S1", action: "wait", selector: '[data-testid="rmms-its-anpr-overload-list-kpi"]' },
    {
      id: "QA-20",
      action: "click",
      selector: '[data-testid="rmms-its-anpr-overload-list-create"]',
    },
  ],
};

const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-") + ".png";
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
try {
  for (const step of cfg.steps) {
    const file = shotName(step.id);
    const abs = join(cfg.outDir, file);
    try {
      if (step.action === "goto") {
        const res = await page.goto(cfg.url, { waitUntil: "domcontentloaded", timeout: 90000 });
        if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
        if (step.selector) {
          await page.waitForSelector(step.selector, { timeout: 30000 });
        }
        await page.waitForTimeout(1200);
      } else if (step.action === "wait") {
        if (step.selector) {
          await page.waitForSelector(step.selector, { timeout: 30000 });
        }
        await page.waitForTimeout(800);
      } else if (step.action === "click") {
        const loc = page.locator(step.selector).first();
        if (await loc.count()) {
          await loc.click({ timeout: 15000 });
          await page.waitForTimeout(1200);
        } else {
          throw new Error("missing selector: " + step.selector);
        }
      }
      await page.screenshot({ path: abs, fullPage: true });
      results.push({ id: step.id, result: "PASS", screenshot: file });
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

writeFileSync(
  join(cfg.outDir, "manifest.json"),
  JSON.stringify(
    {
      url: cfg.url,
      capturedAt: new Date().toISOString(),
      steps: results,
      ok: results.every((s) => s.result === "PASS"),
      method: "e2e runtime · start:std + docker + playwright (local browser)",
    },
    null,
    2,
  ),
  "utf8",
);

if (results.some((s) => s.result === "FAIL")) process.exit(1);
