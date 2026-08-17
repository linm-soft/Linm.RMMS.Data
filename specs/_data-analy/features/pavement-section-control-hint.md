# Data-analy — controlHint — pavement-section (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| packKind | `list` |
| mode | `feature_context` (edit_page · **no Excel** · demo + context + live MFE) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `rechecked` |
| contentHash | `sha256:pavement-section-delta-pci-20260816` |
| headerFingerprint | `sha256:pavement-section-header-v2-pci` |
| analyzedAt | `2026-08-16T00:25:00.000Z` |
| cluster | — (không Excel header · synthetic Biểu 1) |
| taskId | `task_6a731526` |
| autoApprove | `ON` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Asset** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/pavement-sections`.

## Sources

| Source | Path | Note |
|--------|------|------|
| Context | `docs/context/features/pavement-section.md` | Kind B · Biểu 1 |
| Control map | `docs/context/features/pavement-section-control-map.md` | list + form |
| Demo | `Linm.RMMS.Demo/src/demo/features/pavement-section-demo.html` | content-only A–D + full form |
| MFE live | `Linm.Web.RMMS.Asset` · `/asset/pavement-section` | list + `PavementSectionFormPage` |
| Report gap | `specs/_form-type/REPORT-SOURCE-FIELD-GAPS.md` | **GAP-RPT-SRC-PAV-01** |
| Shared catalogs | `INVESTIGATE-CUC2.md` · org-unit · road-route | APPROVED A |

Normalized header (no Excel):

`code|roadName|provinceName|kmFrom|kmTo|lengthKm|baseWidthM|surfaceWidthM|structureType|surfaceThicknessCm|roadClass|yearsInService|handoverMaintenance|handoverConstruction|lastMajorRehabYear|lastSurfaceRepairYear|status|constructionUnit|manageUnit|ownerUnit|notes|pci|layerCode|measuredAt|updatedAt|updatedBy`

## § Delta Current vs New (`edit_page`)

Giữ PO/Design/SA artifacts đã confirmed. Delta **bắt buộc** task_6a731526:

| ID | Current (MFE/BE 2026-08-15) | New (SSOT) | Surface |
|----|-----------------------------|------------|---------|
| GAP-RPT-SRC-PAV-01 | Entity/DTO/form **không** PCI · lớp · ngày đo | `Pci` · `LayerCode` · `MeasuredAt` trên `rmms_pavement_sections` + form + lưới | form + list + BE |
| GAP-LIST-FILTER-ROAD | List MFE thiếu filter Tên đường / Từ Km–Đến Km (BE đã có query) | Zone B: `road` Text + `kmFrom`/`kmTo` Number · GET `?road=&kmFrom=&kmTo=` | list |
| GAP-SCHEMA-SEED | `CatalogUiSchemaRegistry` **không** `pavement-sections` | Seed Kind B cột list + Pci/Layer/MeasuredAt | BE Integration |
| GAP-VIEW-DL | View vẫn Input + `viewDisabled` | View = display `<dl>` (không Input disabled xám) | form |

**Không** đổi: Kind B · Full page form · IdCode `MD-*` · SearchInput tỉnh/kết cấu/cấp/tình trạng · LinPageLayout A–D · `LinCatalogUiSchemaEditorModal` · route Asset.

Excel import/export · History API · `[RequirePermission]` — **OUT pack** (giữ debt).

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Phân loại mặt đường (Biểu 1)» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchText + SearchInput tỉnh/tình trạng · Text đường · Number km · Tạo mới · Refresh · config · delete |
| C | `LinCatalogDataGrid` | kéo cột default ON · cột Pci · Lớp · Ngày đo |
| D | Footer | `LinCatalogListPagination` |
| Form | Kind B full-page | C/E/V/Copy · **cấm** Resource/Slideout/View=disabled xám |
| F | Schema editor | `LinCatalogUiSchemaEditorModal` |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên đường |
| province | Tỉnh | `SearchInput` | **province** (master constants) | **cấm** native select |
| road | Tên đường | `Text` | text | GET `road=` |
| status | Tình trạng | `SearchInput` | **pavement-status** | Tốt · Đang TC · Theo dõi · Hư hỏng |
| kmFrom | Từ Km | `Text` (number) | chainage | GET `kmFrom=` |
| kmTo | Đến Km | `Text` (number) | chainage | GET `kmTo=` |
| fromDate / toDate | Ngày cập nhật | Date range | — | `LinErpListFilterBar` |

## Control hint — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` | auto | IdCode `MD-yyyyMMdd-nnnn` readonly |
| roadName | Tên đường | `Text` | * | |
| provinceName | Tỉnh | `SearchInput` | * | master tỉnh |
| kmFrom / kmTo | Từ/Đến Km | `Text` (number) | * | KmTo ≥ KmFrom |
| lengthKm | Chiều dài | `Text` (number) | | tính hoặc nhập |
| baseWidthM / surfaceWidthM | B nền / B mặt | `Text` (number) | | |
| structureType | Loại kết cấu | `SearchInput` | * | BTN/BTXM/… |
| surfaceThicknessCm | Dày mặt | `Text` (number) | | |
| roadClass | Cấp đường | `SearchInput` | | I–IV |
| yearsInService | Số năm | `Text` | | |
| handoverMaintenance / Construction | Bàn giao | `Checkbox` | | |
| lastMajorRehabYear / lastSurfaceRepairYear | Năm đại tu / SC | `Text` (year) | | |
| status | Tình trạng | `SearchInput` | * | |
| pci | PCI | `Text` (number 0–100) | | **NEW** · nguồn báo cáo tình trạng MD |
| layerCode | Lớp GIS | `SearchInput` | | **NEW** · default `mat-duong` |
| measuredAt | Ngày đo | `Date` | | **NEW** |
| constructionUnit / manageUnit / ownerUnit | Đơn vị | `Text` | manage * | |
| notes | Ghi chú | `Text` | | |
| updatedAt / updatedBy | Audit | display | | readonly |

## Lookup API (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| province | FE master `PROVINCES` | P1 constants |
| pavement-status | FE master `STATUS_OPTIONS` | |
| structure-type | FE master `STRUCTURE_TYPES` | |
| road-class | FE master `ROAD_CLASSES` | |
| gis-layer | FE master `LAYER_CODES` | `mat-duong` default · map live |

CRUD: `GET/POST/PUT/DELETE api/v1/asset/pavement-sections` · BFF proxy unchanged (body passthrough).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T00:25:00.000Z |
| versionGate | rechecked |
