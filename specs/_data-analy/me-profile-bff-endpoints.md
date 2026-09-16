# BFF endpoints — me-profile (mobile · Hồ sơ)

| | |
|---|---|
| feature | `me-profile` |
| bff | `Linm.RMMS.Mobile.Bff` · Auth NuGet + `AuthPrefixRewriteMiddleware` |
| prefix | `mobile-bff/api/v1` |
| package | `Linm.Platform.Authentication.Bff` (peer `me` 1.26.0+) |
| packageRoute | `web-bff/api/v{version}/auth` · rewrite mobile prefix |
| downstreamAuth | `ServiceEndpoints:AuthenticationService` |
| source | CTX `me-profile.md` · `me.md` · `AuthOpenApiOperationFilter` · `AuthOpenApiDocuments` · peer `me-bff-endpoints.md` |
| **cấm** | invent path · app `:500x` / `:5101` · clone AuthController · ERP.* · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Auth package | Auth BFF `GetProfile` / `UpdateProfile` / `ChangePassword` | Không — rewrite |
| Auth service | `users/me` + profile update + change-password | **Không** |
| RMMS `integration/users/{id}` | admin by-id | **Không** dùng current-user |

Nguồn: CTX + OpenAPI overlay → **cấm** bịa `api/v1/me-profile` / `api/v1/profile` RMMS.

## Table — `#sc-me-profile` · `DES-MOB-ME-PROFILE`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load form | GET | `auth/profile` | Auth NuGet `GetProfile` `[Authorize]` + rewrite | Auth `users/me` · user DTO | OpenAPI GET · CTX · iOS `UserProfileDto` | — |
| Lưu hồ sơ | PUT | `auth/profile` | Auth NuGet `UpdateProfile` | Auth update profile | OpenAPI PUT · `MobileAuthProfileUpdateRequest` | — |
| Đổi mật khẩu | POST | `auth/change-password` | Auth NuGet `ChangePassword` | Auth change-password | OpenAPI POST · `MobileAuthChangePasswordRequest` | confirm local only |
| Toast ok / err | — | — | — | local UI | controlHint | **không** API |
| Entry hub tên | GET | `auth/profile` | (reuse) | same | hub `me` already | **không** duplicate controller |

## DTO bind (live overlay)

### Response / GET (`MobileAuthUser` + app decode)

| Field | Wire | UI |
|-------|------|-----|
| `Id` | yes | readonly / bind userId |
| `FullName` | yes | `fullName` |
| `UserName` | yes (login/user) | display |
| `PhoneNumber` | yes | `phoneNumber` |
| `CitizenId` | optional (app decode) | display-only nếu có · **GAP-MOB-MEPROF-CITIZEN-01** |
| `Email` | **có thể thiếu** trên GET overlay | empty → user nhập · **GAP-MOB-MEPROF-EMAIL-01** |

### PUT body (`MobileAuthProfileUpdateRequest`)

| Field | Required P1 | Notes |
|-------|-------------|-------|
| `FullName` | yes (trim non-empty) | |
| `PhoneNumber` | optional | |
| `Email` | optional | |

### POST change-password (`MobileAuthChangePasswordRequest`)

| Field | Required | Notes |
|-------|----------|-------|
| `CurrentPassword` | yes | |
| `NewPassword` | yes | Confirm = local UI only · **không** gửi Confirm |

## Có trên Auth / RMMS — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| POST | `auth/logout` | `login-logout` / hub `me` local |
| POST | `auth/forgot-password` · `auth/reset-password` | `login-forgot` |
| POST | `auth/switch-company` | OUT P1 sheet |
| CRUD | `integration/users*` | web `users` admin — **OUT** |
| GET | `integration/users/{id}` | admin by-id — **không** current-user |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| Mobile.Bff OpenAPI GET/PUT `auth/profile` | **Live** overlay typed |
| Mobile.Bff OpenAPI POST `auth/change-password` | **Live** overlay typed |
| Dedicated `MeProfileController` / `ProfileController` trên Mobile.Bff | **không** |
| RMMS `api/v1/me-profile` / `api/v1/users/me` | **không** — **cấm invent** |
| DOMAIN-MAP slug `me-profile` | **không** — Auth package only |

## Step 4b

**Skip** — Auth Identity/profile **DONE**. **Cấm** data_analy chạy migration / Step 4b (roleOnly).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T18:03:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-profile-bff-20260830 |
| bffContentHash | sha256:me-profile-bff-20260830 |
| taskId | `task_c7b0196a` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
