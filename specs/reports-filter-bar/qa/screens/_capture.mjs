/**
 * QA E2E capture — same contract as yarn e2e-qa (GAP-QA-E2E-PW-01 fallback).
 * Standalone MFE :9311 — no portal login. Uses Chromium executablePath.
 */
import { chromium } from "file:///D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs";
import { writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\reports-filter-bar\\qa\\screens";
const chromePath =
  process.env.PLAYWRIGHT_CHROME ||
  "C:\\Users\\LINHDINH\\AppData\\Local\\ms-playwright\\chromium-1234\\chrome-win64\\chrome.exe";

const base = "http://localhost:9311/bao-cao";
const PAGE = '[data-testid="rmms-report-list-page"]';
const ZONE = '[data-testid="rmms-report-list-field-zone"]';
const SEGMENT = '[data-testid="rmms-report-list-field-segment"]';
const FILTER_LAYOUT = '[data-lin-list-layout="erp-filter-bar"]';

const steps = [
  {
    id: "S0",
    url: base,
    selectors: [PAGE, FILTER_LAYOUT, ZONE, SEGMENT],
  },
  {
    id: "S1",
    url: base,
    selectors: [
      PAGE,
      '[data-testid="rmms-report-list-field-route"]',
      ZONE,
      SEGMENT,
      '[data-testid="rmms-report-list-field-family"]',
      '[data-testid="rmms-report-list-field-kind"]',
    ],
    openZone: true,
  },
  {
    id: "QA-20",
    url: base,
    selectors: [PAGE, FILTER_LAYOUT],
    clickSearch: true,
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
      for (const sel of step.selectors || []) {
        await page.waitForSelector(sel, { timeout: 25000 });
      }
      if (step.openZone) {
        const zoneField = page.locator(ZONE);
        const zoneInput = zoneField.locator("input").first();
        if (await zoneInput.count()) {
          await zoneInput.click({ timeout: 10000 });
          await zoneInput.fill("REG");
          await new Promise((r) => setTimeout(r, 1200));
        } else {
          await zoneField.click({ timeout: 10000 });
          await new Promise((r) => setTimeout(r, 800));
        }
      }
      if (step.clickSearch) {
        const searchBtn = page
          .locator(
            'button[aria-label="Xem báo cáo"], [data-testid="rmms-report-list-search"], button[aria-label*="Xem" i]',
          )
          .first();
        if (await searchBtn.count()) {
          await searchBtn.click({ timeout: 15000 });
          await new Promise((r) => setTimeout(r, 2000));
        } else {
          await page.keyboard.press("Enter");
          await new Promise((r) => setTimeout(r, 1500));
        }
        // After Xem: page stays; empty or grid OK
        await page.waitForSelector(PAGE, { timeout: 10000 });
      }
      await new Promise((r) => setTimeout(r, 1500));
      await page.screenshot({ path: abs, fullPage: true });
      const hash = createHash("sha256")
        .update(readFileSync(abs))
        .digest("hex")
        .slice(0, 16);
      results.push({
        id: step.id,
        result: "PASS",
        screenshot: file,
        sha256_16: hash,
      });
    } catch (err) {
      try {
        await page.screenshot({ path: abs, fullPage: true });
      } catch {
        /* ignore */
      }
      let hash = "";
      try {
        hash = createHash("sha256")
          .update(readFileSync(abs))
          .digest("hex")
          .slice(0, 16);
      } catch {
        /* ignore */
      }
      results.push({
        id: step.id,
        result: "FAIL",
        screenshot: file,
        sha256_16: hash,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
} finally {
  await browser.close();
}

const manifest = {
  url: base,
  method:
    "e2e runtime · yarn start:std :9311 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chromium executablePath fallback)",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
  note: "GAP-QA-E2E-PW-01: yarn e2e-qa hung after login banner (headed) — capture used executablePath; GAP-QA-PKT-URL-01: packet :9301/reports-filter-bar rejected · STATUS route_a /bao-cao :9311; live testid rmms-report-list (CTX rmms-reports-hub alias)",
  testid: "rmms-report-list-page",
  filterTestids: [
    "rmms-report-list-field-family",
    "rmms-report-list-field-kind",
    "rmms-report-list-field-route",
    "rmms-report-list-field-zone",
    "rmms-report-list-field-segment",
    "rmms-report-list-field-search",
  ],
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
