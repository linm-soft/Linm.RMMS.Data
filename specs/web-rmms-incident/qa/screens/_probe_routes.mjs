import { chromium } from "playwright";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let chromiumLauncher = chromium;
try {
  require.resolve("playwright");
} catch {
  const autoPw = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
  chromiumLauncher = autoPw("playwright").chromium;
}

const base = "http://localhost:9301";
const browser = await chromiumLauncher.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 430, height: 900 } });
const page = await context.newPage();

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

for (const path of [
  "/m/trang-chu",
  "/web-rmms-home",
  "/van-de",
  "/van-de/moi",
  "/web-rmms-incident",
]) {
  await page.goto(base + path, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(1800);
  const info = await page.evaluate(() => ({
    href: location.href,
    guestLogin: !!document.getElementById("guestLogin"),
    loginUser: !!document.getElementById("loginUser"),
    feature: document.querySelector("[data-feature]")?.getAttribute("data-feature"),
    zones: [
      ...new Set(
        [...document.querySelectorAll("[data-zone]")].map((e) => e.getAttribute("data-zone")),
      ),
    ],
    buttons: [...document.querySelectorAll("button, a, [role='button']")]
      .map((b) => (b.textContent || "").trim())
      .filter(Boolean)
      .slice(0, 25),
    text: (document.body?.innerText || "").slice(0, 400).replace(/\s+/g, " "),
  }));
  console.log("---", path);
  console.log(JSON.stringify(info, null, 2));
}

await browser.close();
