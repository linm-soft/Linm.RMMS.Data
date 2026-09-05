/**
 * E2E capture S0/S1/QA-20 — so-ts-slope-protect · channel=chrome · no kill :9301
 * GAP-QA-E2E-PW-01 fallback when yarn e2e-qa headed hang (:9100 down).
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-slope-protect\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=SLOPE_PROTECT";
const aliasUrl = "http://localhost:9301/so-ts-slope-protect";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=SLOPE_PROTECT";
const TEST_ID = "rmms-so-ts-slope-protect-list";

function sha16(buf) {
  return createHash("sha256").update(buf).digest("hex").slice(0, 16);
}

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: `[data-testid="${TEST_ID}-page"]`,
    note: "list SLOPE_PROTECT profile + filter bar · kmTo ON · type hidden",
  },
  {
    id: "S1",
    url: aliasUrl,
    selector: `[data-testid="${TEST_ID}-page"]`,
    note: "alias /so-ts-slope-protect → Navigate type=SLOPE_PROTECT",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: '[data-testid="rmms-asset-form-shell"]',
    note: "Create form · S-ATTR slope-protect · S-LOC-RANGE · MD-",
  },
];

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
      if (!res || !res.ok()) {
        throw new Error("HTTP " + (res ? res.status() : "no-response"));
      }
      await page.waitForSelector(step.selector, { timeout: 25000 });
      if (step.id === "QA-20") {
        await page.waitForSelector('[data-testid="asset-slope-protect-attr"]', {
          timeout: 15000,
        });
      }
      await new Promise((r) => setTimeout(r, 1200));
      await page.screenshot({ path: abs, fullPage: false });
      const sha = sha16(readFileSync(abs));
      results.push({
        id: step.id,
        result: "PASS",
        screenshot: file,
        sha256_16: sha,
        url: step.url,
        note: step.note,
      });
      console.log("PASS", step.id, sha);
    } catch (e) {
      results.push({
        id: step.id,
        result: "FAIL",
        screenshot: file,
        error: String(e && e.message ? e.message : e),
        url: step.url,
      });
      console.error("FAIL", step.id, e);
      try {
        await page.screenshot({ path: abs, fullPage: false });
      } catch {
        /* ignore */
      }
    }
  }
} finally {
  await browser.close();
}

const ok = results.every((r) => r.result === "PASS");
const manifest = {
  url: listUrl,
  aliasUrl,
  formUrl,
  method:
    "e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel fallback)",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok,
  note: "GAP-QA-E2E-PW-01: yarn e2e-qa hang (:9100 down) · capture channel=chrome · --skip-start · API :5111 · no kill worker",
  testid: TEST_ID,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify(manifest, null, 2));
process.exit(ok ? 0 : 1);
