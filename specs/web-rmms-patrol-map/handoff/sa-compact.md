# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: map
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T14:20:00.000Z
contentHash: sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf
taskId: task_3fa91036
autoApprove: ON
changeScope: edit_page
solution_confirm: approve

## Decisions
- changeScope: edit_page · keep PM-00…08 · delta PM-09/10 chainage + check-in sheet
- formPattern: Mobile Map / full ≤430 · peer sheet PM-10 · N/A ERP Modal · DES-GRID N/A
- domain: Patrol + cite Gis · DOMAIN-MAP extend chainage/bake/check-in · cấm PatrolMapController · cấm Map.Api · cấm ERP.*
- BFF: Mobile.Bff :5202 · tiles/streets→MapService · **gis/chainage→RMMS ApiBase** (UNCLEAR-CHAINAGE-BFF resolved)
- Schema: **Schema_PatrolCheckInChainage** · ChainageKm double? · ChainageLabel varchar(128)? · planPointLabel≠km · cấm *Json (UNCLEAR-SCHEMA-PAIR resolved)
- Track: bake routeCode cut km · token **#0A84FF** · cấm màu tên · OSRM BE 127.0.0.1:5000 only
- FormMode↔API: GET sessions/tiles/check-ins · GET gis/chainage · POST check-in+chainage*+GPS raw · streets echo km · bake read
- entity/migration: Schema_* Dev Step 4b · SA skip run · API mới = GET gis/chainage only
- gates: TZ=approve · XCO=tenant_keep · SHARE=N/A (autoApprove)
- mapGate R1–R11 · cấm demo Nghi Lộc · cấm native edit · next=/agent-team-lead · roleOnly stop

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| map+tiles+bake | map | Map/MapLine | overlay bake |
| pinHere | ghim | Button | → GET chainage |
| chainageKm | lý trình số | Number | editable / null>2km |
| chainageLabel | lý trình nhãn | Text | fetchLatestKm |
| planPointLabel | điểm KH | Text | ≠ km |
| gpsRaw | GPS thô | Number RO | persist |
| trackLine | nét ca | MapLine | #0A84FF |
| checkin.post | ghi điểm | Button | POST+chainage* |

## Screens / zones (ids only)
- PM-00…PM-10
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: API-01…07 · chainage NEW · check-in enhance · bake reuse
- entity/migration: Schema_PatrolCheckInChainage · Step 4b Dev
- TZ/XCO/SHARE: approve / tenant_keep / N/A
- T-*: (team_lead) · devSlash=/agent-dev · mapGate=/agent-dev-oms-map

## UNCLEAR
- (none open) · CHAINAGE-BFF · SCHEMA-PAIR · TRACK-STYLE resolved

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
