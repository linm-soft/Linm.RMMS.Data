/**
 * Live DOM assert + DTM filter-bar overflow for so-ts-bus-stop.
 * Boot via /index.html + popstate (historyApiFallback deep-link 404).
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(
  "D:/AI-Extension/AI-AutoCode/package.json",
);
const { chromium } = require("playwright");

const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-bus-stop\\qa\\screens";
mkdirSync(outDir, { recursive: true });
const listUrl = "http://localhost:9301/so-ts?type=BUS_STOP";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=BUS_STOP";
const TEST_ID = "rmms-so-ts-bus-stop-list";
const bootUrl = "http://localhost:9301/index.html";

async function navigateSpa(page, targetUrl) {
  const u = new URL(targetUrl);
  const next = u.pathname + u.search;
  await page.goto(bootUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("#root", { timeout: 20000 });
  await page.evaluate((path) => {
    window.history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, next);
}

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await navigateSpa(page, listUrl);
await page.waitForSelector(`[data-testid="${TEST_ID}-page"]`, {
  timeout: 30000,
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
  const headers = Array.from(document.querySelectorAll("th, [role='columnheader']"))
    .map((el) => (el.textContent || "").trim())
    .filter(Boolean);
  return {
    titleCount: /Danh sách điểm dừng xe buýt/i.test(body),
    headerCount: /Sổ TS — Điểm dừng xe buýt/i.test(body),
    createBtn: /Tạo mới/i.test(body),
    noCreateBadge: !/\bCREATE\b/.test(body),
    typeFilterHidden: typeHidden,
    filterBar: !!document.querySelector(`[data-testid="${tid}-page"]`),
    search: !!document.querySelector(`[data-testid="${tid}-field-search"]`),
    route: !!document.querySelector(`[data-testid="${tid}-field-route"]`),
    kmFrom: !!document.querySelector(`[data-testid="${tid}-field-kmFrom"]`),
    kmToFilter: !!document.querySelector(`[data-testid="${tid}-field-kmTo"]`),
    org: !!document.querySelector(`[data-testid="${tid}-field-org"]`),
    headers,
    snippet: body.slice(0, 600),
  };
}, TEST_ID);

await navigateSpa(page, formUrl);
await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
  timeout: 30000,
});
await page.waitForSelector('[data-testid="asset-bus-stop-attr"]', {
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
    busStopAttr: !!document.querySelector('[data-testid="asset-bus-stop-attr"]'),
    typeWork: !!document.querySelector('[data-testid="asset-field-type_work_id"]') || /Loại tài sản|type_work/i.test(body),
    management: !!document.querySelector('[data-testid="asset-field-management_id"]') || /ĐV QL|management/i.test(body),
    stopBay: !!document.querySelector('[data-testid="asset-field-stop_bay"]') || /làn đậu|stop_bay/i.test(body),
    seated: !!document.querySelector('[data-testid="asset-field-seated_waiting_bus"]') || /ghế chờ|seated/i.test(body),
    shelter: !!document.querySelector('[data-testid="asset-field-bus_shelter"]') || /nhà chờ|bus_shelter/i.test(body),
    stationNameLabel: /Tên điểm/i.test(body),
    kmToVisible,
    snippet: body.slice(0, 800),
  };
});

const dtm = [];
for (const [label, w] of [
  ["D", 1280],
  ["T", 768],
  ["M", 375],
]) {
  await page.setViewportSize({ width: w, height: 900 });
  await navigateSpa(page, listUrl);
  await page.waitForSelector(`[data-testid="${TEST_ID}-page"]`, {
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 800));
  const overflow = await page.evaluate((tid) => {
    const root = document.querySelector(`[data-testid="${tid}-page"]`);
    if (!root) return { overflowX: true, missing: true };
    const style = getComputedStyle(root);
    const scroll = root.scrollWidth > root.clientWidth + 2;
    return {
      overflowX: scroll || style.overflowX === "scroll",
      scrollWidth: root.scrollWidth,
      clientWidth: root.clientWidth,
    };
  }, TEST_ID);
  const shot = `filter-${label}.png`;
  await page.screenshot({ path: join(outDir, shot), fullPage: false });
  dtm.push({ label, width: w, ...overflow, screenshot: shot });
}

await browser.close();

const report = {
  listUrl,
  formUrl,
  capturedAt: new Date().toISOString(),
  list,
  form,
  dtm,
  ok:
    list.filterBar &&
    list.search &&
    list.route &&
    list.createBtn &&
    list.titleCount &&
    form.cols5 &&
    form.busStopAttr &&
    form.stationNameLabel &&
    form.kmToVisible === false &&
    dtm.every((d) => !d.overflowX),
};
writeFileSync(join(outDir, "live-assert.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.ok ? 0 : 1);
