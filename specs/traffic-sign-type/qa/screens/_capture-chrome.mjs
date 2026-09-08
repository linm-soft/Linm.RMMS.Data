/**
 * QA E2E capture — yarn e2e-qa hang @ playwright install (dirlock).
 * Fallback: Playwright channel=chrome. cấm kill worker rộng (GAP-QA-E2E-KILL-01).
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";
const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("D:/AI-Extension/AI-AutoCode/node_modules/playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\traffic-sign-type\\qa\\screens";
mkdirSync(outDir, { recursive: true });
const listUrl = "http://localhost:9318/mas/loai-bien-bao";
const filterUrl = "http://localhost:9318/mas/loai-bien-bao?groupCode=P";
const formUrl = "http://localhost:9318/mas/loai-bien-bao?form=create";
const listSel = '[data-testid="rmms-traffic-sign-type-list"]';
const formSel = '[data-testid="rmms-traffic-sign-type-form-slideout"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list Loại biển báo · filter-bar search+groupCode · grid/empty",
  },
  {
    id: "S1",
    url: filterUrl,
    selector: listSel,
    note: "filter groupCode=P · list still mounted",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="rmms-traffic-sign-type-form"]',
    note: "Create Slideout · form=create · data-form-cols=2 · footer Lưu",
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
            hasTitle: /Loại biển báo|biển báo|QCVN/i.test(body),
            hasFilterSearch: testids.some((t) => t && /field-search/i.test(t)),
            hasFilterGroup: testids.some((t) => t && /field-groupCode|groupCode/i.test(t)),
            noDemo: !/demo|stub|placeholder only|Cổng người dân/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            emptyOrGrid:
              testids.includes("rmms-traffic-sign-type-list-empty") ||
              testids.some((t) => t && /grid|table|empty/i.test(t)) ||
              /Chưa có/i.test(body) ||
              body.length > 80,
            testids,
            titleSnippet: body.slice(0, 400),
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
            hasForm: testids.includes("rmms-traffic-sign-type-form"),
            hasSlideout: testids.includes("rmms-traffic-sign-type-form-slideout"),
            hasCode: testids.includes("rmms-traffic-sign-type-form-code"),
            hasGroup: testids.includes("rmms-traffic-sign-type-form-group"),
            hasName: testids.includes("rmms-traffic-sign-type-form-name"),
            hasNameEn: testids.includes("rmms-traffic-sign-type-form-name-en"),
            hasShape: testids.includes("rmms-traffic-sign-type-form-shape"),
            hasWidth: testids.includes("rmms-traffic-sign-type-form-width"),
            hasHeight: testids.includes("rmms-traffic-sign-type-form-height"),
            hasIcon: testids.includes("rmms-traffic-sign-type-form-icon"),
            hasActive: testids.includes("rmms-traffic-sign-type-form-active"),
            hasSave: testids.includes("rmms-traffic-sign-type-form-save"),
            hasCancel: testids.includes("rmms-traffic-sign-type-form-cancel"),
            formCols: cols,
            hasLuu: /Lưu/i.test(body),
            hasHuy: /Hủy|Huỷ/i.test(body),
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
  feature: "traffic-sign-type",
  url: listUrl,
  ok,
  capturedAt: new Date().toISOString(),
  method: "playwright-channel-chrome",
  note: "yarn e2e-qa hung on playwright install chromium (dirlock) · GAP-QA-E2E-02 mitigated by channel=chrome · no broad kill",
  cases: ["S0", "S1", "QA-20"],
  results,
  steps: results,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(ok ? "MANIFEST_OK" : "MANIFEST_FAIL", results.map((r) => r.id + "=" + r.result).join(" "));
process.exit(ok ? 0 : 1);
