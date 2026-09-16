# Handoff compact — dev

schemaVersion: 1
feature: attendance
packKind: hub
role: dev
status: done
skillVersion: 2026.08.20.03
writtenAt: 2026-09-01T08:34:20.000Z
taskId: task_242d0372
slash: /edit-mobile-feature
gap: cleanup_mock

## Decisions
- changeScope: edit_page
- formPattern: N/A hub (check-in hero = create · day = view sibling)
- mfeStdUrl: none (native)
- live-only: removed `AttendanceCopy.demoUser` iOS+Android
- POST userName: `auth.lastWho()` (displayName → login) · blank → fail toast
- GET empty/fail: empty days (no demoDays)
- seed: profile name from login · attendance-logs via POST check-in · Step 4b N/A
- open questions: report toast P1 · sibling report pending_confirm

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-attendance | Chấm công hub | LargeTitle+Seg+Hero+List | live GET/POST |
| att-segment | Tuần đường / Chấm công | Segment | idx0 pop |
| att-hero | Chấm vào / Báo cáo | Hero actions | check-in live · report toast |
| att-day-* | day row | ListRow chevron | tap → day-detail |

## Screens / zones (ids only)
- DES-MOB-ATT / #sc-attendance
- reviewUrlIos=file://…/prototype/ios/index.html#sc-attendance
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-attendance
- peerStdUrl=—

## API / tasks (ids only)
- GET+POST patrol/attendance-logs
- FormMode↔API: check-in POST body userName/route/lat/lng
- T-BE: N/A · reuse Signed AttendanceLogs
- debt: report sibling · PrivacyInfo P2

## VERIFY
- iOS xcodegen + xcodebuild iPhone 17 Pro PASS
- Android assembleDebug PASS
- BFF dotnet build PASS
