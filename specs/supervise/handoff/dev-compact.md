# Handoff compact — dev

schemaVersion: 1
feature: supervise
packKind: list
role: dev
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T02:42:00.000Z
taskId: task_65931a17
slash: /edit-mobile-feature
gap: cleanup_mock

## Decisions
- changeScope: edit_page
- formPattern: N/A (list only · tap → detail sibling · filter/map toast P1)
- mfeStdUrl: none (native)
- live-only: removed `SuperviseCopy.demoItems` iOS+Android
- empty: EmptyChrome `sup-empty` (`supervise.empty.*`)
- fail: empty + toast `supervise.toast.loadFail` (**cấm** «Đang dùng dữ liệu mẫu»)
- org: mapper `SuperviseCopy.orgFallback` when live Note empty (GAP-MOB-SUP-03)
- seed: GET `patrol/attendance-logs` · EmptyChrome OK nếu tenant rỗng · Step 4b N/A
- open questions: supervise-detail OfflineDemo = epic child riêng

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-supervise | Giám sát tuần đường | TopBar+Segment+cards | live GET attendance-logs |
| sup-empty | Chưa có check-in | EmptyChrome | GET OK empty |
| btn-sup-filter | Lọc | toast | P1 toast only |
| sup-segment | Danh sách / Bản đồ | Segment | idx1 → toast reset 0 |
| sup-card-* | check-in card | composition | tap → detail |

## Screens / zones (ids only)
- DES-MOB-SUPERVISE / #sc-supervise
- reviewUrlIos=file://…/prototype/ios/index.html#sc-supervise
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-supervise
- peerStdUrl=—

## API / tasks (ids only)
- GET patrol/attendance-logs · page=1 · pageSize=50
- FormMode↔API: N/A list
- T-BE: N/A · reuse Signed AttendanceLogs
- debt: supervise-detail OfflineDemo · GAP-QA-A11Y-SUP-FILTER-01 · GAP-QA-SUP-TAB-01 Defer

## VERIFY
- iOS xcodegen + xcodebuild iPhone 17 Pro PASS
- Android assembleDebug PASS
- BFF dotnet build PASS
