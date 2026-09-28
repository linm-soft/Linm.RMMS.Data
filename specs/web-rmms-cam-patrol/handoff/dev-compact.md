# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:05:00.000Z
taskId: task_37051747
contentHash: sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · DEC-PATTERN-B FE · cite SUBMIT-VALIDATE
- detect disabled={detecting} only · confirm disabled={confirming} only
- validationBanner string[] on click · DES-MOB-CAM-VALIDATION · clear success/frame
- keep: finder · stamp · GPS · capture=environment · Live APIs · ẩn score
- mfeStdRoute: /camera-tuan · mfeStdUrl http://localhost:9301/camera-tuan · product /field/cam
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · cấm ERP.*
- Step 4b / API Mới / entity / migration: none · T-BE N/A
- build: yarn build PASS · dotnet build PASS
- e2e: queued /agent-qa* · cấm e2e ở Dev
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| finder | CameraViewfinder | keep |
| stamp.* | Text RO | GET sessions keep |
| lat/lng/accuracyM | GPS | báo khi bấm |
| imageBase64 | CameraCapture | keep capture |
| validationBanner | Banner string[] | Pattern B · shipped |
| detect | Button | lock detecting only |
| detection.* | Text/Chip | no Score % |
| confirm | Button | lock confirming only |
| skip | Button | dismiss · lock confirming |

## Screens / zones (ids only)
- CP-01 · DES-MOB-CAM-PATROL · FINDER · RESULT · VALIDATION · GPS-DENY · empty · offline · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/camera-tuan
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions · detect · detections/{id} · incidents (Live keep)
- T-01…T-05 done · T-BE N/A · T-QA /agent-qa*
- mfeStdUrl: http://localhost:9301/camera-tuan
- debt: stamp km=check-in planPointLabel · frame=input capture base64

## UNCLEAR
- UNCLEAR-CAM-FRAME: soft keep DEC-FRAME

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/implement/web-rmms-cam-patrol.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx
- team_lead compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/handoff/team_lead-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
