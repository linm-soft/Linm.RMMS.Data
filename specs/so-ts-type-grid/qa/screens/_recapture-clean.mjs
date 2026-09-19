/**
 * Dismiss webpack-dev-server overlay then re-capture (clean PNG).
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-type-grid\\qa\\screens";
mkdirSync(outDir, { recursive: true });

const steps = [
  {
    id: "S0",
    url: "http://localhost:9301/so-ts-type-grid",
    selector: '[data-testid="rmms-asset-list-page"]',
    note: "alias → /so-ts shell list",
  },
  {
    id: "S1",
    url: "http://localhost:9301/so-ts",
    selector: '[data-testid="rmms-asset-list-page"]',
    note: "peer /so-ts",
  },
  {
    id: "QA-20",
    url: "http://localhost:9301/so-ts/tao-moi",
    selector: '[data-testid="rmms-asset-form-shell"]',
    also: '[data-testid="asset-section-s-meta"]',
    note: "Create CatalogFormShell 5col",
  },
];

async function dismissOverlay(page) {
  await page.evaluate(() => {
    document
      .querySelectorAll(
        "#webpack-dev-server-client-overlay, iframe#webpack-dev-server-client-overlay, [id*='webpack-dev-server-client-overlay']",
      )
      .forEach((el) => el.remove());
  });
  await page.keyboard.press("Escape").catch(() => {});
  await new Promise((r) => setTimeout(r, 400));
}

const results = [];
const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  for (const step of steps) {
    const file = `${step.id}.png`;
    const abs = join(outDir, file);
    const res = await page.goto(step.url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    if (!res || res.status() >= 500) throw new Error("HTTP fail " + step.id);
    await page.waitForSelector(step.selector, { timeout: 45000 });
    if (step.also) await page.waitForSelector(step.also, { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 1200));
    await dismissOverlay(page);
    await page.screenshot({ path: abs, fullPage: false });
    const buf = readFileSync(abs);
    const sha16 = createHash("sha256").update(buf).digest("hex").slice(0, 16);
    const overlayGone = await page.evaluate(
      () =>
        !document.querySelector(
          "#webpack-dev-server-client-overlay, iframe#webpack-dev-server-client-overlay",
        ),
    );
    results.push({
      id: step.id,
      result: "PASS",
      ok: true,
      screenshot: file,
      sha16,
      bytes: buf.length,
      overlayGone,
      finalUrl: page.url(),
      note: step.note,
    });
    console.log("OK", step.id, sha16, "overlayGone=" + overlayGone);
  }
} finally {
  await browser.close();
}

const ok = results.every((r) => r.ok);
const manifest = {
  feature: "so-ts-type-grid",
  url: "http://localhost:9301/so-ts-type-grid",
  peerUrl: "http://localhost:9301/so-ts",
  formUrl: "http://localhost:9301/so-ts/tao-moi",
  ok,
  capturedAt: new Date().toISOString(),
  method:
    "playwright channel=chrome · createRequire AutoCode · dismiss wds overlay · skip-start",
  gap: "GAP-QA-E2E-PW-01",
  testid: "rmms-asset-list-page · rmms-asset-form-shell",
  steps: results,
  results,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
process.exit(ok ? 0 : 1);
