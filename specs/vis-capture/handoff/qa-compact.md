# Handoff compact — qa

schemaVersion: 1
feature: vis-capture
packKind: screen
role: qa
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T06:28:00.000Z
taskId: task_4b69db15
slash: /agent-qa-mobile
e2eQa: ON

## Decisions
- changeScope: edit_page · recheck post cleanup_mock (dev task_4dc20e00)
- e2e: yarn e2e-qa-mobile · **ok:true** · cases A11,A10,A9,A3,P6,P6-2 · `--skip-start`
- visual: Read A3↔P6↔demo **Aligned** · Must 0 · live session stamp · no demoLoc
- data: live GET sessions · detect · GPS gate Acc≤30
- mfeStdUrl: none · cấm start:std
- A4-IPAD: DEFER
- api: host :5111 · BFF :5202
- open: GAP-MOB-A11Y-VIS-01 Should non-block

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-vis-capture | Nhận diện mặt đường | TopBar+PhotoRow | from incident-list |
| i-camera | Chụp | PhotoRow | still picker |
| rows | Loc/Acc/Class/Sev | LinmListRow no-icon | Loc=live stamp |
| btn-attach | Gắn sự cố | Primary | GPS≤30 · POST incident |
| btn-skip | Bỏ qua | Secondary | local dismiss |

## Screens / zones (ids only)
- DES-MOB-VIS-CAPTURE / #sc-vis-capture
- shots: qa/screens + qa/store/vis-capture/ · CAPTURE.md · manifest ok:true
- reviewUrlIos=file://…/prototype/ios/index.html#sc-vis-capture
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-vis-capture

## API / tasks (ids only)
- A10-BFF :5202 PASS
- GET patrol/sessions · POST ai-vision/detect · POST incident/incidents
- debt: GAP-MOB-A11Y-VIS-01 Should

## VERIFY
- yarn e2e-qa-mobile ok:true · manifest ok:true · 1320×2868 · 1080×1920
- visual Read A3↔P6↔demo Aligned · Must 0
- next: /agent-review-mobile (roleOnly stop)

## UNCLEAR
- none
