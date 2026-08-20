# BFF endpoints — attendance (mobile · Chấm công)

| | |
|---|---|
| feature | `attendance` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol domain |
| source | CTX `attendance.md` · `AttendanceLogsController` · DES-MOB-ATT |
| **cấm** | invent `api/v1/attendance/*` report/zones · ERP.* · app `:5101` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — `#sc-attendance`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| History 7d | GET | `patrol/attendance-logs` | proxy | `AttendanceLogsController.GetList` | CTX §3 | page/pageSize |
| Chấm vào | POST | `patrol/attendance-logs` | proxy | `CreateAsync` | CTX §3 | GPS body |
| Báo cáo | — | — | — | — | toast P1 | API report **MISSING** P2 |
| Day detail | GET | `patrol/attendance-logs/{id}` | proxy | GetById | toast P1 | |

## Query params (list)

`search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50 default)

## POST body (`CreateAttendanceLogRequest`)

| Field | Type | P1 value |
|-------|------|----------|
| userName | string | auth `lastDisplayName` / demo «Nguyễn Văn A» |
| route | string | `QL.1` (seed · **cấm** QL.22) |
| checkInAt | datetime | now UTC |
| kmPoint | string? | optional |
| lat / lng | decimal | GPS fix |
| inZone | bool | `true` default P1 |
| status | string | `Đúng tuyến` |
| note | string? | optional |

## Response DTO

`AttendanceLogDto`: `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note`

## Verify live

| Check | Result |
|-------|--------|
| `AttendanceLogsController` | GET/POST/PUT/DELETE `api/v1/patrol/attendance-logs` |
| Mobile.Bff feature controller | **không** — catch-all |
| DOMAIN-MAP patrol | proxy OK |
| Step 4b | **N/A** — endpoints live |

## Cấm

- Invent `/attendance/report` · `/attendance/zones` on mobile P1  
- App biết RMMS `:5101`  
- Fork path khác Supervise GET (cùng path OK)

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| generatedAt | 2026-08-19T20:25:00.000Z |
| contentHash | sha256:attendance-mobile-bff-20260819 |
