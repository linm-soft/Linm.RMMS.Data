# QA — scenarios — rpt-nhat-ky-tuan-duong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | **`report`** Kind **E** |
| changeScope | `edit_page` |
| taskId | `task_46ade61e` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-log-road` |
| method | static review live FE + filter + endpoint + BE `FilterPatrolLogRoad` / `FilterRoute` exact + BFF Forward + `yarn typecheck` + `yarn build` |
| prior · dev | `confirmed` · `implement/rpt-nhat-ky-tuan-duong.md` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T08:52:00.000Z` |

## Scope

Leaf Kind **E** «Nhật ký tuần đường». **Không** Kind B catalog. **Không** CRUD form. **Không** rewrite. Re-verify Dev keep + DoD PO/TL.

Live:

- FE: `PatrolLogRoadReportPage.tsx` · `PatrolLogRoadFilterBar.tsx` · route `bao-cao/nhat-ky-tuan-duong`
- HTTP: `reportEndpoint.getPatrolLogRoad` / `exportPatrolLogRoad` · BASE `/report` · query **`q`**
- BE: `GET api/v1/report/patrol-log-road` + `/export` · filename `patrol-log-road.csv`
- BFF: Forward list + export bytes

## Smoke

| # | Step | Result |
|---|------|--------|
| S0 | Route `bao-cao/nhat-ky-tuan-duong` · `data-testid=rmms-patrol-log-road-report-page` | **PASS** |
| S1 | 1× `LinPageLayout` kind=`report` · không nested CatalogListShell | **PASS** |
| S2 | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` | **PASS** |
| S3 | Xem / Enter trên Input tìm = `applyAndView` (`onSearch` + `onKeyDown` Enter) | **PASS** |
| S4 | Đổi draft (`routeDraft`/`staffDraft`/`searchDraft`/`fromDraft`/`toDraft`) không đổi `queryParams` → không fetch | **PASS** |
| S5 | Toolbar: refresh gated · Excel `canExport: viewed` · Config FULL `ReportDisplayConfigModal` · In `LinReportPrintScopeModal` · chart khi viewed+rows | **PASS** |
| S6 | Export `GET /report/patrol-log-road/export` · download `patrol-log-road.csv` · `CSV_COL_BY_GRID` gồm `locationText` | **PASS** |
| S7 | Form OUT · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | Không `ERP.*` · không `api/v1/rmms` · không plural `api/v1/reports` trên page/service | **PASS** |
| S9 | `LinCatalogDataGrid` `tableConfig.resizable: true` · skeletonRows=8 · flex `.page` | **PASS** |
| S10 | Cấm `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` | **PASS** |
| S11 | Lookup SearchInput tuyến (`ROAD_ROUTE_LOOKUP_CONFIG` filter `QL.22`) + cán bộ enum · cấm native `<select>` | **PASS** |
| S12 | Title Zone A «Nhật ký tuần đường» · cấm Thêm mới A | **PASS** |

## Feature (T-QA-01)

| ID | Expect | Evidence | Result |
|----|--------|----------|--------|
| QA-01 | Empty chưa xem | `emptyMessage` khi `!viewed`: «Chưa xem — nhấn «Xem»…» · `items=[]` · `totalCount` pager 0 | **PASS** |
| QA-02 | FilterRoute exact QL.1 ≠ QL.10 | BE `FilterRoute` `string.Equals` OrdinalIgnoreCase · empty/`all` = all · **không** prefix | **PASS** |
| QA-03 | staffId lọc `PatrolStaffId` | `FilterPatrolLogRoad` exact ignore-case · empty/`all` skip | **PASS** |
| QA-04 | Làm mới `!viewed` = toast, không fetch | `reloadAll` toast + `return` trước `load()` | **PASS** |
| QA-05 | Drill sổ nguồn | `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}&entry={entryId}` · `window.top` | **PASS** |
| QA-06 | Chart SoCai chỉ viewed + ≥1 dòng | `canChart` = showCharts ∧ visibleCharts ∧ viewed ∧ items.length ∧ chartBuilt | **PASS** |
| QA-07 | Cột nội dung = `weatherAndEvent` | grid key `weatherAndEvent` label «Nội dung nhật ký» | **PASS** |
| QA-08 | Cột Vị trí `locationText` | grid + DTO + export header + `CSV_COL_BY_GRID` | **PASS** |
| QA-09 | Query canonical `q` | FE `queryParams.q` · export `q` · BE `CoalesceCanonical(qText, search)` | **PASS** |
| QA-10 | Excel chưa Xem | toast «Nhấn «Xem» trước khi xuất Excel» · không gọi export | **PASS** |
| QA-11 | TZ | filter `from`/`to` date-only · grid `formatDayVi` `vi-VN` từ `day` | **PASS** |
| QA-12 | pageSize 50/100/200/500 | `LinCatalogListPagination` onPageSizeChange · page=1 | **PASS** |
| QA-13 | Toast SSOT · cấm alert/confirm | `dispatchAppToast` · print `window.print` sau modal | **PASS** |
| QA-14 | `type` query | BE ignore (`_ = type`) · FE không gửi | **PASS** |

## T-pack map

| id | QA |
|----|----|
| T-UI-LIST-01 | **PASS** |
| T-UI-FORM-01 | **OUT PASS** |
| T-UI-RPT-01 / CONFIG / CHART | **PASS** |
| T-UI-ACT / LKP / FIELD / PROD / UX | **PASS** |
| T-BE-01 / T-BE-02 / T-BFF-01 / T-LKP-01 | **PASS** (không đụng API QA) |
| T-QA-01 | **PASS** |

## Defects

| Sev | ID | Note |
|-----|-----|------|
| P0 | — | **none** |
| P1 | — | **none** |
| P2 | — | webpack asset size warnings (3) — không block Kind E |

## Build (VERIFY GATE)

| Cmd | Result |
|-----|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit` exit 0) |
| MFE `yarn build` | **PASS** webpack 5.109.2 compiled · 3 size warnings only |
| BE `dotnet build` | **N/A** — QA không sửa API/BFF |

## Verdict

**PASS** Kind E · **không** GAP P0/P1 · form OUT · prefix `api/v1/report/patrol-log-road`.

Handoff Review: `review/findings.md` **pending** (roleOnly QA — **cấm** chạy Review trong `task_46ade61e`). autoApprove ON → enqueue **review** sau completed task này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
