# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T21:42:44.973Z
taskId: task_781a1036
contentHash: sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97
dev_confirm: approve
autoApprove: ON
changeScope: new_page
build: PASS

## Decisions
- formPattern: Mobile full VIS · phone ≤430 · Android 1-1 #sc-vis-capture · N/A ERP Modal · useFormOptions / vis.*
- TITLE-01: «Nhận diện sự cố» · DUAL-01 section+Skip · PACK-01 list+full
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-vis-capture · alias /incident/vis
- mfeStdUrl: http://localhost:9301/web-rmms-vis-capture
- be: Mobile.Bff :5202 · AiVision+Incident(+Patrol) Live · Step 4b N/A · cấm invent VisCapture · cấm ERP.* · cấm on-device
- HARD: GPS deny|Acc>30 block · uploads→detect Engine=P1 · Attach HasGps+DetectionId no Lat · Skip=dismiss · empty session GPS-only toast
- yarn build PASS · chunk web-rmms-vis-capture · BE RMMS.Service.Api PASS
- next: /agent-qa · roleOnly stop · e2eQa ON (QA only)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| photos | PhotoRow | uploads init/PUT/complete |
| rowLoc | ListRow RO | GPS + optional sessions |
| rowAcc | ListRow RO | AccuracyM ≤30 |
| detect | Button | POST ai-vision/detect |
| rowClass | ListRow RO | DefectClass |
| rowSev | ListRow+Badge | Severity |
| btnAttach | Button | POST incident/incidents |
| btnSkip | Button | dismiss only |
| gpsLock | GPS | deny→block |

## Screens / zones
- VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · GPS-DENY · peer INC-L banner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-vis-capture
- modes: ?gps=deny · ?acc=45 · ?nophoto=1 · ?nosession=1 · ?error=1

## API / tasks
- FormMode↔API: uploads* · sessions · detect · detections/{id} · incidents
- T-01…T-06 done · T-BE N/A
- debt: session empty=GPS-only toast · capture=file+uploads

## UNCLEAR
- (none blocking · SESS handled Dev toast · QA verify)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/implement/web-rmms-vis-capture.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/task/web-rmms-vis-capture.md
