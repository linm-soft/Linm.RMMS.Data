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
  };
}
