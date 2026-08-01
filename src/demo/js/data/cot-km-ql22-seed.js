/**
 * Seed từ docs/Cot_km20210421185413.xlsx
 * Cục QLĐB IV · QL.22:000 · đoạn Km30+250 : Km46+600 · lớp Cột KM
 * Tọa độ: Kinh độ / Vĩ độ (WGS84)
 */
export const COT_KM_META = {
  sourceFile: 'Cot_km20210421185413.xlsx',
  agency: 'Cục quản lý đường bộ IV',
  roadCode: 'QL.22',
  roadSegment: 'Km30+250 : Km46+600',
  layerCode: 'cot-km',
  materialDefault: 'Bê tông cốt thép',
};

/** [lat, lng] — tâm đoạn QL.22 theo seed */
export const QL22_CENTER = [11.045, 106.34];

/** Rows STT 1–16 từ sheet */
export const COT_KM_ROWS = [
  { stt: 1, lyTrinh: 'Km31+0', lng: 106.403939, lat: 11.017644, ten: 'Km31', distNextM: 940, material: 'Bê tông cốt thép' },
  { stt: 2, lyTrinh: 'Km32+0', lng: 106.396191, lat: 11.02127, ten: 'Km32', distNextM: 1063, material: 'Bê tông cốt thép' },
  { stt: 3, lyTrinh: 'Km33+0', lng: 106.387422, lat: 11.025299, ten: 'Km33', distNextM: 982, material: 'Bê tông cốt thép' },
  { stt: 4, lyTrinh: 'Km34+0', lng: 106.378795, lat: 11.027502, ten: 'Km34', distNextM: 1008, material: 'Bê tông cốt thép' },
  { stt: 5, lyTrinh: 'Km35+0', lng: 106.370165, lat: 11.030567, ten: 'Km35', distNextM: 982, material: 'Bê tông cốt thép' },
  { stt: 6, lyTrinh: 'Km36+0', lng: 106.362535, lat: 11.03503, ten: 'Km36', distNextM: 1101, material: 'Bê tông cốt thép' },
  { stt: 7, lyTrinh: 'Km37+0', lng: 106.356351, lat: 11.042959, ten: 'Km37', distNextM: 1051, material: 'Bê tông cốt thép' },
  { stt: 8, lyTrinh: 'Km38+0', lng: 106.349981, lat: 11.048618, ten: 'Km38', distNextM: 1338, material: 'Bê tông cốt thép' },
  { stt: 9, lyTrinh: 'Km39+0', lng: 106.20363, lat: 11.02798, ten: 'Km39', distNextM: 997, material: 'Bê tông cốt thép' },
  { stt: 10, lyTrinh: 'Km40+0', lng: 106.20363, lat: 11.03161, ten: 'Km40', distNextM: 985, material: 'Bê tông cốt thép' },
  { stt: 11, lyTrinh: 'Km41+0', lng: 106.325329, lat: 11.058083, ten: 'Km41', distNextM: 991, material: 'Bê tông cốt thép' },
  { stt: 12, lyTrinh: 'Km42+0', lng: 106.316665, lat: 11.061194, ten: 'Km42', distNextM: 994, material: 'Bê tông cốt thép' },
  { stt: 13, lyTrinh: 'Km43+0', lng: 106.308082, lat: 11.064436, ten: 'Km43', distNextM: 989, material: 'Bê tông cốt thép' },
  { stt: 14, lyTrinh: 'Km44+0', lng: 106.299544, lat: 11.067528, ten: 'Km44', distNextM: 1012, material: 'Bê tông cốt thép' },
  { stt: 15, lyTrinh: 'Km45+0', lng: 106.290838, lat: 11.070706, ten: 'Km45', distNextM: 995, material: 'Bê tông cốt thép' },
  { stt: 16, lyTrinh: 'Km46+0', lng: 106.282282, lat: 11.073803, ten: 'Km46', distNextM: 968, material: 'Bê tông cốt thép' },
];

/** Demo lưu trữ items (Point cột km + LineString tuyến) */
export function buildCotKmSeedItems() {
  const at = '2021-04-21T18:54:13+07:00';
  const points = COT_KM_ROWS.map((r) => ({
    id: `seed-cot-km-${r.stt}`,
    code: `CKM-QL22-${String(r.stt).padStart(3, '0')}`,
    name: `Cột ${r.ten}`,
    layerCode: 'cot-km',
    geometry: { type: 'Point', coordinates: [r.lng, r.lat] },
    props: {
      lyTrinh: r.lyTrinh,
      tenCotKm: r.ten,
      khoangCachToiCotTiepTheoM: r.distNextM,
      loaiVatLieu: r.material,
      roadCode: COT_KM_META.roadCode,
      agency: COT_KM_META.agency,
      source: COT_KM_META.sourceFile,
    },
    at,
    seeded: true,
  }));

  // Tuyến theo thứ tự STT (giữ nguyên tọa độ Excel — Km39/40 lệch trong nguồn)
  const lineCoords = COT_KM_ROWS.map((r) => [r.lng, r.lat]);
  const line = {
    id: 'seed-tuyen-ql22-000',
    code: 'TD-QL22-000',
    name: `QL.22 · ${COT_KM_META.roadSegment}`,
    layerCode: 'tuyen-duong',
    geometry: { type: 'LineString', coordinates: lineCoords },
    props: {
      roadCode: COT_KM_META.roadCode,
      segment: COT_KM_META.roadSegment,
      agency: COT_KM_META.agency,
      source: COT_KM_META.sourceFile,
    },
    at,
    seeded: true,
  };

  // vài biển báo mẫu gần cột (offset nhỏ)
  const signs = [
    { base: COT_KM_ROWS[0], code: 'BB-QL22-001', name: 'Biển báo tốc độ · gần Km31' },
    { base: COT_KM_ROWS[4], code: 'BB-QL22-002', name: 'Biển báo giao cắt · gần Km35' },
    { base: COT_KM_ROWS[11], code: 'BB-QL22-003', name: 'Biển báo nguy hiểm · gần Km42' },
  ].map((s, i) => ({
    id: `seed-bien-bao-${i + 1}`,
    code: s.code,
    name: s.name,
    layerCode: 'bien-bao',
    geometry: {
      type: 'Point',
      coordinates: [s.base.lng + 0.00035, s.base.lat + 0.00025],
    },
    props: { nearKm: s.base.ten, roadCode: COT_KM_META.roadCode, source: 'demo-offset' },
    at,
    seeded: true,
  }));

  return [line, ...points, ...signs];
}

export function cotKmBoundsLatLng() {
  const lats = COT_KM_ROWS.map((r) => r.lat);
  const lngs = COT_KM_ROWS.map((r) => r.lng);
  return [
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)],
  ];
}
