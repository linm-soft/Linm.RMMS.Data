# Handoff compact — design

schemaVersion: 1
feature: ai-vision
packKind: ai
featureClass: ai
role: design
status: done
skillVersion: 2026.08.09.02
writtenAt: 2026-09-12T08:26:00.000Z
changeScope: edit_page
taskId: task_83da313e
contentHash: sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236
featureKind: B
design_confirm: approve

## Decisions
- changeScope: edit_page · delta Zone A FileUpload+detect · form FileUpload
- Kind B list+form · packKind ai · **cấm** AI chrome header · Kind F OUT
- Control chốt = controlHint · Upload HARD FileService · persist imageFileId · resign
- Detect: body `{ imageUrl|imageFileId, engine? }` · P1 default · Draft · disable nếu thiếu frame
- Taxonomy HARD: 10 class MD only · cấm TS
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
| engineDetect | Engine detect | Dropdown | Zone A · P1 default |
| runDetect | Chạy detect | Button | POST …/detect |
| lat/lng | XY | Number | form |
| imageUrl | Preview | Text | derived resign |
| incidentCode | VI-* | Text | readonly |

## Screens / zones (ids only)
- Zone A toolbar(+Upload/detect) · B filter · C grid · D LinCatalogListPagination
- Form C/E/V/Copy full page (proto modal = wireframe)
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
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/po-compact.md
