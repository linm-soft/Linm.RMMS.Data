# BFF endpoints — cam-patrol (mobile · Thu thập bằng camera)

| | |
|---|---|
| feature | `cam-patrol` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · AiVision · Incident · Patrol |
| changeScope | `edit_page` · task `task_9ab16ef2` |
| source | CTX `cam-patrol.md` · `DetectAiVisionRequest` · review GAP 2026-09-12 |
| **cấm** | invent `api/v1/cam-patrol` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta Current vs New

| Item | Current | New |
|------|---------|-----|
| `POST ai-vision/detect` body | Mobile cam-patrol gửi `ImageBase64=null` → BE Signed heuristic | App **phải** gửi `ImageBase64` từ frame · path/BFF **không** đổi |
| BE DTO | `DetectAiVisionRequest.ImageBase64` **đã live** | Không MIG / Step 4b · Dev client-only (+ optional BE reject null sau) |
| Gap | GAP-MOB-CAM-DETECT-01 (body mỏng) | **GAP-MOB-CAM-FRAME-01** supersede client null-frame · SA note: Signed vẫn heuristic nếu null — client DoD cấm gửi null |

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
| Prefill tuyến / ca active | GET | `patrol/sessions` | proxy | Patrol sessions | CTX | filter Đang tuần client |
| Auto detect (frame) | POST | `ai-vision/detect` | proxy | `AiVisionOpsController.Detect` | CTX · **ImageBase64 required client** | **GAP-MOB-CAM-FRAME-01** |
| Optional load detection | GET | `ai-vision/detections` | proxy | detections CRUD | DOMAIN-MAP | optional |
| Optional detection by id | GET | `ai-vision/detections/{id}` | proxy | GetById | DOMAIN-MAP | optional |
| Confirm · tạo vấn đề | POST | `incident/incidents` | proxy | `IncidentsController.Create` | design §5b | `DetectionId` |
| GPS stamp | — | — | — | Device | finder | **không** API |
| Camera finder + frame | — | — | — | Device camera | `DES-MOB-CAM-FINDER` | **không** API · base64 local |
| Skip / dismiss | — | — | — | local UI | toast bỏ | **không** API |
| Offline queue | — | — | — | local → `patrol-offline` | | **không** invent |

## Query (sessions)

`search` · `status` · `route` · `page` · `pageSize` — P1: `Status=Đang tuần` · `page=1` · `pageSize=50`.

## DTO bind (live)

### Detect request (`DetectAiVisionRequest`)

| Field | P1 cam-patrol |
|-------|----------------|
| `Engine?` | `"P1"` |
| `Note?` | route stamp |
| `ImageBase64?` | **DoD: non-null** JPEG/PNG base64 từ finder |
| `Lat?` · `Lng?` · `AccuracyM?` | GPS chốt |
| `VideoRef?` | null P1 |

Response `AiVisionDetectionDto`: `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `Lat` · `Lng` · `RouteLabel` · `SectionId` · …

### Create incident (confirm)

`CreateIncidentRequest`: `Title` · `RouteName` · `IncidentType` · `Status` · `Severity?` · `KmStart?` · `DetectionId?` · `Description?` · `HasGps` · `RequestedAt` · …

| UI / detect | → Create body |
|-------------|----------------|
| DefectClass | `Title` · `IncidentType` |
| RouteLabel / stamp | `RouteName` |
| Km stamp | `KmStart` |
| Detection `Id` | `DetectionId` |
| GPS chốt | `HasGps=true` |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| CRUD | `cameras*` | web `camera-connect` — **OUT** |
| POST | `ai-vision/detect-assets` | `ai-asset-detect` — **OUT** |
| POST | `ai-vision/its/detect` | ITS — **OUT** |
| Form | field-reflect | sibling — **OUT** |

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/patrol/sessions` | **Live** |
| `POST api/v1/ai-vision/detect` | **Live** · body có `ImageBase64` |
| `GET api/v1/ai-vision/detections` | **Live** |
| `POST api/v1/incident/incidents` | **Live** |
| `api/v1/cam-patrol` | **không** — **cấm invent** |

## Step 4b

**SKIP** data_analy / roleOnly — DTO `ImageBase64` đã có. Migration **n/a**. Dev = client capture frame. Optional SA sau: BE reject null ImageBase64 (không block DoD client).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T11:16:49.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-mobile-bff-20260912-frame |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260912-frame |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
