import { chromium } from "file:///D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\users\\qa\\screens";
const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
try {
  const steps = [
    {
      id: "S0",
      url: "http://localhost:9314/integration/users",
      selector: '[data-testid="rmms-users-list-page"]',
      assertText: "Quản lý người dùng",
    },
    {
      id: "S1",
      url: "http://localhost:9314/integration/users",
      selector: '[data-testid="rmms-users-list-field-jobTitle"]',
      assertText: "Chức vụ",
    },
    {
      id: "QA-20",
      url: "http://localhost:9314/integration/users/new",
      selector: '[data-testid="rmms-users-form-page"]',
      assertText: "Chức vụ",
    },
  ];
  for (const step of steps) {
    const file = shotName(step.id);
    const abs = join(outDir, file);
    try {
      const res = await page.goto(step.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
      await page.waitForSelector(step.selector, { timeout: 25000 });
      if (step.assertText) {
        await page.waitForFunction(
          (t) => (document.body?.innerText || "").includes(t),
          step.assertText,
          { timeout: 15000 },
        );
      }
      await page.waitForTimeout(2000);
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
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: "http://localhost:9314/integration/users",
      capturedAt: new Date().toISOString(),
      steps: results,
      ok: results.every((s) => s.result === "PASS"),
    },
    null,
    2,
  ),
  "utf8",
);
if (results.some((s) => s.result === "FAIL")) process.exit(1);
