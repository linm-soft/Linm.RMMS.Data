import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const pw = await import(
  pathToFileURL(
    "D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs",
  ).href,
);
const { chromium } = pw;
const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:9301/csdl-bieu-01", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await p.waitForSelector('[data-testid="rmms-csdl-bieu-01-list-page"]', {
  timeout: 25000,
});
await new Promise((r) => setTimeout(r, 800));
const body = await p.locator("body").innerText();
const assert = {
  url: "http://localhost:9301/csdl-bieu-01",
  hasTitle: /Phân loại mặt đường|Biểu 01/i.test(body),
  hasFilter: body.includes("Tìm") || body.includes("Tỉnh"),
  noDemo: !/demo\/stub|localStorage SSOT/i.test(body),
  noModeBadge: !/\bCREATE\b|\bEDIT\b|\bVIEW\b/.test(body),
  testids: await p.evaluate(() =>
    [...document.querySelectorAll("[data-testid]")]
      .map((e) => e.getAttribute("data-testid"))
      .filter(Boolean)
      .slice(0, 30),
  ),
};
writeFileSync(
  "D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/qa/screens/live-assert.json",
  JSON.stringify(assert, null, 2),
  "utf8",
);
console.log(JSON.stringify(assert, null, 2));
await b.close();
if (!assert.hasTitle || !assert.hasFilter) process.exit(1);
