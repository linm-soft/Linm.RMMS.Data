# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:35:00.000Z
contentHash: sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796
taskId: task_9bdd3978

## Decisions
- changeScope: edit_page · cấm new_page CRUD · keep PO/Design/SA artifacts
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · Pattern B
- formPattern: Mobile full 430 · Android 1-1 · N/A ERP Modal
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/camera-tuan · productRoute /field/cam
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+AiVision+Incident · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL …/mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Delta: bỏ disabled={!canDetect} · confirm chỉ lock confirming · banner on click · capture giữ
- OUT: Excel toolbar · Me/cam-view · invent cam-patrol · SearchInput user/route trên CP-01
- align end: /align-mobile-to-mfe · CamPatrolPage SSOT · no tab/route/icon

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| finder | camera | CameraViewfinder | DES-MOB-CAM-FINDER |
| stamp.route/km | ca stamp | Text RO | GET patrol/sessions |
| lat/lng/accuracyM | GPS | GPS | ≤30m · báo khi bấm |
| imageBase64 | frame | CameraCapture | capture=environment |
| detect | nhận diện | Button | Pattern B · lock detecting only |
| detection.* | kết quả | Text/Chip | no score % |
| confirm | tạo sự cố | Button | lock confirming only |
| skip | bỏ qua | Button | dismiss |
| validationBanner | client errors | Banner | Pattern B string[] |

## Screens / zones (ids only)
- CP-01
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/camera-tuan
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET patrol/sessions · POST ai-vision/detect · GET ai-vision/detections/{id} · POST incident/incidents
- real-data §A+§B: PASS
- T-*: edit CamPatrolPage Pattern B (cite SUBMIT-VALIDATE)

## UNCLEAR
- UNCLEAR-CAM-FRAME: frame thật DoD (giữ)
- Pattern B banner copy: dùng lookupStatic keys có sẵn

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-patrol.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
