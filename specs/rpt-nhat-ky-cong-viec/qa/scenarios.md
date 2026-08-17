# QA — scenarios — rpt-nhat-ky-cong-viec (Kind E) · QA `task_2afcfdbd`

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-cong-viec` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` (Kind **E**) |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF keep · Dev `task_8c5ea930` (cột PP/kết quả + `CSV_COL_BY_GRID`) |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-cong-viec` |
| mfeStdRoute | `/bao-cao/nhat-ky-cong-viec` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/maintenance-work-logs` |
| bff | `web-bff/api/v1/report` · `maintenance-work-logs` + `/export` |
| lookup | `ROAD_ROUTE` CUC2 strip `QL.22` · `MAINTENANCE_WORK_TYPE` · `MAINTENANCE_TEAM` SearchInput |
| taskId | `task_2afcfdbd` |
| prior Dev | `task_8c5ea930` · implement `done` · GAP-DS-NKCV-01 / GAP-SA-NKCV-GRID **closed** |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `MaintenanceWorkLogReportPage` + `MaintenanceWorkLogFilterBar` + `endpoint.ts` `getMaintenanceWorkLogs`/`exportMaintenanceWorkLogs` + `lookups.ts` + `ReportService` `FilterMaintenanceWorkLogs`/`FilterRoute`/`ExportMaintenanceWorkLogsCsvAsync` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T15:05:00.000Z` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** reuse `api/v1/report/worklogs` · **cấm** Kind B `LinCatalogUiSchemaEditorModal`.

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/nhat-ky-cong-viec` · `http://localhost:9311/bao-cao/nhat-ky-cong-viec` | Mount `MaintenanceWorkLogReportPage` · không 404 · `data-testid=rmms-maintenance-work-log-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 (common pager) | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/loại/đội/kỳ/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới gated · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` · Config `ReportDisplayConfigModal` FULL analog · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportMaintenanceWorkLogs` `getBlob` `/report/maintenance-work-logs/export` · QS `workType` `routeId` `teamId` `from` `to` `q` **applied** · filename `maintenance-work-logs.csv` · **không** page | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` · **cấm** `worklogs` trên slug này | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Nhật ký công việc» · `fas fa-clipboard-list` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tuyến/loại/đội · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | `listTitle` «Kết quả nhật ký công việc» · `LinCatalogDataGrid` `resizable: true` · cột STT/Ngày/WO/Hạng mục/Km/KL/ĐVT/Trạng thái/Tuyến/Loại/Đội/Nhà thầu/**PP**/**Kết quả**/Nguồn · drill «Mở WO» · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/nhat-ky-cong-viec` | Title Nhật ký công việc · empty «Chưa xem — nhấn «Xem» để tải nhật ký công việc.» · **không** GET | **PASS** |
| QA-02 | Kỳ rộng `2026-07-01`→`2026-08-31` · Xem | BE seed **12** (`mwl1`–`mwl12`) CUC2 · không QL.22 | **PASS** (code) · default tháng hiện tại (2026-08) chỉ 2 dòng `2026-08-01` — **không P0** |
| QA-03 | `workType=repair` · Xem | Filter `WorkType` OrdinalIgnoreCase · coalesce `workType`/`type` | **PASS** (`FilterMaintenanceWorkLogs`) |
| QA-04 | Làm mới khi `!viewed` | toast info «Chưa xem — nhấn «Xem» để tải nhật ký công việc» · **không** `applyAndView` · **không** fetch | **PASS** |
| QA-05 | Xuất Excel | CSV UTF-8 BOM · gated `viewed` · params applied · filename `maintenance-work-logs.csv` · `subsetCsv` gồm `methodSummary`/`mainResult` | **PASS** |
| QA-06 | Config cột | `ReportDisplayConfigModal` · `columnSeeds` derive từ `columns` (mergePrefs key PP/kết quả) · persist `saveReportColumnPrefs` `${TEST_ID}`/`FAMILY` | **PASS** analog · **không** Kind B schema editor |
| QA-07 | Mở WO | `drillSource` top `/maintenance?id=` · `workOrderId` | **PASS** |
| QA-08 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-09 | FE query | `qs()` gửi `workType` `routeId` `teamId` `from` `to` **`q`** (không `search` từ page) `page` `pageSize` | **PASS** (`queryParams`) |
| QA-10 | Grid ngày | `formatDayVi` `vi-VN` từ `row.day` | **PASS** |
| QA-11 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · loại việc enum · đội enum + empty Tất cả | **PASS** |
| QA-12 | FilterRoute exact | `routeId=QL.1` **không** match `QL.10` · `Equals` OrdinalIgnoreCase · **cấm** StartsWith | **PASS** (BE helper) |
| QA-13 | Chart SoCai | khi viewed + ≥1 dòng · KPI **Dòng · Tuyến · Hoàn thành** · series trend/by-type/by-route · **không** API chart · **không** KPI 4 `rpt-bao-cao-cong` | **PASS** |
| QA-14 | Cột PP / Kết quả | grid `methodSummary` label **PP** · `mainResult` label **Kết quả** trước `drill` | **PASS** (GAP-DS-NKCV-01) |
| QA-15 | CSV map | `CSV_COL_BY_GRID.methodSummary` → `methodSummary` · `mainResult` → `mainResult` · BE header cùng field | **PASS** (GAP-SA-NKCV-GRID) |
| QA-16 | Kỳ mặc định tháng hiện tại | `defaultMonthRange` · Xem không nới kỳ chỉ seed trong tháng | **PASS** (contract · không P0) |
| QA-17 | `q` search BE | coalesce `q`/`search` · Contains WO/hạng mục/tuyến/đội/nhà thầu/`MainResult` | **PASS** |

## T-QA-01 — DoD vs live (sau Dev cột PP/kết quả)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `q`+`workType` · cột Design gồm PP/kết quả | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated toast «Chưa xem» · Excel gated viewed + applied · chart SoCai client · print modal · config FULL analog · drill `/maintenance?id=` | **PASS** |
| T-UI-LKP-01 | tuyến/loại/đội SearchInput · **cấm** QL.22 · **cấm** native select | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `day` `vi-VN` | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/nhat-ky-cong-viec` · pageId `rpt-nhat-ky-cong-viec` · testId `rmms-maintenance-work-log-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/maintenance-work-logs` · FilterRoute **exact** · FilterDay · pageSize allow-list · in-memory 12 · **không** path mới | **PASS** (code keep) |
| T-BE-02 | export CSV UTF-8 BOM filename `maintenance-work-logs.csv` · header gồm `methodSummary,mainResult` · **không** page | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` maintenance-work-logs + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được nhật ký công việc» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** (`Page` helper) |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId`/`workType`/`teamId` empty/`all` | all | **PASS** (`FilterMaintenanceWorkLogs`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.10 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |
| N10 | Đổi draft tuyến khi viewed rồi Excel | Excel dùng `routeId` applied, không draft | **PASS** |
| N11 | Reuse `worklogs` | page này **không** gọi `/report/worklogs` | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/maintenance-work-logs` + `type` `workType` `routeId` `teamId` `from` `to` `search` `q` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/maintenance-work-logs/export` | **PASS** (filename + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit` exit 0) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings · `linm-rmms-report.68ca6441.js`) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_8c5ea930` **keep** BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF join `MaintenanceWorkLog`/`WorkOrder` P2 · Integration road-route Type A live (seed fallback P1) · live browser click (static+build). Modal title Kind E analog vs Kind B «Cấu hình hiển thị danh mục» — **không P0**. Config analog **không** nút «Thêm cột» Kind B — **không P0**. Default kỳ tháng hiện tại chỉ 2/12 seed — **không P0**.

## P0 / GAP

Không P0. Dev GAP-DS-NKCV-01 cột PP/kết quả · GAP-SA-NKCV-GRID `CSV_COL_BY_GRID` **đóng** — QA xác nhận.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

## Handoff Review

- Artifact: `specs/rpt-nhat-ky-cong-viec/qa/scenarios.md`
- Review = **pending** đến lượt (`roleOnly=qa` this task).
- autoApprove ON trên board → enqueue `/agent-review` sau `completed` task QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
