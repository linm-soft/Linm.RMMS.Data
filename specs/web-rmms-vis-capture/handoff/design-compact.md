# Handoff compact — design

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: design
status: confirmed
changeScope: edit_page
taskId: task_f8d03a34
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:20:00.000Z
contentHash: sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · cấm typed new_page · giữ prior zones + reviewUrl
- cite: SUBMIT-VALIDATE Pattern B · VisCapturePage
- formPattern: Mobile full 430 · #sc-vis-capture · N/A ERP Modal · N/A DES-GRID
- Delta: Detect/Attach idle-on · disabled chỉ detecting/attaching · #validationBanner on click · Acc>30 no POST handler
- ROUTE-01: std /chup-hien-truong · cấm /web-rmms-vis-capture
- Align: /align-mobile-to-mfe · SSOT=VisCapturePage · cấm tab/route/icon mới · cấm mở android/ios
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/chup-hien-truong · productRoute /incident/vis
- be: Linm.RMMS.WebService · AiVision+Incident(+Patrol) · cấm ERP.*
- bff: Mobile.Bff :5202 · cấm web-bff
- demo: N/A · hash skip · GAP-DES-DEMO-RESCAN-01
- DoD: Pattern B overlay photo+GPS→detect→attach|skip · useFormOptions · cấm fake GPS
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- reviewUrl modes=?gps=deny · ?acc=45 · ?nophoto=1 · ?nosession=1 · ?error=1 · ?banner=1
- peerStdUrl= http://localhost:9301/chup-hien-truong
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A
- prototype zone: #sc-vis-capture · DES-MOB-VIS-CAPTURE · #validationBanner

## API / tasks (ids only)
- FormMode↔API: uploads* · POST ai-vision/detect · GET detections/{id} · GET patrol/sessions · POST incident/incidents
- peer BFF: GET integration/users (forward if missing) · road-routes/search (có)
- real-data §A+§B: PASS · Delta PASS
- Grid AC: N/A phone · VIS AC-VIS-01..12
- T-*: edit VisCapturePage gates · T-BE=N/A invent
- DES-A..D: PASS · Pattern B PASS

## UNCLEAR
- UNCLEAR-VALIDATE-B → Dev/QA Pattern B
- UNCLEAR-ALIGN-01 → TL/Dev align-mobile-to-mfe

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
