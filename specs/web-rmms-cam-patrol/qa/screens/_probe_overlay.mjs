import { chromium } from "playwright";
import { writeFileSync } from "node:fs";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 430, height: 900 } });
const logs = [];
page.on("console", (m) => logs.push("console:" + m.type() + " " + m.text()));
page.on("pageerror", (e) => logs.push("pageerror:" + String(e)));

await page.route(/http:\/\/localhost:9301(\/[^?]*)?(\?.*)?$/, async (route) => {
  const req = route.request();
  if (req.resourceType() !== "document") {
    await route.continue();
    return;
  }
  const url = req.url();
  if (/\/(linm-rmms-mobile\.js|index\.html)(\?|$)/.test(url) || /\.[a-z0-9]+(\?|$)/i.test(url)) {
    await route.continue();
    return;
  }
  const r = await page.request.get("http://localhost:9301/");
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: await r.text(),
  });
});

await page.goto("http://localhost:9301/web-rmms-cam-patrol", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(4000);

let overlayText = "";
const iframe = page.frameLocator("iframe#webpack-dev-server-client-overlay");
overlayText = await iframe.locator("body").innerText().catch(() => "");
if (!overlayText) {
  overlayText = await page
    .locator("#webpack-dev-server-client-overlay")
    .innerText()
    .catch(() => "");
}
const body = await page.locator("body").innerText().catch(() => "");
const html = await page.content();
const out = {
  overlayText: overlayText.slice(0, 4000),
  body: body.slice(0, 1500),
  logs: logs.slice(0, 40),
  hasOverlayIframe: html.includes("webpack-dev-server-client-overlay"),
};
writeFileSync(new URL("./_probe.result.json", import.meta.url), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
await browser.close();
