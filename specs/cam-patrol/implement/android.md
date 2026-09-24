# Dev — Implement Android — cam-patrol

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`cam_patrol_capture_frame` · **GAP-MOB-CAM-FRAME-01/02/03** |
| packKind | **`screen`** |
| taskId | `task_2122aa0b` · TL `task_9068a243` · T-AND-CAM-FRAME |
| updatedAt | `2026-09-12T11:40:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |
| realDataHash | sha256:cam-patrol-real-data-20260912-frame |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260912-frame |

## Delta this edit (FRAME)

| ID | Done |
|----|------|
| GAP-MOB-CAM-FRAME-01 | CameraX `ImageCapture` → JPEG → non-null `DetectAiVisionBody.imageBase64` |
| GAP-MOB-CAM-FRAME-02 | empty/fail → toast `cam.toast.detectFail` · card nil · **cấm** fake class · **không** omit body |
| GAP-MOB-CAM-FRAME-03 | dual parity iOS body fields |

## Shipped paths

| Area | Path |
|------|------|
| Screen + finder | `presentation/feature/campatrol/CamPatrolScreen.kt` · ImageCapture bind |
| ViewModel | `CamPatrolViewModel.kt` · `CamPatrolFrameCapturer` · `runDetect` |
| Keep | GPS / Confirm / Skip / sessions · score ẩn · route_a · **GAP-MOB-EDIT-PERM-01** granted CAMERA/GPS ≠ deny |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (paths unchanged) |
| Step 4b / invent API | **SKIP** / none |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T11:40:00.000Z` |
| versionGate | rechecked |


## Notes — MOB-PERM-OS-01 (2026-09-20)

- OS location/camera dialog **trước** GPS read / capture (`LaunchLocationPermissionOnStart` / `rememberAskLocationPermission` · iOS `requestWhenInUseAuthorization` / `requestAccess`).
- GPS deny modal primary **Mở Cài đặt** · secondary **Để sau** · **cấm** Sao chép hướng dẫn / clipboard.
- **GAP-MOB-EDIT-CAM-DENY** — `DevicePermissions.canAskCameraOsDialog` → OS dialog · Don't ask again → `#modal-camera-deny` · tap **Mở Cài đặt** · **cấm** nhảy Settings không hỏi.

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
