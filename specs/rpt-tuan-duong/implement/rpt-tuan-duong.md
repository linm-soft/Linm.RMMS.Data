# Implement — rpt-tuan-duong

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-duong` |
| this role | `dev` · `/agent-dev` + `/erp-report-context` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** · Kind **E** |
| mfe | `Linm.Web.RMMS.Report` · `PatrolRoadReportPage` |
| mfeStdRoute | `/bao-cao/tuan-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tuan-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-road` |
| BFF | `web-bff/api/v1/report` · `patrol-road` + `patrol-road/export` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_078695c5` |
| prior | TL `task_29d588f1` **confirmed** · live Kind E PASS |
| updatedAt | `2026-08-16T22:05:00.000Z` |

## retry.ssot_rereview (Dev live 2026-08-16)

Re-audit `PatrolRoadReportPage.tsx` + `PatrolRoadFilterBar.tsx` + `reportEndpoint.getPatrolRoad` / `exportPatrolRoad` + `ReportQueryController` `patrol-road` + `ReportService.FilterPatrolRoad` + BFF Forward — **cấm** rewrite Kind E · **cấm** Kind B schema · **cấm** path API mới.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** `kind="report"` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + `visibleColumns` `resizable: true` + `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (`totalCount=0` khi `!viewed`) | — |
| 4 | flex + skeleton | **PASS** `.page` flex column · `skeletonRows={8}` | — |
| 5 | reportToolbar + config FULL | **PASS** `buildRmmsReportToolbar` + `ReportDisplayConfigModal` + `columnPrefs` · **cấm** `LinListTableConfigModal` / `configHint` / `LinCatalogUiSchemaEditorModal` | — |
| 6 | Filter layout V1–V5 | **PASS** `LinErpListFilterBar` SearchInput ×3 + Date + Input · Xem = `onSearch` · **0** Excel trên bar | — |
| 7 | list_parity SearchInput · **cấm** native `<select>` | **PASS** | — |
| 8 | tree_master | n/a P1 | Company→QL→Km **OUT** |
| 9 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | — |
| 10 | Thêm mới Zone A | **PASS** không nút | — |
| 11 | Xem mới load · empty hint | **PASS** `viewed` · «Chưa xem — nhấn «Xem» để tải báo cáo tuần đường.» | — |
| 12 | Làm mới khi `!viewed` | **PASS** toast + return · **không** fetch | — |
| 13 | Excel sau Xem + toolbar | **PASS** `canExport: viewed` · `patrol-road.csv` · `CSV_COL_BY_GRID` | — |
| 14 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | **PASS** `ROAD_ROUTE_LOOKUP_CONFIG` filter `QL.22` · status enum · staff nva/ttb/lvc/pmd | — |
| 15 | pageSize 50/100/200/500 | FE pager + BE `AllowedPageSizes` | — |
| 16 | TZ display `vi-VN` từ `day` | **PASS** `formatDayVi` | — |
| 17 | ERP.* / plural `reports` | **none** | — |
| 18 | `filterMaxWidthPx={null}` | **PASS** | — |
| 19 | toast · **cấm** alert/confirm | **PASS** `dispatchAppToast` | — |
| 20 | Drill phiên | **PASS** `/patrol?id={sessionId}` | — |
| 21 | Chart SoCai client | **PASS** trend/by-status/by-route | — |
| 22 | Seed 14 road + inspect excluded | **PASS** Filter `PatrolType==road` | — |
| 23 | `FilterRoute` exact | **PASS** | — |
| 24 | leftover `const columns` Kind E | **OK** · **cấm** Kind B `buildDynamicGridColumns` | — |
| 25 | Query canonical `q` | **PASS** FE gửi `q` | — |
| 26 | Cột lưới PO §5 | **PASS** | — |
| 27 | `type` query ignored | **PASS** | — |
| 28 | Prefix `api/v1/report` | **PASS** | — |

**Không** GAP P1 cùng surface → **không** đổi FE/BE runtime.

## Code (keep)

- FE: `src/pages/PatrolRoadReportPage/*` · route `bao-cao/tuan-duong` · `reportService.getPatrolRoad` / `exportPatrolRoad`.
- BE: `ReportQueryController` `GET api/v1/report/patrol-road` + `/export` · in-memory seed · `FilterPatrolRoad` hard-filter `road`.
- BFF: `ReportBffController` Forward list + export bytes · **không** business.
- Step 4b: **không** path mới · **không** migration · **không** `ERP.*` · **không** `api/v1/reports` · **không** reuse `patrol-log-road`.

## T-pack Dev

| id | Result |
|----|--------|
| T-UI-LIST-01 | **PASS keep** |
| T-UI-FORM-01 / LEAVE | **OUT PASS** |
| T-UI-RPT-01 / TB / CONFIG / EXPORT / CHART | **PASS** |
| T-UI-ACT-01 / LKP / FIELD / PROD / UX | **PASS** |
| T-BE-01 / T-BE-02 / T-BFF-01 / T-LKP-01 | **PASS keep** · không đụng API |
| T-PERM-01 | stub `report.tuan-duong.read` P1 |

## Build

| Cmd | Result |
|-----|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit` exit 0) |
| MFE `yarn build` | **PASS** webpack 5.109.2 compiled successfully |
| BE `dotnet build` | **N/A** — Dev không sửa API/BFF (TL keep · Step 4b align = existing Report domain) |

## Handoff QA

- autoApprove **ON** · roleOnly **dev** xong → enqueue **qa** (`qa/scenarios.md` pending).
- **Cấm** Review trước QA.
- mfeStdUrl: `http://localhost:9311/bao-cao/tuan-duong`

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
