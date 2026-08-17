# Implement — rpt-tinh-trang-mat-duong (Dev · task_0e7f1bed)

| Field | Value |
|-------|-------|
| feature | `rpt-tinh-trang-mat-duong` |
| this role | `dev` · `/agent-dev` + `/erp-report-context` |
| status | `done` |
| packKind | **`report`** Kind **E** |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tinh-trang-mat-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| autoApprove | **ON** |
| taskId | `task_0e7f1bed` |
| prior · team_lead | **confirmed** · `task/rpt-tinh-trang-mat-duong.md` · `task_4a477dab` |
| updatedAt | `2026-08-16T20:00:00.000Z` |

## retry.ssot_rereview (trước Write)

Không `retryFrom`. Re-audit live page trước Write:

| # | Check | Sau Write |
|---|-------|-----------|
| 1 | 1× `LinPageLayout` kind=`report` · cấm nested CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** |
| 3 | Footer **luôn** `LinCatalogListPagination` 50/100/200/500 | **PASS** |
| 4 | flex + skeleton `skeletonRows={8}` | **PASS** |
| 5 | reportToolbar Config FULL · `ReportDisplayConfigModal` · List/width/filter/sort/**Thêm cột** | **PASS** |
| 6 | `LinErpListFilterBar` fragment leading · V1–V5 · 🔍=`onSearch`=Xem · 0 action trên bar | **PASS** |
| 7 | Form OUT · cấm Resource/Slideout/View=readOnly | **PASS** |
| 8 | Zone A title «Tình trạng mặt đường» `fas fa-road` · không Thêm mới | **PASS** |
| 9 | DES-PC-01 Làm mới `!viewed` → toast «Chưa xem» | **PASS** |
| 10 | Excel gated `canExport: viewed` · CSV BOM `pavement-condition.csv` | **PASS** |
| 11 | Query `search` · `pciBand` + alias `type` | **PASS** |
| 12 | leftover Kind B schema / `configHint` / `LinListTableConfigModal` | **PASS** không |
| 13 | Chart SoCai `by-band` · `by-route` client từ `items` | **PASS** |
| 14 | Drill `/asset/pavement-section/{id}` `window.top` | **PASS** |
| 15 | Perm FE `data-required-permission=report.tinh-trang-mat-duong.read` · BE stub P1 | **PASS** |

## T-* DoD

| id | Result |
|----|--------|
| T-PERM-01 | FE attr + BE/BFF `TODO [RequirePermission]` stub P1 |
| T-BE-RPT-01 | Keep `GET api/v1/report/pavement-condition` + `/export` · seed 12 · pageSize allow-list · **cấm** migration · **cấm ERP.*** |
| T-BFF-01 | Forward cùng path + query-string |
| T-UI-LIST-01 | Kind E A–D · 1× LinPageLayout |
| T-UI-FORM-01 | **OUT** |
| T-UI-ACT-01 | Xem · Làm mới · Excel · Chart · In · Config · drill |
| T-UI-LKP-01 | Tuyến Integration search · PCI enum FE · cấm QL.22 |
| T-UI-FIELD-01 | SearchInput + Date + Input → `search` |
| T-UI-PROD-01 | Không note Dev trên page |
| T-UI-UX-01 | Toast overlay · không form 5-cột |
| T-UI-RPT-01/TB/CONFIG/EXPORT/CHART | **PASS** — Thêm cột đóng GAP-P2-REPORT-CONFIG-01 |
| T-LIB-01 | Common 1.43 chưa `onExport` — compose `buildRmmsReportToolbar` · **cấm** clone full toolbar |
| T-BUILD-01 | xem § Build |

## FE

- `PavementConditionReportPage` + `PavementConditionFilterBar`
- route `bao-cao/tinh-trang-mat-duong`
- `reportEndpoint.getPavementCondition` / `exportPavementCondition`
- Config: `ReportDisplayConfigModal` + `ReportColumnConfigGrid` **Thêm cột** (unhide)

## BE (Step 4b)

- `GET /api/v1/report/pavement-condition` + `/export`
- BFF Forward `web-bff/api/v1/report/pavement-condition`
- DTO `ReportPavementConditionRowDto`
- P1 seed 12 CUC2 · **không** migration · **cấm ERP.***
- DOMAIN-MAP slug `rpt-tinh-trang-mat-duong` → Report

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** (webpack 5.109.2 · `linm-rmms-report.054cceab.js`) |
| BE `dotnet build` API | **PASS** (`RMMS.Service.Api` → `obj/autocode-build-pc`) |
| BE `dotnet build` BFF | **PASS** (`LINM.RMMS.Report.Bff`) |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
