# QA — scenarios — rpt-tinh-trang-mat-duong (Kind E) · QA `task_75bc7bb4`

| Field | Value |
|-------|-------|
| feature | `rpt-tinh-trang-mat-duong` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-RPT-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE-RPT/BFF (Dev `task_0e7f1bed`) |
| mfeStdUrl | `http://localhost:9311/bao-cao/tinh-trang-mat-duong` |
| mfeStdRoute | `/bao-cao/tinh-trang-mat-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROAD_ROUTE_LOOKUP_CONFIG` CUC2 + strip `QL.22` · `PCI_BAND_LOOKUP` tot/kha/tb/kem/rat-kem |
| taskId | `task_75bc7bb4` |
| prior Dev | `task_0e7f1bed` · implement `done` · Kind E |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `PavementConditionReportPage` + `PavementConditionFilterBar` + `endpoint.ts` `getPavementCondition`/`exportPavementCondition` + `lookups.ts` + `ReportService` `FilterPavementCondition`/`FilterRoute`/`FilterDate` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T20:05:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/tinh-trang-mat-duong` · `http://localhost:9311/bao-cao/tinh-trang-mat-duong` | Mount `PavementConditionReportPage` · không 404 · `data-testid=rmms-pavement-condition-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 (BE `AllowedPageSizes`) | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/PCI/ngày/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportPavementCondition` `getBlob` `/report/pavement-condition/export` · QS `pciBand` `type` `routeId` `from` `to` `search` **applied** · download `pavement-condition.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` trên leaf | **PASS** |

## Kind E zones (T-QA-RPT-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Tình trạng mặt đường» · `fas fa-road` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tuyến+PCI band · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` · **0** Excel trên bar | **PASS** |
| C | `listTitle` «Tình trạng mặt đường» · `LinCatalogDataGrid` `resizable: true` · cột đoạn/tuyến/km/PCI/band/lớp/ngày đo/drill · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · `ReportColumnConfigGrid` **Thêm cột** · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/tinh-trang-mat-duong` | Title Tình trạng mặt đường · empty «Chưa xem — nhấn «Xem» để tải báo cáo tình trạng mặt đường.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** dòng CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem» · **không** fetch | **PASS** (DES-PC-01) |
| QA-04 | Xuất Excel | `pavement-condition.csv` UTF-8 BOM · gated `viewed` · params applied · subset `columnPrefs` | **PASS** (DES-PC-02 analog) |
| QA-05 | Config cột | `ReportDisplayConfigModal` · persist `saveReportColumnPrefs` · CSV subset · Thêm cột unhide | **PASS** |
| QA-06 | Mở Biểu 1 | `drillSection` top `/asset/pavement-section/{id}` · `row.id` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | list `qs()` gửi `search` + `pciBand` + alias `type` · `routeId` `from` `to` · **không** `q` từ page | **PASS** (`queryParams`) |
| QA-09 | Grid PCI / ngày | `formatPci` 1 decimal `vi-VN` · `formatAtVi` | **PASS** |
| QA-10 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · PCI `PCI_BAND_LOOKUP` + empty Tất cả · **cấm** native Select · **cấm** init-data P1 | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase | **PASS** (BE helper) |
| QA-12 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` Aug 2026 → seed `pc1`/`pc7`/`pc8`/`pc12` nếu Xem không nới kỳ | **PASS** (contract · không P0) |
| QA-13 | Chart SoCai | client KPI Đoạn · Tuyến · PCI TB khi viewed + có dòng · by-band / by-route · **không** API chart | **PASS** |
| QA-14 | Perm FE | `data-required-permission=report.tinh-trang-mat-duong.read` | **PASS** |

## T-QA-RPT-01 — DoD vs live (sau Dev Kind E)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `search` · cột Design | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill `/asset/pavement-section/{id}` | **PASS** |
| T-UI-LKP-01 | tuyến SearchInput CUC2 · **cấm** QL.22 · PCI enum FE | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · PCI `formatPci` · ngày `formatAtVi` · drill không editor | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/tinh-trang-mat-duong` · pageId `rpt-tinh-trang-mat-duong` · testId `rmms-pavement-condition-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-UI-RPT-01 | fragment leading · 0 action trên bar · 🔍=Xem | **PASS** |
| T-UI-RPT-TB-01 | Common actions chỉ `buildRmmsReportToolbar` | **PASS** |
| T-UI-RPT-CONFIG-01 | ReportDisplayConfigModal FULL · Thêm cột · **cấm** Kind B schema | **PASS** |
| T-UI-RPT-EXPORT-01 | `canExport: viewed` · CSV BOM · **cấm** Excel trên filter | **PASS** |
| T-UI-RPT-CHART-01 | SoCai by-band / by-route từ `items` | **PASS** |
| T-BE-RPT-01 | GET `api/v1/report/pavement-condition` · FilterRoute **exact** · FilterDate `MeasuredAt` · pciBand + type alias · pageSize allow-list · in-memory 12 · **không** migration · canonical `search` | **PASS** (code) |
| T-BE-02 | export CSV `pavement-condition.csv` | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` pavement-condition + export · QS passthrough · **không** business | **PASS** |
| T-PERM-01 | FE attr · BE TODO `[RequirePermission]` stub P1 | **PASS** (P1) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo tình trạng mặt đường» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** (`Page` + `AllowedPageSizes`) |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId`/`pciBand` empty | all (routeId empty/`all` skip) | **PASS** (`FilterPavementCondition`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.15/QL.217 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/pavement-condition` + `pciBand` `type` `routeId` `from` `to` `search` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/pavement-condition/export` | **PASS** (CSV + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · `linm-rmms-report.054cceab.js` cached) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_0e7f1bed` API+BFF **PASS** |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF `rmms_pavement_sections` P2 · Integration road-route Type A P2 · live browser click (static+build). Chart SoCai từ `items` trang hiện tại (không all-pages P1) — **không P0**.

## P0 / GAP

Không P0. Dev Kind E + DES-PC-01 Làm mới · Excel `canExport`/`columnPrefs` · Config Thêm cột · drill Asset · query `search`+`pciBand`/`type` **đóng** — QA xác nhận.

## Verdict

**PASS** · T-QA-RPT-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
