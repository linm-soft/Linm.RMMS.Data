/**
 * QA E2E capture — edit_page T-XLS-S07 · GAP-QA-E2E-PW-01 fallback.
 * yarn e2e-qa playwright resolve fail từ screens cwd · channel=chrome createRequire AutoCode.
 * std + docker already listen · skip-start · cấm kill worker rộng (GAP-QA-E2E-KILL-01).
 */
import { writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-07\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-07";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences";
const formUrl = "http://localhost:9301/csdl-bieu-07?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-07-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-07-form-slideout"]';
const exportSel = '[data-testid="rmms-csdl-bieu-07-list-export-excel-btn"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    also: exportSel,
    note: "list Biểu 07 · toolbar Xuất Excel · filter-bar · 0 Xuất trên filter",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: listSel,
    note: "hub deep-link ?resource=shoulders-fences → Biểu 07 list",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-07-form-z2"]',
    note: "Create Slideout KEEP · form=create · 3 section",
  },
];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

function sha16(buf) {
  return createHash("sha256").update(buf).digest("hex").slice(0, 16);
}

const results = [];
const browser = await chromium.launch({ headless: true, channel: "chrome" });
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

      if (step.id === "S0") {
        const live = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          const filter = document.querySelector(
            '[data-testid="rmms-csdl-bieu-07-list-filters"]',
          );
          const filterXuat = filter
            ? /Xuất Excel/i.test(filter.innerText || "") ||
              Boolean(
                filter.querySelector(
                  '[data-testid="rmms-csdl-bieu-07-list-export-excel-btn"]',
                ),
              )
            : false;
          return {
            hasTitle: /Biểu 07|Lề|taluy|hàng rào/i.test(body),
            hasExport: testids.includes(
              "rmms-csdl-bieu-07-list-export-excel-btn",
            ),
            hasImport: testids.includes(
              "rmms-csdl-bieu-07-list-import-excel-btn",
            ),
            filterBarHasNoExport: !filterXuat,
            hasPeer: testids.some((t) => t && t.includes("peer-sots")),
            hasFilter:
              testids.includes("rmms-csdl-bieu-07-list-filters") ||
              /Tìm/i.test(body),
            noDemo: !/demo\/stub|localStorage SSOT/i.test(body),
            noModeBadge: !/\bCREATE\b|\bEDIT\b|\bVIEW\b/.test(body),
            testids: testids.filter(Boolean).slice(0, 50),
          };
        });
        writeFileSync(
          join(outDir, "live-assert.json"),
          JSON.stringify(
            { url: listUrl, changeScope: "edit_page", ...live },
            null,
            2,
          ),
          "utf8",
        );
      }

      if (step.id === "QA-20") {
        const formAssert = await page.evaluate(() => {
          const z2 = document.querySelector(
            '[data-testid="csdl-bieu-07-form-z2"]',
          );
          const body = document.body?.innerText || "";
          return {
            hasZ2: Boolean(z2),
            hasSave: /Lưu/i.test(body),
            hasLE: /LE-/i.test(body) || Boolean(
              document.querySelector('[data-testid="csdl-bieu-07-field-code"]'),
            ),
            sections: (body.match(/Lề|Taluy|Hàng rào/gi) || []).length >= 2,
          };
        });
        writeFileSync(
          join(outDir, "form-assert.json"),
          JSON.stringify(formAssert, null, 2),
          "utf8",
        );
      }

      await page.screenshot({ path: abs, fullPage: true });
      const { readFileSync } = await import("node:fs");
      const buf = readFileSync(abs);
      results.push({
        id: step.id,
        result: "PASS",
        screenshot: file,
        sha256_16: sha16(buf),
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
        note: step.note,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
} finally {
  await browser.close();
}

const manifest = {
  url: "http://localhost:9301/so-ts/csdl-so-sach",
  method:
    "playwright channel=chrome headless · GAP-QA-E2E-PW-01 fallback after yarn e2e-qa playwright resolve fail",
  feature: "csdl-bieu-07",
  changeScope: "edit_page",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
