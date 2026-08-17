# Data-analy — controlHint — rpt-kiem-tra-cau (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-kiem-tra-cau` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-kiem-tra-cau-context-20260816` |
| analyzedAt | `2026-08-16T07:00:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_5462552a` |
| autoApprove | `ON` |
| sourceFeature | `csdl-so-sach` (Mẫu 5 — lý lịch cầu + phiếu KT) |
| sourceFormReady | **yes** — cột entity chốt tại `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.5 (không TBD / Col1–Col3) |
| sourceTables | `BridgePassport` · `BridgeInspection` · `BridgeInspectionLine` |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent list pack `csdl-so-sach` — **cấm** copy CRUD phiếu KT. Một slug · **3 tab** (tổng hợp · kết quả · phiếu).

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-kiem-tra-cau.md` |
| Entity | `BridgeInspection` header: `BridgeId` `InspectedAt` `RoadCode` `AdminArea` · `BridgeInspectionLine` 20 bộ phận · `BridgePassport` master |
| Hub DA | `specs/_data-analy/features/reports-control-hint.md` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Kiểm tra cầu» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput tab/tuyến/cầu/loại phiếu · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · drill `/asset/csdl-so-sach?kind=bridge-inspections&id=` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| tab | Tab | `SearchInput` | ticket / result / summary |
| routeId | Tuyến | `SearchInput` | **road-route** |
| bridgeId | Cầu | `SearchInput` | seed cầu CUC2 |
| inspectionKind | Loại phiếu | `SearchInput` | dinh-ky / dot-xuat / truoc-mua |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | |
| qSearch | Tìm kiếm | `Input` | số phiếu · cầu · tuyến |

## Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table / tab |
|-------------|--------------|-------------|
| số phiếu | `Id` / ticketNo | `BridgeInspection` · phiếu |
| ngày KT | `InspectedAt` | `BridgeInspection` |
| tuyến | `RoadCode` | `BridgeInspection` |
| cầu | `BridgeId` → passport name | `BridgePassport` |
| địa bàn | `AdminArea` | `BridgeInspection` |
| loại phiếu | inspectionKind (seed P1) | phiếu |
| bộ phận | line part (`Signage`…`AttachedDevices`) | `BridgeInspectionLine` · kết quả |
| hư hỏng | `DamageDesc` | line |
| đề xuất | `ProposedActionQty` | line |
| ưu tiên | `Priority` | line |
| ảnh | `PhotoIds` count | line |
| số phiếu / ưu tiên cao | aggregate | tổng hợp |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/bridge-inspections` |
| Excel | `GET api/v1/report/bridge-inspections/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| tab / loại phiếu / cầu | enum + seed FE P1 |

Perm stub: `report.kiem-tra-cau.read`. Context `api/v1/reports/bridge-inspections` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/kiem-tra-cau` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
