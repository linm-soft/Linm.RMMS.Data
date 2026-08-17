# Data-analy — controlHint — maintenance (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| packKind | `list` |
| mode | `feature_context` (retry `roleOnly=data_analy` · **no Excel** · demo + context) |
| status | `done` |
| changeScope | `edit_page` · NEW task `task_7dc4b841` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.09.02` |
| rulesVersion | `2026.08.09.02` |
| versionGate | `rechecked` |
| analyzedAt | `2026-08-15T17:20:00.000Z` |
| taskId | `task_7dc4b841` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.

## § Delta Current vs New (`edit_page`)

| Surface | Current (task_d4dee8dc) | New (this task) |
|---------|-------------------------|-----------------|
| Zone F config | `configHint` dialog placeholder | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · bảng cột List/width/filter/sort/Thêm cột |
| Grid columns | leftover `const columns` + `LinCatalogDataColumn[]` | `useCatalogUiSchema` + `columns={buildDynamicGridColumns(schema, uiColumns)}` |
| BE schema | không seed `work-orders` | `CatalogUiSchemaRegistry` + `CatalogUiSchemaSeed` kind=`work-orders` |
| List shell A–D | PASS | **keep** — 1× `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` |
| Form C/E/V/Copy | PASS full-page | **keep** — cấm Resource/Slideout/View=Input readOnly |
| Filter B | SearchTextInput + SearchInput status/workType | **keep** |
| GAP | GAP-P2-CC-06 / GAP-DEV-CONFIG-PLACEHOLDER-01 / GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | **CLOSE** |
| GAP-RPT-SRC-WO-01 | Quantity + UnitCode trên `rmms_work_orders` (report source) | **out of this list pack** — giữ blocker report |

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/maintenance.md` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/maintenance-demo.html` → `maintenance/maintenance.html` |
| MFE list | `Linm.Web.RMMS.Field` `/maintenance` |
| BE | `Linm.RMMS.WebService` domain **Maintenance** + Integration ui-schema |

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Lập lịch sửa chữa / bảo trì» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput · SearchInput status/workType · Tạo mới · Refresh · History · **schema config** · search live |
| C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Xóa/Lịch sử/Tiến độ/Nghiệm thu |
| D | Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table |
| F | Config | `LinCatalogUiSchemaEditorModal` · kind=`work-orders` — **cấm** `LinListTableConfigModal` làm editor cột · **cấm** `configHint` |
| Form | Kind B full-page | C/E/V/Copy · View = display (không Input readOnly) · leave-confirm dirty |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tuyến · loại · đội · cán bộ |
| status | Trạng thái | `SearchInput` | **work-order-status** | new · in_progress · done · cancelled |
| workType | Loại | `SearchInput` | **work-type** | repair · inspect · emergency |

## Control hint — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` | auto | IdCode `WO-YYYYMMDD-NNNN` |
| title | Tiêu đề | `Text` | | |
| routeName | Tuyến | `Text` | * | |
| workType | Loại | `SearchInput` | * | master work-type |
| status | Trạng thái | `SearchInput` | * | master status |
| teamName | Đội | `Text` | | |
| assigneeName | Cán bộ | `Text` | | |
| dueAt | Hạn | `Date` | * | datetime-local |
| progressPercent | Tiến độ | `Text` (number) | | 0–100 |
| slaHours | SLA (giờ) | `Text` (number) | | |
| incidentId | Sự cố | `Text` | | |
| description | Mô tả | `Text` | | multiline |
| note | Ghi chú | `Text` | | |

## Lookup APIs (đề xuất SA — **đã Signed** work-orders)

Domain **Maintenance** · prefix `api/v1/maintenance` · BFF `web-bff/api/v1/maintenance` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| list | `GET /api/v1/maintenance/work-orders?search=&status=&workType=&page=&pageSize=` | Zone B + grid |
| by id | `GET /api/v1/maintenance/work-orders/{id}` | form View/Edit |
| create / update | `POST` / `PUT …/work-orders` | form Create/Edit/Copy |
| soft delete | `DELETE …/work-orders/{id}` | |
| progress | `POST …/work-orders/{id}/progress` | row menu |
| complete | `POST …/work-orders/{id}/complete` | row menu stub |
| ui-schema | `GET/PUT /api/v1/integration/catalogs/work-orders/ui-schema` | Zone F |

Entity: `WorkOrderEntity` · `rmms_work_orders` · SHARE=tenant_keep.

## Handoff

→ **PO:** keep prior artifacts · delta = Zone F schema editor only  
→ **Design:** A–D keep · F = `LinCatalogUiSchemaEditorModal` · `autoApprove=ON` → confirm  
→ **SA:** seed `work-orders` trên Integration CatalogUiSchemaRegistry · **cấm** ERP.*  
→ **TL:** T-UI-LIST-CONFIG-01 · T-BE-UISCHEMA-01  
→ **Dev:** cấm `configHint` / leftover `const columns`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-15T17:20:00.000Z |
| versionGate | rechecked |
