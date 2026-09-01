# Handoff compact — po

schemaVersion: 1
feature: attendance-report
packKind: screen
role: po
status: confirmed
skillVersion: 2026.08.31.2
writtenAt: 2026-09-01T08:53:03.000Z
taskId: task_6ae4da65
autoApprove: ON

## Decisions
- changeScope: new_page
- packKind: **screen** (đóng GAP-MOB-ATT-RPT-PACK-01 · scan `sheet` = queue label)
- formPattern: Full screen `#sc-attendance-report` · DES-MOB-ATT-RPT · push từ hub Báo cáo
- mfe / be: native · mobile-bff · GET `patrol/attendance-logs` + client period aggregate · **cấm** invent `/attendance/report` (P2)
- default period: Tuần · Month = startOfMonth→today
- day tap: reuse `attendance-day` · **cấm** re-enqueue
- Excel/map: OUT P1 · Step 4b N/A
- open questions: none (autoApprove chốt §7 requirement)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| btnReport | Báo cáo | LinmHeroAction ghost | entry wire push |
| periodSeg | Tuần/Tháng | LinmSegment | client filter |
| kpiDays | Ngày đủ công | KPI | days ≥2 |
| kpiChecks | Số lần chấm | KPI | count logs |
| kpiInZone | % Trong vùng | KPI | ratio / — |
| kpiOut | Ngoài vùng | KPI | InZone false |
| dayRow | Ngày · range · badge | LinmListRow | → attendance-day |
| emptyPeriod | Không có dữ liệu kỳ này | LinmEmptyChrome | |

## Screens / zones (ids only)
- entry `#sc-attendance` · target `#sc-attendance-report` · DES-MOB-ATT-RPT
- peerStdUrl= — (native · cấm mfeStdUrl)
- reuse: `attendance` back · `attendance-day` day tap

## API / tasks (ids only)
- GET `patrol/attendance-logs` + client period aggregate
- OUT: `/attendance/report` MISSING P2 · Excel/map web only · hub POST
- T-*: pending TL
- DoD: toast→push · period · KPI · day list · drill · GET live

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/po/requirement.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/attendance-report-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/attendance-report-real-data.md
- prior compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/handoff/data_analy-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/STATUS.md
