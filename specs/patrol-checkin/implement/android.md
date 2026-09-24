# Dev — Implement Android — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** |
| taskId | `task_e7e16bae` |
| updatedAt | `2026-09-12T13:15:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:patrol-checkin-control-hint-20260912-edit |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260912-edit |

## Notes (edit_page delta · T-AND-PAT-CI-DELTA)

- Compose parity dual · section-label **Ảnh**.
- Plan match vs BE `plan-points` · honor `GET patrol/check-in-policy` (default allow sai điểm) · interim session label · **cấm** plan=GPS.
- GetContent picker → FileService init/PUT/commit → `attachmentId[]` · fail → offline queue.
- **2026-09-16** `/edit-mobile-feature`: honor BE check-in-policy · allow sai điểm by default.
- **2026-09-16** `/edit-mobile-feature`: Cách điểm KH / banner / detail **> 1000 m → km** (`DistanceDisplay` · `checkin.dist.km`) · 264384 m → **264.4 km**.

## Shipped

| Area | Path / note |
|------|-------------|
| Feature UI | `presentation/feature/patrolcheckin/*` |
| Plan + File | `PatrolRepository.fetchPlanPoints` · `FileAttachmentRepositoryImpl` |
| Submit | `SubmitPatrolCheckInUseCase` · attachment ids |
| DI | `NetworkModule` File bind |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew assembleDebug` | **PASS** (2026-09-16 · dist km) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T13:15:00.000Z` |
| versionGate | rechecked |

`/edit-mobile-feature` 2026-09-18: **GAP-MOB-EDIT-FIELD-CHROME** — `#ci-content` `LinmTextArea` `textAreaCompactHeight` · placeholder `checkin.content.placeholder` · **cấm** raw `BasicTextField` `onSurface 0.12` · `assembleW0Debug` **PASS**.


## Notes — MOB-PERM-OS-01 (2026-09-20)

- OS location/camera dialog **trước** GPS read / capture (`LaunchLocationPermissionOnStart` / `rememberAskLocationPermission` · iOS `requestWhenInUseAuthorization` / `requestAccess`).
- GPS deny modal primary **Mở Cài đặt** · secondary **Để sau** · **cấm** Sao chép hướng dẫn / clipboard.
- iOS already-denied camera → `AppSettingsOpener` (không re-prompt). Android camera Don't ask again → app Settings.

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
