# PO — maintenance (Lập lịch sửa chữa / bảo trì)

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list Công việc + **full-page form** C/E/V/Copy · Kind **E** KPI = DEFER/stub |
| status | `done` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/maintenance-control-hint.md` |
| taskId | `task_8a796370` |
| autoApprove | `OFF` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/maintenance` · `http://localhost:9304/maintenance` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/maintenance/work-orders`** + **`api/v1/integration/catalogs/work-orders/ui-schema`** (**cấm ERP.***) |
| updatedAt | `2026-08-15T17:20:00.000Z` |

## 1. Goal

Chốt yêu cầu **Kind B list** Lập lịch sửa chữa / bảo trì: giữ shell A–D + form full-page; **delta pack này** = Zone F **`LinCatalogUiSchemaEditorModal`** (catalogKind=`work-orders`) đóng GAP `configHint` / leftover static columns. Align demo → MFE Field · BE domain **Maintenance** (+ Integration ui-schema).

## 2. Current → New (`edit_page`)

Nguồn SSOT: control-hint `feature_context` (no Excel) + `docs/context/features/maintenance.md`.

| Layer | Current | New (delta this pack) |
|-------|---------|------------------------|
| List A–D | 1× `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` | **keep** |
| Zone F | `configHint` placeholder / `LinListTableConfigModal` (height only) | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · bảng cột List/width/filter/sort/Thêm cột · `useCatalogUiSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}` |
| Grid columns | leftover `const columns` / `LinCatalogDataColumn[]` | schema-driven only (bootstrap `uiColumns` OK) |
| Form | full-page C/E/V/Copy | **keep** — **cấm** Resource / Kind D Slideout / View=`Input` readOnly |
| Filter B | SearchTextInput + SearchInput status/workType | **keep** |
| BE WO | `api/v1/maintenance/work-orders` | **keep** |
| BE schema | thiếu seed `work-orders` | `CatalogUiSchemaRegistry` + Seed kind=`work-orders` |
| Kind E KPI | stub | **DEFER** (out of list pack) |
| GAP-RPT-SRC-WO-01 | Quantity + UnitCode trên WO (report source) | **out of this list pack** |

## 3. Personas / DoD

- Persona: Hạt trưởng · đội SC · Ban QLDA
- DoD (list pack):
  1. List load + search live (mã/tuyến/loại/đội/cán bộ) → page=1
  2. Zone B: Tạo mới · Làm mới · History stub · SearchInput status + workType · **Zone F schema config**
  3. Zone A title «Lập lịch sửa chữa / bảo trì» — **cấm** Thêm mới trên A
  4. Row menu: Xem · Sửa · Sao chép · Xóa · Lịch sử · Cập nhật tiến độ · Nghiệm thu (stub P2)
  5. Form full-page Create/Edit/View/Copy · View = **display** (không Input readOnly) · leave-confirm dirty
  6. IdCode `WO-YYYYMMDD-NNNN` · required: routeName · workType · status · dueAt
  7. **Cấm** `configHint` · **cấm** `LinListTableConfigModal` làm editor cột · **cấm** leftover `const columns` sau đổi import
  8. FE `yarn build` + `typecheck` PASS · BE `dotnet build` PASS khi đụng API · domain Maintenance + Integration only (**cấm ERP.***)

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-MNT | `docs/context/features/maintenance.md` | WO · progress · summary KPI stub |
| DEM-MNT | `Linm.RMMS.Demo/src/demo/features/maintenance-demo.html` | Fields/actions · **không** clone chrome |
| DA-MNT | `specs/_data-analy/features/maintenance-control-hint.md` | controlHint SSOT → Design chốt · SA chốt lookup |
| DI-MNT | — | No Excel this pack |

### List columns (required bootstrap)

STT · Mã · Tuyến · Loại · Đội · Cán bộ · Hạn · Trạng thái · Tiến độ · actions  
(User có thể ẩn/hiện/width/filter/sort qua Zone F.)

### Form fields (required *)

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã | `Text` (auto IdCode) | auto |
| title | Tiêu đề | `Text` | |
| routeName | Tuyến | `Text` | * |
| workType | Loại | `SearchInput` · catalog **work-type** | * |
| status | Trạng thái | `SearchInput` · catalog **work-order-status** | * |
| teamName | Đội | `Text` | |
| assigneeName | Cán bộ | `Text` | |
| dueAt | Hạn | `Date` (datetime-local) | * |
| progressPercent | Tiến độ | `Text` (number 0–100) | |
| slaHours | SLA (giờ) | `Text` (number) | |
| incidentId | Sự cố | `Text` | |
| description | Mô tả | `Text` multiline | |
| note | Ghi chú | `Text` | |

### Lookup values (data-analy — Design/SA chốt)

| Catalog | Values |
|---------|--------|
| work-order-status | `new` · `in_progress` · `done` · `cancelled` |
| work-type | `repair` · `inspect` · `emergency` |

### Lookup APIs (đề xuất SA — **cấm ERP.***)

| Lookup | API |
|--------|-----|
| list | `GET /api/v1/maintenance/work-orders?search=&status=&workType=&page=&pageSize=` |
| by id | `GET /api/v1/maintenance/work-orders/{id}` |
| create / update | `POST` / `PUT …/work-orders` |
| soft delete | `DELETE …/work-orders/{id}` |
| progress | `POST …/work-orders/{id}/progress` |
| complete | `POST …/work-orders/{id}/complete` (stub P2) |
| ui-schema | `GET/PUT /api/v1/integration/catalogs/work-orders/ui-schema` |

Entity: `WorkOrderEntity` · table `rmms_work_orders` · SHARE=tenant_keep.

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status/workType filter apply → page=1 |
| AC-G-03 | Row menu View/Edit/Copy/Delete/History/Progress/Complete-stub |
| AC-G-04 | `LinCatalogDataGrid` + column resize default ON · schema columns |
| AC-G-05 | Footer `LinCatalogListPagination` pageSize 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`work-orders` — **cấm** `LinListTableConfigModal` editor cột · **cấm** `configHint` |

## 6. Out of scope (this pack)

- Kind E full report charts live — DEFER (KPI strip stub OK)
- Bảng tổng hợp nhanh tree 014 — DEFER
- Comment / Progress media entity tables — DEFER (UI stub OK)
- SLA escalation Workflow full — stub / DEFER
- 69 GOVOne tools chrome — skip
- **GAP-RPT-SRC-WO-01** Quantity + UnitCode — report pack

## 7. Handoff → Design

- Kind B catalog list + **full-page** form (cấm Slideout Kind D)
- Prototype **content-only** zones **A–D** (+ Zone F config modal) · skip note/sidebar/menu/chrome · **reviewUrl** bắt buộc
- `autoApprove=OFF` → Design dừng `await_confirm` · user Approve board → chain SA
- Demo visual SSOT: `maintenance-demo.html`
- BE domain **Maintenance** · Integration ui-schema · **cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-15T17:20:00.000Z |
| versionGate | rechecked |
