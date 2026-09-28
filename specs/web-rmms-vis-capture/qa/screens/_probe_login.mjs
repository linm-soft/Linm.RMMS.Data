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

await page.goto(base + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(1500);
await page.evaluate(() => {
  try {
    localStorage.clear();
    sessionStorage.clear();
  } catch {
    /* ignore */
  }
});
await page.goto(base + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector("#guestLogin", { timeout: 20000 });
await page.locator("#guestLogin").click();
await page.waitForTimeout(2000);

const info = await page.evaluate(() => {
  const inputs = [...document.querySelectorAll("input")].map((el) => ({
    id: el.id,
    name: el.name,
    type: el.type,
    placeholder: el.placeholder,
    aria: el.getAttribute("aria-label"),
  }));
  const buttons = [...document.querySelectorAll("button")].map((el) => ({
    id: el.id,
    text: (el.textContent || "").trim().slice(0, 80),
    type: el.type,
  }));
  const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
    el.getAttribute("data-zone"),
  );
  return {
    href: location.href,
    text: (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " "),
    inputs,
    buttons,
    zones,
    features: [...document.querySelectorAll("[data-feature]")].map((e) =>
      e.getAttribute("data-feature"),
    ),
  };
});
console.log(JSON.stringify(info, null, 2));
await page.screenshot({
  path: "D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/qa/screens/_probe_login.png",
  fullPage: true,
});
await browser.close();
