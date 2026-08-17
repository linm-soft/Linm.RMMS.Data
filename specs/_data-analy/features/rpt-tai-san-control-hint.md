# Data-analy — controlHint — rpt-tai-san (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tai-san` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-tai-san-context-20260816` |
| analyzedAt | `2026-08-16T17:20:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_2bd835ed` |
| autoApprove | `ON` |
| sourceFeature | `asset` |
| sourceFormReady | **yes** (`specs/asset/STATUS.md` T-UI-LIST-01 **done** · T-BE-01 **done** · `rmms_road_assets`) |
| sourceTables | `rmms_road_assets` (`RoadAssetEntity`) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent list pack `asset` — **cấm** copy CRUD.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-tai-san.md` |
| Form nguồn | `docs/context/features/asset.md` · list MFE Asset `/asset` |
| Entity | `RoadAssetEntity` → table `rmms_road_assets` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «BC Tài sản» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput hạng mục/tuyến/TT · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · drill `/asset?id=` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| type | Hạng mục | `SearchInput` | enum hạng mục P1 (`Item` DTO) |
| routeId | Tuyến | `SearchInput` | **road-route** |
| status | Trạng thái | `SearchInput` | Tốt / Theo dõi / Cần bảo trì (`RoadAssetEntity.Status`) |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `UpdatedAt` |
| qSearch | Tìm kiếm | `Input` | tuyến · hạng mục · TT |

## Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| tuyến | `Route` | `rmms_road_assets` |
| hạng mục | `Name` / `Type` (P1 DTO `Item` aggregate) | same |
| SL | read-model `Qty` (P1 seed Report; entity không cột Qty) | Report DTO |
| ĐVT | read-model `Unit` | Report DTO |
| trạng thái | `Status` → DTO `Condition` | same |
| cập nhật | `UpdatedAt` | same |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/assets` |
| Excel | `GET api/v1/report/assets/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| hạng mục / TT | enum seed FE P1 (khớp `RoadAssetEntity.Status` + hạng mục seed) |

Perm stub: `report.tai-san.read`. Context `api/v1/reports/assets` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/tai-san` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
