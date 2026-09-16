# BFF endpoints — patrol-home (mobile hub · Tuần đường)

| | |
|---|---|
| feature | `patrol-home` |
| changeScope | `edit_page` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol · `PatrolSessionsController` |
| source | CTX `patrol.md` §3 · `patrol-home.md` · code review GAP 2026-09-12 |
| **cấm** | invent `api/v1/patrol-home` · app `:5101` · ERP.* |
| taskId | `task_62615c08` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — hub `#sc-patrol-home` (+ detail kết ca)

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| List hôm nay | GET | `patrol/sessions` | proxy | `GetList` | CTX | page/pageSize |
| Ca active | GET | `patrol/sessions` | proxy | filter «Đang tuần» client | live | — |
| Mở ca | POST | `patrol/sessions` | proxy | `Create` | CTX patrol §3 | **wire native** |
| Kết ca | PUT | `patrol/sessions/{id}` | proxy | `Update` | CTX patrol §3 | **wire native** (detail) |
| Detail drill | GET | `patrol/sessions/{id}` | proxy | `GetById` | live | — |
| Nav sync | — | — | — | — | sibling offline | không API hub |
| Offline badge | — | — | — | local store | sibling | **cấm** GET queue |

## Query params (list)

`search` · `status` · `route` · `page` · `pageSize` (50 default)

## Request / Response DTO (downstream)

**List/Detail:** `PatrolSessionDto` — `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `PlannedDate` · `StartedAt` · `CheckInCount` · `CoveragePercent` · `Status` · `OfflineQueued` · `IsActive` · org fields optional

**Create:** `CreatePatrolSessionRequest` — UserName · Route · PatrolType · Status · PlannedDate · StartedAt? · CheckInCount · CoveragePercent · OfflineQueued · Note? · MediaIds? · org/routeCode optional

**Update:** `UpdatePatrolSessionRequest` — same required + `IsActive?`

## Verify live

| Check | Result |
|-------|--------|
| `PatrolSessionsController` | GET/POST/PUT/DELETE `api/v1/patrol/sessions` **Live** |
| Mobile.Bff `PatrolHomeController` | **không** — proxy only |
| Step 4b | **N/A** — không endpoint mới |
| DOMAIN-MAP patrol | proxy catch-all |

## Cấm

- Invent hub controller · wallet API · org-unit invent
- App biết RMMS `:5101`
- Skip PUT/POST vì “P1 toast” — DoD GAP **đóng** toast-only kết ca

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.29 |
| generatedAt | 2026-09-12T14:53:44.000Z |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |
| bffContentHash | sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0 |
