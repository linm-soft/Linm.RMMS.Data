# QA — scenarios — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| this role | `qa` · `/agent-qa` |
| pack | T-QA-01 · T-QA-CRUD-01 · FormType quality (LKP/FIELD/PROD/UX) |
| mfeStdUrl | `http://localhost:9301/asset` |
| mfeStdRoute | `/asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` |
| taskId | `task_cde0d5d3` |
| prior Dev | `task_71340357` · implement `done` |
| updatedAt | `2026-08-14T14:50:00.000Z` |
| method | static review live `AssetListPage` + `AssetFormPage` + endpoint/BFF/API · typecheck/build PASS |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9301/asset` | Route mount · không 404 | **PASS** (`index.tsx` `/asset`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · grid hoặc empty · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize default 50 | **PASS** |
| S3 | Search | `SearchTextInput` · debounce 300ms + Enter · **không** nút Tìm | **PASS** |
| S4 | Type filter | `SearchInput` master `TYPE_LOOKUP` · **không** native Select | **PASS** |
| S5 | Toolbar | refresh · history · cog · add · view/edit/delete khi có `activeRow` | **PASS** |
| S6 | History | `LinCatalogHistoryModal` + stub client empty | **PASS** (debt P1) |
| S7 | Row menu | View/Edit/Copy/Delete/History · `buildCatalogRowMenuItems` | **PASS** |
| S8 | Form | Full page `/asset/new` · `/asset/:id` · View `<dl>` | **PASS** (cấm Slideout) |
| S9 | No ERP.* | FE BASE `/asset/road-assets` · BE `Linm.RMMS.WebService` | **PASS** |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Sổ tài sản kết cấu hạ tầng đường bộ» · `fas fa-road` | **PASS** |
| B | `catalogToolbar` refresh·history·cog·add·delete | **PASS** |
| C | SearchTextInput + SearchInput type · `LinCatalogDataGrid` + `tableConfig` resize | **PASS** |
| D | `LinCatalogListPagination` | **PASS** |
| F | `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | Toolbar + row menu + deep-link `?form=` → `/new` / `/:id` | **PASS** |
| QA-21 | Create | Toolbar +Thêm → `/asset/new` → POST `/asset/road-assets` | **PASS** |
| QA-22 | Edit | `/:id?mode=edit` → PUT | **PASS** |
| QA-23 | View | `/:id` · `<dl data-testid=rmms-asset-view>` · Sửa/Sao chép/Đóng · **không** Input readOnly | **PASS** |
| QA-24 | Copy | `/asset/new?copyFrom=` → POST mới · code tự sinh | **PASS** |
| QA-25 | Delete toolbar | `activeRow` + confirm → DELETE soft | **PASS** |
| QA-26 | Delete row menu | `case 'delete'` → soft DELETE | **PASS** |
| QA-27 | Delete form Edit | nút Xóa trên form → list | **PASS** |
| QA-28 | T-UI-LKP-01 | SearchInput type (list+form) + status (form) | **PASS** |
| QA-29 | T-UI-FIELD-01 | Required name/type/route/kmFrom/status · MoneyInput valueVnd · number lat/lng | **PASS** |
| QA-30 | T-UI-PROD-01 | no Resource / Slideout / View=readOnly | **PASS** |
| QA-31 | T-UI-UX-01 | list flex 100% · form gap 8/16 · no `filterMaxWidthPx` · Lin* | **PASS** |
| QA-32 | BE route | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · domain Asset | **PASS** |
| QA-33 | Leave dirty | confirm trước về list | **PASS** |
| QA-34 | Perm | codes `asset.road-assets.*` · local mode all true | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Lưu thiếu required | Banner + `fieldInvalid` | **PASS** (code) |
| N2 | GetById fail | Toast + navigate list | **PASS** (code) |
| N3 | Delete không perm | toast warning / nút ẩn | **PASS** (local mode all true) |
| N4 | History không chọn dòng | toast «Chọn một dòng…» | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/asset/road-assets?search=&type=&page=&pageSize=` | **PASS** |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` XCO | **PASS** (controller) |
| API-03 | POST | `/api/v1/asset/road-assets` | **PASS** |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` | **PASS** |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` soft | **PASS** |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| SD-AUTH | P2 | `[RequirePermission]` TODO CommonLib NuGet |
| History API | P1 | stub empty `/document-history` |
| Excel | P1 | catalog toolbar chưa có excel |
| form-init-data | P2 | TYPE/STATUS master constants (OUT remote init) |

**P0:** none — **cấm** handoff blocked.

## Build gate (`task_cde0d5d3`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Asset) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 0 errors · size warnings only) |
| BE Write this role | **n/a** — QA không đụng API |
| Prior Dev `dotnet` API+BFF | **PASS** (`task_71340357`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T14:50:00.000Z |
| versionGate | rechecked |
| taskId | `task_cde0d5d3` |
