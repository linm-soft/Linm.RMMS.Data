# Handoff compact — qa

schemaVersion: 1
feature: photo-geo-capture
packKind: sheet
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-13T02:06:00.000Z
taskId: task_8c3429ad
slash: /agent-qa-mobile
e2eQa: ON
changeScope: edit_page
gap: in_app_camera_frame
autoApprove: ON

## Decisions
- Sheet `DES-MOB-PGC` `#sheet-pgc` · host field-reflect `#i-camera` · **không** hub/tab
- GAP `in_app_camera_frame` **VERIFIED CLOSED**:
  - iOS: `#capture-preview` live feed via `PhotoGeoInAppPreview` (AVCaptureSession) inside sheet
  - Android: `#capture-preview` live viewfinder via CameraX `PreviewView` inside sheet
  - Cấm `UIImagePickerController` / `ACTION_IMAGE_CAPTURE` full screen dialogs
- e2e: yarn e2e-qa-mobile · **ok:true** · cases A11,A10,A9,A3,P6,P6-2 · `--skip-start --skip-build --bundle-id=com.drvn.rmms`
- visual: Read A3↔P6↔dual proto **Aligned** · Must 0
- GPS deny dismiss **Để sau** · live Acc `±5 m` · object/distance `—` pre-shutter
- mfeStdUrl: none · cấm start:std · A4-IPAD: DEFER
- api: :5101 · BFF :5202 · Android pkg `org.linmsoft.rmms`
- open: GAP-QA-PGC-AX-01 · GAP-QA-PGC-TAB-01 Should non-block
- next: **review** (`/agent-review-mobile`)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-PGC | Chụp ảnh kèm tọa độ | LinmSheet | #sheet-pgc |
| capturePreview | preview | ImagePreviewFullBleed | in-app live viewfinder + shutter |
| btn-shutter | Chụp | PrimaryFab | in-app capture |
| rowPhotogGps | Vị trí đã chốt | ListRow | ±5 m live |
| rowDistance / rowObjectCoord | meta | ListRow | — pre-gim |
| btnUse / btnCancel | CTA | Primary/Secondary | Dùng ảnh · Hủy |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | Để sau |

## Screens / zones (ids only)
- #sheet-pgc · #capture-preview · #btn-shutter · #row-photog · #map-confirm · #modal-gps
- hosts: #sc-field-reflect · #sc-vis-capture · #sc-inc-form
- shots: qa/screens + qa/store/photo-geo-capture/ · CAPTURE.md · manifest ok:true
- reviewUrlIos=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html
- reviewUrlAndroid=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html

## API / tasks (ids only)
- A10-BFF :5202 PASS
- files purpose=`photo-geo-capture` · no photo-geo API
- T-QA-PGC: **done** · debt Should only

## VERIFY
- iOS xcodegen + xcodebuild (LinmRmms) iPhone 17 Pro Max PASS
- Android assembleDebug PASS
- BFF dotnet build PASS
- yarn e2e-qa-mobile ok:true · manifest ok:true · 1320×2868 · 1080×1920
- visual Read A3↔P6↔demo Aligned · Must 0
- next: /agent-review-mobile (roleOnly stop)

## UNCLEAR
- none
