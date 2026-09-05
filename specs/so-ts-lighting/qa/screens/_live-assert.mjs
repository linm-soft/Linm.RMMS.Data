/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-lighting.
 * POINT: kmFrom only · form S-ATTR lighting · list type filter hidden.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-lighting\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=LIGHTING";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=LIGHTING";
const TEST_ID = "rmms-so-ts-lighting-list";

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
    titleList: /Danh sách hệ thống chiếu sáng/i.test(body),
    headerLighting: /Sổ TS — Chiếu sáng đường/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    colManagement: headers.some((h) => /ĐV QL|quản lý/i.test(h)),
    colPole: headers.some((h) => /cột đèn/i.test(h)),
    colLight: headers.some((h) => /Số đèn/i.test(h)),
    colVitri: headers.some((h) => /Mặt cắt|vitri/i.test(h)),
    headers: headers.slice(0, 20),
    snippet: body.slice(0, 500),
  };
}, TEST_ID);

await page.goto(formUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 25000,
});
await page.waitForSelector('[data-testid="asset-lighting-attr"]', {
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
    lightingAttr: !!document.querySelector('[data-testid="asset-lighting-attr"]'),
    managementField: !!document.querySelector('[data-testid="asset-field-management_id"]'),
    kmFromForm: kmFromVisible,
    kmToForm: kmToVisible,
    noNativeDialog: typeof window.confirm === "function",
    titleForm: /Chiếu sáng|hệ thống/i.test(body),
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
  list.headerLighting &&
  list.typeFilterHidden &&
  form.formCols5 &&
  form.lightingAttr &&
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
