# Team lead — tasks — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `ai` |
| featureKind | `B` |
| taskId | `task_9a41139f` |
| contentHash | `sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| mfeStdRoute | `/ai-vision` |
| mfeStdUrl | `http://localhost:9301/ai-vision` |
| route_confirm | `existing` — no new URL |
| updatedAt | `2026-09-12T08:35:00.000Z` |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `AiVision` · `api/v1/ai-vision` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/ai-vision/ai-vision.html` |
| Context | `Linm.RMMS.Data/docs/context/features/ai-vision.md` |
| controlHint | `specs/_data-analy/features/ai-vision-control-hint.md` |
| realData | `specs/_data-analy/features/ai-vision-real-data.md` |
| design | `specs/ai-vision/ui/design.md` |
| solution | `specs/ai-vision/be/solution-discovery.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html` |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP · FilesController / presigned persist · AI chrome header · trộn defectClass ↔ catalog TS.

## Delta (edit_page — this pack)

Họp 04/09 + prior confirmed: list/form CRUD **giữ**. Dev **chỉ** đóng OPEN gaps:

| GAP | Surface | DoD |
|-----|---------|-----|
| **GAP-UPLOAD-FILE** | Zone A + form | FileUpload → FileService `web-bff/api/v1/files/*` · `/init-bff-file`+`/integrate-file-upload-web` · persist `imageFileId` · resign preview · **cấm** FilesController |
| **GAP-TOOLBAR-DETECT** | Zone A | `engineDetect` (P1 default) + `runDetect` · disable nếu thiếu frame |
| **GAP-DETECT-BODY** | detect API | `POST …/detect` body `{ imageUrl\|imageFileId, engine? }` · Draft |
| **GAP-TAXONOMY-SEP** | filters/form | 10 class MD only · **cấm** TS / ai-asset-detect |

**OUT:** GAP-F-AIV-04 Vision host `Linm.RMMS.Vision` · Kind F map · AI chrome.

**CLOSED prior:** sectionId filter · statusLabel VI · T-UI-LIST / T-UI-FORM / T-BE-* (CRUD).

## Retry SSOT (HARD — trước Dev Write)

Dev **MUST** re-audit live list per `tl-retry-ssot-rereview` (edit_page surface):

1. 1× LinPageLayout — cấm nested CatalogListShell  
2. Footer = LinCatalogListPagination — cấm footerPagination / pageSizeBar  
3. Flex + useServerPagedListLoading skeleton  
4. Toolbar: refresh · history · config · +Thêm · **+ Upload/detect (Zone A delta)**  
5. SearchTextInput + filters (defectClass 10 MD · sectionId · status VI)  
6. LinCatalogDataGrid columnDefs · resize default ON  
7. Form C/E/V/Copy + FileUpload `attachFrame` checklist  

Ghi `retry.ssot_rereview` trên implement MD. **Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface.

## Tasks

| id | page | layer | role | deps | skills | status | DoD |
|----|------|-------|------|------|--------|--------|-----|
| T-CTX-01 | ai-vision | docs | team_lead | — | — | **done** | Context+demo+controlHint+realData linked |
| T-PERM-01 | ai-vision | ui | team_lead | — | tl-ssot-permission | **done** | useAiVisionPermissions |
| T-UI-LIST | /ai-kd | ui-list | dev | T-CTX-01 | erp-form-context Kind B | **done** | Zones A–D · LinCatalogListPagination · LAYOUT-06 |
| T-UI-LIST-02 | /ai-kd | ui-list | dev | T-CTX-01 | — | **done** | sectionId filter · status labels VI |
| T-UI-UPLOAD | /ai-kd | ui-list+form | dev | T-UI-LIST-02 | init-bff-file · integrate-file-upload-web · retry SSOT | **pending** | GAP-UPLOAD-FILE · GAP-TOOLBAR-DETECT · GAP-DETECT-BODY · GAP-TAXONOMY-SEP · build PASS |
| T-UI-FORM | /ai-kd/:id | ui-form | dev | T-UI-LIST | erp-form-context | **done** | C/E/V/Copy + incident — **gap** FileUpload → closed by T-UI-UPLOAD |
| T-BE-01 | detections | api | dev | — | create-bff-api-feature | **done** | Entity+DTO+Service+Controller |
| T-BE-02 | ai-vision | bff | dev | T-BE-01 | create-bff-api-feature | **done** | BFF proxy |
| T-BE-03 | detections | migration | dev | T-BE-01 | database-migration | **done** | `rmms_ai_vision_detections` |
| T-BE-04 | detections | api | dev | T-BE-01 | — | **pending** | Verify/add `ImageFileId` column+DTO if missing · detect accepts `imageFileId` · **không** Step 4b ở TL |
| T-QA-01 | ai-vision | qa | qa | T-UI-UPLOAD,T-BE-02 | — | **pending** | scenarios.md · E2E only `/agent-qa*` |
| T-RV-01 | ai-vision | review | review | T-QA-01 | review-query | **pending** | findings.md |

## Deps order (this pack)

T-UI-UPLOAD (+ T-BE-04 verify ImageFileId) → implement MD + builds (Dev) → T-QA-01 → T-RV-01

## Dev handoff notes

- **Lane:** web · MFE cwd `Linm.Web.RMMS.AiVision`
- **BE:** `Linm.RMMS.WebService` only · Domain-MAP AiVision
- **API:** GET/POST/PUT/DELETE `api/v1/ai-vision/detections` · POST `…/detect` · GET `…/pci-history/{sectionId}` · files `web-bff/api/v1/files/*`
- **Zones:** A toolbar(+Upload/detect) · B filter · C grid · D pagination · Form C/E/V/Copy
- **Grid:** STT·Mã·Class·Score·Severity·Section·Route·Status·Engine·Incident·actions · pageSize 50
- **Leave AC:** dirty confirm · no detect without frame · upload fail → no detect
- **Stub OK:** `POST …/detect` mock:// until Vision host pack
- Write: `specs/ai-vision/implement/ai-vision.md` · compact `handoff/dev-compact.md`

## Confirms (inherited Autopilot)

| Key | Value |
|-----|-------|
| design_confirm | approve |
| solution_confirm | approve |
| review_confirm | approve (prior) |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok · taskId=task_9a41139f · changeScope=edit_page -->
