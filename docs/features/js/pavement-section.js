/** Pavement section (Biểu 1) — demo store + IdCode helpers (std mode) */
export const STORAGE_KEY = 'rmms-pavement-sections';

export const SEED = [
  {
    id: '1',
    code: 'MD-20260701-0001',
    roadName: 'QL.1',
    provinceName: 'Lạng Sơn',
    kmFrom: 0,
    kmTo: 1,
    lengthKm: 1,
    baseWidthM: 23,
    surfaceWidthM: 21,
    structureType: 'BTN',
    surfaceThicknessCm: 12,
    roadClass: 'I',
    yearsInService: '6',
    handoverMaintenance: true,
    handoverConstruction: false,
    lastMajorRehabYear: 2020,
    lastSurfaceRepairYear: '',
    status: 'Đang TC',
    constructionUnit: 'Công ty XD ..',
    manageUnit: 'Khu QLĐB I',
    ownerUnit: 'Công ty …',
    notes: '',
    updatedAt: '2026-07-01T08:00:00+07:00',
    updatedBy: 'admin',
  },
  {
    id: '2',
    code: 'MD-20260701-0002',
    roadName: 'QL.1',
    provinceName: 'Lạng Sơn',
    kmFrom: 1,
    kmTo: 2,
    lengthKm: 1,
    baseWidthM: 23,
    surfaceWidthM: 21,
    structureType: 'BTXM',
    surfaceThicknessCm: 12,
    roadClass: 'II',
    yearsInService: '> 9',
    handoverMaintenance: false,
    handoverConstruction: true,
    lastMajorRehabYear: '',
    lastSurfaceRepairYear: '',
    status: 'Đang TC',
    constructionUnit: 'Công ty CP ..',
    manageUnit: 'Khu QLĐB I',
    ownerUnit: 'Công ty …',
    notes: '',
    updatedAt: '2026-07-01T08:00:00+07:00',
    updatedBy: 'admin',
  },
  {
    id: '3',
    code: 'MD-20260701-0003',
    roadName: 'QL.1',
    provinceName: 'Lạng Sơn',
    kmFrom: 2,
    kmTo: 3,
    lengthKm: 1,
    baseWidthM: 23,
    surfaceWidthM: 21,
    structureType: 'BTXM',
    surfaceThicknessCm: 12,
    roadClass: 'III',
    yearsInService: '3',
    handoverMaintenance: false,
    handoverConstruction: false,
    lastMajorRehabYear: '',
    lastSurfaceRepairYear: 2022,
    status: 'Tốt',
    constructionUnit: '',
    manageUnit: 'Khu QLĐB I',
    ownerUnit: 'Công ty …',
    notes: '',
    updatedAt: '2026-07-01T08:00:00+07:00',
    updatedBy: 'admin',
  },
  {
    id: '4',
    code: 'MD-20260715-0004',
    roadName: 'QL.7',
    provinceName: 'Nghệ An',
    kmFrom: 10,
    kmTo: 12.5,
    lengthKm: 2.5,
    baseWidthM: 12,
    surfaceWidthM: 11,
    structureType: 'BTN',
    surfaceThicknessCm: 10,
    roadClass: 'III',
    yearsInService: '4',
    handoverMaintenance: true,
    handoverConstruction: false,
    lastMajorRehabYear: 2021,
    lastSurfaceRepairYear: 2024,
    status: 'Theo dõi',
    constructionUnit: 'Nhà thầu BDTX A',
    manageUnit: 'Khu QLĐB II',
    ownerUnit: 'Cục ĐBVN',
    notes: 'Đoạn theo dõi lún nhẹ',
    updatedAt: '2026-07-15T10:30:00+07:00',
    updatedBy: 'demo-user',
  },
  {
    id: '5',
    code: 'MD-20260720-0005',
    roadName: 'ĐT.70',
    provinceName: 'Hà Nội',
    kmFrom: 0,
    kmTo: 0.8,
    lengthKm: 0.8,
    baseWidthM: 9,
    surfaceWidthM: 7.5,
    structureType: 'Cấp phối',
    surfaceThicknessCm: 8,
    roadClass: 'IV',
    yearsInService: '2',
    handoverMaintenance: false,
    handoverConstruction: true,
    lastMajorRehabYear: '',
    lastSurfaceRepairYear: '',
    status: 'Tốt',
    constructionUnit: 'Xí nghiệp XDCB',
    manageUnit: 'Sở GTVT HN',
    ownerUnit: 'UBND TP',
    notes: '',
    updatedAt: '2026-07-20T14:00:00+07:00',
    updatedBy: 'admin',
  },
];

export function loadRows() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return SEED.slice();
}

export function saveRows(rows) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}

/** IdCode format MD-YYYYMMDD-NNNN (erp-form-context Step 2e) */
export function genCode(existingCount) {
  const d = new Date();
  const ymd = d.toISOString().slice(0, 10).replace(/-/g, '');
  const n = String(existingCount + 1).padStart(4, '0');
  return `MD-${ymd}-${n}`;
}

export function filterRows(rows, filter) {
  return rows.filter((r) => {
    if (filter.search) {
      const s = filter.search.toLowerCase();
      if (!(r.code + r.roadName).toLowerCase().includes(s)) return false;
    }
    if (filter.province && r.provinceName !== filter.province) return false;
    if (filter.road) {
      const rd = filter.road.toLowerCase();
      if (!(r.roadName || '').toLowerCase().includes(rd)) return false;
    }
    if (filter.status && r.status !== filter.status) return false;
    if (filter.kmFrom !== '' && Number(r.kmTo) < Number(filter.kmFrom)) return false;
    if (filter.kmTo !== '' && Number(r.kmFrom) > Number(filter.kmTo)) return false;
    return true;
  });
}

export function buildApiPayload(mode, row) {
  return {
    method: mode === 'create' ? 'POST' : 'PUT',
    url:
      mode === 'create'
        ? '/api/v1/infra/pavement-sections'
        : `/api/v1/infra/pavement-sections/${row.id}`,
    body: row,
    _demo: true,
    _note: 'Mock payload only — không gọi BE',
  };
}
