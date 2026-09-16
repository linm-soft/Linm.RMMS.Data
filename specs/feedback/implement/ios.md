# Dev — Implement iOS — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** (surface full screen `#sc-feedback`) |
| taskId | `task_f834eb68` |
| updatedAt | `2026-08-28T23:26:28.000Z` |
| autoApprove | ON |
| contentHash | sha256:feedback-mobile-control-hint-20260829 |
| realDataHash | sha256:feedback-mobile-real-data-20260829 |
| priorTlHash | sha256:feedback-mobile-tl-task-20260829 |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/Feedback/*` · `#sc-feedback` · `DES-MOB-FEEDBACK` |
| Entry | Me `#row-feedback` toast → **push** · `MeViewModel.setOpenFeedback` · `AppRouter.showFeedbackFromMe` |
| TopBar | `LinmTopBar` title **Góp ý** · back **Tôi** |
| Body | FieldLabel 13 + multiline TextEditor (≥16) · placeholder SSOT · **cấm** POST trống |
| Primary | `LinmPrimaryButton` **Gửi góp ý** · `isBusy` |
| Toast | empty / ok / err / denied · `LinmToast` · **cấm** fake ok · **cấm** UIAlert |
| Leave | in-app `FeedbackLeaveModal` · Design SSOT · dirty back |
| Use case | `CreateAppFeedbackUseCase` · session `SenderName` · role default `tuan-duong` · `Category=de-xuat` · `Status=sent` · UTC `SubmittedAt` |
| Repo | `IntegrationRepository.createAppFeedback` · `POST integration/feedbacks` |
| Perm | `T-PERM-01` FE gate stub `hasAccessToken` · BE RequirePermission debt OK |
| CTX | `docs/context/features/feedback.md` · live `integration/feedbacks` · `nhan-dan/gop-ys` stale |
| Kit | TopBar / TextEditor peer CheckIn / Primary / Toast · **cấm** invent kit chrome · **cấm** WebView |
| DI | `AppContainer.createAppFeedbackUseCase` |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| Invent `feedback` / `nhan-dan/gop-ys` API | **none** |
| Step 4b / FeedbackController BFF | **n/a verify** · Create live · catch-all |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm Dev · queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-28T23:26:28.000Z` |
| versionGate | rechecked |
| contentHash | sha256:feedback-mobile-ios-implement-20260829 |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
