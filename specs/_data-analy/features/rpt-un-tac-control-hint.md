# Data-analy — controlHint — rpt-un-tac (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-un-tac` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-un-tac-context-20260816` |
| analyzedAt | `2026-08-16T16:00:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_e49f5eb8` |
| autoApprove | `ON` |
| sourceFeature | `incident` |
| sourceFormReady | **yes** (`specs/incident/STATUS.md` T-UI-LIST-01 **done** · T-BE-01/02 **done** · `rmms_incidents`) |
| sourceTables | `rmms_incidents` (`IncidentEntity`) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list pack `incident` — **cấm** copy CRUD.

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Ùn tắc / ngập úng» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput loại/tuyến · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · drill `/incident?id=` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| type | Loại | `SearchInput` | Ùn tắc / Ngập úng |
| routeId | Tuyến | `SearchInput` | **road-route** CUC2 · **cấm QL.22** |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `RequestedAt` / DTO `at` |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · loại · km |

## Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| mã | `Code` | `rmms_incidents` |
| tuyến | `RouteName` | same |
| km | `KmStart`–`KmEnd` | same |
| loại | `IncidentType` ∈ {Ùn tắc, Ngập úng} | same |
| thời lượng | `DurationMin` P1 Report seed (entity column DEFER P2) | Report DTO |
| trạng thái | `Status` | same |
| thời điểm | `RequestedAt` | same |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/congestion` |
| Excel | `GET api/v1/report/congestion/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại | enum FE `CONGESTION_TYPE_LOOKUP` |

Perm stub: `report.un-tac.read`. Context plural `reports/congestion` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/un-tac` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
