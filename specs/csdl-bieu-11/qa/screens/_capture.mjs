/**
 * QA E2E capture — edit_page T-XLS-S11 + CRUD KEEP.
 * yarn e2e-qa overwrites this with bare playwright → GAP-QA-E2E-PW-01.
 * Run AFTER e2e-qa via: node this file (createRequire AutoCode).
 * channel=chrome · skip-start · cấm kill worker (GAP-QA-E2E-KILL-01).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-11\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-11";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems";
const formUrl = "http://localhost:9301/csdl-bieu-11?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-11-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-11-form-slideout"]';
const hubListSel = '[data-testid="rmms-csdl-bieu-11-list-page"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    also: '[data-testid="rmms-csdl-bieu-11-list-export-excel-btn"]',
    note: "list Biểu 11 · toolbar Xuất/Nhập · filter-bar · empty/grid · peer",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubListSel,
    also: '[data-testid="rmms-csdl-bieu-11-list-import-excel-btn"]',
    note: "hub deep-link ?resource=lighting-systems → Biểu 11 list",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-11-form-z2"]',
    note: "Create Slideout · form=create KEEP · 2 section lưới+NLMT · LT-",
  },
];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const results = [];
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
        const hasBoot = await page
          .locator("#root")
          .count()
          .then((n) => n > 0)
          .catch(() => false);
        if (!hasBoot) {
          throw new Error("HTTP " + (res ? res.status() : "no-response"));
        }
      }
      await page.waitForSelector(step.selector, { timeout: 45000 });
      if (step.also) {
        await page.waitForSelector(step.also, { timeout: 20000 });
      }
      await new Promise((r) => setTimeout(r, 1500));

      if (step.id === "S0") {
        const live = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          const filterRoot = document.querySelector(
            '[data-testid="rmms-csdl-bieu-11-list-filters"]',
          );
          const filterExport = filterRoot
            ? filterRoot.querySelector(
                '[data-testid*="export"], button[aria-label*="Xuất"], button[title*="Xuất"]',
              )
            : null;
          return {
            url: location.href,
            hasTitle: /Biểu\s*11|chiếu sáng|hệ thống chiếu sáng/i.test(body),
            hasFilter: testids.some((t) => t && /field-search|filters/i.test(t)),
            hasSide: testids.some((t) => t && /field-side/i.test(t)),
            hasGridStatus: testids.some((t) => t && /gridStatus/i.test(t)),
            hasKmFrom: testids.some((t) => t && /kmFrom/i.test(t)),
            hasKmTo: testids.some((t) => t && /kmTo/i.test(t)),
            hasExport: testids.includes(
              "rmms-csdl-bieu-11-list-export-excel-btn",
            ),
            hasImport: testids.includes(
              "rmms-csdl-bieu-11-list-import-excel-btn",
            ),
            filterBarHasExport: !!filterExport,
            noDemo: !/demo|stub|placeholder only/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            peerSots: testids.includes("rmms-csdl-bieu-11-list-peer-sots"),
            peerToolbarOk: testids.includes("rmms-csdl-bieu-11-list-peer-sots"),
            testids,
            titleSnippet: body.slice(0, 360),
          };
        });
        writeFileSync(
          join(outDir, "live-assert.json"),
          JSON.stringify(live, null, 2),
          "utf8",
        );
        if (!live.hasExport || !live.hasImport || live.filterBarHasExport) {
          throw new Error(
            "XLS toolbar assert fail export=" +
              live.hasExport +
              " import=" +
              live.hasImport +
              " filterExport=" +
              live.filterBarHasExport,
          );
        }
      }

      if (step.id === "QA-20") {
        const formLive = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const cols =
            document
              .querySelector("[data-form-cols]")
              ?.getAttribute("data-form-cols") || "";
          const body = document.body?.innerText || "";
          return {
            hasZ2: testids.includes("csdl-bieu-11-form-z2"),
            hasZ2b: testids.includes("csdl-bieu-11-form-z2b"),
            hasZ3: testids.includes("csdl-bieu-11-form-z3"),
            hasRoad: testids.includes("csdl-bieu-11-field-road"),
            hasLed600: testids.includes("csdl-bieu-11-field-gridLed600"),
            hasLed240: testids.includes("csdl-bieu-11-field-gridLed240"),
            hasGridStatus: testids.includes("csdl-bieu-11-field-gridStatus"),
            hasSolarPole: testids.includes("csdl-bieu-11-field-solarPoleCount"),
            hasCabinet: testids.includes("csdl-bieu-11-field-cabinetCount"),
            hasSave: testids.includes("csdl-bieu-11-btn-save"),
            dataFormCols: cols,
            hasLtCodeHint:
              /LT-/i.test(body) || testids.includes("csdl-bieu-11-field-code"),
            sectionSnippet: body.slice(0, 500),
          };
        });
        writeFileSync(
          join(outDir, "form-assert.json"),
          JSON.stringify(formLive, null, 2),
          "utf8",
        );
      }

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
        httpStatus: res ? res.status() : 200,
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
  method:
    "playwright channel=chrome · yarn e2e-qa playwright resolve fail → AutoCode createRequire fallback · skip-start",
  feature: "csdl-bieu-11",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
writeFileSync(join(outDir, "_capture.mjs"), readFileSync(new URL(import.meta.url)), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
