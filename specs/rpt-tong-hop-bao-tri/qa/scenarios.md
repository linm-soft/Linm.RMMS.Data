# QA — scenarios — rpt-tong-hop-bao-tri (Kind E) · QA `task_92c720c1`

| Field | Value |
|-------|-------|
| feature | `rpt-tong-hop-bao-tri` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` (Kind **E**) |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D + KPI 6 · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF keep · Dev `task_b6fed297` (GAP-TL-THBT-01) |
| mfeStdUrl | `http://localhost:9311/bao-cao/tong-hop-bao-tri` |
| mfeStdRoute | `/bao-cao/tong-hop-bao-tri` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/maintenance-summary` |
| bff | `web-bff/api/v1/report` · `maintenance-summary` + `/export` |
| lookup | `ROAD_ROUTE` CUC2 strip `QL.22` · `MAINTENANCE_WORK_TYPE` · `MAINTENANCE_TEAM` SearchInput |
| taskId | `task_92c720c1` |
| prior Dev | `task_b6fed297` · implement `done` · **GAP-TL-THBT-01** closed |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `MaintenanceSummaryReportPage` + `MaintenanceSummaryFilterBar` + `endpoint.ts` `getMaintenanceSummary`/`exportMaintenanceSummary` + `lookups.ts` + `ReportService` `FilterMaintenanceSummaries`/`FilterRoute`/`FilterDay`/`BuildMaintenanceSummaryKpis`/`ExportMaintenanceSummaryCsvAsync` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T21:35:00.000Z` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** reuse `api/v1/report/worklogs` · **cấm** reuse `api/v1/report/maintenance-work-logs` · **cấm** reuse `GET api/v1/maintenance/summary` · **cấm** Kind B `LinCatalogUiSchemaEditorModal`.

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/tong-hop-bao-tri` · `http://localhost:9311/bao-cao/tong-hop-bao-tri` | Mount `MaintenanceSummaryReportPage` · không 404 · `data-testid=rmms-maintenance-summary-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/loại/đơn vị/kỳ/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới gated · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` · Config `ReportDisplayConfigModal` FULL analog · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportMaintenanceSummary` `getBlob` `/report/maintenance-summary/export` · QS `workType` `routeId` `teamId` `from` `to` `q` **applied** · filename `maintenance-summary.csv` · **không** page | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` · **cấm** `worklogs` / `maintenance-work-logs` / `maintenance/summary` trên slug này | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Tổng hợp bảo trì» · `fas fa-tools` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tuyến/loại/đơn vị · Date range · Input search · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | KPI 6 sau Xem · `listTitle` «Kết quả tổng hợp bảo trì» · `LinCatalogDataGrid` `resizable: true` · cột Hạn/Mã WO/Tiêu đề/Tuyến/Loại việc/Trạng thái/Đơn vị/Cán bộ/Tiến độ/SLA/Sự cố/Nguồn · **không** KL/ĐVT · drill «Mở WO» · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/tong-hop-bao-tri` | Title Tổng hợp bảo trì · empty «Chưa xem — nhấn «Xem» để tải tổng hợp bảo trì.» · **không** GET | **PASS** |
| QA-02 | Default kỳ `defaultSeedCoverRange` · Xem | `from=2026-07-25` · `to` = cuối tháng hiện tại · seed **15** (`ms1`–`ms15`) CUC2 · không QL.22 | **PASS** (GAP-TL-THBT-01) |
| QA-03 | `workType=repair` · Xem | Filter `WorkType` OrdinalIgnoreCase · coalesce `workType`/`type` | **PASS** (`FilterMaintenanceSummaries`) |
| QA-04 | Làm mới khi `!viewed` | toast info «Chưa xem — nhấn «Xem» để tải tổng hợp bảo trì» · **không** fetch | **PASS** |
| QA-05 | Xuất Excel | CSV UTF-8 BOM · gated `viewed` · params applied · filename `maintenance-summary.csv` · `CSV_COL_BY_GRID` map cột lưới | **PASS** |
| QA-06 | Config cột | `ReportDisplayConfigModal` · `columnSeeds` từ `columns` · persist `saveReportColumnPrefs` `${TEST_ID}`/`FAMILY` | **PASS** analog · **không** Kind B schema editor |
| QA-07 | Mở WO | `drillSource` top `/maintenance?id=` · `workOrderId` | **PASS** |
| QA-08 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-09 | FE query | `qs()` gửi `workType` `routeId` `teamId` `from` `to` **`q`** (không `search` từ page) `page` `pageSize` | **PASS** (`queryParams`) |
| QA-10 | Grid ngày | `formatDayVi` `vi-VN` từ `row.day` | **PASS** |
| QA-11 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · loại việc enum · đơn vị TEAM-1/2/3 + empty Tất cả | **PASS** |
| QA-12 | FilterRoute exact | `routeId=QL.1` **không** match `QL.10` · `Equals` OrdinalIgnoreCase · **cấm** StartsWith | **PASS** (BE helper) |
| QA-13 | Chart SoCai | khi viewed + ≥1 dòng · KPI strip 6 thẻ từ `kpis` · series trend/by-type/by-route từ `items` trang · **không** API chart | **PASS** |
| QA-14 | KPI 6 filtered set | FE bind `res.kpis` · BE `BuildMaintenanceSummaryKpis(rows)` **trước** `Page` · all-15: total 15 · new 2 · in_progress 3 · done 8 · cancelled 2 · emergency 3 | **PASS** |
| QA-15 | Empty from/to rồi Xem | `fromDate`/`toDate` `''` → không gửi QS date · FilterDay no-op · all seed | **PASS** (`from: fromDate \|\| undefined`) |
| QA-16 | `q` search BE | coalesce `q`/`search` · Contains code/title/route/teamName/assigneeName/incidentId | **PASS** |
| QA-17 | Không ghi đè nhật ký | page riêng · không gọi `/report/worklogs` hay `/report/maintenance-work-logs` | **PASS** |

## T-QA-01 — DoD vs live (sau Dev GAP-TL-THBT-01)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `q`+`workType` · KPI 6 · cột Design §2 | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated toast «Chưa xem» · Excel gated viewed + applied · chart SoCai client · print modal · config FULL analog · drill `/maintenance?id=` | **PASS** |
| T-UI-LKP-01 | tuyến/loại/đơn vị SearchInput · **cấm** QL.22 · **cấm** native select | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · default **2026-07-25** → cuối tháng hiện tại · empty = no date filter · grid `day` `vi-VN` | **PASS** (GAP closed) |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/tong-hop-bao-tri` · pageId `rpt-tong-hop-bao-tri` · testId `rmms-maintenance-summary-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/maintenance-summary` · FilterRoute **exact** · FilterDay · pageSize allow-list · in-memory 15 · KPI filtered set · **không** path mới | **PASS** (code keep) |
| T-BE-02 | export CSV UTF-8 BOM filename `maintenance-summary.csv` · header union SA · **không** page | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` maintenance-summary + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được tổng hợp bảo trì» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** (`Page` helper) |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId`/`workType`/`teamId` empty/`all` | all | **PASS** (`FilterMaintenanceSummaries`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.10 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |
| N10 | Đổi draft tuyến khi viewed rồi Excel | Excel dùng `routeId` applied, không draft | **PASS** |
| N11 | Reuse `worklogs` / `maintenance-work-logs` / `maintenance/summary` | page này **không** gọi các path đó | **PASS** |
| N12 | Default chỉ tháng hiện tại (regress GAP-TL-THBT-01) | **không** — `SEED_COVER_FROM=2026-07-25` | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/maintenance-summary` + `type` `workType` `routeId` `teamId` `from` `to` `search` `q` `page` `pageSize` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/maintenance-summary/export` | **PASS** (filename + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit` exit 0) |
| FE `yarn build` | **PASS** (webpack 5.109.2 compiled successfully) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev **keep** BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF join `rmms_work_orders` P2 · Integration road-route Type A live (seed fallback P1) · live browser click (static+build). Modal title Kind E analog vs Kind B «Cấu hình hiển thị danh mục» — **không P0**. Config analog **không** nút «Thêm cột» Kind B — **không P0**. Chart series từ `items` trang hiện tại (SA lock) — **không P0**.

## P0 / GAP

Không P0. Dev **GAP-TL-THBT-01** / **T-UI-FIELD-01** **đóng** — QA xác nhận `defaultSeedCoverRange`.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

## Handoff Review

- Artifact: `specs/rpt-tong-hop-bao-tri/qa/scenarios.md`
- Review = **pending** đến lượt (`roleOnly=qa` this task).
- autoApprove ON trên board → enqueue `/agent-review` sau `completed` task QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
