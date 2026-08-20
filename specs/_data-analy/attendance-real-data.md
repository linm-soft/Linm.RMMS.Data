# Real-data bind — attendance (mobile)

| | |
|---|---|
| feature | `attendance` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T20:25:00.000Z` |
| taskId | `task_9035ee40` |

## §A Resource

| Resource | Owner | Table |
|----------|-------|-------|
| AttendanceLog | Patrol | `rmms_attendance_logs` |
| RoadRoute | Integration/Master seed | validate route `QL.1` |

## §B Bind (khớp attendance-bff-endpoints.md)

| Zone | Method | Path | Map → UI |
|------|--------|------|----------|
| 7-day list | GET | `patrol/attendance-logs` | group by local day → `LinmListRow` |
| Chấm vào | POST | `patrol/attendance-logs` | hero title → Đã chấm · refresh list |
| Báo cáo | — | — | toast only |

## §C Field map

| DTO | UI |
|-----|-----|
| CheckInAt | day title + time range sub |
| Status | badge Đủ công / Nghỉ / Lệch zone |
| Lat/Lng | hero meta after fix |
| UserName | POST body from auth |

## §D Empty / fail / offline

| Case | UI |
|------|-----|
| GET empty | AttendanceCopy.demoDays (3 rows DES-MOB-ATT) |
| GET fail / offline | same demo · screen **mở** |
| POST fail | toast error · keep Chưa chấm |
| GPS deny | toast locDeny · no POST |

## §E Progress

| Signal | Source |
|--------|--------|
| isLoading | appear GET · check-in POST |
| heroCheckedIn | any log today for current user / successful POST |

## §F Cấm

- Mock-only ship without bind attempt  
- Invent report/zones endpoints  
- Watermark / process text on UI  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| generatedAt | 2026-08-19T20:25:00.000Z |
| contentHash | sha256:attendance-mobile-real-20260819 |
