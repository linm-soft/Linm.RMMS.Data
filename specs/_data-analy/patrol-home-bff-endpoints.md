# BFF endpoints — patrol-home (mobile hub · Tuần đường)

| | |
|---|---|
| feature | `patrol-home` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol domain |
| source | CTX `patrol.md` · `patrol-home.md` · `PatrolSessionsController` |
| **cấm** | invent `api/v1/patrol-home` · app `:5101` · ERP.* |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — hub `#sc-patrol-home`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| List hôm nay | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | CTX patrol §3 | query page/pageSize |
| Ca active | GET | `patrol/sessions` | proxy | filter status «Đang tuần» client-side P1 | demo + live | — |
| Detail drill | GET | `patrol/sessions/{id}` | proxy | `GetById` | P2 | tap row toast P1 |
| Nav sync | — | — | — | — | sibling `patrol-offline` POST batch | **không** API hub |
| Offline badge | — | — | — | local store | sibling `patrol-offline` | **cấm** GET queue |

## Query params (list)

`search` · `status` · `route` · `page` · `pageSize` (50 default)

## Response DTO (downstream)

`PatrolSessionDto`: `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `PlannedDate` · `CheckInCount` · `CoveragePercent` · `Status` · `OfflineQueued`

## Verify live

| Check | Result |
|-------|--------|
| `PatrolSessionsController` | `GET/POST/PUT/DELETE api/v1/patrol/sessions` |
| Mobile.Bff `PatrolHomeController` | **không** |
| DOMAIN-MAP patrol | proxy catch-all |

## Cấm

- Invent hub controller · wallet API · org-unit  
- App biết RMMS `:5101`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| generatedAt | 2026-08-19T14:30:00.000Z |
| contentHash | sha256:patrol-home-mobile-bff-20260819 |
