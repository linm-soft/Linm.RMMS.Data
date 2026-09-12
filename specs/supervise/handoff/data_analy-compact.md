# Handoff compact — data_analy

schemaVersion: 1
feature: supervise
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-12T09:13:30.000Z
taskId: task_82b70c41
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · keep prior PO/Design/SA · § Delta filter/map only
- packKind: list · `#sc-supervise` · DES-MOB-SUPERVISE
- filter: sheet live · `route` GET query · ngày = client `CheckInAt` · **cấm** toast fake
- map: push sibling `patrol-map` (native exists) · **cấm** toast · BE fromDate = P2
- mfe / be: native · mobile-bff · Patrol attendance-logs · **cấm** invent `/supervise`
- real-data §A/B: PASS · UNCLEAR: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| btn-sup-filter | Lọc | Text button → sheet | live Apply |
| filterRoute | Tuyến | TextField | query `route` |
| filterDate | Ngày | DatePicker | client day |
| segList | Danh sách check in | Segment 0 | owner |
| segMap | Bản đồ | Segment 1 | push patrol-map |
| cards | Rich check-in | feature card | GET ± filter |
| empty | EmptyChrome | empty | 0 / fail |

## Screens / zones (ids only)
- `#sc-supervise` · DES-MOB-SUPERVISE · `btn-sup-filter` · `sup-segment`
- sibling `#sc-patrol-map` · detail supervise-detail (keep)
- peerStdUrl= — (native · cấm mfeStdUrl)

## API / tasks (ids only)
- GET `patrol/attendance-logs` ± `route` · page/pageSize
- OUT P1: BE fromDate/toDate · invent supervise path
- T-*: pending PO edit delta

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/supervise-control-hint.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/supervise-bff-endpoints.md
- action-tree: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/supervise-action-tree.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/supervise-real-data.md
- ctx: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/supervise.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/STATUS.md
