import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

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
const browser = await chromiumLauncher.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 430, height: 900 } });
await page.goto("http://localhost:9301/login", {
  waitUntil: "domcontentloaded",
});
await page.fill('input[name="username"]', cred.user);
await page.fill('input[type="password"]', cred.password);
await page.locator('button[type="submit"]').click({ force: true });
await page.waitForTimeout(2000);

const dump = [];

async function snap(id, url) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1200);
  const text = (await page.locator("body").innerText())
    .replace(/\s+/g, " ")
    .slice(0, 500);
  const zones = await page.evaluate(() =>
    [...document.querySelectorAll("[data-zone],[data-feature],[data-mode]")].map(
      (e) => ({
        z: e.getAttribute("data-zone"),
        f: e.getAttribute("data-feature"),
        mode: e.getAttribute("data-mode"),
        id: e.id || null,
      }),
    ),
  );
  const tabs = await page.evaluate(() =>
    [...document.querySelectorAll("#tabBar a, #tabBar button")].map((e) =>
      (e.textContent || "").trim(),
    ),
  );
  dump.push({ id, url: page.url(), zones, tabs, text });
}

await snap("S0", "http://localhost:9301/web-rmms-shell");
await snap("S1", "http://localhost:9301/web-rmms-shell/field");

await page.evaluate(() => {
  [
    "linm.auth.accessToken",
    "linm.auth.refreshToken",
    "accessToken",
    "refreshToken",
    "auth_token",
  ].forEach((k) => localStorage.removeItem(k));
});
await page.goto("http://localhost:9301/web-rmms-shell", {
  waitUntil: "domcontentloaded",
});
await page.waitForTimeout(1000);
const cta = page.locator("#guestLoginCta");
if (await cta.count()) await cta.click();
await page.waitForTimeout(900);
const text = (await page.locator("body").innerText())
  .replace(/\s+/g, " ")
  .slice(0, 500);
const zones = await page.evaluate(() =>
  [...document.querySelectorAll("[data-zone]")].map((e) =>
    e.getAttribute("data-zone"),
  ),
);
const loginUser = await page.locator("#loginUser").count();
const loginPass = await page.locator("#loginPass").count();
dump.push({
  id: "QA-20",
  url: page.url(),
  zones,
  loginUser,
  loginPass,
  text,
});

writeFileSync(
  new URL("./visual-dump.json", import.meta.url),
  JSON.stringify(dump, null, 2),
  "utf8",
);
console.log(JSON.stringify(dump, null, 2));
await browser.close();
