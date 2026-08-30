# Dev — Implement Android — cam-view

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
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
| Screen | `presentation/feature/camview/*` · TopBar icon-back + title + **Làm mới** · JPEG card · section **Sự kiện** · empty · toast |
| Entry | Me `row-cam` toast → **navigate** · `MeViewModel.setOpenCamView` · `ProfileStack` route `cam-view` |
| JPEG | Bind snapshot Base64 → Bitmap · caption ModelCode · Cập nhật HH:mm · Videocam placeholder · **cấm** CameraX finder / fake Base64 |
| Events | **2** row types speed + plate + lane (`GAP-MOB-CAMVIEW-DUAL-01`) · same API as iOS |
| Pick | `GET cameras` · first Online∧IsActive · EmptyState |
| Refresh | re-snapshot + re-events · toast **Đã làm mới ảnh** |
| Use cases | `FetchCamerasUseCase` · `FetchCameraSnapshotUseCase` · `FetchCameraEventsUseCase` |
| Repo | `CameraRepository` / `CameraRepositoryImpl` · Retrofit `cameras*` · Hilt `@Binds` |
| ApiService | `cameras` · `cameras/{id}/snapshot` · `cameras/events` · **cấm** invent cam-view |
| Kit | `LinmTopBar` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · Nav 5 giữ · tab **me** |
| Copy | `cam.view.*` parity VN (`GAP-MOB-ALIGN-01`) |
| Step 4b | **Skip** · T-BE n/a · T-BFF reuse |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| Invent `api/v1/cam-view` | **none** |
| Step 4b / CamViewController BFF | **n/a** · cameras* live |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm Dev · queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
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
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
