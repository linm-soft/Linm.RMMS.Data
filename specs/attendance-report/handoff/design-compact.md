# Handoff compact — design

schemaVersion: 1
feature: attendance-report
packKind: screen
role: design
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T15:11:25.000Z
taskId: task_52898ccc
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Full screen `#sc-attendance-report` · DES-MOB-ATT-RPT
- packKind: screen (đóng GAP-MOB-ATT-RPT-PACK-01)
- mfe / be: native · GET `patrol/attendance-logs` + client period · **cấm** invent `/attendance/report`
- real_view_parity: v1
- design_confirm: approve (autoApprove)
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Chấm công | LinmTopBar | iOS text+chevron · Android icon |
| periodSeg | Tuần/Tháng | LinmSegment | default Tuần |
| kpiDays | Ngày đủ công | KPI | days ≥2 |
| kpiChecks | Số lần chấm | KPI | count |
| kpiInZone | % Trong vùng | KPI | ratio / — |
| kpiOut | Ngoài vùng | KPI | InZone false |
| dayRow | Ngày · range · badge | LinmListRow | → attendance-day |
| emptyPeriod | Không có dữ liệu kỳ này | LinmEmptyChrome | |

## Screens / zones (ids only)
- entry `#sc-attendance` btnReport · target `#sc-attendance-report` · DES-MOB-ATT-RPT
- reviewUrlIos=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/ios/index.html#sc-attendance-report
- reviewUrlAndroid=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/android/index.html#sc-attendance-report
- peerStdUrl= — (native · cấm mfeStdUrl)
- real_view_parity=v1
- board: ios/index.html · android/index.html

## API / tasks (ids only)
- GET `patrol/attendance-logs` + client aggregate
- OUT: `/attendance/report` P2 · Excel/map · Step 4b N/A
- T-*: pending SA/TL

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/ux-analy.md
- html-to-native-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/html-to-native-map.md
- demo-parity: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/review/demo-parity.md
- prototype ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/ios/index.html
- prototype android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/android/index.html
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/STATUS.md
