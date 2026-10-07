import pw from "file:///D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.js";
import { writeFileSync } from "node:fs";

const { chromium } = pw;
const user = process.env.QLBD_USER;
const password = process.env.QLBD_PASSWORD;
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

await page.goto(base + "/login", { waitUntil: "domcontentloaded" });
await page.fill("#f-user", user);
await page.fill("#f-pass", password);
await page.click("#btn-login");
await page.waitForFunction(() => !/\/login|\/dang-nhap/i.test(location.pathname), {
  timeout: 30000,
});
await page.waitForTimeout(2000);

await page.goto(base + "/tuan-duong", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(3500);
const hub = await page.evaluate(() => ({
  href: location.href,
  text: (document.body.innerText || "").slice(0, 1500).replace(/\s+/g, " "),
  testids: [...document.querySelectorAll("[data-testid]")]
    .map((e) => e.getAttribute("data-testid"))
    .slice(0, 60),
  hrefs: [...document.querySelectorAll("a[href]")]
    .map((a) => a.getAttribute("href"))
    .filter((h) => h && /tuan-duong|session/i.test(h))
    .slice(0, 30),
}));

await page.goto(base + "/web-rmms-role-gate", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2500);
const role = await page.evaluate(() => ({
  href: location.href,
  text: (document.body.innerText || "").slice(0, 1200).replace(/\s+/g, " "),
}));

const out = { hub, role };
writeFileSync(
  "D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/qa/screens/_probe.json",
  JSON.stringify(out, null, 2),
);
console.log(JSON.stringify(out, null, 2));
await browser.close();
