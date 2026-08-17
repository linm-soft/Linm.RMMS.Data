# Design — maintenance (Lập lịch sửa chữa / bảo trì)

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list + **full-page** form C/E/V/Copy |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_1e3650ac`) |
| changeScope | `edit_page` |
| packKind | `list` |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/maintenance-control-hint.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (`/maintenance`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/maintenance/work-orders`** + **`api/v1/integration/catalogs/work-orders/ui-schema`** (**cấm ERP.***) |
| taskId | `task_1e3650ac` |
| updatedAt | 2026-08-15T17:45:00.000Z |
| design_confirm | **approve** (autoApprove ON) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-MNT | `docs/context/features/maintenance.md` | WO · progress · KPI stub |
| DEM-MNT | `Linm.RMMS.Demo/src/demo/features/maintenance-demo.html` | Fields/actions · **không** clone chrome |
| DA-MNT | `specs/_data-analy/features/maintenance-control-hint.md` | controlHint SSOT — Design chốt dưới đây |
| DI-MNT | — | Excel out of pack |

## 1. Kind + UI pattern (chốt)

| | |
|--|--|
| Feature Kind | **B** catalog list + form **full-page** (Kind **E** KPI = DEFER/stub) |
| List pattern | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested `CatalogListShell` |
| Form pattern | **full-page** `MaintenanceFormPage` · routes `/maintenance/new` · `/maintenance/:id` · `/maintenance/:id/edit` · `/maintenance/:id/copy` — **cấm** Resource · **cấm** Kind D Slideout · **cấm** overlay `?form=` |
| Toolbar SSOT | `catalogToolbar` + `erp-control-icon-map` |
| Badge | Công việc / WO · P2 nghiệm thu stub |
| Zone F | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · catalogKind=`work-orders` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` làm editor cột |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Danh sách Công việc | list | **A Header · B Toolbar · C Grid · D Pagination · F Schema** | SearchTextInput · SearchInput status/workType · row menu |
| Form WO | create / edit / copy | full-page Z1 title+actions · Z2 fields · Z3 footer | SearchInput + Text + Date · leave-confirm dirty |
| Form WO | view | full-page **display** (không `Input` readOnly) | labels + value text · ⋯ menu Edit/Copy |

## 3. Control map (Design chốt — không đoán Dev)

### 3.1 Zone B filters

| uiField | Label VN | Control | catalogKind | Values (chốt) |
|---------|----------|---------|-------------|---------------|
| search | Tìm kiếm | `SearchTextInput` | text | mã / tuyến / loại / đội / cán bộ · apply → page=1 |
| status | Trạng thái | `SearchInput` | **work-order-status** | `new` · `in_progress` · `done` · `cancelled` |
| workType | Loại | `SearchInput` | **work-type** | `repair` · `inspect` · `emergency` |

**Cấm** native `<select>` / `Select` trên filter status/workType.

### 3.2 Form fields

| uiField | Label VN | Control | Required | FormMode |
|---------|----------|---------|----------|----------|
| code | Mã | `Text` (auto IdCode `WO-YYYYMMDD-NNNN`) | auto | create: empty until save · view: display |
| title | Tiêu đề | `Text` | — | view=**display** |
| routeName | Tuyến | `Text` | * | view=**display** |
| workType | Loại | `SearchInput` · **work-type** | * | view=**display** (label VN) |
| status | Trạng thái | `SearchInput` · **work-order-status** | * | view=**display** |
| teamName | Đội | `Text` | — | view=**display** |
| assigneeName | Cán bộ | `Text` | — | view=**display** |
| dueAt | Hạn | `Date` (datetime-local) | * | view=**display** |
| progressPercent | Tiến độ | `Text` (number 0–100) | — | view=**display** |
| slaHours | SLA (giờ) | `Text` (number) | — | view=**display** |
| incidentId | Sự cố | `Text` | — | view=**display** |
| description | Mô tả | `Text` multiline | — | view=**display** |
| note | Ghi chú | `Text` | — | view=**display** |

**Cấm** View = `Input`/`Text` `readOnly`. Copy = create prefill, code empty (IdCode khi lưu).

### 3.3 Lookup labels VN (chốt UI)

| catalog | value | Label VN |
|---------|-------|----------|
| work-order-status | `new` | Mới |
| work-order-status | `in_progress` | Đang thực hiện |
| work-order-status | `done` | Hoàn thành |
| work-order-status | `cancelled` | Hủy |
| work-type | `repair` | Sửa chữa |
| work-type | `inspect` | Kiểm tra |
| work-type | `emergency` | Khẩn cấp |

### List columns (bootstrap schema `work-orders`)

STT · □ · **Mã** · **Tuyến** · **Loại** · **Đội** · **Cán bộ** · **Hạn** · **Trạng thái** · **Tiến độ** · ⋯

User ẩn/hiện / width / filter / sort / Thêm cột qua Zone F. Grid = `useCatalogUiSchema('work-orders')` + `columns={buildDynamicGridColumns(schema, uiColumns)}`. **Cấm** leftover `const columns` / `LinCatalogDataColumn[]` sau đổi import.

### DES-GRID

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Lập lịch sửa chữa / bảo trì» — **cấm** Thêm mới trên header |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử (stub) · **Cấu hình** (mở Zone F) · **+ Tạo mới** (navigate full-page) · filters SearchTextInput + SearchInput |
| DES-GRID-C2 | `LinCatalogDataGrid` · resize default ON · row menu: Xem · Sửa · Sao chép · Xóa · Lịch sử · Cập nhật tiến độ · Nghiệm thu (stub P2) |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| DES-GRID-F | Modal title «Cấu hình hiển thị danh mục» · bảng: cột · List (ẩn/hiện) · width · filter · sort · Thêm cột · Lưu schema PUT ui-schema |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/maintenance-list-prototype.html` |
| Zones | **A–D** + **Zone F** modal + **full-page form** (create/edit) + **full-page view display** |
| Scope | content-only (no chrome / note banner / menu / 69 GOVOne) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/prototype/maintenance-list-prototype.html` |

Prototype **không** Slideout. Click Mã / Tạo mới / Sửa → full-page trong cùng file (`data-screen`).

## 5. AC Design (align PO)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D |
| AC-G-02 | Search + status/workType → page=1 |
| AC-G-03 | Row menu View/Edit/Copy/Delete/History/Progress/Complete-stub |
| AC-G-04 | Schema columns + resize ON |
| AC-G-05 | Footer pageSize 50/100/200/500 |
| AC-G-06 | 1× LinPageLayout |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`work-orders` |
| AC-F-01 | Form full-page C/E/V/Copy · leave-confirm dirty |
| AC-F-02 | View = display · **cấm** Input readOnly |
| AC-F-03 | required: routeName · workType · status · dueAt · IdCode WO-* |

## 6. Out of scope (this pack)

- Kind E charts live — DEFER (KPI strip stub OK)
- Bảng tổng hợp nhanh tree 014 — DEFER
- Comment / Progress media tables — DEFER (UI stub OK)
- SLA escalation Workflow — stub / DEFER
- **GAP-RPT-SRC-WO-01** Quantity + UnitCode — report pack

## 7. Handoff → SA (`/agent-sa`)

- List/CRUD `api/v1/maintenance/work-orders` (+ progress / complete stub)
- ui-schema `GET/PUT api/v1/integration/catalogs/work-orders/ui-schema` · Registry + Seed kind=`work-orders`
- Lookup catalogs **work-order-status** · **work-type** (values chốt §3.3) — **cấm ERP.***
- Entity `WorkOrderEntity` · `rmms_work_orders` · SHARE=tenant_keep
- MFE Field `/maintenance` · form full-page
- `autoApprove=ON` → SA confirmed `task_1e3650ac` · next TL `/agent-team-lead`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-16T00:40:00.000Z |
| versionGate | rechecked |
