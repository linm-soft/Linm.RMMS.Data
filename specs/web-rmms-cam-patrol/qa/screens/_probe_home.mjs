import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
let chromium;
try {
  chromium = require("playwright").chromium;
} catch {
  chromium = createRequire("D:/AI-Extension/AI-AutoCode/package.json")("playwright").chromium;
}

const base = "http://localhost:9301";
const browser = await chromium.launch({ headless: true });
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

const paths = [
  "/",
  "/m",
  "/m/",
  "/m/login",
  "/web-rmms-home",
  "/m/home",
  "/home",
  "/camera-tuan",
  "/m/camera-tuan",
];
const out = [];
for (const path of paths) {
  try {
    await page.goto(base + path, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(1500);
    const info = await page.evaluate(() => ({
      href: location.href,
      guest: !!document.getElementById("guestLogin"),
      cpLogin: !!document.getElementById("cpGuestLogin"),
      loginUser: !!document.getElementById("loginUser"),
      text: (document.body?.innerText || "").slice(0, 280).replace(/\s+/g, " "),
      ids: [...document.querySelectorAll("[id]")]
        .map((e) => e.id)
        .filter(Boolean)
        .slice(0, 50),
    }));
    out.push({ path, ok: true, ...info });
  } catch (err) {
    out.push({ path, ok: false, error: err instanceof Error ? err.message : String(err) });
  }
}
writeFileSync(join(__dirname, "_probe_home.result.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
await browser.close();
