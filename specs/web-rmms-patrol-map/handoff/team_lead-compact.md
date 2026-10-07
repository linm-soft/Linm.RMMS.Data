# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: map
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T14:30:00.000Z
contentHash: sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf
taskId: task_a073cb2b
autoApprove: ON
changeScope: edit_page
route_confirm: confirm

## Decisions
- changeScope: edit_page · keep PM-00…08 · delta PM-09/10 chainage + check-in sheet
- formPattern: Mobile Map / full ≤430 · peer sheet PM-10 · N/A ERP Modal · DES-GRID N/A
- formType/packKind: map · **cấm** Kind B list template
- route: keep `/web-rmms-patrol-map` · mfeStdUrl http://localhost:9301/web-rmms-patrol-map
- mfe: Linm.Web.RMMS.Mobile · be: Linm.RMMS.WebService Patrol+Gis · BFF :5202 · cấm ERP.* · cấm Map.Api · cấm PatrolMapController
- Track `#0A84FF` · bake OSRM BE local · Ghim→GET gis/chainage · POST+chainage* · Schema_PatrolCheckInChainage Step 4b Dev
- mapGate `/agent-dev-oms-map` R1–R11 · LeaveConfirmModal on sheet · next=/agent-dev-oms-map · roleOnly stop
- demo N/A · cấm Nghi Lộc · cấm e2e ở TL

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| map+tiles+bake | map | Map/MapLine | #0A84FF |
| pinHere | ghim | Button | → GET chainage |
| chainageKm/Label | lý trình | Number/Text | editable |
| planPointLabel | điểm KH | Text | ≠ km |
| gpsRaw | GPS thô | Number RO | persist |
| checkin.sheet | PM-10 | Form | LeaveModal |

## Screens / zones (ids only)
- PM-00…PM-10
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map
- real_view_parity= v1

## API / tasks (ids only)
- FormMode↔API: API-01…07 · chainage NEW · check-in enhance · bake reuse
- T-BE-GIS-01 (deps:—) · T-PERM-01 · T-UI-MAP-01 · T-UI-MAP-FORM-01 · T-UI-UX-01 · T-UI-RESP-01 · T-QA-MAP-01
- devSlash: T-UI-MAP-*=`/agent-dev-oms-map` · T-BE-GIS-01=`/agent-dev` · QA=`/agent-qa*`
- deps: T-BE-GIS-01 → T-UI-MAP-* · Step 4b Dev only

## UNCLEAR
- (none)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/task/web-rmms-patrol-map.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/handoff/sa-compact.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/be/solution-discovery.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
