# Implement — rpt-un-tac (Dev · task_df3abdf0)

| Field | Value |
|-------|-------|
| feature | `rpt-un-tac` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | **`report`** Kind **E** (packet board `list` stale — **cấm** Kind B) |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/un-tac` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_df3abdf0` |
| autoApprove | **ON** |
| prior | TL `task_cec813d0` **confirmed** |
| updatedAt | `2026-08-16T16:22:00.000Z` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** Kind B `LinCatalogUiSchemaEditorModal` · **cấm** path API mới P1 · **cấm** migration P1.

## retry.ssot_rereview (HARD · live trước Write · 2026-08-16)

Re-audit `CongestionReportPage.tsx` + `CongestionFilterBar.tsx` + `reportEndpoint.getCongestion` + BFF/API `congestion` + DOMAIN-MAP `rpt-un-tac` → Report. **Không** rewrite Kind E → Kind B. **Không** patch 1 chỗ khi còn GAP cùng surface — surface **PASS**, Dev = **verify keep**.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested CatalogListShell | **PASS** `pageId` `rpt-un-tac` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn (kể cả chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + config FULL | **PASS** `ReportDisplayConfigModal` + `columnPrefs` | **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema |
| 6 | `LinErpListFilterBar` SearchInput loại/tuyến + Date + Input | **PASS** | — |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | T-UI-FORM **OUT** |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` | — |
| 11 | Làm mới `!viewed` | **PASS** toast «Chưa xem» · không fetch | — |
| 12 | Excel viewed + applied + subset cột | **PASS** `canExport: viewed` · `congestion.csv` | — |
| 13 | Lookup SearchInput · **cấm QL.22** | **PASS** `ROAD_ROUTE_LOOKUP_CONFIG` · `CONGESTION_TYPE_LOOKUP` | — |
| 14 | pageSize 50/100/200/500 | **PASS** pager + BE allow-list keep | — |
| 15 | TZ `formatAtVi` vi-VN từ `at` | **PASS** | — |
| 16 | ERP.* / plural reports | **none** · FE `/report/congestion` | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | **PASS** `dispatchAppToast` · print modal | — |
| 19 | Drill Field | **PASS** `/incident?id=` top window | — |
| 20 | Chart SoCai | **PASS** by-type / by-route · KPI Dòng · Tuyến · Ùn tắc | — |
| 21 | leftover `const columns` Kind E | **OK** (không `buildDynamicGridColumns`) | — |
| 22 | Query canonical `search` | **PASS** không `q` | — |
| 23 | FE **không** gửi `status` | **PASS** `queryParams` không có `status` | — |
| 24 | **GAP-SA-UNTAC-DRAFT** | **PASS keep** — `*Draft` bind filter; `queryParams` chỉ `type` `routeId` `fromDate` `toDate` `search` `page` `pageSize` applied; `applyAndView` copy draft→applied + `page=1` + `viewed=true`; `useEffect(load)` phụ thuộc `queryParams` applied **không** gộp draft | **đóng** · không regress |

## DoD tasks

| id | Result |
|----|--------|
| T-UI-LIST-01 | **pass** Kind E A–D |
| T-UI-FORM-01 | **OUT** |
| T-UI-ACT-01 | **pass** Xem / Làm mới gated / Excel applied / drill |
| T-UI-LKP-01 | **pass** |
| T-UI-FIELD-01 | **pass** |
| T-UI-PROD-01 | **pass** testid `rmms-congestion-report` · route `/bao-cao/un-tac` |
| T-UI-UX-01 | **pass** |
| T-BE-01 / T-BE-02 / T-BFF-01 | **keep** · **không** đụng file BE task này |
| T-PERM-01 | stub `report.un-tac.read` P1 |

## FE

- Route `/bao-cao/un-tac` → `CongestionReportPage` · `pageId` `rpt-un-tac`
- `GET /report/congestion` · `GET /report/congestion/export`
- Filter draft vs applied: đổi loại/tuyến/kỳ/tìm **không** gọi `getCongestion` đến **Xem**; pager/Làm mới dùng applied.

## BE / BFF Step 4b

- **Không** path mới · **không** migration · **không** folder domain mới (TL P1).
- Keep: `GET api/v1/report/congestion` + `/congestion/export` · BFF `web-bff/api/v1/report/congestion` + `/export`
- DOMAIN-MAP `rpt-un-tac` → Report kebab `report`
- Seed 12 in-memory

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** webpack 5.109.2 production |
| BE `dotnet build` | **n/a** — task này **không** đụng API/DTO/migration |

**Cấm** handoff QA nếu build fail — MFE **PASS**.

## Handoff QA

- autoApprove **ON** · chain **ON** → enqueue **qa** (`T-QA-01` pending đến lượt).
- Roles Review = **pending**. **Cấm** nhảy Review.
- This task `roleOnly=dev` · **không** chạy QA trong `task_df3abdf0`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
