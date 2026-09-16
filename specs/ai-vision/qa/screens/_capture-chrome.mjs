/**
 * QA E2E capture — ai-vision (GAP-QA-E2E-PW-01 fallback).
 * Prefer yarn e2e-qa; playwright resolve fail → channel=chrome.
 * cấm taskkill/Stop-Process rộng node|yarn · giữ :9301.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium } = require("D:/AI-Extension/AI-AutoCode/node_modules/playwright");

const outDir = "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\ai-vision\\qa\\screens";
mkdirSync(outDir, { recursive: true });

const packetUrl = "http://localhost:9301/ai-vision";
const rootUrl = "http://localhost:9301/";
const listUrl = "http://localhost:9301/ai-kd";
const listSel = '[data-testid="rmms-ai-vision-list-page"]';
const detectSel = '[data-testid="rmms-ai-vision-list-detect-zone"]';
const attachSel = '[data-testid="rmms-ai-vision-list-field-attachFrame"]';
const runDetectSel = '[data-testid="rmms-ai-vision-list-btn-runDetect"]';

const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

function sha16(buf) {
  return createHash("sha256").update(buf).digest("hex").slice(0, 16);
}

const browser = await chromium.launch({
  headless: true,
  channel: "chrome",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

async function capture(step) {
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
    if (step.waitMs) await new Promise((r) => setTimeout(r, step.waitMs));
    if (step.clickText) {
      const loc = page.getByText(step.clickText, { exact: false }).first();
      if (await loc.count()) {
        await loc.click({ timeout: 10000 }).catch(() => {});
        await new Promise((r) => setTimeout(r, 1200));
      }
    }
    if (step.selector) {
      await page.waitForSelector(step.selector, { timeout: step.timeout || 25000 });
    }
    if (step.also) {
      await page.waitForSelector(step.also, { timeout: 15000 });
    }
    await new Promise((r) => setTimeout(r, 1000));
    const buf = await page.screenshot({ path: abs, fullPage: true });
    const title = await page.title();
    const bodyText = (await page.locator("body").innerText().catch(() => "")).slice(0, 400);
    const testids = await page.evaluate(() =>
      Array.from(document.querySelectorAll("[data-testid]"))
        .map((el) => el.getAttribute("data-testid"))
        .filter(Boolean)
        .slice(0, 40),
    );
    results.push({
      id: step.id,
      result: "PASS",
      screenshot: file,
      sha16: sha16(buf),
      http: status,
      title,
      testids,
      note: step.note,
      bodyPreview: bodyText.replace(/\s+/g, " ").trim(),
    });
  } catch (err) {
    try {
      const buf = await page.screenshot({ path: abs, fullPage: true });
      results.push({
        id: step.id,
        result: "FAIL",
        screenshot: file,
        sha16: sha16(buf),
        error: err instanceof Error ? err.message : String(err),
        note: step.note,
      });
    } catch {
      results.push({
        id: step.id,
        result: "FAIL",
        screenshot: file,
        error: err instanceof Error ? err.message : String(err),
        note: step.note,
      });
    }
  }
}

try {
  // Packet gate — mfeStdUrl
  await capture({
    id: "S0",
    url: packetUrl,
    selector: listSel,
    note: "packet mfeStdUrl /ai-vision · list page testid",
  });
  await capture({
    id: "S1",
    url: packetUrl,
    selector: listSel,
    also: detectSel,
    note: "list shell Zone A detect + grid on mfeStdUrl",
  });
  await capture({
    id: "QA-20",
    url: packetUrl,
    selector: attachSel,
    also: runDetectSel,
    note: "Upload+detect controls on mfeStdUrl",
  });

  // Diagnostic — root SPA then list (webpack deep-link 404)
  await capture({
    id: "S0-root",
    url: rootUrl,
    waitMs: 2000,
    note: "standalone root · MemoryRouter redirect",
  });
  await capture({
    id: "S0-vn",
    url: listUrl,
    selector: listSel,
    timeout: 12000,
    note: "VN route /ai-kd deep-link probe",
  });
  // Navigate in-app from root via sidebar label if deep-link 404
  await page.goto(rootUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2000));
  const navHit = page.locator("text=/phát hiện|Phát hiện|AI Vision|ai-kd/i").first();
  if (await navHit.count()) {
    await navHit.click().catch(() => {});
    await new Promise((r) => setTimeout(r, 1500));
  }
  // Force memory path via evaluate if sidebar miss
  await page.evaluate(() => {
    window.dispatchEvent(
      new CustomEvent("linm:nav:force-path", { detail: { path: "/ai-kd", exact: true } }),
    );
  }).catch(() => {});
  await new Promise((r) => setTimeout(r, 800));
  // Standalone MemoryRouter does not sync from window — click known sidebar entry
  const side = page.locator('[href="/ai-kd"], a:has-text("Phát hiện"), button:has-text("Phát hiện")').first();
  if (await side.count()) {
    await side.click().catch(() => {});
    await new Promise((r) => setTimeout(r, 1500));
  }
  try {
    await page.waitForSelector(listSel, { timeout: 8000 });
    const file = shotName("S1-vn");
    const abs = join(outDir, file);
    const buf = await page.screenshot({ path: abs, fullPage: true });
    const hasDetect = (await page.locator(detectSel).count()) > 0;
    const hasAttach = (await page.locator(attachSel).count()) > 0;
    results.push({
      id: "S1-vn",
      result: hasDetect && hasAttach ? "PASS" : "FAIL",
      screenshot: file,
      sha16: sha16(buf),
      note: "in-app nav to /ai-kd · Zone A upload/detect",
      hasDetect,
      hasAttach,
      error: hasDetect && hasAttach ? undefined : "missing detect/upload zone",
    });
  } catch (err) {
    const file = shotName("S1-vn");
    const abs = join(outDir, file);
    try {
      await page.screenshot({ path: abs, fullPage: true });
    } catch { /* ignore */ }
    results.push({
      id: "S1-vn",
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      note: "in-app nav to /ai-kd",
    });
  }
} finally {
  await browser.close();
}

const packetIds = new Set(["S0", "S1", "QA-20"]);
const packetSteps = results.filter((s) => packetIds.has(s.id));
const manifest = {
  url: packetUrl,
  method: "chrome-channel fallback · yarn e2e-qa playwright ERR_MODULE_NOT_FOUND",
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: packetSteps.every((s) => s.result === "PASS") && packetSteps.length === 3,
  gaps: ["GAP-QA-E2E-PW-01"],
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify(manifest, null, 2));
if (!manifest.ok) process.exit(1);
