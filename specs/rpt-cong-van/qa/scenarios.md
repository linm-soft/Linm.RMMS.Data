# QA — scenarios — rpt-cong-van (Kind E) · QA `task_228ef478`

| Field | Value |
|-------|-------|
| feature | `rpt-cong-van` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF (Dev `task_adae5aea`) |
| mfeStdUrl | `http://localhost:9311/bao-cao/cong-van` |
| mfeStdRoute | `/bao-cao/cong-van` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | enum FE `OFFICIAL_DOC_DIRECTION_LOOKUP` · `ORG_UNIT_LOOKUP` (CC2.1/2.2/2.3/DRVN) · **cấm** road-route / `QL.22` trên leaf |
| taskId | `task_228ef478` |
| prior Dev | `task_adae5aea` · implement `done` |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `OfficialDocsReportPage` + `OfficialDocsFilterBar` + `endpoint.ts` `qs`/`exportOfficialDocs` + `lookups.ts` + Report API `FilterOfficialDocs` coalesce + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-15T23:30:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/cong-van` · `http://localhost:9311/bao-cao/cong-van` | Mount `OfficialDocsReportPage` · không 404 · `data-testid=rmms-official-docs-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 (BE `AllowedPageSizes`) | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft chiều/đơn vị/ngày/q | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportOfficialDocs` `getBlob` `/report/official-docs/export` · QS `direction` `orgUnitId` `from` `to` `q` **applied** · download `official-docs.csv` · subset `columnPrefs` | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Công văn đi — đến» · `fas fa-envelope-open-text` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput chiều/đơn vị · Date range · Input q · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | `listTitle` «Kết quả báo cáo công văn» · `LinCatalogDataGrid` `resizable: true` (cột + tableConfig + visibleColumns) · STT grid · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/cong-van` | Title Công văn đi — đến · empty «Chưa xem — nhấn «Xem» để tải báo cáo công văn.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** dòng (2026-07-27…2026-08-01) · Chi cục II.* · DRVN · đi/đến | **PASS** (code) |
| QA-03 | Chiều = Công văn đi (`direction=di`) | `FilterOfficialDocs` chỉ `Direction=di` · canonical thắng alias `type` | **PASS** (BE coalesce) |
| QA-04 | Xuất Excel | `official-docs.csv` UTF-8 BOM · cột direction = **label VN** · gated `viewed` | **PASS** |
| QA-05 | Config cột | `ReportDisplayConfigModal` + `saveReportColumnPrefs` persist · `visibleColumns` `resizable: true` · CSV subset | **PASS** |
| QA-06 | Mở công văn | `drillOps` top `/ops?id={docId}` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | list `qs()` gửi `direction`/`q` (không `type`/`search` sau Dev pack) | **PASS** (`queryParams`) |
| QA-09 | Grid ngày | `formatDayVi` → `toLocaleDateString('vi-VN')` | **PASS** |
| QA-10 | Lookup leaf | SearchInput chiều `di`/`den` + empty Tất cả · đơn vị CC2.1/2.2/2.3/DRVN · **cấm** `ROAD_ROUTE` trên FilterBar | **PASS** |

## T-QA-01 — DoD vs live (sau Dev GAP query/Excel/resize/day)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `direction`/`q` | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Excel gated viewed + applied + columnPrefs · chart SoCai client · print modal · config FULL · drill `/ops?id=` | **PASS** |
| T-UI-LKP-01 | chiều/đơn vị enum FE SearchInput · **cấm** road-route / QL.22 trên leaf | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `day` `vi-VN` | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/cong-van` · pageId `rpt-cong-van` · testId `rmms-official-docs-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/official-docs` · coalesce `direction ?? type`, `q ?? search` · canonical thắng · pageSize allow-list · in-memory 12 · **cấm** `routeId` | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM `official-docs.csv` · direction label VN | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` official-docs + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo công văn» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `direction` empty/`all` | all chiều | **PASS** (`FilterOfficialDocs`) |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/official-docs` + `direction` `q` `orgUnitId` `from` `to` + alias `type` `search` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/official-docs/export` | **PASS** (BOM + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack production · size warnings only) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_adae5aea` isolated API + BFF **PASS** |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · OfficialDocument EF P2 · org-unit Type A Integration P2 · live browser click (static+build).

## P0 / GAP

Không P0. Dev GAP query/Excel/resize/day **đóng** — QA xác nhận coalesce, `canExport=viewed`, `resizable: true`, `formatDayVi`.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
