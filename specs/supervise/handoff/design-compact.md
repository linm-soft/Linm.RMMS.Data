# Handoff compact — design

schemaVersion: 1
feature: supervise
packKind: list
role: design
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-12T09:55:00.000Z
taskId: task_69283465
autoApprove: ON
changeScope: edit_page
design_confirm: approve

## Decisions
- changeScope: edit_page · § Delta filter sheet live + map sibling push
- packKind: list · formPattern: N/A CRUD · owner filter sheet
- peerStdUrl: — · real_view_parity: v1 · **cấm** mfeStdUrl
- filter: sheet Tuyến+Ngày · Apply GET ±`route` · date client CheckInAt · **cấm** toast fake
- map: push `#sc-patrol-map` · reset seg 0 · **cấm** toast · **cấm** embed
- detail: keep push supervise-detail · EmptyChrome live-only
- Grid/Report AC: N/A · Leave: toast/empty only
- open questions: none · GAP-MOB-SUP-04 P2

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| btn-sup-filter | Lọc | Text → sheet | Must |
| filterRoute | Tuyến | TextField | query route |
| filterDate | Ngày | DatePicker | client day |
| filterApply | Áp dụng | Primary | reload |
| filterClear | Xóa lọc | Ghost | clear+reload |
| segList | Danh sách check in | Segment 0 | owner |
| segMap | Bản đồ | Segment 1 | push patrol-map |
| cards | Rich check-in | feature card | GET ± filter |
| empty | EmptyChrome | empty | 0 / fail |

## Screens / zones (ids only)
- `#sc-supervise` · DES-MOB-SUPERVISE · DES-MOB-SUP-NAV · SUP-SEG · SUP-FILTER · SUP-LIST · SUP-CARD
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/ios/index.html#sc-supervise`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/android/index.html#sc-supervise`
- peerStdUrl= — · navigate: `#sc-patrol-map` · supervise-detail

## API / tasks (ids only)
- GET `patrol/attendance-logs` ± `route` · page/pageSize · date client
- OUT P1: BE fromDate · invent supervise path · embed map
- T-*: SA keep proxy → Dev wire dual sheet+nav

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/ux-analy.md
- html-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/html-to-native-map.md
- demo-parity: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/review/demo-parity.md
- proto-ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/ios/index.html
- proto-android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/android/index.html
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/STATUS.md
