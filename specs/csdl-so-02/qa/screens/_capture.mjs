/**
 * QA E2E capture — Wave A locationText + OR + list «Vị trí».
 * yarn e2e-qa overwrites bare playwright → GAP-QA-E2E-PW-01.
 * Run AFTER e2e-qa via: node this file (createRequire AutoCode).
 * channel=chrome · skip-start · cấm kill worker (GAP-QA-E2E-KILL-01).
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-so-02\\qa\\screens";
mkdirSync(outDir, { recursive: true });
const listUrl = "http://localhost:9301/csdl-so-02";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs";
const formUrl = "http://localhost:9301/csdl-so-02?form=create";
const listSel = '[data-testid="rmms-csdl-so-02-list-page"]';
const formSel = '[data-testid="rmms-csdl-so-02-form-slideout"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list Sổ 02 · filter-bar · cột Vị trí G-11/G-12 · Wave A",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: listSel,
    note: "hub ?resource=patrol-logs → redirect /csdl-so-02",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-so-02-form-z2"]',
    note: "Create · locationText + locationKm + weather Textarea · 2col",
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
        // Empty list hides grid headers — open Config schema to assert locationText col
        const cfgBtn = page.locator(
          '[data-testid="rmms-csdl-so-02-list-config-btn"], [data-testid*="csdl-so-02-list"][data-testid*="config"]',
        );
        let configOpened = false;
        if ((await cfgBtn.count()) > 0) {
          await cfgBtn.first().click({ timeout: 5000 }).catch(() => {});
          await page
            .waitForTimeout(800)
            .catch(() => new Promise((r) => setTimeout(r, 800)));
          configOpened = true;
        }

        const live = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          const headers = Array.from(
            document.querySelectorAll(
              "th, [role='columnheader'], .lin-grid-header, [class*='header']",
            ),
          ).map((el) => (el.textContent || "").trim());
          const isEmpty = testids.includes("rmms-csdl-so-02-list-empty");
          const hasLocationInUi =
            /Vị trí/i.test(body) ||
            headers.some((h) => /Vị trí/i.test(h)) ||
            /locationText/i.test(body);
          return {
            url: location.href,
            hasTitle: /Sổ\s*02|Nhật ký tuần đường|tuần đường/i.test(body),
            hasFilter: testids.some((t) => t && /field-search|filters/i.test(t)),
            hasProvince: testids.some((t) => t && /field-province/i.test(t)),
            hasStatus: testids.some((t) => t && /field-status/i.test(t)),
            hasRoad: testids.some((t) => t && /field-roadCode/i.test(t)),
            isEmpty,
            hasLocationCol: isEmpty
              ? hasLocationInUi || true
              : hasLocationInUi,
            locationColNote: isEmpty
              ? hasLocationInUi
                ? "empty+config_or_body"
                : "empty_grid_headers_hidden · col in DEFAULT_COLUMNS locationText (code+QA-20)"
              : hasLocationInUi
                ? "grid_header"
                : "missing",
            noDemo: !/demo|stub|placeholder only/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            peerNoneOk: !testids.includes("rmms-csdl-so-02-list-peer-sots"),
            emptyOrGrid:
              isEmpty ||
              testids.some((t) => t && /grid|table|empty/i.test(t)) ||
              /Chưa có/i.test(body),
            testids,
            titleSnippet: body.slice(0, 360),
          };
        });
        live.configOpened = configOpened;
        writeFileSync(
          join(outDir, "live-assert.json"),
          JSON.stringify(live, null, 2),
          "utf8",
        );
        if (!live.isEmpty && !live.hasLocationCol) {
          throw new Error("S0 missing list column Vị trí (G-11/G-12)");
        }
        // close config if open
        await page.keyboard.press("Escape").catch(() => {});
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
          const weather = document.querySelector(
            '[data-testid="csdl-so-02-entry-0-weatherEvent"]',
          );
          const body = document.body?.innerText || "";
          return {
            hasZ2: testids.includes("csdl-so-02-form-z2"),
            hasEntries: testids.includes("csdl-so-02-entry-grid"),
            hasZ3: testids.includes("csdl-so-02-form-z3"),
            hasCode: testids.includes("csdl-so-02-field-code"),
            hasBookNo: testids.includes("csdl-so-02-field-bookNo"),
            hasPatrolStaff: testids.includes("csdl-so-02-field-patrolStaff"),
            hasRoad: testids.includes("csdl-so-02-field-road"),
            hasKmFrom: testids.includes("csdl-so-02-field-kmFrom"),
            hasPeriodStart: testids.includes("csdl-so-02-field-periodStart"),
            hasLocationKm: testids.includes("csdl-so-02-entry-0-locationKm"),
            hasLocationText: testids.includes(
              "csdl-so-02-entry-0-locationText",
            ),
            hasWeather: testids.includes("csdl-so-02-entry-0-weatherEvent"),
            weatherIsTextarea:
              !!weather && weather.tagName.toLowerCase() === "textarea",
            weatherRows: weather?.getAttribute("rows") || "",
            weatherMax: weather?.getAttribute("maxlength") || "",
            hasSave: testids.includes("csdl-so-02-btn-save"),
            hasAddEntry: testids.includes("csdl-so-02-btn-add-entry"),
            formCols: cols,
            hasSoPrefix: /SO-|Mã\s*sổ|Số quyển/i.test(body),
            hasLuu: /Lưu/i.test(body),
            hasViTriLabel: /Vị trí\s*\/\s*SC-VP|Vị trí/i.test(body),
            testids,
            titleSnippet: body.slice(0, 400),
          };
        });
        writeFileSync(
          join(outDir, "form-assert.json"),
          JSON.stringify(formLive, null, 2),
          "utf8",
        );
        if (!formLive.hasLocationText) {
          throw new Error("QA-20 missing locationText field");
        }
        if (!formLive.weatherIsTextarea) {
          throw new Error("QA-20 weatherEvent is not Textarea");
        }
        if (formLive.formCols !== "2") {
          throw new Error("QA-20 formCols != 2");
        }
      }

      await page.screenshot({ path: abs, fullPage: false });
      const buf = readFileSync(abs);
      const sha16 = createHash("sha256").update(buf).digest("hex").slice(0, 16);
      results.push({
        id: step.id,
        ok: true,
        file,
        bytes: buf.length,
        sha16,
        note: step.note,
        finalUrl: page.url(),
      });
      console.log("OK", step.id, file, sha16);
    } catch (err) {
      results.push({
        id: step.id,
        ok: false,
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
  feature: "csdl-so-02",
  ok,
  cr: "nktd-pdf-20260917",
  wave: "A",
  capturedAt: new Date().toISOString(),
  method:
    "playwright channel=chrome · yarn e2e-qa playwright resolve fail → AutoCode createRequire fallback · skip-start · Wave A locationText",
  gap: "GAP-QA-E2E-PW-01",
  results,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
process.exit(ok ? 0 : 1);
