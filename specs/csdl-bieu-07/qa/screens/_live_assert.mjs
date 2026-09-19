/**
 * Live DOM assert — T-XLS-QA-01 (export_only_p0) + chrome KEEP.
 * Import DEFER P1 ẩn · filename Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls
 * cấm kill worker · channel=chrome.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-07\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-07";
const exportSel = '[data-testid="rmms-csdl-bieu-07-list-export-excel-btn"]';
const importSel = '[data-testid="rmms-csdl-bieu-07-list-import-excel-btn"]';
const filterSel = '[data-testid="rmms-csdl-bieu-07-list-filters"]';

const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(listUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await p.waitForSelector('[data-testid="rmms-csdl-bieu-07-list-page"]', {
  timeout: 25000,
});
await p.waitForSelector(exportSel, { timeout: 15000 });
await new Promise((r) => setTimeout(r, 1000));

const body = await p.locator("body").innerText();
const hasExportBtn = (await p.locator(exportSel).count()) > 0;
const hasImportBtn = (await p.locator(importSel).count()) > 0;

const filterBarExport = await p.evaluate((fs) => {
  const filter = document.querySelector(fs);
  if (!filter) return { foundFilter: false, hasXuat: false };
  const text = filter.innerText || "";
  const btn = filter.querySelector(
    '[data-testid="rmms-csdl-bieu-07-list-export-excel-btn"]',
  );
  return {
    foundFilter: true,
    hasXuat: /Xuất Excel/i.test(text) || Boolean(btn),
  };
}, filterSel);

/** S-XLS-EXPORT: click → filename PO/SA lock .xls */
let exportCheck = { attempted: false, ok: false, fileName: "", error: "" };
try {
  exportCheck.attempted = true;
  const [download] = await Promise.all([
    p.waitForEvent("download", { timeout: 30000 }),
    p.locator(exportSel).click(),
  ]);
  const fileName = download.suggestedFilename() || "";
  const okName = /^Bieu07_LeTaluyHangRao_\d{8}\.xls$/i.test(fileName);
  const path = await download.path().catch(() => null);
  exportCheck = {
    attempted: true,
    ok: okName,
    fileName,
    hasPath: Boolean(path),
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

const prior = (() => {
  try {
    return JSON.parse(readFileSync(join(outDir, "live-assert.json"), "utf8"));
  } catch {
    return {};
  }
})();

const assert = {
  ...prior,
  url: listUrl,
  changeScope: "edit_page",
  hasTitle: /Biểu 07|Lề|taluy|hàng rào/i.test(body),
  hasFilter: body.includes("Tìm") || /Tỉnh/i.test(body),
  hasExportToolbar: hasExportBtn,
  hasImportToolbar: hasImportBtn,
  importHiddenP1: !hasImportBtn,
  filterBarHasNoExport: !filterBarExport.hasXuat,
  filterBarMeta: filterBarExport,
  exportCheck,
  noDemo: !/demo\/stub|localStorage SSOT/i.test(body),
  noModeBadge: !/\bCREATE\b|\bEDIT\b|\bVIEW\b/.test(body),
  testids: await p.evaluate(() =>
    [...document.querySelectorAll("[data-testid]")]
      .map((e) => e.getAttribute("data-testid"))
      .filter(Boolean)
      .slice(0, 50),
  ),
};

writeFileSync(join(outDir, "live-assert.json"), JSON.stringify(assert, null, 2), "utf8");
console.log(JSON.stringify(assert, null, 2));
await b.close();

const pass =
  assert.hasExportToolbar &&
  assert.importHiddenP1 &&
  assert.filterBarHasNoExport &&
  assert.exportCheck.ok;
if (!pass) {
  console.error("T-XLS-QA-01 FAIL", {
    hasExportToolbar: assert.hasExportToolbar,
    importHiddenP1: assert.importHiddenP1,
    filterBarHasNoExport: assert.filterBarHasNoExport,
    exportCheck: assert.exportCheck,
  });
  process.exit(1);
}
console.log("T-XLS-QA-01 PASS");
