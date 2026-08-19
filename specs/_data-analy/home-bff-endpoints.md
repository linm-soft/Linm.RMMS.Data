# BFF endpoints — home (mobile hub)

| | |
|---|---|
| feature | `home` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | `Linm.Platform.Authentication.Bff` **1.26.0** |
| packageRoute | `web-bff/api/v{version}/auth` · rewrite `AuthPrefixRewriteMiddleware` |
| downstreamAuth | `ServiceEndpoints:AuthenticationService` |
| domainApi | `ApiBase` → `RMMS.Service.Api` |
| source | CTX `home.md` · `me.md` §3 · DLL 1.26.0 `GetProfile` · `docs/bff-route-map.md` · DOMAIN-MAP **không** slug `home` |
| **cấm** | invent path · app gọi `:500x` / `:5101` · clone AuthController · `api/v1/home` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Auth package | Auth BFF 1.26.0 `AuthController.GetProfile` | Không — rewrite |
| Auth service | `users/me` (DLL downstream) | **Không** |
| HomeController / wallet API | **không** | — |

Nguồn: CTX `home.md` → `{BffRoot}` rewrite + DLL `GetProfile` / `users/me` → **cấm** bịa `api/v1/home` / wallet.

## Table

| Action / screen | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|-----------------|--------|--------------------|-----|------------|--------|-----|
| Hub Trang Chủ — tên `.who` | GET | `auth/profile` | Auth NuGet `GetProfile` `[Authorize]` + rewrite | Auth `users/me` · DTO `UserProfileResponseDto` | DLL 1.26.0 · CTX `home.md` | — |
| Role «Khu QLĐB IV» | — | — | — | **không** org field trên profile DTO | demo mock | **không invent** · ẩn live |
| Wallet «QL.1 · Khu IV» | — | — | — | **không** home wallet controller | demo copy | sibling `asset-hub` · **cấm invent** |
| Badge Thông báo | GET | `notification/inbox` (live) | proxy catch-all | `NotificationInboxController` | DOMAIN-MAP `ops` | sibling `ops` · **cấm** gọi turn `home` |
| Điểm tuần / Tuần đường | — | `patrol/*` (live) | proxy | patrol domain | DOMAIN-MAP `patrol` | sibling `patrol-home` |
| Ghi sự cố / Vấn đề | — | `incident/*` (live) | proxy | incident domain | DOMAIN-MAP `incident` | sibling `incident-create` / `incident-list` |
| Giám sát | — | — | — | **không** `supervise` bare path | demo `#sc-supervise` | sibling `supervise` · SA chốt |
| Công việc | — | `maintenance/*` (live) | proxy | maintenance domain | DOMAIN-MAP `maintenance` | sibling `mnt-list` |
| Tài sản / ví | — | `asset/*` (live) | proxy | asset domain | DOMAIN-MAP `asset` | sibling `asset-hub` |
| Lưu trữ | — | — | — | **không** offline queue controller | scan | sibling `patrol-offline` · **cấm invent** |

## Có trên Auth / domain — **không** thuộc slug `home`

| Method | Path | Ghi |
|--------|------|-----|
| PUT | `auth/profile` | `UpdateProfile` — `me-profile` / `users` |
| POST | `auth/logout` | `login-logout` |
| GET | `integration/users/{id}` | admin — **không** current-user |
| GET | `asset/road-assets` | pack `asset` / sibling `asset-hub` |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `GetProfile` DLL 1.26.0 | `HttpGet("profile")` · Authorize · downstream `users/me` |
| Mobile.Bff `HomeController` / `DashboardController` | **không** |
| RMMS `api/v1/home` / `api/v1/wallet` | **không** |
| `docs/context/features/home.md` | created this turn · **cấm** invent ngoài Auth profile |
| `docs/bff-route-map.md` | `auth/*` · `notification/*` · `patrol/*` · `incident/*` · `maintenance/*` · `asset/*` proxy |

## Cấm

- App biết Auth `:5001` / RMMS `:5101`  
- DbContext trên Mobile.Bff  
- Invent `GET home` / wallet / org-unit để fill role + ví

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T05:22:12.000Z |
| versionGate | rechecked |
| contentHash | sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed |
| bffContentHash | sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
