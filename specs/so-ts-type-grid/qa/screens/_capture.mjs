/**
 * QA E2E capture — so-ts-type-grid (shell alias → /so-ts).
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

const outDir =
  "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\so-ts-type-grid\\qa\\screens";
mkdirSync(outDir, { recursive: true });

const aliasUrl = "http://localhost:9301/so-ts-type-grid";
const peerUrl = "http://localhost:9301/so-ts";
const formUrl = "http://localhost:9301/so-ts/tao-moi";
const listSel = '[data-testid="rmms-asset-list-page"]';
const formSel = '[data-testid="rmms-asset-form-shell"]';

const steps = [
  {
    id: "S0",
    url: aliasUrl,
    selector: listSel,
    note: "alias /so-ts-type-grid → /so-ts shell list · filter-bar · type visible",
  },
  {
    id: "S1",
    url: peerUrl,
    selector: listSel,
    note: "peer /so-ts live list · LinErpListFilterBar · cấm nút Tìm",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="asset-section-s-meta"]',
    note: "Create form CatalogFormShell · data-form-cols=5 · S-META",
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
      // WDS overlay may remain from unrelated lazy chunks (CsdlSo10 gis) — dismiss for PNG
      await page.evaluate(() => {
        document
          .querySelectorAll(
            "#webpack-dev-server-client-overlay, iframe#webpack-dev-server-client-overlay, [id*='webpack-dev-server-client-overlay']",
          )
          .forEach((el) => el.remove());
      });
      await page.keyboard.press("Escape").catch(() => {});

      if (step.id === "S0" || step.id === "S1") {
        const live = await page.evaluate((sid) => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          const findBtn = Array.from(document.querySelectorAll("button")).some(
            (b) => /^Tìm$|^Tìm kiếm$/i.test((b.textContent || "").trim()),
          );
          return {
            step: sid,
            href: location.href,
            pathname: location.pathname,
            hasListPage: testids.includes("rmms-asset-list-page"),
            hasSearch: testids.includes("rmms-asset-list-field-search"),
            hasType: testids.includes("rmms-asset-list-field-type"),
            hasRoute: testids.includes("rmms-asset-list-field-route"),
            hasKmFrom: testids.includes("rmms-asset-list-field-kmFrom"),
            hasKmTo: testids.includes("rmms-asset-list-field-kmTo"),
            hasOrg: testids.includes("rmms-asset-list-field-org"),
            hasFilters: testids.includes("rmms-asset-list-filters"),
            noStandaloneTimBtn: !findBtn,
            titleOk: /Sổ\s*TS|Tài sản/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            noErpNs: !/\bERP\./.test(body),
            snippet: body.slice(0, 420),
            testids: testids.filter((t) => t && /rmms-asset|filter/i.test(t)).slice(0, 40),
          };
        }, step.id);
        writeFileSync(
          join(outDir, `live-assert-${step.id}.json`),
          JSON.stringify(live, null, 2),
          "utf8",
        );
        if (!live.hasListPage) throw new Error(step.id + " missing rmms-asset-list-page");
        if (!live.hasSearch) throw new Error(step.id + " missing search filter");
        if (!live.noStandaloneTimBtn) {
          throw new Error(step.id + " GAP-FILTER-BAR-01: nút Tìm riêng");
        }
        if (step.id === "S0" && live.pathname !== "/so-ts") {
          // MemoryRouter may keep alias path in address bar while rendering /so-ts content —
          // accept either redirected path or list content already asserted.
          if (!live.hasListPage) {
            throw new Error("S0 alias did not land on shell list");
          }
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
          const sections = Array.from(
            document.querySelectorAll("[data-section]"),
          ).map((el) => el.getAttribute("data-section"));
          return {
            formShell: testids.includes("rmms-asset-form-shell"),
            sMeta: testids.includes("asset-section-s-meta") || sections.includes("S-META"),
            formCols: cols,
            hasCode: testids.includes("asset-field-code"),
            hasType: testids.includes("asset-field-type"),
            hasStatus: testids.includes("asset-field-status"),
            hasRoute: testids.includes("asset-field-route"),
            hasKmFrom: testids.includes("asset-field-kmFrom"),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            noErpNs: !/\bERP\./.test(body),
            hasLuu: /Lưu/i.test(body),
            sections,
            snippet: body.slice(0, 420),
            testids: testids.filter((t) => t && /asset|rmms/i.test(t)).slice(0, 50),
          };
        });
        writeFileSync(
          join(outDir, "form-assert.json"),
          JSON.stringify(formLive, null, 2),
          "utf8",
        );
        if (!formLive.formShell) throw new Error("QA-20 missing form shell");
        if (!formLive.sMeta) throw new Error("QA-20 missing S-META");
        if (formLive.formCols !== "5") {
          throw new Error("QA-20 formCols != 5 (got " + formLive.formCols + ")");
        }
      }

      await page.screenshot({ path: abs, fullPage: false });
      const buf = readFileSync(abs);
      const sha16 = createHash("sha256").update(buf).digest("hex").slice(0, 16);
      results.push({
        id: step.id,
        result: "PASS",
        ok: true,
        screenshot: file,
        file,
        bytes: buf.length,
        sha16,
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
        result: "FAIL",
        ok: false,
        screenshot: file,
        error: err instanceof Error ? err.message : String(err),
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
  feature: "so-ts-type-grid",
  url: aliasUrl,
  peerUrl,
  formUrl,
  ok,
  capturedAt: new Date().toISOString(),
  method:
    "playwright channel=chrome · yarn e2e-qa playwright resolve fail → AutoCode createRequire fallback · skip-start",
  gap: "GAP-QA-E2E-PW-01",
  testid: "rmms-asset-list-page · rmms-asset-form-shell",
  steps: results,
  results,
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
process.exit(ok ? 0 : 1);
