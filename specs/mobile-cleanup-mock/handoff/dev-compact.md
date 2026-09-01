# Handoff compact — dev

schemaVersion: 1
feature: mobile-cleanup-mock
packKind: hub
role: dev
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T10:10:00.000Z
taskId: task_a33dfede

## Decisions
- changeScope: edit_page · epic residual mock sweep (asset-detail/adjust · incident-list · estimate)
- formPattern: N/A (list/detail live-only) · estimate form keep live seed only
- mfeStdUrl: — (native · **cấm**)
- build PASS: iOS xcodegen + LinmRmms iPhone 17 Pro · Android assembleDebug · BFF dotnet
- open questions: none
- debt: patrol-history-detail OfflineDemo · itemsOrDemo siblings (field-reflect/incident-create/asset-collect)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| asset-detail | GET by id | — | loadFailed/notFound EmptyChrome |
| asset-adjust | GET list+search | SearchInput | loadFailed → [] + toast |
| incident-list | GET list | SearchInput client | empty EmptyChrome · FAB create |
| estimate | seed from incident | Form | no demoFromIncident |

## Screens / zones (ids only)
- `#sc-asset-detail` · `#sc-asset-adjust` · `#sc-incident-list` · `#sc-estimate`
- reviewUrl= — · peerStdUrl= —

## API / tasks (ids only)
- GET `asset/road-assets` · `asset/road-assets/{id}` · `incident/incidents` · estimate seed
- Step 4b: N/A · BE empty OK
- task_a33dfede epic closeout

## UNCLEAR
- none

## Full paths (Read only if needed)
- STATUS: `specs/mobile-cleanup-mock/STATUS.md`
- implement: `specs/mobile-cleanup-mock/implement/{ios,android}.md`
