# BFF endpoints — asset-detail (mobile · Chi tiết tài sản)

| | |
|---|---|
| feature | `asset-detail` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Asset domain |
| source | CTX `asset-detail.md` · `asset.md` · `RoadAssetsController` · DOMAIN-MAP Asset · demo `#sc-asset-detail` · peer list SA `solution-discovery-mobile.md` |
| **cấm** | invent `api/v1/asset-detail` · Finance `api/v1/assets` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Asset | **Không** — proxy rewrite |
| Web BFF | `web-bff/api/v1/asset/road-assets` | **Không** — mobile dùng mobile-bff |
| Dedicated AssetDetailController | **không** | **cấm invent** |

## Table — detail `#sc-asset-detail` · `DES-MOB-ASSET-DETAIL`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load chi tiết | GET | `asset/road-assets/{id}` | proxy | `RoadAssetsController.GetById` · XCO | `api/v1/asset/road-assets/{id}` | hero + rows |
| Nav Ghim bản đồ | — | — | — | local nav | `go('gis-map')` | **không** API |
| Nav back list | — | — | — | local nav | `go('asset-list')` | **không** API |
| Toast err / empty | — | — | — | local UI | controlHint | **không** API |

## DTO bind (live `RoadAssetDto`)

| Field | Wire | UI |
|-------|------|-----|
| `Id` | yes Guid | route param / nav key |
| `Code` | yes | codeValue hero |
| `Name` | yes | optional subtitle P2 · **không** demo P1 hero |
| `Type` | yes code | rowType + client `typeLabel` |
| `Route` | yes | rowRouteKm |
| `KmFrom` | yes | rowRouteKm `Km {KmFrom}` |
| `KmTo` | optional | append nếu có |
| `Status` | yes | optional badge P2 · **không** demo P1 |
| `Lat` · `Lng` | decimal? | rowGps Android · ẩn nếu null · dual GAP |
| `Qr` · `Quantity` · `UnitCode` · `Note` · `Source` | optional | **OUT** P1 detail UI |
| `IsActive` · timestamps | yes | **không** bind P1 |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `asset-detail`.

## Có trên domain — **không** thuộc slug `asset-detail` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `asset/road-assets` | list — owner `asset` |
| GET | `asset/road-assets/init-data` | dropdowns — **OUT** detail |
| GET | `asset/road-assets/summary-by-type` | dashboard — **OUT** |
| POST | `asset/road-assets` | create — collect / web |
| PUT | `asset/road-assets/{id}` | update — owner `asset-adjust` |
| DELETE | `asset/road-assets/{id}` | soft delete — owner `asset-adjust` |
| GET | `integration/asset-types/search` | lookup — **không** P1 detail |
| Web | `web-bff/api/v1/asset/**` | web BFF · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `RoadAssetsController` | `[Route("api/v1/asset/road-assets")]` GetById · XCO 403/404 |
| `RoadAssetDto` | Code · Type · Route · KmFrom · Lat/Lng · … |
| Mobile.Bff `asset/*` | proxy catch-all `MobileApiProxyController` |
| Web BFF `RoadAssetsBffController` | proxy web — **không** app path |
| DOMAIN-MAP | Asset · **cấm** ERP.* |
| `api/v1/asset-detail` / Finance `api/v1/assets` | **không** — **cấm invent** |
| Step 4b | **N/A** — GetById **DONE** · **cấm** data_analy migration |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET asset-detail` / mobile-only DTO fork  
- Ship list/detail từ `demoItems` khi BFF available (`GAP-MOB-REAL-02`)  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T21:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-bff-20260830 |
| bffContentHash | sha256:asset-road-assets-getbyid-proxy-20260830 |
| taskId | `task_f6ca06ad` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
