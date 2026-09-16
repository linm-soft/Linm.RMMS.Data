# Handoff compact — po

schemaVersion: 1
feature: supervise
packKind: list
role: po
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-12T09:46:46.000Z
taskId: task_d7e615af
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · keep list base · § Delta filter/map only
- packKind: list · Pattern: List + owner filter sheet · FormMode: none CRUD
- filter: sheet live · `route` GET · ngày client `CheckInAt` · **cấm** toast fake
- map: push sibling `patrol-map` · reset seg 0 · **cấm** toast · **cấm** auto-start pipeline
- detail: keep push supervise-detail · EmptyChrome live-only
- Grid AC / Report AC: **N/A** (native mobile)
- Leave: N/A dirty CRUD · fail = EmptyChrome + toast · **cấm** native alert
- mfe / be: native · BFF GET attendance-logs ± route · Step 4b N/A · fromDate P2
- open questions: none · GAP-MOB-SUP-01/02 Must · SUP-04 P2

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| btn-sup-filter | Lọc | Text → sheet | Must live |
| filterRoute | Tuyến | TextField | query `route` |
| filterDate | Ngày | DatePicker | client day |
| filterApply | Áp dụng | Primary | reload |
| filterClear | Xóa lọc | Ghost | clear+reload |
| segList | Danh sách check in | Segment 0 | owner |
| segMap | Bản đồ | Segment 1 | push patrol-map |
| cards | Rich check-in | feature card | GET ± filter |
| empty | EmptyChrome | empty | 0 / fail |

## Screens / zones (ids only)
- `#sc-supervise` · DES-MOB-SUPERVISE · List + owner sheet · `btn-sup-filter` · `sup-segment`
- navigate: `#sc-patrol-map` · supervise-detail (keep)
- peerStdUrl= — (native · cấm mfeStdUrl)
- Grid/Report AC= N/A · Leave= GAP-PO-LEAVE-01 toast/empty only

## API / tasks (ids only)
- GET `patrol/attendance-logs` ± `route` · page/pageSize · date client
- OUT P1: BE fromDate · invent supervise path · embed map
- T-*: Design update dual proto sheet+map CTA → SA keep proxy → Dev wire dual

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/po/requirement.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/supervise-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/supervise-real-data.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/STATUS.md
