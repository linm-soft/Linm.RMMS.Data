# Handoff compact — po

schemaVersion: 1
feature: ai-vision
packKind: ai
featureClass: ai
role: po
status: done
skillVersion: 2026.08.09.02
writtenAt: 2026-09-12T08:25:00.000Z
changeScope: edit_page
taskId: task_2dfc095f
contentHash: sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236
featureKind: B

## Decisions
- changeScope: edit_page · keep prior list/form · delta Upload FileService + detect
- Kind B list+form · packKind ai · cấm AI chrome · Kind F OUT
- Upload HARD: FileService `web-bff/api/v1/files/*` · persist `imageFileId` · resign · cấm FilesController / presigned
- Detect: `POST …/detect` body `{ imageUrl|imageFileId, engine? }` · P1 default · Draft
- Taxonomy HARD: 10 class MD only · cấm trộn TS / ai-asset-detect
- CLOSED: sectionId filter · statusLabel VI
- OPEN Dev: GAP-UPLOAD-FILE · GAP-TOOLBAR-DETECT · GAP-DETECT-BODY · GAP-TAXONOMY-SEP
- GAP-F-AIV-04 Vision host OUT
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
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
| attachFrame | Ảnh hiện trạng | FileUpload | Zone A/form NEW |
| imageFileId | File id | hidden | FileService guid |
| runDetect | Chạy detect | Button | POST …/detect |
| lat/lng | XY | Number | form |
| imageUrl | Preview | Text | derived resign |
| incidentCode | VI-* | Text | readonly |

## Screens / zones (ids only)
- Zone A toolbar(+Upload/detect) · B filter · C grid · D pagination · Form C/E/V/Copy
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html
- mfeStdUrl=http://localhost:9301/ai-vision

## Grid / Leave AC
- Grid: STT·Mã·Class·Score·Severity·Section·Route·Status·Engine·Incident·actions · pageSize 50
- Leave: dirty confirm · no detect without frame · upload fail → no detect

## API / tasks (ids only)
- GET/POST/PUT/DELETE `api/v1/ai-vision/detections`
- POST `…/detect` · GET `…/pci-history/{sectionId}`
- files `web-bff/api/v1/files/*`
- T-UI-UPLOAD pending · T-QA-01 queued

## UNCLEAR
- (none blocking) · GAP-F-AIV-04 deferred Vision host pack

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/data_analy-compact.md
