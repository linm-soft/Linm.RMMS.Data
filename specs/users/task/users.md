# Team-lead — task pack · users

| Field | Value |
|-------|-------|
| feature | `users` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — catalog A–D + tree master + **full-page** form (`UsersFormPage`) · **cấm** Slideout |
| mfeStdRoute | `/integration/users` |
| route_confirm | **approve** A = `/integration/users` (context + DOMAIN-MAP Integration) |
| autoApprove | **ON** |
| taskId | `task_a9f310fb` |
| prior | data_analy `done` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| updatedAt | `2026-08-15T08:50:00.000Z` |

## Source lock

| Key | Value |
|-----|-------|
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Integration** |
| api | `api/v1/integration/users` |
| bff | `web-bff/api/v1/integration/users` |
| org reuse | `api/v1/integration/org-units` (tree + search) |
| road reuse | `api/v1/integration/road-routes/search` |
| **cấm** | `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · parent JSON |

## Enum SSOT (SA chốt — TL bind UI label)

**roleCode** persist = live BE (không kebab prototype):

| value | Label VN |
|-------|----------|
| `Admin` | Admin |
| `Ban.TK` | Ban.TK |
| `KyThuat` | Kỹ thuật |
| `VanPhong` | Văn phòng |

**status** persist `active` \| `locked`:

| value | Label VN (UI) |
|-------|----------------|
| `active` | **Đang dùng** |
| `locked` | **Khóa** |

`init-data` có thể trả «Hoạt động» / «Đang khóa» — Dev **override display** theo bảng trên; **không** đổi API value.

## DES-GRID → Lin\* map (T-UI-LIST A–D)

| Zone | Component / rule |
|------|------------------|
| A | `LinPageLayout` header · icon `fa-user-shield` · title «Quản lý người dùng» · **cấm** Thêm trên A |
| B | `catalogToolbar` (refresh · history stub · `fa-cog` · add **Tạo mới** phải) + `ErpListHeaderFilters`: SearchTextInput · SearchInput role · SearchInput status · **SearchInput route `road-route`** |
| C1 | filters trên B |
| C2 | org tree panel + `LinCatalogDataGrid` (resizable **default ON**) · `LinCatalogRowActionMenu` |
| D | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | dedicated page Z1–Z3 · SearchInput lookup · View `<dl>` · footer-only Lưu/Hủy |
| LAYOUT-06 | page flex column · gridWrap `min-height:0` · skeleton |

## retry.ssot_rereview (TL live MFE 2026-08-15 · `UsersListPage` + `UsersFormPage`)

| Check | Live | Gap |
|-------|------|-----|
| 1× `LinPageLayout`, **cấm** nested `CatalogListShell` | **PASS** (1 layout, tree+grid children) | — |
| `LinCatalogDataGrid` + kéo cột default ON | **PASS** (`resizable: true` + config modal force) | — |
| Footer `LinCatalogListPagination` | **PASS** | — |
| flex + skeleton | **PASS** (`useServerPagedListLoading` · `skeletonRows={8}`) | — |
| toolbar config | **PASS** (refresh · history · editConfig · add · edit/view/delete khi chọn dòng) | — |
| list_parity Kind B A–D | **GAP** Zone B **thiếu** SearchInput tuyến | T-UI-LIST-01 delta filter `route` |
| tree_master org | **PASS** (`org-units/tree` + fallback `ORG_TREE`) | exact `orgCode` P1 — **không** subtree |
| form full-page · **cấm** Slideout/Resource | **PASS** `UsersFormPage` | — |
| View `<dl>` · **cấm** View=`readOnly` Input | **PASS** `viewBody` `<dl>` | `code` Input `readOnly` chỉ Create/Edit IdCode — OK |
| SearchInput role/status/org form+list | **PASS** | — |
| `routesCsv` SearchInput multi `road-route` | **FAIL** form + modal = `Input` CSV | T-UI-LKP · T-UI-FIELD |
| `managedUserIdsCsv` SearchInput multi `users` | **FAIL** modal = `Input` CSV | T-UI-LKP · T-UI-ACT |
| list `?route=` | **FAIL** FE `getList` không gửi `route`; API chưa param | T-BE-01 · T-BFF-01 verify · T-UI-LIST |
| FE perm codes | **PASS** stub `integration.users.*` | T-PERM BE `RequirePermission` vẫn stub |
| list_parity row menu | **PASS** Xem/Sửa/Copy/Xóa/History + Phân tuyến / Cán bộ QL / Đổi MK | wire lookup không CSV |

**Cấm** chỉ patch 1 chỗ user nêu: Dev phải đóng **toàn bộ GAP cùng surface** (filter tuyến + form tuyến + 2 modal lookup + BE validate).

## Tasks

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| T-CTX-01 | users | docs | T-DA-01 | **done** (PO Kind B full-page) | Context API paths Signed Integration · **cấm** CatalogListShell / Slideout trong CTX design table |
| T-PERM-01 | users | ui+api | T-CTX-01 | FE **done** · BE stub | codes `integration.users.read\|create\|update\|delete` · FE gate giữ · BE `RequirePermission` **TODO stub** (Auth GAP-F-USR-01 P2) |
| T-BE-01 | users | api | T-CTX-01 | **delta** | `GET …/users?route=` match `RoutesCsv` split `,` CI · validate `RoutesCsv` ∈ `rmms_road_routes` active · `OrgCode` ∈ org-units · `ManagedUserIdsCsv` Guid ∈ users cùng tenant ≠ self · 422 `{ success:false, message }` · **cấm** JSON array body |
| T-BE-02 | users | migration | T-BE-01 | **n/a** | Schema_RmmsUsers **DONE** — không bảng mới |
| T-BFF-01 | users | bff | T-BE-01 | **verify** | `BuildListPath` đã forward QS — sau API `route` **không** endpoint mới; smoke list `?route=` |
| T-UI-LIST-01 | users | ui | T-BFF-01 | shell **PASS** · filter **GAP** | Giữ A–D + tree + grid + pagination · **thêm** SearchInput tuyến `catalogKind=road-route` · `usersService.getList({ route })` · filter đổi page=1 · empty copy gồm route |
| T-UI-FORM-01 | users | ui | T-UI-LIST-01 | **PASS** skeleton | Giữ full-page `/new` · `/:id` · View `<dl>` · leave-confirm · footer Lưu/Hủy · **cấm** Slideout |
| T-UI-ACT-01 | users | ui | T-UI-LIST-01 | CRUD/pwd **PASS** · assign **GAP control** | Toolbar Thêm/Sửa/Xem/Xóa · row → form · Đổi MK modal 3 password Title Case · Phân tuyến / Cán bộ QL **SearchInput multi** (không `Input` CSV) |
| T-UI-MAP-FORM | users | ui | T-UI-FORM-01 | **delta routes** | Map: username/fullName/email/phone `Input` · org/role/status SearchInput · **routesCsv SearchInput multi** · password Input create/copy · updatedAt View only |
| T-UI-LKP-01 | users | ui | T-BE-CRUD-01 | **GAP route+users** | role/status = init-data · org = org-units/search hoặc init orgs · **route/routesCsv** = `road-routes/search` · managed = `GET users?search=` · **cấm** native Select |
| T-UI-FIELD-01 | users | ui | T-UI-MAP-FORM | **GAP** | string/email/tel/password ↔ Input; lookup codes ↔ SearchInput `value` = SA enum; persist CSV **sau** multi-select (không Text `routesCsv`) |
| T-UI-PROD-01 | users | ui | T-UI-FORM-01 | **PASS** | **cấm** Resource/Slideout/View=`readOnly` trên field nghiệp vụ · View = `<dl>` |
| T-UI-UX-01 | users | ui | T-UI-LIST-01 | **keep** | gap 4/8/16 · LinPageLayout/LinCatalog* · **cấm** `filterMaxWidth` / width px ad-hoc filter · confirm Lin Modal **cấm** `window.alert`/`confirm` · toast |
| T-BE-CRUD-01 | users | api | T-BE-01 | CRUD **DONE** · validate **delta** | Giữ CRUD + init-data + change-password + assign · **cộng** T-BE-01 validate |
| T-QA-01 | users | qa | T-UI-FORM-01 | pending QA | scenarios.md · mfeStdUrl `http://localhost:9314/integration/users` smoke |
| QA-CRUD | users | qa | T-UI-ACT-01 | pending QA | Create/Edit/View + filter tuyến + row assign SearchInput + pwd + delete |

## Action inventory (GAP-P2-ACT — IN P1 nghiệp vụ)

| UI action | Zone | Pair |
|-----------|------|------|
| Thêm | toolbar B | GET/POST `/integration/users/new` |
| Sửa / Xem | toolbar + row | GET/PUT `/integration/users/:id` |
| Sao chép | row + form view | POST create `?copyFrom=` |
| Xóa | toolbar + row | DELETE `{id}` · Lin Modal |
| Phân tuyến | row | POST `{id}/assign-routes` · SearchInput multi road-route |
| Cán bộ QL | row | POST `{id}/managed-users` · SearchInput multi users |
| Đổi MK | toolbar (khi có dòng) + row | POST `{id}/change-password` |
| Hồ sơ / Ban.TK / Đăng xuất / VỀ TRANG CHỦ | — | **SKIP** P1 (GAP-PO-USR-06) |

## T-BE / T-BFF detail

| Item | Spec |
|------|------|
| List query | `search` · `status` · `role` · `orgCode` · **`route`** · `page` · `pageSize` |
| `route` | Trim; user match nếu `RoutesCsv` chứa code (split `,` trim, CI). Empty = no extra filter |
| `orgCode` | exact node P1 (**không** descendant) |
| Validate RoutesCsv | split · trim · collapse dup · mỗi code ∈ road-routes active CUC2 · persist `"code1,code2"` |
| Validate OrgCode | org-unit active |
| Validate ManagedUserIdsCsv | Guid · IsActive · cùng CompanyCode · ≠ self |
| BFF | proxy-only · `X-Company-Id` forward · list QS passthrough |
| SHARE | `tenant_keep` |
| TZ / XCO | n/a |

## SD flags

| Flag | Value |
|------|-------|
| SD-BFF | proxy-only |
| SD-AUTH | stub local perms (`isPermissionsLocalModeActive` → true) |
| SD-JOB | n/a |
| SD-TOKEN | reuse existing API client |
| SD-HEADER | X-Company-Id forward |

## Handoff → Dev

1. **Không** rewrite list shell A–D / grid / pagination / tree đã PASS.
2. Implement **cùng surface**: Zone B `route` + FE `getList.route` + API `?route=` + validate org/route/managed + form/modal SearchInput (cấm CSV Input).
3. Bind enum **value** SA (`Admin`/`Ban.TK`/…) + status label «Đang dùng»/«Khóa».
4. Chỉ repo `Linm.RMMS.WebService` domain Integration — **cấm ERP.***
5. VERIFY: MFE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` API + BFF PASS — ghi implement § Build. Fail → **cấm** `completed` / handoff QA.
6. Roles sau = **pending** đến lượt (chain ON · autoApprove ON).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T08:50:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.08.21 |
| poSkillVersion | 2026.08.08.30 |
| designSkillVersion | 2026.08.08.31 |
| saSkillVersion | 2026.08.08.21 |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=2 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.3 · versionGate=rechecked -->
