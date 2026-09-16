# Handoff compact — sa

schemaVersion: 1
feature: supervise
packKind: list
role: sa
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-12T10:00:00.000Z
taskId: task_2ac8625f
autoApprove: ON
changeScope: edit_page
solution_confirm: approve

## Decisions
- changeScope: edit_page · § Delta filter live + map sibling push
- packKind: list · FormMode: none CRUD · formPattern: N/A
- mfe / be: native · BFF proxy · GET `patrol/attendance-logs` ±`route` · **cấm** invent supervise · Step 4b N/A
- FormMode↔API: List/Apply/Clear → API-01 · Map=nav `#sc-patrol-map` · Detail=keep GET `{id}`
- entity/migration: none · TZ=tz_client_filter · XCO=xco_na · SHARE=n/a
- Offline: EmptyChrome+toast · GPS n/a list · Store n/a · fromDate P2
- open questions: none · GAP-MOB-SUP-04 P2

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| btn-sup-filter | Lọc | Text → sheet | live Apply |
| filterRoute | Tuyến | TextField | query route |
| filterDate | Ngày | DatePicker | client CheckInAt |
| filterApply | Áp dụng | Primary | API-01 |
| filterClear | Xóa lọc | Ghost | clear+reload |
| segList | Danh sách check in | Segment 0 | owner |
| segMap | Bản đồ | Segment 1 | push patrol-map |
| cards | Rich check-in | feature card | GET ± filter |
| empty | EmptyChrome | empty | 0 / fail |

## Screens / zones (ids only)
- `#sc-supervise` · DES-MOB-SUPERVISE · SUP-FILTER · SUP-LIST · SUP-CARD
- navigate: `#sc-patrol-map` · supervise-detail keep
- peerStdUrl= —

## API / tasks (ids only)
- API-01 GET `patrol/attendance-logs` ±`route` · page/pageSize · date client
- FormMode↔API: List/Apply/Clear→API-01 · Map=nav · Detail=GET id
- OUT P1: BE fromDate · invent supervise · embed map · Step 4b
- T-*: T-IOS/AND-SUP-FILTER · T-IOS/AND-SUP-MAP-NAV · T-UI-FILTER-01 · T-BE n/a

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/be/solution-discovery.md
- design-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/handoff/design-compact.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/supervise-bff-endpoints.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/STATUS.md
