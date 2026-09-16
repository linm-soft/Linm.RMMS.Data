# Implement — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `done` |
| changeScope | `edit_page` |
| taskId | `task_f56eb5df` |
| priorTaskId | `task_9a41139f` |
| contentHash | `sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| mfeStdRoute | `/ai-vision` |
| mfeStdUrl | `http://localhost:9301/ai-vision` |
| updatedAt | `2026-09-12T08:55:00.000Z` |

## Edit delta (`task_f56eb5df` · Upload+detect)

| gap | fix |
|-----|-----|
| GAP-UPLOAD-FILE | Zone A + form `LinImageUpload` → FileService `web-bff/api/v1/files/*` · persist `imageFileId` · resign preview · **cấm** FilesController |
| GAP-TOOLBAR-DETECT | Zone A: engineDetect + runDetect · disable khi chưa có frame |
| GAP-DETECT-BODY | `POST …/detect` `{ imageUrl\|imageFileId, engine? }` · Draft |
| GAP-TAXONOMY-SEP | `services/aiVision/taxonomy.ts` · 10 class MD · **cấm** TS |
| T-BE-04 | Entity/DTO/Service + mig `ImageFileId` trên `rmms_ai_vision_detections` |

## Code map

| Layer | Path |
|-------|------|
| List Zone A | `src/pages/AiVisionListPage/AiVisionListPage.tsx` |
| Form upload | `src/pages/AiVisionFormPage/AiVisionFormPage.tsx` |
| Frame upload | `src/services/aiVision/frameUpload.ts` |
| Taxonomy | `src/services/aiVision/taxonomy.ts` |
| Client detect | `src/services/aiVision/endpoint.ts` · `aiVisionService.ts` |
| Entity | `RMMS.Service.Persistence/Entities/AiVisionDetectionEntity.cs` |
| DTOs | `LINM.RMMS.AiVision.Models/DTOs/AiVisionDetectionDtos.cs` |
| Service | `AiVisionDetectionService.DetectAsync` · validate frame |
| Migration | `20260912120000_Schema_RmmsAiVisionDetections_ImageFileId.cs` |
| Files BFF | reuse `AddLinmFileServiceBff` · `web-bff/api/v1/files/*` |

## Verify

| Gate | Result |
|------|--------|
| FE `yarn build` | **PASS** (size warnings only) |
| BE `dotnet build` Release | **PASS** |
| E2E / start:std | **cấm** Dev · queued QA |

## Task status

| id | status |
|----|--------|
| T-UI-UPLOAD | **done** |
| T-BE-04 | **done** |
| T-UI-LIST / 02 / FORM | done (prior) |
| T-BE-01..03 | done (prior) |
| T-QA-01 | pending → `/agent-qa*` |

## Debt

- GAP-F-AIV-04 Vision host OUT · detect stub OK
- FileService API local may 5xx if File.Api down · BFF route wired
- Apply mig `Schema_RmmsAiVisionDetections_ImageFileId` on deploy

## Cấm

- ERP.* · AI chrome header · e2e ở Dev · invent FilesController
