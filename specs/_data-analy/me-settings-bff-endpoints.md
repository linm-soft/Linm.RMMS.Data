# BFF endpoints — me-settings (mobile · Cài đặt)

| | |
|---|---|
| feature | `me-settings` |
| bff | `Linm.RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | — (P1 **không** Auth/RMMS settings controller) |
| source | CTX `me-settings.md` · peer `me.md` · Mobile.Bff OpenAPI (Auth only) · DOMAIN-MAP **không** slug settings |
| **cấm** | invent path · app `:500x` · ERP.* · DbContext trên BFF · `api/v1/me-settings` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. **Slug này không gọi** resource settings trên P1.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — local / OS |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — **không** dùng cho settings P1 |
| Settings controller | **không** | — |
| OS Settings | UIKit / Android Settings Intent | Có — deep-link |
| Bundle version | Info.plist / BuildConfig | Có |

Nguồn: CTX + verify OpenAPI / DOMAIN-MAP → **cấm** bịa preferences API.

## Table — `#sc-me-settings` · `DES-MOB-ME-SETTINGS`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Mở Cài đặt hệ thống | — | — | — | OS Settings URL / App details | CTX · GAP-MOB-MESET-OS-01 | — |
| Status Vị trí / Camera | — | — | — | OS permission APIs | CTX · GAP-MOB-MESET-STATUS-01 | — |
| Phiên bản | — | — | — | Bundle / versionName | CTX | — |
| Chính sách | — | — | — | `LinmCopy` `home.privacy.*` | Home reuse | GAP-MOB-MESET-PRIVACY-01 |
| Hàng đợi mất sóng | — | — | — | nav `patrol-offline` | reuse owner | **không** API trên slug |
| Toast OS fail | — | — | — | local UI | controlHint | **không** API |

## Có trên Auth / RMMS / peers — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| GET/PUT | `auth/profile` | `me` / `me-profile` |
| POST | `auth/change-password` | `me-profile` |
| POST | `auth/logout` | `login-logout` |
| * | `ops/*` / inbox messages | `ops` · **≠** «Thông báo hệ thống» |
| * | `api/v1/me-settings` · `preferences` · `device-settings` · push-token | **cấm invent** |
| CRUD | `integration/users*` | web `users` — **OUT** |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| Mobile.Bff OpenAPI settings / preferences | **không** |
| Dedicated `MeSettingsController` / `SettingsController` trên Mobile.Bff | **không** |
| RMMS `api/v1/me-settings` | **không** — **cấm invent** |
| DOMAIN-MAP slug `me-settings` | **không** — local/OS only |
| Auth package settings prefs | **không** |

## Step 4b

**Skip** — không schema. **Cấm** data_analy chạy migration / Step 4b (roleOnly).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T20:11:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-settings-bff-20260830 |
| bffContentHash | sha256:me-settings-bff-local-only-20260830 |
| taskId | `task_43c37168` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
