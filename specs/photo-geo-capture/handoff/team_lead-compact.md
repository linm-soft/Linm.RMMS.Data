# Handoff compact — team_lead

schemaVersion: 1
feature: photo-geo-capture
packKind: sheet
role: team_lead
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T17:40:00.000Z
taskId: task_e264f99e
slash: /agent-tl-mobile
changeScope: new_page
route_confirm: route_a
autoApprove: ON

## Decisions
- Sheet `DES-MOB-PGC` `#sheet-pgc` · entry host PhotoRow `openCapture('photo-geo')` · **không** hub/tab/URL mới
- Flow: shutter → gim 1 pin → on-device object geo → HITL MapPinSheet → files `purpose=photo-geo-capture` → host `attachmentId`+object coords sidecar
- Object lat/lng ≠ photographer EXIF · **cấm** fake · **cấm** invent `api/v1/photo-geo*`
- **T-IOS-PGC** · **T-AND-PGC** pending · **T-BE/T-BFF/T-KIT n/a** · Step 4b **N/A** (GAP-PGC-BE-01 CLOSED)
- GAP-PGC-DETECT-01 CLOSED · conf>30m → no detect auto-attach
- GPS deny `DES-MOB-GPS-DENY` · offline queue files/host
- Live gap: **DELTA** dual — no PhotoGeoCapture feature folders
- Serial Dev: `/agent-dev-ios` → `/agent-dev-android` · e2e queued QA · **cấm** TL e2e/build/Step 4b
- next: **dev** (`/agent-dev-ios` · T-IOS-PGC)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-PGC | Chụp ảnh kèm tọa độ | LinmSheet | #sheet-pgc |
| capturePreview | preview | ImagePreviewFullBleed | EXIF+IMU |
| gimPin | gim 1 điểm | ImageTapPin | cấm multi |
| rowPhotogGps | Vị trí đã chốt | ListRow | photographer |
| rowDistance | Khoảng cách ước lượng | ListRow | on-device |
| rowObjectCoord | Tọa độ vật thể | ListRow | after HITL |
| mapConfirm | map | MapPinSheet | reuse peers |
| btnConfirmMap / btnUse | CTA | PrimaryButton | id+object coords |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | no geo |

## Screens / zones (ids only)
- #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #modal-gps
- hosts: #sc-field-reflect · #sc-vis-capture · #sc-inc-form
- reviewUrlIos/Android: design-compact paths

## API / tasks (ids only)
- T-IOS-PGC · T-AND-PGC · T-QA-PGC
- POST files/init · PUT files/{id}/object · POST files/commit · GET files/{id}/object
- optional POST ai-vision/detect (object Lat/Lng) · GET patrol/sessions · host MediaIds
- T-BE/T-BFF n/a · no photo-geo API

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/task/photo-geo-capture.md
- sa-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/handoff/sa-compact.md
- design-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/handoff/design-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/STATUS.md
