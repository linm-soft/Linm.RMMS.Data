# BFF endpoints — supervise (mobile list · Giám sát)

| | |
|---|---|
| feature | `supervise` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol domain |
| source | CTX `supervise.md` · `patrol.md` · `AttendanceLogsController` |
| **cấm** | invent `api/v1/supervise` · app `:5101` · ERP.* · Report domain |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — list `#sc-supervise`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| List check-in | GET | `patrol/attendance-logs` | proxy | `AttendanceLogsController.GetList` | CTX supervise §3 | query page/pageSize |
| Detail drill | GET | `patrol/attendance-logs/{id}` | proxy | `GetById` | P2 | tap row toast P1 |
| Filter nav | — | — | — | — | toast P1 | **không** API |
| Map segment | — | — | — | sibling `patrol-map` | toast P1 | **không** API |

## Query params (list)

`search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50 default)

## Response DTO (downstream)

`AttendanceLogDto`: `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note`

## Verify live

| Check | Result |
|-------|--------|
| `AttendanceLogsController` | `GET/POST/PUT/DELETE api/v1/patrol/attendance-logs` |
| Mobile.Bff `SuperviseController` | **không** |
| DOMAIN-MAP patrol | proxy catch-all |

## Cấm

- Invent supervise controller · Report `checkins` on mobile P1 · wallet API  
- App biết RMMS `:5101`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| generatedAt | 2026-08-19T15:00:00.000Z |
| contentHash | sha256:supervise-mobile-bff-20260819 |
