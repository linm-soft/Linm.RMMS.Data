/**
 * QA E2E capture — edit_page T-XLS-S15 + CRUD KEEP.
 * yarn e2e-qa overwrites bare playwright → GAP-QA-E2E-PW-01.
 * Run AFTER e2e-qa via: node this file (createRequire AutoCode).
 * channel=chrome · skip-start · cấm kill worker (GAP-QA-E2E-KILL-01).
 * Import DEFER P1 · export_only_p0 · cấm merge so-ts-toll/rest/station.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-15\\qa\\screens";
mkdirSync(outDir, { recursive: true });
const listUrl = "http://localhost:9301/csdl-bieu-15";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=ops-facilities";
const formUrl = "http://localhost:9301/csdl-bieu-15?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-15-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-15-form-slideout"]';
const hubListSel = '[data-testid="rmms-csdl-bieu-15-list-page"]';
const exportSel =
  '[data-testid="rmms-csdl-bieu-15-list-export-excel-btn"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    also: exportSel,
    note: "list Biểu 15 · toolbar Xuất · Import ẩn · filter-bar · peer none",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubListSel,
    also: exportSel,
    note: "hub ?resource=ops-facilities → redirect /csdl-bieu-15",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-15-form-z2"]',
    note: "Create Slideout · form=create KEEP · Z2 facility · Z3 TB+QL · OF-",
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

      if (step.id === "S0") {
        const live = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          const filterRoot = document.querySelector(
            '[data-testid="rmms-csdl-bieu-15-list-filters"]',
          );
          const filterExport = filterRoot
            ? filterRoot.querySelector(
                '[data-testid*="export"], button[aria-label*="Xuất"], button[title*="Xuất"]',
              )
            : null;
          return {
            url: location.href,
            hasTitle: /Biểu\s*15|TMC|thu phí|hạt|kho/i.test(body),
            hasFilter: testids.some((t) => t && /field-search|filters/i.test(t)),
            hasFacilityKind: testids.some(
              (t) => t && /field-facilityKind/i.test(t),
            ),
            hasKmFrom: testids.some((t) => t && /kmFrom/i.test(t)),
            hasKmTo: testids.some((t) => t && /kmTo/i.test(t)),
            hasExport: testids.includes(
              "rmms-csdl-bieu-15-list-export-excel-btn",
            ),
            hasImport: testids.includes(
              "rmms-csdl-bieu-15-list-import-excel-btn",
            ),
            filterBarHasExport: !!filterExport,
            noDemo: !/demo|stub|placeholder only/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            peerSots: testids.includes("rmms-csdl-bieu-15-list-peer-sots"),
            peerNoneOk: !testids.includes("rmms-csdl-bieu-15-list-peer-sots"),
            emptyOrGrid:
              testids.includes("rmms-csdl-bieu-15-list-empty") ||
              testids.some((t) => t && /grid|table/i.test(t)),
            testids,
            titleSnippet: body.slice(0, 360),
          };
        });

        /** S-XLS-EXPORT: click → Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls */
        let exportCheck = {
          attempted: false,
          ok: false,
          fileName: "",
          error: "",
        };
        try {
          exportCheck.attempted = true;
          const [download] = await Promise.all([
            page.waitForEvent("download", { timeout: 25000 }),
            page.locator(exportSel).click(),
          ]);
          const fileName = download.suggestedFilename() || "";
          const okName = /^Bieu15_TMC_Tram_Hat_\d{8}\.xls$/i.test(fileName);
          const dlPath = await download.path().catch(() => null);
          if (dlPath) {
            writeFileSync(
              join(outDir, fileName || "Bieu15_TMC_Tram_Hat_download.xls"),
              readFileSync(dlPath),
            );
          }
          exportCheck = {
            attempted: true,
            ok: okName,
            fileName,
            hasPath: Boolean(dlPath),
            error: okName ? "" : `filename mismatch: ${fileName}`,
          };
        } catch (err) {
          exportCheck = {
            attempted: true,
            ok: false,
            fileName: "",
            error: err instanceof Error ? err.message : String(err),
          };
        }

        const assertPayload = { ...live, exportCheck };
        writeFileSync(
          join(outDir, "live-assert.json"),
          JSON.stringify(assertPayload, null, 2),
          "utf8",
        );

        if (
          !live.hasExport ||
          live.hasImport ||
          live.filterBarHasExport ||
          !live.peerNoneOk ||
          !exportCheck.ok
        ) {
          throw new Error(
            "XLS assert fail export=" +
              live.hasExport +
              " importHidden=" +
              !live.hasImport +
              " filterExport=" +
              live.filterBarHasExport +
              " peerNone=" +
              live.peerNoneOk +
              " dl=" +
              JSON.stringify(exportCheck),
          );
        }
      }

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
            hasZ2: testids.includes("csdl-bieu-15-form-z2"),
            hasZ2Facility: testids.includes("csdl-bieu-15-form-z2-facility"),
            hasZ3: testids.includes("csdl-bieu-15-form-z3"),
            hasZ3Equipment: testids.includes("csdl-bieu-15-form-z3-equipment"),
            hasZ3Manage: testids.includes("csdl-bieu-15-form-z3-manage"),
            hasRoad: testids.includes("csdl-bieu-15-field-road"),
            hasFacilityKind: testids.includes("csdl-bieu-15-field-facilityKind"),
            hasFacilityName: testids.includes("csdl-bieu-15-field-facilityName"),
            hasEquipmentKind: testids.includes(
              "csdl-bieu-15-field-equipmentKind",
            ),
            hasManageUnit: testids.includes("csdl-bieu-15-field-manageUnit"),
            hasSave: testids.includes("csdl-bieu-15-btn-save"),
            dataFormCols: cols,
            hasOfCodeHint:
              /OF-/i.test(body) || testids.includes("csdl-bieu-15-field-code"),
            sectionSnippet: body.slice(0, 500),
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
        httpStatus: res ? res.status() : 0,
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
    "playwright channel=chrome createRequire AutoCode · skip-start · GAP-QA-E2E-PW-01 fallback",
  feature: "csdl-bieu-15",
  changeScope: "edit_page",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
writeFileSync(
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-15\\qa\\capture-out.json",
  JSON.stringify(manifest, null, 2),
  "utf8",
);
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
