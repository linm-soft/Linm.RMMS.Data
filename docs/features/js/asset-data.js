/** Fake seed — Quản lý tài sản đường bộ · DEMO no BE · Leaflet lat/lng */

export const ROUTE_NODES = [
  { id: 'QL.48C', name: 'QL.48C', visible: true },
  { id: 'QL.7', name: 'QL.7', visible: true },
];

export const ASSET_TYPES = [
  'Mặt đường',
  'Cầu',
  'Biển báo',
  'Hộ lan',
  'Cột Km',
  'Cống',
  'Taluy',
  'Đèn',
];

/**
 * @typedef {{
 *  id: string; code: string; name: string; type: string; route: string;
 *  kmFrom: string; kmTo: string; status: string; lat: number; lng: number;
 *  qr: string; photos: string[]; valueVnd: number; note: string; updatedAt: string;
 *  source?: 'manual' | 'ai';
 * }} AssetRow
 *
 * @typedef {{
 *  id: string; type: string; route: string; km: string; lat: number; lng: number;
 *  conf: number; status: 'pending' | 'confirmed' | 'dismissed'; note: string;
 * }} AiCandidate
 */

/** @type {AssetRow[]} */
export const SEED = [
  {
    id: 'a1',
    code: 'TS-001',
    name: 'Đoạn QL.48C · Km 12+300',
    type: 'Mặt đường',
    route: 'QL.48C',
    kmFrom: 'km12+300',
    kmTo: 'km12+800',
    status: 'Tốt',
    lat: 19.2341,
    lng: 105.6712,
    qr: 'QR-TS-001',
    photos: ['ảnh hiện trạng 1', 'ảnh mặt cắt'],
    valueVnd: 1250000000,
    note: 'BTXM · theo dõi PCI',
    updatedAt: '2026-07-12T08:30:00+07:00',
    source: 'manual',
  },
  {
    id: 'a2',
    code: 'TS-014',
    name: 'Cầu vượt Núi Thành',
    type: 'Cầu',
    route: 'QL.7',
    kmFrom: 'km45+100',
    kmTo: 'km45+220',
    status: 'Theo dõi',
    lat: 19.1022,
    lng: 105.5801,
    qr: 'QR-TS-014',
    photos: ['ảnh trụ cầu'],
    valueVnd: 4800000000,
    note: 'Nứt nhỏ lan can phải',
    updatedAt: '2026-06-28T14:10:00+07:00',
    source: 'manual',
  },
  {
    id: 'a3',
    code: 'TS-088',
    name: 'Biển báo giao cắt',
    type: 'Biển báo',
    route: 'QL.48C',
    kmFrom: 'km3+050',
    kmTo: 'km3+050',
    status: 'Cần bảo trì',
    lat: 19.2501,
    lng: 105.6903,
    qr: 'QR-TS-088',
    photos: ['ảnh biển'],
    valueVnd: 8500000,
    note: 'Phản quang mờ',
    updatedAt: '2026-07-01T09:00:00+07:00',
    source: 'manual',
  },
  {
    id: 'a4',
    code: 'TS-102',
    name: 'Hộ lan đoạn dốc',
    type: 'Hộ lan',
    route: 'QL.7',
    kmFrom: 'km18+400',
    kmTo: 'km18+650',
    status: 'Tốt',
    lat: 19.1804,
    lng: 105.6102,
    qr: 'QR-TS-102',
    photos: [],
    valueVnd: 92000000,
    note: '',
    updatedAt: '2026-05-20T11:20:00+07:00',
    source: 'manual',
  },
  {
    id: 'a5',
    code: 'TS-210',
    name: 'Cột Km 45',
    type: 'Cột Km',
    route: 'QL.7',
    kmFrom: 'km45+000',
    kmTo: 'km45+000',
    status: 'Tốt',
    lat: 19.1018,
    lng: 105.5795,
    qr: 'QR-TS-210',
    photos: ['QR scan'],
    valueVnd: 1200000,
    note: 'Đã gắn QR',
    updatedAt: '2026-07-18T16:45:00+07:00',
    source: 'manual',
  },
];

/** @type {AiCandidate[]} */
export const AI_SEED = [
  {
    id: 'ai1',
    type: 'Biển báo',
    route: 'QL.48C',
    km: 'km8+120',
    lat: 19.241,
    lng: 105.682,
    conf: 0.91,
    status: 'pending',
    note: 'Camera tuần đường · GPT-4o Vision · pin «AI new»',
  },
  {
    id: 'ai2',
    type: 'Cột Km',
    route: 'QL.7',
    km: 'km22+000',
    lat: 19.165,
    lng: 105.602,
    conf: 0.84,
    status: 'pending',
    note: 'candidate nearby dedupe mock',
  },
];

const LS_KEY = 'rmms-demo:asset:rows:v2';
const AI_KEY = 'rmms-demo:asset:ai:v1';
const CHK_KEY = 'tn-demo:asset:signed';

export function loadRows() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return SEED.map((r) => ({ ...r }));
}

export function saveRows(rows) {
  localStorage.setItem(LS_KEY, JSON.stringify(rows));
}

export function loadAi() {
  try {
    const raw = localStorage.getItem(AI_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return AI_SEED.map((c) => ({ ...c }));
}

export function saveAi(list) {
  localStorage.setItem(AI_KEY, JSON.stringify(list));
}

export function loadChecklist() {
  try {
    return JSON.parse(localStorage.getItem(CHK_KEY) || '{}');
  } catch (_) {
    return {};
  }
}

export function saveChecklist(obj) {
  localStorage.setItem(CHK_KEY, JSON.stringify(obj));
}

/** Parse rough km string → number for filter (km12+300 → 12.3) */
export function parseKm(s) {
  if (!s) return null;
  const m = String(s)
    .trim()
    .toLowerCase()
    .match(/km\s*(\d+)(?:\+(\d+))?/);
  if (!m) return null;
  const whole = Number(m[1]);
  const meters = m[2] ? Number(m[2]) / 1000 : 0;
  return whole + meters;
}

/**
 * @param {AssetRow[]} rows
 * @param {{ treeQ: string; kmFrom: string; kmTo: string; type: string; route: string; q: string; visibleRoutes: Set<string> }} f
 */
export function filterRows(rows, f) {
  const from = parseKm(f.kmFrom);
  const to = parseKm(f.kmTo);
  const treeQ = (f.treeQ || '').trim().toLowerCase();
  const q = (f.q || '').trim().toLowerCase();
  return rows.filter((r) => {
    if (f.visibleRoutes && !f.visibleRoutes.has(r.route)) return false;
    if (f.route && r.route !== f.route) return false;
    if (f.type && r.type !== f.type) return false;
    if (treeQ) {
      const hay = `${r.code} ${r.name} ${r.route} ${r.type}`.toLowerCase();
      if (!hay.includes(treeQ) && !r.route.toLowerCase().includes(treeQ)) return false;
    }
    if (q) {
      const hay = `${r.code} ${r.name} ${r.route} ${r.type} ${r.kmFrom} ${r.status} ${r.qr}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    const rf = parseKm(r.kmFrom);
    const rt = parseKm(r.kmTo) ?? rf;
    if (from != null && rt != null && rt < from) return false;
    if (to != null && rf != null && rf > to) return false;
    return true;
  });
}

export function genCode(n) {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `TS-${ymd}-${String(n + 1).padStart(3, '0')}`;
}

export function formatMoney(n) {
  return new Intl.NumberFormat('vi-VN').format(n || 0) + ' ₫';
}

export function formatLocal(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('vi-VN');
  } catch (_) {
    return iso;
  }
}
