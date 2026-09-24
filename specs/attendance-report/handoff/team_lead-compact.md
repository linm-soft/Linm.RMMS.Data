# Handoff compact — team_lead

schemaVersion: 1
feature: attendance-report
packKind: screen
role: team_lead
status: done
skillVersion: 2026.09.12
writtenAt: 2026-09-20T00:27:46.000Z
taskId: task_88dc1e38
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Full screen `#sc-attendance-report` · DES-MOB-ATT-RPT
- mfe / be: native · GET `patrol/attendance-logs` pageSize 200 + client period · **cấm** invent `/attendance/report` · Step 4b N/A
- route_confirm: route_a (autoApprove) — hub hero Báo cáo push · back hub · day → `attendance-day` · không URL mới
- repos: ios `Linm.RMMS.Mobile.iOS` · android `Linm.RMMS.Mobile.Android` · không scaffold
- T-BE: n/a · T-KIT: n/a (reuse) · T-QA-TAB-01: n/a (segment, không tab)
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Chấm công | LinmTopBar | back hub |
| periodSeg | Tuần/Tháng | LinmSegment | default Tuần |
| kpiDays | Ngày đủ công | KPI | days ≥2 |
| kpiChecks | Số lần chấm | KPI | count |
| kpiInZone | % Trong vùng | KPI | ratio / — |
| kpiOut | Ngoài vùng | KPI | InZone false |
| dayRow | Ngày · range · badge | LinmListRow | → attendance-day |
| emptyPeriod | Không có dữ liệu kỳ này | LinmEmptyChrome | fail = toast + empty |

## Screens / zones (ids only)
- entry `#sc-attendance` btnReport · target `#sc-attendance-report` · DES-MOB-ATT-RPT
- peerStdUrl= — (native · cấm mfeStdUrl)
- reviewUrlIos=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/ios/index.html#sc-attendance-report
- reviewUrlAndroid=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/android/index.html#sc-attendance-report

## API / tasks (ids only)
- FormMode↔API: n/a (screen read) · GET `patrol/attendance-logs` · client aggregate
- T-IOS-ATT-RPT · devSlash `/agent-dev-ios` · skills `/dev-ios-swiftui` · deps none
- T-AND-ATT-RPT · devSlash `/agent-dev-android` · skills `/dev-android-compose` · deps none
- T-BE n/a · T-KIT n/a
- DoD iOS: xcodebuild iPhone 17 Pro Max + iPad Pro 13-inch (M5)
- DoD Android: gradlew assembleDebug

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/task/attendance-report.md
- sa: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/be/solution-discovery.md
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/design.md
- html-to-native-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/html-to-native-map.md
- requirement: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/po/requirement.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/STATUS.md
