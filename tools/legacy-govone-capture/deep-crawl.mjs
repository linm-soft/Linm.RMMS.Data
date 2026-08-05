/**
 * Deep crawl — left rail · tabs · top menus · Add/Thêm (cấm Save/Submit)
 * + reload khi click không phản hồi / page empty.
 * + rescan: full reload retry · pause manual load khi form/blank fail.
 */

import readline from "node:readline";

/** Cấm nhấn — ghi / lưu / submit. */
export const FORBIDDEN_CLICK =
  /^(lưu|luu|save|submit|ghi|ghi sổ|ghi so|đăng ký|dang ky|xác nhận lưu|ok\s*$|apply|cập nhật.*lưu)/i;

const EMPTY_TEXT =
  /không có bản ghi|no records|no data|không có dữ liệu|trống|empty|page\s*0\s*của\s*0|tổng số\s*:\s*0/i;

export function isForbiddenClickLabel(label) {
  const t = String(label || "").replace(/\s+/g, " ").trim();
  if (!t) return true;
  if (FORBIDDEN_CLICK.test(t)) return true;
  if (/lưu\b|save\b|submit\b/i.test(t) && !/thêm|tạo|create|add/i.test(t)) {
    return true;
  }
  return false;
}

export async function expandLeftRail(pageOrFrame) {
  await pageOrFrame
    .evaluate(() => {
      const toggles = document.querySelectorAll(
        "[aria-expanded=false], .tree-toggle, .caret, .fa-chevron-right, "
          + ".fa-angle-right, .dxm-popOut, .submenu-toggle, .nav-item .arrow",
      );
      for (const el of toggles) {
        try {
          el.click();
        } catch {
          /* ignore */
        }
      }
    })
    .catch(() => {});
  await pageOrFrame.waitForTimeout(500);
}

/** Left rail / sidebar — REQUIRED full scan. */
export async function collectLeftRailMenus(pageOrFrame) {
  await expandLeftRail(pageOrFrame);
  return pageOrFrame.evaluate(() => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const skip =
      /đăng xuất|log\s?out|copyright|eKGIS|facebook|quên mật khẩu|đăng ký|home\b|^$/i;
    const seen = new Set();
    const out = [];
    const push = (text, href, depth) => {
      const t = (text || "").replace(/\s+/g, " ").trim().split("\n")[0];
      if (!t || t.length < 2 || t.length > 80 || skip.test(t)) return;
      if (seen.has(t)) return;
      seen.add(t);
      out.push({ text: t, href: href || "", depth: depth || 0, rail: "left" });
    };

    const railRoots = [
      ...document.querySelectorAll(
        "aside, .sidebar, .side-nav, .left-nav, .LeftMenu, #leftMenu, #sidebar, "
          + "[class*=Sidebar], [class*=sideBar], [class*=LeftNav], [class*=left-menu], "
          + ".dxm-main, .dxm-vertical, nav.menu, .treeview, .nav-tree, "
          + "[class*=side-bar], [class*=SideBar], .app-menu, .main-menu",
      ),
    ];

    const scope = railRoots.length > 0 ? railRoots : [document.body];
    const linkSels =
      "a, [role=treeitem], [role=menuitem], .dxm-item, .dxm-content, .menu-item, "
      + ".nav-link, li[data-key] > a, .tree-node, button.nav-link, .list-group-item";

    for (const root of scope) {
      for (const el of root.querySelectorAll(linkSels)) {
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        if (r.left > window.innerWidth * 0.45 && railRoots.length) continue;
        let depth = 0;
        let p = el.parentElement;
        while (p && p !== root && depth < 8) {
          if (/ul|ol|tree|submenu/i.test(p.tagName + p.className)) depth += 1;
          p = p.parentElement;
        }
        push(textOf(el), el.href || el.getAttribute("href") || "", depth);
      }
    }

    if (out.length === 0) {
      for (const el of document.querySelectorAll(
        ".dxm-item, .dxm-content, [role=treeitem], .sidebar a, aside a",
      )) {
        push(textOf(el), el.href || "", 0);
      }
    }
    return out.slice(0, 150);
  });
}

export async function collectInnerNav(pageOrFrame) {
  return collectLeftRailMenus(pageOrFrame);
}

/** Tabs: Lớp bản đồ · Chú giải · Thuộc tính · Kết quả · Bootstrap/MUI tabs. */
export async function collectTabs(pageOrFrame) {
  return pageOrFrame.evaluate(() => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const seen = new Set();
    const out = [];
    const sels = [
      "[role=tab]",
      ".nav-tabs a",
      ".nav-tabs button",
      ".nav-pills a",
      ".nav-pills button",
      ".MuiTab-root",
      ".dx-tab",
      ".tab-item",
      ".tabs li a",
      "[data-toggle=tab]",
      "[aria-controls]",
    ];
    for (const sel of sels) {
      for (const el of document.querySelectorAll(sel)) {
        const t = textOf(el).replace(/\s+/g, " ").split("\n")[0];
        if (!t || t.length < 1 || t.length > 40) continue;
        if (seen.has(t)) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        seen.add(t);
        out.push({ text: t, kind: "tab" });
      }
    }
    return out.slice(0, 40);
  });
}

/** Top / header menus: Bản đồ · Công cụ · Tìm kiếm (không Save). */
export async function collectTopMenus(pageOrFrame) {
  return pageOrFrame.evaluate(() => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const skip = /đăng xuất|log\s?out|power|user|thông báo|notification/i;
    const seen = new Set();
    const out = [];
    const roots = document.querySelectorAll(
      "header, .navbar, .top-nav, .topbar, .app-header, .toolbar-top, "
        + "[class*=Header], .dxm-horizontal, nav.navbar, .menu-bar",
    );
    const scope = roots.length ? roots : [document.body];
    for (const root of scope) {
      for (const el of root.querySelectorAll(
        "a, button, [role=menuitem], .dxm-item, .dxm-content, .menu-item",
      )) {
        const r = el.getBoundingClientRect();
        if (r.top > 120 || r.width < 2) continue;
        const t = textOf(el).replace(/\s+/g, " ").split("\n")[0];
        if (!t || t.length < 2 || t.length > 40 || skip.test(t)) continue;
        if (seen.has(t)) continue;
        seen.add(t);
        out.push({ text: t, kind: "top-menu" });
      }
    }
    return out.slice(0, 30);
  });
}

export async function clickInnerItem(page, text) {
  const loc = page.getByText(text, { exact: true }).first();
  if (await loc.isVisible({ timeout: 1500 }).catch(() => false)) {
    await loc.click({ timeout: 8000 }).catch(() => null);
    await page.waitForTimeout(900);
    await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
    return true;
  }
  const loose = page.getByText(text, { exact: false }).first();
  if (await loose.isVisible({ timeout: 1000 }).catch(() => false)) {
    await loose.click({ timeout: 8000 }).catch(() => null);
    await page.waitForTimeout(900);
    return true;
  }
  return false;
}

/** Snapshot nhẹ để so sánh trước/sau click. */
export async function pageSignal(page) {
  return page
    .evaluate(() => {
      const body = document.body?.innerText || "";
      const title = document.title || "";
      const hay = `${title}\n${body}`.toLowerCase();
      const inputs = document.querySelectorAll(
        "input:not([type=hidden]), textarea, select",
      ).length;
      const rows = document.querySelectorAll(
        "table tbody tr, .dxgvDataRow, [role=row], .list-item, .grid-row",
      ).length;
      const dialogs = document.querySelectorAll(
        "[role=dialog], .modal.show, .dxpc-mainDiv, .popup",
      ).length;
      const loading =
        /đang tải|dang tai|loading…|loading\.\.\.|vui lòng chờ|please wait|spinner/i.test(hay)
        || !!document.querySelector(
          ".loading, .spinner, .dx-loadpanel, .dx-overlay-wrapper.dx-loadpanel, "
            + "[class*=Loading], [class*=Spinner], .fa-spinner, .pace-running",
        );
      return {
        url: location.href,
        title,
        len: body.length,
        inputs,
        rows,
        dialogs,
        loading,
        emptyHint: /không có bản ghi|no records|no data|không có dữ liệu|tổng số\s*:\s*0|trang\s*\[?0\]?\s*của\s*0/i.test(
          body,
        ),
      };
    })
    .catch(() => ({
      url: page.url(),
      title: "",
      len: 0,
      inputs: 0,
      rows: 0,
      dialogs: 0,
      loading: true,
      emptyHint: true,
    }));
}

/**
 * Page “không phản hồi / empty” sau action:
 * - không đổi URL + không dialog + không thêm input
 * - hoặc empty hint (Không có bản ghi) và vẫn 0 inputs form
 * SPA “Đang tải…” ≠ fail cứng (tránh reload loop).
 */
export function isUnresponsiveOrEmpty(before, after, opts = {}) {
  if (!after) return true;
  // SPA loading skeleton — không coi fail → không reload loop
  if (after.loading && after.len < 400) return false;
  if (after.dialogs > (before?.dialogs || 0)) return false;
  if (after.inputs > (before?.inputs || 0) + 1) return false;
  if (after.url !== before?.url) return false;

  const allowListEmpty = opts.allowListEmpty !== false;
  // List empty vẫn OK nếu đã có toolbar/actions — chỉ coi fail khi gần như blank
  if (after.len < 40 && !after.loading) return true;
  if (!allowListEmpty && after.emptyHint && after.inputs < 2 && after.rows < 1) {
    return true;
  }
  // Click action mong đợi form/dialog nhưng không có gì đổi
  if (opts.expectUiChange) {
    if (after.loading) return true;
    const same =
      after.url === before.url
      && after.dialogs === before.dialogs
      && Math.abs(after.inputs - before.inputs) < 1
      && Math.abs(after.len - before.len) < 30;
    if (same) return true;
  }
  return false;
}

/** True khi DOM gần blank / shell rỗng sau click (new content empty). */
export function isBlankSignal(sig) {
  if (!sig) return true;
  // Chỉ title "Đang tải" — không blank-fail (tránh reload loop trên /DuongBo/dashboard)
  if (sig.loading && sig.len < 400) return false;
  if (sig.len < 40) return true;
  if (sig.inputs < 1 && sig.rows < 1 && sig.dialogs < 1 && sig.len < 180) {
    return true;
  }
  return false;
}

/** True nếu shell SPA kẹt loading (dashboard…) — skip reload. */
export function isStuckLoadingShell(sig) {
  if (!sig) return true;
  if (!sig.loading) return false;
  const u = String(sig.url || "").toLowerCase();
  if (/\/duongbo\/dashboard|\/dashboard(\?|$|#)/i.test(u) && (sig.inputs || 0) < 2) {
    return true;
  }
  return sig.len < 250 && (sig.inputs || 0) < 1 && (sig.rows || 0) < 1;
}

/** Budget full-reload per URL (session) — chặn loop. */
const fullReloadCounts = new Map();
const MAX_FULL_RELOAD_PER_URL = 2;

export function reloadBudgetKey(page) {
  try {
    const u = new URL(page.url());
    return `${u.origin}${u.pathname}`;
  } catch {
    return String(page.url() || "unknown").split("?")[0];
  }
}

export function canFullReload(page) {
  const k = reloadBudgetKey(page);
  const n = fullReloadCounts.get(k) || 0;
  return n < MAX_FULL_RELOAD_PER_URL;
}

function markFullReload(page) {
  const k = reloadBudgetKey(page);
  fullReloadCounts.set(k, (fullReloadCounts.get(k) || 0) + 1);
}

/**
 * Full page reload — **không** wait networkidle (SPA dashboard vĩnh viễn busy).
 * Có budget per URL.
 */
export async function fullPageReload(page, reason = "blank-retry") {
  if (!canFullReload(page)) {
    console.log(
      JSON.stringify({
        event: "full_reload_budget_skip",
        url: reloadBudgetKey(page),
        reason,
        max: MAX_FULL_RELOAD_PER_URL,
      }),
    );
    return { recovered: false, via: "budget-skip", reason };
  }
  markFullReload(page);
  await page.reload({ waitUntil: "domcontentloaded", timeout: 45_000 }).catch(() => {});
  // SPA: bỏ networkidle — /DuongBo/dashboard poll mãi
  await page.waitForTimeout(1200);
  return { recovered: true, via: "full-reload", reason };
}

/** Reload: ưu tiên nút Tải lại / Refresh; fallback page.reload(). */
export async function recoverPage(page, reason = "empty", opts = {}) {
  // Stuck SPA shell — không reload (loop trên dashboard)
  const sig = await pageSignal(page);
  if (isStuckLoadingShell(sig) && opts.forceReload !== true) {
    console.log(
      JSON.stringify({
        event: "recover_skip_stuck_loading",
        url: sig.url,
        reason,
      }),
    );
    return { recovered: false, via: "stuck-loading-skip", reason };
  }

  if (opts.fullReload) {
    return fullPageReload(page, reason);
  }
  const reloadBtn = page
    .getByRole("button", { name: /tải lại|tai lai|refresh|làm mới|lam moi/i })
    .first();
  if (await reloadBtn.isVisible({ timeout: 600 }).catch(() => false)) {
    await reloadBtn.click().catch(() => {});
    await page.waitForTimeout(1200);
    await page.waitForLoadState("domcontentloaded", { timeout: 10_000 }).catch(() => {});
    return { recovered: true, via: "tai-lai", reason };
  }
  // Icon-only refresh (circular arrow)
  const iconRefresh = page.locator(
    "button[title*=Refresh], button[title*=Làm mới], button[title*=Tải lại], "
      + "[aria-label*=Refresh], .fa-refresh, .fa-sync, .fa-redo",
  ).first();
  if (await iconRefresh.isVisible({ timeout: 400 }).catch(() => false)) {
    await iconRefresh.click().catch(() => {});
    await page.waitForTimeout(1200);
    return { recovered: true, via: "icon-refresh", reason };
  }
  if (!canFullReload(page)) {
    return { recovered: false, via: "budget-skip", reason };
  }
  markFullReload(page);
  await page.reload({ waitUntil: "domcontentloaded", timeout: 45_000 }).catch(() => {});
  await page.waitForTimeout(800);
  return { recovered: true, via: "reload", reason };
}

/** Chờ SPA hết "Đang tải" một lần — timeout ngắn, không reload. */
export async function waitSpaSettle(page, ms = 6_000) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    const sig = await pageSignal(page);
    if (!sig.loading && sig.len > 80) return sig;
    await page.waitForTimeout(400);
  }
  return pageSignal(page);
}

/**
 * Pause auto crawl — user mở page/form manual trong browser headed,
 * Enter = capture snapshot; `skip` = bỏ qua leaf.
 * @returns {{ continued: boolean, skipped: boolean, answer: string }}
 */
export async function pauseForManual(ctx = {}) {
  const hint =
    ctx.hint
    || "Browser: mở menu / form bằng tay. Enter = capture tiếp · gõ skip = bỏ · gõ abort = dừng tool";
  console.log(
    JSON.stringify({
      event: "pause_manual",
      master: ctx.master || null,
      page: ctx.page || null,
      action: ctx.action || null,
      label: ctx.label || null,
      reason: ctx.reason || "manual",
      hint,
    }),
  );
  if (!process.stdin.isTTY) {
    console.log(
      JSON.stringify({
        event: "pause_skipped_no_tty",
        note: "stdin not TTY — set GOVONE_PAUSE_ON_FAIL=false for CI",
      }),
    );
    return { continued: false, skipped: true, answer: "no-tty" };
  }
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise((resolve) => {
    rl.question(">>> Manual ready? [Enter=capture | skip | abort] ", (a) => resolve(String(a || "").trim()));
  });
  rl.close();
  const low = answer.toLowerCase();
  if (low === "abort" || low === "quit" || low === "q") {
    console.log(JSON.stringify({ event: "abort_by_user" }));
    process.exit(2);
  }
  if (low === "skip" || low === "s") {
    return { continued: false, skipped: true, answer };
  }
  return { continued: true, skipped: false, answer: answer || "enter" };
}

/**
 * Click an toàn: không Save/Submit · sau click nếu empty/no-response → recover.
 * opts.maxRetries / fullReloadRetry: full page.reload + click lại khi blank.
 * opts.pauseOnFail: stdin pause → user load manual.
 * opts.noFullReload: left-rail SPA — cấm full reload (tránh kẹt /DuongBo/dashboard).
 */
export async function clickSafe(page, text, opts = {}) {
  if (isForbiddenClickLabel(text)) {
    return { ok: false, skipped: "forbidden", label: text };
  }

  // Nav left-rail: mặc định 0 full-reload retry
  const noFull = opts.noFullReload === true;
  const maxRetries = noFull ? 0 : Number(opts.maxRetries ?? 0) || 0;
  let last = null;

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    if (attempt > 0) {
      if (noFull || !canFullReload(page)) break;
      const fr = await fullPageReload(page, `click-retry-${attempt}`);
      if (!fr.recovered) break;
      console.log(
        JSON.stringify({
          event: "click_retry_reload",
          label: text,
          attempt,
          maxRetries,
        }),
      );
    }

    const before = await pageSignal(page);
    // Home SPA vẫn loading → không full-reload; đợi settle 1 lần
    if (isStuckLoadingShell(before)) {
      await waitSpaSettle(page, 5_000);
    }

    const clicked = await clickInnerItem(page, text);
    if (!clicked) {
      last = { ok: false, skipped: "not-found", label: text, attempt };
      // not-found: **không** full-reload (loop dashboard); dừng
      break;
    }

    await page.waitForTimeout(opts.waitMs ?? 1000);
    let after = await pageSignal(page);
    if (after.loading) after = await waitSpaSettle(page, 4_000);

    const bad =
      isUnresponsiveOrEmpty(before, after, {
        expectUiChange: opts.expectUiChange === true,
        allowListEmpty: opts.allowListEmpty !== false,
      })
      || (opts.treatBlankAsFail !== false && isBlankSignal(after) && opts.expectUiChange);

    if (bad && opts.reloadOnEmpty !== false && !noFull) {
      if (isStuckLoadingShell(after) || !canFullReload(page)) {
        last = {
          ok: true,
          clicked: true,
          reloaded: false,
          blank: isBlankSignal(after),
          stuckLoading: isStuckLoadingShell(after),
          label: text,
          before,
          after,
          attempt,
        };
        break;
      }
      const rec = await recoverPage(page, "click-no-response", {
        fullReload: opts.fullReloadRetry !== false && attempt < maxRetries,
      });
      last = {
        ok: true,
        clicked: true,
        reloaded: Boolean(rec.recovered),
        blank: isBlankSignal(after),
        recover: rec,
        label: text,
        before,
        after,
        attempt,
      };
      if (attempt < maxRetries && rec.recovered) continue;
      break;
    }

    last = {
      ok: true,
      clicked: true,
      reloaded: false,
      blank: isBlankSignal(after),
      label: text,
      before,
      after,
      attempt,
    };
    // allowListEmpty: chấp nhận list/shell không form
    if (!last.blank || opts.allowListEmpty !== false) break;
    // blank + expect form — retry only if full reload allowed
    if (noFull || !canFullReload(page)) break;
  }

  const failBlank =
    last
    && (
      !last.ok
      || (last.blank && opts.expectUiChange)
      || (last.reloaded && opts.pauseWhenReloaded)
    );

  if (failBlank && opts.pauseOnFail) {
    const manual = await pauseForManual({
      label: text,
      reason: last?.skipped || (last?.blank ? "blank-after-click" : "click-fail"),
      master: opts.master,
      page: opts.pageKey,
      action: "nav",
      hint:
        "Click menu/page failed or blank. Open target manually in browser, then Enter to capture.",
    });
    if (manual.continued) {
      const after = await pageSignal(page);
      return {
        ok: true,
        clicked: true,
        manual: true,
        reloaded: Boolean(last?.reloaded),
        label: text,
        after,
        before: last?.before,
      };
    }
    return { ...last, ok: false, manualSkipped: true };
  }

  return last || { ok: false, skipped: "not-found", label: text };
}

/** Tìm nút Add/Thêm + action form (Tạo công việc · Tạo từ sự cố…). Cấm Save. */
export async function findCreateActions(pageOrFrame, opts = {}) {
  const allActions = opts.allActionForms === true;
  return pageOrFrame.evaluate((wantAll) => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const forbid =
      /^(lưu|luu|save|submit|ghi|ok\s*$|apply|đóng|hủy|cancel|xóa|delete|xuất excel|export|làm mới|refresh|quay lại|back)/i;
    const reAdd =
      /^(thêm|thêm cv|tạo mới|tạo|new|create|add|\+|thêm mới|thêm dòng|insert|button add)/i;
    const reActionForm =
      /tạo|thêm|new|create|add|mở form|chi tiết|sửa|edit|xem form|copy|nhân bản|từ sự cố|from incident/i;
    const out = [];
    const seen = new Set();
    const nodes = document.querySelectorAll(
      "button, a, input[type=button], [role=button], .btn, .dxbButton, "
        + "[title*=Thêm], [title*=Add], [title*=Tạo], [aria-label*=Thêm], [aria-label*=Add], "
        + "[title*=Tạo ], .toolbar button, .toolbar a, [class*=Toolbar] button",
    );
    for (const el of nodes) {
      const label =
        textOf(el)
        || el.getAttribute("value")
        || el.getAttribute("title")
        || el.getAttribute("aria-label")
        || "";
      const t = label.replace(/\s+/g, " ").trim().split("\n")[0];
      if (!t || t.length > 60) continue;
      if (forbid.test(t)) continue;
      if (/lưu|save|submit/i.test(t) && !/thêm|tạo|create|add/i.test(t)) continue;
      const isAdd =
        reAdd.test(t)
        || /thêm|tạo mới|create|new\b|add\b/i.test(t)
        || /fa-plus|icon-plus|btn-add/i.test(el.className || "");
      const isFormAction = wantAll && reActionForm.test(t);
      if (!isAdd && !isFormAction) continue;
      if (seen.has(t)) continue;
      seen.add(t);
      out.push({ label: t, kind: isAdd ? "create" : "action-form" });
    }
    // Icon-only add (marker+)
    for (const el of document.querySelectorAll(
      "[class*=add], [class*=plus], [title*=Thêm], [title*=Add]",
    )) {
      if (el.tagName === "INPUT" && el.type === "submit") continue;
      const t =
        textOf(el)
        || el.getAttribute("title")
        || el.getAttribute("aria-label")
        || "add-icon";
      if (forbid.test(t) || /lưu|save|submit/i.test(t)) continue;
      if (seen.has(t)) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      seen.add(t);
      out.push({ label: t.slice(0, 40), kind: "create" });
    }
    return out.slice(0, wantAll ? 40 : 16);
  }, allActions);
}

export async function clickCreateAndCaptureForm(page, createLabel, opts = {}) {
  if (isForbiddenClickLabel(createLabel)) {
    return { ok: false, skipped: "forbidden" };
  }

  const maxRetries = Math.min(Number(opts.maxRetries ?? 1) || 1, 2);
  let lastFail = null;

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    if (attempt > 0) {
      if (!canFullReload(page)) break;
      const fr = await fullPageReload(page, `create-retry-${attempt}`);
      if (!fr.recovered) break;
      console.log(
        JSON.stringify({
          event: "create_retry_reload",
          label: createLabel,
          attempt,
        }),
      );
    }

    const beforeUrl = page.url();
    let before = await pageSignal(page);
    if (isStuckLoadingShell(before)) {
      before = await waitSpaSettle(page, 5_000);
    }
    const clicked = await clickInnerItem(page, createLabel);
    if (!clicked) {
      lastFail = { ok: false, reason: "not-found", attempt };
      break; // not-found: không reload loop
    }

    await page.waitForTimeout(1200);
    await page
      .locator(
        "form, .modal, .modal-dialog, [role=dialog], .dxpc-mainDiv, .popup, .slideout, input:visible, textarea:visible",
      )
      .first()
      .waitFor({ state: "visible", timeout: 8000 })
      .catch(() => {});

    let after = await pageSignal(page);
    if (after.loading) after = await waitSpaSettle(page, 3_000);

    const formMissing =
      (
        isUnresponsiveOrEmpty(before, after, {
          expectUiChange: true,
          allowListEmpty: true,
        })
        && after.dialogs === 0
        && after.inputs <= before.inputs
      )
      || (isBlankSignal(after) && !after.loading);

    if (formMissing) {
      if (isStuckLoadingShell(after) || !canFullReload(page)) {
        lastFail = {
          ok: false,
          reloaded: false,
          reason: isStuckLoadingShell(after) ? "stuck-loading" : "create-no-form",
          blank: isBlankSignal(after),
          attempt,
        };
        break;
      }
      await recoverPage(page, "create-no-form", { fullReload: attempt < maxRetries });
      lastFail = {
        ok: false,
        reloaded: true,
        reason: "create-no-form",
        blank: isBlankSignal(after),
        attempt,
      };
      continue;
    }

    return {
      ok: true,
      beforeUrl,
      afterUrl: page.url(),
      openedModal: beforeUrl === page.url(),
      attempt,
    };
  }

  if (opts.pauseOnFail) {
    const manual = await pauseForManual({
      label: createLabel,
      reason: lastFail?.reason || "create-fail",
      master: opts.master,
      page: opts.pageKey,
      action: "create",
      hint:
        "Form capture failed / blank. Open the form manually (do NOT Save), then Enter to capture fields.",
    });
    if (manual.continued) {
      return {
        ok: true,
        manual: true,
        beforeUrl: page.url(),
        afterUrl: page.url(),
        openedModal: true,
        reason: "manual-form",
      };
    }
  }

  return lastFail || { ok: false, reason: "create-no-form" };
}

/** Đóng modal — không Save. */
export async function dismissFormOverlay(page) {
  const cancel = page
    .getByRole("button", { name: /đóng|hủy|cancel|close|bỏ qua|không lưu/i })
    .first();
  if (await cancel.isVisible({ timeout: 800 }).catch(() => false)) {
    await cancel.click().catch(() => {});
    await page.waitForTimeout(400);
    return;
  }
  await page.keyboard.press("Escape").catch(() => {});
  await page.waitForTimeout(300);
}

/**
 * Click tất cả tab + top menu (mở dropdown, không Save) trên page hiện tại.
 * Trả về danh sách đã click + reload events.
 */
export async function clickAllTabsAndMenus(page, opts = {}) {
  const maxTabs = opts.maxTabs ?? 20;
  const maxMenus = opts.maxMenus ?? 15;
  const log = [];
  const safeOpts = {
    expectUiChange: false,
    allowListEmpty: true,
    reloadOnEmpty: opts.noFullReload !== true,
    maxRetries: opts.noFullReload ? 0 : (opts.maxRetries ?? 0),
    pauseOnFail: opts.pauseOnFail === true,
    fullReloadRetry: opts.fullReloadRetry === true && opts.noFullReload !== true,
    noFullReload: opts.noFullReload === true,
    master: opts.master,
    pageKey: opts.pageKey,
  };

  const tabs = (await collectTabs(page)).slice(0, maxTabs);
  for (const tab of tabs) {
    if (isForbiddenClickLabel(tab.text)) continue;
    const r = await clickSafe(page, tab.text, safeOpts);
    log.push({ kind: "tab", ...r });
  }

  const menus = (await collectTopMenus(page)).slice(0, maxMenus);
  for (const m of menus) {
    if (isForbiddenClickLabel(m.text)) continue;
    const r = await clickSafe(page, m.text, safeOpts);
    log.push({ kind: "top-menu", ...r });
    // Đóng dropdown sau khi mở (Escape) — tránh che UI
    await page.keyboard.press("Escape").catch(() => {});
    await page.waitForTimeout(200);
  }

  return { tabs: tabs.length, menus: menus.length, log };
}

export function slugPart(s) {
  return String(s || "item")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "item";
}
