# SA — Solution — login-forgot (mobile)

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (Autopilot) |
| packKind | shell |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` |
| Auth live | `ServiceEndpoints:AuthenticationService` · swagger `Auth/forgot-password` · `Auth/reset-password` |
| updatedAt | `2026-08-19T04:15:00.000Z` |
| taskId | `task_20426736` |

**Cấm:** invent `auth/forgot` · clone AuthController · app `:5001` · ERP.* · parent JSON · mfeStdUrl.

## Architecture

| Layer | Choice |
|-------|--------|
| Identity API | Platform Auth **live** (verified) |
| Auth NuGet 1.26.0 | **không** forgot/reset route |
| Mobile.Bff delta | Thin `AuthPasswordRecoveryController` + service token · skip rewrite for these paths |
| App paths | `POST auth/forgot-password` · `POST auth/reset-password` |
| Domain RMMS | **không** bảng mới |

## Endpoints

| App | BFF | Downstream |
|-----|-----|------------|
| POST `auth/forgot-password` `{phoneNumber}` | Mobile.Bff recovery | `api/v1/Auth/forgot-password` |
| POST `auth/reset-password` `{phoneNumber,resetToken,newPassword}` | same | `api/v1/Auth/reset-password` |

## Gates

| Gate | Decision |
|------|----------|
| TZ | tz_na |
| XCO | xco_na |
| SHARE | n/a — no RMMS table |
| Offline | no queue · toast Không có mạng |
| Persist | none |

## DELTA

| Surface | Action |
|---------|--------|
| BFF | T-BE proxy + middleware skip |
| iOS / Android | Navigation auth sub-route + screen + use cases |
| Auth package upgrade | **không** bắt buộc P1 nếu proxy PASS |

## Version meta

| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.01 |
| generatedAt | 2026-08-19T04:15:00.000Z |
