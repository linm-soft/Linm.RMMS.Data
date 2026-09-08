/**
 * QA E2E capture — yarn e2e-qa contract (GAP-QA-E2E-PW-01 fallback).
 * `yarn e2e-qa` hung after e2e.local.json login · use channel=chrome (system Chrome).
 * std + docker already listen · skip-start semantics · cấm kill worker.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const pw = await import(
  pathToFileURL(
    "D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.mjs",
  ).href,
);
const { chromium } = pw;
const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\csdl-bieu-03\\qa\\screens";
const listUrl = "http://localhost:9301/csdl-bieu-03";
const hubUrl = "http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels";
const formUrl = "http://localhost:9301/csdl-bieu-03?form=create";
const listSel = '[data-testid="rmms-csdl-bieu-03-list-page"]';
const formSel = '[data-testid="rmms-csdl-bieu-03-form-slideout"]';
const hubListSel = '[data-testid="rmms-csdl-so-sach-list-page"]';

const steps = [
  {
    id: "S0",
    url: listUrl,
    selector: listSel,
    note: "list Biểu 03 · filter-bar · empty/grid · peer Sổ TS",
  },
  {
    id: "S1",
    url: hubUrl,
    selector: hubListSel,
    note: "hub deep-link ?resource=road-tunnels → list",
  },
  {
    id: "QA-20",
    url: formUrl,
    selector: formSel,
    also: '[data-testid="csdl-bieu-03-form-z2"]',
    note: "Create Slideout · form=create · GPS×6 · TN-",
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

      if (step.id === "S0") {
        const live = await page.evaluate(() => {
          const testids = Array.from(
            document.querySelectorAll("[data-testid]"),
          ).map((el) => el.getAttribute("data-testid"));
          const body = document.body?.innerText || "";
          return {
            url: location.href,
            hasTitle: /Biểu\s*03|Hầm đường bộ|hầm/i.test(body),
            hasFilter: testids.some((t) => t && /field-search|filters/i.test(t)),
            hasTunnelClass: testids.some((t) => t && /tunnelClass/i.test(t)),
            hasTubeCount: testids.some((t) => t && /tubeCount/i.test(t)),
            hasKmFrom: testids.some((t) => t && /kmFrom/i.test(t)),
            noDemo: !/demo|stub|placeholder only/i.test(body),
            noModeBadge: !/\b(CREATE|EDIT|VIEW)\b/.test(body),
            testids,
            titleSnippet: body.slice(0, 360),
            peerSots: testids.includes("rmms-csdl-bieu-03-list-peer-sots"),
          };
        });
        writeFileSync(
          join(outDir, "live-assert.json"),
          JSON.stringify(live, null, 2),
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
  feature: "csdl-bieu-03",
  cases: ["S0", "S1", "QA-20"],
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
