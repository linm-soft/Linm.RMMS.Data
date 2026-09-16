# SA — solution-discovery — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `confirmed` (autopilot · solution_confirm=approve) |
| changeScope | `edit_page` |
| taskId | `task_086859a2` |
| contentHash | `sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | `AiVision` · kebab `ai-vision` (DOMAIN-MAP) |
| mfe | `Linm.Web.RMMS.AiVision` · `/ai-vision` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| updatedAt | `2026-09-12T08:30:00.000Z` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/AiVision` · `api/v1/ai-vision/**` · `web-bff/api/v1/ai-vision/**`.  
**Cấm** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP · FilesController legacy / presigned persist.

## 1. Decision (edit_page delta)

| Topic | Choice |
|-------|--------|
| Keep | CRUD detections · list filters · form C/E/V/Copy · soft delete · tenant filter |
| Upload HARD | FileService `web-bff/api/v1/files/*` · `/init-bff-file` + `/integrate-file-upload-web` · persist **`imageFileId`** · preview via resign · **cấm** invent FilesController |
| Detect body | `POST api/v1/ai-vision/detect` · body `{ imageUrl \| imageFileId, engine? }` · P1 default · status Draft · disable nếu thiếu frame |
| Taxonomy HARD | 10 class MD only · **cấm** trộn defectClass ↔ catalog TS / ai-asset-detect |
| Vision host | **GAP-F-AIV-04 OUT** → pack `ai-vision-service` · host `Linm.RMMS.Vision` · stub `mock://` OK this pack |
| BFF | `web-bff/api/v1/ai-vision/**` proxy → API · files via shared File BFF (not AiVision invent) |
| Entity | `AiVisionDetectionEntity` · table `rmms_ai_vision_detections` · **delta** ensure `ImageFileId` (guid?) column if missing |
| Migration | Keep `Schema_RmmsAiVisionDetections` · **chỉ** add column migration nếu `ImageFileId` chưa có (Dev Step 4b — **không** chạy ở SA) |
| Search | `?search=` + defectClass/severity/status/engine/sectionId · page/pageSize=50 |

## 2. FormMode ↔ API

| FormMode | API | Notes |
|----------|-----|-------|
| List | `GET …/detections` | Zone B filters · Zone C grid · Zone D pageSize 50 |
| Create | `POST …/detections` | Zone A/form FileUpload → files/* → set `imageFileId` · optional `POST …/detect` trước/sau draft |
| Edit | `PUT …/detections/{id}` | re-upload → new `imageFileId` · resign `imageUrl` |
| View | `GET …/detections/{id}` | readonly · resign preview · no detect |
| Copy | `POST …/detections` | clone fields · clear/regenerate incidentCode · re-attach frame optional |
| Detect | `POST …/detect` | requires `imageUrl` **or** `imageFileId` · engine P1\|P2 |
| PCI | `GET …/pci-history/{sectionId}` | unchanged stub |

## 3. controlHint → API (delta + keep)

| controlHint / id | API consumer |
|------------------|--------------|
| SearchInput `search` | `GET …/detections?search=` |
| Dropdown filters | query defectClass/severity/status/engine/sectionId |
| FileUpload `attachFrame` | `web-bff/api/v1/files/*` → persist `imageFileId` |
| hidden `imageFileId` | POST/PUT body · detect body |
| Dropdown `engineDetect` | detect body `engine` (P1 default) |
| Button `runDetect` | `POST …/detect` |
| Text `imageUrl` | derived resign (not raw persist) |
| Form Text/Dropdown/Number | POST/PUT body fields |
| Text `incidentCode` | server/readonly VI-* |

## 4. Files / layers

| Layer | Path |
|-------|------|
| Entity | `api/shared/.../Entities/AiVisionDetectionEntity.cs` (+ `ImageFileId` if GAP) |
| DTOs | `api/domains/ai-vision/.../AiVisionDetectionDtos.cs` · DetectRequest `{ imageUrl?, imageFileId?, engine? }` |
| Service/Controller | `api/src/.../Domains/AiVision/` |
| BFF AiVision | `bff/domains/ai-vision/...` proxy detections + detect |
| File BFF | shared `web-bff/api/v1/files/*` (SSOT FileService) |
| Migration | existing `20260808144600_Schema_RmmsAiVisionDetections` · optional delta column |

## 5. OPEN → Dev / TL (ids)

| GAP | Owner | Note |
|-----|-------|------|
| GAP-UPLOAD-FILE | Dev · T-UI-UPLOAD | Zone A + form FileUpload FileService |
| GAP-TOOLBAR-DETECT | Dev | Zone A engineDetect + runDetect |
| GAP-DETECT-BODY | Dev/BE | accept `imageUrl\|imageFileId` |
| GAP-TAXONOMY-SEP | Dev | 10 class MD only |
| GAP-F-AIV-04 | OUT | Vision host pack |

## 6. Handoff → TL

- Keep T-BE-01/02/03 done · prioritize **T-UI-UPLOAD** · BE detect-body + `ImageFileId` if missing  
- T-QA-01 queued after upload · autoApprove · e2eQa QA-only  
- **Cấm** ERP.* · **cấm** AI chrome · Kind F OUT

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok · taskId=task_086859a2 -->
