# Team lead — Task — attendance-report

> Status: **confirmed** · `/edit-mobile-feature` 2026-09-16 · complete chấm công

| | |
|--|--|
| Feature | `attendance-report` |
| Title | [Mobile] [Chấm công] -> Báo cáo công |
| Role | `team_lead` |
| route_confirm | **route_a** — hub `#sc-attendance` hero **Báo cáo** → push `#sc-attendance-report` · Back → hub · tap day → `attendance-day` + `dayKey` · **cấm** invent `/attendance/report` |
| packKind | `screen` |
| stack | `native_dual` |
| Step 4b | **N/A** — reuse GET `patrol/attendance-logs` pageSize 200 + client period |

## Tasks

| id | OS | notes |
|----|----|-------|
| T-IOS-ATT-RPT | iOS | `AttendanceReportView` · xcodebuild iPhone 17 Pro **PASS** |
| T-AND-ATT-RPT | Android | `AttendanceReportScreen` · assembleDebug **PASS** |
| T-BE | — | **n/a** |

## Notes

- Period Tuần/Tháng · KPI 4 · day list · EmptyChrome live-only on fail/empty.
- Kit: `LinmTopBar` · `LinmSegment` · `LinmKpiStrip` · `LinmListRow` · `LinmToast`.
