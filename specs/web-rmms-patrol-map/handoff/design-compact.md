# Handoff compact — design

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: map
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T14:10:00.000Z
contentHash: sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf
taskId: task_71842b2a
autoApprove: ON
changeScope: edit_page
design_confirm: approve
real_view_parity: v1

## Decisions
- changeScope: edit_page · keep PM-00…08 · § Delta PM-09/10 + bake track
- formPattern: Mobile Map / full (≤430) · check-in peer sheet PM-10 · N/A ERP Modal Kind B
- DES-GRID / LinErpListFilterBar / DES-RPT: N/A phone Map
- Control = controlHint · Ghim→GET gis/chainage→chainageKm/Label editable · planPointLabel≠km · fetchLatestKm←chainageLabel
- Track: bake routeCode cut km · **1 token `#0A84FF`** (UNCLEAR-TRACK-STYLE chốt) · cấm màu tên
- mapGate R1–R11 · OSRM local bake · cấm public OSRM/Overpass · cấm OSM.org · cấm demo Nghi Lộc
- GPS raw persist · snap≠overwrite pin · gap>2km null
- mfe: Linm.Web.RMMS.Mobile `/ban-do-tuan` · peerStdUrl http://localhost:9301/web-rmms-patrol-map
- be: Linm.RMMS.WebService Patrol+Gis · Mobile.Bff :5202 · cấm ERP.* · cấm Map.Api
- demo: N/A · hash-skip · cấm re-scan
- next: SA · roleOnly stop

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| map+tiles+bake | map | Map/MapLine | overlay bake |
| pinHere | ghim | Button | → GET chainage |
| chainageKm | lý trình số | Number | editable / null>2km |
| chainageLabel | lý trình nhãn | Text | QL.n - Km X + Ym |
| planPointLabel | điểm KH | Text | ≠ km |
| gpsRaw | GPS thô | Number RO | persist |
| trackLine | nét ca | MapLine | token #0A84FF |
| fetchLatestKm | stamp | Text RO | chainageLabel |
| basemap+legend | chrome | Chip | clip |

## Screens / zones (ids only)
- PM-00…PM-10
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions GET · check-in POST+chainage* · gis/chainage GET · tiles · streets/search echo · bake read
- real-data §A+§B+§D: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-CHAINAGE-BFF: SA Mobile.Bff proxy gis/chainage
- UNCLEAR-SCHEMA-PAIR: SA Schema_* chainageKm/Label
- UNCLEAR-TRACK-STYLE: Design done `#0A84FF`

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
