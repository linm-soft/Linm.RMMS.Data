# BFF endpoints — patrol-pin (mobile · Ghim vị trí hiện tại)

| | |
|---|---|
| feature | `patrol-pin` |
| changeScope | `edit_page` |
| taskId | `task_48f136ed` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol |
| source | CTX `patrol-pin.md` · `patrol-checkin.md` · `patrol.md` §3 · `PatrolSessionsController` |
| **cấm** | invent `api/v1/patrol-pin` · `POST …/pins` · ERP.* · app `:5101` · form Kind E UI trên pack này |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta Current vs New

| | Current | New |
|--|---------|-----|
| Read | `GET patrol/sessions` toast Route | **giữ** |
| Write | **none** | Persist via sibling **POST** `patrol/sessions/{id}/check-ins` (BE **Live**) |
| Pin pack HTTP write | **cấm** auto-POST (thiếu PlanPointLabel/MatchOk trên CTA) | Handoff payload only · sibling owns POST body |

## Table — `DES-MOB-CI-PIN-HERE`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Gap |
|---------------|--------|--------------------|-----|------------|-----|
| Route / active / `Id` | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | filter «Đang tuần» client |
| GPS fix | — | — | — | Device CL / Fused | **không** API pin |
| Persist ghim → ca | POST | `patrol/sessions/{id}/check-ins` | proxy | `CreateCheckIn` · `CreatePatrolCheckInRequest` | **Live** · **owner submit = `patrol-checkin`** · pin = handoff only |
| Invent pin | — | `…/pins` | — | — | **cấm invent** |

## Query (list)

`search` · `status` · `route` · `page` · `pageSize`

## DTO

### List item (toast + handoff)

`PatrolSessionDto`: `Id` · `Code` · `Route` · `Status` · …

### Persist (sibling body — reference)

`CreatePatrolCheckInRequest`: `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content?` · `PhotoLocalIds?`

`PatrolCheckInDto`: `Id` · `SessionId` · `Lat` · `Lng` · `AccuracyM` · `MatchOk` · `CreatedAt` · …

BE validate: PlanPointLabel + Route required · `MatchOk` must **true** — **lý do** pin không auto-POST từ CTA.

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/patrol/sessions` | **Live** |
| `POST api/v1/patrol/sessions/{id}/check-ins` | **Live** (`PatrolSessionsController.CreateCheckIn`) |
| `PatrolPinController` / `…/pins` | **không** — **cấm invent** |
| Mobile.Bff | catch-all proxy · **không** local PatrolPinController |

## Step 4b

**N/A** — GET list + POST check-ins **Live** · GPS device · **không** `/new-endpoint` · **không** migration cho GAP này · SA xác nhận lại khi Dev.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.23 |
| generatedAt | `2026-09-12T11:55:00.000Z` |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260912-persist |
