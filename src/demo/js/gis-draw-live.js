/** GIS draw live — layer catalog + local GeoJSON persistence */
import { buildCotKmSeedItems, QL22_CENTER, cotKmBoundsLatLng, COT_KM_META } from './data/cot-km-ql22-seed.js';

export { QL22_CENTER, cotKmBoundsLatLng, COT_KM_META, buildCotKmSeedItems };

export const LAYERS = [
  { code: 'tuyen-duong', name: 'Tuyến đường', geom: 'LineString' },
  { code: 'cot-km', name: 'Cột km', geom: 'Point' },
  { code: 'bien-bao', name: 'Biển báo', geom: 'Point' },
  { code: 'cau', name: 'Cầu', geom: 'Polygon' },
  { code: 'ho-lan', name: 'Hộ lan', geom: 'LineString' },
  { code: 'cong', name: 'Cống', geom: 'Point' },
  { code: 'ta-luy', name: 'Ta luy / tường chắn', geom: 'Polygon' },
  { code: 'mat-duong', name: 'Đoạn mặt đường', geom: 'LineString' },
];

export const STORAGE_ITEMS = 'rmms-gis-live';
export const STORAGE_FC = 'rmms-gis-live-fc';
/** @deprecated dùng QL22_CENTER — seed Excel QL.22 */
export const NA_CENTER = QL22_CENTER;

export function layerLabel(code) {
  const L = LAYERS.find((x) => x.code === code);
  return L ? `${L.name} (${L.code})` : code;
}

export function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_ITEMS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (_) {}
  const seed = buildCotKmSeedItems();
  persistSaved(seed);
  return seed;
}

export function persistSaved(items) {
  localStorage.setItem(STORAGE_ITEMS, JSON.stringify(items));
  localStorage.setItem(
    STORAGE_FC,
    JSON.stringify({
      type: 'FeatureCollection',
      features: items.map((s) => ({
        type: 'Feature',
        properties: {
          code: s.code,
          name: s.name,
          layerCode: s.layerCode,
          ...(s.props || {}),
        },
        geometry: s.geometry,
      })),
    }),
  );
}

export function loadFeatureCollection() {
  try {
    const raw = localStorage.getItem(STORAGE_FC);
    return raw ? JSON.parse(raw) : null;
  } catch (_) {
    return null;
  }
}

export function clearSaved() {
  localStorage.removeItem(STORAGE_ITEMS);
  localStorage.removeItem(STORAGE_FC);
}

/** Nạp lại seed Excel (xoá local rồi seed) */
export function resetToCotKmSeed() {
  clearSaved();
  const seed = buildCotKmSeedItems();
  persistSaved(seed);
  return seed;
}
