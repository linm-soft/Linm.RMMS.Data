# Handoff compact — dev

schemaVersion: 1
feature: vis-capture
packKind: screen
role: dev
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T06:22:00.000Z
taskId: task_4dc20e00
slash: /edit-mobile-feature
gap: cleanup_mock · GAP-MOB-EDIT-DEMO-01

## Decisions
- changeScope: edit_page (cleanup_mock parent mobile-cleanup-mock)
- formPattern: screen · PhotoRow + detect rows · Gắn/Bỏ qua
- mfeStdUrl: none (native_dual)
- data: live-only route stamp từ GET `patrol/sessions` active `.route` · empty = `patrol.empty.active.route` · fail = toast `cam.toast.sessionFail` · **cấm** demoLoc/DEMO_LOC / itemsOrDemo / invent QL.1
- Step 4b: N/A — reuse sessions + detect + incident · BE empty OK
- open questions: none · GAP-MOB-A11Y-VIS-01 still Should non-block

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-vis-capture | Nhận diện mặt đường | TopBar+PhotoRow | push from incident-list |
| i-camera | Chụp | PhotoRow | still picker |
| rows | Loc/Acc/Class/Sev | LinmListRow no-icon | Loc=live stamp |
| btn-attach | Gắn sự cố | Primary | GPS≤30 · POST incident |
| btn-skip | Bỏ qua | Secondary | local dismiss |

## Screens / zones (ids only)
- DES-MOB-VIS-CAPTURE / #sc-vis-capture
- reviewUrlIos=file://…/prototype/ios/index.html
- reviewUrlAndroid=file://…/prototype/android/index.html
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/sessions`
- POST `mobile-bff/api/v1/ai-vision/detect`
- POST `mobile-bff/api/v1/incident/incidents`
- T-BE: N/A (proxy · Signed detect prior)

## Debt / next
- Next: QA optional re-e2e · Review re-check
- debt: GAP-MOB-A11Y-VIS-01 Should · media uploads P2
- verify: iOS xcodegen+xcodebuild iPhone 17 Pro PASS · Android assembleDebug PASS · BFF dotnet build PASS
