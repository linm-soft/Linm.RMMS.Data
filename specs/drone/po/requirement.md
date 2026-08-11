# PO — drone (Drone / Reality Capture)

| Field | Value |
|-------|-------|
| feature | `drone` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** CatalogListShell + **D** Slideout form (+ viewer stub) |
| status | `confirmed` (autopilot · task_e4372bbe) |
| updatedAt | 2026-08-09T15:30:00.000Z |

## 1. Goal

Align demo Signed **Drone / Reality Capture** → MFE `Linm.Web.RMMS.Drone` + BE `Linm.RMMS.WebService` domain **Drone** (`api/v1/drone/scans`). List catalog parity + form Create/Edit/View/Copy + process/upload stubs.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B+D + KPI + artifacts + viewer stub | SSOT UX giữ |
| MFE list | Plain `<table>` scaffold | `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · search · row menu · LAYOUT-06 |
| MFE form | Placeholder card | Kind D fields (header + output keys + artifact lines) · C/E/V/Copy |
| API client | stub `/drone` code/description | `/drone/scans` + localStorage fallback |
| BE | health-only | scans CRUD · artifacts · process stub · **cấm ERP.*** |

## 3. Personas / DoD

- Persona: Hạt trưởng · Kỹ thuật cầu · GIS · AI Vision ops
- DoD:
  1. List load + **search work** (mã/tên/tuyến/phi công) + filter loại bay / TT / đơn vị
  2. Toolbar: Làm mới · Lịch sử · config `fa-cog` · **+ Tạo scan**
  3. Row menu: Xem · Sửa · Sao chép · Upload · Process · Viewer stub · Lịch sử
  4. View = `readOnly` (không disabled xám)
  5. Form validate name* · flightType* · road* · save
  6. Artifact lines pattern_inline_grid
  7. FE build + typecheck PASS · BE Release build PASS
  8. `mfeStdRoute=/drone` · `mfeStdUrl=http://localhost:9313/drone`

## 4. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/drone.md` |
| Demo | `Demo/.../drone/drone.html` + `js/drone-*.js` |
| controlHint | `specs/_data-analy/features/drone-control-hint.md` |
| MFE | `Linm.Web.RMMS.Drone` |

### List columns

STT · Mã · Tên nhiệm vụ · Loại bay · Tuyến · Đơn vị · Ngày bay · km² · TT · Artifacts · actions

### Form fields (required *)

code (readonly) · name* · flightType* · purpose · road* · structure · office · device · pilot · flightDate · start/end · areaKm2 · photoCount · status · output keys · note · artifact lines

## 5. Out of scope

- Cesium 3D Tiles live (P3) — modal stub only
- PDAL/WebODM worker real — process mock
- Event `drone.scan.completed` bus — DEFER
- ERP.* / Domains/Master

## 6. Handoff → Design

- Kind B zones A–D · prototype + reviewUrl
- Form Z1–Z3 slideout pattern (page form OK if MFE pattern matches AiVision)
- controlHint: SearchTextInput · Dropdown enums · Text

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| versionGate | ok |
| generatedAt | 2026-08-09T15:30:00.000Z |
