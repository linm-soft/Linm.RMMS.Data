# QA — scenarios — rpt-thien-tai (Kind E) · QA `task_bafba567`

| Field | Value |
|-------|-------|
| feature | `rpt-thien-tai` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF (Dev `task_96679c24` keep) |
| mfeStdUrl | `http://localhost:9311/bao-cao/thien-tai` |
| mfeStdRoute | `/bao-cao/thien-tai` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROAD_ROUTE_LOOKUP` CUC2 strip `QL.22` · `DISASTER_TYPE_LOOKUP` Bão/Lũ/Sạt lở/Ngập úng/Lốc/Sét · **cấm** `INCIDENT_TYPE_LOOKUP` trên leaf |
| taskId | `task_bafba567` |
| prior Dev | `task_96679c24` · implement `done` · verify keep Kind E |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `DisasterReportPage` + `DisasterFilterBar` + `endpoint.ts` `getDisasters`/`exportDisasters` + `lookups.ts` + `ReportService` `FilterDisasters`/`FilterRoute`/`FilterDate` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T18:25:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/thien-tai` · `http://localhost:9311/bao-cao/thien-tai` | Mount `DisasterReportPage` · không 404 · `data-testid=rmms-disaster-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/loại/ngày/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportDisasters` `getBlob` `/report/disasters/export` · QS `type` `routeId` `from` `to` `search` **applied** · download `disasters.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` drill→`id` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` trên leaf | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Thiên tai, bão lũ» · `fas fa-cloud-showers-heavy` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tuyến+loại · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` · **không** filter mức/TT | **PASS** |
| C | `listTitle` «Thiên tai, bão lũ» · `LinCatalogDataGrid` `resizable: true` · cột ngày/tuyến/loại/kmRange/mức/thiệt hại/drill · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/thien-tai` | Title Thiên tai, bão lũ · empty «Chưa xem — nhấn «Xem» để tải báo cáo thiên tai.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** dòng (2026-07-05…2026-08-03) · CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem» · **không** fetch | **PASS** (DES-TT-01) |
| QA-04 | Xuất Excel | `disasters.csv` UTF-8 BOM · gated `viewed` · params applied · subset `columnPrefs` | **PASS** (DES-TT-02) |
| QA-05 | Config cột | `ReportDisplayConfigModal` · persist `saveReportColumnPrefs` · CSV subset | **PASS** |
| QA-06 | Mở sự cố | `drillIncident` top `/incident?id=` · `row.id` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | list `qs()` gửi `search` (không `q` từ page) · `type` `routeId` `from` `to` | **PASS** (`queryParams`) |
| QA-09 | Grid thời gian | `formatAtVi` `vi-VN` từ `row.at` | **PASS** |
| QA-10 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · loại `DISASTER_TYPE_LOOKUP` + empty Tất cả · **cấm** `INCIDENT_TYPE_LOOKUP` trên `DisasterFilterBar` | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase · **cấm** StartsWith | **PASS** (BE helper) |
| QA-12 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` Aug 2026 → seed `d1`/`d7`/`d8` (2026-08-01…03) nếu Xem không nới kỳ | **PASS** (contract · không P0) |
| QA-13 | Chart SoCai | client KPI Dòng · Tuyến · Nghiêm trọng khi viewed + có dòng · **không** API chart | **PASS** |

## T-QA-01 — DoD vs live (sau Dev keep Kind E)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `search` · cột Design | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill `/incident?id=` | **PASS** |
| T-UI-LKP-01 | tuyến SearchInput CUC2 · **cấm** QL.22 · `DISASTER_TYPE_LOOKUP` · **cấm** incident type lookup trên leaf | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `at` `vi-VN` · Nguồn = drill | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/thien-tai` · pageId `rpt-thien-tai` · testId `rmms-disaster-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/disasters` · FilterRoute **exact** · FilterDate `At` · pageSize allow-list · in-memory 12 · **không** migration · canonical `search` (BE alias `q` khi `search` trống) | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM `disasters.csv` full default header | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` disasters + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo thiên tai» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** (GetDisastersAsync) |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId`/`type` empty | all (routeId empty/`all` skip) | **PASS** (`FilterDisasters`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.15/QL.217 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/disasters` + `type` `routeId` `from` `to` `search` `q` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/disasters/export` | **PASS** (BOM + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · `linm-rmms-report.8ba79005.js` · 3 size warnings) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_96679c24` **keep** BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF `rmms_incidents` P2 · Integration road-route Type A P2 · live browser click (static+build). Modal title analog Kind E vs Kind B «Cấu hình hiển thị danh mục» — **không P0**.

## P0 / GAP

Không P0. Dev keep Kind E + DES-TT-01 Làm mới · DES-TT-02 Excel applied/`canExport`/`columnPrefs` · `formatAtVi` **đóng** — QA xác nhận.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
