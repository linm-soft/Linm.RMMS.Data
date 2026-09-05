/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-convex-mirror.
 * POINT: kmTo ẩn form · S-ATTR 9 · LOOKUP loc/MST/shape/mat · type filter hidden.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");
const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-convex-mirror\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=CONVEX_MIRROR";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=CONVEX_MIRROR";
const TEST_ID = "rmms-so-ts-convex-mirror-list";

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
    titleList: /Danh sách.*[Gg]ương|[Gg]ương cầu|long môn/i.test(body),
    headerMirror: /Sổ TS — Gương cầu \/ long môn/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    kmToFilter: !!document.querySelector(`[data-testid="${tid}-field-kmTo"]`),
    org: !!document.querySelector(`[data-testid="${tid}-field-org"]`),
    colLoc: headers.some((h) => /Vị trí đặt|location_post/i.test(h)),
    colMst: headers.some((h) => /Loại.*MST|asset_type_mst|Loại tài sản/i.test(h)),
    colShape: headers.some((h) => /Hình dạng|shape_cut/i.test(h)),
    colMat: headers.some((h) => /Vật liệu|material_post/i.test(h)),
    colKmToHidden: !kmToCol,
    headers: headers.slice(0, 28),
    snippet: body.slice(0, 500),
  };
}, TEST_ID);

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-convex-mirror-attr"]', {
  timeout: 15000,
});
await page.waitForSelector('[data-testid="asset-convex-mirror-loc"]', {
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
    locSection: !!document.querySelector(
      '[data-testid="asset-convex-mirror-loc"]',
    ),
    attrSection: !!document.querySelector(
      '[data-testid="asset-convex-mirror-attr"]',
    ),
    locationPost: !!document.querySelector(
      '[data-testid="asset-field-location_post_id"]',
    ),
    assetTypeMst: !!document.querySelector(
      '[data-testid="asset-field-asset_type_mst_id"]',
    ),
    shapeCut: !!document.querySelector(
      '[data-testid="asset-field-shape_cut_post_id"]',
    ),
    material: !!document.querySelector(
      '[data-testid="asset-field-material_post_id"]',
    ),
    diameter: !!document.querySelector(
      '[data-testid="asset-field-diameter_post"]',
    ),
    height: !!document.querySelector('[data-testid="asset-field-height_post"]'),
    span: !!document.querySelector('[data-testid="asset-field-span_length"]'),
    numberSign: /Số biển|number_sign/i.test(body),
    totalPost: /SL trụ|Số lượng trụ|total_number_post|Số trụ/i.test(body),
    tenTs: /Tên tài sản|Tên/i.test(body),
    viTriDat: /Vị trí đặt/i.test(body),
    loaiMst: /Loại tài sản \(MST\)|Loại MST/i.test(body),
    kmToVisible,
    kmToHiddenOk: !kmToVisible,
    noModeBadge: !/\bCREATE\b|\bEDIT\b|\bVIEW\b/.test(body),
    noGantryField: !/gantry|long môn \(field\)|GANTRY_SIGN/i.test(body),
    snippet: body.slice(0, 800),
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
  !list.headerMirror ||
  !list.search ||
  !list.route ||
  !list.kmToFilter ||
  !form.cols5 ||
  !form.locSection ||
  !form.attrSection ||
  !form.locationPost ||
  !form.assetTypeMst ||
  !form.shapeCut ||
  !form.material ||
  !form.kmToHiddenOk ||
  dtm.D.overflowX ||
  dtm.T.overflowX ||
  dtm.M.overflowX;
process.exit(fail ? 1 : 0);
