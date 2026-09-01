# Handoff compact — dev

schemaVersion: 1
feature: patrol-home
packKind: hub
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T05:12:00.000Z
taskId: task_22fa5cba
slash: /edit-mobile-feature
gap: cleanup_mock · GAP-MOB-EDIT-STATUS-01

## Decisions
- changeScope: edit_page (cleanup_mock parent mobile-cleanup-mock)
- formPattern: hub · hero + today list + quick rows · sibling nav/toast
- mfeStdUrl: none (native_dual)
- data: live-only · `FetchPatrolSessionsOutcome` · empty = EmptyChrome today · fail = toast · **cấm** `PatrolHomeCopy.demoToday`/`demoActive` on patrol-home
- activeSession: `PatrolHomeCopy.emptyActive` when no «Đang tuần»
- siblings (cam-patrol · field-reflect · …): `itemsOrDemo` extension until their cleanup tasks
- Step 4b: N/A — reuse GET `patrol/sessions`
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-home | Tuần đường | TopBar+Segment | tab field |
| patrol-hero | Ca đang chạy | LinmHeroCard | live or emptyActive |
| patrol-today-empty | Không có phiên hôm nay | EmptyChrome | GET ok empty |
| row-today-* | Today rows | LinmListRow | GET sessions |
| row-quick-* | Quick actions | LinmListRow | sibling nav/toast |

## Screens / zones (ids only)
- DES-MOB-PAT-HOME / #sc-patrol-home
- reviewUrlIos=file://…/prototype/ios/index.html#sc-patrol-home
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-patrol-home
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/sessions?page=1&pageSize=50`
- FormMode↔API: hub only · siblings via quick rows
- T-BE: N/A (proxy passthrough)

## VERIFY GATE
- iOS: xcodegen + xcodebuild dest iPhone 17 Pro → **BUILD SUCCEEDED**
- Android: `./gradlew :app:assembleDebug` → **BUILD SUCCESSFUL**
- BFF: `dotnet build` Linm.RMMS.Mobile.Bff → **0 Error**

## Debt
- Siblings still use `itemsOrDemo` (cam-patrol · patrol-checkin · …) — pending cleanup_mock P1
- GAP-QA-A11Y-TAB-FIELD-01 — iOS Maestro tab-field · DEFER non-block

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/patrol-home/implement/ios.md · android.md
- STATUS: specs/patrol-home/STATUS.md
- po: specs/patrol-home/po/requirement.md
- design: specs/patrol-home/ui/design.md · ux-analy.md
