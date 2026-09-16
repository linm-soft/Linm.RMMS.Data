# Dev — Implement Android — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** (surface full screen `#sc-feedback`) |
| taskId | `task_f834eb68` |
| updatedAt | `2026-08-28T23:26:28.000Z` |
| autoApprove | ON |
| contentHash | sha256:feedback-mobile-control-hint-20260829 |
| realDataHash | sha256:feedback-mobile-real-data-20260829 |
| priorTlHash | sha256:feedback-mobile-tl-task-20260829 |
| priorIos | `implement/ios.md` **confirmed** |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `presentation/feature/feedback/*` · `#sc-feedback` · `DES-MOB-FEEDBACK` |
| Entry | Me `#row-feedback` toast → **navigate** · `MeViewModel.setOpenFeedback` · `ProfileStack` route `feedback` |
| TopBar | `LinmTopBar` title **Góp ý** · Android icon-only back (`GAP-MOB-ALIGN-01`) |
| Body | FieldLabel 13 + `BasicTextField` multiline (≥16) · placeholder SSOT · **cấm** POST trống |
| Primary | `LinmPrimaryButton` **Gửi góp ý** · `isBusy` |
| Toast | empty / ok / err / denied · `LoginToastHub` · **cấm** fake ok · **cấm** AlertDialog |
| Leave | in-app `FeedbackLeaveModal` · Design SSOT · dirty back · `BackHandler` |
| Use case | `CreateAppFeedbackUseCase` · same bind dual · Hilt `@Inject` |
| Repo | `IntegrationRepository.createAppFeedback` · `ApiService` `POST integration/feedbacks` |
| Perm | `T-PERM-01` FE gate stub `hasAccessToken` |
| Copy | `LinmCopy` `feedback.*` parity VN |
| Kit | TopBar / multiline peer CheckIn / Primary / Toast · **cấm** invent kit · **cấm** WebView |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| Invent `feedback` / `nhan-dan/gop-ys` API | **none** |
| Step 4b / FeedbackController BFF | **n/a verify** · Create live · catch-all |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm Dev · queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-28T23:26:28.000Z` |
| versionGate | rechecked |
| contentHash | sha256:feedback-mobile-android-implement-20260829 |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
