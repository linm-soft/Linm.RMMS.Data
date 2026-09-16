# Handoff compact — sa

schemaVersion: 1
feature: ai-vision
packKind: ai
featureClass: ai
role: sa
status: done
skillVersion: 2026.08.09.02
writtenAt: 2026-09-12T08:30:00.000Z
changeScope: edit_page
taskId: task_086859a2
contentHash: sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236
featureKind: B
solution_confirm: approve

## Decisions
- changeScope: edit_page · keep CRUD detections · delta Upload+detect body
- Domain AiVision · `api/v1/ai-vision` · BFF `web-bff/api/v1/ai-vision/**` · **cấm** ERP.*
- Upload HARD: FileService `web-bff/api/v1/files/*` · persist `imageFileId` · resign · cấm FilesController
- Detect: `POST …/detect` `{ imageUrl|imageFileId, engine? }` · P1 · Draft
- Entity `AiVisionDetectionEntity` · table `rmms_ai_vision_detections` · delta `ImageFileId` nếu thiếu
- Migration: chỉ column delta nếu cần · **không** chạy Step 4b ở SA
- Taxonomy HARD: 10 class MD · cấm TS
- GAP-F-AIV-04 Vision host OUT · stub OK
- FormMode: List GET · C POST · E PUT · V GET · Copy POST · Detect POST
- autoApprove ON · e2eQa queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchInput | Zone B |
| defectClass | Loại hư hỏng | Dropdown | 10 class MD |
| severity | Mức độ | Dropdown | |
| status | TT | Dropdown | VI labels |
| engine | Engine | Dropdown | P1/P2 |
| sectionId | Đoạn | Dropdown | CLOSED |
| attachFrame | Ảnh hiện trạng | FileUpload | files/* → imageFileId |
| imageFileId | File id | hidden | POST/PUT + detect |
| engineDetect | Engine detect | Dropdown | Zone A |
| runDetect | Chạy detect | Button | POST …/detect |
| lat/lng | XY | Number | form |
| imageUrl | Preview | Text | resign |
| incidentCode | VI-* | Text | readonly |

## Screens / zones (ids only)
- Zone A toolbar(+Upload/detect) · B filter · C grid · D pagination · Form C/E/V/Copy
- mfeStdUrl=http://localhost:9301/ai-vision

## API / tasks (ids only)
- GET/POST/PUT/DELETE `api/v1/ai-vision/detections`
- POST `…/detect` · GET `…/pci-history/{sectionId}`
- files `web-bff/api/v1/files/*`
- OPEN Dev: GAP-UPLOAD-FILE · GAP-TOOLBAR-DETECT · GAP-DETECT-BODY · GAP-TAXONOMY-SEP
- T-UI-UPLOAD pending · T-BE done · T-QA-01 queued

## UNCLEAR
- (none blocking) · ImageFileId column presence → Dev verify/migrate if missing

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/design-compact.md
- po compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/po-compact.md
- data_analy compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/STATUS.md
