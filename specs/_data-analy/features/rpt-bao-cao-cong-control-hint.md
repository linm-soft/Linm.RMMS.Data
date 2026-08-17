# Data-analy — controlHint — rpt-bao-cao-cong (Kind E worklog)

| Field | Value |
|-------|-------|
| feature | `rpt-bao-cao-cong` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:adee6dfd21215b78652930c09de2de8735f0482a8279dc650cf5e3f3945122ab` |
| analyzedAt | `2026-08-15T14:40:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_36d8f152` |
| autoApprove | `ON` |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> **Cấm** `/api/v1/attendance/*`. Parent list `attendance` giữ CRUD trên Field.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/rpt-bao-cao-cong.md` | `adee6dfd21215b78652930c09de2de8735f0482a8279dc650cf5e3f3945122ab` |
| Parent DA | `specs/_data-analy/features/attendance-control-hint.md` | Kind E report filters |
| Hub DA | `specs/_data-analy/features/reports-control-hint.md` | Kind E shell |
| Shared catalogs | CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Báo cáo công» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput kỳ/tuyến/NV/zone · Date từ/đến |
| C | `LinCatalogDataGrid` | kéo cột ON · summary + điểm · InZone% · first→last · drill Field |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| KPI | 4 card | số ca · InZone% · lệch zone · điểm TB |
| Map | P1 SVG lat/lng | không Leaflet dep MFE |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| periodMode | Kỳ | `SearchInput` | enum week/month |
| fromDate / toDate | Từ / Đến | `Date` | |
| routeId | Tuyến | `SearchInput` | **road-route** |
| staffId | Nhân viên | `SearchInput` | mock enum P1 |
| zone | Zone | `SearchInput` | all / out |

## Lookup APIs (đề xuất SA)

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/worklogs` |
| Excel | `GET api/v1/report/worklogs/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.bao-cao-cong.read`.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/bao-cao-cong`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
