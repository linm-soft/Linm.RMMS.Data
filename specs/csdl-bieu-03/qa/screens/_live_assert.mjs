/**
 * Live DOM assert — T-XLS-QA-01 (export_only_p0) + chrome KEEP.
 * Import DEFER P1 · cấm kill · channel=chrome.
 */
import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:9301/csdl-bieu-03", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await p.waitForSelector('[data-testid="rmms-csdl-bieu-03-list-page"]', {
  timeout: 25000,
});
await p.waitForSelector(
  '[data-testid="rmms-csdl-bieu-03-list-export-excel-btn"]',
  { timeout: 15000 },
);
await new Promise((r) => setTimeout(r, 1000));

const body = await p.locator("body").innerText();

const hasExportBtn =
  (await p
    .locator('[data-testid="rmms-csdl-bieu-03-list-export-excel-btn"]')
    .count()) > 0;
const hasImportBtn =
  (await p
    .locator('[data-testid="rmms-csdl-bieu-03-list-import-excel-btn"]')
    .count()) > 0;

/** filter bar must NOT host Xuất (GAP-FILTER-BAR-08) */
const filterBarExport = await p.evaluate(() => {
  const filter = document.querySelector(
    '[data-testid="rmms-csdl-bieu-03-list-filters"]',
  );
  if (!filter) return { foundFilter: false, hasXuat: false };
  const text = filter.innerText || "";
  const btn = filter.querySelector(
    '[data-testid="rmms-csdl-bieu-03-list-export-excel-btn"]',
  );
  return {
    foundFilter: true,
    hasXuat: /Xuất Excel/i.test(text) || Boolean(btn),
  };
});

/** S-XLS-EXPORT: click export → filename SA lock `.xls` */
let exportCheck = { attempted: false, ok: false, fileName: "", error: "" };
try {
  exportCheck.attempted = true;
  const [download] = await Promise.all([
    p.waitForEvent("download", { timeout: 30000 }),
    p.locator('[data-testid="rmms-csdl-bieu-03-list-export-excel-btn"]').click(),
  ]);
  const fileName = download.suggestedFilename() || "";
  const okName = /^Bieu03_HamDuongBo_\d{8}\.xls$/i.test(fileName);
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

const assert = {
  url: "http://localhost:9301/csdl-bieu-03",
  changeScope: "edit_page",
  hasTitle: /Hầm đường bộ|Biểu 03|hầm/i.test(body),
  hasFilter: body.includes("Tìm") || /Tỉnh/i.test(body),
  hasExportToolbar: hasExportBtn,
  hasImportToolbar: hasImportBtn,
  importDeferredHidden: !hasImportBtn,
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

writeFileSync(
  "D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/qa/screens/live-assert.json",
  JSON.stringify(assert, null, 2),
  "utf8",
);
console.log(JSON.stringify(assert, null, 2));

const ok =
  assert.hasExportToolbar &&
  assert.importDeferredHidden &&
  assert.filterBarHasNoExport &&
  assert.exportCheck.ok &&
  assert.noDemo &&
  assert.noModeBadge;
await b.close();
process.exit(ok ? 0 : 1);
