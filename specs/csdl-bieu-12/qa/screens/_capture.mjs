/**
 * QA E2E capture — yarn e2e-qa contract (GAP-QA-E2E-PW-01 fallback).
 * Prefer yarn e2e-qa; if hang @ login → channel=chrome system Chrome.
 * std + docker already listen · skip-start · cấm kill worker rộng.
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { chromium } from "playwright";

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-12\\qa\\screens";
mkdirSync(outDir, { recursive: true });
const listUrl = "http://localhost:9301/csdl-bieu-12";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=green-assets";
const formUrl = "http://localhost:9301/csdl-bieu-12?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-12-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-12-form-slideout"]';
const hubRedirectSel = '[data-testid="rmms-csdl-bieu-12-list-page"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list Biểu 12 · filter-bar · side/km · empty/grid · no peer",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubRedirectSel,
    note: "hub ?resource=green-assets → redirect /csdl-bieu-12",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-12-form-z2"]',
    note: "Create Slideout · form=create · 2 section khóm+thảm cỏ · CX-",
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
      await page.waitForSelector(step.selector, { timeout: 25000 });
      if (step.also) {
        await page.waitForSelector(step.also, { timeout: 15000 });
      }
      await new Promise((r) => setTimeout(r, 1500));

      if (step.id === "S0") {
        const live = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          return {
            url: location.href,
            hasTitle: /Biểu\s*12|Cây xanh|thảm cỏ/i.test(body),
            hasFilter: testids.some((t) => t && /field-search|filters/i.test(t)),
            hasSide: testids.some((t) => t && /field-side/i.test(t)),
            hasKmFrom: testids.some((t) => t && /kmFrom/i.test(t)),
            hasKmTo: testids.some((t) => t && /kmTo/i.test(t)),
            noDemo: !/demo|stub|placeholder only/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            peerSots: testids.includes("rmms-csdl-bieu-12-list-peer-sots"),
            peerNoneOk: !testids.includes("rmms-csdl-bieu-12-list-peer-sots"),
            emptyOrGrid:
              testids.includes("rmms-csdl-bieu-12-list-empty") ||
              testids.some((t) => t && /grid|table/i.test(t)),
            testids,
            titleSnippet: body.slice(0, 360),
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
          const cols =
            document
              .querySelector("[data-form-cols]")
              ?.getAttribute("data-form-cols") || "";
          const body = document.body?.innerText || "";
          return {
            hasZ2: testids.includes("csdl-bieu-12-form-z2"),
            hasZ2b: testids.includes("csdl-bieu-12-form-z2b"),
            hasZ3: testids.includes("csdl-bieu-12-form-z3"),
            hasRoad: testids.includes("csdl-bieu-12-field-road"),
            hasOleander: testids.includes("csdl-bieu-12-field-oleanderClumps"),
            hasNgau: testids.includes("csdl-bieu-12-field-ngauClumps"),
            hasPalm: testids.includes("csdl-bieu-12-field-palmClumps"),
            hasOther: testids.includes("csdl-bieu-12-field-otherClumps"),
            hasGrass: testids.includes("csdl-bieu-12-field-grassAreaM2"),
            hasSave: testids.includes("csdl-bieu-12-btn-save"),
            dataFormCols: cols,
            hasCxCodeHint:
              /CX-/i.test(body) || testids.includes("csdl-bieu-12-field-code"),
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
        httpStatus: status,
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
    "playwright channel=chrome headless · contract fallback after yarn e2e-qa hang (GAP-QA-E2E-PW-01)",
  feature: "csdl-bieu-12",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
// Keep durable copy AFTER e2e-qa overwrite risk — write self last
writeFileSync(join(outDir, "_capture.mjs"), readFileSync(new URL(import.meta.url)), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
