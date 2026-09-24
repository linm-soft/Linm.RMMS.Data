# Dev — Implement Android — photo-geo-capture

| Field | Value |
|-------|-------|
| feature | `photo-geo-capture` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`review_tap_lens_range` · `/edit-mobile-feature` |
| taskId | `T-AND-PGC` |
| updatedAt | `2026-09-13T03:20:00.000Z` |
| autoApprove | ON |

## Delta this turn

| Area | Note |
|------|------|
| Feature | `presentation/feature/photogeocapture/*` · sheet `#sheet-pgc` |
| Capture | `LinmInAppCapture` + CameraX `PreviewView` **trong** `#capture-preview` · pinch/± zoom 1…8 · overlay `#pgc-fullscreen` · **cùng** `#btn-shutter` · **cấm** Dialog máy ảnh hệ thống / ACTION_IMAGE_CAPTURE |
| HUD | `#hud-live` · look-down gravity `asin(−ĝ.z)` · **cấm** kẹp 0.04/37 m |
| Zoom | `#btn-pgc-zoom-in` / `#btn-pgc-zoom-out` · `CameraControl.setZoomRatio` · kit **không** đọc GPS |
| Hosts still | `InAppStillCaptureDialog` · field / vis / incident / asset-ai / asset-collect |
| Footer | ẩn `LinmTabBar` khi `#sheet-pgc` (`onPhotoGeoVisible`) · fullscreen không `navigationBarsPadding` |
| Expand | `#btn-pgc-expand` Toàn màn hình / Thu nhỏ · BackHandler thu nhỏ |
| Flow | live HUD (ưu tiên `lensRangeM`) → optional fullscreen → shutter freeze + auto gim tâm → chạm lại still → osmdroid HITL → files `purpose=photo-geo-capture` → tap still `#sheet-pgc-review` |
| Hosts | FieldReflect · VisCapture · IncidentCreate PhotoRow `openCapture('photo-geo')` · tap thumb → review sidecar |
| Geo | 3D ray ∩ mặt đường · `distanceM` ngang · `lensRangeM` từ ống kính · HITL haversine · **cấm** chrome ARKit/LiDAR |
| API | reuse files init→PUT→commit · optional `POST ai-vision/detect` BE **hard-default 200** · **cấm** invent `photo-geo*` · Step 4b **n/a** |
| edit | `/edit-mobile-feature` · changeScope=`edit_page` · gap=`review_tap_lens_range` · **GAP-MOB-EDIT-PERM-01** granted FINE/COARSE + CAMERA ≠ deny toast |

## Build gate

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** · **GAP-MOB-EDIT-PERM-01** granted FINE/COARSE + CAMERA |
| Invent photo-geo API / ERP.* / mfeStdUrl | **none** |
| Step 4b / BFF write | **n/a** (sidecar) |

## Paths

- `presentation/feature/photogeocapture/PhotoGeoCaptureSheet.kt`
- `presentation/feature/photogeocapture/PhotoGeoCaptureViewModel.kt`
- `presentation/feature/photogeocapture/PhotoGeoCaptureUiState.kt`
- `domain/model/PhotoGeoCaptureModels.kt`
- Hosts: fieldreflect / viscapture / incidentcreate · `LinmCopy.kt`

## UI review (frame)

- Must: 0 · zones `#sheet-pgc` · `#sheet-pgc-review` · `#capture-preview` · `#hud-live` · `#btn-pgc-expand` · `#btn-shutter` · `#gim-pin` · `#row-lens` · `#map-confirm` · GPS deny

## Notes (`/edit-mobile-feature` · 2026-09-16 · update-image detect)

- After HITL + files commit + **Dùng ảnh**, always `POST ai-vision/detect` with `imageFileId` · BE **hard-default 200** · `detection` DTO on result · dual parity iOS.
- Native detect client **không** đổi path/DTO.


## Notes — MOB-PERM-OS-01 (2026-09-20)

- OS location/camera dialog **trước** GPS read / capture (`LaunchLocationPermissionOnStart` / `rememberAskLocationPermission` · iOS `requestWhenInUseAuthorization` / `requestAccess`).
- GPS deny modal primary **Mở Cài đặt** · secondary **Để sau** · **cấm** Sao chép hướng dẫn / clipboard.
- iOS already-denied camera → `AppSettingsOpener` (không re-prompt). Android camera Don't ask again → app Settings.

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.09.05.03 schemaVersion=1 -->
