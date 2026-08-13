# PO — incident (Quản lý sự cố / Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list + **Kind D Slideout** form (map Kind F = DEFER P2) |
| status | `confirmed` (autopilot · task_ddc8f330) |
| updatedAt | 2026-08-09T16:12:00.000Z |

## 1. Goal

Chỉnh **Quản lý sự cố (Vấn đề)** từ demo mock → list catalog parity (Linm erp-form-context Kind B) + form Slideout Kind D. Align demo → MFE `Linm.Web.RMMS.Field` · BE `Linm.RMMS.WebService` domain **Incident**.

**≠** Cổng người dân (`citizen` / `citizen-incidents`) — badge/copy luôn phân biệt.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind F map + Kind D slideout · 47 actions · no BE | Giữ SSOT UX list/form; pack ưu tiên **list + form** (map DEFER) |
| MFE | Mock table DEMO | `LinPageLayout kind=catalog` · `/incident` · pagination · row menu |
| MFE form | Simple form page | Create / Edit / View / Copy — slideout Z1–Z3 |
| API client | stub `/incident` | `/incident/incidents` |
| BE | Health-only domain scaffold | Greenfield `api/v1/incident/incidents` + BFF (**cấm** ERP.* · `/rmms/`) |

## 3. Personas / DoD

- Persona: Tuần đường · tuần kiểm · Hạt · Ban QLDA
- DoD:
  1. List load + **search work** (mã/tiêu đề/đoạn/loại/mức/detection)
  2. Toolbar: Tạo mới · Làm mới · filter status (+ severity optional)
  3. Row menu: Xem · Sửa · Sao chép · (Assign/Close stub → status)
  4. View = `readOnly` (không disabled xám)
  5. Create/Edit/Copy form validate + save · IdCode `VD-YYYYMMDD-NNNN`
  6. title · routeName · incidentType · status · requestedAt bắt buộc · leave-confirm dirty
  7. FE `yarn build` + `typecheck` PASS
  8. BE build PASS · domain Incident only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-INC | `docs/context/features/incident.md` | API · multi-source · AI DET · SLA stub |
| DEM-INC | `Demo/.../incident-demo.html` → `incident/incident.html` | Fields · actions · **không** clone chrome |
| DI-INC | — | No Excel this pack |

### List columns (required)

STT · Mã · Tiêu đề · Đoạn đường · Loại · Mức độ · Trạng thái · Ngày YC · AI (detectionId) · actions

### Form fields (required *)

code (readonly IdCode) · title* · routeName* · incidentType* · status* · severity · reporterName · handleDirection · readStatus · reportStatus · assetLabel · kmStart · kmEnd · weather · requestedAt* · detectionId · description · causesCongestion · hasGps · assigneeName

### Status values

new · in_progress · closed

### Incident type values

o-ga · sat-taluy · bien-bao · khac

### Severity values

low · medium · high · critical

### controlHint (synthetic · no Excel cluster)

| Field | controlHint | Notes |
|-------|-------------|-------|
| title | Text | Tiêu đề / mô tả ngắn |
| routeName | Dropdown | Đoạn đường |
| incidentType | Dropdown | Loại vấn đề |
| status | Dropdown | Mới / Đang XL / Đã đóng |
| severity | Dropdown | Mức độ |
| requestedAt | DateTime | Ngày yêu cầu |
| detectionId | Text | DET-* optional |
| description | Text | textarea |
| causesCongestion | Checkbox | Gây tắc đường |
| hasGps | Checkbox | Định vị GPS |

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

- Leaflet map / basemap live — DEFER (Kind F)
- Full SLA escalation Workflow — stub / DEFER
- Citizen / tổng đài public portal — N/A (≠ citizen)
- Comment entity table + related WO — DEFER (UI stub OK)
- 47 GOVOne tools chrome — skip

## 7. Handoff → Design

- Kind B catalog list + Kind D Slideout form
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path visual SSOT: `incident-demo.html` → `incident/incident.html`
- BE domain **Incident** · route `api/v1/incident/incidents`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:12:00.000Z |
| versionGate | rechecked |
