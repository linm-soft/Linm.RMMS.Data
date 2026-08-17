# Implement — rpt-su-co (Dev · task_d0368265)

| Field | Value |
|-------|-------|
| feature | `rpt-su-co` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | **`report`** Kind **E** |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/su-co` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_d0368265` |
| prior | team_lead `confirmed` · `task/rpt-su-co.md` · `task_89fd3207` |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T17:10:00.000Z` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** path API mới · **cấm** Kind B schema editor · **cấm** rewrite leaf.

## retry.ssot_rereview (live trước Write · 2026-08-16)

Re-audit `IncidentReportPage.tsx` + `IncidentFilterBar.tsx` + `reportEndpoint` + BFF/API `incidents` theo TL `tl-retry-ssot-rereview`. **Không GAP bắt buộc** → **verify keep** (không patch 1 chỗ).

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` kind=`report` · cấm nested CatalogListShell | **PASS** | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate key | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn (kể cả chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` · `skeletonRows={8}` | — |
| 5 | reportToolbar Config FULL | **PASS** `ReportDisplayConfigModal` · **cấm** `LinListTableConfigModal` / `configHint` / Kind B editor | — |
| 6 | `LinErpListFilterBar` SearchInput ×4 + Date + Input | **PASS** · **cấm** native select | — |
| 7 | Form OUT · cấm Resource/Slideout/View=readOnly | **PASS** | — |
| 8 | Thêm mới Zone A | **PASS** không nút | — |
| 9 | Xem mới load · empty hint | **PASS** `viewed` | — |
| 10 | Làm mới `!viewed` | **PASS** toast «Chưa xem» · không fetch | — |
| 11 | Excel viewed + applied filters + subset cột | **PASS** `canExport: viewed` · query `search` | — |
| 12 | Lookup SearchInput · cấm QL.22 · cấm `INCIDENT_KIND_LOOKUP` leaf | **PASS** | — |
| 13 | TZ `formatAtVi` vi-VN từ `at` | **PASS** | — |
| 14 | Drill Field `/incident?id=` top window | **PASS** | — |
| 15 | Chart SoCai client KPI Dòng · Tuyến · Mở | **PASS** | — |
| 16 | `filterMaxWidthPx={null}` · toast SSOT | **PASS** | — |
| 17 | Query canonical `search` (không `q`) | **PASS** | — |
| 18 | ERP.* / plural reports trên leaf | **none** | — |

## FE (keep)

- Route `/bao-cao/su-co` → `IncidentReportPage` · `pageId` `rpt-su-co` · testid `rmms-incident-report`
- Filter draft → **Xem** apply · Enter Input = Xem
- `GET /report/incidents` · `GET /report/incidents/export` blob
- Drill không GetById Report

## BE / BFF Step 4b (keep — không đụng file)

- API `GET api/v1/report/incidents` + `/incidents/export` · FilterRoute exact · pageSize `{50,100,200,500}` · seed 12
- BFF `web-bff/api/v1/report/incidents` + `/export` QS passthrough
- DOMAIN-MAP `rpt-su-co` → Report · kebab `report`
- **Không** migration · **không** folder domain mới · **không** `ERP.Service.*`

## T-* after Dev

| id | status |
|----|--------|
| T-CTX-01 … T-UI-UX-01 · T-BE-01 · T-BE-02 · T-BFF-01 | **done / PASS keep** |
| T-PERM-01 | stub P1 |
| T-QA-01 · T-RV-01 | pending |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** webpack 5.109.2 · `linm-rmms-report.df9b004e.js` · 3 size warnings |
| BE `dotnet build` | **skip** — Dev **không** đụng API/BFF (TL: chỉ build BE nếu đụng API) |

**Cấm** handoff QA nếu build fail — **không** fail.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
