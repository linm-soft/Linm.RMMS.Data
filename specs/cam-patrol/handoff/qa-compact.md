# Handoff compact — qa

schemaVersion: 1
feature: cam-patrol
packKind: screen
role: qa
status: done
skillVersion: 2026.08.20.03
writtenAt: 2026-09-01T06:13:32.000Z
taskId: task_fb828936
slash: /agent-qa-mobile
e2eQa: ON

## Decisions
- changeScope: edit_page · recheck post cleanup_mock (dev task_e7101ed6)
- e2e: yarn e2e-qa-mobile · **ok:true** · cases A11,A10,A9,A3,P6,P6-2
- visual: Read A3↔P6↔demo **Aligned** · Must 0 · live-only route · score ẩn · no demoRouteStamp
- data: live GET sessions stamp · detect live · Confirm GPS gate
- mfeStdUrl: none · cấm start:std
- A4-IPAD: DEFER
- api: host :5111 + proxy :5101 for gate · BFF :5202
- open: GAP-QA-CAM-GPS-TIMING-01 Should non-block

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-cam-patrol | Thu thập camera | TopBar+finder | push from hub |
| finder | Camera FOV | AVCapture/CameraX | live |
| detect-card | Phát hiện | LinmListRow no-icon | live detect |
| btn-confirm | Xác nhận | Primary | GPS gate |
| btn-skip | Bỏ qua | Secondary | local clear |

## Screens / zones (ids only)
- DES-MOB-CAM-PATROL / #sc-cam-patrol · DES-MOB-CAM-FINDER
- shots: qa/screens + qa/store/cam-patrol/ · CAPTURE.md · manifest ok:true
- reviewUrlIos=file://…/prototype/ios/index.html#sc-cam-patrol
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-cam-patrol

## API / tasks (ids only)
- A10-BFF :5202 PASS
- GET patrol/sessions · POST ai-vision/detect · POST incident/incidents
- debt: GAP-QA-CAM-GPS-TIMING-01 Should

## VERIFY
- yarn e2e-qa-mobile ok:true · manifest ok:true
- visual Read A3↔P6↔demo Aligned · Must 0
- next: /agent-review-mobile (roleOnly stop)

## UNCLEAR
- none
