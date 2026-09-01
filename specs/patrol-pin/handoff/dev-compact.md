# Handoff compact — dev

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T07:25:00.000Z
taskId: task_c9fd5cec
slash: /edit-mobile-feature
gap: cleanup_mock · GAP-MOB-EDIT-DEMO-01

## Decisions
- changeScope: edit_page (cleanup_mock parent mobile-cleanup-mock)
- formPattern: sheet · pin CTA hub+map · GpsDeny modal (no Create/Edit/View/Copy forms)
- mfeStdUrl: none (native_dual)
- data: live-only toast route từ GET `patrol/sessions` active · empty = `patrol.empty.active.route` · fail = `cam.toast.sessionFail` · **cấm** `demoRoute` / itemsOrDemo / nextDemoTitle on pin path
- Step 4b: N/A — reuse sessions · BE empty OK
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí | Primary+mappin | hub+map CTA |
| DES-MOB-GPS-DENY | GPS deny | Modal Primary/Secondary | clipboard guide |
| toast-pin-ok | Pin success | LinmToast | live Route±m |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · DES-MOB-CI-PIN-HERE · DES-MOB-GPS-DENY
- reviewUrlIos=file://…/prototype/ios/index.html
- reviewUrlAndroid=file://…/prototype/android/index.html
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/sessions`
- T-BE: N/A (proxy)

## Debt / next
- Next: QA optional re-e2e · epic child DONE
- debt: nextDemoTitle const leftover in PatrolMapOverlay (unused pin path) · gis-map sibling owns map demo overlay
- verify: iOS xcodegen+xcodebuild iPhone 17 Pro PASS · Android assembleDebug PASS · BFF dotnet build PASS
