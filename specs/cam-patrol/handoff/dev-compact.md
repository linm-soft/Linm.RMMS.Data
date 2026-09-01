# Handoff compact — dev

schemaVersion: 1
feature: cam-patrol
packKind: screen
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T06:00:00.000Z
taskId: task_e7101ed6
slash: /edit-mobile-feature
gap: cleanup_mock · GAP-MOB-EDIT-DEMO-01

## Decisions
- changeScope: edit_page (cleanup_mock parent mobile-cleanup-mock)
- formPattern: screen · finder + detect card · Confirm/Skip
- mfeStdUrl: none (native_dual)
- data: live-only route stamp từ GET `patrol/sessions` active · empty = `patrol.empty.active.route` · fail = toast `cam.toast.sessionFail` · **cấm** `demoRouteStamp` / itemsOrDemo
- Step 4b: N/A — reuse sessions · BE empty OK
- open questions: none · GAP-QA-CAM-GPS-TIMING-01 still Should non-block

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-cam-patrol | Thu thập camera | TopBar+finder | push from hub |
| finder | Camera FOV | AVCapture/CameraX | live |
| detect-card | Phát hiện | LinmListRow no-icon | POST detect |
| btn-confirm | Xác nhận | Primary | GPS gate · POST incident |
| btn-skip | Bỏ qua | Secondary | local clear |

## Screens / zones (ids only)
- DES-MOB-CAM-PATROL / #sc-cam-patrol · DES-MOB-CAM-FINDER
- reviewUrlIos=file://…/prototype/ios/index.html#sc-cam-patrol
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-cam-patrol
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/sessions`
- POST `mobile-bff/api/v1/ai-vision/detect`
- POST `mobile-bff/api/v1/incident/incidents`
- T-BE: N/A (proxy)

## Debt / next
- Next: QA re-e2e optional · Review re-check
- debt: GAP-QA-CAM-GPS-TIMING-01 Should · frame media P2
- verify: iOS xcodegen+xcodebuild iPhone 17 Pro PASS · Android assembleDebug PASS · BFF dotnet build PASS
