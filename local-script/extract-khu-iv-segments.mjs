/**
 * Extract đoạn tuyến + tọa độ from Sau-sat-nhap / 19. Khu QLĐB IV.xlsx
 * Output: local-script/out/khu-iv-segments.json
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TMP = join(process.env.TEMP || "/tmp", "sau-sat-nhap-xlsx", "khu4");
const OUT_DIR = join(import.meta.dirname, "out");

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function parseShared(xml) {
  const out = [];
  const sis = xml.match(/<si\b[\s\S]*?<\/si>/g) ?? [];
  for (const si of sis) {
    const parts = [...si.matchAll(/<t[^>]*>([^<]*)<\/t>/g)].map((m) =>
      decode(m[1] ?? ""),
    );
    out.push(parts.join(""));
  }
  return out;
}

function colToIndex(col) {
  let n = 0;
  for (const ch of col) n = n * 26 + (ch.charCodeAt(0) - 64);
  return n - 1;
}

function parseSheet(sheetXml, shared) {
  const byExcelRow = new Map();
  const rowMatches = sheetXml.match(/<row\b[\s\S]*?<\/row>/g) ?? [];
  for (const rowXml of rowMatches) {
    const rr = /<row[^>]*\br="(\d+)"/.exec(rowXml);
    const excelRow = rr ? Number(rr[1]) : 0;
    const cells = [];
    const cellMatches = rowXml.match(/<c\b[^>]*>[\s\S]*?<\/c>|<c\b[^>]*\/>/g) ?? [];
    for (const cXml of cellMatches) {
      const ref = /r="([A-Z]+)(\d+)"/.exec(cXml);
      if (!ref) continue;
      const colIdx = colToIndex(ref[1]);
      while (cells.length < colIdx) cells.push(null);
      const t = /\bt="([^"]+)"/.exec(cXml)?.[1];
      const vMatch = /<v>([^<]*)<\/v>/.exec(cXml);
      if (!vMatch) {
        cells[colIdx] = null;
        continue;
      }
      const raw = vMatch[1] ?? "";
      if (t === "s") cells[colIdx] = shared[Number(raw)] ?? "";
      else {
        const num = Number(raw);
        cells[colIdx] = Number.isFinite(num) ? num : raw;
      }
    }
    byExcelRow.set(excelRow, cells);
  }
  return byExcelRow;
}

function asText(v) {
  if (v == null) return "";
  return String(v).trim();
}

function asNum(v) {
  if (v == null || v === "") return null;
  if (typeof v === "number" && Number.isFinite(v)) return v;
  const n = Number(String(v).replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : null;
}

function isLat(n) {
  return n >= 8 && n <= 24;
}
function isLng(n) {
  return n >= 102 && n <= 110;
}

function pairLngLat(x, y) {
  const a = asNum(x);
  const b = asNum(y);
  if (a == null || b == null) return null;
  if (isLng(a) && isLat(b)) return { lng: a, lat: b };
  if (isLat(a) && isLng(b)) return { lat: a, lng: b };
  return null;
}

const shared = parseShared(readFileSync(join(TMP, "xl/sharedStrings.xml"), "utf8"));
const byRow = parseSheet(
  readFileSync(join(TMP, "xl/worksheets/sheet1.xml"), "utf8"),
  shared,
);

const alias = (byRow.get(1) ?? []).map(asText);
const header = (byRow.get(6) ?? []).map(asText);
const idx = {};
for (let i = 0; i < Math.max(alias.length, header.length); i++) {
  const key = (alias[i] || header[i] || "").toLowerCase();
  if (key) idx[key] = i;
}

for (const n of [1, 2, 3, 6, 8, 9, 10]) {
  const row = byRow.get(n) ?? [];
  console.error(
    "R" + n,
    "len=" + row.length,
    row
      .slice(0, 18)
      .map((v, i) => i + ":" + String(v ?? "").slice(0, 28))
      .join(" | "),
  );
}

function col(...names) {
  for (const n of names) {
    const k = n.toLowerCase();
    if (idx[k] != null) return idx[k];
  }
  return -1;
}

const c = {
  unit: col("donvinhaplieu"),
  road: col("road_name"),
  longName: col("long_route_name"),
  kmFrom: col("vitridiemdau-kmlytrinh"),
  kmTo: col("vitridiemcuoi-kmlytrinh"),
  provFrom: col("province_from_id"),
  townFrom: col("town_from_id"),
  provTo: col("province_to_id"),
  townTo: col("town_to_id"),
  fromX: col("from_coordinatex"),
  fromY: col("from_coordinatey"),
  toX: col("to_coordinatex"),
  toY: col("to_coordinatey"),
  length: col("actual_length", "length_kilopot"),
  note: col("note"),
};

const segments = [];
const excelRows = [...byRow.keys()].filter((n) => n >= 9).sort((a, b) => a - b);
for (const r of excelRows) {
  const row = byRow.get(r) ?? [];
  const road = asText(row[c.road]);
  if (!road || /^road_name$/i.test(road) || /^\(\d+\)$/.test(road)) continue;
  const from = pairLngLat(row[c.fromX], row[c.fromY]);
  const to = pairLngLat(row[c.toX], row[c.toY]);
  segments.push({
    unit: asText(row[c.unit]),
    road,
    longName: asText(row[c.longName]),
    kmFrom: asText(row[c.kmFrom]),
    kmTo: asText(row[c.kmTo]),
    provFrom: asText(row[c.provFrom]),
    townFrom: asText(row[c.townFrom]),
    provTo: asText(row[c.provTo]),
    townTo: asText(row[c.townTo]),
    from,
    to,
    rawFromX: row[c.fromX] ?? null,
    rawFromY: row[c.fromY] ?? null,
    rawToX: row[c.toX] ?? null,
    rawToY: row[c.toY] ?? null,
    length: asNum(row[c.length]),
    note: asText(row[c.note]),
  });
}

const withGeo = segments.filter((s) => s.from || s.to);
const byRoad = {};
for (const s of segments) {
  byRoad[s.road] = (byRoad[s.road] || 0) + 1;
}
const byUnit = {};
for (const s of segments) {
  const u = s.unit || "(trống)";
  byUnit[u] = (byUnit[u] || 0) + 1;
}
const places = {};
for (const s of segments) {
  for (const p of [
    [s.provFrom, s.townFrom],
    [s.provTo, s.townTo],
  ]) {
    const key = `${p[1] || ""}|${p[0] || ""}`;
    if (!key.replace("|", "")) continue;
    places[key] = (places[key] || 0) + 1;
  }
}

const summary = {
  total: segments.length,
  withGeo: withGeo.length,
  roads: Object.keys(byRoad).sort(),
  roadCounts: byRoad,
  units: byUnit,
  places,
  sample: segments.slice(0, 8),
  headerAlias: alias.filter(Boolean).slice(0, 20),
  colMap: c,
};

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(
  join(OUT_DIR, "khu-iv-segments.json"),
  JSON.stringify({ summary, segments }, null, 2),
  "utf8",
);
const geoSamples = withGeo.slice(0, 6);
summary.geoSamples = geoSamples;
summary.firstRaw = segments.slice(0, 5).map((s) => ({
  unit: s.unit,
  road: s.road,
  longName: s.longName,
  kmFrom: s.kmFrom,
  kmTo: s.kmTo,
  from: s.from,
  to: s.to,
  raw: [s.rawFromX, s.rawFromY, s.rawToX, s.rawToY],
}));
console.log(JSON.stringify(summary, null, 2));
