# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:25:00.000Z
taskId: task_8af6ffa0
contentHash: sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c
dev_confirm: approve
autoApprove: ON
changeScope: new_page
build: PASS

## Decisions
- formPattern: Mobile full CP-01 · phone ≤430 · Android 1-1 · N/A ERP Modal · useFormOptions / cam.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-cam-patrol · alias /field/cam
- mfeStdUrl: http://localhost:9301/web-rmms-cam-patrol
- be: Mobile.Bff :5202 · Patrol+AiVision+Incident Live · Step 4b N/A · cấm invent cam-patrol · cấm ERP.*
- HARD: GPS deny|Acc>30 block · ImageBase64* · Engine=P1 · ẩn score · skip=dismiss only
- yarn build PASS · chunk web-rmms-cam-patrol · BE dotnet build PASS
- next: /agent-qa · roleOnly stop · e2eQa ON (QA only)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| finder | CameraViewfinder | capture→ImageBase64 |
| stamp.route/km/type | Text RO | GET patrol/sessions Đang tuần |
| lat/lng/accuracyM | GPS | Acc≤30 gate |
| detect | Button | POST ai-vision/detect |
| detection.* | Text/Chip | no Score % |
| confirm | Button | POST incident/incidents |
| skip | Button | dismiss only |

## Screens / zones
- CP-01 · DES-MOB-CAM-PATROL · FINDER · RESULT · GPS-DENY · empty · offline · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-cam-patrol

## API / tasks
- FormMode↔API: sessions · detect · detections/{id} · incidents
- T-01…T-05 done · T-BE N/A
- debt: stamp km=planPointLabel · capture=file input

## UNCLEAR
- (none blocking)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/implement/web-rmms-cam-patrol.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/task/web-rmms-cam-patrol.md
