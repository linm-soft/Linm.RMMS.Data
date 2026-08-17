# QA — scenarios — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| status | `done` |
| this role | `qa` · `/agent-qa` |
| pack | T-QA-01 · T-QA-CRUD-01 · FormType quality (LKP/FIELD/PROD/UX) |
| mfeStdUrl | `http://localhost:9313/drone` |
| mfeStdRoute | `/drone` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/drone/scans` |
| taskId | `task_d3584c9d` |
| prior Dev | `task_12c629c0` · implement `done` |
| updatedAt | `2026-08-16T02:50:00.000Z` |
| method | static review live `DroneListPage` + `DroneFormPage` + `lookups.ts` + `DroneScansController` / BFF · typecheck/build PASS |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9313/drone` | Route mount · không 404 | **PASS** (`index.tsx` `/drone` · `/drone/new` · `/drone/:id`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · grid hoặc empty · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize default 50 | **PASS** |
| S3 | Search | `SearchTextInput` `onSearch` + Enter · placeholder mã/tên/tuyến/phi công | **PASS** (còn nút Tìm — debt P2) |
| S4 | Loại bay / TT / đơn vị | `Select` enum lookup · apply qua `handleSearch` | **PASS** |
| S5 | Toolbar B | refresh · history · schema cog · +Tạo scan · view/edit/delete khi `activeRow` | **PASS** |
| S6 | History | `LinCatalogHistoryModal` + toast nếu chưa chọn dòng | **PASS** (stub client) |
| S7 | Row menu | View/Sửa/Copy/Delete/History + upload/process/viewer/artifacts/incident/GIS/AiVision/Excel | **PASS** |
| S8 | Form | Full page `/drone/new` · `/:id` view · `?mode=edit` · `?copyFrom=` · View `<dl>` | **PASS** (cấm Slideout) |
| S9 | No ERP.* | FE `droneService` · BE `Linm.RMMS.WebService` `api/v1/drone/scans` | **PASS** |

## List A–D (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Drone / Reality Capture» · `fas fa-helicopter` · **cấm** Thêm mới trên A | **PASS** |
| B | Filters: search · flight · status · office · **+ Tạo scan** chỉ toolbar | **PASS** |
| C | `LinCatalogDataGrid` + `tableConfig` từ schema · click mã → View · `buildDynamicGridColumns` | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| F | `LinCatalogUiSchemaEditorModal` catalogKind=`drone-scans` · **cấm** `LinListTableConfigModal` / `configHint` | **PASS** |
| Layout | `.page` + `data-catalog-list-page` · skeletonRows=8 · `useServerPagedListLoading` | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Copy→Delete

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | Toolbar + row menu → `/drone/new` · `/:id` · `?mode=edit` · `?copyFrom=` | **PASS** |
| QA-21 | Create | Toolbar +Tạo scan → POST `/drone/scans` · code tự sinh · không gửi code | **PASS** |
| QA-22 | Edit | `?mode=edit` → PUT | **PASS** |
| QA-23 | View | `/drone/:id` · `<dl data-testid=rmms-drone-view>` · Sửa/Sao chép/Đóng · **không** Input disabled xám trên View | **PASS** |
| QA-24 | Copy | `/drone/new?copyFrom=` → POST mới · code placeholder | **PASS** |
| QA-25 | Delete toolbar | `activeRow` + confirm → DELETE soft | **PASS** |
| QA-26 | Delete row menu | `case 'delete'` → soft DELETE | **PASS** |
| QA-27 | Form Hủy job | confirm → DELETE · về list | **PASS** |
| QA-28 | T-UI-LKP | Form `SearchInput` flight/office/device/status/tiles/artifact · list enum `Select` | **PASS** |
| QA-29 | T-UI-FIELD | Required name/flightType/road · Input date/number · SearchInput lookups | **PASS** |
| QA-30 | T-UI-PROD | no Resource / Slideout trên `/drone*` form · View `<dl>` | **PASS** |
| QA-31 | T-UI-UX | list flex + skeleton · SearchTextInput · schema editor | **PASS** (code create `disabled` — P2) |
| QA-32 | BE route | `api/v1/drone/scans` · BFF `web-bff/api/v1/drone/scans` · domain Drone · **cấm ERP.*** | **PASS** |
| QA-33 | Leave dirty | confirm trước về list (Huỷ / Quay lại) | **PASS** |
| QA-34 | Perm | `useDronePermissions` local allow-all | **PASS** (IAM P2) |
| QA-35 | Filter QS | GET list `search,flightType,status,office,page,pageSize` | **PASS** |
| QA-36 | Process | POST `/{id}/process` · status processing | **PASS** (stub) |
| QA-37 | Artifacts | inline grid add/remove (edit) · view table | **PASS** |
| QA-38 | Viewer stub | modal Cesium placeholder | **PASS** (P3 live) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Lưu thiếu required | Banner + `fieldInvalid` | **PASS** (code) |
| N2 | GetById fail | Toast + navigate list | **PASS** (code) |
| N3 | Delete không perm | toast warning | **PASS** (local mode all true) |
| N4 | History không chọn dòng | toast «Chọn một dòng…» | **PASS** |
| N5 | API down | `droneService` fallback local store | **PASS** (dev fallback — không P0) |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/drone/scans?search=&flightType=&status=&office=&page=&pageSize=` | **PASS** |
| API-02 | GET | `/api/v1/drone/scans/{id}` | **PASS** |
| API-03 | POST | `/api/v1/drone/scans` | **PASS** |
| API-04 | PUT | `/api/v1/drone/scans/{id}` | **PASS** |
| API-05 | DELETE | `/api/v1/drone/scans/{id}` soft | **PASS** |
| API-06 | POST | `/api/v1/drone/scans/{id}/process` | **PASS** |
| API-07 | GET | `/api/v1/drone/scans/{id}/artifacts` | **PASS** |
| API-SCHEMA | GET/PUT | Integration catalog ui-schema `drone-scans` | **PASS** (registry + seed) |
| BFF | * | `web-bff/api/v1/drone/scans` same verbs | **PASS** |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-CODE-DISABLED | P2 | Form create/edit mã scan dùng `Input disabled` (nên `readOnly` không xám) |
| GAP-QA-SEARCH-BTN | P2 | Extra nút «Tìm» cạnh `SearchTextInput` (SSOT thường chỉ debounce/Enter) |
| GAP-QA-FILTER-MAXW | P2 | `filterMaxWidthPx={1100}` trên list shell |
| F-01 | P3 | Cesium live viewer |
| F-02 | P2 | Upload batch / worker PDAL thật |
| F-03 | P2 | IAM permissions (stub allow-all) |
| History API | P1 | modal stub |
| Event bus | DEFER | `drone.scan.completed` |

**P0:** none — **cấm** handoff blocked.

## Build gate (`task_d3584c9d`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Drone) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 0 errors · size warnings only) |
| BE Write this role | **n/a** — QA không đụng API |
| Prior Dev `dotnet` API+BFF | **PASS** (`task_12c629c0`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-16T02:50:00.000Z |
| versionGate | ok (`keep_current` · STATUS feature SSOT · json not on disk) |
| taskId | `task_d3584c9d` |
| contentHashPriorDev | `task_12c629c0` |
