/**
 * Live DOM assert — T-XLS-QA-01 + chrome KEEP (Biểu 11).
 * cấm kill worker · channel=chrome.
 */
import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:9301/csdl-bieu-11", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await p.waitForSelector('[data-testid="rmms-csdl-bieu-11-list-page"]', {
  timeout: 45000,
});
await p.waitForSelector(
  '[data-testid="rmms-csdl-bieu-11-list-export-excel-btn"]',
  { timeout: 20000 },
);
await new Promise((r) => setTimeout(r, 1000));

const body = await p.locator("body").innerText();

const hasExportBtn =
  (await p
    .locator('[data-testid="rmms-csdl-bieu-11-list-export-excel-btn"]')
    .count()) > 0;
const hasImportBtn =
  (await p
    .locator('[data-testid="rmms-csdl-bieu-11-list-import-excel-btn"]')
    .count()) > 0;
const peerSots =
  (await p.locator('[data-testid="rmms-csdl-bieu-11-list-peer-sots"]').count()) >
  0;

/** filter bar must NOT host Xuất (GAP-FILTER-BAR-08) */
const filterBarExport = await p.evaluate(() => {
  const filter = document.querySelector(
    '[data-testid="rmms-csdl-bieu-11-list-filters"]',
  );
  if (!filter) return { foundFilter: false, hasXuat: false };
  const text = filter.innerText || "";
  const btn = filter.querySelector(
    '[data-testid="rmms-csdl-bieu-11-list-export-excel-btn"]',
  );
  return {
    foundFilter: true,
    hasXuat: /Xuất Excel/i.test(text) || Boolean(btn),
  };
});

/** S-XLS-EXPORT: click export → filename PO lock */
let exportCheck = { attempted: false, ok: false, fileName: "", error: "" };
try {
  exportCheck.attempted = true;
  const [download] = await Promise.all([
    p.waitForEvent("download", { timeout: 25000 }),
    p.locator('[data-testid="rmms-csdl-bieu-11-list-export-excel-btn"]').click(),
  ]);
  const fileName = download.suggestedFilename() || "";
  const okName = /^Bieu11_ChieuSang_\d{8}\.xls$/i.test(fileName);
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
  url: "http://localhost:9301/csdl-bieu-11",
  changeScope: "edit_page",
  hasTitle: /Biểu\s*11|chiếu sáng|hệ thống chiếu sáng/i.test(body),
  hasFilter: body.includes("Tìm") || /Tỉnh|gridStatus|side/i.test(body),
  hasExportToolbar: hasExportBtn,
  hasImportToolbar: hasImportBtn,
  peerSots,
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
  "D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/qa/screens/live-assert.json",
  JSON.stringify(assert, null, 2),
  "utf8",
);
console.log(JSON.stringify(assert, null, 2));
await b.close();

const pass =
  assert.hasExportToolbar &&
  assert.hasImportToolbar &&
  assert.filterBarHasNoExport &&
  assert.exportCheck.ok;
if (!pass) process.exit(1);
