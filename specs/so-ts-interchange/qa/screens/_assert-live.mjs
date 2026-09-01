import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const pw = await import(
  pathToFileURL(
    "D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs",
  ).href,
);
const { chromium } = pw;
const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-interchange\\qa\\screens";

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("http://localhost:9301/so-ts?type=INTERCHANGE", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector('[data-testid="rmms-so-ts-interchange-list-page"]', {
  timeout: 25000,
});
await page.waitForTimeout(1500);
const list = await page.evaluate(() => {
  const t = document.body.innerText;
  return {
    titleIx: t.includes("Danh sách nút giao"),
    headerIx: t.includes("Sổ TS — Nút giao") || t.includes("Nút giao"),
    createBtn: t.includes("Tạo mới"),
    noCreateBadge: !/\bCREATE\b/.test(t),
    typeFilterHidden:
      document.querySelector(
        '[data-testid="rmms-so-ts-interchange-list-field-type"]',
      ) === null,
    filterBar: !!document.querySelector(
      '[data-lin-list-layout="erp-filter-bar"]',
    ),
    search: !!document.querySelector(
      '[data-testid="rmms-so-ts-interchange-list-field-search"]',
    ),
    route: !!document.querySelector(
      '[data-testid="rmms-so-ts-interchange-list-field-route"]',
    ),
    kmFrom: !!document.querySelector(
      '[data-testid="rmms-so-ts-interchange-list-field-kmFrom"]',
    ),
    kmToFilter: !!document.querySelector(
      '[data-testid="rmms-so-ts-interchange-list-field-kmTo"]',
    ),
    org: !!document.querySelector(
      '[data-testid="rmms-so-ts-interchange-list-field-org"]',
    ),
    snippet: t.slice(0, 400),
  };
});

await page.goto("http://localhost:9301/so-ts/tao-moi?type=INTERCHANGE", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForTimeout(1500);
const form = await page.evaluate(() => {
  const t = document.body.innerText;
  return {
    cols5: !!document.querySelector('[data-form-cols="5"]'),
    ixAttr: !!document.querySelector('[data-testid="asset-interchange-attr"]'),
    intersectionType: !!document.querySelector(
      '[data-testid="asset-field-intersection_type_id"]',
    ),
    intersectWith: !!document.querySelector(
      '[data-testid="asset-field-intersect_with_id"]',
    ),
    intersectionShape: !!document.querySelector(
      '[data-testid="asset-field-intersection_shape_id"]',
    ),
    trafficSignal: !!document.querySelector(
      '[data-testid="asset-field-traffic_signal_lights"]',
    ),
    medianStrip: !!document.querySelector(
      '[data-testid="asset-field-median_strip"]',
    ),
    kmToVisible: !!document.querySelector('[data-testid="asset-field-kmTo"]'),
    nameIx:
      t.includes("Tên nút giao") ||
      !!document.querySelector('[data-testid="asset-field-name"]') ||
      !!document.querySelector('[data-testid="asset-field-name_intersection"]'),
    noModeBadge:
      !/\bCREATE\b/.test(t) && !/\bEDIT\b/.test(t) && !/\bVIEW\b/.test(t),
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
  await page.goto("http://localhost:9301/so-ts?type=INTERCHANGE", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForSelector(
    '[data-testid="rmms-so-ts-interchange-list-page"]',
    { timeout: 25000 },
  );
  await page.waitForTimeout(800);
  dtm[name] = await page.evaluate((vw) => {
    const el = document.querySelector(
      '[data-lin-list-layout="erp-filter-bar"]',
    );
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
writeFileSync(
  join(outDir, "live-assert.json"),
  JSON.stringify(report, null, 2),
  "utf8",
);
console.log(JSON.stringify(report, null, 2));
await browser.close();
const fail =
  !list.titleIx ||
  !list.typeFilterHidden ||
  !list.filterBar ||
  !form.cols5 ||
  !form.ixAttr ||
  form.kmToVisible;
process.exit(fail ? 1 : 0);
