# Review — rpt-hang-muc-hu-hong (Hạng mục hư hỏng)

| Field | Value |
|-------|-------|
| feature | `rpt-hang-muc-hu-hong` |
| this role | `review` · `/agent-review` |
| status | `confirmed` |
| review_confirm | **approve** (`autoApprove=ON`) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/hang-muc-hu-hong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/hang-muc-hu-hong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** · pipeline leaf — không role sau Review |
| prior · qa | `confirmed` · `qa/scenarios.md` · `task_a74b1c81` · T-QA-01 PASS · P0 none |
| prior · dev | `confirmed` · `implement/rpt-hang-muc-hu-hong.md` · `task_af0d0e56` · DES-HH-01/02 + `formatDayVi` |
| prior · team_lead | `confirmed` · `task/rpt-hang-muc-hu-hong.md` |
| prior · sa | `confirmed` · `be/solution-discovery.md` |
| prior · design | `confirmed` · `ui/design.md` + prototype |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_ad4820fe` |
| updatedAt | `2026-08-16T06:12:00.000Z` |

**Phương pháp:** static re-audit live `DefectReportPage.tsx` + `DefectFilterBar.tsx` + `endpoint.ts` `getDefects`/`exportDefects` + `lookups.ts` + BE `ReportQueryController` / `ReportService.FilterRoute` / Report BFF + DOMAIN-MAP. **Không** write FE/BE (QA PASS · không GAP P0/P1). **Cấm** `ERP.*`.

**Supersedes** stub Review `task_39d5fcb1`. Pack này re-audit sau Dev DES-HH-01/02 + QA `task_a74b1c81`.

## SSOT surface (live)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` `kind="report"` · **cấm** nested CatalogListShell | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `visibleColumns` `resizable: true` · `tableConfig` `resizable: true` · migrate `rmms-defect-report-resizable-default-on-v1` | **PASS** |
| 3 | Footer **luôn** `LinCatalogListPagination` | Footer không gate · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 | **PASS** |
| 4 | flex + skeleton | `.page` + `skeletonRows={8}` · `data-catalog-list-page` | **PASS** |
| 5 | toolbar config FULL Kind E | Làm mới · chart · print `LinReportPrintScopeModal` · `ReportDisplayConfigModal` · Excel `canExport=viewed` · **cấm** `LinCatalogUiSchemaEditorModal` / `LinListTableConfigModal` / `configHint` | **PASS** |
| 6 | list_parity SearchInput + Date · **cấm** native `<select>` | `DefectFilterBar` SearchInput ×4 + Date + Input trên `LinErpListFilterBar` | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Thêm mới / Resource / Slideout / View=`readOnly` | Không `onAdd` Zone A · không form | **PASS** |
| Query | canonical `search` · **cấm** page gửi `q` | `queryParams.search` · export QS `routeId` `defectClass` `severity` `sourceKind` `from` `to` `search` applied | **PASS** |
| Domain | `api/v1/report` · DOMAIN-MAP `rpt-hang-muc-hu-hong` → Report | Controller + BFF `defects` / `defects/export` · **không** `ERP.Service.*` · **không** plural `reports` | **PASS** |
| Toast | `dispatchAppToast` · **cấm** `window.alert`/`confirm` | load/export/print/Chưa xem | **PASS** |
| DES-HH-01 | Làm mới `!viewed` → toast · **không** fetch | `reloadAll` gated | **PASS** |
| DES-HH-02 | Excel applied + `columnPrefs` subset | `exportDefects` applied + `subsetDefectsCsv` | **PASS** |
| Ngày | `formatDayVi` `vi-VN` | cột `day` | **PASS** |
| Lookup | CUC2 strip `QL.22` | `lookups.ts` filter `QL.22` | **PASS** |
| FilterRoute | exact `Equals` · **cấm** StartsWith | `StringComparison.OrdinalIgnoreCase` | **PASS** |

## Findings

Không P0 / P1.

| ID | Sev | Note |
|----|-----|------|
| REV-HH-01 | P2 | Seed BE in-memory 12 dòng — không join EF `rmms_ai_vision_detections` P1. Khớp SA GAP-SA-HH / GAP-PO-HH-07 P2. |
| REV-HH-02 | P2 | Integration road-route Type A live search + FE seed fallback; **cấm** clone catalog vào Report DTO. Khớp SA. |
| REV-HH-03 | note | Default kỳ tháng hiện tại; seed Jul 22–Aug 1 — tester nới kỳ QA-02. Không fail DoD. |
| REV-HH-04 | note | `endpoint.qs` còn map generic `params.q` cho family khác; page defects **chỉ** gửi `search`. Không P1. |
| REV-HH-05 | note | `[RequirePermission]` CommonLib ≥1.4.0 stub P1 — khớp TL. |

DES-HH-01 / DES-HH-02 / `formatDayVi` **closed** (Dev + QA).

## Verdict

**PASS** — Kind E leaf `/bao-cao/hang-muc-hu-hong` · API Report đúng DOMAIN-MAP · QA T-QA-01 PASS · SSOT report gates PASS.

**review_confirm = approve** (`autoApprove=ON`). Pipeline **done**.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings) |
| BE `dotnet build` | **N/A** Review — không đụng API (Dev prior keep BE) |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-review -->
