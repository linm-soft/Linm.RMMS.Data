# Dev — Implement Android — me-profile

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`sheet`** (surface full screen `#sc-me-profile`) |
| taskId | `task_bd696c31` |
| updatedAt | `2026-08-31T02:35:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:me-profile-control-hint-20260830 |
| realDataHash | sha256:me-profile-real-data-20260830 |
| priorTlHash | sha256:me-profile-tl-task-20260831 |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `presentation/feature/meprofile/*` · `#sc-me-profile` · `DES-MOB-ME-PROFILE` |
| Entry | Me `#row-profile` → **navigate** · `MeViewModel.setOpenMeProfile` · `MainTabScreen` route `"me-profile"` |
| TopBar | `LinmTopBar` title **Hồ sơ** · back icon-only (`GAP-MOB-ALIGN-01`) |
| Form | `LinmTextField` fullName / phone / email · readonly userName · citizenId GET-only |
| Avatar | person circle display · **cấm** upload |
| Primary | `LinmPrimaryButton` **Lưu** · busy · PUT `auth/profile` |
| Section pwd | `LinmSectionLabel` **Đổi mật khẩu** |
| Secure | `LinmSecureTextField` current / new / confirm · confirm **local only** |
| Secondary | `LinmSecondaryButton` **Đổi mật khẩu** · POST `auth/change-password` |
| Toast | load/save/pwd ok·err·offline·validation · toast hub · **cấm** fake ok · **cấm** AlertDialog |
| Leave | in-app leave modal · Design SSOT · dirty back |
| Use cases | reuse `FetchProfileUseCase` · **NEW** `UpdateProfileUseCase` · **NEW** `ChangePasswordUseCase` |
| Repo | `AuthRepository.updateProfile` / `changePassword` · Retrofit PUT/POST |
| DTO | extend `UserProfile` / DTO / mapper · `email` · `userName` · optional `citizenId` |
| Copy | `LinmCopy` `me.profile.*` VN parity iOS |
| DI | Hilt `@Inject` use cases · ProfileStack composable |
| Kit | TopBar / TextField / Secure / Primary / Secondary / SectionLabel / Toast · **cấm** invent kit |
| Hub refresh | after PUT 200 → parent Me `Appear` reload displayName |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| Invent `me-profile` / RMMS `users/me` API | **none** |
| Step 4b / MeProfileController BFF | **n/a** · Auth rewrite live |
| BFF `dotnet build` | **PASS** (verify · no Write) |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm Dev · queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-08-31T02:35:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:me-profile-android-implement-20260831 |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
