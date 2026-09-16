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
| updatedAt | `2026-09-16T12:40:00.000Z` |
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
| Events | **2** row types speed + plate + lane (`GAP-MOB-CAMVIEW-DUAL-01`) · other = loại xe · `GET cameras/events` **paged `items`** (web ITS) `page`+`pageSize`+`fromDate`/`toDate` hôm nay ± `host=` · same API as iOS · **GAP-MOB-CAMVIEW-EVT-PAGE-01** |
| Pick | `GET cameras` · first Online∧IsActive · EmptyState |
| Refresh | re-snapshot + re-events · toast **Đã làm mới ảnh** |
| Use cases | `FetchCamerasUseCase` · `FetchCameraSnapshotUseCase` · `FetchCameraEventsUseCase` |
| Repo | `CameraRepository` / `CameraRepositoryImpl` · Retrofit `cameras*` · Hilt `@Binds` |
| ApiService | `cameras` · `cameras/{id}/snapshot` · `cameras/events` · **cấm** invent cam-view |
| Kit | `LinmTopBar` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · Nav 5 giữ · tab **me** |
| Copy | `cam.view.*` parity VN (`GAP-MOB-ALIGN-01`) · `cam.view.event.other` |
| Step 4b | **Skip** · T-BE n/a · T-BFF reuse |

## Notes (`/edit-mobile-feature` 2026-09-16)

- Event load **parity web** Kết nối camera ITS: `BffCameraEventsResponse` `data.items` \| `items` — **cấm** `List<CameraEventDto>` root.
- Query: `page` · `pageSize` · `fromDate`/`toDate` hôm nay · `host`.
- `assembleDebug` dest.

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** (2026-09-16 event paged bind) |
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
