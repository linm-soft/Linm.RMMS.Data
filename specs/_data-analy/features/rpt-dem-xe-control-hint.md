# Data-analy — controlHint — rpt-dem-xe (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-dem-xe` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-dem-xe-context-20260815` |
| analyzedAt | `2026-08-15T16:00:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_d8caf0e9` |
| autoApprove | `ON` |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent hub `reports` / list pack `csdl-so-sach` — **cấm** copy CRUD.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-dem-xe.md` |
| Hub DA | `specs/_data-analy/features/reports-control-hint.md` |
| CSDL | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.4 TrafficCountSummary |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Đếm xe» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput tuyến/điểm đếm/tab · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · 3 tab KQ / B.1 / B.2 · drill CSDL sổ 4 |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| viewTab | Bảng | `SearchInput` | `kq` / `b1` / `b2` |
| routeId | Tuyến | `SearchInput` | **road-route** |
| stationId | Điểm đếm | `SearchInput` | count-station (seed P1) |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | |
| qSearch | Tìm kiếm | `Input` | trạm · tuyến |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/traffic-counts` |
| Excel | `GET api/v1/report/traffic-counts/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| điểm đếm | enum seed FE P1 |

Perm stub: `report.dem-xe.read`. Context `api/v1/reports/traffic-counts` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/dem-xe`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
