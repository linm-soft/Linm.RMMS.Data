# Handoff compact — review

schemaVersion: 1
feature: photo-geo-capture
packKind: sheet
role: review
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-13T02:08:00.000Z
taskId: task_c40102b9
slash: /agent-review-mobile
changeScope: edit_page
gap: live_hud_fullscreen
autoApprove: ON
review_confirm: done
e2eQa: ON (prior QA · no re-run)

## Decisions
- Sheet `DES-MOB-PGC` `#sheet-pgc` · host PhotoRow `openCapture('photo-geo')` · in-app camera viewfinder + live HUD
- Trace: data_analy→po→design→sa→tl→dev→qa all **confirmed** · inventory/API aligned
- QA e2e ok:true · A3↔P6 Aligned Must 0 · manifest PASS (task_8c3429ad)
- GAP live_hud_fullscreen & in_app_camera_frame VERIFIED CLOSED
- GAP-PGC-BE/DETECT CLOSED · debt Should: GAP-QA-PGC-AX-01 · GAP-QA-PGC-TAB-01 · A4-IPAD DEFER
- Blocking Must: **none** · review_confirm: **done**
- mfeStdUrl: none · ERP.*: none · Step 4b N/A
- Pipeline **complete** · roleOnly stop · next: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-PGC | Chụp ảnh kèm tọa độ | LinmSheet | #sheet-pgc |
| capturePreview | preview | ImagePreviewFullBleed | in-app live viewfinder + HUD + shutter |
| btn-shutter | Chụp | PrimaryFab | in-app capture |
| gimPin | gim 1 điểm | ImageTapPin | cấm multi |
| rowPhotogGps / rowDistance / rowObjectCoord | meta | ListRow | photog ≠ object |
| mapConfirm | map HITL | MapPinSheet | MapKit / osmdroid |
| btnUse / btnCancel | CTA | Primary/Secondary | Dùng ảnh · Hủy |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | Để sau |

## Screens / zones (ids only)
- #sheet-pgc · #capture-preview · #btn-shutter · #hud-live · #pgc-fullscreen · #gim-pin · #row-photog · #map-confirm · #modal-gps
- hosts: #sc-field-reflect · #sc-vis-capture · #sc-inc-form
- reviewUrlIos=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html
- reviewUrlAndroid=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html
- shots: qa/screens + qa/store/photo-geo-capture/ · CAPTURE.md · manifest ok:true

## API / tasks (ids only)
- POST files/init · PUT files/{id}/object · POST files/commit · GET files/{id}/object · purpose=`photo-geo-capture`
- optional POST ai-vision/detect · host MediaIds/HasGps · no photo-geo API
- T-IOS/AND/QA-PGC: **done** · review: **done**

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/review/findings.md
- qa-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/handoff/qa-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/STATUS.md

## Next
role: none
artifact: specs/photo-geo-capture/review/findings.md
slash: — (pipeline complete)
task: task_c40102b9 completed
