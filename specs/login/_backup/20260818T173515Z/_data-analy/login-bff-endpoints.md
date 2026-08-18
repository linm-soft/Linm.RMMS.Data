# BFF endpoints — login (mobile)

| | |
|---|---|
| feature | `login` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | `Linm.Platform.Authentication.Bff` **1.26.0** |
| packageRoute | `web-bff/api/v{version}/auth` · host rewrite `AuthPrefixRewriteMiddleware` |
| downstreamAuth | `ServiceEndpoints:AuthenticationService` (`appsettings.json` → `http://localhost:5001`) |
| domainApi | `ApiBase` → `RMMS.Service.Api` (`http://localhost:5101`) |
| source | CTX `login.md` §3 · `docs/init-bff-auth.md` (Data + Mobile.Bff + WebService) · `docs/bff-route-map.md` · DLL 1.26.0 |
| **cấm** | invent path · clone AuthController · app gọi `:500x` / `:5101` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path dưới đây **không** lặp prefix.

## Table

| Action / screen | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|-----------------|--------|--------------------|-----|------------|--------|-----|
| Đăng nhập (`login`) | POST | `auth/login` | Auth NuGet `AuthController` + `AuthPrefixRewriteMiddleware` (`/mobile-bff/api/v1/auth` → `/web-bff/api/v1/auth`) | `AuthenticationService` `auth/login` | CTX §3 · `init-bff-auth.md` · DLL `login` | — |
| Làm mới phiên | POST | `auth/refresh-token` | same | Auth `auth/refresh-token` | DLL 1.26.0 `RefreshToken` / `auth/refresh-token` | **GAP-MOB-BFF-02** — CTX + `init-bff-auth.md` ghi `refresh` · **cấm** bịa `auth/refresh` nếu package không có |
| Đăng xuất (`login-logout`) | POST | `auth/logout` | same | Auth `auth/logout` | CTX §3 · demo `#sc-me` · DLL `logout` | child backlog — không enqueue turn này |
| Cửa sổ HĐ (sau login) | GET | `contract-accounts/session-window?authUserId=` | `MobileApiProxyController` `{**path}` | `GET api/v1/contract-accounts/session-window` · `ContractSessionWindowController` | CTX §3 L5 · `docs/bff-route-map.md` · controller BE | 403 body `Allowed=false` · Web BFF middleware map `CONTRACT_WINDOW_CLOSED` + `forceLogout` · **Mobile.Bff `Program.cs` không gắn** `ContractWindowDefenseMiddleware` — SA chốt app gọi GET · **cấm** invent path |
| Quên mật khẩu (`login-forgot`) | — | — | — | Platform Auth (CTX §2 chữ «platform») | CTX §2 · demo toast `Quên mật khẩu → hệ thống xác thực` · DLL 1.26.0 **không** string forgot/reset | **GAP-MOB-BFF-01** — không path trong CTX §3 / Mobile.Bff / Auth BFF 1.26.0 · **cấm** bịa |

## Có trên Auth BFF 1.26.0 — **không** thuộc slug `login`

| Method | Package path (sau rewrite) | Ghi |
|--------|----------------------------|-----|
| — | `auth/switch-company` | Web shell (ITS doc) · demo login **không** có |
| — | `users/me/change-password` | Pack `users` · CTX cấm toolbar Đổi MK trên chrome login |
| — | `GetProfile` / `UpdateProfile` | Không surface `#sc-login` |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `AuthPrefixRewriteMiddleware` | `MobileAuth=/mobile-bff/api/v1/auth` → `PackageAuth=/web-bff/api/v1/auth` |
| `MobileApiProxyController` | Bỏ qua `auth` / `auth/*` (để package xử lý) · còn lại forward `api/v1/{path}` |
| Proxy `contract-accounts/*` | `docs/bff-route-map.md` đã map session-window |
| Forgot trên DLL 1.26.0 | **không** `forgot` / `reset-password` / `ForgotPassword` |

## Cấm

- App biết URL service / IP LAN
- DbContext trên Mobile.Bff
- Clone `AuthController` trong RMMS
- Coi `web-bff/.../auth/refresh` là path mobile khi package = `refresh-token`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.18.10 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.11 |
| rulesVersion | 2026.08.18.26 |
| generatedAt | 2026-08-18T17:24:22.000Z |
| versionGate | ok |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |
| bffContentHash | sha256:f360acfdda7595550f109031b58c84ed1eb4a3a40f55fd7e24090ea446d10c31 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.18.10 schemaVersion=1 workflowVersion=2026.08.18.11 rulesVersion=2026.08.18.26 versionGate=ok -->
