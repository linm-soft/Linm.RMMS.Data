# BFF endpoints — supervise (mobile list · Giám sát)

| | |
|---|---|
| feature | `supervise` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol domain |
| source | CTX `supervise.md` · `AttendanceLogsController` · edit filter GAP 2026-09-12 |
| taskId | `task_82b70c41` |
| **cấm** | invent `api/v1/supervise` · app `:5101` · ERP.* · Report domain |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta Current vs New

| Action | Current | New |
|--------|---------|-----|
| List | GET page/pageSize | GET + optional **`route`** |
| Filter ngày | — (toast) | **client** on `CheckInAt` · **không** new BE param P1 |
| Filter nav | no API | sheet triggers list GET |
| Map segment | no API | nav sibling · **không** attendance-logs map |

## Table — list `#sc-supervise`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| List check-in | GET | `patrol/attendance-logs` | proxy | `AttendanceLogsController.GetList` | CTX supervise §3 | `page`/`pageSize` |
| Filter by tuyến | GET | `patrol/attendance-logs?route=` | proxy | `GetList` `route` | BE live | exact match |
| Filter by ngày | — | same GET then client | — | `CheckInAt` local day | real-data §B | BE fromDate **P2** |
| Detail drill | GET | `patrol/attendance-logs/{id}` | proxy | `GetById` | supervise-detail | wired |
| Map segment | — | — | — | sibling `patrol-map` | nav push | **không** API list |

## Query params (list)

| Param | P1 use | Note |
|-------|--------|------|
| `route` | **yes** — filter sheet | Trim · omit if empty |
| `page` / `pageSize` | yes · default 50 | AllowedPageSizes BE |
| `search` / `status` / `onlyOutZone` | optional unused UI P1 | passthrough OK |
| `fromDate` / `toDate` | **no** | **MISSING** BE · GAP-MOB-SUP-04 P2 |

## Response DTO (downstream)

`AttendanceLogDto`: `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note`

## Verify live

| Check | Result |
|-------|--------|
| `AttendanceLogsController.GetList` | `search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` |
| Mobile.Bff `SuperviseController` | **không** — catch-all proxy |
| DOMAIN-MAP patrol | proxy catch-all |
| Date query BE | **absent** → client filter |

## Cấm

- Invent supervise controller · Report `checkins` on mobile P1 · wallet API  
- App biết RMMS `:5101`  
- Toast-only filter pretending live  
- Invent `fromDate` on BFF without BE (SA/Step 4b P2 only)

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.26 |
| generatedAt | 2026-09-12T09:20:00.000Z |
| contentHash | sha256:supervise-mobile-bff-filter-20260912 |
| priorHash | sha256:supervise-mobile-bff-20260819 |
