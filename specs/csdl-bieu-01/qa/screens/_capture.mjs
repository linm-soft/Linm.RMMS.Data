/**
 * QA E2E capture — yarn e2e-qa contract (GAP-QA-E2E-PW-01 fallback).
 * `playwright install chromium` hung · use channel=chrome (system Chrome).
 * std + docker already listen · skip-start semantics · cấm kill worker.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const pw = await import(
  pathToFileURL(
    "D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs",
  ).href,
);
const { chromium } = pw;
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-01\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-01";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections";
const formUrl = "http://localhost:9301/csdl-bieu-01?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-01-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-01-form-slideout"]';
/** hub deep-link with resource → list (not hub cards) */
const hubListSel = '[data-testid="rmms-csdl-so-sach-list-page"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list Biểu 01 · filter-bar · empty/grid",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubListSel,
    note: "hub deep-link ?resource=pavement-sections → list",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-01-form-z2"]',
    note: "Create Slideout · form=create",
  },
];

const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const browser = await chromium.launch({
  headless: true,
  channel: "chrome",
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
      await page.waitForSelector(step.selector, { timeout: 25000 });
      if (step.also) {
        await page.waitForSelector(step.also, { timeout: 15000 });
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
        url: step.url,
        note: step.note,
      });
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
        url: step.url,
      });
    }
  }
} finally {
  await browser.close();
}

const manifest = {
  url: listUrl,
  method:
    "playwright channel=chrome headless · contract fallback after yarn e2e-qa playwright install hang",
  feature: "csdl-bieu-01",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
