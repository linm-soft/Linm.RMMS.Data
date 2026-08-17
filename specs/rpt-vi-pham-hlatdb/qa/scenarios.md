# QA — scenarios — rpt-vi-pham-hlatdb (Kind E) · QA `task_29672bef`

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | **`report`** Kind **E** (packet board `list` stale — **cấm** Kind B) |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF keep · **GAP-TL-HLATDB-01** |
| mfeStdUrl | `http://localhost:9311/bao-cao/vi-pham-hlatdb` |
| mfeStdRoute | `/bao-cao/vi-pham-hlatdb` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROW_VIOLATION_TAB_LOOKUP` · `ROW_VIOLATION_STATUS_LOOKUP` · `ROAD_ROUTE_LOOKUP` CUC2 strip `QL.22` |
| taskId | `task_29672bef` |
| prior Dev | `task_17bb2aa6` · implement `done` · GAP-TL-HLATDB-01 closed |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `RowViolationReportPage` + `RowViolationFilterBar` + `endpoint.ts` `getRowViolations`/`exportRowViolations` + `lookups.ts` + `ReportService` `FilterRowViolations`/`FilterRoute`/`FilterDay` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-17T00:25:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/vi-pham-hlatdb` · `http://localhost:9311/bao-cao/vi-pham-hlatdb` | Mount `RowViolationReportPage` · `data-testid=rmms-row-violation-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · `pageId` `rpt-vi-pham-hlatdb` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes BE 50/100/200/500 | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tab/tuyến/TT/ngày/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`; `queryParams` = applied) |
| S5 | reportToolbar | Làm mới (`!viewed` → `applyAndView`; else refetch) · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportRowViolations` `/report/row-violations/export` · QS `tab` `status` `routeId` `from` `to` `q` **applied** · **không** `type`/`search` · download `row-violations.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` trên leaf | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Vi phạm HLATĐB» · `fas fa-exclamation-triangle` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tab/tuyến/TT · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | `listTitle` «Kết quả báo cáo vi phạm HLATĐB» · `LinCatalogDataGrid` `resizable: true` · tab detail typed RowViolation · tab summary nhóm tuyến | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `useMemo` columns + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` / `useCatalogUiSchema` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/vi-pham-hlatdb` | Title Vi phạm HLATĐB · empty «Chưa xem — nhấn «Xem» để tải báo cáo vi phạm HLATĐB.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem tab detail | BE seed **12** dòng (2026-07-27…2026-08-01) · CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | `applyAndView` (TL T-UI-ACT) · **không** toast «Chưa xem» kiểu ùn tắc | **PASS** |
| QA-04 | Xuất Excel | `row-violations.csv` UTF-8 BOM · gated `viewed` · params applied · subset `columnPrefs` | **PASS** |
| QA-05 | Config cột | `ReportDisplayConfigModal` title analog «Cấu hình hiển thị báo cáo» · persist `saveReportColumnPrefs` `${TEST_ID}-${tab}` · CSV subset | **PASS** |
| QA-06 | Mở sổ VP | `drillSource` top `/csdl-so-sach?kind=row-violations&id=` · `violationId \|\| id` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query canonical | `getRowViolations`/`exportRowViolations` gửi `tab` `status` `routeId` `from` `to` `q` `page` `pageSize` · **không** set `type` · **không** set `search` | **PASS** |
| QA-09 | Grid ngày | `formatDayVi` `vi-VN` từ `row.day` · summary «Ngày gần nhất» alias UI của `day` | **PASS** |
| QA-10 | Lookup leaf | SearchInput tab chi tiết/tổng hợp · TT 5 enum · tuyến CUC2 strip QL.22 | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase | **PASS** (BE helper) |
| QA-12 | Draft vs applied | `*Draft` bind filter; `queryParams` chỉ applied; `applyAndView` copy draft→applied + `page=1` + `viewed=true`; `useEffect(load)` phụ thuộc applied **không** gộp draft | **PASS** |
| QA-13 | Chart SoCai | client KPI Số VP · Tồn đọng · Tuyến khi viewed + có dòng · chart by-status / by-route / trend-count · **không** API chart | **PASS** |
| QA-14 | **GAP-TL-HLATDB-01** | seed `visible: false` `minutesCommune`/`minutesAdmin` tab detail · migrate `rpt-vi-pham-hlatdb-hide-bb-default-v1` (giữ width) | **PASS** |
| QA-15 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` tháng máy · seed 12 trải 2026-07/08 — **cần** mở kỳ 07→08 để đủ 12 (không P0) | **PASS** (expected) |
| QA-16 | Tab summary | group `Route` · `ticketCount` · `outstandingCount` (`ton-dong`) · `day` last · drill theo `violationId` last | **PASS** (BE) |

## T-QA-01 — DoD vs live (sau Dev GAP-TL-HLATDB-01)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `q` · cột Design + BB ẩn default | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới apply nếu chưa xem else refetch · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill CSDL | **PASS** |
| T-UI-LKP-01 | tab/TT/tuyến SearchInput · **cấm** QL.22 · **cấm** đổi Select | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `day` `vi-VN` · lastDay = alias UI `day` · Nguồn = drill | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/vi-pham-hlatdb` · pageId `rpt-vi-pham-hlatdb` · testId `rmms-row-violation-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/row-violations` · FilterRoute **exact** · FilterDay `Day` · coalesce `status??type` `q??search` · pageSize allow-list · in-memory 12 · **không** migration | **PASS** (code) |
| T-BE-03 | export CSV UTF-8 BOM `row-violations.csv` | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` row-violations + export · QS passthrough · **không** business | **PASS** |
| T-PERM-01 | `report.vi-pham-hlatdb.read` | **stub** P1 (không P0) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo vi phạm HLATĐB» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 (`AllowedPageSizes`) | **PASS** |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId` empty | all (`FilterRoute` skip) | **PASS** |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.15/QL.217 | **PASS** |
| N9 | Đổi tab/tuyến/TT sau khi đã Xem | draft only · lưới giữ applied đến khi Xem lại | **PASS** |
| N10 | Prefs cũ BB hiện | migrate 1 lần hide · lần sau user bật lại thì giữ | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/row-violations` + `tab` `status` `routeId` `from` `to` `q` `page` `pageSize` (BE còn `type`/`search` coalesce; FE **không** gửi alias) | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/row-violations/export` | **PASS** (BOM + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · `linm-rmms-report.6b8f29dc.js`) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_17bb2aa6` keep BE |

## Out of pack

`[RequirePermission]` CommonLib · EF `RowViolation` P2 · Integration road-route Type A P2 · live browser click (static+build). T-PERM-01 stub P1.

## P0 / GAP

Không P0. **GAP-TL-HLATDB-01** closed trên live (seed ẩn BB xã/HC + migrate `rpt-vi-pham-hlatdb-hide-bb-default-v1`). Query FE canonical `q`/`status` không regress alias. QA xác nhận.

## Verdict

**PASS** · T-QA-01 **done** · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
