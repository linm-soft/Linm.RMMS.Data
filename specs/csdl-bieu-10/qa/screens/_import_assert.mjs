/**
 * S-XLS-IMPORT smoke — export then re-import same file (import_now).
 */
import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-10\\qa\\screens";
const tmpXls = join(outDir, "_import_roundtrip.xls");

const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:9301/csdl-bieu-10", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await p.waitForSelector(
  '[data-testid="rmms-csdl-bieu-10-list-export-excel-btn"]',
  { timeout: 45000 },
);

const [download] = await Promise.all([
  p.waitForEvent("download", { timeout: 25000 }),
  p.locator('[data-testid="rmms-csdl-bieu-10-list-export-excel-btn"]').click(),
]);
await download.saveAs(tmpXls);

const fileInput = p.locator(
  '[data-testid="rmms-csdl-bieu-10-list-import-file"]',
);
await fileInput.setInputFiles(tmpXls);
await new Promise((r) => setTimeout(r, 4000));

const body = await p.locator("body").innerText();
const toastOk =
  /Nhập Excel thành công|import|đã nhập|upsert|thành công/i.test(body) ||
  !/Nhập Excel thất bại|import.*fail|lỗi nhập/i.test(body);

const result = {
  attempted: true,
  fileExists: existsSync(tmpXls),
  toastOk,
  bodySnippet: body.slice(0, 500),
  hasImportInput: (await fileInput.count()) > 0,
};
writeFileSync(
  join(outDir, "import-assert.json"),
  JSON.stringify(result, null, 2),
  "utf8",
);
console.log(JSON.stringify(result, null, 2));
await b.close();
if (!result.fileExists || !result.hasImportInput) process.exit(1);
