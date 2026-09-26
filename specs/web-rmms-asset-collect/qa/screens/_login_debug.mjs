import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";

const autoPw = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium: cr } = autoPw("playwright");
const rulesCred = JSON.parse(
  readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json", "utf8"),
);
const user = rulesCred.user;
const password = rulesCred.password;
const base = "http://localhost:9301";
const out = "D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/.tmp-qa-shots";

const browser = await cr.launch({ headless: true });
const page = await (await browser.newContext({ viewport: { width: 430, height: 900 } })).newPage();
const logs = [];
page.on("console", (m) => logs.push("C:" + m.type() + " " + m.text().slice(0, 200)));
page.on("pageerror", (e) => logs.push("E:" + String(e.message || e).slice(0, 200)));

await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2500);
const overlayVis = await page.locator("#webpack-dev-server-client-overlay").isVisible().catch(() => false);
let overlayText = "";
if (overlayVis) {
  overlayText = await page.locator("#webpack-dev-server-client-overlay").innerText().catch(() => "");
}
const fields = await page.evaluate(() => ({
  user: !!document.querySelector('input[name="username"]'),
  pass: !!document.querySelector('input[type="password"]'),
  submit: !!document.querySelector('button[type="submit"]'),
  text: (document.body?.innerText || "").slice(0, 400),
  href: location.href,
}));
await page.screenshot({ path: out + "/login-before.png", fullPage: true });

if (fields.user && fields.pass) {
  await page.fill('input[name="username"]', user);
  await page.fill('input[type="password"]', password);
  await page.locator('button[type="submit"]').click({ force: true });
  await page.waitForTimeout(4000);
}
const after = await page.evaluate(() => ({
  href: location.href,
  text: (document.body?.innerText || "").slice(0, 500),
  storageKeys: Object.keys(localStorage),
  hasToken: Object.keys(localStorage).some((k) => /token|auth|jwt|access/i.test(k)),
}));
await page.screenshot({ path: out + "/login-after.png", fullPage: true });

await page.goto(base + "/web-rmms-asset-collect", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2500);
const feat = await page.evaluate(() => ({
  href: location.href,
  guest: !!document.getElementById("acGuestGate"),
  title: !!document.getElementById("acTitle"),
  overlay: !!document.querySelector("#webpack-dev-server-client-overlay"),
  text: (document.body?.innerText || "").slice(0, 500),
  storageKeys: Object.keys(localStorage),
}));
await page.screenshot({ path: out + "/collect-after-login.png", fullPage: true });

writeFileSync(
  out + "/login-debug.json",
  JSON.stringify({ overlayVis, overlayText: overlayText.slice(0, 800), fields, after, feat, logs: logs.slice(-40) }, null, 2),
);
await browser.close();
console.log(JSON.stringify({ overlayVis, overlayText: overlayText.slice(0, 400), fields, after, feat }, null, 2));
