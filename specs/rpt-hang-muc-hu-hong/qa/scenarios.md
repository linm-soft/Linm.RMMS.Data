# QA — scenarios — rpt-hang-muc-hu-hong (Kind E) · QA `task_a74b1c81`

| Field | Value |
|-------|-------|
| feature | `rpt-hang-muc-hu-hong` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF (Dev `task_af0d0e56`) |
| mfeStdUrl | `http://localhost:9311/bao-cao/hang-muc-hu-hong` |
| mfeStdRoute | `/bao-cao/hang-muc-hu-hong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROAD_ROUTE_LOOKUP` CUC2 + strip `QL.22` · enum loại/mức/nguồn FE |
| taskId | `task_a74b1c81` |
| prior Dev | `task_af0d0e56` · implement `done` · DES-HH-01/02 + `formatDayVi` |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `DefectReportPage` + `DefectFilterBar` + `endpoint.ts` `getDefects`/`exportDefects` + `lookups.ts` + `ReportService` `FilterDefects`/`FilterRoute` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T06:10:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/hang-muc-hu-hong` · `http://localhost:9311/bao-cao/hang-muc-hu-hong` | Mount `DefectReportPage` · không 404 · `data-testid=rmms-defect-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 (BE `AllowedPageSizes`) | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/loại/mức/nguồn/ngày/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportDefects` `getBlob` `/report/defects/export` · QS `routeId` `defectClass` `severity` `sourceKind` `from` `to` `search` **applied** · download `defects.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` drill→`sourceId` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Hạng mục hư hỏng» · `fas fa-road` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tuyến/loại/mức/nguồn · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | `listTitle` «Hạng mục hư hỏng» · `LinCatalogDataGrid` `resizable: true` · cột Design · drill AI · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/hang-muc-hu-hong` | Title Hạng mục hư hỏng · empty «Chưa xem — nhấn «Xem» để tải báo cáo hạng mục hư hỏng.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** dòng (2026-07-22…2026-08-01) · CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem» · **không** `applyAndView` · **không** fetch | **PASS** (DES-HH-01) |
| QA-04 | Xuất Excel | `defects.csv` UTF-8 BOM · gated `viewed` · params applied · subset `columnPrefs` | **PASS** (DES-HH-02) |
| QA-05 | Config cột | `ReportDisplayConfigModal` · persist `saveReportColumnPrefs` · CSV subset | **PASS** |
| QA-06 | Mở AI Vision | `drillAiVision` top `/ai-vision?id=` · `sourceId \|\| id` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | list `qs()` gửi `search` (không `q` từ page) · `defectClass` `severity` `sourceKind` | **PASS** (`queryParams`) |
| QA-09 | Grid ngày | `formatDayVi` `vi-VN` từ `row.day` | **PASS** |
| QA-10 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · loại/mức/nguồn enum + empty Tất cả | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.10`/`QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase · **cấm** StartsWith | **PASS** (BE helper) |
| QA-12 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` Aug 2026 → seed chỉ `DET-001`/`DET-002` (2026-08-01) nếu Xem không nới kỳ | **PASS** (contract · không P0) |

## T-QA-01 — DoD vs live (sau Dev DES-HH-01/02 + formatDayVi)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `search` · cột Design | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill `/ai-vision?id=` | **PASS** |
| T-UI-LKP-01 | tuyến SearchInput CUC2 · **cấm** QL.22 · enum loại/mức/nguồn FE | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `day` `vi-VN` · Nguồn = `sourceKind` | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/hang-muc-hu-hong` · pageId `rpt-hang-muc-hu-hong` · testId `rmms-defect-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/defects` · FilterRoute **exact** · FilterDay · pageSize allow-list · in-memory 12 · **không** migration · canonical `search` (không alias `q` P1) | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM `defects.csv` full default header | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` defects + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo hạng mục hư hỏng» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId`/`defectClass`/`severity`/`sourceKind` empty/`all` | all | **PASS** (`FilterDefects`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.10/QL.15/QL.217 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/defects` + `routeId` `defectClass` `severity` `sourceKind` `from` `to` `search` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/defects/export` | **PASS** (BOM + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_af0d0e56` **keep** BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF join `rmms_ai_vision_detections` P2 · Integration road-route Type A P2 · live browser click (static+build). Modal title analog Kind E vs Kind B «Cấu hình hiển thị danh mục» — **không P0**.

## P0 / GAP

Không P0. Dev GAP DES-HH-01 Làm mới · DES-HH-02 Excel applied/`canExport`/`columnPrefs` · `formatDayVi` **đóng** — QA xác nhận.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
