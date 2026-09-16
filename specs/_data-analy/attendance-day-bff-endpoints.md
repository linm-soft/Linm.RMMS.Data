# BFF endpoints — attendance-day (mobile · Chi tiết ngày công)

| | |
|---|---|
| feature | `attendance-day` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol domain |
| source | CTX `attendance-day.md` · `attendance.md` · `AttendanceLogsController` · DOMAIN-MAP Patrol · demo entry `#sc-attendance` |
| **cấm** | invent `api/v1/attendance-day` · invent date-filter BE P1 · ERP.* · Report domain · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` + nav `dayKey` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Patrol | **Không** — proxy rewrite |
| Web BFF | `web-bff/api/v1/patrol/attendance-logs` | **Không** — mobile dùng mobile-bff |
| Dedicated AttendanceDayController | **không** | **cấm invent** |

## Table — detail `#sc-attendance-day` · `DES-MOB-ATT-DAY`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load ngày (logs) | GET | `patrol/attendance-logs` | proxy | `AttendanceLogsController.GetList` | CTX §3 · parent reuse | client filter `dayKey` |
| Filter ngày | — | — | — | local | nav `dayKey` epoch | **không** API date P1 |
| Summary aggregate | — | — | — | local | `AttendanceDtoMapper` day bucket | **không** API |
| Nav back hub | — | — | — | local nav | `go('attendance')` | **không** API |
| Toast err / empty | — | — | — | local UI | controlHint | **không** API |
| Tap log row | — | — | — | toast P1 | **cấm** GetById push P1 | optional P2 |

## Query params (list — reuse parent)

`search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50 default)

**Không** có `fromDate`/`toDate`/`dayKey` query P1 — filter client sau GET.

## Client filter rule

| Input | Rule |
|-------|------|
| nav `dayKey` | epoch seconds · start-of-day local |
| `CheckInAt` | parse ISO → `Calendar.startOfDay` == `dayKey` |
| current user | optional filter `UserName` = auth display (P1 default all logs · hub same) |
| empty filter | empty chrome + demo SSOT nếu GET fail |

## DTO bind (live `AttendanceLogDto` per log row)

| Field | Wire | UI |
|-------|------|-----|
| `Id` | yes Guid | nav key / future P2 drill |
| `CheckInAt` | yes DateTime | logTime · rowRange min/max |
| `Route` | yes | logSub · rowRoute |
| `Status` | yes | logSub |
| `InZone` | bool | logSub · logBadge |
| `Lat` · `Lng` | decimal | **không** bind P1 list row |
| `Code` · `UserName` · `KmPoint` · `Note` | yes | **không** bind P1 day summary |
| `IsActive` · timestamps | yes | **không** bind P1 UI |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `attendance-day`.

## Có trên domain — **không** thuộc slug `attendance-day` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `patrol/attendance-logs/{id}` | GetById — owner `supervise-detail` · P1 toast only |
| POST | `patrol/attendance-logs` | create — owner `attendance` hub |
| PUT/DELETE | `patrol/attendance-logs/{id}` | CRUD — **OUT** |
| GET | `/attendance/report` · `/attendance/summary` | **MISSING** P2 — owner `attendance-report` |
| Web | `web-bff/api/v1/patrol/**` · `td-tk/cham-cong-logs` | web BFF · mobile = mobile-bff |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `AttendanceLogsController` | GET list `api/v1/patrol/attendance-logs` |
| `AttendanceLogDto` | CheckInAt · Route · Status · InZone · Lat/Lng |
| Mobile.Bff `patrol/*` | proxy catch-all `MobileApiProxyController` |
| Date filter query | **không** — client filter OK P1 |
| `api/v1/attendance-day` | **không** — **cấm invent** |
| Step 4b | **N/A** — list **DONE** · **cấm** data_analy migration |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET attendance-day/{dayKey}` mobile-only DTO  
- Ship detail từ hardcode khi BFF live (`GAP-MOB-REAL-02`)  
- Gộp POST check-in · report API · supervise GetById primary  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T02:55:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-bff-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-list-day-filter |
| taskId | `task_3fdb1cea` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
