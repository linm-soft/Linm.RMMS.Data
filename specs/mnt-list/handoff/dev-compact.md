# Handoff compact — dev

schemaVersion: 1
feature: mnt-list
packKind: list
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T04:45:00.000Z
taskId: task_53934dab
slash: /edit-mobile-feature
gap: cleanup_mock · GAP-MOB-EDIT-STATUS-01 · GAP-MOB-EDIT-ACT-01

## Decisions
- changeScope: edit_page (cleanup_mock parent)
- formPattern: list · hub row + rich cards · sibling CTAs nav/toast
- mfeStdUrl: none (native_dual)
- data: live-only · `FetchWorkOrdersOutcome` · empty = EmptyChrome · fail = toast · **cấm** `MntListCopy.demoItems`
- status: 1 text `Tình trạng xử lý: {label}` full width · **cấm** `LinmBadge` trùng
- actions: `#i-chat` `#i-sync` `#i-list` `#i-sum` flex:1 / weight(1f) dàn đều · tap 44
- search: client filter title/code/route/assign/team/meta
- demo fallback: **removed** — live-only pattern `asset-list`
- Step 4b: N/A — reuse GET `maintenance/work-orders`
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-mnt-list | Danh sách công việc | TopBar+Search | tab `.work` |
| mnt-search | Tìm kiếm | LinmSearchField | client filter |
| row-mnt-hub | Giao việc xử lý | LinmListRow | → estimate hub |
| card-mnt-* | Card công việc | LinmCard | status bar + actions |

## Screens / zones (ids only)
- DES-MOB-MNT-LIST / #sc-mnt-list
- reviewUrlIos=file://…/prototype/ios/index.html#sc-mnt-list
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-mnt-list
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/maintenance/work-orders?page=1&pageSize=50`
- FormMode↔API: hub/estimate → Estimate · chat → MntChat · progress → MntProgress · log → MntLog
- T-BE: N/A (proxy passthrough)

## VERIFY GATE
- iOS: xcodegen + xcodebuild dest iPhone 17 Pro → **BUILD SUCCEEDED**
- Android: `./gradlew :app:assembleDebug` → **BUILD SUCCESSFUL**
- BFF: `dotnet build` Linm.RMMS.Mobile.Bff → **0 Error**

## Debt
- GAP-F-MNT-MOB-01 AssignerName bind TeamName+AssigneeName (closed pattern)
- GAP-MOB-COPY-SEARCH-01 kit «Tìm» vs demo «Tìm kiếm công việc…» (Should)
- Siblings pending_confirm: estimate · mnt-chat · mnt-progress · mnt-log

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/mnt-list/implement/ios.md · android.md
- STATUS: specs/mnt-list/STATUS.md
- po: specs/mnt-list/po/requirement.md
- design: specs/mnt-list/ui/design.md · ux-analy.md · html-to-native-map.md
- task: specs/mnt-list/task/mnt-list.md
