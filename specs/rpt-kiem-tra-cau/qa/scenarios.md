# QA — scenarios — rpt-kiem-tra-cau (Kind E) · QA `task_7994bb3f`

| Field | Value |
|-------|-------|
| feature | `rpt-kiem-tra-cau` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF keep · Dev `task_31c75947` |
| mfeStdUrl | `http://localhost:9311/bao-cao/kiem-tra-cau` |
| mfeStdRoute | `/bao-cao/kiem-tra-cau` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/bridge-inspections` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROAD_ROUTE` CUC2 + strip `QL.22` · tab `ticket`/`result`/`summary` · `BRIDGE_LOOKUP` FE |
| taskId | `task_7994bb3f` |
| prior Dev | `task_31c75947` · implement `done` · DES-KTC-01 Làm mới · T-UI-RPT-CHART-01 KPI |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `BridgeInspectionReportPage` + `BridgeInspectionFilterBar` + `endpoint.ts` `getBridgeInspections`/`exportBridgeInspections` + `lookups.ts` + `ReportService` `FilterBridgeInspections`/`FilterRoute` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T07:25:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/kiem-tra-cau` · `http://localhost:9311/bao-cao/kiem-tra-cau` | Mount `BridgeInspectionReportPage` · không 404 · `data-testid=rmms-bridge-inspection-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 (common pager) | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tab/tuyến/cầu/loại/kỳ/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới gated · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` · Config `ReportDisplayConfigModal` FULL analog · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportBridgeInspections` `getBlob` `/report/bridge-inspections/export` · QS `tab` `type` `routeId` `bridgeId` `from` `to` `search` **applied** · filename `bridge-inspections.csv` · **không** page | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Kiểm tra cầu» · `fas fa-archway` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tab/tuyến/cầu/loại · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | `listTitle` «Kết quả báo cáo kiểm tra cầu» · `LinCatalogDataGrid` `resizable: true` · cột phiếu / kết quả / tổng hợp theo **applied** `tab` · drill «Mở phiếu KT» · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/kiem-tra-cau` | Title Kiểm tra cầu · empty «Chưa xem — nhấn «Xem» để tải báo cáo kiểm tra cầu.» · **không** GET | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem tab Phiếu | BE seed **12** (`t1`–`t12`) CUC2 · không QL.22 | **PASS** (code) · default tháng hiện tại chỉ dòng `day` trong tháng (2 phiếu 2026-08-01) — **không P0** |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem» · **không** `applyAndView` · **không** fetch | **PASS** (DES-KTC-01) |
| QA-04 | Xuất Excel | CSV UTF-8 BOM · gated `viewed` · params applied · filename `bridge-inspections.csv` · `subsetCsv` cột tab | **PASS** (DES-KTC-02) |
| QA-05 | Config cột | `ReportDisplayConfigModal` title analog Kind E · bảng Cột/Hiện/Rộng/Filter/Sort · persist `saveReportColumnPrefs` per `${TEST_ID}-${tab}` | **PASS** analog · **không** Kind B schema editor |
| QA-06 | Mở phiếu KT | `drillSource` top `/csdl-so-sach?kind=bridge-inspections&id=` · `inspectionId \|\| id` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | `qs()` gửi `tab` `type` `search` (không `q` từ page) · `routeId` `bridgeId` `from` `to` `page` `pageSize` | **PASS** (`queryParams`) |
| QA-09 | Grid ngày | `formatDayVi` `vi-VN` từ `row.day` (phiếu / kết quả / KT gần nhất) | **PASS** |
| QA-10 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · tab enum · cầu enum + empty Tất cả · loại phiếu enum + empty | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.10` · `Equals` OrdinalIgnoreCase · **cấm** StartsWith | **PASS** (BE helper) |
| QA-12 | Tab khi viewed | SearchInput chỉ `setTabDraft` — cột/`tab` **không** đổi đến khi Xem · **không** refetch tab ngay | **PASS** (DES-KTC-04) |
| QA-13 | Tab Kết quả | cột bộ phận / hư hỏng / đề xuất / ưu tiên / ảnh + drill | **PASS** |
| QA-14 | Tab Tổng hợp | BE `GroupBy(BridgeId)` · `id=sum-{bridgeId}` · `ticketCount` `highPriorityCount` · **không** FE GroupBy | **PASS** |
| QA-15 | Chart KPI | labels **Dòng · Tuyến · Ưu tiên cao** · Dòng = `items.length` · Tuyến = unique `route` · Ưu tiên cao = `highPriorityCount` hoặc `priority==='immediate'` | **PASS** (T-UI-RPT-CHART-01) |
| QA-16 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` · Xem không nới kỳ chỉ seed trong tháng | **PASS** (contract · không P0) |

## T-QA-01 — DoD vs live (sau Dev DES-KTC-01 + KPI)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `search`+`tab`+`type` · cột Design | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated toast «Chưa xem» · Excel gated viewed + applied · tab draft đến Xem · chart SoCai client · print modal · config FULL analog · drill CSDL | **PASS** |
| T-UI-RPT-CHART-01 | KPI **Dòng · Tuyến · Ưu tiên cao** · **cấm** stub toast · **không** API chart | **PASS** |
| T-UI-LKP-01 | tab/tuyến/cầu/loại SearchInput · **cấm** QL.22 · **cấm** native select | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `day` `vi-VN` | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/kiem-tra-cau` · pageId `rpt-kiem-tra-cau` · testId `rmms-bridge-inspection-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/bridge-inspections` · FilterRoute **exact** · FilterDay · tab summary GroupBy · pageSize allow-list · in-memory 12 · **không** path mới | **PASS** (code keep) |
| T-BE-02 | export CSV UTF-8 BOM filename `bridge-inspections.csv` · **không** page | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` bridge-inspections + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo kiểm tra cầu» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** (`Page` helper) |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId`/`bridgeId`/`type` empty/`all` | all | **PASS** (`FilterBridgeInspections`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.10 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |
| N10 | Đổi draft tuyến khi viewed rồi Excel | Excel dùng `routeId` applied, không draft | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/bridge-inspections` + `tab` `type` `routeId` `bridgeId` `from` `to` `search` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/bridge-inspections/export` | **PASS** (filename + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit` exit 0) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings · `linm-rmms-report.f977f199.js`) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_31c75947` **keep** BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF join passport/inspection P2 · Integration road-route Type A live (seed fallback P1) · live browser click (static+build). Modal title Kind E «Sửa config — báo cáo» vs Kind B «Cấu hình hiển thị danh mục» — **không P0**. Config analog **không** nút «Thêm cột» Kind B — **không P0**.

## P0 / GAP

Không P0. Dev GAP DES-KTC-01 Làm mới · T-UI-RPT-CHART-01 KPI **đóng** — QA xác nhận.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

## Handoff Review

- Artifact: `specs/rpt-kiem-tra-cau/qa/scenarios.md`
- Review = **pending** đến lượt (`roleOnly=qa` this task).
- autoApprove ON trên board → enqueue `/agent-review` sau `completed` task QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
