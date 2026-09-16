# BFF endpoints — patrol-history-detail (mobile · Chi tiết ca)

| | |
|---|---|
| feature | `patrol-history-detail` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol |
| changeScope | `edit_page` · `task_dc906824` |
| source | CTX · `PatrolSessionsController` · DOMAIN-MAP Patrol |
| **cấm** | invent `patrol-history-detail` path · ERP.* · app `:5101` · DbContext BFF · `timelineDemo` khi live |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — `#sc-patrol-detail`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Gap |
|---------------|--------|--------------------|-----|------------|-----|
| Load chi tiết ca | GET | `patrol/sessions/{id}` | proxy | `GetById` · XCO | hero + info · **Live** |
| Timeline điểm tuần | GET | `patrol/sessions/{id}/check-ins` | proxy | `GetCheckIns` · `PatrolCheckInDto[]` | **Live** · empty `[]` OK · **cấm** timelineDemo |
| Nav Mở bản đồ ca | — | — | — | local nav | `go('patrol-map')` + session Id |
| Nav timeline → check-in | — | — | — | local nav | `go('checkin-detail')` + check-in Id |
| Nav back | — | — | — | local | pop list |
| Chia sẻ / Kết thúc ca | — | — | — | toast P1 | **cấm** PUT |
| Toast / empty | — | — | — | local UI | session 404 · check-ins fail → empty TL |

## DTO — session (không đổi)

`PatrolSessionDto`: Id · Code · UserName · Route · PatrolType · PlannedDate · StartedAt · CoveragePercent · Status · CheckInCount · OfflineQueued · …

## DTO — check-in timeline (`PatrolCheckInDto` · **Live**)

| Field | Wire | UI timeline |
|-------|------|-------------|
| `Id` | Guid | item id · tap key |
| `SessionId` | Guid | assert = route id |
| `PlanPointLabel` | string | title (điểm / địa danh) |
| `Route` | string | subtitle chainage / tuyến |
| `CreatedAt` | DateTime | time `HH:mm` local |
| `MatchOk` | bool | «định vị đạt» / không đạt |
| `DistanceToPlanM` | double | optional sub `~{n} m` |
| `PhotoLocalIds` | string[] | «Ảnh ×{count}» nếu count>0 |
| `Lat` · `Lng` · `AccuracyM` · `Content` | yes | **không** bind P1 list row (detail owner CI) |

**Empty:** `200` + `data: []` → section «Điểm tuần» + empty inline · **không** seed demo.

**404 session:** check-ins NotFound → treat session missing / back (cùng Id).

## Có trên domain — OUT slug P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `patrol/sessions` | owner list |
| POST | `…/check-ins` | owner `patrol-checkin` create |
| GET | `…/plan-points` | **OUT** P1 timeline — **không** synth pending |
| PUT/DELETE | `patrol/sessions/{id}` | **OUT** end toast P1 |
| tracks | `…/tracks` | owner `patrol-map` P2 |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `GetById` | **Live** |
| `GetCheckIns` `[HttpGet("{id}/check-ins")]` | **Live** · `PatrolSessionService.GetCheckInsAsync` |
| Mobile.Bff | proxy catch-all — path passthrough |
| DOMAIN-MAP | Patrol · **cấm** ERP.* |
| invent `patrol-history-detail` | **không** |
| Step 4b | **N/A** — endpoints **DONE** · **cấm** data_analy migration |

## § Delta BFF (`edit_page`)

| ID | Prior P1 | New |
|----|----------|-----|
| TIMELINE-01 | MISSING / demo SSOT · **cấm invent** | GET check-ins **Live** · bind · empty OK |
| — | GetById only | GetById **+** GetCheckIns |

## Cấm

- App `:5101` · invent mobile-only DTO fork  
- Ship `timelineDemo` khi BFF OK / empty  
- Fake 200 · enqueue POST/PUT từ detail  
- Step 4b trong data_analy  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-12T13:26:27.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-bff-20260912-checkins-live |
| bffContentHash | sha256:patrol-sessions-getbyid-plus-checkins |
| taskId | `task_dc906824` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
