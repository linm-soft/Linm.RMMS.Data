# Review — rpt-dem-xe (Đếm xe)

| Field | Value |
|-------|-------|
| feature | `rpt-dem-xe` |
| this role | `review` · `/agent-review` |
| status | `confirmed` |
| review_confirm | **approve** (`autoApprove=ON`) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/dem-xe` |
| mfeStdUrl | `http://localhost:9311/bao-cao/dem-xe` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** · pipeline leaf — không role sau Review |
| prior · qa | `confirmed` · `qa/scenarios.md` · `task_5025d700` · T-QA-01 PASS · P0 none |
| prior · dev | `confirmed` · `implement/rpt-dem-xe.md` · `task_95b28cef` · DES-DX-01/02/03 + `formatDayVi` |
| prior · team_lead | `confirmed` · `task/rpt-dem-xe.md` |
| prior · sa | `confirmed` · `be/solution-discovery.md` |
| prior · design | `confirmed` · `ui/design.md` + prototype |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_e6256f4a` |
| updatedAt | `2026-08-16T07:00:00.000Z` |

**Phương pháp:** static re-audit live `TrafficCountReportPage.tsx` + `TrafficCountFilterBar.tsx` + `endpoint.ts` `getTrafficCounts`/`exportTrafficCounts` + `lookups.ts` + BE `ReportQueryController` / `ReportService.FilterTrafficCounts` / `FilterRoute` + Report BFF Forward + DOMAIN-MAP `rpt-dem-xe` → Report. **Không** write FE/BE (QA PASS · không GAP P0/P1). **Cấm** `ERP.*`.

**Supersedes** stub Review `task_d8caf0e9`. Pack này re-audit sau Dev DES-DX-01/02/03 + QA `task_5025d700`.

## SSOT surface (live)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` `kind="report"` · **cấm** nested CatalogListShell | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `visibleColumns` `resizable: true` · `tableConfig` `resizable: true` · migrate `rmms-traffic-count-report-resizable-default-on-v1` | **PASS** |
| 3 | Footer **luôn** `LinCatalogListPagination` | Footer không gate · `totalCount=0` khi `!viewed` · sizes từ pager SSOT | **PASS** |
| 4 | flex + skeleton | `.page` + `skeletonRows={8}` · `data-catalog-list-page` | **PASS** |
| 5 | toolbar config FULL Kind E | Làm mới gated · chart · print `LinReportPrintScopeModal` · `ReportDisplayConfigModal` · Excel `canExport=viewed` · **cấm** `LinCatalogUiSchemaEditorModal` / `LinListTableConfigModal` / `configHint` | **PASS** |
| 6 | list_parity SearchInput + Date · **cấm** native `<select>` | `TrafficCountFilterBar` SearchInput ×3 (bảng/tuyến/điểm) + Date + Input trên `LinErpListFilterBar` | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Thêm mới / Resource / Slideout / View=`readOnly` | Không `onAdd` Zone A · không form | **PASS** |
| Query | canonical `search` · **cấm** page gửi `q` | `queryParams.search` + `type` · export QS `type` `routeId` `stationId` `from` `to` `search` applied · **không** page | **PASS** |
| Domain | `api/v1/report` · DOMAIN-MAP `rpt-dem-xe` → Report | Controller + BFF `traffic-counts` / `traffic-counts/export` · **không** `ERP.Service.*` · **không** plural `reports` | **PASS** |
| Toast | `dispatchAppToast` · **cấm** `window.alert`/`confirm` | load/export/print/Chưa xem | **PASS** |
| DES-DX-01 | Làm mới `!viewed` → toast · **không** fetch | `reloadAll` gated | **PASS** |
| DES-DX-02 | Excel applied + `canExport=viewed` | `exportTrafficCounts` applied · filename theo `viewTab` | **PASS** |
| DES-DX-03 | Tab khi viewed refetch `type` · không apply draft route/station/kỳ/search | `handleViewTabChange` set `viewTab` + `page=1` | **PASS** |
| Ngày | `formatDayVi` `vi-VN` · B.2 `min..max` → `a → b` | `formatDayCell` | **PASS** |
| Lookup | CUC2 strip `QL.22` | `lookups.ts` filter `QL.22` | **PASS** |
| FilterRoute | exact `Equals` · **cấm** StartsWith | `StringComparison.OrdinalIgnoreCase` | **PASS** |
| B.2 | GroupBy Route BE · `id=agg-{route}` · không cột drill | `FilterTrafficCounts` type b2 | **PASS** |
| Drill | chỉ tab KQ · `sourceId \|\| id` · `/csdl-so-sach?kind=traffic-counts` | cột `drill` KQ only | **PASS** |

## Findings

Không P0 / P1.

| ID | Sev | Note |
|----|-----|------|
| REV-DX-01 | P2 | Seed BE in-memory 12 dòng (`tc1`–`tc12`) — không join EF `TrafficCountSummary` P1. Khớp QA Out of pack / SA. |
| REV-DX-02 | P2 | AADT P1 = `totalCars` (B.2 agg). Không fail DoD. |
| REV-DX-03 | P2 | Integration road-route Type A live search + FE seed fallback; **cấm** clone catalog vào Report DTO. Khớp SA. |
| REV-DX-04 | note | Default kỳ tháng hiện tại; seed Jul–Aug — tester nới kỳ QA-02. Không fail DoD. |
| REV-DX-05 | note | `endpoint.qs` còn map generic `params.q` cho family khác; page traffic-counts **chỉ** gửi `search`. Không P1. |
| REV-DX-06 | note | `[RequirePermission]` CommonLib ≥1.4.0 stub P1 — khớp TL. |
| REV-DX-07 | note | Excel CSV UTF-8 BOM analog Kind E — không 18-class Excel sổ 4 P2. |

DES-DX-01 / DES-DX-02 / DES-DX-03 / `formatDayVi` **closed** (Dev + QA).

## Verdict

**PASS** — Kind E leaf `/bao-cao/dem-xe` · API Report đúng DOMAIN-MAP · QA T-QA-01 PASS · SSOT report gates PASS.

**review_confirm = approve** (`autoApprove=ON`). Pipeline **done**.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings · `linm-rmms-report.cba78c1a.js`) |
| BE `dotnet build` | **N/A** Review — không đụng API (Dev prior keep BE) |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-review -->
