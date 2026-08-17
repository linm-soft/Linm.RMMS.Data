# QA — scenarios — rpt-tuan-kiem (Kind E) · QA `task_043b63fc`

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-kiem` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` Kind E |
| changeScope | `edit_page` |
| pack | T-QA-01 / T-QA-RPT-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF keep |
| mfeStdUrl | `http://localhost:9311/bao-cao/tuan-kiem` |
| mfeStdRoute | `/bao-cao/tuan-kiem` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-inspect` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROAD_ROUTE_LOOKUP_CONFIG` CUC2 strip `QL.22` · `PATROL_SESSION_STATUS_LOOKUP` · `WORKLOG_STAFF_LOOKUP` nva/ttb/lvc/pmd |
| taskId | `task_043b63fc` |
| prior Dev | `task_7f4faa5b` · implement `done` · SSOT re-review PASS · title **Báo cáo tuần kiểm** · không đụng BE |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `PatrolInspectReportPage` + `PatrolInspectFilterBar` + `endpoint.ts` `getPatrolInspect`/`exportPatrolInspect` + `lookups.ts` + `ReportService` `FilterPatrolInspect`/`FilterRoute`/`FilterDay` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T22:55:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/tuan-kiem` · `http://localhost:9311/bao-cao/tuan-kiem` | Mount `PatrolInspectReportPage` · `data-testid=rmms-patrol-inspect-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/status/NV/ngày/search | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`; `queryParams` = applied) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportPatrolInspect` `/report/patrol-inspect/export` · QS `staffId` `routeId` `status` `from` `to` `q` **applied** · download `patrol-inspect.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` trên leaf · **cấm** reuse `patrol-log-inspect` / `patrol-road` | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Báo cáo tuần kiểm» · `fas fa-clipboard-check` · **cấm** Thêm mới trên A | **PASS** (Dev GAP-DEV-BTK-TITLE-01 fixed) |
| B | `LinErpListFilterBar` · SearchInput tuyến/trạng thái/NV · Date range · Input `q` · **Xem** = `onSearch` · **cấm** native `<select>` · **0** Excel trên bar | **PASS** |
| C | `listTitle` «Kết quả tuần kiểm» · `LinCatalogDataGrid` `resizable: true` · cột day/code/route/userName/patrolTypeLabel/checkInCount/coveragePercent/statusLabel/offlineQueued/note/drill | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/tuan-kiem` | Title Báo cáo tuần kiểm · empty «Chưa xem — nhấn «Xem» để tải báo cáo tuần kiểm.» | **PASS** |
| QA-02 | Xem kỳ mặc định tháng hiện tại | BE hard-filter `PatrolType==inspect` · seed `pi1`–`pi13`+`pi15` · `pi14` road **excluded** · CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | Làm mới khi `!viewed` | toast info «Chưa xem — nhấn «Xem» để tải báo cáo tuần kiểm» · **không** fetch | **PASS** |
| QA-04 | Xuất Excel | `patrol-inspect.csv` UTF-8 BOM · gated `viewed` · params applied · subset `columnPrefs` | **PASS** |
| QA-05 | Config cột | `ReportDisplayConfigModal` · persist `saveReportColumnPrefs` · CSV subset | **PASS** |
| QA-06 | Mở phiên | `drillSource` top `/patrol?id=` · `row.sessionId` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | `qs()` gửi **`q`** · `staffId` `routeId` `status` `from` `to` · **không** gửi `type` | **PASS** (`queryParams`) |
| QA-09 | Grid ngày | `formatDayVi` `vi-VN` từ `row.day` | **PASS** |
| QA-10 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · status in_progress/done/missed/offline · NV nva/ttb/lvc/pmd · empty=Tất cả | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase | **PASS** (BE helper) |
| QA-12 | Draft filter sau Xem | đổi `routeDraft` không fetch · lưới giữ applied đến khi Xem lại | **PASS** |
| QA-13 | Chart SoCai | client trend/by-status/by-route · KPI Phiên · Tuyến · Offline khi viewed + có dòng · **không** API chart | **PASS** |
| QA-14 | Chỉ tuần kiểm | Filter `PatrolType==inspect` · inspect seed lên lưới · road `pi14` không lên | **PASS** |
| QA-15 | Viewed 0 dòng | empty «Không có dòng phù hợp bộ lọc.» | **PASS** |

## T-QA-01 — DoD vs live (sau Dev `task_7f4faa5b`)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `q` · cột PO §5 · title Báo cáo tuần kiểm | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Làm mới gated · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill `/patrol?id=` | **PASS** |
| T-UI-LKP-01 | tuyến/status/NV SearchInput · **cấm** QL.22 · **cấm** native select | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO date-only · grid `day` `vi-VN` | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/tuan-kiem` · pageId `rpt-tuan-kiem` · testId `rmms-patrol-inspect-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/patrol-inspect` · FilterRoute **exact** · FilterDay · pageSize allow-list · in-memory 14 inspect · **không** migration · type ignored | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM `patrol-inspect.csv` | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` patrol-inspect + export · QS passthrough · **không** business | **PASS** |
| T-PERM-01 | `report.tuan-kiem.read` | **stub** P1 (không P0) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo tuần kiểm» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 (`AllowedPageSizes`) | **PASS** (keep) |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `routeId` empty | all (`FilterRoute` skip) | **PASS** |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.15/QL.217 | **PASS** |
| N9 | Làm mới trước Xem | toast «Chưa xem» · không fetch | **PASS** |
| N10 | Đổi filter sau khi đã Xem | draft only · lưới giữ applied đến khi Xem lại | **PASS** |
| N11 | `pi14` road | không xuất hiện trên `patrol-inspect` | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/patrol-inspect` + `staffId` `routeId` `status` `from` `to` `q` `page` `pageSize` · alias `search` · `type` ignored | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/patrol-inspect/export` | **PASS** (BOM + BFF Forward · filename `patrol-inspect.csv`) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit` exit 0) |
| FE `yarn build` | **PASS** (webpack 5.109.2 compiled successfully) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_7f4faa5b` keep BE |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · EF `rmms_patrol_sessions` P2 · Integration road-route Type A P2 · live browser click (static+build). T-PERM-01 stub P1.

## P0 / GAP

Không P0. Không GAP P1 mới trên surface Kind E.

## Verdict

**PASS** · T-QA-01 **done** · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
