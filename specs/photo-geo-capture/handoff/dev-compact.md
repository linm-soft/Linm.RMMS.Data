# Handoff compact — dev

schemaVersion: 1
feature: photo-geo-capture
packKind: sheet
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-13T01:40:00.000Z
taskId: task_b6a752b4
slash: /edit-mobile-feature
changeScope: edit_page
gap: lookdown_gravity_hide_tab
autoApprove: ON

## Decisions
- GAP lookdown_gravity_hide_tab **CLOSED**:
  - Distance: `d = h / tan(θ)` · θ = gravity look-down `asin(−ĝ.z)` + pixel · sàn `atan(h/120)` · **cấm** kẹp 0.04 → 37 m
  - Ẩn `LinmTabBar` khi `#sheet-pgc` mở (iOS AppRouter · Android `onPhotoGeoVisible`) · fullscreen full height

## Decisions
- Sheet `DES-MOB-PGC` `#sheet-pgc` dual · host PhotoRow `openCapture('photo-geo')` · **không** hub/tab
- GAP live_hud_fullscreen **CLOSED**:
  - Live HUD `#hud-live` pinhole tâm (0.5, 0.5) + IMU khi idle · row distance/object cập nhật khi xoay máy
  - Overlay `#pgc-fullscreen` in-app · **cùng** `#btn-shutter` · **cấm** Camera.app / UIImagePicker / Dialog máy ảnh hệ thống
  - Shutter freeze + auto gim tâm · chạm lại still nếu lệch · HITL map bắt buộc
- iOS: `PhotoGeoInAppPreview` AVCapture · Android: CameraX `PreviewView` trong `#capture-preview` / fullscreen overlay
- IMU snapshot lúc shutter · pinhole ∩ mặt đường không đổi
- T-IOS-PGC · T-AND-PGC **PASS** · T-BE/T-BFF/Step 4b **n/a** · mfeStdUrl: none · ERP.*: none
- conf>30m / compass → banner · no detect auto-attach · GPS deny modal kit
- VERIFY GATE: iOS xcodegen+xcodebuild iPhone 17 Pro Max **PASS** · Android compileDebugKotlin+assembleDebug **PASS**
- e2eQa: **không** chain QA leaf này · skipPoDesignSa
- UNCLEAR: none · debt: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-PGC | Chụp ảnh kèm tọa độ | LinmSheet | #sheet-pgc |
| capturePreview | preview | ImagePreviewFullBleed | in-app live + still freeze + crosshair |
| btnShutter | Chụp | ShutterButton | in-app capture |
| gimPin | gim 1 điểm | ImageTapPin | tap trên ảnh freeze |
| rowPhotogGps / rowDistance / rowObjectCoord | meta | ListRow | photog ≠ object |
| mapConfirm | map HITL | MapPinSheet | MapKit / osmdroid |
| btnConfirmMap / btnUse | CTA | PrimaryButton | id+coords |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | no geo |

## Screens / zones (ids only)
- `#sheet-pgc` · `#capture-preview` · `#btn-shutter` · `#gim-pin` · `#map-confirm` · `#modal-gps`
- hosts: `#sc-field-reflect` · `#sc-vis-capture` · `#sc-inc-form`
- mfeStdUrl: N/A

## API / tasks (ids only)
- POST files/init · PUT files/{id}/object · POST files/commit · GET files/{id}/object · purpose=`photo-geo-capture`
- optional POST ai-vision/detect (object HITL) · host MediaIds/HasGps
- T-IOS-PGC · T-AND-PGC: **done** (task_b6a752b4) · leaf edit · **không** chain QA

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/implement/ios.md
- implement android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/STATUS.md

## Next
role: qa
artifact: specs/photo-geo-capture/qa/*
slash: /agent-qa-mobile
task: T-QA-PGC
