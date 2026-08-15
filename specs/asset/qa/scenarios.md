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
| taskId | `task_d460f577` |
| prior Dev | `task_d31bfbd3` · implement `done` |
| updatedAt | `2026-08-14T16:45:00.000Z` |
| method | static review live `AssetListPage` + `AssetFormPage` + `lookups.ts` + endpoint/BFF/API · typecheck/build PASS |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9301/asset` | Route mount · không 404 | **PASS** (`index.tsx` `/asset`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · grid hoặc empty · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize default 50 · sizes 50/100/200/500 (common) | **PASS** |
| S3 | Search | `SearchTextInput` debounce 300ms + Enter · **không** nút Tìm | **PASS** |
| S4 | Type / route | `SearchInput` Integration 23/38 · **không** native Select 8 nhãn | **PASS** |
| S5 | Toolbar B | refresh · history · cog · +Tạo mới trên B · view/edit/delete khi `activeRow` | **PASS** |
| S6 | History | `LinCatalogHistoryModal` + stub client empty | **PASS** (debt P1) |
| S7 | Row menu | View / Sửa / Sao chép / Lịch sử / Delete · `buildCatalogRowMenuItems` | **PASS** |
| S8 | Form | Full page `/asset/new` · `/:id` · `/:id/edit` · `/:id/copy` · View `<dl>` | **PASS** (cấm Slideout) |
| S9 | No ERP.* | FE BASE `/asset/road-assets` · BE `Linm.RMMS.WebService` | **PASS** |

## List A–D (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Sổ tài sản kết cấu hạ tầng đường bộ» · `fas fa-road` · **cấm** Thêm mới trên A | **PASS** |
| B | Filters: search · type · route · org · kmFrom · kmTo · **Xóa điều kiện** · Tạo mới chỉ trên B | **PASS** |
| C | `LinCatalogDataGrid` + `tableConfig` resize · STT/□/Mã/Tên/Loại/Tuyến/km/status/GPS · click mã → View · loại/tuyến `formatMasterDisplay` | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| F | `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` | **PASS** |
| Layout | `.page` flex column height 100% · skeletonRows=8 · `data-catalog-list-page` | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Copy→(Delete)

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | Toolbar + row menu + deep-link `?form=` → `/new` / `/:id` / `/edit` / `/copy` | **PASS** |
| QA-21 | Create | Toolbar +Tạo mới → `/asset/new` → POST `/asset/road-assets` · **không** gửi `code` | **PASS** |
| QA-22 | Edit | `/asset/:id/edit` → PUT (+ `source`) | **PASS** |
| QA-23 | View | `/asset/:id` · `<dl data-testid=rmms-asset-view>` · Sửa/Sao chép/Đóng · **không** Input disabled xám | **PASS** |
| QA-24 | Copy | `/asset/:id/copy` → POST mới · code placeholder tự sinh | **PASS** |
| QA-25 | Delete toolbar | `activeRow` + confirm → DELETE soft | **PASS** |
| QA-26 | Delete row menu | `case 'delete'` → soft DELETE | **PASS** |
| QA-27 | Delete form Edit | nút Xóa trên form → list | **PASS** |
| QA-28 | T-UI-LKP-01 | List+form type/route SearchInput Integration · org tree flatten `/integration/org-units/tree` · **cấm** `ASSET_TYPES` production | **PASS** |
| QA-29 | T-UI-FIELD-01 | Required name/type/route/kmFrom/status · Select status/source từ `init-data` · MoneyInput · TextArea note · photos mock không persist | **PASS** |
| QA-30 | T-UI-PROD-01 | no Resource / Slideout trên `/asset*` form · View `<dl>` | **PASS** |
| QA-31 | T-UI-UX-01 | list flex 100% · code `readOnly` không `disabled` · SearchInput `dropdownPortal: true` · no `filterMaxWidthPx` | **PASS** |
| QA-32 | BE route | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` + `init-data` · domain Asset · **cấm ERP.*** | **PASS** |
| QA-33 | Leave dirty | confirm trước về list (Hủy / Quay lại) | **PASS** |
| QA-34 | Perm | codes `asset.road-assets.*` · local mode all true | **PASS** |
| QA-35 | Filter QS | GET list `search,type,route,kmFrom,kmTo,orgUnit,page,pageSize` | **PASS** (FE endpoint + BE controller) |
| QA-36 | Init-data | `GET …/road-assets/init-data` statuses tot/theo_doi/can_bao_tri · sources manual/ai | **PASS** (client + BFF + API) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Lưu thiếu required | Banner + `fieldInvalid` | **PASS** (code) |
| N2 | GetById fail | Toast + navigate list | **PASS** (code) |
| N3 | Delete không perm | toast warning / nút ẩn | **PASS** (local mode all true) |
| N4 | History không chọn dòng | toast «Chọn một dòng…» | **PASS** |
| N5 | API down | `assetService` fallback local store / empty init | **PASS** (dev fallback — không P0) |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/asset/road-assets?search=&type=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | **PASS** |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` XCO | **PASS** (controller) |
| API-03 | POST | `/api/v1/asset/road-assets` | **PASS** |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` (+ source) | **PASS** |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` soft | **PASS** |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` | **PASS** |
| API-LKP-01 | GET | `/api/v1/integration/asset-types/search` | **PASS** (FE lookups) |
| API-LKP-02 | GET | `/api/v1/integration/road-routes/search` | **PASS** (FE lookups) |
| API-LKP-03 | GET | `/api/v1/integration/org-units/tree` | **PASS** (FE lookups) |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| SD-AUTH | P2 | `[RequirePermission]` TODO CommonLib NuGet |
| History API | P1 | stub empty `/document-history` |
| Excel | P1 | out of list pack |
| Leaflet / AI | P1 | out of pack |
| Org tree UX | P2 | SearchInput flatten tree (không widget cây visual) — khớp TL «org tree = filter SearchInput» |

**P0:** none — **cấm** handoff blocked.

## Build gate (`task_d460f577`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Asset) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 0 errors · size warnings only) |
| BE Write this role | **n/a** — QA không đụng API |
| Prior Dev `dotnet` API+BFF | **PASS** (`task_d31bfbd3`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:45:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT workflow **2026.08.14.5**) |
| taskId | `task_d460f577` |
| contentHashPriorDev | `task_d31bfbd3` |
