/**
 * QA E2E capture — yarn e2e-qa contract (GAP-QA-E2E-PW-01 fallback).
 * `yarn e2e-qa` Docker gate expects API :5101 — compose maps :5111.
 * std + docker already listen · skip-start semantics.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const pw = await import(
  pathToFileURL(
    "D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs",
  ).href,
);
const { chromium } = pw;
const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-toll\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=TOLL";
const aliasUrl = "http://localhost:9301/so-ts-toll";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=TOLL";
const listSel = '[data-testid="rmms-so-ts-toll-list-page"]';
const formSel = '[data-testid="rmms-asset-form-shell"]';
const attrSel = '[data-testid="asset-toll-attr"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list TOLL profile + filter bar",
  },
  {
    id: "S1",
    url: aliasUrl,
    selector: listSel,
    note: "alias /so-ts-toll → type=TOLL",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: attrSel,
    note: "Create form · S-ATTR toll",
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
  note: "GAP-QA-E2E-PW-01: yarn e2e-qa hung after login banner — capture used channel=chrome · --skip-start; GAP-QA-E2E-DOCKER-01: gate expects :5101 · compose :5111",
  testid: "rmms-so-ts-toll-list-page",
  formTestid: "rmms-asset-form-shell",
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify(manifest, null, 2));
process.exit(manifest.ok ? 0 : 1);
