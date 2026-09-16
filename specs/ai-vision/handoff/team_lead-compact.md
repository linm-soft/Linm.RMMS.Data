# Handoff compact — team_lead

schemaVersion: 1
feature: ai-vision
packKind: ai
featureClass: ai
role: team_lead
status: done
skillVersion: 2026.08.09.02
writtenAt: 2026-09-12T08:35:00.000Z
changeScope: edit_page
taskId: task_9a41139f
contentHash: sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236
featureKind: B
route_confirm: existing
mfeStdRoute: /ai-vision
mfeStdUrl: http://localhost:9301/ai-vision

## Decisions
- changeScope: edit_page · keep CRUD list/form · delta Upload+detect only
- Kind B · packKind ai · **cấm** AI chrome · Kind F OUT · GAP-F-AIV-04 OUT
- Upload HARD: FileService `web-bff/api/v1/files/*` · persist `imageFileId` · resign · cấm FilesController
- Detect: `POST …/detect` `{ imageUrl|imageFileId, engine? }` · P1 · Draft · disable no frame
- Taxonomy HARD: 10 class MD · cấm TS
- OPEN Dev: GAP-UPLOAD-FILE · GAP-TOOLBAR-DETECT · GAP-DETECT-BODY · GAP-TAXONOMY-SEP · T-BE-04 ImageFileId verify
- CLOSED: sectionId · status VI · T-UI-LIST/02 · T-UI-FORM · T-BE-01..03
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- autoApprove ON · e2eQa queued QA only · **cấm** e2e/start:std ở TL
- next: `/agent-dev*` · T-UI-UPLOAD + T-BE-04

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchInput | Zone B |
| defectClass | Loại hư hỏng | Dropdown | 10 class MD |
| severity | Mức độ | Dropdown | |
| status | TT | Dropdown | VI labels |
| engine | Engine | Dropdown | P1/P2 |
| sectionId | Đoạn | Dropdown | CLOSED |
| attachFrame | Ảnh hiện trạng | FileUpload | Zone A/form NEW |
| imageFileId | File id | hidden | FileService guid |
| engineDetect | Engine detect | Dropdown | Zone A |
| runDetect | Chạy detect | Button | POST …/detect |
| lat/lng | XY | Number | form |
| imageUrl | Preview | Text | resign |
| incidentCode | VI-* | Text | readonly |

## Screens / zones (ids only)
- Zone A toolbar(+Upload/detect) · B filter · C grid · D pagination · Form C/E/V/Copy
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html
- mfeStdUrl=http://localhost:9301/ai-vision

## API / tasks (ids only)
- GET/POST/PUT/DELETE `api/v1/ai-vision/detections`
- POST `…/detect` · GET `…/pci-history/{sectionId}`
- files `web-bff/api/v1/files/*`
- T-UI-UPLOAD **pending** · T-BE-04 **pending** · T-QA-01 queued · T-RV-01 pending

## UNCLEAR
- (none blocking) · ImageFileId column → Dev verify/migrate if missing

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/task/ai-vision.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/sa-compact.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/design-compact.md
- po compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/po-compact.md
- data_analy compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/STATUS.md
