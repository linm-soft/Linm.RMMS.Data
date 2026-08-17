# Data-analy — controlHint — rpt-nhat-ky-tuan-kiem (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-kiem` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-nhat-ky-tuan-kiem-context-20260816` |
| analyzedAt | `2026-08-16T08:50:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_b344ef1b` |
| autoApprove | `ON` |
| sourceFeature | `csdl-so-sach` (Mẫu 8 — Nhật ký tuần kiểm) |
| sourceTables | `InspectionLogBook` · `InspectionEntry` |
| sourceFormReady | **yes** — cột entity chốt tại `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.8 (không TBD / Col1–Col3) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list `csdl-so-sach` — **cấm** copy CRUD. Khác `rpt-nhat-ky-tuan-duong` (Mẫu 1 PatrolLogBook). Khác `rpt-tuan-kiem` (KPI tuần).

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-nhat-ky-tuan-kiem.md` |
| Entity | `InspectionLogBook` `BookNo` `RoadCode` · `InspectionEntry` `Date` `WorkItemProposal` `KmFrom` `KmTo` `Position` `ConditionDetail` `EstimatedQty` `InspectorOpinion` `ReceiverNote` `RequiredAction` `DueAt` `DoneQty` `DoneQuality` `DoneAt` |
| Parent | CSDL §3.8 · list pack `csdl-so-sach` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Grid ← form nguồn

| Cột lưới | Field nguồn |
|----------|-------------|
| Ngày | `Date` → `day` |
| Tuyến | `InspectionLogBook.RoadCode` |
| Hạng mục | `WorkItemProposal` |
| Kết quả | `ConditionDetail` |
| Ghi chú | `RequiredAction` / `ReceiverNote` |
| Cán bộ | inspector staff (header sổ / seed P1 `InspectorStaff`) |
| Km | `KmFrom`–`KmTo` |
| Vị trí | `Position` |
| Trạng thái | `DoneAt` → `done`/`open` |
| Số sổ | `BookNo` |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Nhật ký tuần kiểm» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Excel · SearchInput tuyến/cán bộ · Date · Input |
| C | `LinCatalogDataGrid` | kéo cột ON · ngày · tuyến · hạng mục · kết quả · ghi chú · drill CSDL sổ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| staffId | Cán bộ | `SearchInput` | nva/ttb/lvc/pmd P1 |
| fromDate / toDate | Kỳ | `Date` | trên `Date`/`day` |
| qSearch | Tìm kiếm | `Input` | hạng mục · tuyến · cán bộ · số sổ |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/patrol-log-inspect` |
| Excel | `GET api/v1/report/patrol-log-inspect/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.nhat-ky-tuan-kiem.read`. Context `api/v1/reports/patrol-log-inspect` **stale** → singular `api/v1/report`.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/nhat-ky-tuan-kiem` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
