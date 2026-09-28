import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let chromium;
try {
  chromium = require("playwright").chromium;
} catch {
  chromium = require("D:/AI-Extension/AI-AutoCode/node_modules/playwright").chromium;
}

const base = "http://localhost:9301";
const b = await chromium.launch({ headless: true });
const ctx = await b.newContext({ viewport: { width: 430, height: 900 } });
const p = await ctx.newPage();
await p.route(/http:\/\/localhost:9301(\/[^?]*)?(\?.*)?$/, async (route) => {
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
  const r = await p.request.get(base + "/");
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: await r.text(),
  });
});
await p.goto(base + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
await p.waitForTimeout(2000);
await p.locator("#guestLogin").click();
await p.waitForTimeout(2500);
const dump = await p.evaluate(() => ({
  href: location.href,
  text: (document.body?.innerText || "").slice(0, 1200).replace(/\s+/g, " "),
  htmlSnippet: (document.body?.innerHTML || "").slice(0, 2500),
  ids: [...document.querySelectorAll("[id]")].map((e) => e.id).slice(0, 60),
  zones: [...document.querySelectorAll("[data-zone]")].map((e) => e.getAttribute("data-zone")),
  inputs: [...document.querySelectorAll("input")].map((el) => ({
    id: el.id,
    type: el.type,
    name: el.name,
    placeholder: el.placeholder,
  })),
  buttons: [...document.querySelectorAll("button")].map((el) => ({
    id: el.id,
    text: (el.innerText || "").slice(0, 40),
  })).slice(0, 20),
}));
writeFileSync(new URL("./_probe_login.json", import.meta.url), JSON.stringify(dump, null, 2));
await p.screenshot({ path: new URL("./_probe_login.png", import.meta.url).pathname.slice(1) });
await b.close();
console.log("ok", dump.ids, dump.zones, dump.inputs);
