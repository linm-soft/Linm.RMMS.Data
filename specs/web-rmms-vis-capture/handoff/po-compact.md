# Handoff compact — po

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: po
status: confirmed
changeScope: edit_page
taskId: task_f6dbc931
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:15:00.000Z
contentHash: sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd
autoApprove: ON

## Decisions
- changeScope: edit_page · cấm typed new_page · giữ prior DoD VIS
- cite: SUBMIT-VALIDATE.md · Pattern B · VisCapturePage
- packKind: list · Grid AC-GRID-01..05 · VIS AC-VIS-01..12
- TITLE-01/PACK-01: closed prior · ROUTE-01: std /chup-hien-truong (cấm /web-rmms-vis-capture)
- VALIDATE-B: Detect/Attach idle-on · disabled chỉ detecting/attaching · banner on click · Acc>30 no POST handler
- ALIGN-01: /align-mobile-to-mfe · SSOT=VisCapturePage · cấm tab/route/icon mới · cấm mở android/ios
- formPattern: Mobile full 430 · #sc-vis-capture · N/A ERP Modal · N/A DES-GRID · N/A Excel
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/chup-hien-truong · productRoute /incident/vis
- be: Linm.RMMS.WebService · AiVision+Incident(+Patrol) · cấm ERP.*
- bff: Mobile.Bff :5202 · VITE_MOBILE_API_URL · cấm web-bff
- demo: N/A · hash skip analy · cấm re-scan
- DoD: Pattern B overlay trên photo+GPS→detect→attach|skip · useFormOptions · cấm fake GPS
- OUT: Me*/feedback/cam-view · invent slug · on-device · Excel · new_page
- open: UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01 · prior UNCLEAR closed

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | uploads* · capture=environment nếu file |
| rowLoc | vị trí | ListRow RO | GPS + optional sessions · thiếu → `--` |
| rowAcc | sai số | ListRow RO | AccuracyM |
| detect | nhận diện | Button | Pattern B · disabled chỉ detecting |
| rowClass | phân loại | ListRow RO | DefectClass |
| rowSev | mức | ListRow+Badge | Severity |
| btnAttach | gắn sự cố | Button | Pattern B · disabled chỉ attaching |
| btnSkip | bỏ qua | Button | disabled chỉ attaching |
| gpsLock | GPS | GPS | deny→banner on click · cấm fake |
| validationBanner | lỗi client | Banner | Pattern B string[] |

## Screens / zones (ids only)
- VIS · (peer INC-L · CAP)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/chup-hien-truong
- DES-GRID / LinErpListFilterBar: N/A phone
- prototype zone: #sc-vis-capture · DES-MOB-VIS-CAPTURE

## API / tasks (ids only)
- FormMode↔API: uploads* · POST ai-vision/detect · GET detections/{id} · GET patrol/sessions · POST incident/incidents
- peer BFF: GET integration/users (forward if missing) · road-routes/search (có)
- real-data §A+§B: PASS · Delta PASS
- Grid AC: AC-GRID-01..05 · VIS AC-VIS-01..12
- T-*: edit VisCapturePage gates · T-BE=N/A invent

## UNCLEAR
- UNCLEAR-VALIDATE-B → Dev/QA Pattern B
- UNCLEAR-ALIGN-01 → TL/Dev align-mobile-to-mfe

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-real-data.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
