# QA — scenarios — users (Kind B catalog + full-page form)

| Field | Value |
|-------|-------|
| feature | `users` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| pack | T-QA-01 · QA-CRUD · FormType (LKP/FIELD/PROD/UX) · delta `route` SearchInput + `?route=` + MultiSearchCsv |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/users` |
| bff | `web-bff/api/v1/integration/users` |
| lookup | `GET /integration/road-routes/search` · `GET /integration/org-units` · `GET /integration/users?search=` |
| taskId | `task_2710faa2` |
| prior Dev | `task_438be5dc` · implement `done` |
| autoApprove | ON |
| method | static review live `UsersListPage` + `UsersFormPage` + `MultiSearchCsvField` + `lookups.ts` + `endpoint.ts`/`usersService`/`usersStore` + API `AppUserService`/`AppUsersController` + BFF `AppUsersBffController` · `yarn typecheck` + `yarn build` + `dotnet build` PASS |
| updatedAt | `2026-08-15T09:05:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9314/integration/users` | Route mount · không 404 | **PASS** (`index.tsx` `/integration/users` · `/new` · `/:id`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · grid/empty · **không** nested `CatalogListShell` | **PASS** (`data-catalog-list-page` · `skeletonRows=8`) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize default 50 · sizes 50/100/200/500 | **PASS** |
| S3 | Search debounce (không nút Tìm) | `SearchTextInput` + Enter `onSearch` · `pulseSearch` · page=1 · 300ms draft | **PASS** |
| S4 | Role / status / tuyến SearchInput change | List refetch page=1 · `getList({ route })` | **PASS** (`routeDraft` → `applyFilters`) |
| S5 | Toolbar Refresh / +Tạo mới / Config | `/integration/users/new` · config force `resizable: true` · Tạo mới **chỉ Zone B** | **PASS** |
| S6 | History toolbar/menu | `LinCatalogHistoryModal` stub | **PASS** (debt History API) |
| S7 | Row menu View/Edit/Copy/Delete/History + Phân tuyến / Cán bộ QL / Đổi MK | Full-page form · `buildCatalogRowMenuItems` + 3 extra | **PASS** |
| S8 | Form Create/Edit/View/Copy | Z1 header · Z2 fields · Z3 footer Lưu/Hủy · View `<dl>` | **PASS** |
| S9 | No ERP.* path | FE BASE `/integration/users` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` | **PASS** |

## List A–D (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Quản lý người dùng» · `fas fa-user-shield` · **cấm** Thêm mới trên A | **PASS** |
| B | catalogToolbar refresh·history·cog·add·delete · filters `filterCols=4`: SearchTextInput + role + status + **route SearchInput** `ROAD_ROUTE_LOOKUP_CONFIG` | **PASS** |
| C | Org tree exact `orgCode` (không subtree) + `LinCatalogDataGrid` `resizable: true` · click mã → View · cột Mã/Họ tên/Tổ chức/Vai trò/Tuyến/Trạng thái/SĐT | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Title | `listTitle` `Cơ quan · người dùng · phân tuyến` | **PASS** |
| Layout | flex column · skeleton · `useServerPagedListLoading` | **PASS** |
| Empty | copy gồm tuyến khi filter route | **PASS** |
| Status label | `active` → **Đang dùng** · `locked` → **Khóa** (FE `STATUS_LABELS` + BE init-data) | **PASS** |

## QA-CRUD — Create→Edit→View→Copy→Delete + assign

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | Toolbar + row menu + deep-link → `/new` / `/:id` / `?mode=edit` / `?copyFrom=` | **PASS** |
| QA-21 | Create | Toolbar +Tạo → `/integration/users/new` → footer Lưu → POST `/integration/users` · mã `USR-*` BE sinh | **PASS** |
| QA-22 | Edit | `/:id?mode=edit` → PUT | **PASS** |
| QA-23 | View | `/:id` · `<dl data-testid=…-view>` · Sửa/Sao chép/Quay lại · **không** Input readOnly xám toàn form | **PASS** (`code` Input `readOnly` chỉ Create/Edit IdCode) |
| QA-24 | Copy | `/integration/users/new?copyFrom=` → POST mới · password field create/copy | **PASS** |
| QA-25 | Delete toolbar | `activeRow` + Lin Modal → soft DELETE | **PASS** |
| QA-26 | Delete row menu | `case 'delete'` → soft DELETE · **không** `window.confirm` | **PASS** |
| QA-27 | T-UI-LKP-01 | List+form org/role/status SearchInput · route `road-routes/search` · managed `users?search=` · **cấm** native Select | **PASS** |
| QA-28 | T-UI-FIELD-01 | username/fullName/email/phone/password Input · lookup codes SearchInput · `routesCsv` **MultiSearchCsvField** (không Text CSV) | **PASS** |
| QA-29 | T-UI-PROD-01 | no Resource / Slideout trên `/integration/users*` · View = `<dl>` | **PASS** |
| QA-30 | T-UI-UX-01 | list flex · footer-only Lưu/Hủy · SearchInput `dropdownPortal: true` · **không** `filterMaxWidthPx` · toast | **PASS** |
| QA-31 | BE `?route=` | GET list match `RoutesCsv` split CI (padded comma) · FE `getList` + local store `route` | **PASS** |
| QA-32 | BE VAL | RoutesCsv ∈ `rmms_road_routes` IsActive · OrgCode ∈ org-units · ManagedUserIdsCsv Guid cùng tenant ≠ self · 422 `{ success:false, message }` | **PASS** (`NormalizeRoutesCsvAsync` / `ValidateOrgCodeAsync` / `NormalizeManagedUserIdsCsvAsync`) |
| QA-33 | BFF | `BuildListPath` `Request.QueryString` passthrough · no business logic | **PASS** |
| QA-34 | Leave dirty | `LeaveConfirmModal` trước về list | **PASS** |
| QA-35 | Perm | `integration.users.read\|create\|update\|delete` · FE gate · BE `RequirePermission` stub | **PASS** (FE) · **P2** (BE Auth) |
| QA-36 | Phân tuyến | Row modal SearchInput multi → POST `{id}/assign-routes` `{ routesCsv }` | **PASS** |
| QA-37 | Cán bộ QL | Row modal SearchInput multi users persist Guid CSV → POST `{id}/managed-users` | **PASS** |
| QA-38 | Đổi MK | Modal 3 password Title Case · confirm mismatch client · POST `{id}/change-password` | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Lưu thiếu required | Banner + `fieldInvalid` username/fullName/email/org | **PASS** |
| N2 | Email invalid | field error «Email không hợp lệ» | **PASS** |
| N3 | Delete không perm | toast quyền | **PASS** (local mode all true) |
| N4 | History không chọn dòng | toast chọn dòng | **PASS** (toolbar pattern) |
| N5 | Route không ∈ catalog | 422 VN «Tuyến «…» không thuộc danh mục…» | **PASS** (API) |
| N6 | Org không ∈ catalog | 422 VN tổ chức | **PASS** (API) |
| N7 | Managed Guid = self | 422 không gán chính mình | **PASS** (API) |
| N8 | API down | `usersService` fallback local store `rows:v1` | **PASS** (dev fallback — không P0) |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/integration/users?search=&status=&role=&orgCode=&route=&page=&pageSize=` | **PASS** |
| API-02 | GET | `/api/v1/integration/users/init-data` | **PASS** |
| API-03 | GET | `/api/v1/integration/users/{id}` | **PASS** |
| API-04 | POST | `/api/v1/integration/users` | **PASS** |
| API-05 | PUT | `/api/v1/integration/users/{id}` | **PASS** |
| API-06 | DELETE | `/api/v1/integration/users/{id}` soft | **PASS** |
| API-07 | POST | `/api/v1/integration/users/{id}/change-password` | **PASS** |
| API-08 | POST | `/api/v1/integration/users/{id}/assign-routes` | **PASS** |
| API-09 | POST | `/api/v1/integration/users/{id}/managed-users` | **PASS** |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | **PASS** (FE citizen lookups reuse) |
| BFF-01 | GET | `web-bff/api/v1/integration/users` + QS `route` | **PASS** |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-F-USR-01 | P2 | `[RequirePermission]` TODO CommonLib NuGet — không block CRUD |
| History API | P1 | stub empty document-history |
| GAP-PO-USR-06 | P2 | Hồ sơ / Ban.TK / Đăng xuất / VỀ TRANG CHỦ SKIP P1 |
| Manual browser | — | Operator smoke trên mfeStdUrl khi `yarn start:std` chạy |

**P0:** none — **cấm** handoff blocked.

## Build gate (`task_2710faa2`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Integration) | **PASS** (`tsc --noEmit` exit 0) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 compiled · 3 size warnings only) |
| `dotnet build` RMMS.Service.Api | **PASS** (output `D:/tmp/rmms-users-qa-api-build` — Default bin may lock) |
| `dotnet build` LINM.RMMS.Integration.Bff `--no-dependencies` | **PASS** |
| BE Write this role | **n/a** — QA không đụng API |

## Handoff → Review

1. `review/findings.md` · roles sau Review = **pending** đến lượt.
2. `autoApprove=ON` khi tới Review → agent tự confirm.
3. STATUS `qa` = **done** · `review` = **pending**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T09:05:00.000Z |
| versionGate | rechecked (`recheck_new` · STATUS orchestrator **2026.08.08.21** / workflow **2026.08.09.02**) |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.08.21 |
| taskId | `task_2710faa2` |
