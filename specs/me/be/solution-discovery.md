# Solution discovery — me (mobile hub)

| Field | Value |
|-------|-------|
| feature | `me` |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` (autoApprove=ON) |
| solution_confirm | **approve** |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| updatedAt | `2026-08-19T02:20:00.000Z` |
| taskId | `task_84e8e0e2` |

## 1. Reuse Web / Auth — **cấm invent**

| Client call | BFF | Downstream | Thuộc |
|-------------|-----|------------|-------|
| GET `auth/profile` | Auth NuGet `GetProfile` + rewrite | Auth `users/me` · `UserProfileResponseDto` | **`me`** |
| POST `auth/logout` | Auth NuGet | Auth logout | **`login-logout`** — **không** gọi |
| GET `contract-accounts/session-window` | proxy | RMMS Contract | `login` (đã có) |

Không controller `Me` / `Profile` trên RMMS. **Không** `api/v1/users/me`. Admin `integration/users/{id}` **không** current-user.

## 2. DTO (iOS = Android = Auth)

`id` · `fullName` · `phoneNumber` · optional wrap `data`. Display name = `fullName` trim · empty → `lastUserName`. Subtitle org/role **không** có field live → ẩn (`GAP-F-ME-01`).

## 3. Gaps

| ID | Quyết định |
|----|------------|
| Offline profile | Fallback lastUserName · hub vẫn mở |
| Queue / notify count | 0 ẩn · sibling |
| Logout POST | **không** — reuse local `LogoutUseCase` |
| Store | **cấm** localhost trong solution · family `1` **cấm** A4 listing |
| TZ / XCO / SHARE | **n/a** — không BE mới |
| T-BE-API / T-BE-MIG | **n/a** |

## 4. Client

Bearer + `X-Company-Id` + `X-Timezone` qua `ApiClient` / Retrofit interceptor. Token Keychain / Encrypted store. **Cấm** VM→ApiClient.

## 5. Handoff TL

T-IOS-ME · T-AND-ME · T-KIT-LISTROW · T-BE **n/a**.

## Version meta

skillId=agent-sa-mobile · skillVersion=2026.08.19.10 · workflowVersion=2026.08.19.19 · generatedAt=2026-08-19T02:20:00.000Z
