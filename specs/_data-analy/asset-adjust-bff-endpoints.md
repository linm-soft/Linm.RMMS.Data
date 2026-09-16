# BFF endpoints — asset-adjust (mobile · Cập nhật / bớt)

| | |
|---|---|
| feature | `asset-adjust` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Asset domain |
| source | CTX `asset-adjust.md` · `asset.md` · `RoadAssetsController` · DOMAIN-MAP Asset · demo `#sc-asset-adjust` · peer detail/collect |
| **cấm** | invent `api/v1/asset-adjust` · Finance `api/v1/assets` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Asset | **Không** — proxy rewrite |
| Web BFF | `web-bff/api/v1/asset/road-assets` | **Không** — mobile dùng mobile-bff |
| Dedicated AssetAdjustController | **không** | **cấm invent** |

## Table — list `#sc-asset-adjust` · `DES-MOB-ASSET-ADJUST`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load / search list | GET | `asset/road-assets?search=&page=&pageSize=` | proxy | `RoadAssetsController.GetList` | list + search | rows |
| Bớt khỏi sổ | DELETE | `asset/road-assets/{id}` | proxy | `SoftDeleteAsync` · `IsActive=false` | modal confirm | soft |
| Sửa (nav) | — | — | — | local nav | `go('asset-detail')` + Id | **không** API trên adjust |
| Cập nhật field (P2) | PUT | `asset/road-assets/{id}` | proxy | `UpdateAsync` · `UpdateRoadAssetRequest` | domain live | **OUT** demo form P1 · EDIT-01 |
| Toast ok / err | — | — | — | local UI | controlHint | **không** API |
| Nav back hub | — | — | — | local nav | `go('asset-hub')` | **không** API |

## DTO bind (live)

### List item — `RoadAssetDto` (GET list)

| Field | Wire | UI |
|-------|------|-----|
| `Id` | yes Guid | row key · DELETE · nav Sửa |
| `Code` | yes | row title + toast |
| `Type` | yes code | typeLabel · row title |
| `Name` | yes | optional P2 · **không** demo P1 row |
| `Route` | yes | row subtitle |
| `KmFrom` | yes string | `Km {KmFrom}` |
| `KmTo` | optional | append nếu có |
| `Status` | yes | **OUT** P1 adjust row |
| `Lat` · `Lng` | optional | **OUT** P1 adjust |
| `IsActive` | yes | filter active only trên GET |

### DELETE response

| Field | UI |
|-------|-----|
| `{ id }` + message | toast «Đã bớt tài sản · {Code}» · Code từ row cache trước DELETE |

### PUT body — `UpdateRoadAssetRequest` (**domain live · UI OUT P1**)

| Wire | Required | UI P1 |
|------|----------|-------|
| `Name` · `Type` · `Route` · `KmFrom` · `Status` | yes (service) | **không** form trên `#sc-asset-adjust` |
| `KmTo` · `Lat` · `Lng` · `Note` · … · `IsActive?` | no | P2 / web |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `asset-adjust`.

## Có trên domain — **không** thuộc slug `asset-adjust` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `asset/road-assets/{id}` | detail — owner `asset-detail` (Sửa nav) |
| POST | `asset/road-assets` | create — owner `asset-collect` |
| GET | `asset/road-assets/init-data` | dropdowns — **OUT** adjust list |
| GET | `asset/road-assets/summary-by-type` | dashboard — **OUT** |
| Web | `web-bff/api/v1/asset/**` | web BFF · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `RoadAssetsController` | `[Route("api/v1/asset/road-assets")]` GetList · Update · SoftDelete |
| `SoftDeleteAsync` | `IsActive=false` · **không** hard delete |
| `UpdateRoadAssetRequest` | Name · Type · Route · KmFrom · Status · Lat/Lng · IsActive? |
| Mobile.Bff `asset/*` | proxy catch-all `MobileApiProxyController` |
| DOMAIN-MAP | Asset · **cấm** ERP.* |
| `api/v1/asset-adjust` / Finance `api/v1/assets` | **không** — **cấm invent** |
| Step 4b | **N/A** — GET/PUT/DELETE **DONE** · **cấm** data_analy migration |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `DELETE/PUT asset-adjust` / mobile-only DTO fork  
- Hard delete · fake 200 khi fail  
- Enqueue DELETE/PUT như sibling feature (`GAP-MOB-ACT-07`)  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T23:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-bff-20260830 |
| bffContentHash | sha256:asset-road-assets-list-put-delete-proxy-20260830 |
| taskId | `task_0fcd1c99` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
