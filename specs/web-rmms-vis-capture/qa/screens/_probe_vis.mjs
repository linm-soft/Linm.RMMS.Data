import { createRequire } from "node:module";
const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const base = "http://localhost:9301";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 430, height: 900 } });

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
  const r = await page.request.get(base + "/");
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: await r.text(),
  });
});

for (const path of ["/chup-hien-truong", "/web-rmms-home", "/"]) {
  await page.goto(base + path, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2500);
  const info = await page.evaluate(() => ({
    href: location.href,
    text: (document.body?.innerText || "").slice(0, 600).replace(/\s+/g, " "),
    ids: [
      "guestLogin",
      "visGuestGate",
      "visGuestLogin",
      "sc-vis-capture",
      "VIS",
      "loginUser",
      "validationBanner",
    ].filter((id) => document.getElementById(id)),
    features: [...document.querySelectorAll("[data-feature]")].map((e) =>
      e.getAttribute("data-feature"),
    ),
  }));
  console.log(JSON.stringify({ path, ...info }, null, 2));
}

await browser.close();
