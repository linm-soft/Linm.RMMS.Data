# Implement — rpt-checkin (Dev · task_a6b7e97e)

| Field | Value |
|-------|-------|
| feature | `rpt-checkin` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/checkin` |
| mfeStdUrl | `http://localhost:9311/bao-cao/checkin` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` · **cấm ERP.*** |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** → QA **pending** (không chạy role này) |
| prior · team_lead | `confirmed`/`done` · `task/rpt-checkin.md` · `task_ab20304f` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_a6b7e97e` |
| updatedAt | `2026-08-15T15:45:00.000Z` |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · `api/v1/reports` (plural) · Resource / Slideout / View=`readOnly`. **T-UI-FORM = OUT**.

## retry.ssot_rereview (live trước Write)

Live: `src/pages/CheckinReportPage/CheckinReportPage.tsx` + `CheckinFilterBar.tsx` · route `/bao-cao/checkin`.

| # | SSOT | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested `CatalogListShell` | 1× `kind="report"` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | Cột `resizable: true` tường minh + `visibleColumns` map + displayConfig migrate `resizable !== false` | **PASS** (GAP-TL-CHK-RESIZE **đóng**) |
| 3 | Footer luôn `LinCatalogListPagination` | `footer={<LinCatalogListPagination …>}` không gate ẩn | **PASS** |
| 4 | flex + skeleton | `.page` flex · `skeletonRows={8}` | **PASS** |
| 5 | toolbar config FULL | refresh/chart/print/`onEditConfig` → `ReportDisplayConfigModal` | **PASS** |
| 6 | list_parity SearchInput + Date + Input · **cấm** native `<select>` | `CheckinFilterBar` SearchInput loại/tuyến · Date · Input | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** | Không form / không add Zone A | **PASS** |
| Confirm | `dispatchAppToast` | toast · print modal | **PASS** |
| Xem-then-load | chưa Xem = empty hint | `viewed` gate | **PASS** |
| Prefix | `api/v1/report/checkins` | `reportEndpoint.getCheckins` / `exportCheckins` | **PASS** |

## T-CTX / T-PERM / T-UI

- Leaf `/bao-cao/checkin` · pageId `rpt-checkin` · testId `rmms-checkin-report` · **không** gộp KPI/map `rpt-bao-cao-cong`.
- `report.checkin.read` stub P1 — không `[RequirePermission]` đến CommonLib ≥1.4.0.
- Zone A title **BC Check-in** · **cấm** Thêm mới. Zone B `LinErpListFilterBar`. Zone C `listTitle` **Kết quả báo cáo check-in**. Zone D pager 50/100/200/500 · `totalCount=0` khi chưa Xem.
- Lookup: SearchInput enum loại + `GET api/v1/integration/road-routes/search` fallback seed 38 CUC2 · **cấm** `QL.22`.
- Grid DTO readonly + drill `/patrol?id={patrolId}`. Chart client SoCai line/bar từ `items`. Config FULL.

## T-BE / T-BFF (Step 4b — **không** endpoint mới)

Giữ contract sẵn có (không migration · không folder domain mới):

| ID | Path | Action |
|----|------|--------|
| T-BE-01 | `GET api/v1/report/checkins` | Giữ envelope `{ success, message, data }` · `data.items` + paging |
| T-BE-02 | `GET api/v1/report/checkins/export` | CSV UTF-8 BOM `checkins.csv` |
| T-BE-03 | coverage `points>=3` · pageSize `{50,100,200,500}` | Giữ `FilterCheckins` |
| T-BE-04 | seed 12 in-memory CUC2 | Giữ |
| T-BFF-01 | `ReportBffController` checkins + export | Giữ proxy |
| T-LKP-01 | `GET api/v1/integration/road-routes/search` | Consume only |

**Cấm** clone master dưới Report · **cấm** `Linm.Web.ERP.WebService`.

## GAP đóng P1

| ID | Result |
|----|--------|
| GAP-TL-CHK-RESIZE | Cột `resizable: true` · `visibleColumns` force ON · one-time migrate displayConfig |
| GAP-TL-CHK-VERIFY | `yarn typecheck` + `yarn build` MFE · `dotnet build` API + Report BFF |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings only) |
| BE `dotnet build` API | **PASS** (`RMMS.Service.Api` isolated `-o .build-verify/api` · 0 warning) |
| BE `dotnet build` BFF Report | **PASS** (`LINM.RMMS.Report.Bff` · 0 warning) |

## Handoff QA

Roles sau = **pending**. Chain enqueue QA khi board pick cùng feature. **Cấm** nhảy Review.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
