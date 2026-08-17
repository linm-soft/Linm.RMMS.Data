# QA — scenarios — rpt-checkin (Kind E) · QA `task_78abffa6`

| Field | Value |
|-------|-------|
| feature | `rpt-checkin` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF (Dev `task_a6b7e97e`) |
| mfeStdUrl | `http://localhost:9311/bao-cao/checkin` |
| mfeStdRoute | `/bao-cao/checkin` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `GET /integration/road-routes/search` · seed 38 CUC2 fallback · **cấm** `QL.22` |
| taskId | `task_78abffa6` |
| prior Dev | `task_a6b7e97e` · implement `done` |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `CheckinReportPage` + `CheckinFilterBar` + `endpoint.ts` + `lookups.ts` + Report API/BFF `FilterCheckins` · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-15T15:50:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/checkin` · `http://localhost:9311/bao-cao/checkin` | Mount `CheckinReportPage` · không 404 · `data-testid=rmms-checkin-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 (BE `AllowedPageSizes`) | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft loại/tuyến/ngày | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL | **PASS** |
| S6 | Excel | `exportCheckins` `getBlob` `/report/checkins/export` · download `checkins.csv` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «BC Check-in» · `fas fa-map-marker-alt` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput loại/tuyến · Date range · Input search · Button Xuất Excel · **cấm** native `<select>` | **PASS** |
| C | `listTitle` «Kết quả báo cáo check-in» · `LinCatalogDataGrid` `resizable: true` · STT grid · **không** CRUD ⋯ · **không** KPI/map worklog | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/checkin` | Title BC Check-in · empty «Chưa xem — nhấn «Xem» để tải báo cáo check-in.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed 12 dòng CUC2 (Jul 27–Aug 1) · default tháng hiện tại (Aug 2026) chỉ 3 dòng Aug | **PASS** (code) |
| QA-03 | Loại Coverage (`type=coverage`) | `FilterCheckins` `points >= 3` | **PASS** (BE) |
| QA-04 | Xuất Excel | `checkins.csv` UTF-8 BOM (`UTF8Encoding(true)`) | **PASS** |
| QA-05 | Config cột | `ReportDisplayConfigModal` + `saveReportColumnPrefs` persist · `visibleColumns` `resizable: true` | **PASS** |
| QA-06 | Mở tuần tra | `drillPatrol` top `/patrol?id={patrolId}` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |

## T-QA-01 — DoD vs live (sau Dev RESIZE)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Excel checkins · chart SoCai client · print modal · config FULL | **PASS** |
| T-UI-LKP-01 | kind enum tĩnh SearchInput · route Type A + seed 38 · **cấm** QL.22 | **PASS** (`lookups.ts` filter) |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid DTO readonly | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/checkin` · pageId `rpt-checkin` · testId `rmms-checkin-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/checkins` · envelope · pageSize allow-list · in-memory 12 | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM | **PASS** |
| T-BE-03 | coverage `points>=3` | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` checkins + export | **PASS** |
| T-LKP-01 | consume `GET api/v1/integration/road-routes/search` | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo check-in» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** |
| N4 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N5 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/checkins` + `from` `to` `type` `routeId` `search` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/checkins/export` | **PASS** (BOM + BFF Forward) |
| API-LKP-01 | GET | `/integration/road-routes/search` | **PASS** (consume + fallback) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings only) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_a6b7e97e` **PASS** |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · Chart API server (P1 client SoCai) · live browser click (static+build).

## P0 / GAP

Không P0. GAP-TL-CHK-RESIZE **đóng** Dev — QA xác nhận `resizable: true` cột + migrate displayConfig.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
