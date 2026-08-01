/**
 * Prepare AI vision analysis packets for each screenshot.
 * Writes ai-analysis/*.md — Agent / worker đọc ảnh + DOM inventory → chi tiết UI.
 * Optional: --enqueue-manifest only (AutoCode reads vision-manifest.json).
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
const SHOTS = join(OUT_DIR, "screenshots");
const AI_DIR = join(OUT_DIR, "ai-analysis");

function loadMap() {
  const p = join(OUT_DIR, "feature-map.json");
  if (!existsSync(p)) return {};
  return JSON.parse(readFileSync(p, "utf8")).slugs || {};
}

function pageSlug(pageId, menuText, slugIndex) {
  for (const [slug, info] of Object.entries(slugIndex)) {
    if ((info.ids || []).includes(pageId)) return slug;
  }
  return "unmapped";
}

function renderVisionMd(page, shotRel, slug) {
  return [
    `# AI Vision — ${page.menuText || page.id}`,
    ``,
    `> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.`,
    ``,
    `| | |`,
    `|---|---|`,
    `| **id** | \`${page.id}\` |`,
    `| **slug** | \`${slug}\` |`,
    `| **url** | ${page.finalUrl || "—"} |`,
    `| **screenshot** | \`${shotRel}\` |`,
    `| **DOM fields** | ${page.fields?.length ?? 0} |`,
    `| **DOM labels** | ${page.labels?.length ?? 0} |`,
    `| **DOM buttons** | ${(page.buttons || []).length} |`,
    ``,
    `## DOM inventory (đã capture)`,
    ``,
    `### Labels`,
    ...(page.labels?.length
      ? page.labels.slice(0, 40).map((l) => `- ${l}`)
      : ["- _(trống — ưu tiên đọc từ ảnh)_"]),
    ``,
    `### Buttons / actions`,
    ...(page.buttons?.length
      ? [...new Set(page.buttons)].slice(0, 40).map((b) => `- ${b}`)
      : ["- _(trống)_"]),
    ``,
    `### Inputs`,
    ``,
    `| tag | type | name/id |`,
    `|-----|------|---------|`,
    ...(page.fields?.length
      ? page.fields
          .slice(0, 40)
          .map(
            (f) =>
              `| ${f.tag} | ${f.type || "—"} | ${f.name || f.id || "—"} |`,
          )
      : ["| — | — | — |"]),
    ``,
    `## Analysis (AI điền)`,
    ``,
    `### Màn hình / mục đích`,
    ``,
    `_(TODO AI)_`,
    ``,
    `### Vùng UI (layout zones)`,
    ``,
    `| Zone | Mô tả | Controls thấy trên ảnh |`,
    `|------|-------|------------------------|`,
    `| Header | | |`,
    `| Filter / toolbar | | |`,
    `| Grid / map / content | | |`,
    `| Footer / actions | | |`,
    ``,
    `### Field list (từ ảnh — bổ sung DOM)`,
    ``,
    `| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |`,
    `|---------|---------------|-----------|---------|`,
    `| | | | |`,
    ``,
    `### Tính năng / hành động`,
    ``,
    `- `,
    ``,
    `### Map → step context`,
    ``,
    `- Feature: \`docs/context/features/${slug}.md\``,
    `- Section: \`## Legacy GOVOne (auto-capture)\``,
    `- Demo: parity UI trong \`*-demo.html\``,
    ``,
    `## Status`,
    ``,
    `- [ ] Vision reviewed`,
    `- [ ] Mapped to step context`,
    ``,
  ].join("\n");
}

function main() {
  if (!existsSync(PAGES)) {
    console.error("No pages/. Run capture first.");
    process.exit(1);
  }
  mkdirSync(AI_DIR, { recursive: true });
  const slugIndex = loadMap();
  const packets = [];

  for (const f of readdirSync(PAGES).filter((n) => n.endsWith(".json"))) {
    const page = JSON.parse(readFileSync(join(PAGES, f), "utf8"));
    if (page.kind === "shell") continue;
    const shot = join(SHOTS, `${page.id}.png`);
    const shotRel = existsSync(shot)
      ? `screenshots/${page.id}.png`
      : null;
    const slug = pageSlug(page.id, page.menuText, slugIndex);
    const mdName = `${page.id}.md`;
    writeFileSync(
      join(AI_DIR, mdName),
      renderVisionMd(page, shotRel || "(missing)", slug),
      "utf8",
    );
    packets.push({
      id: page.id,
      slug,
      menuText: page.menuText,
      screenshot: shotRel,
      analysisPath: `ai-analysis/${mdName}`,
      skillHint: "/qlbd-analy-demo",
    });
  }

  const manifest = {
    createdAt: new Date().toISOString(),
    count: packets.length,
    packets,
    instruction:
      "Agent: mở từng screenshot + ai-analysis/*.md → điền Analysis → chạy map-to-step-context",
  };
  writeFileSync(
    join(OUT_DIR, "vision-manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8",
  );
  writeFileSync(
    join(OUT_DIR, "VISION-QUEUE.md"),
    [
      `# Vision queue — GOVOne screenshots`,
      ``,
      `- Packets: ${packets.length}`,
      `- Created: ${manifest.createdAt}`,
      ``,
      `| id | slug | screenshot | analysis |`,
      `|----|------|------------|----------|`,
      ...packets.map(
        (p) =>
          `| ${p.id} | \`${p.slug}\` | ${p.screenshot || "—"} | \`${p.analysisPath}\` |`,
      ),
      ``,
      `Slash: đọc ảnh → điền Analysis → \`npm run map:context\`.`,
      ``,
    ].join("\n"),
    "utf8",
  );

  console.log(
    JSON.stringify({ event: "done", packets: packets.length, aiDir: AI_DIR }),
  );
}

main();
