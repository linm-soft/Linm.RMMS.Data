/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-ferry.
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
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-ferry\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=FERRY";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=FERRY";

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(listUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-so-ts-ferry-list-page"]', {
  timeout: 25000,
});
await new Promise((r) => setTimeout(r, 1200));

const list = await page.evaluate(() => {
  const body = document.body?.innerText ?? "";
  const typeField = document.querySelector(
    '[data-testid="rmms-so-ts-ferry-list-field-type"]',
  );
  const typeHidden =
    !typeField ||
    getComputedStyle(typeField).display === "none" ||
    typeField.getAttribute("hidden") != null ||
    typeField.classList.contains("hidden");
  return {
    titleFerry: /Danh sách bến phà/i.test(body),
    headerFerry: /Sổ TS — Bến phà/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(
      '[data-testid="rmms-so-ts-ferry-list-filters"]',
    ),
    search: !!document.querySelector(
      '[data-testid="rmms-so-ts-ferry-list-field-search"]',
    ),
    route: !!document.querySelector(
      '[data-testid="rmms-so-ts-ferry-list-field-route"]',
    ),
    kmFrom: !!document.querySelector(
      '[data-testid="rmms-so-ts-ferry-list-field-kmFrom"]',
    ),
    kmToFilter: !!document.querySelector(
      '[data-testid="rmms-so-ts-ferry-list-field-kmTo"]',
    ),
    org: !!document.querySelector(
      '[data-testid="rmms-so-ts-ferry-list-field-org"]',
    ),
    snippet: body.slice(0, 500),
  };
});

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-ferry-attr"]', {
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
    ferryAttr: !!document.querySelector('[data-testid="asset-ferry-attr"]'),
    loaibenpha: /Loại bến/i.test(body),
    levelWork: /Cấp CT|Cấp công trình|level_worlk/i.test(body),
    riverChannel: /Sông\/luồng|luồng sông|Sông/i.test(body),
    ferriesCount: /Số phà/i.test(body),
    kmToVisible,
    nameFerry: /Tên bến phà/i.test(body),
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
  await page.waitForSelector('[data-testid="rmms-so-ts-ferry-list-page"]', {
    timeout: 25000,
  });
  await new Promise((r) => setTimeout(r, 800));
  const shot = join(outDir, `filter-${key}.png`);
  await page.screenshot({ path: shot, fullPage: false });
  dtm[key] = await page.evaluate((w) => {
    const overflowX =
      document.documentElement.scrollWidth > document.documentElement.clientWidth + 2 ||
      document.body.scrollWidth > document.body.clientWidth + 2;
    return {
      filterBar: !!document.querySelector(
        '[data-testid="rmms-so-ts-ferry-list-filters"]',
      ),
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
  !list.titleFerry ||
  !list.headerFerry ||
  !list.filterBar ||
  !form.cols5 ||
  !form.ferryAttr ||
  form.kmToVisible ||
  !form.nameFerry ||
  dtm.D.overflowX ||
  dtm.T.overflowX ||
  dtm.M.overflowX;
process.exit(fail ? 1 : 0);
