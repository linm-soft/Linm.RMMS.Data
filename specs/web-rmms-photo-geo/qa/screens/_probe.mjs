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
const out = {};
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
for (const path of ["/web-rmms-home", "/anh-vi-tri", "/"]) {
  await p.goto(base + path, { waitUntil: "domcontentloaded", timeout: 60000 });
  await p.waitForTimeout(3500);
  out[path] = await p.evaluate(() => ({
    href: location.href,
    text: (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " "),
    guestLogin: !!document.getElementById("guestLogin"),
    PGC: !!document.getElementById("PGC"),
    sheet: !!document.getElementById("sheet-pgc"),
    features: [...document.querySelectorAll("[data-feature]")].map((e) =>
      e.getAttribute("data-feature"),
    ),
    ids: [...document.querySelectorAll("[id]")].map((e) => e.id).slice(0, 40),
  }));
}
await b.close();
writeFileSync(new URL("./_probe.json", import.meta.url), JSON.stringify(out, null, 2));
console.log("ok", Object.keys(out));
