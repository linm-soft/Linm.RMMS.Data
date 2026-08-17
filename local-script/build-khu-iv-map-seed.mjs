/**
 * Build map-seed from Sau-sat-nhap Khu IV segments.
 * Tọa độ X/Y trong xlsx trống — ghim theo địa danh xã/phường trên hồ sơ (OSM).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SEG = JSON.parse(
  readFileSync(join(import.meta.dirname, "out/khu-iv-segments.json"), "utf8"),
);

/** Town center on/near QL.1 — OSM / known gazetteer (lat, lng). */
const PLACE_GEO = {
  "công hải": [11.773, 109.115],
  "xuân hải": [11.603, 109.016],
  "phước dinh": [11.456, 108.993],
  "cà ná": [11.342, 108.88],
  "vĩnh hảo": [11.326, 108.795],
  "hồng thái": [11.198, 108.445],
  "hàm thuận": [10.968, 108.148],
  "hàm kiệm": [10.689, 107.754],
  "tân minh": [10.838, 107.627],
  "xuân hòa": [10.864, 107.424],
  "long khánh": [10.932, 107.243],
  "dầu giây": [10.953, 107.155],
  "hưng thịnh": [10.937, 107.082],
  "bình minh": [10.954, 106.996],
  "trấn biên": [10.95, 106.842],
  "phước tân": [10.891, 106.917],
  "đồng hòa": [10.822, 106.762],
};

function normPlace(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFC")
    .replace(/^(xã|phường|thị trấn)\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function lookup(town) {
  const key = normPlace(town);
  return PLACE_GEO[key] || null;
}

function kmMeters(raw) {
  const n = Number(String(raw).replace(/,/g, ""));
  if (!Number.isFinite(n) || n <= 0) return null;
  return n > 20000 ? n : Math.round(n * 1000);
}

function fmtKm(meters) {
  if (meters == null) return null;
  const km = Math.floor(meters / 1000);
  const m = Math.round(meters % 1000);
  return `${km}+${String(m).padStart(3, "0")}`;
}

const ql1 = SEG.segments
  .filter((s) => s.road === "Quốc lộ 1")
  .map((s) => ({
    ...s,
    kmFromM: kmMeters(s.kmFrom),
    kmToM: kmMeters(s.kmTo),
  }))
  .filter((s) => s.kmFromM != null && s.kmFromM >= 1_500_000 && s.kmFromM < 1_900_000)
  .sort((a, b) => a.kmFromM - b.kmFromM);

const path = [];
const kmPosts = [];
const seen = new Set();

function pushPt(latlng, kmM, name) {
  if (!latlng) return;
  const key = `${latlng[0].toFixed(4)},${latlng[1].toFixed(4)}`;
  if (seen.has(key)) return;
  seen.add(key);
  path.push(latlng);
  kmPosts.push({
    km: fmtKm(kmM) || "",
    lat: latlng[0],
    lng: latlng[1],
    name: name || fmtKm(kmM) || "",
    sourceKind: "sau-sat-nhap-place",
  });
}

for (const s of ql1) {
  pushPt(lookup(s.townFrom), s.kmFromM, `${s.townFrom} · ${fmtKm(s.kmFromM)}`);
  pushPt(lookup(s.townTo), s.kmToM, `${s.townTo} · ${fmtKm(s.kmToM)}`);
}

const mid = path[Math.floor(path.length / 2)] || path[0];
const kmFrom = fmtKm(ql1[0]?.kmFromM);
const kmTo = fmtKm(ql1[ql1.length - 1]?.kmToM);

const seed = {
  generatedAt: new Date().toISOString(),
  source: {
    org: "Khu Quản lý đường bộ IV",
    orgCode: "REG-IV",
    vpCode: "VP-IV.1",
    routeCode: "QL.1",
    realDataRoot:
      "D:/AI-QLBD/Linm.RMMS.Data/data-import/Sau-sat-nhap/19. Khu Quản lý đường bộ IV.xlsx",
    geoNote:
      "Cột Tọa độ điểm đầu/cuối X-Y trong xlsx trống (ô bị ghi Cấp đường). Path = địa danh xã/phường trên hồ sơ, ghim OSM.",
  },
  route: {
    id: "ql1-khu-iv",
    label: `QL.1 · Khu QLĐB IV · Km ${kmFrom}–${kmTo}`,
    routeCode: "QL.1",
    kmFrom,
    kmTo,
    center: mid,
    path,
    kmPosts,
    simulatedCheckIn: {
      km: kmPosts[1]?.km || kmFrom,
      lat: (kmPosts[1] || kmPosts[0]).lat,
      lng: (kmPosts[1] || kmPosts[0]).lng,
      sourceKind: "sau-sat-nhap-place",
      note: "Điểm tuần mô phỏng tại địa danh hồ sơ — không phải GPS trip.",
    },
  },
  segments: ql1.map((s) => ({
    unit: s.unit || null,
    road: s.road,
    longName: s.longName,
    kmFrom: fmtKm(s.kmFromM),
    kmTo: fmtKm(s.kmToM),
    lengthM: s.length,
    provFrom: s.provFrom,
    townFrom: s.townFrom,
    provTo: s.provTo,
    townTo: s.townTo,
  })),
  assetsSample: [
    {
      category: "Đoạn tuyến đường chứa tài sản",
      countGeo: kmPosts.length,
      points: kmPosts.map((p) => ({
        lat: p.lat,
        lng: p.lng,
        km: p.km,
        name: p.name,
        sourceKind: p.sourceKind,
      })),
    },
  ],
  notes: [
    "Nguồn: data-import/Sau-sat-nhap/19. Khu Quản lý đường bộ IV.xlsx · sheet Đoạn tuyến đường chứa tài sản (148 dòng).",
    `QL.1 ${ql1.length} đoạn · lý trình mét → Km ${kmFrom}–${kmTo} (Khánh Hòa / Lâm Đồng / Đồng Nai / HCM).`,
    "Không dùng tọa độ X/Y trong file (trống / nhầm Cấp đường).",
    "Cột KM II.1 (ql1-ii1) giữ làm fallback Thanh Hóa — không trộn vào path này.",
  ],
};

const demoRoots = [
  "D:/AI-QLBD/Linm.RMMS.Demo/public/demo/_shared/real-data/khu-iv",
  "D:/AI-QLBD/Linm.RMMS.Demo/src/demo/_shared/real-data/khu-iv",
];
for (const dir of demoRoots) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "map-seed.json"), `${JSON.stringify(seed, null, 2)}\n`, "utf8");
  writeFileSync(
    join(dir, "inventory.json"),
    `${JSON.stringify(
      {
        generatedAt: seed.generatedAt,
        realDataRoot: seed.source.realDataRoot,
        org: seed.source.org,
        routeCode: "QL.1",
        xlsxTotal: 1,
        segmentCount: SEG.summary.total,
        roads: SEG.summary.roads,
        roadCounts: SEG.summary.roadCounts,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
}

writeFileSync(
  join(import.meta.dirname, "out/khu-iv-map-seed.json"),
  `${JSON.stringify(seed, null, 2)}\n`,
  "utf8",
);
console.log(
  JSON.stringify(
    {
      pathPts: path.length,
      kmFrom,
      kmTo,
      center: mid,
      ql1Segments: ql1.length,
    },
    null,
    2,
  ),
);
