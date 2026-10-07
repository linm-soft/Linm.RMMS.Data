# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: map
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T14:50:00.000Z
contentHash: sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf
taskId: task_32f76ead
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · keep PM-00…08 · delta PM-09/10 chainage + check-in sheet
- formPattern: Mobile Map / full ≤430 · peer sheet CheckInSheet · LeaveConfirmModal · N/A ERP Modal
- Track `#0A84FF` · removed name colors · Ghim→GET gis/chainage → fill editable
- Schema_PatrolCheckInChainage · ChainageKm/Label · POST check-in+chainage* · planPointLabel≠km
- BFF: chainage→ApiBase (no code change) · tiles/streets MapService
- fetchLatestKm←chainageLabel · mapGate R1–R11 · cấm Nghi Lộc · cấm OSM.org · cấm PatrolMapController · cấm ERP.*
- Build: MFE yarn build PASS · Api+Mobile.Bff dotnet build PASS · e2e queued QA only
- next=/agent-qa* · roleOnly stop

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
- mfeStdUrl= http://localhost:9301/web-rmms-patrol-map
- real_view_parity= v1

## API / tasks (ids only)
- APIs: GET sessions/tiles/check-ins · GET gis/chainage · POST check-ins+chainage* · streets echo · bake cite
- T-BE-GIS-01 · T-PERM-01 · T-UI-MAP-01 · T-UI-MAP-FORM-01 · T-UI-UX-01 · T-UI-RESP-01 = done
- T-QA-MAP-01 pending `/agent-qa*`
- debt: bake-only overlay tighten · apply migration on deploy

## UNCLEAR
- (none)

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/implement/web-rmms-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
