# Handoff compact — design

schemaVersion: 1
feature: photo-geo-capture
packKind: sheet
role: design
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T17:50:00.000Z
taskId: task_a487c57b
slash: /agent-design-mobile
changeScope: new_page

## Decisions
- Sheet `DES-MOB-PGC` `#sheet-pgc` · entry host PhotoRow `openCapture('photo-geo')` · **không** hub row
- Flow: shutter → gim 1 pin → meta → MapPinSheet HITL → FileService `purpose=photo-geo-capture` → host attachmentId+object coords
- Object lat/lng ≠ photographer EXIF · **cấm** fake · **cấm** invent `api/v1/photo-geo*`
- GPS deny → `DES-MOB-GPS-DENY` · conf>30m / compass → banner · no auto-attach
- Dual proto iOS 390×844 · Android 412×915 · reviewUrl file:// · demo packet missing · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`)
- design_confirm: **approve** · autoApprove=ON · kit_missing: none
- GAP-PGC-BE-01 / DETECT-01 → SA · e2e queued QA
- next: `/agent-solution-mobile` · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-PGC | Chụp ảnh kèm tọa độ | LinmSheet | #sheet-pgc |
| capturePreview | preview | ImagePreviewFullBleed | + crosshair |
| gimPin | gim 1 điểm | ImageTapPin | cấm multi |
| rowPhotogGps | Vị trí đã chốt | ListRow | người đứng |
| rowDistance | Khoảng cách ước lượng | ListRow | on-device |
| rowObjectCoord | Tọa độ vật thể | ListRow | after HITL |
| mapConfirm | map | MapPinSheet | reuse peers |
| btnConfirmMap / btnUse | CTA | PrimaryButton | return id+coords |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | no geo |

## Screens / zones (ids only)
- #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #modal-gps · #sc-field-reflect (host demo)
- DES-MOB-PGC · DES-MOB-GPS-DENY
- hosts: #sc-field-reflect · #sc-vis-capture · #sc-inc-form
- reviewUrlIos: file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html
- reviewUrlAndroid: file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html
- demo states: ?deny=1 · ?conf=45 · ?compass=1 · ?step=map · ?fail=1

## API / tasks (ids only)
- POST files/init · PUT files/{id}/object · POST files/commit · GET files/{id}/object
- optional POST ai-vision/detect · GET patrol/sessions · host POST incident/incidents MediaIds
- on-device geo + HITL — no photo-geo API
- contentHash: sha256:photo-geo-capture-control-hint-20260912
- realDataHash: sha256:photo-geo-capture-real-data-20260912

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/ux-analy.md
- map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/html-to-native-map.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/photo-geo-capture-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/photo-geo-capture-real-data.md
- po-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/handoff/po-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/STATUS.md
