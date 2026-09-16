# Handoff compact — dev

schemaVersion: 1
feature: patrol-history
packKind: list
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T05:30:00.000Z
taskId: task_430bde31
slash: /edit-mobile-feature
gap: cleanup_mock · GAP-MOB-EDIT-DEMO-01

## Decisions
- changeScope: edit_page (cleanup_mock parent mobile-cleanup-mock)
- formPattern: list · search client filter · row tap → detail push · filter toast
- mfeStdUrl: none (native_dual)
- data: live-only · `FetchPatrolHistoryOutcome` · empty = EmptyChrome · fail = toast `patrol.history.toast.loadFail` · **cấm** `PatrolHistoryCopy.demoItems`
- search: client filter code/route/patrolType/status
- Step 4b: N/A — reuse GET `patrol/sessions`
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-history | Lịch sử ca | TopBar+Search | push from hub |
| history-search | Tìm | LinmSearchField | client filter |
| row-history-* | Session rows | LinmListRow | badge 4 trạng thái · chevron |
| history-list-empty | Chưa có lịch sử ca | EmptyChrome | GET ok empty |

## Screens / zones (ids only)
- DES-MOB-PAT-LIST / #sc-patrol-history
- reviewUrlIos=file://…/prototype/ios/index.html#sc-patrol-history
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-patrol-history
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/sessions?page=1&pageSize=50`
- FormMode↔API: list only · tap row → patrol-detail push
- T-BE: N/A (proxy passthrough)

## VERIFY GATE
- iOS: xcodegen + xcodebuild dest iPhone 17 Pro → **BUILD SUCCEEDED**
- Android: `./gradlew :app:assembleDebug` → **BUILD SUCCESSFUL**
- BFF: `dotnet build` Linm.RMMS.Mobile.Bff → **0 Error**

## Debt
- Sibling `patrol-detail` still has demo timeline — pending cleanup_mock P1
- e2e re-run deferred — role Dev **cấm** e2e

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/patrol-history/implement/ios.md · android.md
- STATUS: specs/patrol-history/STATUS.md
- po: specs/patrol-history/po/requirement.md
- design: specs/patrol-history/ui/design.md · ux-analy.md
