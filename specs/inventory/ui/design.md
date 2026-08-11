# Design — inventory (Vật tư và thiết bị)

| Field | Value |
|-------|-------|
| feature | `inventory` |
| Feature Kind | **B+D** — Catalog list + **Slideout** form |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (`/contract/inventory`) |
| updatedAt | 2026-08-09T16:52:00.000Z |
| design_confirm | `approve` (autopilot · task_27ba5c23) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-INV | `docs/context/features/inventory.md` | API · entities · Kind B+D |
| DEM-INV | `Linm.RMMS.Demo/.../inventory-demo.html` → `contract/inventory.html` | SSOT columns/fields · **không** clone chrome |
| DI-INV | — | Excel **out of pack** |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (≥10 controls) |
| Routes | List `/contract/inventory` · form overlay · deep-link `/contract/inventory/new` · `/contract/inventory/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Vật tư & TB | list | **A Header · B Toolbar · C Grid · D Pagination** · KPI strip | SearchTextInput · category/status/warehouse Select · row menu |
| Form VT/TB | create/edit/view/copy | **Slideout** Z1 · Z2a–d · Z3 | header + GPS/BD + move lines · readOnly view |

## 3. Field inventory (cho SA)

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã VT/TB | Text readonly | — | all RO · IdCode `INV-yyyyMMdd-nnnn` |
| name | Tên | Text | * | view=RO |
| category | Loại | Select | * | view=RO |
| group | Nhóm | Select | | view=RO |
| unit | ĐVT | Select | * | view=RO |
| qtyOnHand | Tồn | Number | | view=RO |
| minQty | Tồn min | Number | | view=RO |
| unitPrice | Đơn giá | Money | | view=RO |
| stockValue | Giá trị tồn | Money RO | | all RO |
| warehouse | Kho | Select | * | view=RO |
| status | Trạng thái | Select | * | view=RO |
| receivedAt | Ngày nhập | Date | | view=RO |
| orgUnit | Đơn vị QL | Text | | view=RO |
| supplier | NCC | Text | | view=RO |
| serial | Serial/biển số | Text | | view=RO |
| model | Model | Text | | view=RO |
| gpsLat / gpsLng / gpsAt | GPS | Number / DateTime | | view=RO |
| woRef | Liên kết WO | Text | | view=RO |
| contractRef | Liên kết HĐ | Text | | view=RO |
| lastMaintAt / nextMaintAt | Bảo dưỡng | Date | | view=RO |
| fuelLiters | Nhiên liệu (L) | Number | | view=RO |
| note | Ghi chú | Textarea | | view=RO |
| moves[].kind | Loại phiếu | Select | * | view=RO |
| moves[].qty | SL | Number | * | view=RO |
| moves[].movedAt | Ngày phiếu | Date | | view=RO |
| moves[].woRef | WO phiếu | Text | | view=RO |
| moves[].note | Ghi chú phiếu | Text | | view=RO |

### List columns

STT · □ · Mã · Tên · Loại · Kho · Tồn · Giá trị · TT · GPS · WO · ⋯

### KPI strip

Giá trị tồn · Dưới mức min · Đang bảo dưỡng · GPS online

## 4. Control map / hooks

- Shell: `LinPageLayout` · `ErpListHeaderFilters` · `SearchTextInput` · `useServerPagedListLoading`
- Grid: `LinCatalogDataGrid` · resize ON · `LinCatalogRowActionMenu`
- Footer: `LinCatalogListPagination` 50/100/200/500
- Form: slideout Z1–Z3 · leave-confirm · moves inline grid

## 5. Prototype + reviewUrl

| | |
|--|--|
| Artifact | `specs/inventory/ui/prototype/inventory-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/inventory/ui/prototype/inventory-list-prototype.html` |
| Content | Zones **A–D** content-only · **skip** chrome/sidebar |

## 6. Out of scope (design)

- Full Leaflet Kind F map chrome clone — DEFER (toast / stub modal OK)
- Excel / Timescale GPS — DEFER

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:52:00.000Z |
| versionGate | rechecked |
