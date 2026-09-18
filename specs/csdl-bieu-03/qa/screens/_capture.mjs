/**
 * QA E2E capture — edit_page T-XLS-S03 + CRUD KEEP · Import DEFER.
 * yarn e2e-qa overwrites this file with bare `import "playwright"` → recreate via createRequire.
 * skip-start · cấm kill worker (GAP-QA-E2E-KILL-01).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-03\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-03";
const hubUrl = "http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels";
const formUrl = "http://localhost:9301/csdl-bieu-03?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-03-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-03-form-slideout"]';
const hubListSel = '[data-testid="rmms-csdl-bieu-03-list-page"]';
const exportSel = '[data-testid="rmms-csdl-bieu-03-list-export-excel-btn"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    also: exportSel,
    note: "list Biểu 03 · toolbar Xuất · filter-bar · 0 filter export · Import ẩn",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubListSel,
    also: exportSel,
    note: "hub deep-link ?resource=road-tunnels → Biểu 03 list",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-03-form-z2"]',
    note: "Create Slideout · form=create KEEP · GPS×6 · TN-",
  },
];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const results = [];
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
        url: step.url,
        note: step.note,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
} finally {
  await browser.close();
}

const manifest = {
  url: listUrl,
  method:
    "playwright channel=chrome · yarn e2e-qa overwrite→createRequire fallback · skip-start · cấm kill",
  feature: "csdl-bieu-03",
  cases: ["S0", "S1", "QA-20"],
  changeScope: "edit_page",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
process.exit(manifest.ok ? 0 : 1);
