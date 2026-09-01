# Handoff compact — dev

schemaVersion: 1
feature: incident-list
packKind: list
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T04:15:00.000Z
taskId: task_3a718e5d
slash: /edit-mobile-feature
gap: GAP-MOB-EDIT-STATUS-01 · GAP-MOB-EDIT-ACT-01

## Decisions
- changeScope: new_page
- formPattern: list + FAB create · card actions toast/nav sibling
- mfeStdUrl: none (native_dual)
- status: 1 text `Trạng thái: {label}` full width dưới `.rc-main` · **cấm** `LinmBadge` trùng
- actions: 4 nút `#i-chat` `#i-briefcase` `#i-list` `#i-mappin` flex:1 / weight(1f) dàn đều · tap 44
- search: client filter title/code/route/type/loc/person
- demo fallback: 2 SSOT cards on GET fail/empty
- Step 4b: N/A — reuse GET `incident/incidents`
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-incident-list | Danh sách sự cố | TopBar+Segment+Search | tab `.incident` |
| inc-list-search | Tìm kiếm | LinmSearchField | client filter |
| fab-inc-create | Tạo sự cố | LinmFab | → `incident-create` |
| card-inc-* | Card sự cố | LinmCard | status bar + 4 actions |
| row-inc-banner-vis | Banner VIS | LinmListRow | → vis-capture |

## Screens / zones (ids only)
- DES-MOB-INC-LIST / #sc-incident-list
- reviewUrlIos=file://…/prototype/ios/index.html#sc-incident-list
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-incident-list
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/incident/incidents?page=1&pageSize=50`
- FormMode↔API: create → incident-create screen · detail → incident-detail · chat → incident-chat
- T-BE: N/A (proxy passthrough)

## VERIFY GATE
- iOS: xcodegen + xcodebuild dest iPhone 17 Pro → **BUILD SUCCEEDED**
- Android: `./gradlew :app:assembleDebug` → **BUILD SUCCESSFUL**
- BFF: `dotnet build` Linm.RMMS.Mobile.Bff → **0 Error**

## Debt
- GAP-MOB-INC-LIST-THUMB-01 thumb placeholder DEFER
- GAP-MOB-INC-LIST-PLACE-01 · GAP-MOB-INC-LIST-ORG-01 bind DEFER
- Review Should: GAP-MOB-COPY-SEARCH-01 · GAP-MOB-A11Y-FAB-01
- Siblings pending_confirm: vis-capture · incident-detail · incident-chat

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/incident-list/implement/ios.md · android.md
- STATUS: specs/incident-list/STATUS.md
- po: specs/incident-list/po/requirement.md
- design: specs/incident-list/ui/design.md · ux-analy.md · html-to-native-map.md
- task: specs/incident-list/task/incident-list.md
