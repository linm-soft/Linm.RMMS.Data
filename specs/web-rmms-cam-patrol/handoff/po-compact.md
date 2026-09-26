# Handoff compact — po

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T18:20:00.000Z
contentHash: sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c

## Decisions
- changeScope: new_page
- packKind: list (PO confirm) · Grid AC Kind B N/A · Report AC N/A
- formPattern: Mobile full phone 430 · Android 1-1 · N/A ERP Modal
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-cam-patrol · productRoute /field/cam
- be: Linm.RMMS.WebService · Patrol+AiVision+Incident · cấm ERP.*
- bff: Mobile.Bff · VITE_MOBILE_API_URL :5202/mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm re-scan
- CP-01: finder + GPS stamp + detect + confirm/skip
- HARD: GPS deny|accuracy>30 → block · ImageBase64 required · cấm fake coords/class · ẩn score %
- labels: useFormOptions() · cấm hardcode VN
- DEC-FRAME: frame thật DoD · fail toast
- DEC-SCORE: ẩn % ship
- DEC-ENTRY: 1 route CP-01 · PatrolType stamp từ ca
- DEC-DETECT-DTO: SA cite AiVisionOpsController · PO fields ImageBase64/Lat/Lng/AccuracyM/Engine=P1/DetectionId/HasGps
- OUT: Me/cam-view/feedback · journal B–E · invent cam-patrol path
- autoApprove: ON · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| finder | camera | CameraViewfinder | DES-MOB-CAM-FINDER |
| stamp.route/km/type | ca stamp | Text RO | GET patrol/sessions Đang tuần |
| lat/lng/accuracyM | GPS | GPS | HARD ≤30m |
| imageBase64 | frame | CameraCapture | required detect |
| detect | nhận diện | Button | POST ai-vision/detect Engine=P1 |
| detection.* | kết quả | Text/Chip | no score % |
| confirm | tạo sự cố | Button | POST incident DetectionId HasGps |
| skip | bỏ qua | Button | dismiss only |

## Screens / zones (ids only)
- CP-01
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-cam-patrol
- DES-GRID / LinErpListFilterBar: N/A phone
- Leave: dirty result card → discard no POST

## API / tasks (ids only)
- GET patrol/sessions · POST ai-vision/detect · GET ai-vision/detections/{id} · POST incident/incidents
- real-data §A+§B: PASS
- T-*: T-W3-09

## UNCLEAR
- (resolved PO) DEC-FRAME · DEC-SCORE · DEC-ENTRY · DEC-DETECT-DTO→SA cite

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/handoff/data_analy-compact.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-patrol.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
