# BFF endpoints — patrol-map (mobile map · Bản đồ ca)

| | |
|---|---|
| feature | `patrol-map` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol |
| source | CTX `patrol-map.md` · `patrol.md` §3 · `PatrolSessionsController` |
| **cấm** | invent `api/v1/patrol-map` · app `:5101` · ERP.* · Kind E tracks P1 |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — `#sc-patrol-map`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Gap |
|---------------|--------|--------------------|-----|------------|-----|
| Ca active / next copy | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | filter «Đang tuần» client |
| Detail | GET | `patrol/sessions/{id}` | proxy | `GetById` | **no P1** |
| Overlay geometry | — | — | — | demo OMS `map-oms.js` waypoints | Kind E tracks **P2** · **cấm invent** |
| Check-in POST | POST | `patrol/sessions/{id}/check-ins` | — | CTX Kind E | **không** gọi P1 · toast |
| Tracks POST | POST | `patrol/sessions/{id}/tracks` | — | CTX Kind E | **P2** · Step 4b **N/A P1** |
| Coverage GET | GET | `patrol/sessions/{id}/coverage` | — | CTX Kind E | **P2** |

## Query (list)

`search` · `status` · `route` · `page` · `pageSize`

## DTO (list item)

`PatrolSessionDto`: `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `CheckInCount` · `CoveragePercent` · `Status`

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/patrol/sessions` | **Live** |
| `PatrolMapController` | **không** |
| tracks / coverage / check-ins | **không** trên BE P1 — **cấm invent** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| generatedAt | `2026-08-20T01:40:00.000Z` |
| bffContentHash | sha256:patrol-map-mobile-bff-20260820 |
