# BFF endpoints — patrol-pin (mobile · Ghim vị trí hiện tại)

| | |
|---|---|
| feature | `patrol-pin` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol |
| source | CTX `patrol-pin.md` · `patrol.md` §3 · `PatrolSessionsController` |
| **cấm** | invent `api/v1/patrol-pin` · `POST …/pins` · ERP.* · app `:5101` · Kind E check-ins trên pack này |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — `DES-MOB-CI-PIN-HERE`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Gap |
|---------------|--------|--------------------|-----|------------|-----|
| Route / active cho toast | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | filter «Đang tuần» client |
| GPS fix | — | — | — | Device CL / Fused | **không** API pin P1 |
| Persist pin / check-in | POST | `patrol/sessions/{id}/check-ins` | — | CTX Kind E | **không** gọi P1 · sibling `patrol-checkin` |

## Query (list)

`search` · `status` · `route` · `page` · `pageSize`

## DTO (list item — bind toast)

`PatrolSessionDto`: `Id` · `Code` · `Route` · `Status` · …

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/patrol/sessions` | **Live** |
| `PatrolPinController` / `…/pins` | **không** — **cấm invent** |
| check-ins POST | Kind E **P2** / sibling — **cấm invent trên pack này** |

## Step 4b

**N/A** — endpoint list live · GPS device · không thiếu schema BE cho P1 pin.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| generatedAt | `2026-08-21T02:50:22.000Z` |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |
