# QA — scenarios — rpt-giay-phep-thi-cong (Kind E) · QA `task_e2f60a2f`

| Field | Value |
|-------|-------|
| feature | `rpt-giay-phep-thi-cong` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-LKP/FIELD/PROD/UX · T-BE/BFF (Dev `task_797ce368`) |
| mfeStdUrl | `http://localhost:9311/bao-cao/giay-phep-thi-cong` |
| mfeStdRoute | `/bao-cao/giay-phep-thi-cong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `ROAD_ROUTE_LOOKUP` CUC2 + strip `QL.22` · `PERMIT_STATUS_LOOKUP` `hieu-luc`/`het-han`/`gia-han` |
| taskId | `task_e2f60a2f` |
| prior Dev | `task_797ce368` · implement `done` |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `ConstructionPermitReportPage` + `ConstructionPermitFilterBar` + `endpoint.ts` `qs`/`exportConstructionPermits` + `lookups.ts` + `ReportService` `FilterConstructionPermits`/`FilterRoute` + BFF Forward · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T05:00:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `src/index.tsx` `bao-cao/giay-phep-thi-cong` · `http://localhost:9311/bao-cao/giay-phep-thi-cong` | Mount `ConstructionPermitReportPage` · không 404 · `data-testid=rmms-construction-permit-report-page` | **PASS** |
| S1 | List shell | 1× `LinPageLayout` `kind="report"` · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` luôn · `totalCount=0` khi `!viewed` · sizes 50/100/200/500 (BE `AllowedPageSizes`) | **PASS** |
| S3 | Search Enter | `LinErpListFilterBar` `onSearch` + Input Enter → `applyAndView` · page=1 · `viewed=true` | **PASS** |
| S4 | Đổi draft tuyến/TT/ngày/q | không fetch đến khi Xem · empty hint | **PASS** (`load` gated `viewed`) |
| S5 | reportToolbar | Làm mới · Biểu đồ khi viewed+rows+`showCharts` · In `LinReportPrintScopeModal` rồi `window.print` · Config `ReportDisplayConfigModal` FULL · Excel `canExport=viewed` | **PASS** |
| S6 | Excel | `exportConstructionPermits` `getBlob` `/report/construction-permits/export` · QS `status` `routeId` `from` `to` `q` **applied** · download `construction-permits.csv` · subset `columnPrefs` + `CSV_COL_BY_GRID` contractor/issuer/extendedAt | **PASS** |
| S7 | Form | **OUT** — không `/new` · không Resource/Slideout/View=readOnly | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Giấy phép thi công» · `fas fa-file-signature` · **cấm** Thêm mới trên A | **PASS** |
| B | `LinErpListFilterBar` · SearchInput tuyến/TT · Date range · Input q · **Xem** = `onSearch` · **cấm** native `<select>` | **PASS** |
| C | `listTitle` «Kết quả báo cáo giấy phép thi công» · `LinCatalogDataGrid` `resizable: true` · STT grid · cột `contractor`/`issuer` default ẩn · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty chưa xem | **PASS** |
| Kind E | `const columns` + `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` / `LinListTableConfigModal` / `configHint` | **PASS** |

## Feature scenarios

| ID | Step | Expect | Result |
|----|------|--------|--------|
| QA-01 | Mở `http://localhost:9311/bao-cao/giay-phep-thi-cong` | Title Giấy phép thi công · empty «Chưa xem — nhấn «Xem» để tải báo cáo giấy phép thi công.» | **PASS** |
| QA-02 | Kỳ `2026-07-01`→`2026-08-31` · Xem | BE seed **12** dòng (2026-07-27…2026-08-01) · CUC2 · không QL.22 | **PASS** (code) |
| QA-03 | TT = Còn hiệu lực (`status=hieu-luc`) | `FilterConstructionPermits` chỉ `Status=hieu-luc` · canonical thắng alias `type` | **PASS** (BE coalesce) |
| QA-04 | Xuất Excel | `construction-permits.csv` UTF-8 BOM · header `contractor,issuer,extendedAt` · `status` = StatusLabel VN · gated `viewed` | **PASS** |
| QA-05 | Config cột | seed `visible: false` contractor/issuer · Config checkbox Hiện · persist `saveReportColumnPrefs` · CSV subset | **PASS** |
| QA-06 | Mở sổ GP | `drillSource` top `/csdl-so-sach?kind=construction-permits&id={permitId}` | **PASS** |
| QA-07 | Không Thêm mới / không alert | không `onAdd` Zone A · không `window.alert`/`confirm` · toast `dispatchAppToast` | **PASS** |
| QA-08 | FE query | list `qs()` gửi `status`/`q` (không `type`/`search` từ page) | **PASS** (`queryParams`) |
| QA-09 | Grid ngày + hiệu lực | `formatDayVi` `vi-VN` · `IssuedAt → ExpiresAt` · `GH {ExtendedAt}` khi có (p3, p8) | **PASS** |
| QA-10 | Lookup leaf | SearchInput tuyến CUC2 strip QL.22 · TT `hieu-luc`/`het-han`/`gia-han` + empty Tất cả | **PASS** |
| QA-11 | FilterRoute exact | `routeId=QL.1` **không** match `QL.10`/`QL.15`/`QL.217` · `Equals` OrdinalIgnoreCase · **cấm** StartsWith | **PASS** (BE helper) |

## T-QA-01 — DoD vs live (sau Dev GAP FilterRoute/drill/cột ẩn/CSV/ExtendedAt)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột ON · pager luôn · Xem mới load · FE `status`/`q` · cột ẩn contractor/issuer | **PASS** |
| T-UI-FORM-01 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Excel gated viewed + applied + columnPrefs + CSV map extra · chart SoCai client · print modal · config FULL · drill `kind=construction-permits` | **PASS** |
| T-UI-LKP-01 | tuyến SearchInput CUC2 · **cấm** QL.22 · TT enum FE | **PASS** |
| T-UI-FIELD-01 | Date `from`/`to` ISO · grid `day` `vi-VN` · Hiệu lực + ExtendedAt | **PASS** |
| T-UI-PROD-01 | Kind E · leaf `/bao-cao/giay-phep-thi-cong` · pageId `rpt-giay-phep-thi-cong` · testId `rmms-construction-permit-report` | **PASS** |
| T-UI-UX-01 | toast SSOT · `filterMaxWidthPx={null}` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET `api/v1/report/construction-permits` · coalesce `status ?? type`, `q ?? search` · FilterRoute **exact** · pageSize allow-list · in-memory 12 · **không** migration | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM · extra cols contractor/issuer/extendedAt · status label VN | **PASS** |
| T-BFF-01 | proxy `web-bff/api/v1/report` construction-permits + export · QS passthrough · **không** business | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | List API fail | toast error «Không tải được báo cáo giấy phép thi công» · items empty | **PASS** |
| N2 | Export fail | toast error «Xuất Excel thất bại» | **PASS** |
| N3 | Excel trước Xem | toast info «Nhấn «Xem» trước khi xuất Excel» · không download | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** |
| N5 | Chưa nhấn Xem | empty hint · không fetch · pager total 0 | **PASS** |
| N6 | Print fail allPages | toast «Không tải được dữ liệu in» | **PASS** |
| N7 | `status` empty/`all` | all TT | **PASS** (`FilterConstructionPermits`) |
| N8 | `routeId=QL.1` StartsWith regress | không trả QL.10/QL.15/QL.217 | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `api/v1/report/construction-permits` + `status` `q` `routeId` `from` `to` + alias `type` `search` | **PASS** (`ReportQueryController`) |
| API-02 | GET | `api/v1/report/construction-permits/export` | **PASS** (BOM + extra cols + BFF Forward) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev `task_797ce368` isolated API + BFF **PASS** |

## Out of pack

`[RequirePermission]` CommonLib ≥1.4.0 · ConstructionPermit EF P2 · Integration road-route Type A P2 · live browser click (static+build). Modal title analog «Sửa config — báo cáo» (Kind E) vs Kind B «Cấu hình hiển thị danh mục» — **không P0**.

## P0 / GAP

Không P0. Dev GAP FilterRoute exact · drill kind · cột ẩn · CSV extra · ExtendedAt **đóng** — QA xác nhận.

## Verdict

**PASS** · T-QA-01 done · P0 none. Handoff Review: `review/findings.md` (pending · **không** chạy role này · chain ON · autoApprove ON).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
