# QA — scenarios — rpt-tngt (Kind E) · QA `task_693acbcd`

| Field | Value |
|-------|-------|
| feature | `rpt-tngt` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF keep · **GAP-TL-TNGT-01** |
| mfeStdUrl | `http://localhost:9311/bao-cao/tngt` |
| mfeStdRoute | `/bao-cao/tngt` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `INCIDENT_KIND_LOOKUP` 6 tab · `ROAD_ROUTE_LOOKUP` CUC2 strip `QL.22` · `INCIDENT_SEVERITY_LOOKUP` · **cấm** filter type trên leaf |
| taskId | `task_693acbcd` |
| prior Dev | `task_63b4bc17` · implement `done` · GAP-TL-TNGT-01 closed |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `TrafficAccidentReportPage` + `TrafficAccidentFilterBar` + `endpoint.ts` `getTrafficAccidents`/`exportTrafficAccidents` + `lookups.ts` + `ReportService` `FilterTrafficAccidents`/`FilterRoute`/`FilterDate` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T20:40:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/tngt` · `http://localhost:9311/bao-cao/tngt` | Mount `TrafficAccidentReportPage` · `data-testid=rmms-tngt-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tab/tuyến/mức/ngày/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`; `queryParams` = applied) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportTrafficAccidents` `/report/traffic-accidents/export` · QS `tab` `type` `routeId` `severity` `from` `to` `search` **applied** · download `traffic-accidents.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` trên leaf | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Tai nạn giao thông» · `fas fa-car-crash` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput loại thống kê/tuyến/mức · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` · **không** filter type sự cố | **PASS** |
| C | `listTitle` «Tai nạn giao thông» · `LinCatalogDataGrid` `resizable: true` · cột mã/tuyến/loại/mức/TT/thời gian/drill | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/tngt` | Title Tai nạn giao thông · empty «Chưa xem — nhấn «Xem» để tải báo cáo TNGT.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** dòng TNGT (2026-07-06…2026-08-12) · CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem» · **không** fetch | **PASS** |
| QA-04 | Xuất Excel | `traffic-accidents.csv` UTF-8 BOM · gated `viewed` · params applied · subset `columnPrefs` | **PASS** |
| QA-05 | Config cột | `ReportDisplayConfigModal` · persist `saveReportColumnPrefs` · CSV subset | **PASS** |
| QA-06 | Mở sự cố | `drillIncident` top `/incident?id=` · `row.id` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | `qs()` gửi `search` · `type=TNGT` khóa · `tab` `routeId` `severity` `from` `to` | **PASS** (`queryParams` · `LOCKED_TYPE`) |
| QA-09 | Grid thời gian | `formatAtVi` `vi-VN` từ `row.at` | **PASS** |
| QA-10 | Lookup leaf | SearchInput tab 6 giá trị · tuyến CUC2 strip QL.22 · mức Cao/TB/Nghiêm trọng/Thấp · **cấm** filter type | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase | **PASS** (BE helper) |
| QA-12 | Tab `serious` draft (GAP-TL-TNGT-01) | `handleTabDraftChange` set `sevDraft='Nghiêm trọng'` nếu mức trống · **không** fetch · grid applied không đổi | **PASS** |
| QA-13 | Tab `half-year` draft (GAP-TL-TNGT-01) | `fromDraft`/`toDraft` = `halfYearRange()` (6 tháng) · **không** fetch | **PASS** |
| QA-14 | Chart SoCai | client KPI Dòng · Tuyến · Nghiêm trọng khi viewed + có dòng · **không** API chart | **PASS** |
| QA-15 | Xem + `serious` + mức trống | `applyAndView` + BE `FilterTrafficAccidents` gán `Nghiêm trọng` | **PASS** |

## T-QA-01 — DoD vs live (sau Dev GAP-TL-TNGT-01)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `search` · cột Design | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill `/incident?id=` | **PASS** |
| T-UI-LKP-01 | tab/tuyến/mức SearchInput · **cấm** QL.22 · **cấm** filter type | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `at` `vi-VN` · Nguồn = drill | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/tngt` · pageId `rpt-tngt` · testId `rmms-tngt-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/traffic-accidents` · FilterRoute **exact** · FilterDate `At` · pageSize allow-list · in-memory 12 · **không** migration · type khóa dataset TNGT | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM `traffic-accidents.csv` | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` traffic-accidents + export · QS passthrough · **không** business | **PASS** |
| T-PERM-01 | `report.tngt.read` | **stub** P1 (không P0) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo TNGT» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 (`AllowedPageSizes`) | **PASS** |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId` empty | all (`FilterRoute` skip) | **PASS** |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.15/QL.217 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |
| N10 | Đổi tab sau khi đã Xem | draft only · lưới giữ applied đến khi Xem lại | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/traffic-accidents` + `tab` `type` `routeId` `severity` `from` `to` `search` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/traffic-accidents/export` | **PASS** (BOM + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · cached `linm-rmms-report.b44af9b2.js`) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_63b4bc17` keep BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF `rmms_incidents` P2 · Integration road-route Type A P2 · live browser click (static+build). T-PERM-01 stub P1.

## P0 / GAP

Không P0. **GAP-TL-TNGT-01** closed trên live (`handleTabDraftChange` + fallback `applyAndView` + BE `serious`). QA xác nhận.

## Verdict

**PASS** · T-QA-01 **done** · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
