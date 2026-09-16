# Handoff compact — data_analy

schemaVersion: 1
feature: ai-vision
packKind: ai
featureClass: ai
role: data_analy
status: done
skillVersion: 2026.08.09.02
writtenAt: 2026-09-12T08:20:36.268Z
changeScope: edit_page
taskId: task_cc211171
contentHash: sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236

## Decisions
- changeScope: edit_page · NEW task · keep PO/Design/SA/TL artifacts
- Họp 04/09: hư hỏng từ **ảnh hiện trạng** · cùng `api/v1/ai-vision` · **cấm** trộn defectClass ↔ catalog TS
- Upload HARD: FileService `web-bff/api/v1/files/*` · `/init-bff-file`+`/integrate-file-upload-web` · persist file id · resign · **cấm** FilesController / presigned persist
- Prior CLOSED: sectionId filter · statusLabel VI
- OPEN: Zone A FileUpload+detect · detect body imageUrl|imageFileId · form FileUpload
- GAP-F-AIV-04 Vision host OUT → ai-vision-service
- Kind F map OUT · cấm AI chrome header
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- packKind: ai

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchInput | Zone B |
| defectClass | Loại hư hỏng | Dropdown | 10 class MD only |
| severity | Mức độ | Dropdown | |
| status | TT | Dropdown | VI labels |
| engine | Engine | Dropdown | P1/P2 |
| sectionId | Đoạn | Dropdown | CLOSED wired |
| attachFrame | Ảnh hiện trạng | FileUpload | NEW Zone A/form |
| imageFileId | File id | hidden | FileService guid |
| runDetect | Chạy detect | Button | POST …/detect |
| lat/lng | XY | Number | form |
| imageUrl | Preview | Text | derived resign |
| incidentCode | VI-* | Text | readonly |

## Screens / zones (ids only)
- Zone A toolbar(+Upload/detect) · B filter · C grid · D pagination · Form C/E/V/Copy
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html
- mfeStdUrl=http://localhost:9301/ai-vision

## API / tasks (ids only)
- GET/POST/PUT/DELETE `api/v1/ai-vision/detections`
- POST `…/detect` · GET `…/pci-history/{sectionId}`
- files `web-bff/api/v1/files/*`
- real-data §A=yes · §B=yes · §C=upload+detect · §D=fail · §E=progress

## UNCLEAR
- (none blocking) · GAP-F-AIV-04 deferred to Vision host pack

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/STATUS.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-vision.md
- demo: D:/AI-QLBD/Linm.RMMS.Demo/src/demo/ai-vision/ai-vision.html
