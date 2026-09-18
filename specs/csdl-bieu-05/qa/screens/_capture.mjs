/**
 * QA E2E capture — edit_page T-XLS-S05 + CRUD KEEP · Import DEFER.
 * yarn e2e-qa overwrites bare playwright import → recreate via createRequire.
 * skip-start · cấm kill worker (GAP-QA-E2E-KILL-01).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-05\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-05";
const hubUrl = "http://localhost:9301/so-ts/csdl-so-sach?resource=ditches";
const formUrl = "http://localhost:9301/csdl-bieu-05?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-05-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-05-form-slideout"]';
const hubListSel = '[data-testid="rmms-csdl-bieu-05-list-page"]';
const exportSel = '[data-testid="rmms-csdl-bieu-05-list-export-excel-btn"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    also: exportSel,
    note: "list Biểu 05 · toolbar Xuất · filter-bar · 0 filter export · Import ẩn",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubListSel,
    also: exportSel,
    note: "hub deep-link ?resource=ditches → Biểu 05 list",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-05-form-z2"]',
    note: "Create Slideout · form=create KEEP · ditchKind/shape · RN-",
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

      if (step.id === "S0") {
        const downloadPromise = page
          .waitForEvent("download", { timeout: 20000 })
          .catch(() => null);
        await page.click(exportSel);
        const download = await downloadPromise;
        let exportCheck = {
          attempted: true,
          ok: false,
          fileName: "",
          hasPath: false,
          error: "no-download",
        };
        if (download) {
          const suggested = download.suggestedFilename();
          const savePath = join(outDir, "_export-download.xls");
          try {
            await download.saveAs(savePath);
            exportCheck = {
              attempted: true,
              ok: /^Bieu05_RanhCacLoai_\d{8}\.xls$/i.test(suggested),
              fileName: suggested,
              hasPath: true,
              error: "",
            };
          } catch (e) {
            exportCheck = {
              attempted: true,
              ok: /^Bieu05_RanhCacLoai_\d{8}\.xls$/i.test(suggested),
              fileName: suggested,
              hasPath: false,
              error: e instanceof Error ? e.message : String(e),
            };
          }
        }

        const live = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          const filterEl = document.querySelector(
            '[data-testid="rmms-csdl-bieu-05-list-filters"]',
          );
          const filterText = filterEl?.textContent || "";
          return {
            url: location.href,
            changeScope: "edit_page",
            hasTitle: /Biểu\s*05|Rãnh/i.test(body),
            hasFilter: testids.some((t) => t && /field-search|filters/i.test(t)),
            hasExportToolbar: testids.includes(
              "rmms-csdl-bieu-05-list-export-excel-btn",
            ),
            hasImportToolbar: testids.includes(
              "rmms-csdl-bieu-05-list-import-excel-btn",
            ),
            importDeferredHidden: !testids.includes(
              "rmms-csdl-bieu-05-list-import-excel-btn",
            ),
            filterBarHasNoExport: !/Xuất\s*Excel/i.test(filterText),
            filterBarMeta: {
              foundFilter: !!filterEl,
              hasXuat: /Xuất/i.test(filterText),
            },
            noDemo: !/demo|stub|placeholder only/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            testids,
            peerSots: testids.includes("rmms-csdl-bieu-05-list-peer-sots"),
          };
        });
        live.exportCheck = exportCheck;
        writeFileSync(
          join(outDir, "live-assert.json"),
          JSON.stringify(live, null, 2),
          "utf8",
        );
        if (
          !live.hasExportToolbar ||
          live.hasImportToolbar ||
          !live.filterBarHasNoExport
        ) {
          throw new Error(
            "S-XLS assert fail export=" +
              live.hasExportToolbar +
              " importHidden=" +
              live.importDeferredHidden +
              " filterNoExport=" +
              live.filterBarHasNoExport,
          );
        }
        if (!exportCheck.ok) {
          throw new Error(
            "export filename fail: " +
              (exportCheck.fileName || exportCheck.error),
          );
        }
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

const ok = results.length === 3 && results.every((r) => r.result === "PASS");
const manifest = {
  url: listUrl,
  method:
    "playwright channel=chrome headless · createRequire AutoCode · skip-start after yarn e2e-qa playwright resolve fail",
  feature: "csdl-bieu-05",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
process.exit(ok ? 0 : 1);
