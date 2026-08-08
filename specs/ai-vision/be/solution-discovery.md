# SA — solution-discovery — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `confirmed` (autopilot · solution_confirm=approve) |
| backend | `D:/ERP/Linm.Web.ERP.WebService` |
| updatedAt | 2026-08-08T08:44:00.000Z |

## 1. Decision

| Topic | Choice |
|-------|--------|
| Host | ERP WebService (packet BE root) — Master-hosted greenfield |
| API | `GET/POST/PUT/DELETE api/v1/ai-vision/detections` |
| Detect stub | `POST api/v1/ai-vision/detect` → creates Draft detection |
| PCI stub | `GET api/v1/ai-vision/pci-history/{sectionId}` |
| BFF | `web-bff/api/v1/ai-vision/**` → loopback `api/v1/ai-vision/**` |
| Collision | Không dùng Finance assets; tách slug `ai-asset-detect` |
| Entity | `AiVisionDetectionEntity : TenantEntity` · table `rmms_ai_vision_detections` |
| Search | `?search=` + defectClass/severity/status/engine/sectionId · page/pageSize |
| Soft delete | `IsActive=false` |

## 2. API blocks

### API-01 List

`GET /api/v1/ai-vision/detections` — query search, defectClass, severity, status, engine, sectionId, page, pageSize

### API-02 Get

`GET /api/v1/ai-vision/detections/{id}`

### API-03 Create

`POST` — code server `DET-{yyMMdd}-{n}` · required defectClass, score, severity, status, engine, sectionId

### API-04 Update / API-05 Delete soft

### API-06 Detect stub · API-07 PCI history stub

## 3. DTO fields

id, code, defectClass, score, severity, status, lat, lng, sectionId, routeLabel, bboxJson, imageUrl, modelVersion, engine, pciSnapshot, sourceKind, note, incidentCode, detectedAt, isActive, createdAt, updatedAt

## 4. Files

Entity RmmsEntities · AppDbContext · DTOs AiVision* · AiVisionDetectionService · AiVisionDetectionsController · AiVisionBffController · MasterDomainRegistration · Schema_RmmsAiVisionDetections

## 5. FE contract

`/ai-vision/detections` + localStorage fallback · incident via update status+incidentCode

## 6. Handoff → TL

be-api · be-bff · be-migration · fe-list · fe-form · wire-client
