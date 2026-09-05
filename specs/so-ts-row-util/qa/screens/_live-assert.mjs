/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-row-util.
 * RANGE: kmFrom+kmTo on filter · form S-ATTR row-util · list type filter hidden.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-row-util\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=ROW_UTIL";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=ROW_UTIL";
const TEST_ID = "rmms-so-ts-row-util-list";

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(listUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector(`[data-testid="${TEST_ID}-page"]`, {
  timeout: 25000,
});
await new Promise((r) => setTimeout(r, 1200));

const list = await page.evaluate((tid) => {
  const body = document.body?.innerText ?? "";
  const typeField = document.querySelector(`[data-testid="${tid}-field-type"]`);
  const typeHidden =
    !typeField ||
    getComputedStyle(typeField).display === "none" ||
    typeField.getAttribute("hidden") != null ||
    typeField.classList.contains("hidden");
  const headers = Array.from(
    document.querySelectorAll("th, [role='columnheader']"),
  )
    .map((el) => (el.textContent || "").trim())
    .filter(Boolean);
  return {
    titleList: /Danh sách công trình HTKT/i.test(body),
    headerRowUtil: /Sổ TS — CT HTKT trong HL/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    kmToFilter: !!document.querySelector(`[data-testid="${tid}-field-kmTo"]`),
    colTypeWork: headers.some((h) => /Loại công trình|loại CT/i.test(h)),
    colLength: headers.some((h) => /Chiều dài|dài/i.test(h)),
    colOwner: headers.some((h) => /Chủ sở hữu|chủ/i.test(h)),
    headers: headers.slice(0, 20),
    snippet: body.slice(0, 500),
  };
}, TEST_ID);

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-row-util-attr"]', {
  timeout: 15000,
});
await new Promise((r) => setTimeout(r, 1200));

const form = await page.evaluate(() => {
  const body = document.body?.innerText ?? "";
  const cols = !!document.querySelector('[data-form-cols="5"]');
  const kmFromEl = document.querySelector('[data-testid="asset-field-kmFrom"]');
  const kmToEl = document.querySelector('[data-testid="asset-field-kmTo"]');
  const kmFromVisible = !!(
    kmFromEl &&
    getComputedStyle(kmFromEl).display !== "none" &&
    getComputedStyle(kmFromEl).visibility !== "hidden"
  );
  const kmToVisible = !!(
    kmToEl &&
    getComputedStyle(kmToEl).display !== "none" &&
    getComputedStyle(kmToEl).visibility !== "hidden"
  );
  return {
    cols5: cols,
    kmFromVisible,
    kmToVisible,
    rowUtilAttr: !!document.querySelector('[data-testid="asset-row-util-attr"]'),
    typeWorkField: !!document.querySelector('[data-testid="asset-field-type_work_id"]'),
    lengthField: !!document.querySelector('[data-testid="asset-field-length"]'),
    ownerField: !!document.querySelector('[data-testid="asset-field-owner"]'),
    sectionTitle: /Thông số CT HTKT trong HL/i.test(body),
    nameLabel: /Công trình HTKT/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    snippet: body.slice(0, 500),
  };
});

const dtms = [
  { id: "D", width: 1280, height: 768 },
  { id: "T", width: 768, height: 1024 },
  { id: "M", width: 375, height: 812 },
];
const dtmResults = [];

for (const dtm of dtms) {
  await page.setViewportSize({ width: dtm.width, height: dtm.height });
  await page.goto(listUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(`[data-testid="${TEST_ID}-page"]`, { timeout: 25000 });
  await new Promise((r) => setTimeout(r, 800));
  const overflowX = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  const shot = join(outDir, `filter-${dtm.id}.png`);
  await page.screenshot({ path: shot, fullPage: false });
  dtmResults.push({ id: dtm.id, overflowX, width: dtm.width });
}

await browser.close();

const checks = {
  listTitle: list.titleList,
  headerRowUtil: list.headerRowUtil,
  createBtn: list.createBtn,
  noCreateBadgeList: list.noCreateBadge,
  typeFilterHidden: list.typeFilterHidden,
  filterBar: list.filterBar,
  searchField: list.search,
  routeField: list.route,
  kmFromFilter: list.kmFrom,
  kmToFilter: list.kmToFilter,
  colTypeWork: list.colTypeWork,
  colLength: list.colLength,
  colOwner: list.colOwner,
  formCols5: form.cols5,
  kmFromForm: form.kmFromVisible,
  kmToForm: form.kmToVisible,
  rowUtilAttr: form.rowUtilAttr,
  typeWorkField: form.typeWorkField,
  lengthField: form.lengthField,
  ownerField: form.ownerField,
  sectionTitle: form.sectionTitle,
  nameLabel: form.nameLabel,
  noCreateBadgeForm: form.noCreateBadge,
  dtmNoOverflow: dtmResults.every((d) => !d.overflowX),
};

const pass = Object.values(checks).every(Boolean);
const out = {
  capturedAt: new Date().toISOString(),
  listUrl,
  formUrl,
  list,
  form,
  dtm: dtmResults,
  checks,
  pass,
};
writeFileSync(join(outDir, "live-assert.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
process.exit(pass ? 0 : 1);
