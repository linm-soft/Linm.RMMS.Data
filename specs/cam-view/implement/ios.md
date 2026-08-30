# Dev — Implement iOS — cam-view

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** · `#sc-cam-view` · `DES-MOB-CAM-VIEW` |
| taskId | `task_47ef238f` |
| updatedAt | `2026-08-30T00:55:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:cam-view-control-hint-20260829 |
| realDataHash | sha256:cam-view-real-data-20260829 |
| bffContentHash | sha256:cam-view-mobile-bff-20260829 |
| actionTreeHash | sha256:cam-view-action-tree-20260829 |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/CamView/*` · TopBar **Tôi** + **Camera xem** + **Làm mới** · JPEG card · section **Sự kiện** · EmptyState · toast |
| Entry | Me `#row-cam` toast → **push** · `MeViewModel.setOpenCamView` · `AppRouter.showCamViewFromMe` |
| JPEG | Bind `POST cameras/{id}/snapshot` Base64 · caption ModelCode · Cập nhật HH:mm · placeholder `video.fill` · **cấm** AVCapture / fake Base64 |
| Events | Dual row types speed + plate · lane sub optional · `GET cameras/events?limit=20` ± `host=` |
| Pick | `GET cameras` page=1 pageSize=20 · first Online∧IsActive · EmptyState khi none |
| Refresh | re-POST snapshot + re-GET events · toast **Đã làm mới ảnh** / fail toast |
| Use cases | `FetchCamerasUseCase` · `FetchCameraSnapshotUseCase` · `FetchCameraEventsUseCase` |
| Repo | `CameraRepository` / `CameraRepositoryImpl` · paths `cameras*` only · **cấm** invent `cam-view` |
| DI | `AppContainer` camera use cases |
| Kit | `LinmTopBar` · `LinmSectionLabel` · `LinmListRow` · `EmptyChromeView` · `LinmToast` · Tab 5 giữ · tab **me** |
| Copy | `cam.view.*` keys VN SSOT · **cấm** watermark Gói / device label |
| Step 4b | **Skip** · T-BE n/a · T-BFF reuse |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` dest `iPhone 17 Pro` | **PASS** |
| Invent `api/v1/cam-view` | **none** |
| Step 4b / CamViewController BFF | **n/a** · cameras* live · catch-all |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm Dev · queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-08-30T00:55:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:cam-view-control-hint-20260829 |
| realDataHash | sha256:cam-view-real-data-20260829 |
| taskId | `task_47ef238f` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
