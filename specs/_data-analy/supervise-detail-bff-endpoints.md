# BFF endpoints — supervise-detail (mobile · Chi tiết check-in)

| | |
|---|---|
| feature | `supervise-detail` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol domain |
| source | CTX `supervise-detail.md` · `supervise.md` · `AttendanceLogsController` · DOMAIN-MAP Patrol · demo entry `#sc-supervise` |
| **cấm** | invent `api/v1/supervise-detail` · invent `api/v1/checkin-detail` · ERP.* · Report domain · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Patrol | **Không** — proxy rewrite |
| Web BFF | `web-bff/api/v1/patrol/attendance-logs` | **Không** — mobile dùng mobile-bff |
| Dedicated SuperviseDetailController | **không** | **cấm invent** |

## Table — detail `#sc-supervise-detail` · `DES-MOB-SUP-DETAIL`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load chi tiết | GET | `patrol/attendance-logs/{id}` | proxy | `AttendanceLogsController.GetById` · XCO | `api/v1/patrol/attendance-logs/{id}` | hero + rows |
| Nav Xem bản đồ | — | — | — | local nav | `go('gis-map')` | **không** API |
| Nav back list | — | — | — | local nav | `go('supervise')` | **không** API |
| Toast err / empty | — | — | — | local UI | controlHint | **không** API |

## DTO bind (live `AttendanceLogDto`)

| Field | Wire | UI |
|-------|------|-----|
| `Id` | yes Guid | route param / nav key |
| `Code` | yes | codeValue |
| `UserName` | yes | userHero |
| `Route` | yes | rowLoc |
| `CheckInAt` | yes DateTime | rowTime (local format) |
| `KmPoint` | string? | rowLoc append |
| `Lat` · `Lng` | decimal | rowGps · CTA map pass |
| `InZone` | bool | rowInZone |
| `Status` | yes | rowStatus mapped |
| `Note` | string? | rowOrg khi có · else demo fallback |
| `IsActive` · timestamps | yes | **không** bind P1 UI |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `supervise-detail`.

## Có trên domain — **không** thuộc slug `supervise-detail` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `patrol/attendance-logs` | list — owner `supervise` |
| POST | `patrol/attendance-logs` | create — web/attendance |
| PUT | `patrol/attendance-logs/{id}` | update — **OUT** |
| DELETE | `patrol/attendance-logs/{id}` | soft delete — **OUT** |
| POST | `patrol/sessions/{id}/check-ins` | field check-in — owner `patrol-checkin` |
| Web | `web-bff/api/v1/patrol/**` · `td-tk/cham-cong-logs` | web BFF / legacy alias · mobile = `mobile-bff` proxy |
| Legacy BE | `api/v1/td-tk/cham-cong-logs` | peer CTX attendance — **không** app path P1 |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `AttendanceLogsController` | `[Route("api/v1/patrol/attendance-logs")]` GetById · 403/404 |
| `AttendanceLogDto` | Code · UserName · Route · CheckInAt · KmPoint · Lat/Lng · InZone · Status · Note |
| Mobile.Bff `patrol/*` | proxy catch-all `MobileApiProxyController` |
| Web BFF `AttendanceLogsBffController` | proxy web — **không** app path |
| DOMAIN-MAP | Patrol · **cấm** ERP.* |
| `api/v1/supervise-detail` / `checkin-detail` | **không** — **cấm invent** |
| Step 4b | **N/A** — GetById **DONE** · **cấm** data_analy migration |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET supervise-detail` / mobile-only DTO fork  
- Ship detail từ hardcode khi BFF live (`GAP-MOB-REAL-02`)  
- Gộp sessions check-ins POST vào slug này  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T01:47:46.000Z` |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-bff-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-getbyid-passthrough |
| taskId | `task_950d67b1` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
