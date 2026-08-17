# Data-analy — controlHint — rpt-nhat-ky-cong-viec (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-cong-viec` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-nhat-ky-cong-viec-context-20260816` |
| analyzedAt | `2026-08-16T07:40:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_bdec4f7e` |
| autoApprove | `ON` |
| sourceFeature | `maintenance` |
| sourceTables | `MaintenanceWorkLog` (+ `WorkOrder` cho mã WO / KL / ĐVT) |
| sourceFormReady | **yes** — `specs/maintenance/STATUS.md` phase=`done` · cột CSDL §3.7 (không TBD / Col1–Col3) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list `maintenance` — **cấm** copy CRUD. Khác `rpt-bao-cao-cong` (KPI+map InZone).

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-nhat-ky-cong-viec.md` |
| Entity | `MaintenanceWorkLog` · `Seq` `WorkName` `LocationKm` `MethodSummary` `MainResult` `RoadCode` `Contractor` `Office` `Zone` `LoggedAt` |
| Parent | `specs/maintenance/STATUS.md` **done** |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Grid ← form nguồn

| Cột lưới | Field nguồn |
|----------|-------------|
| STT sổ | `Seq` |
| Ngày | `LoggedAt` → `day` |
| WO | `WorkOrder.Code` |
| Hạng mục | `WorkName` |
| Km | `LocationKm` |
| KL | `WorkOrder.Quantity` |
| ĐVT | `WorkOrder.UnitCode` |
| Trạng thái | `WorkOrder.Status` |
| Tuyến | `RoadCode` |
| Loại việc | `WorkOrder.WorkType` |
| Đội | `Office` / team |
| Nhà thầu | `Contractor` |
| PP / kết quả | `MethodSummary` / `MainResult` |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Nhật ký công việc» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Excel · SearchInput tuyến/loại/đội · Date · Input |
| C | `LinCatalogDataGrid` | kéo cột ON · ngày · WO · hạng mục · KL · ĐVT · TT · drill Maintenance |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| workType | Loại việc | `SearchInput` | repair / inspect / emergency |
| teamId | Đội | `SearchInput` | TEAM-1/2/3 |
| fromDate / toDate | Kỳ | `Date` | trên `LoggedAt`/`day` |
| qSearch | Tìm kiếm | `Input` | WO · hạng mục · tuyến |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/maintenance-work-logs` |
| Excel | `GET api/v1/report/maintenance-work-logs/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.nhat-ky-cong-viec.read`. Context `api/v1/reports/work-logs` **stale** → singular + kebab `maintenance-work-logs` (không đụng `worklogs` = Báo cáo công).

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/nhat-ky-cong-viec` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
