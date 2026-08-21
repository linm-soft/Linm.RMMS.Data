# Đăng nhập + vòng đời tài khoản theo HĐ — Feature Context

> **Slug:** `login` · **Module:** Auth (Platform) × Contract × Integration  
> **Phase:** P1 (login platform) · P1.5 (HĐ → tài khoản + tuyến km + job)  
> **Status:** Context · **approved** 2026-08-15 (`INTERNAL` miễn HĐ)  
> **sourceKind:** product (không màn GOVOne login)  
> **Kind:** **G** shell login + **B** list tài khoản theo HĐ + **D** form HĐ (tab mới)  
> **SSOT spec:** [`../../plan/login-contract-lifecycle/SPEC.md`](../../plan/login-contract-lifecycle/SPEC.md)  
> **Plan:** [`../../plan/login-contract-lifecycle/PLAN.md`](../../plan/login-contract-lifecycle/PLAN.md)  
> **Slash:** `/qldb-implement-permission-access` (cũ: `/qldb-implement-login`)  
> **Peers:** [`users.md`](users.md) · [`contract.md`](contract.md) · [`road-route.md`](road-route.md) · [`partner-unit.md`](partner-unit.md)  
> **Auth SSOT:** `API-CORE/Linm.Platform.Authentication` · BFF `Linm.Platform.Authentication.Bff`  
> **Cấm:** clone `AuthController` · mật khẩu local `rmms_users.PasswordHash` · `window.alert`/`confirm`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Login platform JWT · Auth = quyền tính năng · `RMMS.Permission.Job` = active/deactive/gia hạn theo HĐ · 1 user = 1 mã HĐ · tuyến ⊆ HĐ |
| Tách HARD | Auth = package **sẵn** (ERP/FnB/…). **Job/catalog** = hạng mục RMMS mới. Job runtime = cửa sổ HĐ |
| Persona | Admin hệ thống · Ban QLDA · Admin tổng công ty |
| App hiện có | GOVOne đổi MK / phân tuyến — **không** có login platform + HĐ lifecycle |
| DoD ngắn | Login BFF work · Status Inactive bị chặn · job sync Auth · form HĐ quản lý TK + tuyến km |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Login shell | Kind G — page hệ thống | Username/SĐT · MK · quên MK (platform) · **cấm** form login local RMMS |
| User form | Kind B full-page (pack `users`) | + `contractCode` SearchInput · + tuyến ⊆ HĐ (SearchInput multi + km) |
| Form HĐ | Kind D Slideout — **tab mới** | Tab «Tuyến theo km» · Tab «Tài khoản theo HĐ» |
| Job Admin | Platform job UI | Run · Stop · Retry · search budget · last sync |

**Cấm** toolbar Hồ sơ / Đổi MK trên chrome demo. Đổi MK = modal trên user đang chọn (pack `users`).

## 3. API

| Method | Path | Host |
|--------|------|------|
| POST | `web-bff/api/v1/auth/login` · `refresh` · `logout` | **BFF Auth NuGet** — **cấm** clone |
| POST | `api/v1/admin/users/{id}/activate` · `deactivate` | Platform Auth (job + admin) |
| GET/PUT | `api/v1/contract/contracts/{id}` | RMMS Contract — + `routes[]` + `accounts[]` |
| PUT | `api/v1/contract/contracts/{id}/routes` | Child table — **cấm** `RouteSegment` CSV |
| PUT | `api/v1/contract/contracts/{id}/accounts` | Gán Auth user + role |
| PUT | `api/v1/integration/users/{id}/assign-routes` | Tuyến ⊆ HĐ — **cấm** CSV thuần |
| POST | `api/v1/jobs/rmms-contract-account-lifecycle/run` | Job trigger (Admin) |
| GET | `api/v1/contract-accounts/session-window?authUserId=` | Defense hết hạn → 403 (L5) |

Auth: JWT `company_id` · `[RequirePermission]`.

**E2E / docker seed:** Auth `SeedDefaults` khi `docker compose up` — username `linm-soft` · password `Linm@2026`. Maestro fill `#f-user` / `#f-pass` / `#btn-login` (`qa/e2e/{ios,android}.yaml`). Override `QLBD_DEMO_USER` / `QLBD_DEMO_PASS`. **Cấm** tap `Email`.

## 4. Database

| Entity | Key columns | Host |
|--------|-------------|------|
| `ApplicationUser` | Id, UserName, Status, CompanyCode, PasswordHash | **Auth DB** — SSOT identity |
| `Contract` | Code, EffectiveFrom, EffectiveTo, Status, Contractor | RMMS |
| `ContractRoute` | ContractId, RouteCode, KmFrom, KmTo, LengthKm | RMMS child — **cấm** JSON |
| `ContractAccount` | ContractId, AuthUserId, RoleCode, ManualHold | RMMS child · 1 user = 1 HĐ |
| `UserRoute` | AuthUserId, ContractId, RouteCode, KmFrom, KmTo | RMMS child ⊆ ContractRoute |
| `AppUser` | AuthUserId, OrgCode, ContractCode | RMMS **profile only** — **xóa PasswordHash** |

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `contract.dates-changed` · `contract.status-changed` | Contract | Job lifecycle (enqueue ngay) |
| `contract.account-assigned` | Contract | Auth package assign (optional) |
| `auth.user.deactivated` | Auth | Revoke refresh · RMMS profile sync |

## 6. Gaps / quyết định

| ID | Question | Default (chờ approve) |
|----|----------|------------------------|
| GAP-LOGIN-01 | Login local `rmms_users` vs Platform | **Platform only** |
| GAP-LOGIN-02 | `AuthService.LoginAsync` **không** check `Status` | **P0** patch Auth |
| GAP-LOGIN-03 | User nội bộ Cục có bắt buộc HĐ? | **Approved** INTERNAL miễn job · CONTRACT bắt buộc HĐ |
| GAP-LOGIN-04 | 1 user nhiều HĐ? | **Cấm** — 1 mã HĐ / user |
| GAP-LOGIN-05 | `RoutesCsv` / `RouteSegment` | Thay child table |
| GAP-F-USR-01 | Auth host tách | **Đóng** — Platform + profile RMMS |

## 7. Demo checklist (chốt khách)

- [ ] Login shell dùng platform — sai MK / Inactive / hết hạn HĐ = toast (không `alert`)
- [ ] Tạo HĐ → thêm tuyến km → gán tài khoản
- [ ] User form: HĐ + tuyến ⊆ HĐ
- [ ] Job: hết hạn → Inactive + revoke token
- [ ] Gia hạn HĐ → Active lại (trừ ManualHold)

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-21T03:28:00.000Z` |
