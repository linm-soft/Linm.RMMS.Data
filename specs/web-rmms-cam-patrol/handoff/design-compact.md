# Handoff compact — design

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:05:00.000Z
taskId: task_feb572c6
contentHash: sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full CP-01 · phone 430 · N/A Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-cam-patrol · productRoute /field/cam
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+AiVision+Incident · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- UI 1-1 Android #sc-cam-patrol · DES-MOB-CAM-PATROL/FINDER · bỏ Me tabs
- DEC-FRAME: frame thật DoD · fail toast · cấm fake class
- DEC-SCORE: ẩn % ship (?ship=1)
- DEC-ENTRY: 1 route CP-01 · PatrolType stamp từ ca
- DEC-DETECT-DTO→SA cite AiVisionOpsController
- HARD: GPS deny|accuracy>30 → block detect/confirm · ImageBase64 required
- labels: useFormOptions() / cam.*
- kit_missing_confirm CameraViewfinder: approve
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| finder | camera | CameraViewfinder | DES-MOB-CAM-FINDER |
| stamp.route/km/type | ca stamp | Text RO | GET patrol/sessions |
| lat/lng/accuracyM | GPS | GPS | HARD ≤30m |
| imageBase64 | frame | CameraCapture | required detect |
| detect | nhận diện | Button | POST ai-vision/detect Engine=P1 |
| detection.* | kết quả | Text/Chip | no score % ship |
| confirm | tạo sự cố | Button | POST incident DetectionId HasGps |
| skip | bỏ qua | Button | dismiss only |

## Screens / zones (ids only)
- CP-01 · DES-MOB-CAM-PATROL · DES-MOB-CAM-FINDER · DES-MOB-CAM-RESULT · DES-MOB-GPS-DENY · empty · offline · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- reviewUrl ship= …/index.html?ship=1 · deny=?deny=1 · nosession=?nosession=1 · fail=?fail=1
- peerStdUrl= http://localhost:9301/web-rmms-cam-patrol
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET patrol/sessions · POST ai-vision/detect · GET ai-vision/detections/{id} · POST incident/incidents
- real-data §A+§B: PASS · T-*: T-W3-09 · devSlash=/agent-dev

## UNCLEAR
- DEC-DETECT-DTO→SA cite AiVisionOpsController (PO fields fixed)

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
