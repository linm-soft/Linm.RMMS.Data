# QA — scenarios — rpt-thiet-hai (Kind E) · QA `task_a129f59d`

| Field | Value |
|-------|-------|
| feature | `rpt-thiet-hai` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF (Dev `task_e47eaa07` keep) |
| mfeStdUrl | `http://localhost:9311/bao-cao/thiet-hai` |
| mfeStdRoute | `/bao-cao/thiet-hai` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROAD_ROUTE_LOOKUP_CONFIG` CUC2 + strip `QL.22` · `DAMAGE_ITEM_LOOKUP` Mặt đường/Taluy/Hộ lan/Cống/Biển báo/Rãnh · **cấm** `INCIDENT_TYPE_LOOKUP` trên leaf |
| taskId | `task_a129f59d` |
| prior Dev | `task_e47eaa07` · implement `done` · verify keep Kind E |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `DamageQtyReportPage` + `DamageQtyFilterBar` + `endpoint.ts` `getDamageQty`/`exportDamageQty` + `lookups.ts` + `ReportService` `FilterDamageQty`/`FilterRoute`/`FilterDate` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T19:10:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/thiet-hai` · `http://localhost:9311/bao-cao/thiet-hai` | Mount `DamageQtyReportPage` · không 404 · `data-testid=rmms-damage-qty-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 (BE `AllowedPageSizes`) | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/hạng mục/ngày/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportDamageQty` `getBlob` `/report/damage-qty/export` · QS `type` `routeId` `from` `to` `search` **applied** · download `damage-qty.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` drill→`incidentId`/`id` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` trên leaf | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Khối lượng thiệt hại» · `fas fa-cubes` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tuyến+hạng mục · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` · **0** Excel trên bar | **PASS** |
| C | `listTitle` «Khối lượng thiệt hại» · `LinCatalogDataGrid` `resizable: true` · cột tuyến/hạng mục/KL/ĐVT/ước giá/nguồn/drill · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/thiet-hai` | Title Khối lượng thiệt hại · empty «Chưa xem — nhấn «Xem» để tải báo cáo khối lượng thiệt hại.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** dòng (2026-07-05…2026-08-03) · CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem» · **không** fetch | **PASS** (DES-TH-01) |
| QA-04 | Xuất Excel | `damage-qty.csv` UTF-8 BOM · gated `viewed` · params applied · subset `columnPrefs` | **PASS** (DES-TH-02) |
| QA-05 | Config cột | `ReportDisplayConfigModal` · persist `saveReportColumnPrefs` · CSV subset | **PASS** |
| QA-06 | Mở sự cố | `drillIncident` top `/incident?id=` · `row.incidentId` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | list `qs()` gửi `search` (không `q` từ page) · `type` `routeId` `from` `to` | **PASS** (`queryParams`) |
| QA-09 | Grid KL / ước giá | `formatQtyVi` / `formatVnd` `vi-VN` · cột Nguồn text | **PASS** |
| QA-10 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · hạng mục `DAMAGE_ITEM_LOOKUP` + empty Tất cả · **cấm** `INCIDENT_TYPE_LOOKUP` trên `DamageQtyFilterBar` | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase · **cấm** StartsWith | **PASS** (BE helper) |
| QA-12 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` Aug 2026 → seed `dq1`/`dq7`/`dq8` (2026-08-01…03) nếu Xem không nới kỳ | **PASS** (contract · không P0) |
| QA-13 | Chart SoCai | client KPI Dòng · Tuyến · Ước giá khi viewed + có dòng · by-item / by-route · **không** API chart | **PASS** |

## T-QA-01 — DoD vs live (sau Dev keep Kind E)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `search` · cột Design | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill `/incident?id=` | **PASS** |
| T-UI-LKP-01 | tuyến SearchInput CUC2 · **cấm** QL.22 · `DAMAGE_ITEM_LOOKUP` · **cấm** incident type lookup trên leaf | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · KL `formatQtyVi` · ước giá `formatVnd` · Nguồn = text · drill không editor | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/thiet-hai` · pageId `rpt-thiet-hai` · testId `rmms-damage-qty-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/damage-qty` · FilterRoute **exact** · FilterDate `At` · pageSize allow-list · in-memory 12 · **không** migration · canonical `search` (không alias `q` P1) | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM `damage-qty.csv` full default header | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` damage-qty + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo khối lượng thiệt hại» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** (`Page` + `AllowedPageSizes`) |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId`/`type` empty | all (routeId empty/`all` skip) | **PASS** (`FilterDamageQty`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.15/QL.217 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/damage-qty` + `type` `routeId` `from` `to` `search` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/damage-qty/export` | **PASS** (BOM + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · `linm-rmms-report.10106aec.js` · 3 size warnings) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_e47eaa07` **keep** BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF `rmms_incidents` P2 · Integration road-route Type A P2 · live browser click (static+build). Modal title analog Kind E vs Kind B «Cấu hình hiển thị danh mục» — **không P0**.

## P0 / GAP

Không P0. Dev keep Kind E + DES-TH-01 Làm mới · DES-TH-02 Excel applied/`canExport`/`columnPrefs` · `formatQtyVi`/`formatVnd` **đóng** — QA xác nhận.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
