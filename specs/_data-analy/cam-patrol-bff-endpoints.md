# BFF endpoints — cam-patrol (mobile · Thu thập bằng camera)

| | |
|---|---|
| feature | `cam-patrol` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · AiVision · Incident · Patrol |
| source | CTX `cam-patrol.md` · `ai-vision.md` · `IncidentsController` · `AiVisionOpsController` · design §5b |
| **cấm** | invent `api/v1/cam-patrol` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | AiVision · Incident · Patrol | **Không** — proxy rewrite |
| Dedicated CamPatrolController | **không** | **cấm invent** |

## Table — `#sc-cam-patrol` · `DES-MOB-CAM-PATROL`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Prefill tuyến / ca active | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | CTX patrol-home | filter Đang tuần client |
| Auto detect (frame) | POST | `ai-vision/detect` | proxy | `AiVisionOpsController.Detect` | CTX ai-vision · live stub | **GAP-MOB-CAM-DETECT-01** body ảnh/GPS mỏng |
| Optional load detection | GET | `ai-vision/detections` | proxy | `AiVisionDetectionsController` | DOMAIN-MAP | optional |
| Optional detection by id | GET | `ai-vision/detections/{id}` | proxy | GetById | DOMAIN-MAP | optional |
| Confirm · tạo vấn đề | POST | `incident/incidents` | proxy | `IncidentsController.Create` | design §5b · live | bind `DetectionId` |
| GPS stamp | — | — | — | Device CL / Fused | finder stamp | **không** API |
| Camera finder stream | — | — | — | Device camera | `DES-MOB-CAM-FINDER` | **không** API |
| Skip / dismiss | — | — | — | local UI | toast bỏ | **không** API |
| Offline queue | — | — | — | local → `patrol-offline` | | **không** invent path |

## Query (sessions)

`search` · `status` · `route` · `page` · `pageSize`  
Mobile P1: session `Status=Đang tuần` · `page=1` · `pageSize=50`.

## DTO bind (live)

### Detect request (stub hiện tại)

`DetectAiVisionRequest`: `Engine?` · `Note?`  
→ response `AiVisionDetectionDto`: `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `Lat` · `Lng` · `RouteLabel` · `SectionId` · `IncidentCode` · …

### Create incident (confirm)

`CreateIncidentRequest` (fields live): `Title` · `RouteName` · `IncidentType` · `Status` · `Severity?` · `KmStart?` · `KmEnd?` · `DetectionId?` · `Description?` · `HasGps` · `RequestedAt` · …

P1 map từ detection + stamp:

| UI / detect | → Create body |
|-------------|----------------|
| Phát hiện / DefectClass | `Title` · `IncidentType` |
| RouteLabel / stamp QL.1 | `RouteName` |
| Km stamp | `KmStart` |
| Detection `Id` | `DetectionId` |
| GPS chốt | `HasGps=true` |
| Note / action | `Description` |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| CRUD | `cameras*` | web `camera-connect` — **OUT** |
| POST | `ai-vision/detect-assets` | `ai-asset-detect` — **OUT** |
| POST | `ai-vision/its/detect` | ITS traffic — **OUT** |
| Full | `ai-vision/predict*` | predict — **OUT** |
| Form | field-reflect / incident sheet | sibling — **OUT** |

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/patrol/sessions` | **Live** |
| `POST api/v1/ai-vision/detect` | **Live stub** (`AiVisionOpsController`) |
| `GET api/v1/ai-vision/detections` | **Live** |
| `POST api/v1/incident/incidents` | **Live** |
| `api/v1/cam-patrol` | **không** — **cấm invent** |

## Step 4b

**Pending SA** nếu mở rộng `DetectAiVisionRequest` (ảnh · lat/lng · video) — **cấm** data-analy chạy migration / Step 4b (roleOnly). Ghi GAP · handoff PO → SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T21:10:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-mobile-bff-20260828 |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
