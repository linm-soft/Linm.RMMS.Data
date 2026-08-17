# Implement — rpt-hang-muc-hu-hong (Dev · task_af0d0e56)

| Field | Value |
|-------|-------|
| feature | `rpt-hang-muc-hu-hong` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | **`report`** Kind **E** |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/hang-muc-hu-hong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_af0d0e56` |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T06:20:00.000Z` |

## retry.ssot_rereview (live trước Write · 2026-08-16)

Audit `DefectReportPage.tsx` + `DefectFilterBar.tsx` + TL pack — **cấm** chỉ patch 1 chỗ.

| # | SSOT | Live trước | After Dev |
|---|------|------------|-----------|
| 1 | 1× `LinPageLayout` kind=`report` · cấm nested CatalogListShell | PASS | PASS |
| 2 | `LinCatalogDataGrid` kéo cột default ON | PASS | PASS |
| 3 | Footer `LinCatalogListPagination` | PASS | PASS |
| 4 | flex + skeleton 8 | PASS | PASS |
| 5 | reportToolbar Config FULL · cấm `LinListTableConfigModal` / `configHint` / Kind B schema | PASS analog | PASS |
| 6 | Filter SearchInput ×4 + Date + Input · cấm native select | PASS | PASS |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · cấm Resource/Slideout/View=readOnly | PASS | PASS |
| 9 | Thêm mới Zone A | PASS không nút | PASS |
| 10 | Xem mới load | PASS | PASS |
| 11 | Làm mới `!viewed` → toast «Chưa xem» **không** fetch | GAP DES-HH-01 | **PASS** |
| 12 | Excel `canExport: viewed` · params applied · CSV subset `columnPrefs` | GAP DES-HH-02 | **PASS** |
| 13 | Lookup SearchInput empty=Tất cả | PASS | PASS |
| 14 | pageSize 50/100/200/500 | PASS | PASS |
| 15 | `formatDayVi` cột Ngày | GAP ISO raw | **PASS** |
| 16 | ERP.* / plural reports | none | none |
| 17 | `filterMaxWidthPx={null}` | PASS | PASS |
| 18 | toast · cấm alert | PASS | PASS |
| 19 | Drill `/ai-vision?id=` | PASS | PASS |
| 20 | Chart SoCai client | PASS | PASS |
| 21 | leftover Kind B schema | n/a Kind E | — |
| 22 | Query `search` không `q` | PASS | PASS |

## FE (`Linm.Web.RMMS.Report`)

- `DefectReportPage`: DES-HH-01 `reloadAll` chưa Xem → toast `Chưa xem` · không `applyAndView` / không fetch.
- DES-HH-02: `canExport: viewed` · `exportDefects` dùng **applied** `routeId` `defectClass` `severity` `sourceKind` `from` `to` `search` · `subsetDefectsCsv` theo `columnPrefs` (header BE `code,route,km,…,sourceId`; drill → `sourceId`).
- `formatDayVi` cột Ngày (`vi-VN`).

## BE (Step 4b)

- **keep** — không path mới · không FilterRoute · không migration · không folder domain.
- API live: `GET api/v1/report/defects` + `/defects/export` · BFF proxy.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** |
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings) |
| BE `dotnet build` | **n/a** P1 không đụng API |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
