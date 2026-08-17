# Implement — rpt-thien-tai (Dev · task_96679c24)

| Field | Value |
|-------|-------|
| feature | `rpt-thien-tai` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** Kind **E** (packet board `list` stale) |
| mfeStdUrl | `http://localhost:9311/bao-cao/thien-tai` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_96679c24` |
| autoApprove | **ON** |
| prior | TL `task_02212445` confirmed · SA `task_11c414f1` · Design `task_8236dc10` |
| updatedAt | `2026-08-16T18:20:00.000Z` |

**Verify keep** toàn surface Kind E theo TL `retry.ssot_rereview` — **không** rewrite Kind B · **không** path API mới · **không** migration · **không** `ERP.*`.

## retry.ssot_rereview (live trước Write · 2026-08-16)

Audit `DisasterReportPage.tsx` + `DisasterFilterBar.tsx` + `report/endpoint.ts` + `ReportQueryController` `GET disasters` + BFF proxy.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + config FULL | **PASS** `ReportDisplayConfigModal` · **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema editor | — |
| 6 | `LinErpListFilterBar` SearchInput tuyến+loại · Date · Input | **PASS** | — |
| 7 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** | — |
| 8 | Thêm mới Zone A | **PASS** không nút | — |
| 9 | Xem mới load · empty hint | **PASS** `viewed` | — |
| 10 | Làm mới `!viewed` | **PASS** toast «Chưa xem» · không fetch | — |
| 11 | Excel viewed + applied + subset cột | **PASS** `canExport: viewed` · `disasters.csv` | — |
| 12 | Lookup · **cấm QL.22** · **cấm** `INCIDENT_TYPE_LOOKUP` | **PASS** `DISASTER_TYPE_LOOKUP` + CUC2 filter | — |
| 13 | Query `search` (không `q` từ FE) | **PASS** | — |
| 14 | TZ `formatAtVi` vi-VN từ `at` | **PASS** | — |
| 15 | Drill `/incident?id=` top window | **PASS** | — |
| 16 | Chart SoCai KPI Dòng · Tuyến · Nghiêm trọng | **PASS** | — |
| 17 | `filterMaxWidthPx={null}` · toast SSOT | **PASS** | — |
| 18 | FilterRoute exact BE · pageSize allow-list | **PASS keep** | — |
| 19 | leftover Kind E `const columns` | **OK** (cấm đổi Kind B) | — |
| 20 | ERP.* / `api/v1/reports` | **none** | — |

**Không** GAP FE/BE bắt buộc cùng surface → **không** patch code. Step 4b = **keep** live `GET /api/v1/report/disasters` + `/disasters/export` + BFF proxy.

## FE (keep)

- Route `/bao-cao/thien-tai` → `DisasterReportPage` · pageId `rpt-thien-tai` · testId `rmms-disaster-report`
- Filter draft → **Xem** apply · Enter Input = Xem
- `GET /report/disasters` params `type` `routeId` `from` `to` `search` `page` `pageSize`
- Export `GET /report/disasters/export` applied filters · subset CSV theo `columnPrefs`

## BE / BFF Step 4b (keep · không file mới)

- `GET api/v1/report/disasters` + `/disasters/export` · seed in-memory · FilterRoute exact · FilterDate `At` tz_day
- BFF `web-bff/api/v1/report/disasters` (+ export) QS passthrough
- DOMAIN-MAP slug `rpt-thien-tai` → domain **Report**
- **Không** migration · **không** folder domain mới · **không** `ERP.*`

## T-* closeout Dev

| id | Result |
|----|--------|
| T-UI-LIST-01 … T-UI-UX-01 | **PASS keep** |
| T-BE-01 · T-BE-02 · T-BFF-01 | **PASS keep** |
| T-PERM-01 | stub P1 — **không** block |
| T-QA-01 · T-RV-01 | **pending** đến lượt |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** webpack 5.109.2 · `linm-rmms-report.8ba79005.js` · 3 size warnings |
| BE API alt `-o` `.tmp-build-rpt-thien-tai-api` | **PASS** `RMMS.Service.Api` 0 error |
| BE BFF alt `-o` `.tmp-build-rpt-thien-tai-bff` | **PASS** `LINM.RMMS.Report.Bff` 0 error |

**Cấm** `completed` / handoff QA nếu build fail — compile **PASS**.

## Handoff

- roleOnly=`dev` · **không** chạy QA trong `task_96679c24`
- autoApprove **ON** → board enqueue **qa** · Review = pending
- mfeStdUrl `http://localhost:9311/bao-cao/thien-tai`

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
