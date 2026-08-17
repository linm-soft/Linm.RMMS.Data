# Data-analy — controlHint — rpt-tuan-kiem (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-kiem` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-tuan-kiem-context-20260816` |
| analyzedAt | `2026-08-16T15:20:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_afa75ec9` |
| autoApprove | `ON` |
| sourceFeature | `patrol` |
| sourceTables | `PatrolSession` / `rmms_patrol_sessions` (`PatrolSessionEntity`) |
| sourceFormReady | **yes** — entity live `api/v1/patrol/sessions` · cột scalar chốt trên `PatrolSessionEntity` (không TBD / Col1–Col3). Pipeline list `patrol` có thể `blocked` **không** thiếu cột nguồn cho báo cáo. |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list `patrol` — **cấm** copy CRUD. **Khác** `rpt-nhat-ky-tuan-kiem` (InspectionLogBook/Entry) · **cấm** reuse `GET api/v1/report/patrol-log-inspect`.  
> Chỉ phiên `PatrolType` = tuần kiểm (`inspect`) — **cấm** gộp tuần đường.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-tuan-kiem.md` |
| Entity | `PatrolSessionEntity`: `Code` `UserName` `Route` `PatrolType` `PlannedDate` `StartedAt` `CheckInCount` `CoveragePercent` `Status` `OfflineQueued` `Note` |
| Parent | `docs/context/features/patrol.md` · `api/v1/patrol/sessions` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Grid ← form nguồn

| Cột lưới | Field nguồn |
|----------|-------------|
| Ngày | `PlannedDate` → `day` |
| Mã phiên | `Code` |
| Tuyến | `Route` |
| Nhân viên | `UserName` |
| Loại tuần | `PatrolType` (`inspect` = Tuần kiểm) |
| Điểm CI | `CheckInCount` |
| Coverage % | `CoveragePercent` |
| Trạng thái | `Status` |
| Offline | `OfflineQueued` |
| Ghi chú | `Note` |
| Nguồn | `Id` → drill `/patrol?id={sessionId}` |

P1 **không** cột Company/QL/Km riêng — entity **không** có field đó. Filter tuyến = `Route`.

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Báo cáo tuần kiểm» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Excel · SearchInput tuyến · SearchInput trạng thái CI · SearchInput NV · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · ngày · mã · tuyến · NV · điểm · coverage · TT · offline · drill phiên |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| status | Trạng thái CI | `SearchInput` | enum in_progress / done / missed / offline |
| staffId | Nhân viên | `SearchInput` | nva/ttb/lvc/pmd P1 |
| fromDate / toDate | Kỳ | `Date` | trên `PlannedDate`/`day` |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · NV · ghi chú |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/patrol-inspect` |
| Excel | `GET api/v1/report/patrol-inspect/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.tuan-kiem.read`. Context `api/v1/reports/patrol-inspect` **stale** → singular `api/v1/report`.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/tuan-kiem` · `sourceFormReady=yes` · **cấm** `patrol-log-inspect` · **cấm** `patrol-road`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
