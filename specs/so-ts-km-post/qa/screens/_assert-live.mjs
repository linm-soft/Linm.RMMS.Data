import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
// join used for screenshots + live-assert.json

const pw = await import(
  pathToFileURL("D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs").href,
);
const { chromium } = pw;
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-km-post\\qa\\screens";

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("http://localhost:9301/so-ts?type=KM_POST", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector('[data-testid="rmms-so-ts-km-post-list-page"]', { timeout: 25000 });
await page.waitForTimeout(1500);
const list = await page.evaluate(() => {
  const t = document.body.innerText;
  return {
    titleKm: t.includes("Danh sách cột Km"),
    createBtn: t.includes("Tạo mới"),
    noCreateBadge: !/\bCREATE\b/.test(t),
    typeFilterHidden:
      document.querySelector('[data-testid="rmms-so-ts-km-post-list-field-type"]') === null,
    filterBar: !!document.querySelector('[data-lin-list-layout="erp-filter-bar"]'),
    search: !!document.querySelector('[data-testid="rmms-so-ts-km-post-list-field-search"]'),
    route: !!document.querySelector('[data-testid="rmms-so-ts-km-post-list-field-route"]'),
    kmFrom: !!document.querySelector('[data-testid="rmms-so-ts-km-post-list-field-kmFrom"]'),
    kmToFilter: !!document.querySelector('[data-testid="rmms-so-ts-km-post-list-field-kmTo"]'),
    org: !!document.querySelector('[data-testid="rmms-so-ts-km-post-list-field-org"]'),
    snippet: t.slice(0, 400),
  };
});

await page.goto("http://localhost:9301/so-ts/tao-moi?type=KM_POST", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', { timeout: 25000 });
await page.waitForTimeout(1500);
const form = await page.evaluate(() => {
  const t = document.body.innerText;
  return {
    cols5: !!document.querySelector('[data-form-cols="5"]'),
    kmAttr: !!document.querySelector('[data-testid="asset-km-post-attr"]'),
    materials: !!document.querySelector('[data-testid="asset-field-materials_id"]'),
    distance: !!document.querySelector('[data-testid="asset-field-distance_next_post"]'),
    kmToVisible: !!document.querySelector('[data-testid="asset-field-kmTo"]'),
    nameLabel: t.includes("Tên cột Km"),
    noModeBadge: !/\bCREATE\b/.test(t) && !/\bEDIT\b/.test(t) && !/\bVIEW\b/.test(t),
    snippet: t.slice(0, 500),
  };
});

// DTM filter smoke — resize
const dtm = {};
for (const [name, w] of [
  ["D", 1280],
  ["T", 768],
  ["M", 375],
]) {
  await page.setViewportSize({ width: w, height: name === "M" ? 812 : 900 });
  await page.goto("http://localhost:9301/so-ts?type=KM_POST", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector('[data-testid="rmms-so-ts-km-post-list-page"]', { timeout: 25000 });
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
  !list.titleKm ||
  !list.typeFilterHidden ||
  !list.filterBar ||
  !form.cols5 ||
  !form.kmAttr ||
  form.kmToVisible;
process.exit(fail ? 1 : 0);
