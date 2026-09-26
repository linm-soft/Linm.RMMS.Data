# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:20:00.000Z
taskId: task_c2290c20
contentHash: sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile full CP-01 · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Patrol (`patrol`) · cite AiVision detect + Incident create · DOMAIN-MAP row `web-rmms-cam-patrol` applied
- mfeStdRoute: /web-rmms-cam-patrol · mfeStdUrl http://localhost:9301/web-rmms-cam-patrol · product /field/cam
- nativeCite: SCREENS /field/cam · Android #sc-cam-patrol · DES-MOB-CAM-PATROL/FINDER/RESULT
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent cam-patrol path
- FormMode↔API: GET patrol/sessions · POST ai-vision/detect · GET detections/{id} opt · POST incident/incidents
- DEC-DETECT-DTO: DetectAiVisionRequest ImageBase64*·Lat*·Lng*·AccuracyM*·Engine=P1 · resp AiVisionDetectionDto Id→DetectionId · Score OUT ship
- Confirm: CreateIncidentRequest DetectionId·HasGps=true·Title*·RouteName*·IncidentType* (validator)
- HARD: GPS deny|Acc>30 block · frame fail toast · ẩn score % · skip=dismiss only
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions cam.* · Out: Me/cam-view/feedback · journal B–E · native edits
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| finder | camera | CameraViewfinder | DES-MOB-CAM-FINDER |
| stamp.route/km/type | ca stamp | Text RO | GET patrol/sessions Đang tuần |
| lat/lng/accuracyM | GPS | GPS | HARD ≤30m |
| imageBase64 | frame | CameraCapture | DetectAiVisionRequest |
| detect | nhận diện | Button | POST ai-vision/detect Engine=P1 |
| detection.* | kết quả | Text/Chip | no Score % ship |
| confirm | tạo sự cố | Button | CreateIncidentRequest |
| skip | bỏ qua | Button | dismiss only |

## Screens / zones (ids only)
- CP-01 · DES-MOB-CAM-PATROL · FINDER · RESULT · GPS-DENY · empty · offline · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-cam-patrol
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions · detect · detections/{id} · incidents
- DEC-DETECT-DTO: resolved · DOMAIN-MAP-CAM: resolved
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none SA) DEC-DETECT-DTO resolved · DEC-FRAME/SCORE/ENTRY prior confirmed

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
