# BFF endpoints — patrol-offline (mobile list · Hàng đợi mất sóng)

| | |
|---|---|
| feature | `patrol-offline` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Integration domain |
| **cấm** | invent `GET patrol-offline/queue` · app gọi `:5101` · `PatrolOfflineController` · ERP.* |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — list `#sc-patrol-offline`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Sync batch | POST | `integration/sync/offline-batch` | proxy | `IntegrationEndpointsController` | `OfflineBatchRequest` | tap Đồng bộ |
| Queue list | — | — | — | **local store** | UserDefaults / Room | **không** GET API |
| Nav back | — | — | — | local nav | `home` / `me` | **không** API |

## Request body (sync)

`Partner` · `DeviceId` · `BatchId` · `RecordCount` · `Note`

## Verify live

| Check | Result |
|-------|--------|
| `IntegrationEndpointsController.OfflineBatch` | `POST api/v1/integration/sync/offline-batch` |
| Mobile.Bff `PatrolOfflineController` | **không** |
| DOMAIN-MAP | Integration · **cấm** ERP.* |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| generatedAt | 2026-08-19T14:00:00.000Z |
| contentHash | sha256:patrol-offline-mobile-bff-20260819 |
