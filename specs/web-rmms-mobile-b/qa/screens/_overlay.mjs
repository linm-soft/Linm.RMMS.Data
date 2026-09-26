import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 430, height: 900 } });
const errors = [];
page.on("pageerror", e => errors.push(String(e)));
page.on("console", m => { if (m.type()==="error") errors.push("console:"+m.text()); });
await page.goto("http://localhost:9301/web-rmms-mobile-b", { waitUntil: "networkidle", timeout: 60000 }).catch(e => errors.push("goto:"+e.message));
await page.waitForTimeout(2000);
const overlay = page.locator("iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay");
let overlayText = "";
if (await overlay.count()) {
  const frame = page.frameLocator("iframe#webpack-dev-server-client-overlay").first();
  overlayText = await frame.locator("body").innerText().catch(() => "");
  if (!overlayText) overlayText = await overlay.first().innerText().catch(() => "overlay present");
}
const body = await page.locator("body").innerText().catch(() => "");
console.log(JSON.stringify({ overlayText: overlayText.slice(0,2000), body: body.slice(0,800), errors: errors.slice(0,10) }, null, 2));
await browser.close();
