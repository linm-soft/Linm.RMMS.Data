# Handoff compact — team_lead

schemaVersion: 1
feature: supervise
packKind: list
role: team_lead
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-12T10:05:00.000Z
taskId: task_f009ee98
autoApprove: ON
changeScope: edit_page
route_confirm: route_a

## Decisions
- changeScope: edit_page · § Delta filter live + map sibling nav
- packKind: list · formPattern: N/A CRUD · owner filter sheet
- route_a: Home/patrol-home → `#sc-supervise` · filter sheet · map push · detail keep
- mfe / be: native · BFF GET attendance-logs ±`route` · Step 4b N/A · T-BE n/a
- date: client CheckInAt · EmptyChrome live-only · **cấm** toast fake / demo / invent supervise
- open questions: none · GAP-MOB-SUP-04 P2

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| btn-sup-filter | Lọc | Text → sheet | live |
| filterRoute | Tuyến | TextField | query route |
| filterDate | Ngày | DatePicker | client day |
| filterApply | Áp dụng | Primary | API-01 |
| filterClear | Xóa lọc | Ghost | clear+reload |
| segList | Danh sách check in | Segment 0 | owner |
| segMap | Bản đồ | Segment 1 | push patrol-map |
| cards | Rich check-in | feature card | detail keep |
| empty | EmptyChrome | empty | 0 / fail |

## Screens / zones (ids only)
- `#sc-supervise` · DES-MOB-SUPERVISE · SUP-FILTER · SUP-LIST · SUP-CARD
- navigate: `#sc-patrol-map` · supervise-detail keep
- peerStdUrl= —

## API / tasks (ids only)
- API-01 GET `patrol/attendance-logs` ±`route` · page/pageSize · date client
- FormMode↔API: List/Apply/Clear→API-01 · Map=nav · Detail=keep
- T-IOS-SUP-FILTER · T-IOS-SUP-MAP-NAV · T-AND-SUP-FILTER · T-AND-SUP-MAP-NAV
- T-UI-FILTER-01 mapped→T-*-SUP-FILTER · T-BE/T-KIT n/a
- deps: SA · route_a · **devSlash** iOS=`/agent-dev-ios` · Android=`/agent-dev-android`
- T-QA-TAB-01 · T-QA-FILTER-01 · T-QA-SUPERVISE (queued QA)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/task/supervise.md
- sa-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/handoff/sa-compact.md
- design-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/handoff/design-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/STATUS.md
