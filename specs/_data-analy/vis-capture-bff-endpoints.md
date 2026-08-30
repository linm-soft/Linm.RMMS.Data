# BFF endpoints — vis-capture (mobile · Nhận diện mặt đường)

| | |
|---|---|
| feature | `vis-capture` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · AiVision · Incident · Patrol |
| source | CTX `vis-capture.md` · `ai-vision.md` · `AiVisionOpsController` · `AiVisionUploadsController` · `AiVisionDetectionsController` · `IncidentsController` · demo `#sc-vis-capture` |
| **cấm** | invent `api/v1/vis-capture` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | AiVision · Incident · Patrol | **Không** — proxy rewrite |
| Dedicated VisCaptureController | **không** | **cấm invent** |

## Table — `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Optional media init | POST | `ai-vision/uploads/init` | proxy | `AiVisionUploadsController.Init` | live | optional |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | proxy | Put object | live | optional |
| Optional media complete | POST | `ai-vision/uploads/complete` | proxy | Complete | live | optional |
| Nhận diện sau ảnh + GPS | POST | `ai-vision/detect` | proxy | `AiVisionOpsController.Detect` | CTX · live DTO | **GAP-MOB-VIS-DETECT-01** stub engine |
| Optional reload detection | GET | `ai-vision/detections/{id}` | proxy | GetById | DOMAIN-MAP | optional |
| Prefill tuyến / ca (loc) | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | optional | filter Đang tuần |
| Gắn sự cố | POST | `incident/incidents` | proxy | `IncidentsController.Create` | CTX · live | bind DetectionId |
| GPS chốt / accuracy | — | — | — | Device CL / Fused | gate ≤ 30 m | **không** API |
| Camera capture | — | — | — | Device camera | PhotoRow | **không** API |
| Bỏ qua | — | — | — | local UI | dismiss | **không** API |
| Offline queue | — | — | — | local → `patrol-offline` | | **không** invent path |

## Query (sessions)

`search` · `status` · `route` · `page` · `pageSize`  
Mobile P1 optional: session `Status=Đang tuần` · `page=1` · `pageSize=50`.

## DTO bind (live)

### Detect request

`DetectAiVisionRequest`: `Engine?` · `Note?` · `ImageBase64?` · `Lat?` · `Lng?` · `AccuracyM?` · `VideoRef?`  
→ response `AiVisionDetectionDto`: `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `Lat` · `Lng` · `RouteLabel` · `SectionId` · `IncidentCode` · …

P1 client: **chỉ** POST khi có GPS và `AccuracyM ≤ 30` (guide).

### Create incident (Gắn sự cố)

`CreateIncidentRequest` (fields live): `Title` · `RouteName` · `IncidentType` · `Status` · `Severity?` · `KmStart?` · `KmEnd?` · `DetectionId?` · `Description?` · `HasGps` · `RequestedAt` · …

P1 map từ detection + stamp:

| UI / detect | → Create body |
|-------------|----------------|
| DefectClass / Phân loại | `Title` · `IncidentType` |
| RouteLabel / rowLoc | `RouteName` · `KmStart` |
| Detection `Id` | `DetectionId` |
| Severity / Mức | `Severity` |
| GPS chốt | `HasGps=true` |
| Note | `Description` optional |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| POST | `ai-vision/detect-assets` | `ai-asset-detect` / `det-hitl` — **OUT** |
| POST | `ai-vision/its/detect` | ITS — **OUT** |
| Full | `ai-vision/predict*` · `estimates*` | predict / estimate — **OUT** |
| CRUD | `ai-vision/detections` list/create full | web catalog — **OUT** (GET by id optional) |
| Screen | `#sc-cam-patrol` · `#sc-inc-form` | siblings — **OUT** |

## Verify live

| Check | Result |
|-------|--------|
| `POST api/v1/ai-vision/detect` | **Live** (`AiVisionOpsController`) |
| `POST api/v1/ai-vision/uploads/init` | **Live** |
| `PUT api/v1/ai-vision/uploads/{id}/object` | **Live** |
| `GET api/v1/ai-vision/detections/{id}` | **Live** |
| `GET api/v1/patrol/sessions` | **Live** |
| `POST api/v1/incident/incidents` | **Live** |
| `api/v1/vis-capture` | **không** — **cấm invent** |

## Step 4b

**Pending SA** nếu Signed: harden detect engine body / upload pipeline — **cấm** data-analy chạy migration / Step 4b (roleOnly). Ghi GAP · handoff PO → SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T08:28:20.000Z` |
| versionGate | rechecked |
| contentHash | sha256:vis-capture-mobile-bff-20260829 |
| bffContentHash | sha256:vis-capture-mobile-bff-20260829 |
| taskId | `task_086ba802` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
