/**
 * QA E2E capture — yarn e2e-qa contract (GAP-QA-E2E-PW-01 / historyApiFallback 404).
 * Boot via /index.html then popstate → MemoryRouterSync (standalone).
 * std + docker already listen · skip-start · no process kill.
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(
  "D:/AI-Extension/AI-AutoCode/package.json",
);
const { chromium } = require("playwright");

const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-land-row\\qa\\screens";
mkdirSync(outDir, { recursive: true });

const listUrl = "http://localhost:9301/so-ts?type=LAND_ROW";
const aliasUrl = "http://localhost:9301/so-ts-land-row";
const formUrl = "http://localhost:9301/so-ts/tao-moi?type=LAND_ROW";
const listSel = '[data-testid="rmms-so-ts-land-row-list-page"]';
const formSel = '[data-testid="rmms-asset-form-shell"]';
const attrSel = '[data-testid="asset-land-row-attr"]';
const bootUrl = "http://localhost:9301/index.html";

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list LAND_ROW profile + filter bar",
  },
  {
    id: "S1",
    url: aliasUrl,
    selector: listSel,
    note: "alias /so-ts-land-row → type=LAND_ROW",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: attrSel,
    note: "Create form · S-ATTR land row",
  },
];

const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

async function navigateSpa(page, targetUrl) {
  const u = new URL(targetUrl);
  const next = u.pathname + u.search;
  await page.goto(bootUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("#root", { timeout: 20000 });
  await page.evaluate((path) => {
    window.history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, next);
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
      await navigateSpa(page, step.url);
      await page.waitForSelector(step.selector, { timeout: 30000 });
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
    "e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel · index.html+popstate)",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
  note: "GAP-QA-E2E-PW-01 / GAP-QA-E2E-HAF-01: yarn e2e-qa hung headed login; deep-link HTTP 404 — boot index.html + popstate; no process kill",
  testid: "rmms-so-ts-land-row-list-page",
  formTestid: "rmms-asset-form-shell",
  attrTestid: "asset-land-row-attr",
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify(manifest, null, 2));
process.exit(manifest.ok ? 0 : 1);
