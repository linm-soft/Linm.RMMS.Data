# SA — solution-discovery — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `confirmed` (autopilot · solution_confirm=approve · **RMMS restart**) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | `AiVision` · kebab `ai-vision` (DOMAIN-MAP) |
| updatedAt | 2026-08-08T12:20:00.000Z |

## 0. Correction

Previous draft incorrectly targeted `D:/ERP/Linm.Web.ERP.WebService` + `MasterDomainRegistration`.  
**Discarded.** Only implement under `Linm.RMMS.WebService` / `Domains/AiVision` · `api/domains/ai-vision` · `bff/domains/ai-vision`.

## 1. Decision

| Topic | Choice |
|-------|--------|
| Host | `Linm.RMMS.WebService` — domain AiVision |
| API | `GET/POST/PUT/DELETE api/v1/ai-vision/detections` |
| Detect stub | `POST api/v1/ai-vision/detect` → creates Draft detection |
| PCI stub | `GET api/v1/ai-vision/pci-history/{sectionId}` (in-memory stub) |
| BFF | `web-bff/api/v1/ai-vision/**` → loopback `api/v1/ai-vision/**` |
| Collision | Không dùng Finance / ERP.Master; tách slug `ai-asset-detect` |
| Entity | `AiVisionDetectionEntity : TenantEntity` · table `rmms_ai_vision_detections` |
| Search | `?search=` + defectClass/severity/status/engine/sectionId · page/pageSize |
| Soft delete | `IsActive=false` |
| Tenant | `HasQueryFilter` on `CompanyCode` (Asset pattern) |

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

## 4. Files (RMMS layout 2A)

| Layer | Path |
|-------|------|
| Entity | `api/shared/RMMS.Service.Persistence/Entities/AiVisionDetectionEntity.cs` |
| DbContext | `AppDbContext` DbSet + tenant filter |
| DTOs | `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/AiVisionDetectionDtos.cs` |
| Service | `api/src/.../Domains/AiVision/Services/AiVisionDetectionService.cs` |
| Controller | `.../Controllers/AiVisionDetectionsController.cs` (+ detect/pci on domain routes) |
| DI | `AiVisionDomainRegistration` |
| BFF | `bff/domains/ai-vision/.../AiVisionDetectionsBffController.cs` |
| Migration | `Schema_RmmsAiVisionDetections` |

## 5. FE contract

`/ai-vision/detections` + localStorage fallback · incident via update status+incidentCode  
MFE: `Linm.Web.RMMS.AiVision`

## 6. Handoff → TL

be-api · be-bff · be-migration · fe-list · fe-form · wire-client
