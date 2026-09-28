# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:50:00.000Z
taskId: task_9f9e4a81
contentHash: sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796
solution_confirm: approve
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · formPattern: Mobile full CP-01 · phone ≤430 · N/A Modal · DES-GRID N/A
- DEC-PATTERN-B: detect disabled={detecting} only · confirm disabled={confirming} only · banner string[] on click · keep capture · cite SUBMIT-VALIDATE
- keep Live: DOMAIN-MAP Patrol · DetectAiVisionRequest · AiVisionDetectionDto · CreateIncidentRequest · no invent cam-patrol
- mfeStdRoute: /camera-tuan · mfeStdUrl http://localhost:9301/camera-tuan · product /field/cam · cấm /web-rmms-cam-patrol
- nativeCite: SCREENS /field/cam · Android #sc-cam-patrol · DES-MOB-CAM-PATROL/FINDER/RESULT/VALIDATION
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · cấm ERP.*
- FormMode↔API: GET patrol/sessions · POST ai-vision/detect · GET detections/{id} opt · POST incident/incidents
- DEC-DETECT-DTO keep: ImageBase64*·Lat*·Lng*·AccuracyM*·Engine=P1 · Id→DetectionId · Score OUT ship
- Confirm keep: DetectionId·HasGps=true·Title*·RouteName*·IncidentType*
- API Mới / entity / migration / Step 4b: none at SA
- labels: useFormOptions cam.* · banner lookupStatic · Out: Me/cam-view · Excel · SearchInput
- align end: /align-mobile-to-mfe · CamPatrolPage SSOT · no tab/route/icon
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| finder | CameraViewfinder | DES-MOB-CAM-FINDER |
| stamp.* | Text RO | GET patrol/sessions |
| lat/lng/accuracyM | GPS | ≤30m · báo khi bấm |
| imageBase64 | CameraCapture | DetectAiVisionRequest |
| validationBanner | Banner string[] | Pattern B · new edit |
| detect | Button | POST detect · lock detecting |
| detection.* | Text/Chip | no Score % ship |
| confirm | Button | CreateIncidentRequest · lock confirming |
| skip | Button | dismiss · lock khi confirming |

## Screens / zones (ids only)
- CP-01 · DES-MOB-CAM-PATROL · FINDER · RESULT · VALIDATION · GPS-DENY · empty · offline · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/camera-tuan
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions · detect · detections/{id} · incidents (Live keep)
- DEC-PATTERN-B: FE only · DEC-DETECT-DTO/DOMAIN-MAP: keep resolved
- T-*: edit CamPatrolPage Pattern B · next /agent-team-lead

## UNCLEAR
- UNCLEAR-CAM-FRAME: soft keep DEC-FRAME
- Pattern B banner copy: lookupStatic keys có sẵn

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-patrol-real-data.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
