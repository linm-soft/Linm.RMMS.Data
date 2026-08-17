# Implement — rpt-nhat-ky-tuan-kiem

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-kiem` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** · Kind **E** |
| mfe | `Linm.Web.RMMS.Report` · `PatrolLogInspectReportPage` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-kiem` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-kiem` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-log-inspect` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_09634320` |
| prior | TL `task_3b0b3f04` **confirmed** · live Kind E PASS |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T16:25:00.000Z` |

## retry.ssot_rereview (Dev live 2026-08-16 · `task_09634320`)

Re-audit `PatrolLogInspectReportPage.tsx` + `PatrolLogInspectFilterBar.tsx` + `reportEndpoint.getPatrolLogInspect` / `exportPatrolLogInspect` + BE `GET api/v1/report/patrol-log-inspect` + `/export` + BFF `ForwardAsync` — **không** rewrite Kind E (TL: không GAP P1 cùng surface).

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (`totalCount=0` khi chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + config FULL | **PASS** refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` | — |
| 6 | Filter layout | **PASS** `LinErpListFilterBar` SearchInput tuyến/cán bộ + Date + Input · **cấm** native select | — |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | — |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem»…» | — |
| 11 | Làm mới khi `!viewed` | **PASS** toast + return · **không** fetch | — |
| 12 | Excel sau Xem + applied | **PASS** `canExport: viewed` · query `q` · filename `patrol-log-inspect.csv` · `CSV_COL_BY_GRID` gồm `notes` | — |
| 13 | Lookup SearchInput · empty Tất cả · **cấm QL.22** | **PASS** `ROAD_ROUTE_LOOKUP_CONFIG` + `WORKLOG_STAFF_LOOKUP` · lookups filter `QL.22` | — |
| 14 | pageSize 50/100/200/500 | **PASS** FE pager + BE allow-list (keep) | — |
| 15 | TZ display `vi-VN` từ `day` | **PASS** `formatDayVi` | — |
| 16 | ERP.* / plural `reports` | **none** | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | **PASS** `dispatchAppToast` · print `window.print` sau modal | — |
| 19 | Drill sổ | **PASS** `/asset/csdl-so-sach?kind=inspection-logs&id={bookId}&entry={entryId}` | — |
| 20 | Chart SoCai client | **PASS** trend/by-status/by-route khi viewed + có dòng | — |
| 21 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E (không `buildDynamicGridColumns`) | — |
| 22 | Query canonical `q` | **PASS** FE gửi `q` + `staffId` + `routeId` | — |
| 23 | Cột Ghi chú | **PASS** `notes` = `requiredAction \|\| receiverNote` | — |
| 24 | Cột lưới PO/Design | **PASS** day · route · workItemProposal · conditionDetail · notes · inspectorStaff · kmRange · position · statusLabel · bookNo · drill | — |
| 25 | testid | **PASS** `rmms-patrol-log-inspect-report` | — |
| 26 | BFF proxy | **PASS** list + export Forward | — |

**Không** GAP P1 cùng surface → **không** đổi FE/BE runtime.

## Code (keep)

- FE: `src/pages/PatrolLogInspectReportPage/*` · route `bao-cao/nhat-ky-tuan-kiem` · `reportService.getPatrolLogInspect` / `exportPatrolLogInspect`.
- BE: `ReportQueryController` `GET api/v1/report/patrol-log-inspect` + `/export` · seed 12 CUC2 · DTO `ReportPatrolLogInspectRowDto`.
- BFF: `ReportBffController` Forward list + export bytes.
- DOMAIN-MAP: `rpt-nhat-ky-tuan-kiem` → Report · kebab `report`.
- Step 4b: **không** path mới · **không** migration · **không** `ERP.*` · **không** `api/v1/rmms/*` · **không** `api/v1/reports`.

## T-pack Dev

| id | Result |
|----|--------|
| T-UI-LIST-01 | **PASS keep** |
| T-UI-FORM-01 | **OUT PASS** |
| T-UI-RPT-01 / CONFIG / CHART | **PASS** |
| T-UI-ACT-01 / LKP / FIELD / PROD / UX | **PASS** |
| T-BE-01 / T-BE-02 / T-BFF-01 / T-LKP-01 | **PASS keep** · không đụng API |

## Build

| Cmd | Result |
|-----|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit` exit 0) |
| MFE `yarn build` | **PASS** webpack 5.109.2 compiled · 3 size warnings only |
| BE `dotnet build` | **N/A** — Dev không sửa API/BFF (TL keep · Step 4b verify-only) |

## Handoff QA

- autoApprove **ON** · roleOnly **dev** (`task_09634320`) xong → enqueue **qa** (`qa/scenarios.md` pending).
- **Cấm** Review trước QA.
- mfeStdUrl: `http://localhost:9311/bao-cao/nhat-ky-tuan-kiem`

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
