# Review — rpt-kiem-tra-cau (Kiểm tra cầu)

| Field | Value |
|-------|-------|
| feature | `rpt-kiem-tra-cau` |
| this role | `review` · `/agent-review` |
| status | `confirmed` |
| review_confirm | **approve** (`autoApprove=ON`) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/kiem-tra-cau` |
| mfeStdUrl | `http://localhost:9311/bao-cao/kiem-tra-cau` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/bridge-inspections` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** · pipeline leaf — không role sau Review |
| prior · qa | `confirmed` · `qa/scenarios.md` · `task_7994bb3f` · T-QA-01 PASS · P0 none |
| prior · dev | `confirmed` · `implement/rpt-kiem-tra-cau.md` · `task_31c75947` · DES-KTC-01 + T-UI-RPT-CHART-01 |
| prior · team_lead | `confirmed` · `task/rpt-kiem-tra-cau.md` |
| prior · sa | `confirmed` · `be/solution-discovery.md` |
| prior · design | `confirmed` · `ui/design.md` + prototype |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_ac0dba4f` |
| updatedAt | `2026-08-16T07:30:00.000Z` |

**Phương pháp:** static re-audit live `BridgeInspectionReportPage.tsx` + `BridgeInspectionFilterBar.tsx` + `endpoint.ts` `getBridgeInspections`/`exportBridgeInspections` + `lookups.ts` + BE `ReportQueryController` / `ReportService.FilterBridgeInspections` / `FilterRoute` + Report BFF Forward + DOMAIN-MAP `rpt-kiem-tra-cau` → Report. **Không** write FE/BE (QA PASS · không GAP P0/P1). **Cấm** `ERP.*`.

## SSOT surface (live)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` `kind="report"` · **cấm** nested CatalogListShell | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `visibleColumns` `resizable: true` · `tableConfig` `resizable: true` · migrate `rmms-bridge-inspection-report-resizable-default-on-v1` | **PASS** |
| 3 | Footer **luôn** `LinCatalogListPagination` | Footer không gate · `totalCount=0` khi `!viewed` | **PASS** |
| 4 | flex + skeleton | `.page` + `skeletonRows={8}` · `data-catalog-list-page` | **PASS** |
| 5 | toolbar config FULL Kind E | Làm mới gated · chart KPI · print `LinReportPrintScopeModal` · `ReportDisplayConfigModal` · Excel `canExport=viewed` · **cấm** `LinCatalogUiSchemaEditorModal` / `LinListTableConfigModal` / `configHint` | **PASS** |
| 6 | list_parity SearchInput + Date · **cấm** native `<select>` | `BridgeInspectionFilterBar` SearchInput tab/tuyến/cầu/loại + Date + Input trên `LinErpListFilterBar` | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Thêm mới / Resource / Slideout / View=`readOnly` | Không `onAdd` Zone A · không form | **PASS** |
| Query | canonical `search` · **cấm** page gửi `q` | `queryParams.search` + `tab` + `type` · export QS applied · **không** page | **PASS** |
| Domain | `api/v1/report/bridge-inspections` · DOMAIN-MAP Report | Controller + BFF + `/export` · **không** `ERP.Service.*` · **không** plural `reports` | **PASS** |
| Toast | `dispatchAppToast` · **cấm** `window.alert`/`confirm` | load/export/print/Chưa xem | **PASS** |
| DES-KTC-01 | Làm mới `!viewed` → toast «Chưa xem» · **không** fetch | `reloadAll` gated · **không** `applyAndView` | **PASS** |
| DES-KTC-02 | Excel applied + `canExport=viewed` | `exportBridgeInspections` applied · filename `bridge-inspections.csv` | **PASS** |
| DES-KTC-04 | Tab draft đến Xem | Filter chỉ `setTabDraft` · cột/`tab` applied sau `applyAndView` | **PASS** |
| Chart | KPI **Dòng · Tuyến · Ưu tiên cao** · **cấm** stub toast | `chartBuilt.kpis` từ `items` · **không** API chart | **PASS** |
| Ngày | `formatDayVi` `vi-VN` từ `row.day` | phiếu / kết quả / KT gần nhất | **PASS** |
| Lookup | CUC2 strip `QL.22` | `lookups.ts` filter `QL.22` | **PASS** |
| FilterRoute | exact `Equals` · **cấm** StartsWith | `StringComparison.OrdinalIgnoreCase` | **PASS** |
| Summary | GroupBy `BridgeId` BE · `id=sum-{bridgeId}` | `FilterBridgeInspections` tab summary | **PASS** |
| Drill | `inspectionId \|\| id` · `/csdl-so-sach?kind=bridge-inspections` | cột `drill` | **PASS** |

## Findings

Không P0 / P1.

| ID | Sev | Note |
|----|-----|------|
| REV-KTC-01 | P2 | Seed BE in-memory 12 phiếu (`t1`–`t12`) CUC2 — không join EF passport/inspection P2. Khớp QA Out of pack / SA. |
| REV-KTC-02 | P2 | `saveReportColumnPrefs(TEST_ID, …)` vs `loadReportColumnPrefs(\`${TEST_ID}-${tab}\`, …)` — persist reload lệch key; in-session `setColumnPrefs` vẫn đúng. Không fail DoD Kind E analog. |
| REV-KTC-03 | P2 | Integration road-route Type A live search + FE seed fallback; **cấm** clone catalog vào Report DTO. Khớp SA. |
| REV-KTC-04 | note | Default kỳ tháng hiện tại; seed Jul–Aug — tester nới kỳ QA-02. Không fail DoD. |
| REV-KTC-05 | note | `endpoint.qs` còn map generic `params.q` cho family khác; page bridge-inspections **chỉ** gửi `search`. Không P1. |
| REV-KTC-06 | note | `[RequirePermission]` CommonLib ≥1.4.0 stub P1 — khớp TL. |
| REV-KTC-07 | note | Excel CSV UTF-8 BOM analog Kind E — không 18-class Excel sổ 4 P2. |

DES-KTC-01 / T-UI-RPT-CHART-01 **closed** (Dev + QA).

## Verdict

**PASS** — Kind E leaf `/bao-cao/kiem-tra-cau` · API Report đúng DOMAIN-MAP · QA T-QA-01 PASS · SSOT report gates PASS.

**review_confirm = approve** (`autoApprove=ON`). Pipeline **done**.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings · `linm-rmms-report.f977f199.js`) |
| BE `dotnet build` | **N/A** Review — không đụng API (Dev prior keep BE) |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-review -->
