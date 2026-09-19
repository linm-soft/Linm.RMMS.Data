/**
 * QA E2E capture — edit_page T-XLS-S01 + CRUD KEEP.
 * yarn e2e-qa fails resolve playwright from screens cwd → run via createRequire(AutoCode).
 * channel=chrome · skip-start · cấm kill worker.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-01\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-01";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections";
const formUrl = "http://localhost:9301/csdl-bieu-01?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-01-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-01-form-slideout"]';
/** hub ?resource= now mounts Biểu 01 list (not hub cards) */
const hubListSel = '[data-testid="rmms-csdl-bieu-01-list-page"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    also: '[data-testid="rmms-csdl-bieu-01-list-export-excel-btn"]',
    note: "list Biểu 01 · toolbar Xuất/Nhập · filter-bar · empty/grid",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubListSel,
    also: '[data-testid="rmms-csdl-bieu-01-list-import-excel-btn"]',
    note: "hub deep-link ?resource=pavement-sections → Biểu 01 list",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-01-form-z2"]',
    note: "Create Slideout · form=create KEEP",
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
    "playwright channel=chrome · yarn e2e-qa playwright resolve fail → AutoCode createRequire fallback · skip-start",
  feature: "csdl-bieu-01",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
