/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-its-camera.
 * POINT: kmFrom only · form S-ATTR ITS · list type filter hidden.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-its-camera\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=ITS_CAMERA";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=ITS_CAMERA";
const TEST_ID = "rmms-so-ts-its-camera-list";

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
    titleList: /Danh sách hệ thống ITS/i.test(body),
    headerIts: /Sổ TS — Hệ thống ITS/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    colTtdh: headers.some((h) => /TTĐH|trung tâm/i.test(h)),
    colVms: headers.some((h) => /VMS/i.test(h)),
    colItsPole: headers.some((h) => /Trụ đỡ ITS|trụ đỡ/i.test(h)),
    headers: headers.slice(0, 20),
    snippet: body.slice(0, 500),
  };
}, TEST_ID);

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-its-camera-attr"]', {
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
    formCols5: cols,
    itsAttr: !!document.querySelector('[data-testid="asset-its-camera-attr"]'),
    ttdhField: !!document.querySelector(
      '[data-testid="asset-field-type_management_center_id"]',
    ),
    locationField: !!document.querySelector(
      '[data-testid="asset-field-location_its_central_control_id"]',
    ),
    kmFromForm: kmFromVisible,
    kmToForm: kmToVisible,
    noNativeDialog: typeof window.confirm === "function",
    titleForm: /ITS|hệ thống/i.test(body),
    snippet: body.slice(0, 500),
  };
});

const dtm = [];
for (const [w, h, tag] of [
  [1280, 900, "D"],
  [768, 900, "T"],
  [375, 812, "M"],
]) {
  await page.setViewportSize({ width: w, height: h });
  await page.goto(listUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(`[data-testid="${TEST_ID}-page"]`, {
    timeout: 25000,
  });
  await new Promise((r) => setTimeout(r, 800));
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth > doc.clientWidth + 2;
  });
  const shot = join(outDir, `filter-${tag}.png`);
  await page.screenshot({ path: shot, fullPage: false });
  dtm.push({ tag, width: w, height: h, overflowX: overflow });
}

await browser.close();

const ok =
  list.titleList &&
  list.headerIts &&
  list.typeFilterHidden &&
  form.formCols5 &&
  form.itsAttr &&
  form.kmFromForm &&
  !form.kmToForm &&
  dtm.every((d) => !d.overflowX);

const report = {
  capturedAt: new Date().toISOString(),
  list,
  form,
  dtm,
  ok,
};
writeFileSync(join(outDir, "live-assert.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(ok ? 0 : 1);
