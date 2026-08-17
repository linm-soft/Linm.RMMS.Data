# Data-analy — controlHint — rpt-nhat-ky-tuan-duong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-nhat-ky-tuan-duong-context-20260816` |
| analyzedAt | `2026-08-16T08:20:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_0e294d3d` |
| autoApprove | `ON` |
| sourceFeature | `csdl-so-sach` (Mẫu 1 — Nhật ký tuần đường) |
| sourceTables | `PatrolLogBook` · `PatrolLogEntry` |
| sourceFormReady | **yes** — cột entity chốt tại `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.1 (không TBD / Col1–Col3) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list `csdl-so-sach` — **cấm** copy CRUD. Khác `rpt-nhat-ky-tuan-kiem` (Mẫu 8 InspectionLogBook).

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-nhat-ky-tuan-duong.md` |
| Entity | `PatrolLogBook` `BookNo` `RoadCode` `PatrolStaff` · `PatrolLogEntry` `CheckedAt` `LocationText` `Km` `WeatherAndEvent` `OnSiteAction` `SupervisorNote` `SupervisorSignedAt` |
| Parent | CSDL §3.1 · list pack `csdl-so-sach` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Grid ← form nguồn

| Cột lưới | Field nguồn |
|----------|-------------|
| Ngày | `CheckedAt` → `day` |
| Tuyến | `PatrolLogBook.RoadCode` |
| Cán bộ | `PatrolLogBook.PatrolStaff` |
| Km | `Km` |
| Nội dung nhật ký | `WeatherAndEvent` |
| Xử lý tại chỗ | `OnSiteAction` |
| Trạng thái | `SupervisorSignedAt` → `signed`/`pending` |
| Số sổ | `BookNo` |
| Vị trí | `LocationText` |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Nhật ký tuần đường» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Excel · SearchInput tuyến/cán bộ · Date · Input |
| C | `LinCatalogDataGrid` | kéo cột ON · ngày · tuyến · nội dung · km · TT · drill CSDL sổ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| staffId | Cán bộ | `SearchInput` | nva/ttb/lvc/pmd P1 |
| fromDate / toDate | Kỳ | `Date` | trên `CheckedAt`/`day` |
| qSearch | Tìm kiếm | `Input` | nội dung · tuyến · cán bộ · số sổ |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/patrol-log-road` |
| Excel | `GET api/v1/report/patrol-log-road/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.nhat-ky-tuan-duong.read`. Context `api/v1/reports/patrol-log-road` **stale** → singular `api/v1/report`.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/nhat-ky-tuan-duong` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
