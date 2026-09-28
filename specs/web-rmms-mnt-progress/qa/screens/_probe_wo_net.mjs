import { chromium } from "playwright";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
let chromiumLauncher = chromium;
try {
  require.resolve("playwright");
} catch {
  chromiumLauncher = createRequire("D:/AI-Extension/AI-AutoCode/package.json")(
    "playwright",
  ).chromium;
}
const cred = JSON.parse(
  readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json", "utf8"),
);
const base = "http://localhost:9301";
const browser = await chromiumLauncher.launch({ headless: true });
const page = await (
  await browser.newContext({ viewport: { width: 430, height: 900 } })
).newPage();
const nets = [];
page.on("response", (r) => {
  const u = r.url();
  if (/work-orders|init-data|auth|login|5202|5111|mobile-bff|token/i.test(u)) {
    nets.push({ status: r.status(), url: u.slice(0, 200) });
  }
});
page.on("requestfailed", (r) => {
  const u = r.url();
  if (/work-orders|init-data|5202|mobile-bff/i.test(u)) {
    nets.push({ status: "FAILED", url: u.slice(0, 200), err: r.failure()?.errorText });
  }
});
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
await page.goto(base + "/m/dang-nhap", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-zone="LG-00"] input, input[type=password]', { timeout: 20000 });
const inputs = page.locator('[data-zone="LG-00"] input, input');
await inputs.nth(0).fill(cred.user);
await inputs.nth(1).fill(cred.password);
await page
  .locator('[data-zone="LG-00"] button, button')
  .filter({ hasText: /Đăng nhập/i })
  .first()
  .click({ force: true });
await page.waitForTimeout(3500);
const tok = await page.evaluate(() =>
  Object.fromEntries(
    Object.keys(localStorage)
      .filter((k) => /token|auth|user|company/i.test(k))
      .map((k) => [k, (localStorage.getItem(k) || "").slice(0, 48)]),
  ),
);
console.log("TOKENS", JSON.stringify(tok, null, 2));
await page.goto(
  base + "/m/cong-viec/tien-do?id=2a0b6ead-a87e-4df5-97ae-dd2962724781",
  { waitUntil: "domcontentloaded", timeout: 60000 },
);
await page.waitForTimeout(5000);
const dump = await page.evaluate(() => ({
  href: location.href,
  text: (document.body.innerText || "").slice(0, 400),
  fields: [...document.querySelectorAll("[data-field]")].map((e) =>
    e.getAttribute("data-field"),
  ),
}));
console.log("DUMP", JSON.stringify(dump, null, 2));
console.log("NETS", JSON.stringify(nets, null, 2));
await browser.close();
