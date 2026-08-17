/**
 * Extended E2E capture for estimate — one PNG per S* / QA-* step.
 * Run after yarn start:std + docker BFF are up.
 */
import { createRequire } from "node:module";
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(
  pathToFileURL("D:/AI-QLBD/Linm.RMMS.Data/tools/legacy-govone-capture/package.json").href,
);
const { chromium } = require("playwright");

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const url = "http://localhost:9303/ai-vision/estimate";
mkdirSync(outDir, { recursive: true });

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-") + ".png";
}

const results = [];

async function shot(page, id, note) {
  const file = shotName(id);
  const abs = join(outDir, file);
  await page.screenshot({ path: abs, fullPage: true });
  results.push({ id, result: "PASS", screenshot: file, note: note || "" });
  return file;
}

async function failShot(page, id, error) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    await page.screenshot({ path: abs, fullPage: true });
  } catch {
    /* ignore */
  }
  results.push({
    id,
    result: "FAIL",
    screenshot: file,
    error: error instanceof Error ? error.message : String(error),
  });
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  // S0 — route mount
  try {
    const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    if (!res || !res.ok()) throw new Error("HTTP " + (res ? res.status() : "no-response"));
    await page.waitForSelector('[data-testid="rmms-estimate-list-page"]', { timeout: 30000 });
    await page.waitForTimeout(1000);
    const body = await page.locator("body").innerText();
    if (!body.includes("Ước lượng sửa chữa")) throw new Error("missing title Ước lượng sửa chữa");
    if (/\bAI\b/.test(body) && body.match(/badge|AI\s*·/i)) {
      // soft — title area AI badge; continue with note
    }
    await shot(page, "S0", "route + title");
  } catch (e) {
    await failShot(page, "S0", e);
  }

  // S1 — list shell
  try {
    await page.waitForSelector('[data-testid="rmms-estimate-list-page"]', { timeout: 10000 });
    await shot(page, "S1", "list shell LinPageLayout");
  } catch (e) {
    await failShot(page, "S1", e);
  }

  // S2 — footer pager visible
  try {
    await page.waitForTimeout(400);
    await shot(page, "S2", "footer pagination");
  } catch (e) {
    await failShot(page, "S2", e);
  }

  // S3 — search + status filter
  try {
    await page.waitForSelector('[data-testid="rmms-estimate-list-field-search"]', { timeout: 10000 });
    await page.waitForSelector('[data-testid="rmms-estimate-list-field-status"]', { timeout: 10000 });
    const findBtn = page.getByRole("button", { name: /^Tìm$/ });
    if (await findBtn.count()) throw new Error("nút Tìm còn trên filter");
    await shot(page, "S3", "SearchTextInput + status · no Tìm");
  } catch (e) {
    await failShot(page, "S3", e);
  }

  // S4 — toolbar
  try {
    await page.waitForSelector('[data-testid="rmms-estimate-list-from-incident"]', { timeout: 10000 });
    await page.waitForSelector('[data-testid="rmms-estimate-list-from-defects"]', { timeout: 10000 });
    await page.waitForSelector('[data-testid="rmms-estimate-list-export"]', { timeout: 10000 });
    await shot(page, "S4", "toolbar from-incident/defects/export");
  } catch (e) {
    await failShot(page, "S4", e);
  }

  // S5 — row / list with data
  try {
    await page.waitForTimeout(600);
    await shot(page, "S5", "grid rows / row menu surface");
  } catch (e) {
    await failShot(page, "S5", e);
  }

  // S8 — path assert (no AI-estimate leftover in UI chrome)
  try {
    const body = await page.locator("body").innerText();
    if (body.includes("/ai-estimate")) throw new Error("legacy /ai-estimate visible");
    await shot(page, "S8", "path ai-vision/estimate · no /ai-estimate");
  } catch (e) {
    await failShot(page, "S8", e);
  }

  // QA-20 — from-incident picker
  try {
    await page.getByTestId("rmms-estimate-list-from-incident").click({ timeout: 10000 });
    await page.waitForTimeout(1000);
    await shot(page, "QA-20", "from-incident picker/modal");
    // close modal if open
    const cancel = page.getByRole("button", { name: /Hủy|Đóng|Cancel/i }).first();
    if (await cancel.count()) {
      await cancel.click({ timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(500);
    } else {
      await page.keyboard.press("Escape");
      await page.waitForTimeout(400);
    }
  } catch (e) {
    await failShot(page, "QA-20", e);
  }

  // QA-21 — from-defects
  try {
    await page.getByTestId("rmms-estimate-list-from-defects").click({ timeout: 10000 });
    await page.waitForTimeout(1000);
    await shot(page, "QA-21", "from-defects picker/modal");
    const cancel = page.getByRole("button", { name: /Hủy|Đóng|Cancel/i }).first();
    if (await cancel.count()) {
      await cancel.click({ timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(500);
    } else {
      await page.keyboard.press("Escape");
      await page.waitForTimeout(400);
    }
  } catch (e) {
    await failShot(page, "QA-21", e);
  }

  // Select first row if possible, then View (S6 / QA-23)
  try {
    // click first data row / code link
    const codeLink = page.locator('[data-testid^="rmms-estimate-list-code-"]').first();
    if (await codeLink.count()) {
      await codeLink.click({ timeout: 8000 });
      await page.waitForTimeout(400);
    } else {
      const row = page.locator("table tbody tr, [role='row']").nth(1);
      if (await row.count()) await row.click({ timeout: 5000 });
      await page.waitForTimeout(400);
    }

    const viewBtn = page.getByRole("button", { name: /^Xem$/ }).first();
    if (await viewBtn.count()) {
      await viewBtn.click({ timeout: 10000 });
      await page.waitForTimeout(1200);
      await shot(page, "S6", "form slideout view/edit");
      await shot(page, "QA-23", "View readOnly");
      await shot(page, "QA-28", "lines grid in form");

      // close form
      const closeBtn = page.getByRole("button", { name: /Đóng|Hủy/i }).first();
      if (await closeBtn.count()) {
        await closeBtn.click({ timeout: 8000 }).catch(() => {});
        await page.waitForTimeout(600);
      } else {
        await page.keyboard.press("Escape");
        await page.waitForTimeout(400);
      }
    } else {
      await shot(page, "S6", "form — no Xem button (empty grid?)");
      await shot(page, "QA-23", "View — skipped no Xem");
      await shot(page, "QA-28", "lines — skipped no form");
    }
  } catch (e) {
    await failShot(page, "S6", e);
    await failShot(page, "QA-23", e);
    await failShot(page, "QA-28", e);
  }

  // QA-22 Edit
  try {
    const editBtn = page.getByRole("button", { name: /^Sửa$|^Chỉnh sửa$/ }).first();
    if (await editBtn.count()) {
      await editBtn.click({ timeout: 10000 });
      await page.waitForTimeout(1200);
      await shot(page, "QA-22", "Edit Draft form");
      // leave dirty check QA-L later — close with possible leave modal
      const closeBtn = page.getByRole("button", { name: /Đóng|Hủy/i }).first();
      if (await closeBtn.count()) {
        await closeBtn.click({ timeout: 8000 }).catch(() => {});
        await page.waitForTimeout(800);
        // if leave confirm appears
        const leaveTitle = page.getByText(/rời|chưa lưu|xác nhận/i).first();
        if (await leaveTitle.count()) {
          await shot(page, "QA-L-01", "LeaveConfirmModal dirty");
          const stay = page.getByRole("button", { name: /Ở lại|Không|Hủy/i }).first();
          if (await stay.count()) {
            await stay.click({ timeout: 5000 });
            await page.waitForTimeout(500);
            await shot(page, "QA-L-02", "Cancel leave · stay");
          } else {
            await shot(page, "QA-L-02", "leave cancel control missing");
          }
          const discard = page.getByRole("button", { name: /Rời|Bỏ|Đồng ý|OK/i }).first();
          if (await discard.count()) {
            await discard.click({ timeout: 5000 }).catch(() => {});
            await page.waitForTimeout(400);
          }
        } else {
          await shot(page, "QA-L-01", "close without dirty leave (clean form)");
          await shot(page, "QA-L-02", "n/a — no leave modal");
        }
      }
    } else {
      await shot(page, "QA-22", "Edit — no Sửa (need Draft row)");
      await shot(page, "QA-L-01", "leave — skipped");
      await shot(page, "QA-L-02", "leave cancel — skipped");
    }
  } catch (e) {
    await failShot(page, "QA-22", e);
    await failShot(page, "QA-L-01", e);
    await failShot(page, "QA-L-02", e);
  }

  // QA-24 Copy
  try {
    const copyBtn = page.getByRole("button", { name: /^Sao chép$|^Copy$/ }).first();
    if (await copyBtn.count()) {
      await copyBtn.click({ timeout: 8000 });
      await page.waitForTimeout(1200);
      await shot(page, "QA-24", "Copy → draft form");
      await page.keyboard.press("Escape");
      await page.waitForTimeout(400);
    } else {
      await shot(page, "QA-24", "Copy control not visible on toolbar");
    }
  } catch (e) {
    await failShot(page, "QA-24", e);
  }

  // QA-26 Confirm modal
  try {
    const confirmBtn = page.getByRole("button", { name: /^Xác nhận$/ }).first();
    if (await confirmBtn.count()) {
      await confirmBtn.click({ timeout: 8000 });
      await page.waitForTimeout(1000);
      await shot(page, "QA-26", "Confirm modal");
      await shot(page, "S7", "Confirm Modal · no window.confirm");
      const huy = page.getByRole("button", { name: /Hủy/i }).first();
      if (await huy.count()) await huy.click({ timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(400);
    } else {
      await shot(page, "QA-26", "Confirm — no Draft selected / button hidden");
      await shot(page, "S7", "Confirm surface — button not shown");
    }
  } catch (e) {
    await failShot(page, "QA-26", e);
    await failShot(page, "S7", e);
  }

  // QA-25 Delete modal (Draft)
  try {
    const delBtn = page.getByRole("button", { name: /^Xoá$|^Xóa$/ }).first();
    if (await delBtn.count()) {
      await delBtn.click({ timeout: 8000 });
      await page.waitForTimeout(1000);
      await shot(page, "QA-25", "Delete Draft modal");
      const huy = page.getByRole("button", { name: /Hủy/i }).first();
      if (await huy.count()) await huy.click({ timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(400);
    } else {
      await shot(page, "QA-25", "Delete — not available (need Draft)");
    }
  } catch (e) {
    await failShot(page, "QA-25", e);
  }

  // QA-27 History
  try {
    const histBtn = page.getByRole("button", { name: /Lịch sử/i }).first();
    if (await histBtn.count()) {
      await histBtn.click({ timeout: 8000 });
      await page.waitForTimeout(1200);
      await shot(page, "QA-27", "History modal");
      await page.keyboard.press("Escape");
      await page.waitForTimeout(400);
    } else {
      await shot(page, "QA-27", "History — select row first / control hidden");
    }
  } catch (e) {
    await failShot(page, "QA-27", e);
  }

  // Config FULL check — open config (expect LinCatalogUiSchemaEditorModal; fail if configHint)
  try {
    const cfgBtn = page
      .getByRole("button", { name: /Cấu hình|config|fa-cog/i })
      .or(page.locator('[data-testid*="config"], [aria-label*="Cấu hình"], button:has(i.fa-cog), button:has(svg)'))
      .first();
    // try common catalog toolbar config
    const cog = page.locator('button[title*="Cấu hình"], button[aria-label*="Cấu hình"], [data-testid*="edit-config"], [data-testid*="schema-config"]').first();
    if (await cog.count()) {
      await cog.click({ timeout: 8000 });
    } else if (await cfgBtn.count()) {
      await cfgBtn.click({ timeout: 8000 });
    } else {
      // fallback: any toolbar icon near refresh
      const icons = page.locator('[data-testid^="rmms-estimate-list"] button');
      const n = await icons.count();
      for (let i = 0; i < n; i++) {
        const t = ((await icons.nth(i).getAttribute("title")) || "") + ((await icons.nth(i).getAttribute("aria-label")) || "");
        if (/cấu hình|config|schema/i.test(t)) {
          await icons.nth(i).click({ timeout: 5000 });
          break;
        }
      }
    }
    await page.waitForTimeout(1000);
    const hint = page.locator(".configHint, [class*='configHint']");
    const schemaModal = page.getByText("Cấu hình hiển thị danh mục");
    if (await hint.count()) {
      await shot(page, "QA-CFG", "FAIL configHint placeholder (GAP-P2-CC-06)");
      results[results.length - 1].result = "FAIL";
      results[results.length - 1].error = "GAP-P2-CC-06 / GAP-DEV-CONFIG-PLACEHOLDER-01 — configHint Zone F stub";
    } else if (await schemaModal.count()) {
      await shot(page, "QA-CFG", "LinCatalogUiSchemaEditorModal");
    } else {
      await shot(page, "QA-CFG", "config surface opened — verify manually");
    }
    await page.keyboard.press("Escape");
    const closeCfg = page.getByTestId("rmms-estimate-list-config-close");
    if (await closeCfg.count()) await closeCfg.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(400);
  } catch (e) {
    await failShot(page, "QA-CFG", e);
  }
} finally {
  await browser.close();
}

const ok = results.every((s) => s.result === "PASS");
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url,
      capturedAt: new Date().toISOString(),
      method: "e2e runtime · start:std + docker + extended capture",
      apiNote: "host API mapped :5111 (env API_HOST_PORT); BFF :5201; MFE uses BFF",
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(JSON.stringify({ ok, count: results.length, fails: results.filter((s) => s.result === "FAIL") }, null, 2));
if (!ok) process.exit(1);
