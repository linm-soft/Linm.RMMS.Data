/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-rail-cross.
 * POINT: kmTo hidden on form · list type filter hidden · S-ATTR rail-cross.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-rail-cross\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=RAIL_CROSS";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=RAIL_CROSS";
const TEST_ID = "rmms-so-ts-rail-cross-list";

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
    titleList: /Danh sách giao cắt đường sắt/i.test(body),
    headerRailCross: /Sổ TS — Giao cắt đường sắt/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    kmToFilter: !!document.querySelector(`[data-testid="${tid}-field-kmTo"]`),
    org: !!document.querySelector(`[data-testid="${tid}-field-org"]`),
    colProtection: headers.some((h) => /Kiểu bảo vệ|bảo vệ/i.test(h)),
    colTraffic: headers.some((h) => /Phương thức|điều khiển/i.test(h)),
    colWaiting: headers.some((h) => /Thời gian chờ|chờ/i.test(h)),
    headers: headers.slice(0, 20),
    snippet: body.slice(0, 500),
  };
}, TEST_ID);

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-rail-cross-attr"]', {
  timeout: 15000,
});
await new Promise((r) => setTimeout(r, 1200));

const form = await page.evaluate(() => {
  const body = document.body?.innerText ?? "";
  const cols = !!document.querySelector('[data-form-cols="5"]');
  const kmTo =
    document.querySelector('[data-testid="asset-kmTo"]') ||
    document.querySelector('[name="kmTo"]') ||
    Array.from(document.querySelectorAll("label")).find((el) =>
      /Lý trình kết thúc|Km đến|kmTo/i.test(el.textContent || ""),
    );
  const kmToVisible = !!(
    kmTo &&
    getComputedStyle(kmTo).display !== "none" &&
    getComputedStyle(kmTo).visibility !== "hidden"
  );
  return {
    cols5: cols,
    kmToVisible,
    railCrossAttr: !!document.querySelector('[data-testid="asset-rail-cross-attr"]'),
    protectionField: !!document.querySelector('[data-testid="asset-field-protection_type_id"]'),
    trafficField: !!document.querySelector('[data-testid="asset-field-traffic_control_method_id"]'),
    waitingField: !!document.querySelector('[data-testid="asset-field-shortest_waiting_time"]'),
    sectionTitle: /Thông số giao cắt đường sắt/i.test(body),
    waitingLabel: /Thời gian chờ ngắn nhất \(phút\)/i.test(body),
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
  headerRailCross: list.headerRailCross,
  createBtn: list.createBtn,
  noCreateBadgeList: list.noCreateBadge,
  typeFilterHidden: list.typeFilterHidden,
  filterBar: list.filterBar,
  searchField: list.search,
  routeField: list.route,
  colProtection: list.colProtection,
  colTraffic: list.colTraffic,
  colWaiting: list.colWaiting,
  formCols5: form.cols5,
  kmToHidden: !form.kmToVisible,
  railCrossAttr: form.railCrossAttr,
  protectionField: form.protectionField,
  trafficField: form.trafficField,
  waitingField: form.waitingField,
  sectionTitle: form.sectionTitle,
  waitingLabelMinutes: form.waitingLabel,
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
