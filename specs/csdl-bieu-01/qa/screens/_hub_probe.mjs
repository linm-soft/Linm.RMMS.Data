import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const url =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections";
await p.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
await new Promise((x) => setTimeout(x, 3500));
const ids = await p.evaluate(() =>
  [...document.querySelectorAll("[data-testid]")]
    .map((e) => e.getAttribute("data-testid"))
    .filter(Boolean)
    .slice(0, 50),
);
const body = (await p.locator("body").innerText()).slice(0, 600);
const out = { url, ids, body };
writeFileSync(
  "D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/qa/screens/_hub_probe.json",
  JSON.stringify(out, null, 2),
  "utf8",
);
console.log(JSON.stringify(out, null, 2));
await b.close();
