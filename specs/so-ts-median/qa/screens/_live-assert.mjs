/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-median.
 * RANGE: kmTo visible on form · list kmTo ON · type filter hidden · S-ATTR median.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-median\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=MEDIAN";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=MEDIAN";
const TEST_ID = "rmms-so-ts-median-list";

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
    titleList: /Danh sách dải phân cách|Dải phân cách/i.test(body),
    headerMedian: /Sổ TS — Dải phân cách/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    kmToFilter: !!document.querySelector(`[data-testid="${tid}-field-kmTo"]`),
    org: !!document.querySelector(`[data-testid="${tid}-field-org"]`),
    colLoaiDai: headers.some((h) => /Loại dải|loại dải/i.test(h)),
    colDai: headers.some((h) => /Chiều dài|dài/i.test(h)),
    colRong: headers.some((h) => /Chiều rộng|rộng/i.test(h)),
    colHangRao: headers.some((h) => /hàng rào|Cao/i.test(h)),
    headers: headers.slice(0, 20),
    snippet: body.slice(0, 500),
  };
}, TEST_ID);

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-median-attr"]', {
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
  const codeInput =
    document.querySelector('[data-testid="asset-field-code"] input') ||
    document.querySelector('[name="code"]') ||
    Array.from(document.querySelectorAll("input")).find((el) =>
      /^PC-/i.test(el.value || ""),
    );
  const codePrefixPC = !!(
    codeInput && /^PC-/i.test(String(codeInput.value || ""))
  );
  return {
    cols5: cols,
    medianAttr: !!document.querySelector('[data-testid="asset-median-attr"]'),
    loaiDai: /Loại dải phân cách/i.test(body),
    chieuDai: /Chiều dài/i.test(body),
    chieuRong: /Chiều rộng/i.test(body),
    trongCo: /Trồng cỏ/i.test(body),
    trongCay: /Trồng cây/i.test(body),
    caoHangRao: /hàng rào|Cao hàng rào/i.test(body),
    kmToVisible,
    codePrefixPC,
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
  !list.titleList ||
  !list.headerMedian ||
  !list.search ||
  !list.route ||
  !list.kmToFilter ||
  !form.cols5 ||
  !form.medianAttr ||
  !form.kmToVisible ||
  !form.loaiDai ||
  dtm.D.overflowX ||
  dtm.T.overflowX ||
  dtm.M.overflowX;
process.exit(fail ? 1 : 0);
