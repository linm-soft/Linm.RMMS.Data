# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: map
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T13:50:00.000Z
contentHash: sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf
taskId: task_a63fcbbb

## Decisions
- changeScope: edit_page · NEW task · keep prior PO/Design/… artifacts
- formPattern: Mobile Map / full (phone ≤430) · check-in peer sheet
- mfe: Linm.Web.RMMS.Mobile `/ban-do-tuan` · mfeStdUrl http://localhost:9301/web-rmms-patrol-map
- be: Linm.RMMS.WebService Patrol+Gis · cấm ERP.* · cấm Map.Api · cấm linm_maps copy
- demo: N/A · cấm NgheAnPatrolGpsCatalog «Km 0+000 Nghi Lộc» trên ca thật
- Delta: chainageKm+chainageLabel · planPointLabel≠km · Schema_* · fetchLatestKm←chainageLabel
- API: GET gis/chainage?lat&lng&route · KM_POST box · rmms_user_route_segments clip · Admin/MANAGER no clip
- Bake: OSRM local 127.0.0.1:5000/route · nét=tim cắt km · cấm project-osrm · cấm Overpass browser
- streets/search: snap name + echo client km only
- UI: Ghim→chainage fill editable · GPS raw + user confirm · snap≠overwrite pin · bỏ màu Thị B/Tuấn
- mapGate: /agent-dev-oms-map R1–R11
- real-data §A+§B+§D: PASS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| map+tiles+bake | map | Map/MapLine | overlay bake |
| pinHere | ghim | Button | → GET chainage |
| chainageKm | lý trình số | Number | editable / null>2km |
| chainageLabel | lý trình nhãn | Text | QL.n - Km X + Ym |
| planPointLabel | điểm KH | Text | ≠ km |
| gpsRaw | GPS thô | Number RO | persist |
| basemap+legend | chrome | Chip | clip |
| fetchLatestKm | stamp | Text RO | chainageLabel |

## Screens / zones (ids only)
- PM-00…PM-10
- reviewUrl= (Design delta)
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map

## API / tasks (ids only)
- FormMode↔API: sessions GET · check-in POST+chainage* · gis/chainage GET · tiles · streets/search echo · bake read
- real-data §A+§B+§D: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-CHAINAGE-BFF: Mobile.Bff proxy gis/chainage (SA)
- UNCLEAR-SCHEMA-PAIR: Schema_* name chainageKm/Label (SA)
- UNCLEAR-TRACK-STYLE: default track color after remove name hardcode (Design)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
