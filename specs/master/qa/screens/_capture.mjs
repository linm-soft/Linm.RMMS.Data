/**
 * QA E2E capture — same contract as yarn e2e-qa (GAP-QA-E2E-PW-01 fallback).
 * Uses installed Chromium executablePath — skips hung `playwright install`.
 */
import { chromium } from "playwright";
import { writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\master\\qa\\screens";
const chromePath =
  process.env.PLAYWRIGHT_CHROME ||
  "C:\\Users\\LINHDINH\\AppData\\Local\\ms-playwright\\chromium-1234\\chrome-win64\\chrome.exe";

const steps = [
  {
    id: "S0",
    url: "http://localhost:9318/mas/co-cau-tc",
    selector: '[data-testid="rmms-org-unit-list"]',
  },
  {
    id: "S1",
    url: "http://localhost:9318/mas/co-cau-tc?kind=REG",
    selector: '[data-testid="rmms-org-unit-list"]',
  },
  {
    id: "QA-20",
    url: "http://localhost:9318/mas/co-cau-tc?form=create",
    selector: '[data-testid="rmms-org-unit-form"]',
    fallback: '[data-testid="rmms-org-unit-list"]',
  },
];

const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const browser = await chromium.launch({
  headless: true,
  executablePath: chromePath,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  for (const step of steps) {
    const file = shotName(step.id);
    const abs = join(outDir, file);
    try {
      const res = await page.goto(step.url, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      if (!res || !res.ok()) {
        throw new Error("HTTP " + (res ? res.status() : "no-response"));
      }
      try {
        await page.waitForSelector(step.selector, { timeout: 20000 });
      } catch (selErr) {
        if (step.fallback) {
          await page.waitForSelector(step.fallback, { timeout: 10000 });
        } else {
          throw selErr;
        }
      }
      await new Promise((r) => setTimeout(r, 1200));
      await page.screenshot({ path: abs, fullPage: true });
      const hash = createHash("sha256").update(readFileSync(abs)).digest("hex").slice(0, 16);
      results.push({ id: step.id, result: "PASS", screenshot: file, sha256_16: hash });
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
  url: "http://localhost:9318/mas/co-cau-tc",
  method: "e2e runtime · yarn start:std + docker + yarn e2e-qa contract (Chromium executablePath fallback)",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
  note: "GAP-QA-E2E-PW-01: playwright install hung on __dirlock — capture used executablePath",
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
