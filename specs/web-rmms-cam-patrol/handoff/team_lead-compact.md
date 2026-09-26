# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:30:00.000Z
taskId: task_ef34d1a3
contentHash: sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: confirm

## Decisions
- formPattern: Mobile full CP-01 · phone ≤430 · Android 1-1 · N/A ERP Modal · useFormOptions / cam.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-cam-patrol · mfeStdUrl http://localhost:9301/web-rmms-cam-patrol · product /field/cam
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Patrol+AiVision+Incident · cấm ERP.* · cấm invent cam-patrol path · Step 4b skip
- T-01 route+shell · T-02 finder+stamp+GPS Acc≤30 · T-03 frame+detect+result ẩn score · T-04 confirm/skip/leave · T-05 BFF+parity · T-BE N/A · T-QA queued
- HARD: GPS deny|Acc>30 block · ImageBase64* · Engine=P1 · skip=dismiss only · no fake class/coords
- DES-GRID: N/A phone · demo N/A · cite T-W3-09
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| finder | CameraViewfinder | T-02 |
| stamp.route/km/type | Text RO | T-02 |
| lat/lng/accuracyM | GPS | T-02 |
| imageBase64 | CameraCapture | T-03 |
| detect | Button | T-03 |
| detection.* | Text/Chip | T-03 |
| confirm | Button | T-04 |
| skip | Button | T-04 |

## Screens / zones
- CP-01 · DES-MOB-CAM-PATROL · FINDER · RESULT · GPS-DENY · empty · offline · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-cam-patrol

## API / tasks
- FormMode↔API: GET sessions · POST detect · GET detections/{id} · POST incidents
- T-01…T-05 pending · T-BE N/A · T-QA queued · devSlash=/agent-dev

## UNCLEAR
- (none blocking)

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/task/web-rmms-cam-patrol.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
