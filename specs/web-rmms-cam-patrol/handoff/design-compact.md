# Handoff compact — design

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:45:00.000Z
taskId: task_9531bc76
contentHash: sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796
design_confirm: approve
autoApprove: ON
changeScope: edit_page
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · keep zones/reviewUrl · Pattern B delta
- DEC-PATTERN-B: detect chỉ disabled={detecting} · confirm chỉ confirming · banner string[] on click · cấm pre-disable GPS/frame/session/online
- keep: DEC-FRAME · DEC-SCORE · DEC-ENTRY · DEC-DETECT-DTO · kit_missing CameraViewfinder approve
- formPattern: Mobile full CP-01 · phone 430 · N/A Modal/Slideout
- Grid AC / DES-GRID / LinErpListFilterBar / DES-RPT: N/A phone
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/camera-tuan · productRoute /field/cam · cấm /web-rmms-cam-patrol
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+AiVision+Incident · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- UI 1-1 Android #sc-cam-patrol · DES-MOB-CAM-PATROL/FINDER · ẩn score % ship
- labels: useFormOptions() / cam.* · lookupStatic banner keys
- align end: /align-mobile-to-mfe · CamPatrolPage SSOT · no tab/route/icon
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| finder | CameraViewfinder | DES-MOB-CAM-FINDER |
| stamp.* | Text RO | GET patrol/sessions · no SearchInput |
| lat/lng/accuracyM | GPS | ≤30m · báo khi bấm |
| imageBase64 | CameraCapture | capture=environment |
| detect | Button | Pattern B · lock detecting |
| detection.* | Text/Chip | no score % |
| confirm | Button | lock confirming only |
| skip | Button | dismiss · lock khi confirming |
| validationBanner | Banner string[] | Pattern B · new edit |

## Screens / zones (ids only)
- CP-01 · DES-MOB-CAM-PATROL · DES-MOB-CAM-FINDER · DES-MOB-CAM-RESULT · DES-MOB-CAM-VALIDATION · DES-MOB-GPS-DENY · empty · offline · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- reviewUrl ship=?ship=1 · deny=?deny=1 · nosession=?nosession=1 · fail=?fail=1 · offline=?offline=1
- peerStdUrl= http://localhost:9301/camera-tuan
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET patrol/sessions · POST ai-vision/detect · GET ai-vision/detections/{id} · POST incident/incidents
- real-data §A+§B: PASS
- T-*: edit CamPatrolPage Pattern B (cite SUBMIT-VALIDATE)
- next: /agent-sa

## UNCLEAR
- UNCLEAR-CAM-FRAME: giữ DEC-FRAME
- Pattern B banner copy: keys lookupStatic có sẵn

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
