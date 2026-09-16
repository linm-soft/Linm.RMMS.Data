# BFF endpoints — patrol-offline (edit_page · apply check-ins)

| | |
|---|---|
| feature | `patrol-offline` |
| bff | `Linm.RMMS.Mobile.Bff` · catch-all `MobileApiProxyController` |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| taskId | `task_82f104b5` |
| **cấm** | invent GET queue · `PatrolOfflineController` · app `:5101` · ERP.* · `/new-endpoint` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — `#sc-patrol-offline` sync (delta)

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| **Replay check-in** (primary) | POST | `patrol/sessions/{sessionId}/check-ins` | proxy | `PatrolSessionsController.CreateCheckIn` | `CreatePatrolCheckInRequest` | **NEW DoD** · apply DB |
| Sync receipt (optional) | POST | `integration/sync/offline-batch` | proxy | `IntegrationEndpointsController.OfflineBatch` | `OfflineBatchRequest` | after OK count · **không** thay apply |
| Queue list | — | — | — | **local store** | UserDefaults / prefs | **không** GET API |
| Nav / segment / empty | — | — | — | local | UI | **không** API |

## Request — check-ins

Path param: `sessionId` (Guid từ queue item).

Body: `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content?` · `PhotoLocalIds?` / `AttachmentIds?`

## Request — offline-batch (unchanged shape)

`Partner` · `DeviceId` · `BatchId` · `RecordCount` · `Note`

## Replay algorithm (client · dual)

1. Read pending · filter `kind=checkIn` có `sessionId` + body đủ.
2. Online: foreach → POST check-ins · on 2xx remove item · on fail **keep**.
3. Optional: POST offline-batch với `RecordCount=okCount`.
4. `kind=incident` → keep (P2) · **cấm** clear-all.
5. Toast = okCount · EmptyChrome khi remaining=0.

## Verify live

| Check | Result |
|-------|--------|
| `POST api/v1/patrol/sessions/{id}/check-ins` | **live** · writes `PatrolCheckIns` |
| `POST api/v1/integration/sync/offline-batch` | live SyncJob stub · **không** apply check-ins |
| Mobile.Bff invent controller | **không** |
| DOMAIN-MAP | Patrol + Integration · **cấm ERP.*** |
| Step 4b | **N/A** — reuse endpoints |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.29 |
| generatedAt | 2026-09-12T14:25:06.000Z |
| contentHash | sha256:patrol-offline-bff-apply-checkins-20260912 |
| bffContentHash | sha256:patrol-offline-bff-apply-checkins-20260912 |
