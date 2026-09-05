/**
 * QA E2E capture — yarn e2e-qa contract (GAP-QA-E2E-PW-01 fallback).
 * `yarn e2e-qa` Docker gate expects API :5101 — compose maps :5111.
 * std + docker already listen · skip-start semantics.
 * Dev scaffolds · QA owns run (cấm Dev e2e).
 * Note: bare `import from "playwright"` fails when file lives under productRoot
 * (Node24 resolves from importer dir) → createRequire(AutoCode package.json).
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
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-rescue-station\\qa\\screens";
const listUrl = "http://localhost:9301/so-ts?type=RESCUE_STATION";
const aliasUrl = "http://localhost:9301/so-ts-rescue-station";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=RESCUE_STATION";
const listSel = '[data-testid="rmms-so-ts-rescue-station-list-page"]';
const formSel = '[data-testid="rmms-asset-form-shell"]';
const attrSel = '[data-testid="asset-rescue-station-attr"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list RESCUE_STATION profile + filter bar",
  },
  {
    id: "S1",
    url: aliasUrl,
    selector: listSel,
    note: "alias /so-ts-rescue-station → type=RESCUE_STATION",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: attrSel,
    note: "Create form · S-ATTR rescue-station · Tên kho bãi · kmTo ẩn",
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
  note: "GAP-QA-E2E-PW-01: yarn e2e-qa Docker gate expects :5101 — compose maps :5111; capture used channel=chrome · --skip-start",
  testid: "rmms-so-ts-rescue-station-list-page",
  formTestid: "rmms-asset-form-shell",
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify(manifest, null, 2));
process.exit(manifest.ok ? 0 : 1);
