# Handoff compact — dev

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T06:40:00.000Z
taskId: task_2f18d421
slash: /edit-mobile-feature
gap: cleanup_mock · GAP-MOB-EDIT-DEMO-01

## Decisions
- changeScope: edit_page (cleanup_mock parent mobile-cleanup-mock)
- formPattern: sheet · Ghi điểm tuần + leave + detail
- mfeStdUrl: none (native_dual)
- data: live-only GET `patrol/sessions` active `.route` · empty = `patrol.empty.active.route` · fail = toast `cam.toast.sessionFail` · plan lat/lng = live GPS pin · **cấm** demoRoute/demoPlan*/demo-session/itemsOrDemo
- Step 4b: N/A — reuse sessions + POST check-ins · BE empty OK (empty stamp)
- open questions: none · GAP-QA-A11Y-SHEET-TAG-01 Still Should · Photo upload P2

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sheet-checkin | Ghi điểm tuần | Sheet | hub/map entry |
| ci-match-banner | Đúng/Sai điểm | Banner | GPS vs plan |
| plan/route/gps/dist | readonly fields | Text | live stamp |
| ci-content | Nội dung | TextArea | editable |
| ci-add-photo | Ảnh | PhotoRow | local ids |
| ci-btn-save | Ghi nhận | Primary | matchOk + sessionId |
| sc-checkin-detail | Chi tiết | detail | after save |

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- DES-MOB-LEAVE / DES-MOB-LOC-MISMATCH / DES-MOB-GPS-DENY
- reviewUrlIos=file://…/prototype/ios/index.html#sheet-checkin
- reviewUrlAndroid=file://…/prototype/android/index.html#sheet-checkin
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/sessions`
- POST `mobile-bff/api/v1/patrol/sessions/{id}/check-ins`
- T-BE: N/A (prior GAP-MOB-BFF-01 closed)

## Debt / next
- Next: QA optional re-e2e · Review re-check
- debt: GAP-QA-A11Y-SHEET-TAG-01 Should · Photo capture/upload P2 · plan-points BE P2
- verify: iOS xcodegen+xcodebuild iPhone 17 Pro PASS · Android assembleDebug PASS · BFF dotnet build PASS
