/**
 * QA E2E capture — edit_page T-XLS-S10 + CRUD KEEP.
 * yarn e2e-qa overwrites this with bare playwright → GAP-QA-E2E-PW-01.
 * Run AFTER e2e-qa via: node this file (createRequire AutoCode).
 * channel=chrome · skip-start · cấm kill worker (GAP-QA-E2E-KILL-01).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-10\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-10";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls";
const formUrl = "http://localhost:9301/csdl-bieu-10?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-10-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-10-form-slideout"]';
const hubListSel = '[data-testid="rmms-csdl-bieu-10-list-page"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    also: '[data-testid="rmms-csdl-bieu-10-list-export-excel-btn"]',
    note: "list Biểu 10 · toolbar Xuất/Nhập · filter-bar · empty/grid · peer",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubListSel,
    also: '[data-testid="rmms-csdl-bieu-10-list-import-excel-btn"]',
    note: "hub deep-link ?resource=retaining-walls → Biểu 10 list",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-10-form-z2"]',
    note: "Create Slideout · form=create KEEP · 2 section tường+rãnh · KE-",
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
        const hasBoot = await page
          .locator("#root")
          .count()
          .then((n) => n > 0)
          .catch(() => false);
        if (!hasBoot) {
          throw new Error("HTTP " + (res ? res.status() : "no-response"));
        }
      }
      await page.waitForSelector(step.selector, { timeout: 45000 });
      if (step.also) {
        await page.waitForSelector(step.also, { timeout: 20000 });
      }
      await new Promise((r) => setTimeout(r, 1500));

      if (step.id === "QA-20") {
        const formLive = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const cols =
            document
              .querySelector("[data-form-cols]")
              ?.getAttribute("data-form-cols") || "";
          const body = document.body?.innerText || "";
          return {
            hasZ2: testids.includes("csdl-bieu-10-form-z2"),
            hasZ3: testids.includes("csdl-bieu-10-form-z3"),
            hasRoad: testids.includes("csdl-bieu-10-field-road"),
            hasWallKind: testids.includes("csdl-bieu-10-field-wallKind"),
            hasHeightM: testids.includes("csdl-bieu-10-field-heightM"),
            hasCrestKind: testids.includes("csdl-bieu-10-field-crestDitchKind"),
            hasSave: testids.includes("csdl-bieu-10-btn-save"),
            dataFormCols: cols,
            hasKeCodeHint:
              /KE-/i.test(body) || testids.includes("csdl-bieu-10-field-code"),
          };
        });
        writeFileSync(
          join(outDir, "form-assert.json"),
          JSON.stringify(formLive, null, 2),
          "utf8",
        );
      }

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
  feature: "csdl-bieu-10",
  changeScope: "edit_page",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
