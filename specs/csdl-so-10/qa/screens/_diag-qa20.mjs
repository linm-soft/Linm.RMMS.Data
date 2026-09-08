import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";
const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/qa/screens";
const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
page.on("console", (m) => {
  if (m.type() === "error") console.log("CONSOLE", m.text());
});

await page.goto("http://localhost:9301/csdl-so-10", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector('[data-testid="rmms-csdl-so-10-list-page"]', {
  timeout: 45000,
});
await page.click('[data-testid="rmms-csdl-so-10-list-create-btn"]');
await new Promise((r) => setTimeout(r, 3000));

const info = await page.evaluate(() => ({
  url: location.href,
  testids: Array.from(document.querySelectorAll("[data-testid]"))
    .map((e) => e.getAttribute("data-testid"))
    .filter(
      (t) =>
        t &&
        (t.includes("form") ||
          t.includes("map") ||
          t.includes("slide") ||
          t.includes("so-10") ||
          t.includes("leave")),
    ),
  hasForm: !!document.querySelector('[data-testid="csdl-so-10-form"]'),
  overlayCount: document.querySelectorAll("[class*='slide'],[class*='Slide'],[role='dialog']").length,
  bodyHasLuu: /Lưu/.test(document.body.innerText || ""),
  snippet: (document.body.innerText || "").slice(0, 600),
}));
writeFileSync(`${outDir}/qa20-diag.json`, JSON.stringify(info, null, 2));
await page.screenshot({ path: `${outDir}/QA-20-click.png`, fullPage: false });

// also try deep link fresh page
await page.goto("http://localhost:9301/csdl-so-10?form=create", {
  waitUntil: "networkidle",
  timeout: 60000,
});
await new Promise((r) => setTimeout(r, 3000));
const info2 = await page.evaluate(() => ({
  url: location.href,
  hasForm: !!document.querySelector('[data-testid="csdl-so-10-form"]'),
  testids: Array.from(document.querySelectorAll("[data-testid]"))
    .map((e) => e.getAttribute("data-testid"))
    .filter((t) => t && (t.includes("form") || t.includes("map") || t.includes("create"))),
  snippet: (document.body.innerText || "").slice(0, 400),
}));
writeFileSync(`${outDir}/qa20-diag-deeplink.json`, JSON.stringify(info2, null, 2));
console.log("CLICK", JSON.stringify(info));
console.log("DEEPLINK", JSON.stringify(info2));
await browser.close();
