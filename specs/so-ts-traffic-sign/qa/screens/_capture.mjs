/**
 * E2E capture S0/S1/QA-20 — so-ts-traffic-sign (channel=chrome · no kill worker).
 * Note: yarn e2e-qa may overwrite this file — keep createRequire for playwright resolve.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-traffic-sign\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=TRAFFIC_SIGN";
const aliasUrl = "http://localhost:9301/so-ts-traffic-sign";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=TRAFFIC_SIGN";
const TEST_ID = "rmms-so-ts-traffic-sign-list";

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: `[data-testid="${TEST_ID}-page"]`,
    note: "list TRAFFIC_SIGN · filter · title Biển báo",
  },
  {
    id: "S1",
    url: aliasUrl,
    selector: `[data-testid="${TEST_ID}-page"]`,
    note: "alias /so-ts-traffic-sign → type=TRAFFIC_SIGN",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: '[data-testid="asset-traffic-sign-attr"]',
    note: "Create form · S-ATTR · S-LOC-POINT ẩn kmTo · BB-",
  },
];

function sha16(file) {
  return createHash("sha256")
    .update(readFileSync(file))
    .digest("hex")
    .slice(0, 16);
}

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const results = [];

try {
  for (const step of steps) {
    const file = `${step.id}.png`;
    const abs = join(outDir, file);
    try {
      const res = await page.goto(step.url, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      if (!res || !res.ok())
        throw new Error("HTTP " + (res ? res.status() : "no-response"));
      await page.waitForSelector(step.selector, { timeout: 25000 });
      if (step.id === "QA-20") {
        await page.waitForSelector('[data-testid="rmms-asset-form-shell"]', {
          timeout: 15000,
        });
      }
      await new Promise((r) => setTimeout(r, 1200));
      await page.screenshot({ path: abs, fullPage: true });
      results.push({
        id: step.id,
        result: "PASS",
        screenshot: file,
        sha256_16: sha16(abs),
        url: step.url,
        note: step.note,
      });
    } catch (err) {
      try {
        await page.screenshot({ path: abs, fullPage: true });
      } catch {
        /* ignore */
      }
      results.push({
        id: step.id,
        result: "FAIL",
        screenshot: file,
        url: step.url,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
} finally {
  await browser.close();
}

const manifest = {
  url: listUrl,
  aliasUrl,
  formUrl,
  method:
    "e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel)",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
  note: "GAP-QA-E2E-PW-01: yarn e2e-qa headed hang · capture channel=chrome · --skip-start · API :5111",
  testid: `${TEST_ID}-page`,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify(manifest, null, 2));
process.exit(manifest.ok ? 0 : 1);
