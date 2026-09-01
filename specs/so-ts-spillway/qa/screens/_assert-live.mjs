import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const pw = await import(
  pathToFileURL("D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs").href,
);
const { chromium } = pw;
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-spillway\\qa\\screens";

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("http://localhost:9301/so-ts?type=SPILLWAY", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector('[data-testid="rmms-so-ts-spillway-list-page"]', { timeout: 25000 });
await page.waitForTimeout(1500);
const list = await page.evaluate(() => {
  const t = document.body.innerText;
  return {
    titleSpillway: t.includes("Danh sách đường tràn"),
    createBtn: t.includes("Tạo mới"),
    noCreateBadge: !/\bCREATE\b/.test(t),
    typeFilterHidden:
      document.querySelector('[data-testid="rmms-so-ts-spillway-list-field-type"]') === null,
    filterBar: !!document.querySelector('[data-lin-list-layout="erp-filter-bar"]'),
    search: !!document.querySelector('[data-testid="rmms-so-ts-spillway-list-field-search"]'),
    route: !!document.querySelector('[data-testid="rmms-so-ts-spillway-list-field-route"]'),
    kmFrom: !!document.querySelector('[data-testid="rmms-so-ts-spillway-list-field-kmFrom"]'),
    kmToFilter: !!document.querySelector('[data-testid="rmms-so-ts-spillway-list-field-kmTo"]'),
    org: !!document.querySelector('[data-testid="rmms-so-ts-spillway-list-field-org"]'),
    snippet: t.slice(0, 400),
  };
});

await page.goto("http://localhost:9301/so-ts/tao-moi?type=SPILLWAY", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', { timeout: 25000 });
await page.waitForTimeout(1500);
const form = await page.evaluate(() => {
  const t = document.body.innerText;
  return {
    cols5: !!document.querySelector('[data-form-cols="5"]'),
    spillAttr: !!document.querySelector('[data-testid="asset-spillway-attr"]'),
    spillwayType: !!document.querySelector('[data-testid="asset-field-spillway_type_id"]'),
    width: !!document.querySelector('[data-testid="asset-field-width_spillway"]'),
    length: !!document.querySelector('[data-testid="asset-field-length_spillway"]'),
    structureType: !!document.querySelector(
      '[data-testid="asset-field-structure_type_spillway_id"]',
    ),
    kmToVisible: !!document.querySelector('[data-testid="asset-field-kmTo"]'),
    nameWork: t.includes("Tên công trình") || t.includes("name_work") || !!document.querySelector('[data-testid="asset-field-name_work"]'),
    nameRiver: t.includes("Tên sông") || !!document.querySelector('[data-testid="asset-field-name_river"]'),
    noModeBadge: !/\bCREATE\b/.test(t) && !/\bEDIT\b/.test(t) && !/\bVIEW\b/.test(t),
    snippet: t.slice(0, 500),
  };
});

const dtm = {};
for (const [name, w] of [
  ["D", 1280],
  ["T", 768],
  ["M", 375],
]) {
  await page.setViewportSize({ width: w, height: name === "M" ? 812 : 900 });
  await page.goto("http://localhost:9301/so-ts?type=SPILLWAY", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector('[data-testid="rmms-so-ts-spillway-list-page"]', { timeout: 25000 });
  await page.waitForTimeout(800);
  dtm[name] = await page.evaluate((vw) => {
    const el = document.querySelector('[data-lin-list-layout="erp-filter-bar"]');
    const overflow = document.documentElement.scrollWidth > vw + 2;
    return {
      filterBar: !!el,
      overflowX: overflow,
      bodyW: document.documentElement.scrollWidth,
      vw,
    };
  }, w);
  await page.screenshot({
    path: join(outDir, `filter-${name}.png`),
    fullPage: true,
  });
}

const report = { list, form, dtm, at: new Date().toISOString() };
writeFileSync(join(outDir, "live-assert.json"), JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
await browser.close();
const fail =
  !list.titleSpillway ||
  !list.typeFilterHidden ||
  !list.filterBar ||
  !form.cols5 ||
  !form.spillAttr ||
  form.kmToVisible;
process.exit(fail ? 1 : 0);
