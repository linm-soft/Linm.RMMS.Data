/**
 * EMS_POST QA capture — headless fallback (GAP-QA-E2E-02 hung headed login)
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const outDir = "D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ems-post/qa/screens";
const testid = "rmms-so-ts-ems-post-list";
const exe =
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
  process.env.LOCALAPPDATA + "/ms-playwright/chromium-1187/chrome-win/chrome.exe";

mkdirSync(outDir, { recursive: true });

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

function sha256_16(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex").slice(0, 16);
}

const steps = [
  {
    id: "S0",
    url: "http://localhost:9301/so-ts?type=EMS_POST",
    selector: `[data-testid="${testid}"]`,
    note: "list EMS_POST profile + filter bar",
  },
  {
    id: "S1",
    url: "http://localhost:9301/so-ts-ems-post",
    selector: `[data-testid="${testid}"]`,
    note: "alias /so-ts-ems-post → type=EMS_POST",
  },
  {
    id: "QA-20",
    url: "http://localhost:9301/so-ts/tao-moi?type=EMS_POST",
    selector: '[data-testid="asset-ems-post-attr"],[data-testid="asset-form-z2"]',
    note: "Create form · S-ATTR ems · kmTo ẩn",
  },
];

const results = [];
const browser = await chromium.launch({
  headless: true,
  executablePath: existsSync(exe) ? exe : undefined,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  for (const step of steps) {
    const file = shotName(step.id);
    const abs = join(outDir, file);
    try {
      const res = await page.goto(step.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForSelector(step.selector, { timeout: 25000 });
      await page.waitForTimeout(1200);
      await page.screenshot({ path: abs, fullPage: true });
      results.push({
        id: step.id,
        result: "PASS",
        screenshot: file,
        sha256_16: sha256_16(abs),
        url: step.url,
        httpStatus: res?.status(),
        note: step.note,
      });
    } catch (err) {
      try {
        await page.screenshot({ path: abs, fullPage: true });
      } catch { /* ignore */ }
      results.push({
        id: step.id,
        result: "FAIL",
        screenshot: file,
        url: step.url,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
} finally {
  await browser.close();
}

const manifest = {
  url: steps[0].url,
  aliasUrl: steps[1].url,
  formUrl: steps[2].url,
  method: "e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + headless capture fallback (GAP-QA-E2E-02 headed hang)",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
  testid,
  formSelector: "asset-ems-post-attr",
  note: "GAP-QA-E2E-02: yarn e2e-qa headed hung at login :9100 — fallback headless direct std :9301",
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
