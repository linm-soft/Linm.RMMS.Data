/**
 * Map legacy capture (fields + actions) → demo control-map theo chuẩn
 * Linm erp-form-context (modern MFE controls) — cùng field, UI hiện đại.
 *
 * Output:
 *   docs/context/_raw/legacy-govone/demo-maps/{slug}-control-map.md
 *   docs/context/_raw/legacy-govone/demo-maps/{slug}-actions.md
 *   upsert section vào docs/context/features/{slug}.md
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_ROOT = resolve(__dirname, "../..");
const OUT_DIR = resolve(
  DATA_ROOT,
  process.env.GOVONE_OUT_DIR || "docs/context/_raw/legacy-govone",
);
const PAGES = join(OUT_DIR, "pages");
const MAP_DIR = join(OUT_DIR, "demo-maps");
const FEATURES_CTX = join(DATA_ROOT, "docs/context/features");

const SECTION_START = "<!-- DEMO-MFE-MODERN:START -->";
const SECTION_END = "<!-- DEMO-MFE-MODERN:END -->";

/** Legacy label/input → Linm control (erp-form-context / common controls). */
function mapFieldToLinControl(f) {
  const hay = `${f.name} ${f.id} ${f.placeholder} ${f.ariaLabel} ${f.type}`.toLowerCase();
  const type = (f.type || "").toLowerCase();
  if (type === "checkbox" || /check|active|is_/.test(hay)) {
    return { control: "Checkbox / Switch", lin: "LinCheckbox · form field" };
  }
  if (type === "date" || /date|ngày|ngay/.test(hay)) {
    return {
      control: "Date",
      lin: "utcToLocalInputValue · localInputToISOWithOffset (form-datetime-local-utc)",
    };
  }
  if (type === "number" || /qty|sl|amount|tiền|tien|money|số/.test(hay)) {
    return { control: "Money/Qty", lin: "LabelMoney · INT_IN / form-field-format" };
  }
  if (/select|dropdown|combobox/.test(f.tag) || type === "select-one") {
    return { control: "Select", lin: "Select · useFormOptions (cấm hardcode VN)" };
  }
  if (/account|tk_|taikhoan|tài khoản/.test(hay)) {
    return { control: "Lookup TK", lin: "SearchInput catalog · form-catalog-lookup-input" };
  }
  if (/customer|partner|khách|doi tuong|đối tượng/.test(hay)) {
    return { control: "Lookup ĐT", lin: "SearchInput · form-catalog-lookup-input" };
  }
  if (/code|mã|ma_/.test(hay)) {
    return { control: "Code", lin: "form-code-field · uppercase" };
  }
  if (f.tag === "textarea" || /note|ghi chú|mô tả|desc/.test(hay)) {
    return { control: "TextArea", lin: "TextField multiline" };
  }
  return { control: "Text", lin: "TextField · common-field-control" };
}

function mapActionToLinToolbar(a) {
  const k = a.kind || "action";
  const map = {
    create: { btn: "Tạo mới / Thêm", lin: "Button primary · catalog/voucher toolbar" },
    edit: { btn: "Sửa", lin: "Button · row menu · erp-list-row-action-menu" },
    view: { btn: "Xem", lin: "Button/link · View mode · fieldLockProps" },
    submit: { btn: "Lưu", lin: "Button primary · form-api-error-handling toast" },
    destructive: { btn: "Xóa / Hủy", lin: "Button danger · Confirm modal" },
    filter: { btn: "Tìm / Làm mới", lin: "LinErpListFilterBar · GAP-P2-87" },
    export: { btn: "Xuất Excel", lin: "export-excel · toolbar" },
    import: { btn: "Import", lin: "implement-import-view wizard" },
    nav: { btn: "Điều hướng", lin: "MemoryRouter / navigate · mfe-run-modes" },
    close: { btn: "Đóng", lin: "Modal/Slideout close · leave-confirm" },
    action: { btn: a.label, lin: "Button · toolbar zone" },
  };
  return map[k] || map.action;
}

function inferKind(pageHints) {
  const t = pageHints.join(" ").toLowerCase();
  if (/báo cáo|bao cao|dashboard|biểu đồ/.test(t)) return "E (report) — erp-report-context";
  if (/bản đồ|ban do|gis|map|geditor/.test(t)) return "F/custom map — erp-custom-manage + GIS";
  if (/danh mục|danh sach|sổ |so /.test(t)) return "B (catalog list+modal) — erp-form-context Kind B";
  if (/phiếu|chung tu|chứng từ|công việc|sự cố/.test(t)) {
    return "C (voucher/full page) — erp-form-context Kind C";
  }
  return "B/C — confirm Step 2a-K (erp-form-context)";
}

function loadSlugIndex() {
  const p = join(OUT_DIR, "feature-map.json");
  if (!existsSync(p)) return {};
  return JSON.parse(readFileSync(p, "utf8")).slugs || {};
}

function pagesForSlug(slug, slugIndex) {
  const ids = new Set(slugIndex[slug]?.ids || []);
  if (!existsSync(PAGES)) return [];
  return readdirSync(PAGES)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(PAGES, f), "utf8")))
    .filter((p) => ids.has(p.id) || (slug === "unmapped" && !ids.size));
}

function upsertSection(body, sectionMd) {
  const block = `${SECTION_START}\n${sectionMd.trim()}\n${SECTION_END}`;
  if (body.includes(SECTION_START) && body.includes(SECTION_END)) {
    return body.replace(
      new RegExp(`${SECTION_START}[\\s\\S]*?${SECTION_END}`, "m"),
      block,
    );
  }
  return `${body.trimEnd()}\n\n${block}\n`;
}

function buildControlMap(slug, pages) {
  const fieldRows = [];
  const actionRows = [];
  const seenF = new Set();
  const seenA = new Set();
  for (const p of pages) {
    for (const f of p.fields || []) {
      const key = `${f.name}|${f.id}|${f.placeholder}`;
      if (seenF.has(key)) continue;
      seenF.add(key);
      const m = mapFieldToLinControl(f);
      fieldRows.push({
        legacy: f.name || f.id || f.placeholder || f.ariaLabel || "(unnamed)",
        type: f.type || f.tag,
        zone: f.zone || "—",
        ...m,
      });
    }
    const acts =
      p.actions?.length
        ? p.actions
        : (p.buttons || []).map((label) => ({
            label,
            kind: "action",
            zone: "content",
          }));
    for (const a of acts) {
      const key = `${a.zone}|${a.kind}|${a.label}`;
      if (seenA.has(key)) continue;
      seenA.add(key);
      const m = mapActionToLinToolbar(a);
      actionRows.push({
        legacy: a.label,
        kind: a.kind,
        zone: a.zone,
        ...m,
      });
    }
  }

  const kind = inferKind([
    slug,
    ...pages.map((p) => p.menuText || ""),
    ...pages.flatMap((p) => p.headings || []),
  ]);

  const md = [
    `# Demo control-map (modern MFE) — \`${slug}\``,
    ``,
    `> **Rule:** cùng field/action legacy · UI theo **\`/erp-form-context\`** (Linm.Development.Rules).`,
    `> Demo HTML mock \`Lin*\` look · **cấm** copy skin GOVOne cũ · **cấm** BE.`,
    ``,
    `## Kind hint`,
    ``,
    `- ${kind}`,
    `- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory`,
    ``,
    `## Fields (legacy → Linm)`,
    ``,
    `| Legacy | type | zone | Control | Linm SSOT |`,
    `|--------|------|------|---------|-----------|`,
    ...fieldRows
      .slice(0, 80)
      .map(
        (r) =>
          `| ${r.legacy} | ${r.type} | ${r.zone} | ${r.control} | ${r.lin} |`,
      ),
    fieldRows.length === 0 ? `| _(chưa capture field — bổ sung vision)_ | | | | |` : "",
    ``,
    `## Actions / buttons (legacy → toolbar MFE)`,
    ``,
    `| Legacy label | kind | zone | Demo button | Linm SSOT |`,
    `|--------------|------|------|-------------|-----------|`,
    ...actionRows
      .slice(0, 120)
      .map(
        (r) =>
          `| ${r.legacy} | ${r.kind} | ${r.zone} | ${r.btn} | ${r.lin} |`,
      ),
    actionRows.length === 0 ? `| _(chưa capture action)_ | | | | |` : "",
    ``,
    `## Demo page rules (bắt buộc)`,
    ``,
    `1. **Layout** — list: LinPageLayout zones A–F · form: Pattern A/B/C theo Kind`,
    `2. **Filter** — \`LinErpListFilterBar\` · Tìm trên filter · Làm mới toolbar`,
    `3. **Grid** — STT · sort/filter · row action menu · không header \`TT\``,
    `4. **Form** — validation banner · không disabled xám View · toast mock`,
    `5. **Labels** — \`useFormOptions\` pattern (hardcode VN chỉ trong demo HTML OK nếu gắn data-i18n key)`,
    `6. **Datetime** — hiển thị local · lưu ISO offset (mock)`,
    `7. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)`,
    ``,
    `## Refs`,
    ``,
    `- \`web-app/skill/erp-form-context/erp-form-context.md\``,
    `- \`erp-common-controls-mandatory.md\` · \`erp-list-page-shell.md\``,
    `- Capture raw: \`_raw/legacy-govone/features/${slug}.md\``,
    ``,
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  const actionsMd = [
    `# Actions inventory — \`${slug}\``,
    ``,
    `| label | kind | zone | tag | disabled |`,
    `|-------|------|------|-----|----------|`,
    ...actionRows.map(
      (r) => `| ${r.legacy} | ${r.kind} | ${r.zone} | — | — |`,
    ),
    ``,
    `Count: ${actionRows.length}`,
    ``,
  ].join("\n");

  return { md, actionsMd, fieldCount: fieldRows.length, actionCount: actionRows.length, kind };
}

function main() {
  const slugIndex = loadSlugIndex();
  mkdirSync(MAP_DIR, { recursive: true });
  const slugs = Object.keys(slugIndex).length
    ? Object.keys(slugIndex)
    : ["unmapped"];

  let n = 0;
  for (const slug of slugs) {
    if (slug === "unmapped") continue;
    const pages = pagesForSlug(slug, slugIndex);
    if (!pages.length) continue;
    const { md, actionsMd, fieldCount, actionCount, kind } = buildControlMap(
      slug,
      pages,
    );
    writeFileSync(join(MAP_DIR, `${slug}-control-map.md`), md, "utf8");
    writeFileSync(join(MAP_DIR, `${slug}-actions.md`), actionsMd, "utf8");

    const ctxPath = join(FEATURES_CTX, `${slug}.md`);
    if (existsSync(ctxPath)) {
      let body = readFileSync(ctxPath, "utf8");
      const section = [
        `## Demo MFE modern (erp-form-context)`,
        ``,
        `> Same fields/actions từ GOVOne · UI chuẩn Linm — **không** clone skin legacy.`,
        ``,
        `- Control-map: [\`${slug}-control-map.md\`](../_raw/legacy-govone/demo-maps/${slug}-control-map.md)`,
        `- Actions: [\`${slug}-actions.md\`](../_raw/legacy-govone/demo-maps/${slug}-actions.md)`,
        `- Fields mapped: ${fieldCount} · Actions: ${actionCount}`,
        `- Kind hint: ${kind}`,
        ``,
        `Gen demo: \`/qlbd-analy-demo @${slug}\` — load control-map trên + \`/erp-form-context\` rules (2a-K · 2g · common controls).`,
        ``,
      ].join("\n");
      body = upsertSection(body, section);
      writeFileSync(ctxPath, body, "utf8");
    }

    n += 1;
    console.log(
      JSON.stringify({
        event: "demo_map",
        slug,
        fieldCount,
        actionCount,
        kind,
      }),
    );
  }

  writeFileSync(
    join(OUT_DIR, "DEMO-MFE-MAP.md"),
    [
      `# Demo MFE modern maps`,
      ``,
      `- Slugs: ${n}`,
      `- When: ${new Date().toISOString()}`,
      `- Dir: \`demo-maps/*-control-map.md\``,
      ``,
      `Next: \`/qlbd-analy-demo\` · parity field + Linm shell.`,
      ``,
    ].join("\n"),
    "utf8",
  );
  console.log(JSON.stringify({ event: "done", slugs: n }));
}

main();
