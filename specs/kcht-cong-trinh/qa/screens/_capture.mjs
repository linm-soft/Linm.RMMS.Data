import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const cfg = {"url":"http://localhost:9312/kcht-cong-trinh","outDir":"D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\kcht-cong-trinh\\qa\\screens","pagesWait":null,"testid":"kcht-project-list-page","steps":[{"id":"S0","action":"goto","selector":"[data-testid=\"kcht-project-list-page\"]"},{"id":"S1","action":"goto"},{"id":"QA-20","action":"goto"}]};
const results = [];

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
try {
  if (cfg.pagesWait) {
    const origin = new URL(cfg.url).origin;
    const deadline = Date.now() + 120000;
    let switched = false;
    let last = "";
    while (Date.now() < deadline) {
      const json = await page.evaluate(async (u) => {
        const r = await fetch(u, { cache: "no-store" });
        if (!r.ok) return null;
        return r.json();
      }, origin + "/_manifest.json?t=" + Date.now());
      const map = json && (json.microfrontends || json.microfrontends);
      const entry = map && map[cfg.pagesWait.mfeKey];
      last = entry ? ((entry.version || "") + " " + (entry.url || "")) : "missing";
      if (entry
        && (!cfg.pagesWait.expectVersion || entry.version === cfg.pagesWait.expectVersion)
        && (!cfg.pagesWait.expectUrl || entry.url === cfg.pagesWait.expectUrl)) {
        switched = true;
        break;
      }
      await new Promise((x) => setTimeout(x, 1500));
    }
    if (!switched) throw new Error("GAP-QA-PAGES-01 manifest not switched: " + last);
  }
  for (const step of cfg.steps) {
    const file = shotName(step.id);
    const abs = join(cfg.outDir, file);
    try {
      if (step.action === "goto") {
        const res = await page.goto(cfg.url, { waitUntil: "domcontentloaded", timeout: 60000 });
        if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
        if (step.selector) {
          await page.waitForSelector(step.selector, { timeout: 20000 });
        }
        await new Promise((r) => setTimeout(r, 800));
      } else if (step.action === "click") {
        const loc = step.selector
          ? page.locator(step.selector).first()
          : page.getByRole("button", { name: step.text || "Xem" }).first();
        if (await loc.count()) {
          await loc.click({ timeout: 15000 });
          await new Promise((r) => setTimeout(r, 1200));
        }
      } else if (step.action === "assertText") {
        const needle = step.text || "";
        const body = await page.locator("body").innerText();
        if (needle && !body.includes(needle)) throw new Error("missing text: " + needle);
      }
      await page.screenshot({ path: abs, fullPage: true });
      results.push({ id: step.id, result: "PASS", screenshot: file });
    } catch (err) {
      try { await page.screenshot({ path: abs, fullPage: true }); } catch { /* ignore */ }
      results.push({
        id: step.id,
        result: "FAIL",
        screenshot: file,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
} finally {
  await browser.close();
}
writeFileSync(join(cfg.outDir, "manifest.json"), JSON.stringify({
  url: cfg.url,
  capturedAt: new Date().toISOString(),
  steps: results,
  ok: results.every((s) => s.result === "PASS"),
}, null, 2), "utf8");
if (results.some((s) => s.result === "FAIL")) process.exit(1);
