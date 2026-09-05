/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-toll.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const pw = await import(
  pathToFileURL(
    "D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs",
  ).href,
);
const { chromium } = pw;
const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-toll\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=TOLL";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=TOLL";
const TEST_ID = "rmms-so-ts-toll-list";

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
  return {
    titleToll: /Danh sách trạm thu phí/i.test(body),
    headerToll: /Sổ TS — Trạm thu phí/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    kmToFilter: !!document.querySelector(`[data-testid="${tid}-field-kmTo"]`),
    org: !!document.querySelector(`[data-testid="${tid}-field-org"]`),
    snippet: body.slice(0, 500),
  };
}, TEST_ID);

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-toll-attr"]', {
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
    tollAttr: !!document.querySelector('[data-testid="asset-toll-attr"]'),
    weightingMethod: /Phương pháp cân|weighting_method/i.test(body),
    weightingLane: /Số làn cân|number_weighting_lane/i.test(body),
    etcLane: /Số làn ETC|number_etc_lane/i.test(body),
    manualLane: /Số làn thủ công|number_manual_lane/i.test(body),
    houseGrade: /Cấp nhà|house_grade/i.test(body),
    gatePavement: /DT mặt cổng|area_yoll_gate/i.test(body),
    roofStructure: /Kết cấu mái|roof_structures/i.test(body),
    pavementType: /Loại mặt đường|pavement_type/i.test(body),
    roadStructure: /Kết cấu đường|road_structure/i.test(body),
    operationLocation: /Vị trí nhà|operation_building/i.test(body),
    kmToVisible,
    nameToll: /Tên trạm/i.test(body),
    noModeBadge: !/\bCREATE\b|\bEDIT\b|\bVIEW\b/.test(body),
    snippet: body.slice(0, 700),
  };
});

const dtm = {};
for (const [key, vw] of [
  ["D", 1280],
  ["T", 768],
  ["M", 375],
]) {
  await page.setViewportSize({ width: vw, height: 900 });
  await page.goto(listUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(`[data-testid="${TEST_ID}-page"]`, {
    timeout: 25000,
  });
  await new Promise((r) => setTimeout(r, 800));
  const shot = join(outDir, `filter-${key}.png`);
  await page.screenshot({ path: shot, fullPage: false });
  dtm[key] = await page.evaluate((w) => {
    const overflowX =
      document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 2 ||
      document.body.scrollWidth > document.body.clientWidth + 2;
    return {
      overflowX,
      bodyW: document.body.clientWidth,
      vw: w,
    };
  }, vw);
}

await browser.close();

const out = { list, form, dtm, at: new Date().toISOString() };
writeFileSync(join(outDir, "live-assert.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));

const fail =
  !list.titleToll ||
  !list.headerToll ||
  !list.search ||
  !list.route ||
  !form.cols5 ||
  !form.tollAttr ||
  form.kmToVisible ||
  !form.nameToll ||
  !form.weightingMethod ||
  dtm.D.overflowX ||
  dtm.T.overflowX ||
  dtm.M.overflowX;
process.exit(fail ? 1 : 0);
