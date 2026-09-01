# Dev — Implement iOS — me-profile

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
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
| Screen | `Presentation/Features/MeProfile/*` · `#sc-me-profile` · `DES-MOB-ME-PROFILE` |
| Entry | Me `#row-profile` → **push** · `MeViewModel.setOpenProfile` · `AppRouter.showMeProfileFromMe` |
| TopBar | `LinmTopBar` title **Hồ sơ** · back **Tôi** |
| Form | `LinmTextField` fullName / phone / email · readonly userName · citizenId GET-only |
| Avatar | person circle display · **cấm** upload |
| Primary | `LinmPrimaryButton` **Lưu** · `isBusy` · PUT `auth/profile` |
| Section pwd | `LinmSectionLabel` **Đổi mật khẩu** |
| Secure | `LinmSecureTextField` current / new / confirm · confirm **local only** |
| Secondary | `LinmSecondaryButton` **Đổi mật khẩu** · POST `auth/change-password` |
| Toast | load/save/pwd ok·err·offline·validation · `SessionController.showToast` · **cấm** fake ok · **cấm** UIAlert |
| Leave | in-app leave modal · Design SSOT · dirty back |
| Use cases | reuse `FetchProfileUseCase` · **NEW** `UpdateProfileUseCase` · **NEW** `ChangePasswordUseCase` |
| Repo | `AuthRepository.updateProfile` / `changePassword` · PUT/POST Auth via BFF |
| DTO | extend `UserProfile` / `UserProfileDto` / mapper · `email` · `userName` · optional `citizenId` |
| Copy | `LinmCopy` `me.profile.*` VN SSOT |
| DI | `AppContainer` update/change use cases · `AppRouter` StateObject + navigationDestination |
| Kit | TopBar / TextField / SecureTextField / Primary / Secondary / SectionLabel / Toast · **cấm** invent kit · **cấm** WebView |
| Hub refresh | `setOnSaved` → `meViewModel.onIntent(.appear)` after PUT 200 |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` dest `iPhone 17 Pro` | **PASS** |
| Invent `me-profile` / RMMS `users/me` API | **none** |
| Step 4b / MeProfileController BFF | **n/a** · Auth rewrite live |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm Dev · queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-08-31T02:35:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:me-profile-ios-implement-20260831 |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
