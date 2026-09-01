# BFF endpoints — attendance-report (mobile · Báo cáo công)

| | |
|---|---|
| feature | `attendance-report` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol domain |
| source | CTX `attendance-report.md` · peer `attendance.md` · `AttendanceLogsController` · DOMAIN-MAP Patrol · demo entry `#sc-attendance` |
| **cấm** | invent `api/v1/attendance/report` · invent `api/v1/attendance/summary` · ERP.* · Report domain web · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` + period segment |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Patrol | **Không** — proxy rewrite |
| Web BFF / Report MFE | `rpt-bao-cao-cong` | **Không** — mobile ≠ web Kind E |
| Dedicated AttendanceReportController | **không** | **cấm invent** |

## Table — report `#sc-attendance-report` · `DES-MOB-ATT-RPT`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load kỳ (logs) | GET | `patrol/attendance-logs` | proxy | `AttendanceLogsController.GetList` | CTX §3 · parent reuse | client period filter |
| Period filter | — | — | — | local | segment Tuần/Tháng | **không** API from/to P1 |
| KPI aggregate | — | — | — | local | derived from logs | **không** `/attendance/summary` |
| Day bucket list | — | — | — | local | group by local day | **không** API |
| Nav back hub | — | — | — | local nav | `go('attendance')` | **không** API |
| Tap day row | — | — | — | nav | push `attendance-day` + `dayKey` | **không** GetById |
| Toast err / empty | — | — | — | local UI | controlHint | **không** API |
| Export Excel | — | — | — | — | **OUT** mobile P1 | web peer only |

## Query params (list — reuse parent)

`search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50 default · tăng page nếu period > page)

**Không** có `fromDate`/`toDate`/`period` query P1 — filter client sau GET.

## Client aggregate rule

| Input | Rule |
|-------|------|
| period=week | `CheckInAt` local day ∈ [startOfWeek, today] |
| period=month | `CheckInAt` local day ∈ [startOfMonth, today] |
| day bucket | group by `Calendar.startOfDay(CheckInAt)` |
| kpiDays | count buckets badge Đủ công (≥2 logs) |
| kpiChecks | count logs in window |
| kpiInZone | round(100 * inZoneTrue / total) · 0 logs → «—» |
| kpiOut | count `InZone==false` |
| current user | optional filter `UserName` = auth (P1 default same hub) |
| GET fail | toast + demo SSOT · **cấm** fake 200 |

## DTO bind (live `AttendanceLogDto`)

| Field | Wire | UI |
|-------|------|-----|
| `Id` | yes Guid | **không** primary P1 report |
| `CheckInAt` | yes DateTime | period filter · day bucket · daySub range |
| `Route` | yes | optional daySub |
| `Status` | yes | **không** KPI primary |
| `InZone` | bool | kpiInZone · kpiOut |
| `Lat` · `Lng` | decimal | **không** bind P1 |
| `Code` · `UserName` · `KmPoint` · `Note` | yes | optional filter UserName |
| `IsActive` · timestamps | yes | **không** bind P1 UI |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `attendance-report` / `attendance/report`.

## Có trên domain — **không** thuộc slug `attendance-report` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| POST | `patrol/attendance-logs` | create — owner `attendance` |
| GET | `patrol/attendance-logs/{id}` | GetById — owner `supervise-detail` / day toast P1 |
| PUT/DELETE | `patrol/attendance-logs/{id}` | CRUD — **OUT** |
| GET | `/attendance/report` · `/attendance/summary` | **MISSING** P2 — cite only · **cấm invent** mobile |
| Web | `web-bff` · `/bao-cao/cham-cong` | web `rpt-bao-cao-cong` · **không** mobile bind |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `AttendanceLogsController` | GET list `api/v1/patrol/attendance-logs` · Route confirmed |
| `AttendanceLogDto` | CheckInAt · Route · Status · InZone · Lat/Lng |
| Mobile.Bff feature controller | **không** — catch-all proxy |
| `/attendance/report` | **MISSING** — GAP-MOB-ATT-RPT-API-01 |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | `2026-09-01T00:48:12.000Z` |
| versionGate | ok · autopilot keep_current |
| contentHash | sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9 |
| taskId | `task_cc8d9202` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.09.01.1 versionGate=ok -->
