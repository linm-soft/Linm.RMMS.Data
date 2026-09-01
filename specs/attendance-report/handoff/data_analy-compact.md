# Handoff compact — data_analy

schemaVersion: 1
feature: attendance-report
packKind: sheet
role: data_analy
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-01T00:48:12.000Z
taskId: task_cc8d9202
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Full screen `#sc-attendance-report` · DES-MOB-ATT-RPT
- mfe / be: native · mobile-bff · Patrol GetList · **cấm** invent `/attendance/report`
- real-data §A/B: PASS · map: none · progress: none
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| btnReport | Báo cáo | LinmHeroAction ghost | entry toast→wire |
| periodSeg | Tuần/Tháng | Segment | client filter |
| kpiDays | Ngày đủ công | KPI | derived |
| kpiChecks | Số lần chấm | KPI | derived |
| kpiInZone | % Trong vùng | KPI | InZone |
| kpiOut | Ngoài vùng | KPI | InZone false |
| dayRow | Ngày · range · badge | ListRow | → attendance-day |
| emptyPeriod | Không có dữ liệu kỳ này | EmptyChrome | |

## Screens / zones (ids only)
- entry `#sc-attendance` · target `#sc-attendance-report` · DES-MOB-ATT-RPT
- peerStdUrl= — (native · cấm mfeStdUrl)

## API / tasks (ids only)
- GET `patrol/attendance-logs` + client period aggregate
- OUT: `/attendance/report` MISSING P2 · Excel/map web only
- T-*: pending PO/TL

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/attendance-report-control-hint.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/attendance-report-bff-endpoints.md
- action-tree: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/attendance-report-action-tree.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/attendance-report-real-data.md
- ctx: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/attendance-report.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/STATUS.md
