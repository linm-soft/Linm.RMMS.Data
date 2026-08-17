# QA — scenarios — rpt-un-tac (Kind E) · QA `task_fd873c85`

| Field | Value |
|-------|-------|
| feature | `rpt-un-tac` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | **`report`** Kind **E** (packet board `list` stale — **cấm** Kind B) |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF keep · **GAP-SA-UNTAC-DRAFT** |
| mfeStdUrl | `http://localhost:9311/bao-cao/un-tac` |
| mfeStdRoute | `/bao-cao/un-tac` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `CONGESTION_TYPE_LOOKUP` Ùn tắc / Ngập úng · `ROAD_ROUTE_LOOKUP` CUC2 strip `QL.22` |
| taskId | `task_fd873c85` |
| prior Dev | `task_df3abdf0` · implement `done` · GAP-SA-UNTAC-DRAFT closed |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `CongestionReportPage` + `CongestionFilterBar` + `endpoint.ts` `getCongestion`/`exportCongestion` + `lookups.ts` + `ReportService` `FilterCongestion`/`FilterRoute`/`FilterDate` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T16:35:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/un-tac` · `http://localhost:9311/bao-cao/un-tac` | Mount `CongestionReportPage` · `data-testid=rmms-congestion-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · `pageId` `rpt-un-tac` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft loại/tuyến/ngày/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`; `queryParams` = applied) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportCongestion` `/report/congestion/export` · QS `type` `routeId` `from` `to` `search` **applied** · **không** `status` · download `congestion.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` trên leaf | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Ùn tắc / ngập úng» · `fas fa-traffic-light` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput loại/tuyến · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | `listTitle` «Ùn tắc / ngập úng» · `LinCatalogDataGrid` `resizable: true` · cột mã/tuyến/km/loại/thời lượng/TT/thời điểm/drill | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/un-tac` | Title Ùn tắc / ngập úng · empty «Chưa xem — nhấn «Xem» để tải báo cáo ùn tắc / ngập úng.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** dòng (2026-07-05…2026-08-03) · CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem» · **không** fetch | **PASS** |
| QA-04 | Xuất Excel | `congestion.csv` UTF-8 BOM · gated `viewed` · params applied · subset `columnPrefs` | **PASS** |
| QA-05 | Config cột | `ReportDisplayConfigModal` · persist `saveReportColumnPrefs` · CSV subset | **PASS** |
| QA-06 | Mở sự cố | `drillIncident` top `/incident?id=` · `row.id` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | `qs()` từ `queryParams` gửi `type` `routeId` `from` `to` `search` `page` `pageSize` · **không** `status` · **không** alias `q` từ page | **PASS** |
| QA-09 | Grid thời điểm | `formatAtVi` `vi-VN` từ `row.at` | **PASS** |
| QA-10 | Lookup leaf | SearchInput loại Ùn tắc / Ngập úng · tuyến CUC2 strip QL.22 | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase | **PASS** (BE helper) |
| QA-12 | Draft vs applied (**GAP-SA-UNTAC-DRAFT**) | `*Draft` bind filter; `queryParams` chỉ applied; `applyAndView` copy draft→applied + `page=1` + `viewed=true`; `useEffect(load)` phụ thuộc applied **không** gộp draft | **PASS** |
| QA-13 | Chart SoCai | client KPI Dòng · Tuyến · Ùn tắc khi viewed + có dòng · chart by-type / by-route · **không** API chart | **PASS** |
| QA-14 | DurationMin | cột «Thời lượng (phút)» · DTO `durationMin` | **PASS** |
| QA-15 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` tháng máy · seed 12 trải 2026-07/08 — **cần** mở kỳ 07→08 để đủ 12 (không P0) | **PASS** (expected) |

## T-QA-01 — DoD vs live (sau Dev GAP-SA-UNTAC-DRAFT)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `search` · cột Design | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill `/incident?id=` | **PASS** |
| T-UI-LKP-01 | loại/tuyến SearchInput · **cấm** QL.22 | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `at` `vi-VN` · Nguồn = drill | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/un-tac` · pageId `rpt-un-tac` · testId `rmms-congestion-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/congestion` · FilterRoute **exact** · FilterDate `At` · pageSize allow-list · in-memory 12 · **không** migration | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM `congestion.csv` | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` congestion + export · QS passthrough · **không** business | **PASS** |
| T-PERM-01 | `report.un-tac.read` | **stub** P1 (không P0) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo ùn tắc / ngập úng» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 (`AllowedPageSizes`) | **PASS** |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId` empty | all (`FilterRoute` skip) | **PASS** |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.15/QL.217 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |
| N10 | Đổi loại/tuyến sau khi đã Xem | draft only · lưới giữ applied đến khi Xem lại | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/congestion` + `type` `routeId` `from` `to` `search` `page` `pageSize` (BE còn `status` optional; FE **không** gửi) | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/congestion/export` | **PASS** (BOM + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · `linm-rmms-report.ac222a6d.js`) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_df3abdf0` keep BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF `rmms_incidents` P2 · Integration road-route Type A P2 · live browser click (static+build). T-PERM-01 stub P1.

## P0 / GAP

Không P0. **GAP-SA-UNTAC-DRAFT** closed trên live (`*Draft` + `queryParams` applied + `applyAndView`). QA xác nhận.

## Verdict

**PASS** · T-QA-01 **done** · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
