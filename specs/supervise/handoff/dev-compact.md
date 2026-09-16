# Handoff compact — dev

schemaVersion: 1
feature: supervise
packKind: list
role: dev
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-12T10:20:00.000Z
taskId: task_a7ad9582
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · filter sheet live + map sibling push dual
- packKind: list · formPattern: N/A CRUD · owner LinmSheet
- mfeStdUrl: — (native · **cấm** mfeStdUrl)
- build: iOS xcodegen+iPhone17Pro **PASS** · Android assembleDebug **PASS** · BFF dotnet **PASS**
- APIs: GET `patrol/attendance-logs` ±`route` · page/pageSize · date client CheckInAt · Step 4b N/A
- debt: GAP-MOB-SUP-04 fromDate P2 · iPad smoke DEFER
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| btn-sup-filter | Lọc | Text → sheet | live |
| filterRoute | Tuyến | TextField | query route |
| filterDate | Ngày | DatePicker | client day |
| filterApply | Áp dụng | Primary | API-01 |
| filterClear | Xóa lọc | Ghost | clear+reload |
| segMap | Bản đồ | Segment 1 | push patrol-map |
| cards | Rich check-in | feature card | detail keep |
| empty | EmptyChrome | empty | 0 / fail |

## Screens / zones (ids only)
- `#sc-supervise` · SUP-FILTER · SUP-LIST · SUP-CARD · `#filter-sheet`
- navigate: `#sc-patrol-map` · supervise-detail keep
- peerStdUrl= — · mfeStdUrl= —

## API / tasks (ids only)
- API-01 GET `patrol/attendance-logs` ±`route` · client date
- T-IOS-SUP-FILTER · T-IOS-SUP-MAP-NAV · T-AND-SUP-FILTER · T-AND-SUP-MAP-NAV **done**
- T-BE n/a · T-QA-* queued

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/implement/android.md
- ui-review: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/review/ui-review.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/STATUS.md
