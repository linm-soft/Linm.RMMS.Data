# BFF endpoints — asset-collect (mobile · Thu thập thủ công)

| | |
|---|---|
| feature | `asset-collect` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Asset · Integration · Patrol |
| source | CTX `asset-collect.md` · `asset.md` · `RoadAssetsController` · DOMAIN-MAP Asset · demo `#sc-asset-collect` · peer hub BFF table |
| **cấm** | invent `api/v1/asset-collect` · Finance `api/v1/assets` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Asset / Integration | **Không** — proxy rewrite |
| Web BFF | `web-bff/api/v1/asset/road-assets` | **Không** — mobile dùng mobile-bff |
| Dedicated AssetCollectController | **không** | **cấm invent** |

## Table — form `#sc-asset-collect` · `DES-MOB-ASSET-COLLECT`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Catalog loại TS | GET | `integration/asset-types` | proxy | `AssetTypesController` list/search | CTX asset-kcht-32 · DOMAIN-MAP | typeSelect |
| Init status/source/unit | GET | `asset/road-assets/init-data` | proxy | `RoadAssetsController.GetInitData` | Statuses · Sources · Units | statusField |
| Prefill tuyến (optional) | GET | `patrol/sessions` | proxy | `PatrolSessionsController` | ca Đang tuần | routeKm |
| Resolve tuyến code | GET | `integration/road-routes/search` | proxy | `RoadRoutesController` | require Route code | routeKm |
| Thêm tài sản | POST | `asset/road-assets` | proxy | `RoadAssetsController.Create` | `CreateRoadAssetRequest` | btnAdd |
| GPS ghim | — | — | — | Device CL / Fused | location * | **không** API |
| Camera capture | — | — | — | Device camera | PhotoRow | **không** API |
| Media upload TS | — | — | — | **MISSING** P1 | planned `POST …/media` | **GAP-MOB-ASSET-COLLECT-MEDIA-01** |
| Nav back hub | — | — | — | local nav | `go('asset-hub')` | **không** API |
| Toast ok / err | — | — | — | local UI | controlHint | **không** API |

## DTO bind (live create)

### `CreateRoadAssetRequest` → POST `asset/road-assets`

| Wire | Required | UI / nguồn |
|------|----------|------------|
| `Name` | yes | nameField |
| `Type` | yes | typeSelect · code / name catalog (service `RequireTypeCodeAsync`) |
| `Route` | yes | routeKm parse · code Integration |
| `KmFrom` | yes | routeKm parse · GPS snap |
| `KmTo` | no | optional P2 |
| `Status` | yes | statusField · prefer Value `tot` / Label «Tốt» · Android default `tot` nếu thiếu UI |
| `Lat` · `Lng` | no (API) / **yes UI** | gpsPin · deny → block submit |
| `Source` | default | service `"manual"` nếu omit · **cấm** `"ai"` trên slug này |
| `SourceRef` · `Note` · `Qr` · `Quantity` · `UnitCode` · `ValueVnd` · `CodePrefix` | no | **OUT** P1 form (CodePrefix = AI confirm) |

### Response `RoadAssetDto` (toast)

| Field | UI |
|-------|-----|
| `Code` | toast «Đã thêm tài sản · {Code}» |
| `Id` | optional nav detail P2 · **OUT** P1 (demo toast only) |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `asset-collect`.

## Có trên domain — **không** thuộc slug `asset-collect` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `asset/road-assets` | list — owner `asset` |
| GET | `asset/road-assets/{id}` | detail — owner `asset-detail` |
| PUT | `asset/road-assets/{id}` | update — owner `asset-adjust` |
| DELETE | `asset/road-assets/{id}` | soft delete — owner `asset-adjust` |
| GET | `asset/road-assets/summary-by-type` | dashboard — **OUT** |
| POST | `ai-vision/detect-assets` · candidates | owner `asset-ai` / `det-hitl` — **OUT** |
| Web | `web-bff/api/v1/asset/**` | web BFF · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `RoadAssetsController` | `[Route("api/v1/asset/road-assets")]` POST Create · GetInitData · 422 validate |
| `CreateRoadAssetRequest` | Name · Type · Route · KmFrom · Status · Lat/Lng · Source… |
| `RoadAssetService.CreateAsync` | IdCode `TS-yyyyMMdd-nnn` · Source default `manual` · type/route catalog check |
| `AssetTypesController` | `api/v1/integration/asset-types` |
| Mobile.Bff `asset/*` · `integration/*` | proxy catch-all `MobileApiProxyController` |
| DOMAIN-MAP | Asset · Integration · **cấm** ERP.* |
| `api/v1/asset-collect` / Finance `api/v1/assets` | **không** — **cấm invent** |
| Step 4b | **N/A** — Create **DONE** · media = GAP SA · **cấm** data_analy migration |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `POST asset-collect` / mobile-only DTO fork  
- Ship form từ hardcode khi BFF available (`GAP-MOB-REAL-02`)  
- Enqueue POST như sibling feature (`GAP-MOB-ACT-07` — submit cùng slug)  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T22:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-collect-bff-20260830 |
| bffContentHash | sha256:asset-road-assets-create-proxy-20260830 |
| taskId | `task_e9f0235f` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
