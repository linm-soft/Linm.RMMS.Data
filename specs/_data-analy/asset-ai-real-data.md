# Real-data bind — asset-ai

| | |
|---|---|
| feature | `asset-ai` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy AiVision detect-assets + uploads + Patrol/Integration |
| taskId | `task_fcd587c7` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `asset-ai.md` · `AiVisionDetectAssetsController` · `DetectAssetsRequest` · `AssetCandidateDto` | empty list → toast không đề xuất · giữ finder | Toast 422/mạng · **cấm** fake 200 |
| `api` | `AiVisionUploadsController` · ImageUrl | upload fail → block detect | toast |
| `api` | optional `patrol/sessions` · `road-routes/search` | thiếu RouteId → block send | toast |
| `api` | optional `asset-candidates/nearby` | empty = ok | toast soft |
| `device` | GPS chốt · Camera | deny → `DES-MOB-GPS-DENY` · CTA off | — |
| `demo` | mobile-p1 `#sc-asset-ai` SSOT | UI-only preview | **không** SSOT ship khi live OK |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| photos | (ảnh) | PhotoRow | — | local → uploads | `ImageUrl` | gap→api | yes |
| addPhoto | (camera) | CameraButton | — | device | — | — | yes |
| rowPos | Vị trí đã chốt | ListRow | road-route | GET sessions/routes + GPS | `RouteId` · `RouteLabel` · `Lat` · `Lng` | yes | yes |
| rowClass | Loại đề xuất | ListRow | asset-class AI | POST detect response | display `AssetClass` | yes | yes |
| rowScore | Độ tin cậy | ListRow | — | POST detect | display `Score` | yes | yes |
| btnSend | Gửi nhận diện | PrimaryButton | — | POST `ai-vision/detect-assets` | full Detect body | yes | yes |
| btnCancel | Hủy | SecondaryButton | — | local nav hub | — | — | yes |
| toastOk | Đã gửi… | Toast | — | after POST 200 | display `Code` | yes | yes |
| toastErr | (lỗi) | Toast | — | after fail | — | — | yes |

§B path **khớp** `asset-ai-bff-endpoints.md` — **không** invent `asset-ai` / Finance `assets`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | GET `integration/road-routes/search` · sessions | DB `RoadRoutes` | Fake `QL.1` khi live reject |
| asset-class AI | detect response / init-data AssetClasses | `ai_vision.asset_candidates` taxonomy | Hardcode «Cống» làm SSOT khi API OK |
| — | — | Draft sau detect | In-app demo rows làm nguồn khi BFF OK |

## §D — Map / vẽ

`map: none` embed trên `#sc-asset-ai`. Vị trí = ListRow text · **không** CTA gis-map P1.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Form open | nav hub | user tile | GET sessions optional | start GPS |
| GPS fix | device | OS | — | rowPos · enable send |
| GPS deny | OS | user | — | `DES-MOB-GPS-DENY` · CTA off |
| Photo local | camera | user | — | PhotoRow fill |
| Upload | frame | user/auto | POST uploads | `ImageUrl` |
| Detect / Send | CTA | user | POST detect-assets | bind class/score · toast Code |
| 422 validate | server | ImageUrl/Route/GPS | POST | toast · giữ form |
| Handoff HITL | after ok | nav | — | `go('det-hitl')` + Id |
| Confirm Asset | — | — | confirm | **OUT** — `det-hitl` |
| Manual create Source=manual | — | — | POST road-assets | **OUT** — `asset-collect` |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «hub → Camera AI · GPS · upload · detect thật · push HITL» · GAP score/pack/media |
| Design | dual `#sc-asset-ai` · SCORE chrome · chrome back |
| SA | giữ detect + uploads · **cấm** ERP.* · Step 4b N/A |
| Dev iOS + Android | cùng §B · wire hub → push · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake POST 200)

| Field | Value |
|-------|-------|
| Title | Camera AI |
| Section | Chụp tài sản / thiết bị mới |
| Vị trí | QL.1 · Km 1556+000 |
| Loại đề xuất | Cống |
| Độ tin cậy | 91% |
| CTA | Gửi nhận diện |
| Secondary | Hủy |
| Back | Tài sản → hub |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-ASSET-AI-NAV-01 | hub toast only | Nav + screen |
| GAP-MOB-ASSET-AI-CTA-01 | — | POST detect + toast Code + HITL |
| GAP-MOB-ASSET-AI-MEDIA-01 | — | uploads → ImageUrl |
| GAP-MOB-ASSET-AI-GPS-01 | — | Lat/Lng required · deny chrome |
| GAP-MOB-ASSET-AI-DET-01 | — | bind AssetClass · Score |
| GAP-MOB-ASSET-AI-HITL-01 | — | enqueue det-hitl · không confirm |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake lat/lng / mock:// ImageUrl  
- Invent mobile-only path `asset-ai`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Confirm vào sổ trên slug này → **GAP-MOB-ACT-02**  
- Enqueue capture/detect/GPS → **GAP-MOB-ACT-07**  
- Gộp `asset-collect` / `cam-patrol` / defect detect  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T17:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-ai-real-data-20260901 |
| taskId | `task_fcd587c7` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
