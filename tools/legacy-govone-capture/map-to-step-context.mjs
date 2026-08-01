/**
 * Map legacy capture + AI vision → section trong docs/context/features/{slug}.md
 * (step context cho workflow scan-demo / qlbd-analy-demo).
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
const FEATURES_CTX = join(DATA_ROOT, "docs/context/features");
const LEGACY_FEAT = join(OUT_DIR, "features");
const AI_DIR = join(OUT_DIR, "ai-analysis");

const SECTION_START = "<!-- LEGACY-GOVONE-CAPTURE:START -->";
const SECTION_END = "<!-- LEGACY-GOVONE-CAPTURE:END -->";

function upsertSection(body, sectionMd) {
  const block = `${SECTION_START}\n${sectionMd.trim()}\n${SECTION_END}`;
  if (body.includes(SECTION_START) && body.includes(SECTION_END)) {
    return body.replace(
      new RegExp(
        `${SECTION_START}[\\s\\S]*?${SECTION_END}`,
        "m",
      ),
      block,
    );
  }
  return `${body.trimEnd()}\n\n${block}\n`;
}

function buildSection(slug, legacyMd, visionBits) {
  const lines = [
    `## Legacy GOVOne (auto-capture)`,
    ``,
    `> Auto map từ \`tools/legacy-govone-capture\` · vision: \`_raw/legacy-govone/ai-analysis/\`.`,
    `> Dùng làm **step context** cho \`/qlbd-analy-demo\` · \`yarn scan-qlbd-demo\`.`,
    ``,
    `### Nguồn`,
    ``,
    `- Raw feature: \`docs/context/_raw/legacy-govone/features/${slug}.md\``,
    `- Vision packets: ${visionBits.length}`,
    ``,
  ];
  if (visionBits.length) {
    lines.push(`### AI Vision summaries`);
    lines.push(``);
    for (const v of visionBits.slice(0, 30)) {
      lines.push(`- [\`${v.id}\`](../_raw/legacy-govone/${v.path}) — ${v.menuText}`);
    }
    lines.push(``);
  }
  if (legacyMd) {
    // embed truncated inventory (skip H1)
    const body = legacyMd.replace(/^#.*$/m, "").trim();
    const clip = body.length > 6000 ? `${body.slice(0, 6000)}\n\n…_(truncated — xem raw)_` : body;
    lines.push(`### Capture inventory`);
    lines.push(``);
    lines.push(clip);
    lines.push(``);
  }
  lines.push(`### Step context checklist`);
  lines.push(``);
  lines.push(`- [ ] Design demo parity legacy zones`);
  lines.push(`- [ ] Control-map fields từ Labels/Inputs/Vision`);
  lines.push(`- [ ] Status Demo → Signed → \`/qlbd-align-mfe\``);
  lines.push(``);
  return lines.join("\n");
}

function main() {
  if (!existsSync(LEGACY_FEAT)) {
    console.error("Run npm run map first.");
    process.exit(1);
  }
  mkdirSync(FEATURES_CTX, { recursive: true });

  const visionBySlug = new Map();
  if (existsSync(AI_DIR)) {
    for (const f of readdirSync(AI_DIR).filter((n) => n.endsWith(".md"))) {
      const text = readFileSync(join(AI_DIR, f), "utf8");
      const slug = /\|\s*\*\*slug\*\*\s*\|\s*`([^`]+)`/.exec(text)?.[1] || "unmapped";
      const menu =
        /^# AI Vision — (.+)$/m.exec(text)?.[1]?.trim() || f;
      if (!visionBySlug.has(slug)) visionBySlug.set(slug, []);
      visionBySlug.get(slug).push({
        id: f.replace(/\.md$/, ""),
        path: `ai-analysis/${f}`,
        menuText: menu,
      });
    }
  }

  let updated = 0;
  for (const f of readdirSync(LEGACY_FEAT).filter((n) => n.endsWith(".md"))) {
    const slug = f.replace(/\.md$/i, "");
    if (slug === "unmapped") continue;
    const legacyMd = readFileSync(join(LEGACY_FEAT, f), "utf8");
    const ctxPath = join(FEATURES_CTX, `${slug}.md`);
    let body = existsSync(ctxPath)
      ? readFileSync(ctxPath, "utf8")
      : `# ${slug}\n\n> Stub — tạo bởi map-to-step-context (legacy GOVOne).\n\n**Status:** Context\n`;
    const section = buildSection(
      slug,
      legacyMd,
      visionBySlug.get(slug) || [],
    );
    body = upsertSection(body, section);
    writeFileSync(ctxPath, body, "utf8");
    updated += 1;
    console.log(JSON.stringify({ event: "mapped_context", slug, path: ctxPath }));
  }

  writeFileSync(
    join(OUT_DIR, "STEP-CONTEXT-MAP.md"),
    [
      `# Step context map`,
      ``,
      `- Updated feature files: ${updated}`,
      `- When: ${new Date().toISOString()}`,
      ``,
      `Next: \`yarn scan-qlbd-demo\` từ AI-AutoCode.`,
      ``,
    ].join("\n"),
    "utf8",
  );
  console.log(JSON.stringify({ event: "done", updated }));
}

main();
