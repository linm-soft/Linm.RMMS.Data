# QA — Scenarios — patrol-history-detail

> Status: **PASS** · task `task_01ffb168` · e2eQa ON · method `yarn e2e-qa-mobile` · `ok:true` `2026-09-12T14:14:47.240Z`  
> Devices: iPhone 17 Pro Max (6.9") · Android Pixel 2 (1080×1920) · A4-IPAD **DEFER** Phase 1  
> Scope: edit_page · GAP timeline GET check-ins **Live** (strip timelineDemo)

| | |
|--|--|
| Feature | `patrol-history-detail` |
| Title | [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| Role | `qa` |
| Seed | BFF/API `b33e0001-0001-4c01-8c01-000000000002` · `PAT-20260810-0009` · CompanyCode **RMMS** (user `linm-soft`) |
| API | GET `mobile-bff/api/v1/patrol/sessions/{id}` + GET `…/check-ins` · Live |
| API host | Linux compose `:5111` · Mobile.Bff `:5202` · `--skip-start` · API image rebuilt (GET check-ins was 405 Allow:POST) |

## Device AC

| id | AC | Result | notes |
|----|----|--------|-------|
| T-QA-LAUNCH | A11 guest home | **PASS** | `#sc-home` |
| T-QA-BFF | A10 BFF :5202 | **PASS** | health |
| T-QA-LOGIN | A9 Auth seed | **PASS** | `linm-soft` / `Linm@2026` · AND IME Enter |
| T-QA-CORE-IOS | A3 `#sc-patrol-detail` | **PASS** | push history → detail · INFO+TL live+CTA |
| T-QA-CORE-AND | P6 ×2 folds | **PASS** | top hero PAT-* · scroll TL+CTA |
| T-QA-TIMELINE | GET check-ins Live | **PASS** | 3 rows · `Km 1551+200 · Xuân Hải` · **cấm** timelineDemo / tl-empty |
| T-QA-NAV | list → detail push | **PASS** | `row-history-b33e…0002` |
| T-QA-REAL | GET BFF ≠ demo-only | **PASS** | live PAT-20260810-0009 |
| T-QA-ALIGN | Read CORE vs demo | **PASS** | Must 0 · Accept: runtime TL labels ≠ demo TD-* (design runtime≠demo TL) |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE(+2) vs prototype (`/review-align-ux-ios-android`).

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

method: `e2e runtime · yarn e2e-qa-mobile` · **cấm** start:std / mfeStdUrl

## Align (CORE vs demo)

| Shot | Zones | Verdict |
|------|-------|---------|
| A3-CORE | NAV · INFO · TL live · CTA | **Aligned** · Must 0 |
| P6-CORE | HERO PAT · badge · INFO | **Aligned** · Must 0 |
| P6-CORE-2 | TL live · CTA map/end | **Aligned** · Must 0 |

Accept: demo `#sc-patrol-detail` may show TD-* hero; runtime RMMS seed PAT-* + live check-ins (design SSOT).

## Notes / env

- Seed `a11e/TD-*` = CompanyCode LINM — **không** hiện list user RMMS → e2e dùng `b33e/PAT-*`.
- API docker stale → GET `…/check-ins` **405**; rebuilt `linm-rmms-api` → **200** + 3 rows.
- Android: `centerElement` + swipe UP trước tap `row-quick-patrol-history` (row dưới tab bar).
