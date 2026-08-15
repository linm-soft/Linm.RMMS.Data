# SA — solution-discovery · users

| Field | Value |
|-------|-------|
| feature | `users` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — catalog A–D + tree master + **full-page** form (`UsersFormPage`) · **cấm** Slideout |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_810854fa`) |
| design_confirm | **approve** (cùng autopilot — Design regen A–D + reviewUrl) |
| domain | **Integration** (DOMAIN-MAP slug `users`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/users`** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` · `/integration/users` |
| prior | PO `confirmed` · Design `confirmed` · data-analy `sha256:0e46bf2c8b232a40f403e2777ef387f8cdea1b04edafa0c04edbca1bb07024b1` |
| updatedAt | `2026-08-15T08:41:00.000Z` |
| taskId | `task_810854fa` |

**Cấm:** `ERP.Service.*` · `ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` · parent JSON / `*Json` blob · invent domain ngoài Integration.

Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE).

---

## 1. Ownership

| Layer | Path |
|-------|------|
| API | `api/src/RMMS.Service.Api/Domains/Integration/` · `AppUsersController` |
| Service | `Domains/Integration/Services/AppUserService` · `IAppUserService` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/AppUserDtos.cs` |
| Persistence | `rmms_users` · `AppUserEntity` · tenant `CompanyCode` |
| Migrations | `api/shared/RMMS.Service.Migrations/` — Schema_RmmsUsers **DONE** (không bảng mới) |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/AppUsersBffController.cs` · **proxy-only** |
| MFE | `Linm.Web.RMMS.Integration` |
| Lookups reuse | org-units · road-routes (master packs, cùng domain Integration) |

### Route decision (DOMAIN-MAP)

| | Choice |
|--|--------|
| Slug | `users` → **Integration** |
| API prefix | `api/v1/integration/users` |
| BFF prefix | `web-bff/api/v1/integration/users` |
| Rationale | Live controller đã đúng DOMAIN-MAP — **không** đổi prefix |

---

## 2. Implement gates (chốt)

| Gate | Decision | Note |
|------|----------|------|
| sa_tz_gate | **tz_na** | Không DATE range filter. `CreatedAt`/`UpdatedAt` UTC store · FE display local |
| sa_xco_gate | **xco_na** | GET/{id} cùng tenant `CompanyCode` — không cross-company view P1 |
| sa_shared_table | **tenant_a** (`tenant_keep`) | `AppUserEntity` : `TenantEntity` · filter `CompanyCode` |
| Org tree | **Reuse** `api/v1/integration/org-units/tree` (`share_a` master) — **không** duplicate schema org |
| Road-route | **Reuse** `api/v1/integration/road-routes/search` (`share_a`) |
| Auth host | GAP-F-USR-01 **P2 không block** — host tạm Integration |

---

## 3. Live vs delta (audit 2026-08-15)

| Surface | Live BE | SA chốt P1 |
|---------|---------|------------|
| CRUD list/get/create/update/soft-delete | **DONE** | Giữ |
| init-data roles/statuses/orgs | **DONE** | Giữ · **enum value SSOT = live BE** (§5) |
| change-password / assign-routes / managed-users | **DONE** body CSV | Giữ persist CSV · UI SearchInput (Dev) |
| `GET …/users?search=&status=&role=&orgCode=` | **DONE** | Giữ; `search` đã match `RoutesCsv` |
| `GET …/users?route=` | **MISSING** | **DELTA** filter exact/contains code trong `RoutesCsv` |
| Validate `RoutesCsv` ∈ 38 CUC2 | **MISSING** (free string) | **DELTA** 422 nếu code không thuộc `rmms_road_routes` active |
| Validate `OrgCode` ∈ org-units | **MISSING** (free string) | **DELTA** 422 nếu không thuộc catalog org |
| Validate `ManagedUserIdsCsv` ∈ users cùng tenant | **MISSING** | **DELTA** 422 id lạ / self-id |
| BFF querystring forward | **DONE** (`BuildListPath`) | Delta `?route=` **không** cần endpoint BFF mới |
| Form pattern | — | **Full-page** — **cấm** Slideout (sửa handoff SA cũ) |

---

## 4. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| List Zone B | search · role · status · route · orgCode (tree) · page · pageSize | query | — |
| List Zone C | grid + tree | master + tenant users | `AppUserEntity` + org tree |
| Create / Edit / Copy | § field map | tenant | `AppUserEntity` |
| View | same · **`<dl>` display** | tenant | `AppUserEntity` |
| Password modal | current/new/confirm | command | `PasswordHash` |
| Assign routes modal | routesCsv SearchInput multi | command | `RoutesCsv` |
| Managed users modal | managedUserIdsCsv SearchInput multi | command | `ManagedUserIdsCsv` |

### Field map (ui → dto → db)

| uiField | Label VN | dtoField | dbColumn | Notes |
|---------|----------|----------|----------|-------|
| code | Mã người dùng | Code | `code` | IdCode `USR-YYYYMMDD-NNNN` server-gen · unique/company |
| username | Tên đăng nhập | Username | `username` | unique/company · required |
| fullName | Họ và tên | FullName | `full_name` | required |
| email | Email | Email | `email` | required |
| phone | Số điện thoại | Phone | `phone` | nullable |
| orgCode | Tổ chức | OrgCode | `org_code` | SearchInput `org-unit` · **cấm** Select · validate catalog |
| roleCode | Vai trò / Cấp | RoleCode | `role_code` | SearchInput enum init-data |
| status | Trạng thái | Status | `status` | `active` \| `locked` |
| routesCsv | Tuyến được phân | RoutesCsv | `routes_csv` | persist **CSV codes** · UI SearchInput multi `road-route` · **cấm** parent JSON |
| managedUserIdsCsv | Cán bộ thuộc QL | ManagedUserIdsCsv | `managed_user_ids_csv` | persist **CSV Guid** · UI SearchInput multi `users` |
| password | Mật khẩu khởi tạo | Password | `password_hash` | create/copy only · không trả GET |
| updatedAt | Cập nhật | UpdatedAt | `updated_at` | UTC · View display |
| — | tenant | CompanyCode | `company_code` | header `X-Company-Id` |
| — | soft delete | IsActive | `is_active` | DELETE → false |

**Persist:** flat scalars only — **cấm** `RoutesJson` / nested parent JSON.

---

## 5. Enum SSOT (API — chốt live BE)

Design prototype dùng kebab (`admin` / `ban-tk`). **SA chốt value persist = live `AppUserService` init-data** (đã có data). TL/Dev **map label VN**, không đổi code sang kebab.

**roleCode**

| value (API) | Label VN |
|-------------|----------|
| `Admin` | Admin |
| `Ban.TK` | Ban.TK |
| `KyThuat` | Kỹ thuật |
| `VanPhong` | Văn phòng |

**status**

| value (API) | Label VN (Design) | Live init-data label |
|-------------|-------------------|----------------------|
| `active` | Đang dùng | Hoạt động — **TL chốt 1 label** = Design «Đang dùng» trên UI; API value giữ `active` |
| `locked` | Khóa | Đang khóa — UI «Khóa» |

**GAP-SA-USR-ENUM:** prototype kebab **không** persist. Dev bind SearchInput `value` = bảng trên.

---

## 6. API catalog

Base: `api/v1/integration/users` · BFF `web-bff/api/v1/integration/users`.  
Permission (Auth stub): `integration.users.read|create|update|delete`.  
Tenant: filter `CompanyCode` từ `X-Company-Id`.  
Errors: 401 · 403 · 404 · 422 `{ success:false, message }`.

### API-01: GET /api/v1/integration/users

| | |
|--|--|
| Purpose | Paged list Zone C + search must work |
| Permission | `integration.users.read` |
| Status | **DONE** + **delta `route`** |
| Request | `search?` · `status?` · `role?` · `orgCode?` · **`route?`** · `page` · `pageSize` (50/100/200/500) |
| `route` semantics | Trim; match user nếu `RoutesCsv` chứa code (split `,` trim, CI). Empty = no extra filter |
| `search` | code · username · fullName · email · phone · orgCode · RoutesCsv (đã live) |
| `orgCode` | exact node (tree). P1 **không** auto descendant — TL ghi T-BE nếu cần subtree |
| Response | `AppUserPagedResult` |
| Filter đổi | FE page=1 |
| gates | tz n/a · xco n/a · tenant_a |

### API-02: GET /api/v1/integration/users/init-data

| | |
|--|--|
| Purpose | SearchInput role/status + org seed for form |
| Permission | `integration.users.read` |
| Status | **DONE** |
| Response | `{ statuses, roles, orgs }` |

### API-03: GET /api/v1/integration/users/{id}

| | |
|--|--|
| Purpose | Form View/Edit/Copy |
| Permission | `integration.users.read` |
| Status | **DONE** |
| 404 | không tồn tại / soft-deleted |

### API-04: POST /api/v1/integration/users

| | |
|--|--|
| Purpose | Create · Copy (FE POST new) |
| Permission | `integration.users.create` |
| Status | **DONE** + **delta validate RoutesCsv / OrgCode** |
| Body | `CreateAppUserRequest` — **không** client `code` |
| IdCode | server `USR-YYYYMMDD-NNNN` |
| 422 | username trùng · thiếu required · org/route invalid |

### API-05: PUT /api/v1/integration/users/{id}

| | |
|--|--|
| Purpose | Edit |
| Permission | `integration.users.update` |
| Status | **DONE** + cùng validate RoutesCsv / OrgCode |

### API-06: DELETE /api/v1/integration/users/{id}

| | |
|--|--|
| Purpose | Soft delete (`IsActive=false`) |
| Permission | `integration.users.delete` |
| Status | **DONE** |

### API-07: POST /api/v1/integration/users/{id}/change-password

| | |
|--|--|
| Purpose | Modal đổi MK |
| Permission | `integration.users.update` |
| Status | **DONE** (stub hash) |
| Body | `currentPassword` · `newPassword` · `confirmPassword` |
| 422 | không khớp confirm · MK cũ sai |

### API-08: POST /api/v1/integration/users/{id}/assign-routes

| | |
|--|--|
| Purpose | Modal phân tuyến |
| Permission | `integration.users.update` |
| Status | **DONE** + **delta validate ∈ road-routes** |
| Body | `{ routesCsv }` — CSV codes, **không** JSON array |

### API-09: POST /api/v1/integration/users/{id}/managed-users

| | |
|--|--|
| Purpose | Modal cán bộ QL |
| Permission | `integration.users.update` |
| Status | **DONE** + **delta validate Guid ∈ users cùng company, ≠ self** |
| Body | `{ managedUserIdsCsv }` |

### Lookup — reuse (không invent)

| Lookup | API | Consumer | BE |
|--------|-----|----------|-----|
| org tree | `GET /api/v1/integration/org-units/tree` | Zone C | **DONE** |
| org SearchInput | `GET /api/v1/integration/org-units/search` | form orgCode | **DONE** master |
| road-route SearchInput | `GET /api/v1/integration/road-routes/search` | filter `route` · form/modal `routesCsv` | **DONE** master |
| users SearchInput | `GET /api/v1/integration/users?search=&page=&pageSize=` | modal managed | **DONE** self (không endpoint `/search` riêng P1) |

BFF mirror mọi path trên; list BFF đã forward raw querystring → `?route=` tự qua sau API delta.

---

## 7. Schema — `rmms_users`

Giữ cột live `AppUserEntity`. **Không** migration bảng mới. Optional: index `(CompanyCode, RoutesCsv)` **không** bắt buộc P1 (filter `Contains` / split in-memory OK với volume tenant).

Indexes live: `(CompanyCode, Code)` unique · `(CompanyCode, Username)` unique · `(CompanyCode, OrgCode, IsActive)` · `(CompanyCode, Status, IsActive)`.

---

## 8. Validate rules (Dev T-BE)

1. `RoutesCsv`: split `,` · trim · bỏ empty · **mỗi code** phải tồn tại `RoadRoute` active (CUC2 38). Duplicate collapse. Persist canonical `"code1,code2"`.
2. `OrgCode`: phải tồn tại org-unit active.
3. `ManagedUserIdsCsv`: Guid parse · user `IsActive` cùng `CompanyCode` · **cấm** id = chính mình.
4. **Cấm** nhận JSON object/array cho routes/managed.

---

## 9. Out of pack

- Auth service tách / IAM JWT production (GAP-F-USR-01)
- Duplicate org-unit CRUD trên page users (GAP-PO-USR-08 → navigate master)
- Excel import · chrome Ban.TK / Hồ sơ / Đăng xuất
- `user.updated` event bus
- Subtree org filter (chỉ exact `orgCode` P1)
- Dedicated `GET …/users/search` (list API đủ SearchInput)

---

## 10. Handoff → TL

Emit: T-CTX · T-PERM · T-UI-LIST (A–D + tree) · T-UI-FORM (full-page `<dl>`) · T-UI-ACT (Đổi MK · Phân tuyến · Cán bộ QL) · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE (`?route=` + validate) · T-BE-CRUD (đã phần lớn DONE) · T-BFF (query forward — verify `route`).

| Field | Value |
|-------|-------|
| Kind | B catalog A–D + tree + full-page form |
| API delta | `GET ?route=` · validate RoutesCsv/OrgCode/ManagedUserIdsCsv |
| Lookups | org-units tree/search · road-routes/search · users list |
| Entity | `AppUser` · `rmms_users` · SHARE=`tenant_keep` |
| UI cấm | Resource · Slideout · View=`readOnly` Input · native Select · CSV thuần trên UI |
| Next | team-lead **pending** đến lượt (chain ON) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T08:41:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.08.21 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.3 |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.08.30 |
| designSkillVersion | 2026.08.08.31 |
| priorSaSkillVersion | 2026.08.08.17 (artifact cũ schema 1 — regen `recheck_new`) |

---
<!-- Version meta: skillVersion=2026.08.08.21 · schemaVersion=2 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.3 · versionGate=rechecked -->
