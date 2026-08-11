# SA — solution-discovery — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `confirmed` (autopilot · solution_confirm=approve) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | `AiVision` · kebab `ai-vision` (DOMAIN-MAP) |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:34:00.000Z` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/AiVision` · `api/domains/ai-vision` · `bff/domains/ai-vision`.  
**Cấm** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## 1. Decision

| Topic | Choice |
|-------|--------|
| API | `GET/POST/PUT/DELETE api/v1/ai-vision/detections` |
| Detect stub | `POST api/v1/ai-vision/detect` |
| PCI stub | `GET api/v1/ai-vision/pci-history/{sectionId}` |
| BFF | `web-bff/api/v1/ai-vision/**` → API |
| Entity | `AiVisionDetectionEntity` · `rmms_ai_vision_detections` |
| Migration | **`Schema_RmmsAiVisionDetections`** (`20260808144600_…`) — DDL tách khỏi SystemSettings |
| Search | `?search=` + defectClass/severity/status/engine/sectionId · page/pageSize |
| Soft delete | `IsActive=false` |
| Tenant | `HasQueryFilter` CompanyCode |

## 2. controlHint → API

| controlHint | API consumer |
|-------------|--------------|
| SearchInput search | `GET …/detections?search=` |
| Dropdown filters | query defectClass/severity/status/engine |
| Form Text/Dropdown | POST/PUT body fields |

## 3. Files

| Layer | Path |
|-------|------|
| Entity | `api/shared/.../Entities/AiVisionDetectionEntity.cs` |
| DTOs | `api/domains/ai-vision/.../AiVisionDetectionDtos.cs` |
| Service/Controller | `api/src/.../Domains/AiVision/` |
| BFF | `bff/domains/ai-vision/.../AiVisionDetectionsBffController.cs` |
| Migration | `Migrations/20260808144600_Schema_RmmsAiVisionDetections.cs` |

## 4. Handoff → TL

T-BE-01/02/03 · T-UI-LIST/FORM · T-PERM · retry SSOT re-review

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
