/**
 * Deep crawl helpers — stay inside app popup, click side/nav items.
 */

export async function collectInnerNav(pageOrFrame) {
  return pageOrFrame.evaluate(() => {
    const textOf = (el) => (el?.innerText || el?.textContent || "").trim();
    const skip =
      /đăng xuất|log\s?out|copyright|eKGIS|facebook|quên mật khẩu|đăng ký/i;
    const seen = new Set();
    const out = [];
    const push = (text, href) => {
      const t = (text || "").replace(/\s+/g, " ").trim().split("\n")[0];
      if (!t || t.length < 2 || t.length > 80 || skip.test(t)) return;
      if (seen.has(t)) return;
      seen.add(t);
      out.push({ text: t, href: href || "" });
    };
    const sels = [
      "nav a",
      ".sidebar a",
      ".menu a",
      ".dxm-item",
      ".dxm-content",
      "[role=treeitem]",
      ".nav-link",
      ".menu-item",
      "aside a",
      ".tree a",
      ".list-group a",
      "ul.nav li a",
      "[class*=Side] a",
      "[class*=Menu] a",
    ];
    for (const sel of sels) {
      for (const el of document.querySelectorAll(sel)) {
        push(textOf(el), el.href || el.getAttribute("href") || "");
      }
    }
    return out.slice(0, 80);
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
