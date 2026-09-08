/**
 * QA E2E capture — yarn e2e-qa contract (GAP-QA-E2E-PW-01 fallback).
 * Prefer yarn e2e-qa; if hang @ login/chromium install → channel=chrome system Chrome.
 * std + docker already listen · skip-start · cấm kill worker rộng.
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";
const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-so-06\\qa\\screens";
mkdirSync(outDir, { recursive: true });
const listUrl = "http://localhost:9301/csdl-so-06";
const hubUrl =
  "http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections";
const formUrl = "http://localhost:9301/csdl-so-06?form=create";
const listSel = '[data-testid="rmms-csdl-so-06-list-page"]';
const formSel = '[data-testid="rmms-csdl-so-06-form-slideout"]';
const hubRedirectSel = '[data-testid="rmms-csdl-so-06-list-page"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list Sổ 06 · filter-bar · province/status/road/bridge/period · empty/grid",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubRedirectSel,
    note: "hub ?resource=bridge-inspections → redirect /csdl-so-06",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-so-06-form-z2"]',
    note: "Create Slideout · form=create · Z2 header · fixed-20 entries · SO-",
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
            hasTitle: /Sổ\s*06|QL cầu|phiếu KT|cầu/i.test(body),
            hasFilter: testids.some((t) => t && /field-search|filters/i.test(t)),
            hasProvince: testids.some((t) => t && /field-province/i.test(t)),
            hasStatus: testids.some((t) => t && /field-status/i.test(t)),
            hasRoad: testids.some((t) => t && /field-roadCode/i.test(t)),
            hasBridge: testids.some((t) => t && /field-bridgeId|bridge-id/i.test(t)),
            noDemo: !/demo|stub|placeholder only/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            peerSots: testids.includes("rmms-csdl-so-06-list-peer-sots"),
            peerNoneOk: !testids.includes("rmms-csdl-so-06-list-peer-sots"),
            emptyOrGrid:
              testids.includes("rmms-csdl-so-06-list-empty") ||
              testids.some((t) => t && /grid|table|empty/i.test(t)) ||
              /Chưa có/i.test(body),
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
          const entryCount = testids.filter(
            (t) => t && /^csdl-so-06-entry-\d+$/.test(t),
          ).length;
          return {
            hasZ2: testids.includes("csdl-so-06-form-z2"),
            hasEntries: testids.includes("csdl-so-06-entry-grid"),
            hasZ3: testids.includes("csdl-so-06-form-z3"),
            hasCode: testids.includes("csdl-so-06-field-code"),
            hasBridgeId: testids.includes("csdl-so-06-field-bridgeId"),
            hasBridgeName: testids.includes("csdl-so-06-field-bridgeName"),
            hasRoad: testids.includes("csdl-so-06-field-road"),
            hasKmStation: testids.includes("csdl-so-06-field-kmStation"),
            hasManageUnit: testids.includes("csdl-so-06-field-manageUnit"),
            hasInspectedAt: testids.includes("csdl-so-06-field-inspectedAt"),
            hasInspector: testids.includes("csdl-so-06-field-inspector"),
            hasSave: testids.includes("csdl-so-06-btn-save"),
            hasAddEntry: testids.includes("csdl-so-06-btn-add-entry"),
            hasEntry0: testids.includes("csdl-so-06-entry-0"),
            hasEntry19: testids.includes("csdl-so-06-entry-19"),
            entryCount,
            hasEntry0PartCode: testids.includes("csdl-so-06-entry-0-partCode"),
            hasEntry0Damage: testids.includes("csdl-so-06-entry-0-damageDesc"),
            hasEntry0Priority: testids.includes("csdl-so-06-entry-0-priority"),
            hasEntry0Photo: testids.includes("csdl-so-06-entry-0-photoIds"),
            formCols: cols,
            hasSoPrefix: /SO-|Mã\s*sổ|Sổ\s*06/i.test(body),
            hasLuu: /Lưu/i.test(body),
            hasFixed20Label: /20 dòng cố định|cố định/i.test(body),
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
  feature: "csdl-so-06",
  url: listUrl,
  ok,
  capturedAt: new Date().toISOString(),
  method: "playwright-channel-chrome",
  gap: "GAP-QA-E2E-PW-01",
  cases: ["S0", "S1", "QA-20"],
  results,
  steps: results,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
writeFileSync(join(outDir, "_capture.mjs"), readFileSync(new URL(import.meta.url)), "utf8");
console.log(JSON.stringify(manifest, null, 2));
process.exit(ok ? 0 : 1);
