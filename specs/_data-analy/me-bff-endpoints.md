# BFF endpoints — me (mobile hub)

| | |
|---|---|
| feature | `me` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | `Linm.Platform.Authentication.Bff` **1.26.0** |
| packageRoute | `web-bff/api/v{version}/auth` · rewrite `AuthPrefixRewriteMiddleware` |
| downstreamAuth | `ServiceEndpoints:AuthenticationService` |
| domainApi | `ApiBase` → `RMMS.Service.Api` |
| source | CTX `me.md` · `login.md` §3 · DLL 1.26.0 `GetProfile` · `docs/bff-route-map.md` · DOMAIN-MAP **không** slug `me` |
| **cấm** | invent path · app gọi `:500x` / `:5101` · clone AuthController |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Auth package | Auth BFF 1.26.0 `AuthController.GetProfile` | Không — rewrite |
| Auth service | `users/me` (DLL downstream) | **Không** |
| RMMS `integration/users/{id}` | admin by-id | **Không** dùng current-user |

Nguồn: CTX `me.md` → `{BffRoot}` rewrite + DLL `GetProfile` / `users/me` → **cấm** bịa `api/v1/profile`.

## Table

| Action / screen | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|-----------------|--------|--------------------|-----|------------|--------|-----|
| Hub Tôi — tên | GET | `auth/profile` | Auth NuGet `GetProfile` `[Authorize]` + rewrite | Auth `users/me` · DTO `UserProfileResponseDto` | DLL 1.26.0 · CTX `me.md` | — |
| Đăng xuất (`login-logout`) | POST | `auth/logout` | Auth NuGet `Logout` | Auth `auth/logout` | CTX login §3 · demo `logout()` | **child reuse** — **cấm** gọi turn `me` |
| Hàng đợi mất sóng | — | — | — | **không** `patrol-offline` controller | scan + DOMAIN-MAP patrol CRUD only | sibling `patrol-offline` · **cấm invent** |
| Góp ý | — | `integration/feedbacks` (live) | proxy catch-all | `AppFeedbacksController` | DOMAIN-MAP `feedback` | **không** thuộc slug `me` |
| Camera xem | — | `cameras/*` (live) | proxy | `CamerasController` | DOMAIN-MAP `camera-connect` | sibling `cam-view` |
| Thông báo | — | `notification/inbox` (live) | proxy | `NotificationInboxController` | DOMAIN-MAP `ops` → notification | sibling `ops` · **cấm** path `ops/*` |

## Có trên Auth — **không** thuộc slug `me`

| Method | Path | Ghi |
|--------|------|-----|
| PUT | `auth/profile` | `UpdateProfile` — slug `me-profile` / `users` khi có route |
| POST | `auth/change-password` | pack `users` · CTX cấm Đổi MK trên hub P1 |
| GET | `integration/users/{id}` | admin — **không** current-user |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `GetProfile` DLL 1.26.0 | `HttpGet("profile")` · Authorize · downstream `users/me` |
| Mobile.Bff `MeController` / `ProfileController` | **không** |
| RMMS `api/v1/users/me` / `api/v1/profile` | **không** |
| `docs/context/features/me.md` | created this turn · **cấm** invent ngoài Auth profile |

## Cấm

- App biết Auth `:5001` / RMMS `:5101`  
- DbContext trên Mobile.Bff  
- Invent `GET me` / `GET profile` RMMS để lấy «Văn phòng QLĐB IV.1»

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-19T02:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2a7c7514a4afb35d7ea136a00a5e06a7e3f5c3d2edf8f92daf875959efb9e0d5 |
| bffContentHash | sha256:cbe9388a93bf8ac2dac030b0f716eb97f5a0010ca9e2749ca65ddbf5a16b85e4 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.19 rulesVersion=2026.08.19.22 versionGate=rechecked -->
