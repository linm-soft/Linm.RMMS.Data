/**
 * Layout: capture/{master}/{page}/{action}/
 *   master = app tile / feature slug
 *   page   = left-rail menu (or `_root` nếu chưa vào menu)
 *   action = `view` (list/page) | `create` | slug action khác
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export function slugPart(s) {
  return String(s || "item")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "item";
}

/** Resolve master slug from tile text via menu-slug-map rules. */
export function resolveMasterSlug(tileText, rules) {
  const n = String(tileText || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  for (const r of rules || []) {
    for (const k of r.any || []) {
      const kk = String(k)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      if (n.includes(kk)) return r.slug;
    }
  }
  return slugPart(tileText);
}

/**
 * Write inventory under capture/{master}/{page}/{action}/
 * Returns { dir, relPath }
 */
export function writeCaptureLeaf(options) {
  const {
    captureRoot,
    master,
    page = "_root",
    action = "view",
    record,
    screenshotBuf,
    shotExt = "png",
  } = options;

  const m = slugPart(master);
  const p = slugPart(page);
  const a = slugPart(action);
  const dir = join(captureRoot, m, p, a);
  mkdirSync(dir, { recursive: true });

  const meta = {
    ...record,
    path: {
      master: m,
      page: p,
      action: a,
      rel: `capture/${m}/${p}/${a}`,
    },
  };
  writeFileSync(join(dir, "inventory.json"), JSON.stringify(meta, null, 2), "utf8");
  writeFileSync(
    join(dir, "README.md"),
    [
      `# ${m} / ${p} / ${a}`,
      ``,
      `- **master:** ${record.masterTitle || m}`,
      `- **page:** ${record.pageTitle || p}`,
      `- **action:** ${a}`,
      `- **url:** ${record.finalUrl || "—"}`,
      `- **fields:** ${record.fields?.length ?? 0}`,
      `- **actions:** ${record.actionCount ?? record.actions?.length ?? 0}`,
      ``,
      record.formSample
        ? `## Form sample (từ nút Create/Thêm)\n\n\`form-sample.json\` — labels/inputs mở form.\n`
        : "",
      ``,
    ].join("\n"),
    "utf8",
  );

  if (record.formSample) {
    writeFileSync(
      join(dir, "form-sample.json"),
      JSON.stringify(record.formSample, null, 2),
      "utf8",
    );
  }

  if (screenshotBuf) {
    writeFileSync(join(dir, `screenshot.${shotExt}`), screenshotBuf);
  }

  return { dir, rel: `capture/${m}/${p}/${a}`, master: m, page: p, action: a };
}
