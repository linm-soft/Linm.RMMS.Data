# BFF endpoints — asset-ai (mobile · Camera AI)

| | |
|---|---|
| feature | `asset-ai` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · AiVision · Integration · Patrol |
| source | CTX `asset-ai.md` · `ai-asset-detect.md` · `AiVisionDetectAssetsController` · `AiVisionAssetCandidatesController` · `AiVisionUploadsController` · demo `#sc-asset-ai` |
| **cấm** | invent `api/v1/asset-ai` · Finance `api/v1/assets` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · AiVision / Integration / Patrol | **Không** — proxy rewrite |
| Web domain BFF | `AiVisionAssetCandidatesBffController` | **Không** — mobile = mobile-bff |
| Dedicated AssetAiController | **không** | **cấm invent** |

## Table — form `#sc-asset-ai` · `DES-MOB-ASSET-AI`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Prefill tuyến (optional) | GET | `patrol/sessions` | proxy | `PatrolSessionsController` | ca Đang tuần | rowPos |
| Resolve tuyến code | GET | `integration/road-routes/search` | proxy | `RoadRoutesController` | require RouteId | rowPos |
| Upload frame init | POST | `ai-vision/uploads/init` | proxy | `AiVisionUploadsController.Init` | ImageUrl | MEDIA-01 |
| Upload object | PUT | `ai-vision/uploads/{id}/object` | proxy | uploads Object | token query | MEDIA-01 |
| Detect → Draft candidates | POST | `ai-vision/detect-assets` | proxy | `AiVisionDetectAssetsController.Detect` | `DetectAssetsRequest` | btnSend · DET-01 |
| Nearby warn (optional) | GET | `ai-vision/asset-candidates/nearby` | proxy | candidates Nearby | dedupe | optional |
| GPS chốt | — | — | — | Device CL / Fused | Lat/Lng * | **không** API |
| Camera capture | — | — | — | Device camera | PhotoRow | **không** API |
| Nav HITL | — | — | — | local nav | `go('det-hitl')` + candidate id | HITL-01 |
| Nav back / Hủy | — | — | — | local nav | `go('asset-hub')` | **không** API |
| Toast ok / err | — | — | — | local UI | controlHint | **không** API |

## DTO bind (live detect)

### `DetectAssetsRequest` → POST `ai-vision/detect-assets`

| Wire | Required | UI / nguồn |
|------|----------|------------|
| `ImageUrl` | **yes** | sau uploads · **cấm** `mock://` |
| `Lat` · `Lng` | **yes** | GPS chốt · BE reject cả 0 |
| `RouteId` | **yes** | sessions / road-routes |
| `RouteLabel` | no | display rowPos |
| `PatrolTripId` | no | session Id |
| `Engine` | no | default P1 |
| `HasImage` · `ImageFileName` | no | upload meta |

### Response `AssetCandidateDto[]` (bind rows + toast)

| Field | UI |
|-------|-----|
| `AssetClass` | rowClass «Loại đề xuất» |
| `Score` | rowScore (demo %) · SCORE-01 |
| `RouteLabel` (+ Km derived) | rowPos |
| `Code` · `Id` | toast · handoff `det-hitl` |
| `Lat` · `Lng` | verify vs device |
| `NearbyRisk` | optional warn · không block P1 |

Detect service **auto Create** Draft candidates — **không** cần POST `asset-candidates` riêng trên CTA P1.

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `asset-ai`.

## Có trên domain — **không** thuộc slug `asset-ai` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `ai-vision/asset-candidates` | list Draft — hub pending / `det-hitl` |
| GET | `ai-vision/asset-candidates/{id}` | detail — `det-hitl` |
| POST | `ai-vision/asset-candidates/{id}/confirm` | → Asset — **owner `det-hitl`** |
| POST | `ai-vision/asset-candidates/{id}/dismiss` | dismiss — **owner `det-hitl`** |
| POST | `ai-vision/detect` | defect mặt đường — owner `cam-patrol` / `ai-vision` |
| POST | `asset/road-assets` | manual create — owner `asset-collect` |
| POST | `ai-vision/detect-assets/batch` | batch chuyến — **OUT** P1 mobile form |
| Web | `web-bff` / domain AiVision BFF | web · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `AiVisionDetectAssetsController` | `[Route("api/v1/ai-vision")]` POST `detect-assets` · batch |
| `DetectAssetsRequest` | ImageUrl · Lat/Lng · RouteId · Engine · HasImage… |
| `AiVisionAssetCandidateService.DetectAssetsAsync` | reject mock:// · require RouteId · Lat/Lng · Create Draft |
| `AiVisionUploadsController` | `api/v1/ai-vision/uploads` init + object |
| `AiVisionAssetCandidatesController` | CRUD + confirm/dismiss — HITL |
| Mobile.Bff `ai-vision/*` | proxy catch-all `MobileApiProxyController` |
| DOMAIN-MAP | AiVision · Integration · Patrol · **cấm** ERP.* |
| `api/v1/asset-ai` / Finance `api/v1/assets` | **không** — **cấm invent** |
| Step 4b | **N/A** — detect/uploads **DONE** · **cấm** data_analy migration |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `POST asset-ai` / mobile-only DTO fork  
- Ship proposal hardcode khi BFF live (`GAP-MOB-REAL-02`)  
- Confirm/Dismiss trên slug này (`GAP-MOB-ACT-02`)  
- Enqueue detect/upload/GPS như sibling feature (`GAP-MOB-ACT-07` — cùng slug)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T17:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-ai-bff-20260901 |
| taskId | `task_fcd587c7` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
