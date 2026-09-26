import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";

const autoPw = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium: cr } = autoPw("playwright");
const rulesCred = JSON.parse(
  readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json", "utf8"),
);
const base = "http://localhost:9301";
const out = "D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/.tmp-qa-shots";

const browser = await cr.launch({ headless: true });
const page = await (
  await browser.newContext({
    viewport: { width: 430, height: 900 },
    geolocation: { latitude: 21.0285, longitude: 105.8542 },
    permissions: ["geolocation"],
  })
).newPage();

const apis = [];
page.on("response", (res) => {
  const u = res.url();
  if (/5202|5111|mobile-bff|road-assets|asset-types|road-routes|sessions|patrol/i.test(u)) {
    apis.push({ status: res.status(), u: u.slice(0, 200), t: Date.now() });
  }
});

await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('input[name="username"]');
await page.evaluate(() => {
  document
    .querySelectorAll("#webpack-dev-server-client-overlay, iframe#webpack-dev-server-client-overlay")
    .forEach((el) => el.remove());
});
await page.fill('input[name="username"]', rulesCred.user);
await page.fill('input[type="password"]', rulesCred.password);
await Promise.all([
  page.waitForResponse((r) => /auth\/login/i.test(r.url()), { timeout: 20000 }),
  page.locator('button[type="submit"]').click({ force: true }),
]);
await page.waitForTimeout(1500);

const t0 = Date.now();
await page.goto(base + "/web-rmms-asset-collect", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(8000);
const state = await page.evaluate(() => ({
  loading: !!document.getElementById("acLoading"),
  title: !!document.getElementById("acTitle"),
  fldName: !!document.getElementById("fldName"),
  zones: [...document.querySelectorAll("[data-zone]")].map((e) => e.getAttribute("data-zone")),
  text: (document.body?.innerText || "").slice(0, 600),
}));
await page.screenshot({ path: out + "/collect-wait8.png", fullPage: true });
writeFileSync(
  out + "/collect-apis.json",
  JSON.stringify({ elapsedMs: Date.now() - t0, state, apis }, null, 2),
);
await browser.close();
console.log(JSON.stringify({ elapsedMs: Date.now() - t0, state, apis }, null, 2));
