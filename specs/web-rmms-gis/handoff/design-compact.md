# Handoff compact — design

schemaVersion: 1
feature: web-rmms-gis
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:20:00.000Z
taskId: task_3df79b80
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile Map / full · phone 430 · N/A ERP Modal/Slideout · no master form · no draw/CRUD P1 · DES-LEAVE N/A
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone Map
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-gis
- mfeStdRoute: /web-rmms-gis · nativeRouteCite SCREENS /gis
- be: D:/AI-QLBD/Linm.RMMS.WebService · Gis (+Asset focus) · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Map: tiles MVT · geojson all/incidents/tuyen-duong · legend isolate · basemap+fit local · search · layers toast P1 · focus GetById · GPS me-dot RO · popup→detail
- REMOVED: me* / feedback / cam-view / draw / heatmap / Twin / Field b–e
- labels: useFormOptions() · gisMap.* · GPS me-dot RO
- UNCLEAR-STD-ROUTE: follow STATUS /web-rmms-gis · alias /gis if shell
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| title | title | Text RO | gisMap.title |
| trailingList | list | Button/Nav | /asset/list |
| trailingLayers | layers | Button | toast P1 · sheet P2 |
| search | search | Search | geojson ?search= |
| mapHost | map | Map | tiles + overlays |
| basemap/fit | chips | Chip/Button | local |
| legend | all/ts/sc/corridor | Chip | isolate |
| gpsMe | me-dot | MapMarker | Geolocation |
| focus | ?focus= | MapMarker | road-assets/{id} |
| popup | pin | Popup | props · nav detail |

## Screens / zones (ids only)
- GIS-00 · GIS-01 · GIS-02 · GIS-03 · GIS-04 · GIS-05 · GIS-06 · GIS-07 · GIS-08 · GIS-09
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-gis
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone Map

## API / tasks (ids only)
- FormMode↔API: GET gis/geojson/* · gis/tiles · gis/layers · gis/basemap-config · asset/road-assets/{id}
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-GIS: SA add DOMAIN-MAP row web-rmms-gis
- UNCLEAR-STD-ROUTE: follow STATUS mfeStdRoute=/web-rmms-gis · alias /gis if shell
- GAP-MOB-GIS-SEARCH/LAYER/CORRIDOR/SC/FOCUS: cite CTX · no invent API

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-gis-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-gis-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md
