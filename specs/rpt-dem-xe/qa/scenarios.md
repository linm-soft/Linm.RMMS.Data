# QA — scenarios — rpt-dem-xe (Kind E) · QA `task_5025d700`

| Field | Value |
|-------|-------|
| feature | `rpt-dem-xe` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF (Dev `task_95b28cef`) |
| mfeStdUrl | `http://localhost:9311/bao-cao/dem-xe` |
| mfeStdRoute | `/bao-cao/dem-xe` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROAD_ROUTE` CUC2 + strip `QL.22` · tab `kq`/`b1`/`b2` · `COUNT_STATION_LOOKUP` FE |
| taskId | `task_5025d700` |
| prior Dev | `task_95b28cef` · implement `done` · DES-DX-01/02/03 + `formatDayVi` |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `TrafficCountReportPage` + `TrafficCountFilterBar` + `endpoint.ts` `getTrafficCounts`/`exportTrafficCounts` + `lookups.ts` + `ReportService` `FilterTrafficCounts`/`FilterRoute` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T06:55:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/dem-xe` · `http://localhost:9311/bao-cao/dem-xe` | Mount `TrafficCountReportPage` · không 404 · `data-testid=rmms-traffic-count-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/điểm/kỳ/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới gated · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportTrafficCounts` `getBlob` `/report/traffic-counts/export` · QS `type` `routeId` `stationId` `from` `to` `search` **applied** · filename theo `viewTab` · **không** page | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Đếm xe» · `fas fa-car` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput bảng/tuyến/điểm · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | `listTitle` theo tab · `LinCatalogDataGrid` `resizable: true` · cột KQ/B.1/B.2 · drill CSDL chỉ KQ · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/dem-xe` | Title Đếm xe · empty «Chưa xem — nhấn «Xem» để tải báo cáo đếm xe.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** (`tc1`–`tc12`) CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem» · **không** `applyAndView` · **không** fetch | **PASS** (DES-DX-01) |
| QA-04 | Xuất Excel | CSV UTF-8 BOM · gated `viewed` · params applied · filename `traffic-counts.csv` / `-b1.csv` / `-b2.csv` | **PASS** (DES-DX-02) |
| QA-05 | Config cột | `ReportDisplayConfigModal` · persist `saveReportColumnPrefs` per `${FAMILY}-${viewTab}` | **PASS** |
| QA-06 | Mở sổ đếm xe | `drillCsdl` top `/csdl-so-sach?kind=traffic-counts&id=` · `sourceId \|\| id` · **chỉ** cột KQ | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | list `qs()` gửi `type` `search` (không `q`/`tab` từ page) · `routeId` `stationId` `from` `to` `page` `pageSize` | **PASS** (`queryParams`) |
| QA-09 | Grid ngày | `formatDayCell` `vi-VN` từ `row.day` · B.2 `min..max` → `a → b` | **PASS** |
| QA-10 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · tab enum · điểm đếm enum + empty Tất cả | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.10` · `Equals` OrdinalIgnoreCase · **cấm** StartsWith | **PASS** (BE helper) |
| QA-12 | Tab khi viewed | `handleViewTabChange` set `viewTab` + `page=1` refetch `type` · **không** apply draft route/station/kỳ/search | **PASS** (DES-DX-03) |
| QA-13 | Tab B.2 | BE `GroupBy` Route · `id=agg-{route}` · `station`/`sourceId` empty · **không** cột drill | **PASS** |
| QA-14 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` · Xem không nới kỳ chỉ seed trong tháng | **PASS** (contract · không P0) |

## T-QA-01 — DoD vs live (sau Dev DES-DX-01/02/03 + formatDayVi)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `search`+`type` · cột Design | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated · Excel gated viewed + applied · tab refetch khi viewed · chart SoCai client · print modal · config FULL · drill CSDL KQ | **PASS** |
| T-UI-LKP-01 | bảng/tuyến/điểm SearchInput · **cấm** QL.22 · **cấm** native select | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `day` `vi-VN` · B.2 `a → b` | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/dem-xe` · pageId `rpt-dem-xe` · testId `rmms-traffic-count-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/traffic-counts` · FilterRoute **exact** · FilterDay · type b2 GroupBy · pageSize allow-list · in-memory 12 · **không** migration · canonical `search` (không alias `q`/`tab` P1) | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM filename theo `type` · **không** page | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` traffic-counts + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo đếm xe» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** (Page helper) |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId`/`stationId` empty/`all` | all | **PASS** (`FilterTrafficCounts`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.10 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |
| N10 | Đổi draft tuyến khi viewed rồi Excel | Excel dùng `routeId` applied, không draft | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/traffic-counts` + `type` `routeId` `stationId` `from` `to` `search` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/traffic-counts/export` | **PASS** (BOM + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings · `linm-rmms-report.cba78c1a.js`) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_95b28cef` **keep** BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF `TrafficCountSummary` P2 · 18 class Excel sổ 4 P2 · Integration road-route Type A live (seed fallback P1) · live browser click (static+build). Modal title analog Kind E vs Kind B «Cấu hình hiển thị danh mục» — **không P0**.

## P0 / GAP

Không P0. Dev GAP DES-DX-01 Làm mới · DES-DX-02 Excel applied/`canExport` · DES-DX-03 tab refetch · `formatDayVi` **đóng** — QA xác nhận.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

## Handoff Review

- Artifact: `specs/rpt-dem-xe/qa/scenarios.md`
- Review = **pending** đến lượt (`roleOnly=qa` this task).
- autoApprove ON trên board → enqueue `/agent-review` sau `completed` task QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
