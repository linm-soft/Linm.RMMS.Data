# Dev — Implement iOS — me-settings

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`sheet`** (surface full screen `#sc-me-settings`) |
| taskId | `task_82661df5` |
| updatedAt | `2026-08-31T03:45:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:me-settings-control-hint-20260830 |
| realDataHash | sha256:me-settings-real-data-20260830 |
| priorTlHash | sha256:me-settings-tl-task-20260830 |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/MeSettings/*` · `#sc-me-settings` · `DES-MOB-ME-SETTINGS` |
| Entry | Me `#row-settings` toast → **push** · `MeViewModel.setOpenMeSettings` · `AppRouter.showMeSettingsFromMe` |
| TopBar | `LinmTopBar` title **Cài đặt** · back **Tôi** |
| Section perm | `LinmSectionLabel` **Quyền ứng dụng** · rows Vị trí / Camera / Thông báo hệ thống |
| OS status | read-only `CLLocationManager.authorizationStatus` · `AVCaptureDevice.authorizationStatus` · **cấm** request |
| CTA OS | `LinmSecondaryButton` **Mở Cài đặt hệ thống** · `UIApplication.openSettingsURLString` · fail toast |
| Sync | row **Hàng đợi mất sóng** → nav `PatrolOfflineView` reuse |
| About | Bundle `x.y.z (build)` · empty «—» · privacy panel `home.privacy.*` |
| Toast | OS fail only · `LinmToast` · **cấm** fake «Đã lưu» · **cấm** UIAlert |
| HTTP / BFF | **none P1** · **cấm** invent preferences / MeSettingsController |
| Kit | TopBar / SectionLabel / ListRow / Secondary / Toast · **cấm** invent kit · **cấm** WebView |
| Tab | Shell Tab 5 giữ · pack `tabs: none` · tab **me** active |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| Invent `me-settings` / preferences API | **none** |
| Step 4b / MeSettingsController BFF | **n/a** · Skip |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm Dev · queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T03:45:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:me-settings-ios-implement-20260831 |
| designContentHash | sha256:me-settings-design-20260830 |
| saContentHash | sha256:me-settings-sa-solution-20260830 |
| tlContentHash | sha256:me-settings-tl-task-20260830 |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
