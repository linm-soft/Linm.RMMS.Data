/**
 * Deep crawl — left rail · tabs · top menus · Add/Thêm (cấm Save/Submit)
 * + reload khi click không phản hồi / page empty.
 */

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
      const inputs = document.querySelectorAll(
        "input:not([type=hidden]), textarea, select",
      ).length;
      const rows = document.querySelectorAll(
        "table tbody tr, .dxgvDataRow, [role=row], .list-item, .grid-row",
      ).length;
      const dialogs = document.querySelectorAll(
        "[role=dialog], .modal.show, .dxpc-mainDiv, .popup",
      ).length;
      return {
        url: location.href,
        len: body.length,
        inputs,
        rows,
        dialogs,
        emptyHint: /không có bản ghi|no records|no data|không có dữ liệu|tổng số\s*:\s*0|trang\s*\[?0\]?\s*của\s*0/i.test(
          body,
        ),
      };
    })
    .catch(() => ({
      url: page.url(),
      len: 0,
      inputs: 0,
      rows: 0,
      dialogs: 0,
      emptyHint: true,
    }));
}

/**
 * Page “không phản hồi / empty” sau action:
 * - không đổi URL + không dialog + không thêm input
 * - hoặc empty hint (Không có bản ghi) và vẫn 0 inputs form
 */
export function isUnresponsiveOrEmpty(before, after, opts = {}) {
  if (!after) return true;
  if (after.dialogs > (before?.dialogs || 0)) return false;
  if (after.inputs > (before?.inputs || 0) + 1) return false;
  if (after.url !== before?.url) return false;

  const allowListEmpty = opts.allowListEmpty !== false;
  // List empty vẫn OK nếu đã có toolbar/actions — chỉ coi fail khi gần như blank
  if (after.len < 40) return true;
  if (!allowListEmpty && after.emptyHint && after.inputs < 2 && after.rows < 1) {
    return true;
  }
  // Click action mong đợi form/dialog nhưng không có gì đổi
  if (opts.expectUiChange) {
    const same =
      after.url === before.url
      && after.dialogs === before.dialogs
      && Math.abs(after.inputs - before.inputs) < 1
      && Math.abs(after.len - before.len) < 30;
    if (same) return true;
  }
  return false;
}

/** Reload: ưu tiên nút Tải lại / Refresh; fallback page.reload(). */
export async function recoverPage(page, reason = "empty") {
  const reloadBtn = page
    .getByRole("button", { name: /tải lại|tai lai|refresh|làm mới|lam moi/i })
    .first();
  if (await reloadBtn.isVisible({ timeout: 600 }).catch(() => false)) {
    await reloadBtn.click().catch(() => {});
    await page.waitForTimeout(1200);
    await page.waitForLoadState("domcontentloaded", { timeout: 15_000 }).catch(() => {});
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
  await page.reload({ waitUntil: "domcontentloaded", timeout: 45_000 }).catch(() => {});
  await page.waitForTimeout(800);
  return { recovered: true, via: "reload", reason };
}

/**
 * Click an toàn: không Save/Submit · sau click nếu empty/no-response → recover.
 */
export async function clickSafe(page, text, opts = {}) {
  if (isForbiddenClickLabel(text)) {
    return { ok: false, skipped: "forbidden", label: text };
  }
  const before = await pageSignal(page);
  const clicked = await clickInnerItem(page, text);
  if (!clicked) return { ok: false, skipped: "not-found", label: text };

  await page.waitForTimeout(opts.waitMs ?? 1000);
  const after = await pageSignal(page);
  const bad = isUnresponsiveOrEmpty(before, after, {
    expectUiChange: opts.expectUiChange === true,
    allowListEmpty: opts.allowListEmpty !== false,
  });

  if (bad && opts.reloadOnEmpty !== false) {
    const rec = await recoverPage(page, "click-no-response");
    return {
      ok: true,
      clicked: true,
      reloaded: true,
      recover: rec,
      label: text,
      before,
      after,
    };
  }
  return { ok: true, clicked: true, reloaded: false, label: text, before, after };
}

/** Tìm nút Add/Thêm — loại Save/Submit. */
export async function findCreateActions(pageOrFrame) {
  return pageOrFrame.evaluate(() => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const forbid =
      /^(lưu|luu|save|submit|ghi|ok\s*$|apply|đóng|hủy|cancel|xóa|delete)/i;
    const reAdd =
      /^(thêm|thêm cv|tạo mới|tạo|new|create|add|\+|thêm mới|thêm dòng|insert|button add)/i;
    const out = [];
    const seen = new Set();
    const nodes = document.querySelectorAll(
      "button, a, input[type=button], [role=button], .btn, .dxbButton, "
        + "[title*=Thêm], [title*=Add], [title*=Tạo], [aria-label*=Thêm], [aria-label*=Add]",
    );
    for (const el of nodes) {
      const label =
        textOf(el)
        || el.getAttribute("value")
        || el.getAttribute("title")
        || el.getAttribute("aria-label")
        || "";
      const t = label.replace(/\s+/g, " ").trim();
      if (!t || t.length > 40) continue;
      if (forbid.test(t)) continue;
      if (/lưu|save|submit/i.test(t) && !/thêm|tạo|create|add/i.test(t)) continue;
      const isAdd =
        reAdd.test(t)
        || /thêm|tạo mới|create|new\b|add\b/i.test(t)
        || /fa-plus|icon-plus|btn-add/i.test(el.className || "");
      if (!isAdd) continue;
      if (seen.has(t)) continue;
      seen.add(t);
      out.push({ label: t });
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
      out.push({ label: t.slice(0, 40) });
    }
    return out.slice(0, 16);
  });
}

export async function clickCreateAndCaptureForm(page, createLabel) {
  if (isForbiddenClickLabel(createLabel)) {
    return { ok: false, skipped: "forbidden" };
  }
  const beforeUrl = page.url();
  const before = await pageSignal(page);
  const clicked = await clickInnerItem(page, createLabel);
  if (!clicked) return { ok: false };

  await page.waitForTimeout(1200);
  await page
    .locator(
      "form, .modal, .modal-dialog, [role=dialog], .dxpc-mainDiv, .popup, .slideout, input:visible, textarea:visible",
    )
    .first()
    .waitFor({ state: "visible", timeout: 8000 })
    .catch(() => {});

  const after = await pageSignal(page);
  // Form không mở / không đổi → reload rồi báo fail (caller có thể retry)
  if (
    isUnresponsiveOrEmpty(before, after, { expectUiChange: true, allowListEmpty: true })
    && after.dialogs === 0
    && after.inputs <= before.inputs
  ) {
    await recoverPage(page, "create-no-form");
    return { ok: false, reloaded: true, reason: "create-no-form" };
  }

  return {
    ok: true,
    beforeUrl,
    afterUrl: page.url(),
    openedModal: beforeUrl === page.url(),
  };
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

  const tabs = (await collectTabs(page)).slice(0, maxTabs);
  for (const tab of tabs) {
    if (isForbiddenClickLabel(tab.text)) continue;
    const r = await clickSafe(page, tab.text, {
      expectUiChange: false,
      allowListEmpty: true,
      reloadOnEmpty: true,
    });
    log.push({ kind: "tab", ...r });
  }

  const menus = (await collectTopMenus(page)).slice(0, maxMenus);
  for (const m of menus) {
    if (isForbiddenClickLabel(m.text)) continue;
    const r = await clickSafe(page, m.text, {
      expectUiChange: false,
      allowListEmpty: true,
      reloadOnEmpty: true,
    });
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
