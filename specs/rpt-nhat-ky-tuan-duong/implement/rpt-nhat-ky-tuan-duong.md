# Implement — rpt-nhat-ky-tuan-duong

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** · Kind **E** |
| mfe | `Linm.Web.RMMS.Report` · `PatrolLogRoadReportPage` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-log-road` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_416ac86e` |
| prior | TL `task_646fa977` **confirmed** · live Kind E PASS |
| updatedAt | `2026-08-16T15:45:00.000Z` |

## retry.ssot_rereview (Dev live 2026-08-16)

Re-audit `PatrolLogRoadReportPage.tsx` + `PatrolLogRoadFilterBar.tsx` + `reportEndpoint` + BE `GET patrol-log-road` / export + BFF Forward — **không** rewrite Kind E (TL: không GAP P1).

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · cấm nested CatalogListShell | **PASS** kind=`report` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render | — |
| 4 | flex + skeleton | **PASS** `.page` + `skeletonRows={8}` | — |
| 5 | reportToolbar + config FULL | **PASS** `ReportDisplayConfigModal` + `columnPrefs` · **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema editor | — |
| 6 | Filter `LinErpListFilterBar` SearchInput ×2 + Date + Input | **PASS** | — |
| 7 | Form OUT · cấm Resource/Slideout/View=readOnly | **PASS** | — |
| 8 | Xem mới load · empty hint | **PASS** `viewed` | — |
| 9 | Làm mới `!viewed` toast, không fetch | **PASS** | — |
| 10 | Excel viewed + `q` + `locationText` | **PASS** `CSV_COL_BY_GRID` | — |
| 11 | Lookup road-route + cán bộ · cấm QL.22 · cấm native select | **PASS** | — |
| 12 | Query canonical `q` | **PASS** | — |
| 13 | Cột Vị trí `locationText` | **PASS** | — |
| 14 | ERP.* / `api/v1/rmms` / Kind B | **none** | — |

**Không** GAP P1 cùng surface → **không** đổi FE/BE runtime.

## Code (keep)

- FE: `src/pages/PatrolLogRoadReportPage/*` · route `bao-cao/nhat-ky-tuan-duong` · `reportService.getPatrolLogRoad` / `exportPatrolLogRoad`.
- BE: `ReportQueryController` `GET api/v1/report/patrol-log-road` + `/export` · seed in-memory · DTO `locationText`.
- BFF: `ReportBffController` Forward list + export bytes.
- Step 4b: **không** path mới · **không** migration · **không** `ERP.*`.

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
| BE `dotnet build` | **N/A** — Dev không sửa API/BFF (TL keep) |

## Handoff QA

- autoApprove **ON** · roleOnly **dev** xong → enqueue **qa** (`qa/scenarios.md` pending).
- **Cấm** Review trước QA.
- mfeStdUrl: `http://localhost:9311/bao-cao/nhat-ky-tuan-duong`

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
