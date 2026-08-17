# Implement — rpt-cong-van (Dev)

| Field | Value |
|-------|-------|
| feature | `rpt-cong-van` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `report` · Kind E |
| changeScope | `edit_page` |
| taskId | `task_adae5aea` |
| autoApprove | **ON** (run packet) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-15T23:20:00.000Z` |

## retry.ssot_rereview (HARD · trước Write)

Live `OfficialDocsReportPage` + FilterBar + Report API — Dev **không** chỉ patch 1 GAP.

| # | Check | After Dev |
|---|-------|-----------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột `resizable: true` explicit (cột + tableConfig + visibleColumns) | **PASS** |
| 3 | Footer `LinCatalogListPagination` luôn | **PASS** |
| 4 | flex + skeleton | **PASS** |
| 5 | reportToolbar + Config FULL | **PASS** |
| 6 | `LinErpListFilterBar` SearchInput · **cấm** native select | **PASS** |
| 7 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| 8 | Excel `canExport=viewed` · params **applied** · CSV subset `columnPrefs` | **PASS** |
| 9 | FE query canonical `direction`/`q` | **PASS** |
| 10 | BE coalesce `direction ?? type`, `q ?? search` · canonical thắng | **PASS** |
| 11 | Grid `day` `toLocaleDateString('vi-VN')` | **PASS** |
| 12 | Lookup enum FE · **cấm** road-route / QL.22 | **PASS** |
| 13 | pageSize allow `{50,100,200,500}` BE `AllowedPageSizes` | **PASS** |

## FE (MFE `Linm.Web.RMMS.Report`)

- `ReportQueryParams` + `qs()` / export QS: `direction`, `q`.
- `OfficialDocsReportPage`: list/export dùng applied (`direction`/`orgUnitId`/`from`/`to`/`q`) · `canExport: viewed` · `formatDayVi` · `resizable: true` · CSV column subset.
- Route `/bao-cao/cong-van` · **không** CRUD form.

## BE (`Linm.RMMS.WebService` · domain Report)

- `GET api/v1/report/official-docs` + `/export`: query `direction` `q` + alias `type` `search`.
- `IReportService` / `FilterOfficialDocs` coalesce.
- BFF proxy QS passthrough — **không** đổi business.
- **Không** migration · **không** `ERP.*`.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** |
| MFE `yarn build` | **PASS** (size warnings only) |
| BE `dotnet build` API | **PASS** (isolated `-o .build-verify/api`; default bin locked by running `RMMS.Service.Api`) |
| BE `dotnet build` BFF Report | **PASS** |

## Handoff QA

- QA pending · mfeStdUrl `http://localhost:9311/bao-cao/cong-van`
- Xem → Excel gated · query direction/q · form OUT · day vi-VN · resize cột

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
