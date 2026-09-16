# Dev — Implement iOS — photo-geo-capture

| Field | Value |
|-------|-------|
| feature | `photo-geo-capture` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`review_tap_lens_range` · `/edit-mobile-feature` |
| taskId | `T-IOS-PGC` |
| updatedAt | `2026-09-13T03:20:00.000Z` |
| autoApprove | ON |

## Delta this turn

| Area | Note |
|------|------|
| Feature | `Presentation/Features/PhotoGeoCapture/*` · sheet `#sheet-pgc` |
| Capture | **in-app** `LinmInAppCapture` + `PhotoGeoInAppPreview` AVCapture trong `#capture-preview` · pinch/± zoom 1…8 · overlay `#pgc-fullscreen` · **cùng** `#btn-shutter` · **cấm** `UIImagePickerController` |
| HUD | `#hud-live` · look-down gravity `asin(−ĝ.z)` · **cấm** kẹp 0.04/37 m |
| Zoom | `#btn-pgc-zoom-in` / `#btn-pgc-zoom-out` · `videoZoomFactor` · kit **không** đọc GPS |
| Hosts still | `FieldReflectCameraPicker` → cùng `LinmInAppCapture` (field / vis / incident / asset / mnt) |
| Footer | ẩn `LinmTabBar` khi `#sheet-pgc` · fullscreen `ignoresSafeArea` |
| Expand | `#btn-pgc-expand` Toàn màn hình / Thu nhỏ · session không đổi |
| Flow | live HUD (ưu tiên `lensRangeM`) → optional fullscreen → shutter freeze + auto gim tâm → chạm lại still → MapKit HITL → files `purpose=photo-geo-capture` → tap still `#sheet-pgc-review` |
| Hosts | FieldReflect · VisCapture · IncidentCreate PhotoRow `openCapture('photo-geo')` · tap thumb → review sidecar |
| Geo | 3D ray ∩ mặt đường · `distanceM` ngang · `lensRangeM` từ ống kính · HITL haversine · **cấm** chrome ARKit/LiDAR |
| API | reuse files init→PUT→commit · optional `POST ai-vision/detect` BE **hard-default 200** · **cấm** invent `photo-geo*` · Step 4b **n/a** |
| edit | `/edit-mobile-feature` · changeScope=`edit_page` · gap=`review_tap_lens_range` · **GAP-MOB-EDIT-PERM-01** authorized WhenInUse + camera `.authorized` ≠ deny toast |

## Build gate

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro (iOS Simulator) | **PASS** · **GAP-MOB-EDIT-PERM-01** authorized ≠ deny |
| `xcodebuild` iPad Pro 13-inch (M5) | **PASS** |
| Invent photo-geo API / ERP.* / mfeStdUrl | **none** |
| Step 4b / BFF write | **n/a** (sidecar) |

## Paths

- `Presentation/Features/PhotoGeoCapture/PhotoGeoCaptureView.swift`
- `Presentation/Features/PhotoGeoCapture/PhotoGeoInAppPreview.swift`
- `Presentation/Features/PhotoGeoCapture/PhotoGeoCaptureViewModel.swift`
- `Presentation/Features/PhotoGeoCapture/PhotoGeoCaptureUiState.swift`
- `Domain/Entities/PhotoGeoCaptureModels.swift`
- Hosts: FieldReflect / VisCapture / IncidentCreate · `LinmCopy.swift`

## UI review (frame)

- Must: 0 · zones `#sheet-pgc` · `#sheet-pgc-review` · `#capture-preview` · `#hud-live` · `#btn-pgc-expand` · `#btn-shutter` · `#gim-pin` · `#row-lens` · `#map-confirm` · `#modal-gps`

## Notes (`/edit-mobile-feature` · 2026-09-16 · update-image detect)

- After HITL + files commit, optional detect uses same `POST ai-vision/detect` · BE **hard-default 200** (skip AiService HTTP) · `didAttachDetect=true` on 200 · host vis/field/incident bind rows.
- iOS client path/DTO **không** đổi.

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.09.05.03 schemaVersion=1 -->
