# Handoff compact — po

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:40:00.000Z
contentHash: sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796
taskId: task_20b3107a
autoApprove: ON
changeScope: edit_page

## Decisions
- packKind: list · phone Field · Grid/Report AC N/A
- changeScope: edit_page · cấm new_page CRUD
- DEC-PATTERN-B: detect chỉ disabled={detecting} · confirm chỉ confirming · banner string[] on click · lookupStatic keys
- keep: DEC-FRAME · DEC-SCORE · DEC-ENTRY · DEC-DETECT-DTO · Design reviewUrl · SA Live cite
- mfeStdUrl: http://localhost:9301/camera-tuan · productRoute /field/cam · cấm /web-rmms-cam-patrol
- be: Linm.RMMS.WebService Patrol+AiVision+Incident · cấm ERP.*
- bff: Mobile.Bff :5202 · cấm web-bff
- demo: N/A · hash skip · cấm re-scan
- align end: /align-mobile-to-mfe · CamPatrolPage SSOT · 430 · no tab/route/icon
- OUT: Excel · Me/cam-view · SearchInput user/route CP-01 · invent cam-patrol

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| finder | CameraViewfinder | DES-MOB-CAM-FINDER |
| stamp.* | Text RO | GET patrol/sessions |
| lat/lng/accuracyM | GPS | ≤30m · báo khi bấm |
| imageBase64 | CameraCapture | capture=environment |
| detect | Button | Pattern B · lock detecting |
| detection.* | Text/Chip | no score % |
| confirm | Button | lock confirming only |
| skip | Button | dismiss |
| validationBanner | Banner string[] | Pattern B · new edit |

## Screens / zones
- CP-01
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/camera-tuan
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- GET patrol/sessions · POST ai-vision/detect · GET ai-vision/detections/{id} · POST incident/incidents
- T-*: edit CamPatrolPage Pattern B (cite SUBMIT-VALIDATE)
- next: /agent-design (keep zones · optional banner copy)

## UNCLEAR
- UNCLEAR-CAM-FRAME: giữ DEC-FRAME
- Pattern B banner copy: keys lookupStatic có sẵn

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-real-data.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
