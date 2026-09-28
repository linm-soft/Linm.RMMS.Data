import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let chromiumLauncher = chromium;
try {
  require.resolve("playwright");
} catch {
  const autoPw = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
  chromiumLauncher = autoPw("playwright").chromium;
}

const rulesCred = JSON.parse(
  readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json", "utf8"),
);
const user = rulesCred.user || "";
const password = rulesCred.password || "";
const base = "http://localhost:9301";

const browser = await chromiumLauncher.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 430, height: 900 },
  geolocation: { latitude: 21.0285, longitude: 105.8542, accuracy: 12 },
  permissions: ["geolocation"],
});
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

await page.goto(base + "/m/trang-chu", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.evaluate(() => {
  localStorage.clear();
  sessionStorage.clear();
});
await page.goto(base + "/m/trang-chu", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(1200);

// open login via guest CTA
await page.locator("#guestLogin").click();
await page.waitForTimeout(1500);
let info = await page.evaluate(() => ({
  href: location.href,
  feature: document.querySelector("[data-feature]")?.getAttribute("data-feature"),
  zones: [
    ...new Set(
      [...document.querySelectorAll("[data-zone]")].map((e) => e.getAttribute("data-zone")),
    ),
  ],
  inputs: [...document.querySelectorAll("input")].map((i) => ({
    id: i.id,
    name: i.name,
    type: i.type,
    placeholder: i.placeholder,
  })),
  ids: [...document.querySelectorAll("[id]")].map((e) => e.id).slice(0, 40),
  text: (document.body?.innerText || "").slice(0, 500).replace(/\s+/g, " "),
}));
console.log("AFTER guestLogin click", JSON.stringify(info, null, 2));

// if still on home with sheet
const hasSheet = await page.locator("#loginUser, [data-zone='SH-02'], [data-zone='LG-00']").count();
console.log("hasSheetCount", hasSheet);

if (await page.locator("#loginUser").count()) {
  await page.fill("#loginUser", user);
  await page.fill("#loginPass", password);
  await page.locator("#loginSubmit").click({ force: true });
} else if (await page.locator("[data-zone='LG-00'] input").count()) {
  const inputs = page.locator("[data-zone='LG-00'] input");
  await inputs.nth(0).fill(user);
  await inputs.nth(1).fill(password);
  await page.locator("[data-zone='LG-00'] button").filter({ hasText: /Đăng nhập/i }).first().click({ force: true });
} else {
  await page.goto(base + "/m/dang-nhap", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(1000);
  info = await page.evaluate(() => ({
    href: location.href,
    inputs: [...document.querySelectorAll("input")].map((i) => ({
      id: i.id,
      name: i.name,
      type: i.type,
      placeholder: i.placeholder,
    })),
    text: (document.body?.innerText || "").slice(0, 400).replace(/\s+/g, " "),
  }));
  console.log("LOGIN PAGE", JSON.stringify(info, null, 2));
  const inputs = page.locator("input");
  await inputs.nth(0).fill(user);
  await inputs.nth(1).fill(password);
  await page.locator("button").filter({ hasText: /Đăng nhập/i }).first().click({ force: true });
}

await page.waitForTimeout(3000);
info = await page.evaluate(() => ({
  href: location.href,
  feature: document.querySelector("[data-feature]")?.getAttribute("data-feature"),
  zones: [
    ...new Set(
      [...document.querySelectorAll("[data-zone]")].map((e) => e.getAttribute("data-zone")),
    ),
  ],
  text: (document.body?.innerText || "").slice(0, 500).replace(/\s+/g, " "),
}));
console.log("AFTER login", JSON.stringify(info, null, 2));

await page.goto(base + "/van-de", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2000);
info = await page.evaluate(() => ({
  href: location.href,
  feature: document.querySelector("[data-feature]")?.getAttribute("data-feature"),
  zones: [
    ...new Set(
      [...document.querySelectorAll("[data-zone]")].map((e) => e.getAttribute("data-zone")),
    ),
  ],
  fields: [
    ...new Set(
      [...document.querySelectorAll("[data-field]")].map((e) => e.getAttribute("data-field")),
    ),
  ],
  text: (document.body?.innerText || "").slice(0, 600).replace(/\s+/g, " "),
}));
console.log("STAFF /van-de", JSON.stringify(info, null, 2));

await page.goto(base + "/van-de/moi", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2000);
info = await page.evaluate(() => ({
  href: location.href,
  feature: document.querySelector("[data-feature]")?.getAttribute("data-feature"),
  zones: [
    ...new Set(
      [...document.querySelectorAll("[data-zone]")].map((e) => e.getAttribute("data-zone")),
    ),
  ],
  fields: [
    ...new Set(
      [...document.querySelectorAll("[data-field]")].map((e) => e.getAttribute("data-field")),
    ),
  ],
  createDisabled: document.querySelector('[data-field="create"]')
    ? document.querySelector('[data-field="create"]').disabled
    : null,
  text: (document.body?.innerText || "").slice(0, 600).replace(/\s+/g, " "),
}));
console.log("STAFF /van-de/moi", JSON.stringify(info, null, 2));

await browser.close();
