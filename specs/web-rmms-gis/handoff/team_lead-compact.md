# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-gis
packKind: list
role: team_lead
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:00:00.000Z
taskId: task_b94648b6
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile Map / full · phone ≤430 · N/A ERP Modal · no draw/CRUD P1
- domain: Gis (`gis`) · cite Asset focus · DOMAIN-MAP row applied (SA)
- mfeStdRoute: /web-rmms-gis · mfeStdUrl http://localhost:9301/web-rmms-gis
- nativeCite: SCREENS /gis · alias /gis if shell
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent gis-map
- Live GET gis/geojson/* · gis/tiles · gis/layers · gis/basemap-config · asset/road-assets/{id}
- GPS: geolocation me-dot RO · deny hide · map mở · **cấm** fake · **cấm** POST map P1
- API Mới / entity / migration / Step 4b: **none**
- labels: useFormOptions gisMap.* · DES-GRID N/A
- Out: me* · draw · heatmap · Twin · Field b–e · demo SSOT
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| title | title | Text RO | gisMap.title |
| trailingList | list | Button/Nav | /asset/list |
| trailingLayers | layers | Button | GET gis/layers toast P1 |
| search | search | Search | geojson ?search= |
| mapHost | map | Map | tiles + overlays |
| basemap/fit | chips | Chip/Button | local · basemap-config |
| legend | all/ts/sc/corridor | Chip | isolate |
| gpsMe | me-dot | MapMarker | Geolocation |
| focus | ?focus= | MapMarker | road-assets/{id} |
| popup | pin | Popup | props · nav detail |

## Screens / zones (ids only)
- GIS-00 · GIS-01 · GIS-02 · GIS-03 · GIS-04 · GIS-05 · GIS-06 · GIS-07 · GIS-08 · GIS-09
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-gis
- DES-GRID / LinErpListFilterBar: N/A phone Map

## API / tasks (ids only)
- FormMode↔API: GET gis/* Live + asset GetById focus · no write
- T-01 route/shell · T-02 tiles/basemap · T-03 geojson/legend/search · T-04 list/layers/popup · T-05 focus/GPS/gates · T-06 QA · T-07 review
- GAP SEARCH/LAYER/CORRIDOR/SC/FOCUS: cite CTX · Live reuse · no invent
- devSlash=/agent-dev · implement=specs/web-rmms-gis/implement/web-rmms-gis.md

## UNCLEAR
- (none open) · DOMAIN-MAP-GIS + STD-ROUTE resolved · GAP-* carry cite CTX

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/task/web-rmms-gis.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/handoff/sa-compact.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md
