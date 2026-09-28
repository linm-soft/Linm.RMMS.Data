# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: data_analy
status: done
changeScope: edit_page
taskId: task_0527afc8
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:10:00.000Z
contentHash: sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd

## Decisions
- changeScope: edit_page · NEW task · cấm typed new_page · giữ PO/Design/SA artifacts
- cite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · Pattern B · VisCapturePage
- formPattern: Mobile full 430 · #sc-vis-capture · N/A ERP Modal · N/A Excel toolbar
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/chup-hien-truong · productRoute /incident/vis
- be: D:/AI-QLBD/Linm.RMMS.WebService · AiVision+Incident(+Patrol) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL …/mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Delta: bỏ disabled={!canDetect} + Attach multi-gate · chỉ disabled khi detecting/attaching · banner on click · Acc>30 vẫn chặn POST trong handler
- Align cuối: /align-mobile-to-mfe · SSOT=VisCapturePage · cấm tab/route/icon mới · cấm mở android/ios proto
- OUT: Me*/feedback/cam-view · invent slug controller · on-device · Excel
- open: UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01 · prior UNCLEAR closed

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | uploads* · capture=environment nếu file |
| rowLoc | vị trí | ListRow RO | GPS + optional sessions |
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
- reviewUrl= (giữ Design) file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/chup-hien-truong
- DES-GRID / LinErpListFilterBar: N/A phone
- prototype zone: #sc-vis-capture · DES-MOB-VIS-CAPTURE

## API / tasks (ids only)
- FormMode↔API: uploads* · POST ai-vision/detect · GET detections/{id} · GET patrol/sessions · POST incident/incidents
- peer BFF: GET integration/users (forward if missing) · road-routes/search (có)
- real-data §A+§B: PASS · Delta PASS
- T-*: edit VisCapturePage gates · T-BE=N/A invent

## UNCLEAR
- UNCLEAR-VALIDATE-B: Dev bỏ canDetect/gpsBlocked disable · Pattern B
- UNCLEAR-ALIGN-01: end align-mobile-to-mfe · SSOT MFE page

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-vis-capture.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
