# Handoff compact — po

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: map
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T14:00:00.000Z
contentHash: sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf
taskId: task_59a25efd
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · NEW task · keep baseline PM-00…08 · § Delta PM-09/10
- packKind: map · Grid/Report/LinErpListFilterBar: N/A phone Map
- formPattern: Mobile Map / full (≤430) · check-in peer sheet · N/A ERP Modal Kind B
- DoD: Ghim→GET gis/chainage→chainageKm/Label editable · POST+GPS raw · fetchLatestKm←chainageLabel · bake nét · no name color · no demo Nghi Lộc
- Map AC: AC-MAP-01…08 · mapGate /agent-dev-oms-map R1–R11 · OSRM local only
- planPointLabel ≠ km · Schema_* pair (SA)
- streets/search: snap name + echo km · snap≠overwrite pin
- mfe: Linm.Web.RMMS.Mobile `/ban-do-tuan` · mfeStdUrl http://localhost:9301/web-rmms-patrol-map
- be: Linm.RMMS.WebService Patrol+Gis · Mobile.Bff :5202 · cấm ERP.* · cấm Map.Api
- demo: N/A · hash-skip analy · cấm re-scan
- labels: useFormOptions / patrolMap.* · GPS real · cấm fake · cấm native edit
- UNCLEAR-TRACK-STYLE: PO → 1 token route color (Design hex)
- next: Design delta · autoApprove ON

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
| trackLine | nét ca | MapLine | no name color |

## Screens / zones (ids only)
- PM-00…PM-10
- reviewUrl= (Design delta · prior file:///…/ui/prototype/index.html)
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions GET · check-in POST+chainage* · gis/chainage GET · tiles · streets/search echo · bake read
- real-data §A+§B+§D: PASS (analy hash-skip)
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-CHAINAGE-BFF: SA Mobile.Bff proxy gis/chainage
- UNCLEAR-SCHEMA-PAIR: SA Schema_* chainageKm/Label
- UNCLEAR-TRACK-STYLE: Design hex/token (PO default=1 route token)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/handoff/data_analy-compact.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
