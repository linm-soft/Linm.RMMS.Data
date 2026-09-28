# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: team_lead
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:55:00.000Z
taskId: task_252dd44f
contentHash: sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · formPattern: Mobile full CP-01 · phone ≤430 · N/A Modal · DES-GRID N/A
- DEC-PATTERN-B: detect disabled={detecting} only · confirm disabled={confirming} only · banner string[] on click · keep capture · cite SUBMIT-VALIDATE
- keep: DEC-FRAME · DEC-SCORE · DEC-ENTRY · DEC-DETECT-DTO · Live DOMAIN-MAP Patrol+AiVision+Incident
- mfeStdRoute: /camera-tuan · mfeStdUrl http://localhost:9301/camera-tuan · product /field/cam · cấm /web-rmms-cam-patrol
- route_confirm: keep (URL đã ship) · no new tab/route/icon
- nativeCite: SCREENS /field/cam · Android #sc-cam-patrol · DES-MOB-CAM-PATROL/FINDER/RESULT/VALIDATION
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · cấm ERP.*
- FormMode↔API: GET patrol/sessions · POST ai-vision/detect · GET detections/{id} opt · POST incident/incidents · banner client-only
- API Mới / entity / migration / Step 4b: none · T-BE N/A
- labels: useFormOptions cam.* · banner lookupStatic · Out: Me/cam-view · Excel · SearchInput · invent cam-patrol
- align end: /align-mobile-to-mfe · CamPatrolPage SSOT
- T-01…T-05 pending → /agent-dev · T-QA queued /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| finder | CameraViewfinder | DES-MOB-CAM-FINDER · keep |
| stamp.* | Text RO | GET patrol/sessions · keep |
| lat/lng/accuracyM | GPS | ≤30m · báo khi bấm |
| imageBase64 | CameraCapture | keep capture |
| validationBanner | Banner string[] | Pattern B · T-02 |
| detect | Button | lock detecting only · T-01 |
| detection.* | Text/Chip | no Score % ship |
| confirm | Button | lock confirming only · T-01 |
| skip | Button | dismiss · lock khi confirming |

## Screens / zones (ids only)
- CP-01 · DES-MOB-CAM-PATROL · FINDER · RESULT · VALIDATION · GPS-DENY · empty · offline · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/camera-tuan
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions · detect · detections/{id} · incidents (Live keep)
- T-01 Pattern B CTA locks · T-02 validationBanner · T-03 keep finder/GPS/capture · T-04 keep Detect/Confirm/Skip · T-05 labels/BFF/zones · T-BE N/A · T-QA /agent-qa*
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## UNCLEAR
- UNCLEAR-CAM-FRAME: soft keep DEC-FRAME
- Pattern B banner copy: lookupStatic keys có sẵn

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/task/web-rmms-cam-patrol.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/handoff/sa-compact.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/handoff/design-compact.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
