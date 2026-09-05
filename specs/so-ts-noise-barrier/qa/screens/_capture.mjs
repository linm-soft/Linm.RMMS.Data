/**
 * QA E2E capture — yarn e2e-qa contract (GAP-QA-E2E-PW-01 fallback).
 * `yarn e2e-qa` headed login hang · Docker gate :5101 vs compose :5111.
 * std + docker already listen · skip-start semantics · cấm kill :9301 worker.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(
  "D:/AI-Extension/AI-AutoCode/package.json",
);
const { chromium } = require("playwright");
const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-noise-barrier\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=NOISE_BARRIER";
const aliasUrl = "http://localhost:9301/so-ts-noise-barrier";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=NOISE_BARRIER";
const listSel = '[data-testid="rmms-so-ts-noise-barrier-list-page"]';
const formSel = '[data-testid="rmms-asset-form-shell"]';
const attrSel = '[data-testid="asset-noise-barrier-attr"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list NOISE_BARRIER profile + filter bar · kmTo ON",
  },
  {
    id: "S1",
    url: aliasUrl,
    selector: listSel,
    note: "alias /so-ts-noise-barrier → type=NOISE_BARRIER",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: attrSel,
    note: "Create form · S-ATTR noise-barrier · S-LOC-RANGE · TC-",
  },
];

const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const browser = await chromium.launch({
  headless: true,
  channel: "chrome",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  for (const step of steps) {
    const file = shotName(step.id);
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
      if (step.also) {
        await page.waitForSelector(step.also, { timeout: 15000 });
      }
      await new Promise((r) => setTimeout(r, 1500));
      await page.screenshot({ path: abs, fullPage: true });
      const hash = createHash("sha256")
        .update(readFileSync(abs))
        .digest("hex")
        .slice(0, 16);
      results.push({
        id: step.id,
        result: "PASS",
        screenshot: file,
        sha256_16: hash,
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
        error: err instanceof Error ? err.message : String(err),
        url: step.url,
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
    "e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel fallback)",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
  note: "GAP-QA-E2E-PW-01: yarn e2e-qa headed hang · capture channel=chrome · --skip-start · API :5111",
  testid: "rmms-so-ts-noise-barrier-list-page",
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify(manifest, null, 2));
process.exit(manifest.ok ? 0 : 1);
