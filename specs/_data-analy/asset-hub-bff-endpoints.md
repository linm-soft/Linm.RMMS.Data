# BFF endpoints — asset-hub (mobile hub)

| | |
|---|---|
| feature | `asset-hub` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` |
| source | CTX `asset-hub.md` · `asset.md` §3 · `ai-asset-detect.md` · `docs/bff-route-map.md` · verify controllers |
| **cấm** | invent path · app gọi `:5101` · `api/v1/asset-hub` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` | **Không** — proxy rewrite |
| AssetHubController | **không** | — |

Nguồn: CTX `asset-hub.md` → proxy `asset/*` · `integration/*` · `ai-vision/*` · `gis/*` → **cấm** bịa hub controller.

## Table — hub `#sc-asset-hub` (read summary)

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Wallet — số loại catalog | GET | `integration/asset-types` | proxy | `AssetTypesController` | `api/v1/integration/asset-types` · verify | count → subtitle ví |
| Wallet — tuyến label | GET | `integration/road-routes/search` | proxy | `RoadRoutesController` search | integration domain | **GAP-F-AHUB-01** |
| Wallet — patrol line (iOS demo) | — | — | — | **không** hub API | demo copy | sibling `patrol-home` |
| AI pending list | GET | `ai-vision/asset-candidates` | proxy | `AiVisionAssetCandidates*` | filter status=Draft | hub section |
| AI pending nearby | GET | `ai-vision/asset-candidates/nearby` | proxy | Haversine 25 m demo | `ai-asset-detect.md` | optional |
| Nav back home | — | — | — | local nav | `home` slug | **không** API |

## Table — sibling (không gọi turn hub · SA/TL reference)

| Sibling slug | Method | `{BffPrefix}` path | Downstream | Source |
|--------------|--------|--------------------|------------|--------|
| `asset-types` | GET | `integration/asset-types` | list/search | `AssetTypesController` |
| `asset-types` | GET | `integration/asset-types/{id}` | detail specs | catalog 36 |
| `asset-list` | GET | `asset/road-assets` | paged list | `RoadAssetsController` |
| `asset-list` | GET | `asset/road-assets/init-data` | dropdowns | same |
| `asset-detail` | GET | `asset/road-assets/{id}` | detail XCO | same |
| `asset-collect` | POST | `asset/road-assets` | create | same |
| `asset-adjust` | PUT | `asset/road-assets/{id}` | update | same |
| `asset-adjust` | DELETE | `asset/road-assets/{id}` | soft delete | same |
| `asset-ai` | POST | `ai-vision/detect-assets` | detect frame | `AiVisionDetectAssetsController` |
| `asset-ai` | POST | `ai-vision/asset-candidates` | create draft | candidates |
| `det-hitl` | GET | `ai-vision/asset-candidates/{id}` | detail | candidates |
| `det-hitl` | POST | `ai-vision/asset-candidates/{id}/confirm` | → Asset | confirm |
| `det-hitl` | POST | `ai-vision/asset-candidates/{id}/dismiss` | dismiss | dismiss |
| `gis-map` | GET | `gis/layers` | layer toggle | `GisBffController` |
| `gis-map` | GET | `gis/geojson/{layer}` | pins overlay | same |
| `gis-map` | GET | `asset/road-assets` | asset pins | reuse list |

## Có trên domain — **không** thuộc slug `asset-hub`

| Method | Path | Ghi |
|--------|------|-----|
| POST | `asset/road-assets/import` | web import — **không** mobile hub |
| GET | `asset/road-assets/nearby` | planned · **không** verify live |
| GET | `integration/users/{id}` | admin — **không** current-user wallet |
| Web `web-bff/api/v1/asset/road-assets` | — | web BFF riêng · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `RoadAssetsController` | `api/v1/asset/road-assets` GET/POST/PUT/DELETE · init-data |
| `AssetTypesController` | `api/v1/integration/asset-types` GET/search/{id} |
| `AiVisionAssetCandidatesBffController` | `asset-candidates` + `detect-assets` |
| `GisBffController` | `gis/layers` · `gis/geojson/{layer}` |
| Mobile.Bff `AssetHubController` | **không** |
| RMMS `api/v1/asset-hub` | **không** |
| `docs/bff-route-map.md` | `asset/*` · `integration/*` · `ai-vision/*` · `gis/*` proxy |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET asset-hub` / wallet summary controller

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T09:08:31.000Z |
| versionGate | rechecked |
| contentHash | sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2 |
| bffContentHash | sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
