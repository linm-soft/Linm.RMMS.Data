# Dev — Implement Android — me-settings

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
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
| Screen | `presentation/feature/mesettings/*` · `#sc-me-settings` · `DES-MOB-ME-SETTINGS` |
| Entry | Me `#row-settings` toast → **push** · `MeViewModel.setOpenMeSettings` · route `"me-settings"` |
| TopBar | `LinmTopBar` title **Cài đặt** · Android back icon-only (`GAP-MOB-ALIGN-01`) |
| Section perm | `LinmSectionLabel` **Quyền ứng dụng** · rows Vị trí / Camera / Thông báo hệ thống |
| OS status | `ContextCompat.checkSelfPermission` location + camera · **cấm** request · refresh `ON_RESUME` |
| CTA OS | `LinmSecondaryButton` · `ACTION_APPLICATION_DETAILS_SETTINGS` · fail toast |
| Sync | row **Hàng đợi mất sóng** → nav `"patrol-offline"` reuse |
| About | `BuildConfig.VERSION_NAME (VERSION_CODE)` · empty «—» · privacy panel `home.privacy.*` |
| Toast | OS fail only · `LoginToastHub` / `LinmBanner` · **cấm** AlertDialog · **cấm** fake save |
| HTTP / BFF | **none P1** · **cấm** invent preferences |
| Kit | TopBar / SectionLabel / ListRow / Secondary · **cấm** invent kit |
| Tab | NavigationBar 5 giữ · pack `tabs: none` · tab **me** active |
| DI | Hilt `MeSettingsViewModel` |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| Invent `me-settings` / preferences API | **none** |
| Step 4b / MeSettingsController BFF | **n/a** · Skip |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm Dev · queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T03:45:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:me-settings-android-implement-20260831 |
| designContentHash | sha256:me-settings-design-20260830 |
| saContentHash | sha256:me-settings-sa-solution-20260830 |
| tlContentHash | sha256:me-settings-tl-task-20260830 |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
