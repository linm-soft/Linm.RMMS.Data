# Data-analy — controlHint — rpt-tong-hop-bao-tri (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tong-hop-bao-tri` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-tong-hop-bao-tri-context-20260816` |
| analyzedAt | `2026-08-16T13:50:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_1d312ce2` |
| autoApprove | `ON` |
| sourceFeature | `maintenance` |
| sourceTables | `WorkOrder` (`rmms_work_orders`) |
| sourceFormReady | **yes** — `specs/maintenance/STATUS.md` phase=`done` · entity `WorkOrderEntity` (không TBD / Col1–Col3) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list `maintenance` — **cấm** copy CRUD. Khác `rpt-nhat-ky-cong-viec` (dòng sổ `MaintenanceWorkLog`) và `rpt-bao-cao-cong` (KPI ca + map InZone).

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-tong-hop-bao-tri.md` |
| Entity | `WorkOrder` · `Code` `Title` `RouteName` `WorkType` `Status` `TeamName` `AssigneeName` `DueAt` `ProgressPercent` `SlaHours` `IncidentId` |
| Parent | `specs/maintenance/STATUS.md` **done** |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Grid ← form nguồn

| Cột lưới | Field nguồn |
|----------|-------------|
| Hạn | `DueAt` → `day` |
| Mã WO | `Code` |
| Tiêu đề | `Title` |
| Tuyến | `RouteName` |
| Loại việc | `WorkType` |
| Trạng thái | `Status` |
| Đơn vị | `TeamName` |
| Cán bộ | `AssigneeName` |
| Tiến độ % | `ProgressPercent` |
| SLA (h) | `SlaHours` |
| Sự cố | `IncidentId` |

**KPI 6 thẻ** (aggregation trên tập đã lọc, không phải chỉ trang hiện tại): Tổng WO · Mới · Đang làm · Hoàn thành · Hủy · Khẩn cấp (`WorkType=emergency`).  
**Series dự án:** đếm WO theo tuyến.  
Quantity/UnitCode **không** trên `WorkOrderEntity` P1 — **cấm** bịa cột KL/ĐVT.

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Tổng hợp bảo trì» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Excel · SearchInput tuyến/loại/đơn vị · Date kỳ · Input |
| C | KPI 6 + `LinCatalogDataGrid` | kéo cột ON · WO tóm tắt · drill Maintenance |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| workType | Loại việc | `SearchInput` | repair / inspect / emergency |
| teamId | Đơn vị | `SearchInput` | TEAM-1/2/3 |
| fromDate / toDate | Kỳ | `Date` | trên `DueAt`/`day` |
| qSearch | Tìm kiếm | `Input` | WO · tiêu đề · tuyến |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/maintenance-summary` |
| Excel | `GET api/v1/report/maintenance-summary/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.tong-hop-bao-tri.read`. Context plural `api/v1/reports/maintenance-summary` **stale** → singular `api/v1/report/maintenance-summary`.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/tong-hop-bao-tri` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
