/**
 * QA E2E capture — Kind G hub csdl-cuc-2026 (GAP-QA-E2E-PW-01 fallback).
 * Prefer yarn e2e-qa; if hang @ login → channel=chrome. cấm kill worker rộng.
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";
const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("D:/AI-Extension/AI-AutoCode/node_modules/playwright");

const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-cuc-2026\\qa\\screens";
mkdirSync(outDir, { recursive: true });
const aliasUrl = "http://localhost:9301/csdl-cuc-2026";
const hubLiveUrl = "http://localhost:9301/so-ts/csdl-so-sach";
const hubSel = '[data-testid="rmms-csdl-so-sach-hub"]';
const importBtn = '[data-testid="rmms-csdl-so-sach-import"]';
const importModal = '[data-testid="rmms-csdl-import-modal"]';

const steps = [
  {
    id: "S0",
    url: aliasUrl,
    selector: hubSel,
    note: "alias /csdl-cuc-2026 · Kind G hub · KPI/tabs/cards · DES-HUB-*",
  },
  {
    id: "S1",
    url: hubLiveUrl,
    selector: hubSel,
    note: "hub live /so-ts/csdl-so-sach ↔ alias · same Kind G",
  },
  {
    id: "QA-20",
    url: aliasUrl,
    selector: hubSel,
    openImport: true,
    also: importModal,
    note: "Import Excel modal · skipBridge · preview/commit · DES-MOD-IMPORT",
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
      const status = res ? res.status() : 0;
      if (!res || status >= 500) {
        throw new Error("HTTP " + (status || "no-response"));
      }
      await page.waitForSelector(step.selector, { timeout: 45000 });
      if (step.openImport) {
        await page.click(importBtn);
        await page.waitForSelector(step.also, { timeout: 15000 });
      }
      await new Promise((r) => setTimeout(r, 1500));

      if (step.id === "S0") {
        const live = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          const kpiVals = Array.from(
            document.querySelectorAll('[data-testid="DES-HUB-KPI"] .kpiVal, [data-testid="DES-HUB-KPI"] [class*="kpiVal"]'),
          ).map((el) => (el.textContent || "").trim());
          return {
            url: location.href,
            hasTitle: /CSDL\s*Cục|16\s*biểu|10\s*sổ/i.test(body),
            hasHubA: testids.includes("DES-HUB-A"),
            hasHubB: testids.includes("DES-HUB-B"),
            hasHubTab: testids.includes("DES-HUB-TAB"),
            hasHubKpi: testids.includes("DES-HUB-KPI"),
            hasHubC: testids.includes("DES-HUB-C") || testids.includes("DES-HUB-D"),
            hasFilter: testids.includes("DES-HUB-FILTER"),
            hasImport: testids.includes("rmms-csdl-so-sach-import"),
            hasExport: testids.includes("rmms-csdl-so-sach-export"),
            hasRefresh: testids.includes("rmms-csdl-so-sach-refresh"),
            kpiVals,
            noDemo: !/demo|stub|placeholder only/i.test(body),
            noSlugUi: !/\bpavement-sections\b|\bbridges\b/.test(body),
            testids,
            titleSnippet: body.slice(0, 480),
          };
        });
        writeFileSync(
          join(outDir, "live-assert.json"),
          JSON.stringify(live, null, 2),
          "utf8",
        );
      }

      if (step.id === "QA-20") {
        const formLive = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          return {
            hasModal: testids.includes("rmms-csdl-import-modal"),
            hasFile: testids.includes("rmms-csdl-import-file"),
            hasSkipBridge: testids.includes("rmms-csdl-import-skip-bridge"),
            hasPreviewBtn: testids.includes("rmms-csdl-import-preview-btn"),
            hasCommitBtn: testids.includes("rmms-csdl-import-commit-btn"),
            hasImportLabel: /Import|Excel|skip|cầu\s*âm/i.test(body),
            testids,
            titleSnippet: body.slice(0, 400),
          };
        });
        writeFileSync(
          join(outDir, "form-assert.json"),
          JSON.stringify(formLive, null, 2),
          "utf8",
        );
      }

      await page.screenshot({ path: abs, fullPage: false });
      const buf = readFileSync(abs);
      const sha16 = createHash("sha256").update(buf).digest("hex").slice(0, 16);
      results.push({
        id: step.id,
        ok: true,
        result: "PASS",
        file,
        screenshot: file,
        bytes: buf.length,
        sha16,
        sha256_16: sha16,
        note: step.note,
        finalUrl: page.url(),
      });
      console.log("OK", step.id, file, sha16);
    } catch (err) {
      try {
        await page.screenshot({ path: abs, fullPage: false });
      } catch {
        /* ignore */
      }
      results.push({
        id: step.id,
        ok: false,
        result: "FAIL",
        screenshot: file,
        error: String(err && err.message ? err.message : err),
        note: step.note,
      });
      console.error("FAIL", step.id, err);
    }
  }
} finally {
  await browser.close();
}

const ok = results.every((r) => r.ok);
const manifest = {
  feature: "csdl-cuc-2026",
  url: aliasUrl,
  ok,
  capturedAt: new Date().toISOString(),
  method: "playwright-channel-chrome",
  gap: "GAP-QA-E2E-PW-01",
  cases: ["S0", "S1", "QA-20"],
  results,
  steps: results,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("manifest ok=", ok);
process.exit(ok ? 0 : 1);
