/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-delineator.
 * POINT: kmTo ẩn trên form · filter kmTo ± · type filter hidden · 2 nhóm S-ATTR tiêu/H.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");
const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-delineator\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=DELINEATOR";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=DELINEATOR";
const TEST_ID = "rmms-so-ts-delineator-list";

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
  const kmToCol = headers.some((h) => /^Km đến$|^Lý trình đến$/i.test(h));
  return {
    titleList: /Danh sách cọc tiêu|cọc H|Cọc tiêu/i.test(body),
    headerDelineator: /Sổ TS — Cọc tiêu \/ cọc H/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    kmToFilter: !!document.querySelector(`[data-testid="${tid}-field-kmTo"]`),
    org: !!document.querySelector(`[data-testid="${tid}-field-org"]`),
    colHPost: headers.some((h) => /Loại kiểu|h_post_type/i.test(h)),
    colInstalled: headers.some((h) => /Vị trí đặt|installed_location/i.test(h)),
    colGuide: headers.some((h) => /Cọc tiêu|guide_post_type/i.test(h)),
    colKmToHidden: !kmToCol,
    headers: headers.slice(0, 24),
    snippet: body.slice(0, 500),
  };
}, TEST_ID);

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-delineator-tieu"]', {
  timeout: 15000,
});
await page.waitForSelector('[data-testid="asset-delineator-h"]', {
  timeout: 15000,
});
await new Promise((r) => setTimeout(r, 1200));

const form = await page.evaluate(() => {
  const body = document.body?.innerText ?? "";
  const cols = !!document.querySelector('[data-form-cols="5"]');
  const kmTo =
    document.querySelector('[data-testid="asset-field-kmTo"]') ||
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
    delineatorMeta: !!document.querySelector(
      '[data-testid="asset-delineator-meta"]',
    ),
    delineatorTieu: !!document.querySelector(
      '[data-testid="asset-delineator-tieu"]',
    ),
    delineatorH: !!document.querySelector('[data-testid="asset-delineator-h"]'),
    tenCoc: /Tên cọc|Tên tài sản/i.test(body),
    loaiKieu: /Loại kiểu cọc|h_post_type/i.test(body),
    cocTieu: /Cọc tiêu|guide_post|Vật liệu cọc tiêu/i.test(body),
    cocH: /Cọc H|h_guide_post|Vật liệu cọc H/i.test(body),
    viTriDat: /Vị trí đặt|installed_location/i.test(body),
    kmToVisible,
    kmToHiddenOk: !kmToVisible,
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
  !list.headerDelineator ||
  !list.search ||
  !list.route ||
  !list.kmToFilter ||
  !form.cols5 ||
  !form.delineatorTieu ||
  !form.delineatorH ||
  !form.kmToHiddenOk ||
  !form.cocTieu ||
  !form.cocH ||
  dtm.D.overflowX ||
  dtm.T.overflowX ||
  dtm.M.overflowX;
process.exit(fail ? 1 : 0);
