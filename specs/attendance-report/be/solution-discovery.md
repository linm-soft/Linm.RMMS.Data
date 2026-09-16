# SA — Solution — attendance-report

> Status: **confirmed** · `/edit-mobile-feature` 2026-09-16

| | |
|--|--|
| Feature | `attendance-report` |
| Title | [Mobile] [Chấm công] -> Báo cáo công |
| Role | `sa` |

## API P1

| Method | Path | Notes |
|--------|------|-------|
| GET | `patrol/attendance-logs?page=1&pageSize=200` | BFF proxy · client period filter · **cấm** invent `/attendance/report` |

Period: Tuần = startOfWeek(Mon) → now · Tháng = startOfMonth → now.  
KPI derived: days ≥2 · checks · inZone% · out (`InZone==false`).  
Fail → toast + empty UI live-only · **cấm** fake 200 · **cấm** demo rows (khớp hub/day cleanup).

## Nav

Hub `LinmHeroAction` Báo cáo → push `#sc-attendance-report`.  
Day row → reuse `attendance-day`. Back → hub.

## Step 4b

**N/A**
