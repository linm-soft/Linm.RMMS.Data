# QA — scenarios — reports (Kind E) · QA `task_44115473`

| Field | Value |
|-------|-------|
| feature | `reports` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| pack | T-QA-01 · Kind E A–D · T-UI-FIELD-01/02 (Dev `task_cc67808f`) |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| mfeStdRoute | `/bao-cao` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| lookup | `GET /integration/road-routes/search` · seed 38 fallback |
| taskId | `task_44115473` |
| prior Dev | `task_cc67808f` · implement `done` |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static review live `ReportListPage` + `ReportFormPage` + `lookups.ts` + `endpoint.ts` + Report API/BFF · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-15T08:35:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · `http://localhost:9311/bao-cao` | Route mount · không 404 | **PASS** (`index.tsx` `/bao-cao`) |
| S1 | List shell | 1× `LinPageLayout` kind=`report` · grid hoặc empty · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize default 50 · sizes 50/100/200/500 | **PASS** |
| S3 | Search Enter | `SearchTextInput` `onSearch` → `applyAndView` (Xem) · page=1 | **PASS** |
| S4 | Family SearchInput | đổi Loại BC · `viewed=false` · clear grid · empty hint đến khi Xem | **PASS** |
| S5 | reportToolbar | Làm mới · Biểu đồ stub toast · In stub toast · Config modal hint | **PASS** |
| S6 | Excel | nút chỉ khi `familyDraft=checkins` · `getBlob` `/report/checkins/export` · `checkins.csv` | **PASS** |
| S7 | Form | `/bao-cao/new` · `/bao-cao/:id` → `Navigate` `/bao-cao` | **PASS** |
| S8 | No ERP.* | FE BASE `/report` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` | **PASS** |

## Kind E zones (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Báo cáo Web» · `fas fa-chart-bar` · **cấm** Thêm mới trên A | **PASS** |
| B | SearchInput family/kind/route/period · `LinListFilterDateRangeField` **ẩn** assets · SearchTextInput · Button **Xem** · Excel check-in · `filterCols=4` · `filterMaxWidthPx={null}` | **PASS** |
| C | `LinCatalogDataGrid` `resizable: true` · STT grid · cột theo family · Dropdown display condition/severity/status · **không** CRUD ⋯ | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` flex · `skeletonRows={8}` · `data-catalog-list-page` · empty hint chưa xem | **PASS** |

## T-QA-01 — DoD vs live (sau Dev FIELD)

| id | Expect | Result |
|----|--------|--------|
| T-UI-LIST-01 | 1× LinPageLayout · kéo cột · pager · Xem mới load · đổi family clear | **PASS** |
| T-UI-FORM-01 | Form OUT redirect · **cấm** Resource/Slideout/View=readOnly | **PASS** |
| T-UI-ACT-01 | Enter=Xem · Excel checkins · chart/print toast · config hint | **PASS** |
| T-UI-LKP-01 | family/kind/period enum tĩnh · route Type A + seed 38 · **cấm** QL.22 | **PASS** (`lookups.ts` filter) |
| T-UI-FIELD-01 | from/to = `LinListFilterDateRangeField` · ẩn `assets` · query ISO `from`/`to` | **PASS** (Dev closed GAP) |
| T-UI-FIELD-02 | condition/severity/status label VN readonly `data-dropdown-display` · **không** editor | **PASS** (Dev closed GAP) |
| T-UI-PROD-01 | Kind E · form scaffold OUT | **PASS** |
| T-UI-UX-01 | toast SSOT · **cấm** `filterMaxWidth` · empty/skeleton không blank | **PASS** |
| T-BE-01 | GET assets/incidents/checkins · pageSize allow-list · in-memory | **PASS** (code) |
| T-BE-02 | export CSV UTF-8 BOM | **PASS** (code · prior Dev) |
| T-BFF-01 | proxy `web-bff/api/v1/report` · QS passthrough | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Excel khi không phải check-in | toast info «Xuất Excel chỉ dùng cho BC Check-in» (nếu gọi handler) · UI ẩn nút | **PASS** |
| N2 | List API fail | toast error · items empty | **PASS** |
| N3 | Export fail | toast error | **PASS** |
| N4 | pageSize không {50,100,200,500} | BE clamp 50 | **PASS** (`AllowedPageSizes`) |
| N5 | Chưa nhấn Xem | empty «Chưa xem — nhấn «Xem»…» · không fetch | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-00 | GET | `api/v1/report/health` | **PASS** (controller) |
| API-01 | GET | `api/v1/report/assets` | **PASS** |
| API-02 | GET | `api/v1/report/incidents` + `from` `to` | **PASS** |
| API-03 | GET | `api/v1/report/checkins` + `from` `to` | **PASS** |
| API-04 | GET | `api/v1/report/checkins/export` | **PASS** (FE getBlob · BFF Forward) |
| API-LKP-01 | GET | `/integration/road-routes/search` | **PASS** (consume + fallback) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | **PASS** (webpack 0 errors · 3 size warnings) |
| BE `dotnet build` | **n/a this role** — QA không đụng API; prior Dev **PASS** |

## Out of pack

Catalog 172 · warehouse EF · Chart/Print real · `[RequirePermission]` CommonLib ≥1.4.0.

## Verdict

**PASS** · T-QA-01 done · GAP Date + Dropdown display **closed** trên live. Handoff Review: `review/findings.md` (pending · không chạy role này).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-qa -->
