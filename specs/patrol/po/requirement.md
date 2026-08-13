# PO — patrol (Tuần đường / tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list + Slideout form (pack list); demo giữ Kind E map/report |
| status | `confirmed` (autopilot · task_760475f2) |
| updatedAt | 2026-08-10T01:30:00.000Z |

## 1. Goal

Chỉnh trang **Tuần đường / tuần kiểm** từ demo mock → list catalog parity (Linm erp-form-context Kind B): shell · toolbar · search work · row menu · View readonly · Create/Edit/Copy form work. Align demo → MFE `Linm.Web.RMMS.Field` · BE `Linm.RMMS.WebService` domain **Patrol**.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind E report + Leaflet + KPI (Signed) | Giữ SSOT UX demo; pack ưu tiên **list + form** phiên tuần tra |
| MFE | Mock KPI + 3 check-in rows · form scaffold | `LinPageLayout kind=catalog` · `/patrol` · pagination · row menu |
| MFE form | Scaffold “Quay lại” | Create / Edit / View / Copy — phiên tuần (type · check-in count · coverage) |
| API client | `/patrol` CRUD scaffold unused | `/patrol/sessions` + DTO |
| BE | Health + attendance-logs only | Greenfield `api/v1/patrol/sessions` + BFF (**cấm** ERP.* · `/rmms/`) |

## 3. Personas / DoD

- Persona: Tuần đường · Hạt trưởng giám sát
- DoD:
  1. List load + **search work** (mã/NV/tuyến/loại/status)
  2. Toolbar: Tạo mới · Làm mới · filter trạng thái
  3. Row menu: Xem · Sửa · Sao chép
  4. View = `readOnly` (không disabled xám)
  5. Create/Edit/Copy form validate + save
  6. FE `yarn build` + `typecheck` PASS
  7. BE build PASS · domain Patrol only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-PAT | `docs/context/features/patrol.md` | API · GPS/coverage P2 · list pack Kind B |
| DEM-PAT | `Demo/.../patrol-demo.html` → `patrol/patrol.html` | Columns · modes · **không** clone chrome |
| DI-PAT | — | Export Excel **out of pack** |

### List columns (required)

STT · Mã · Nhân viên · Tuyến · Loại tuần · Ngày KH · Check-in · Coverage % · Trạng thái · Offline · actions

### Form fields (required *)

code (readonly IdCode) · userName* · route* · patrolType* · plannedDate* · startedAt · checkInCount* · coveragePercent · status* · offlineQueued · note

### Status values

Đang tuần · Hoàn thành · Bỏ sót · Offline queue

### Patrol type values

Tuần đường · Tuần kiểm

### controlHint (synthetic · no Excel cluster)

| Field | controlHint | Notes |
|-------|-------------|-------|
| userName | Text | Free text P1 |
| route | Text | QL./ĐT. |
| patrolType | Dropdown | 2 values |
| plannedDate | Date | date |
| startedAt | Date | datetime-local |
| checkInCount | Text | number ≥0 |
| coveragePercent | Text | 0–100 |
| status | Dropdown | 4 values |
| offlineQueued | Dropdown | true/false |
| note | Text | |

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status filter apply → page=1 · server/local page |
| AC-G-03 | Row menu View/Edit/Copy |
| AC-G-04 | `LinCatalogDataGrid` + column resize default ON |
| AC-G-05 | Footer `LinCatalogListPagination` pageSize 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |

## 6. Out of scope (this pack)

- Full Leaflet map shell / basemap (Kind E/F) — keep demo
- Timescale GPS tracks · PostGIS coverage compute endpoints
- Offline-batch merge conflict (GAP-F-PAT-01) — flag only
- Excel export wizard · report trees Tuần đường/Tuần kiểm

## 7. Handoff → Design

- Kind B catalog list + form Slideout
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path visual SSOT: `patrol-demo.html` → `patrol/patrol.html`
- BE domain **Patrol** · route `api/v1/patrol/sessions`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-10T01:30:00.000Z |
| versionGate | rechecked |
