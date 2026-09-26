# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T18:05:00.000Z
contentHash: sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c

## Decisions
- changeScope: new_page
- formPattern: Mobile full (phone max-width 430) · Android 1-1 · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-cam-patrol · productRoute /field/cam
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+AiVision+Incident · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff client
- demo: N/A
- CP-01: finder + GPS stamp + detect + confirm/skip
- HARD: GPS deny|accuracy>30 → block detect/confirm · ImageBase64 required · cấm fake coords/class
- labels: useFormOptions() · cấm hardcode VN form
- OUT: Me/cam-view/feedback · journal/kết ca/tần suất (B–E) · invent cam-patrol path
- open: UNCLEAR-CAM-FRAME · UNCLEAR-CAM-SCORE · UNCLEAR-CAM-ENTRY · UNCLEAR-CAM-DETECT-DTO

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| finder | camera | CameraViewfinder | DES-MOB-CAM-FINDER |
| stamp.route/km | ca stamp | Text RO | GET patrol/sessions Đang tuần |
| lat/lng/accuracyM | GPS | GPS | HARD ≤30m · deny→block |
| imageBase64 | frame | CameraCapture | required detect |
| detect | nhận diện | Button | POST ai-vision/detect Engine=P1 |
| detection.* | kết quả | Text/Chip | no score % ship |
| confirm | tạo sự cố | Button | POST incident/incidents DetectionId HasGps |
| skip | bỏ qua | Button | dismiss only |

## Screens / zones (ids only)
- CP-01
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-cam-patrol
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET patrol/sessions · POST ai-vision/detect · GET ai-vision/detections/{id} · POST incident/incidents
- real-data §A+§B: PASS
- T-*: T-W3-09 (cite TASKS)

## UNCLEAR
- UNCLEAR-CAM-FRAME: GAP-MOB-CAM-FRAME-01 frame thật
- UNCLEAR-CAM-SCORE: ẩn % ship
- UNCLEAR-CAM-ENTRY: hub TD vs TK → 1 route + PatrolType stamp
- UNCLEAR-CAM-DETECT-DTO: cite AiVisionOpsController fields

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-patrol.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- peer: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/cam-patrol.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
