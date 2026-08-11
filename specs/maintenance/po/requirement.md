# PO — maintenance (Lập lịch sửa chữa / bảo trì)

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list Công việc + **Kind D Slideout** WO · Kind E report = DEFER/stub KPI |
| status | `confirmed` (autopilot · task_e4d75335) |
| updatedAt | 2026-08-10T00:20:00.000Z |

## 1. Goal

Chỉnh **Lập lịch sửa chữa / bảo trì** từ demo mock → list catalog parity (erp-form-context Kind B) + form Slideout Kind D cho **Work Order**. Align demo → MFE `Linm.Web.RMMS.Maintenance` · BE `Linm.RMMS.WebService` domain **Maintenance**.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind E report + Kind D WO · 69 actions · no BE | Giữ SSOT UX list/form; pack ưu tiên **list + form** (Kind E KPI DEFER stub) |
| MFE | Scaffold table `/maintenance` | `LinPageLayout kind=catalog` · pagination · row menu |
| MFE form | Placeholder FormPage | Create / Edit / View / Copy — slideout Z1–Z3 |
| API client | stub `/maintenance` | `/maintenance/work-orders` |
| BE | Health-only domain scaffold | Greenfield `api/v1/maintenance/work-orders` + BFF (**cấm** ERP.* · `/rmms/`) |

## 3. Personas / DoD

- Persona: Hạt trưởng · đội SC · Ban QLDA
- DoD:
  1. List load + **search work** (mã/tuyến/loại/đội/cán bộ)
  2. Toolbar: Tạo mới · Làm mới · filter status (+ workType optional)
  3. Row menu: Xem · Sửa · Sao chép · Cập nhật tiến độ · Nghiệm thu (stub P2)
  4. View = `readOnly` (không disabled xám)
  5. Create/Edit/Copy form validate + save · IdCode `WO-YYYYMMDD-NNNN`
  6. routeName · workType · status · dueAt bắt buộc · leave-confirm dirty
  7. FE `yarn build` + `typecheck` PASS
  8. BE build PASS · domain Maintenance only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-MNT | `docs/context/features/maintenance.md` | WO · progress · summary KPI |
| DEM-MNT | `Demo/.../maintenance-demo.html` → `maintenance/maintenance.html` | Fields · actions · **không** clone chrome |
| DI-MNT | — | No Excel this pack |

### List columns (required)

STT · Mã · Tuyến · Loại · Đội · Cán bộ · Hạn · Trạng thái · Tiến độ · actions

### Form fields (required *)

code (readonly IdCode) · title · routeName* · workType* · status* · teamName · assigneeName · dueAt* · progressPercent · slaHours · incidentId · description · note

### Status values

new · in_progress · awaiting_accept · done

### Work type values

periodic · from-incident · bdtx

### controlHint (synthetic · no Excel cluster)

| Field | controlHint | Notes |
|-------|-------------|-------|
| title | Text | Tiêu đề / mô tả ngắn |
| routeName | Dropdown | Tuyến đường |
| workType | Dropdown | Định kỳ / Từ sự cố / BDTX |
| status | Dropdown | Mới / Đang XL / Chờ NT / Xong |
| teamName | Text | Đội SC |
| assigneeName | Text | Cán bộ |
| dueAt | DateTime | Hạn hoàn thành |
| progressPercent | Number | 0–100 |
| incidentId | Text | Link sự cố optional |
| description | Text | textarea |
| note | Text | Ghi chú tiến độ |

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

- Kind E full report charts live — DEFER (KPI strip stub OK)
- Bảng tổng hợp nhanh tree 014 — DEFER
- Comment / Progress media entity tables — DEFER (UI stub OK)
- SLA escalation Workflow full — stub / DEFER
- 69 GOVOne tools chrome — skip

## 7. Handoff → Design

- Kind B catalog list + Kind D Slideout form
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path visual SSOT: `maintenance-demo.html` → `maintenance/maintenance.html`
- BE domain **Maintenance** · route `api/v1/maintenance/work-orders`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T00:20:00.000Z |
| versionGate | rechecked |
