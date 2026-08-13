# PO — attendance (Chấm công và định vị)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list + Slideout form (pack list); demo giữ Kind E+D map/report |
| status | `confirmed` (autopilot · task_b83eaaf1) |
| updatedAt | 2026-08-09T01:55:00.000Z |

## 1. Goal

Chỉnh trang **Chấm công và định vị** từ demo mock → list catalog parity (Linm erp-form-context Kind B): shell · toolbar · search work · row menu · View readonly · Create/Edit/Copy form work. Align demo → MFE `Linm.Web.RMMS.Field` · BE `Linm.RMMS.WebService` domain **Patrol**.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind E report + Leaflet + Kind D zone (Signed) | Giữ SSOT UX demo; pack ưu tiên **list + form** |
| MFE | Không có route attendance (chỉ mock Patrol list) | `LinPageLayout kind=catalog` · `/patrol/attendance` · pagination · row menu |
| MFE form | — | Create / Edit / View / Copy — log chấm công + InZone |
| API client | — | `/patrol/attendance-logs` + DTO |
| BE | Health only | Greenfield `api/v1/patrol/attendance-logs` + BFF (**cấm** ERP.* · `/rmms/`) |

## 3. Personas / DoD

- Persona: Tuần đường · Hạt trưởng · kế toán công
- DoD:
  1. List load + **search work** (mã/NV/tuyến/status)
  2. Toolbar: Tạo mới · Làm mới · filter InZone
  3. Row menu: Xem · Sửa · Sao chép
  4. View = `readOnly` (không disabled xám)
  5. Create/Edit/Copy form validate + save
  6. FE `yarn build` + `typecheck` PASS
  7. BE build PASS · domain Patrol only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-ATT | `docs/context/features/attendance.md` | API · entities · Kind E+D demo · list pack Kind B |
| DEM-ATT | `Demo/.../attendance-demo.html` → `patrol/attendance.html` | Columns · zone · InZone · **không** clone chrome |
| DI-ATT | — | Import Excel **out of pack** |

### List columns (required)

STT · Mã · Nhân viên · Tuyến · Thời điểm · Lý trình · InZone · Trạng thái · GPS · actions

### Form fields (required *)

code (readonly IdCode) · userName* · route* · checkInAt* · kmPoint · lat* · lng* · inZone · status* · note

### Status values

Đúng tuyến · Lệch zone · Thiếu điểm

### controlHint (synthetic · no Excel cluster)

| Field | controlHint | Notes |
|-------|-------------|-------|
| userName | Text | Free text P1 |
| route | Text | QL./ĐT. |
| checkInAt | Date | datetime-local |
| status | Dropdown | 3 values |
| inZone | Dropdown | true/false |
| lat/lng | Text | number |
| kmPoint | Text | |
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

- Full Leaflet map shell (Kind E/F) — keep demo; MFE map strip optional later
- Face ID / NFC (DEFER)
- Live PostGIS geo-fence validate endpoint (P1 stub InZone flag on form)
- Excel export wizard

## 7. Handoff → Design

- Kind B catalog list + form Slideout
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path visual SSOT: `attendance-demo.html` → `patrol/attendance.html`
- BE domain **Patrol** · route `api/v1/patrol/attendance-logs`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T01:55:00.000Z |
| versionGate | rechecked |
