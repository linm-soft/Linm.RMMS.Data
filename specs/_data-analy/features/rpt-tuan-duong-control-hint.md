# Data-analy — controlHint — rpt-tuan-duong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-duong` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-tuan-duong-context-20260816` |
| analyzedAt | `2026-08-16T14:30:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_9d72ff3d` |
| autoApprove | `ON` |
| sourceFeature | `patrol` |
| sourceTables | `PatrolSession` / `rmms_patrol_sessions` (`PatrolSessionEntity`) |
| sourceFormReady | **yes** — entity live `api/v1/patrol/sessions` · cột scalar chốt trên `PatrolSessionEntity` (không TBD / Col1–Col3). Pipeline list `patrol` STATUS `blocked` (gap crud_formtype) **không** thiếu cột nguồn cho báo cáo. |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list `patrol` — **cấm** copy CRUD. **Khác** `rpt-nhat-ky-tuan-duong` (PatrolLogBook/Entry) · **cấm** reuse `GET api/v1/report/patrol-log-road`.  
> Chỉ phiên `PatrolType` = tuần đường (`road`) — **cấm** gộp tuần kiểm.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-tuan-duong.md` |
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
| Loại tuần | `PatrolType` (`road` = Tuần đường) |
| Điểm CI | `CheckInCount` |
| Coverage % | `CoveragePercent` |
| Trạng thái | `Status` |
| Offline | `OfflineQueued` |
| Ghi chú | `Note` |
| Nguồn | `Id` → drill `/patrol?id={sessionId}` |

P1 **không** cột Company/QL/Km riêng — entity **không** có field đó (tree Company→QL→Km = P2). Filter tuyến = `Route`.

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Báo cáo tuần đường» — **cấm** Thêm mới |
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
| Xem | `GET api/v1/report/patrol-road` |
| Excel | `GET api/v1/report/patrol-road/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.tuan-duong.read`. Context `api/v1/reports/patrol-road` **stale** → singular `api/v1/report`.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/tuan-duong` · `sourceFormReady=yes` · **cấm** `patrol-log-road`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
