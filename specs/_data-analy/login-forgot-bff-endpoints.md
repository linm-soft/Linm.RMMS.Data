# BFF endpoints — login-forgot (mobile)

| | |
|---|---|
| feature | `login-forgot` |
| bff | `Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| package | `Linm.Platform.Authentication.Bff` **1.26.0** — **không** route forgot/reset |
| models | `Linm.Platform.Authentication.Models` / Auth live DTO `ForgotPasswordRequestDto` · `ResetPasswordRequestDto` |
| downstreamAuth | `ServiceEndpoints:AuthenticationService` (`http://localhost:5001`) |
| source | CTX `login-forgot.md` · live swagger Auth · DLL 1.26.0 strings · probe 2026-08-19 |
| **cấm** | invent path không live · clone full `AuthController` · app gọi `:5001` · ERP.* |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path dưới **không** lặp prefix.

## Live Auth service (verified)

| Method | Auth service path | Body | Response (probe) |
|--------|-------------------|------|------------------|
| POST | `api/v1/Auth/forgot-password` | `{ "phoneNumber": "<tel>" }` required | 200 `{ "message": "Nếu số điện thoại tồn tại, mã xác thực sẽ được gửi đến bạn." }` · 422 validation |
| POST | `api/v1/Auth/reset-password` | `{ "phoneNumber", "resetToken", "newPassword" }` (newPassword minLength 6) | 200 `{ temporaryPassword?, message? }` · 400/422 |

Admin `POST api/v1/admin/users/{id}/reset-password` — **ngoài** slug (admin only).

## Package gap

| Check | Result |
|-------|--------|
| Auth BFF 1.26.0 routes | `login` · `logout` · `refresh-token` · `switch-company` · `users/me/change-password` |
| Strings `forgot` / `reset-password` trên DLL BFF | **không** |
| Models / Auth service DTO | **có** Forgot/Reset |

→ **GAP-MOB-BFF-01 (reopen for this slug):** thiếu BFF surface. **Không** bịa chỉ trên app. **BE align Step 4b:** Mobile.Bff thin proxy + service token (cùng `ServiceClient`) → Auth live paths. App path giữ `auth/*` (parity shell login).

## App ↔ BFF table (after align)

| Action / screen | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|-----------------|--------|--------------------|-----|------------|--------|-----|
| Gửi mã (step 1) | POST | `auth/forgot-password` | `AuthPasswordRecoveryController` (Mobile.Bff) · **không** rewrite package | `POST api/v1/Auth/forgot-password` + service token | swagger live · DTO `phoneNumber` | closed by T-BE |
| Đặt lại MK (step 2) | POST | `auth/reset-password` | same | `POST api/v1/Auth/reset-password` + service token | swagger live | closed by T-BE |

### Middleware

| Piece | Rule |
|-------|------|
| `AuthPrefixRewriteMiddleware` | **Skip** rest `/forgot-password` · `/reset-password` (giữ `mobile-bff` path → local controller) |
| Package rewrite | Vẫn áp dụng `login` / `logout` / `refresh-token` / … |
| `MobileApiProxyController` | Vẫn bỏ qua `auth/*` (không forward RMMS ApiBase) |

### Auth header

| Call | App Bearer | BFF → Auth |
|------|------------|------------|
| forgot / reset | **không** (anonymous) | ServiceClient token (`TokenEndpoint`) |

## Cấm

- App biết URL Auth / IP LAN
- Invent `auth/forgot` (sai path) — đúng = `auth/forgot-password`
- Clone AuthController / DbContext trên Mobile.Bff
- RMMS `Domains/*` / ERP.WebService cho pack này

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-19T03:58:00.000Z |
| versionGate | rechecked |
| bffContentHash | sha256:auth-forgot-live-20260819 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.01 -->
