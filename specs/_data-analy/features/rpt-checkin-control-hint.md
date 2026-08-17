# Data-analy — controlHint — rpt-checkin (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-checkin` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-checkin-context-20260815` |
| analyzedAt | `2026-08-15T21:50:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_2a9cab80` |
| autoApprove | `ON` |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent hub `reports` — **cấm** copy CRUD. Khác `rpt-bao-cao-cong` (KPI+map).

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-checkin.md` |
| Hub DA | `specs/_data-analy/features/reports-control-hint.md` |
| Parent patrol | `specs/_data-analy/features/patrol-control-hint.md` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «BC Check-in» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput loại/tuyến · Date từ/đến · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · cán bộ · tuyến · ngày · điểm · coverage · first→last · drill Patrol |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| reportKind | Loại | `SearchInput` | daily/patrol/worklog/coverage |
| routeId | Tuyến | `SearchInput` | **road-route** |
| fromDate / toDate | Từ / Đến | `Date` | |
| qSearch | Tìm kiếm | `Input` | cán bộ · tuyến |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/checkins` |
| Excel | `GET api/v1/report/checkins/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.checkin.read`. Context `api/v1/reports/checkins` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/checkin`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
