# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-gis
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:35:00.000Z
taskId: task_ecf0a092
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile Map / full · phone ≤430 · N/A ERP Modal · no draw/CRUD P1
- domain: Gis (`gis`) · cite Asset focus · DOMAIN-MAP row `web-rmms-gis` applied
- mfeStdRoute: /web-rmms-gis · mfeStdUrl http://localhost:9301/web-rmms-gis
- nativeCite: SCREENS /gis · alias /gis if shell
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff client base · **cấm** ERP.* · **cấm** invent gis-map
- Live GET gis/geojson/all|incidents|tuyen-duong · gis/tiles · gis/layers · gis/basemap-config · asset/road-assets/{id}
- GPS: geolocation me-dot RO · deny hide · map mở · **cấm** fake · **cấm** POST map P1
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions gisMap.* · DES-GRID N/A
- Out: me* · draw · heatmap · Twin · Field b–e · demo SSOT
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| title | title | Text RO | gisMap.title |
| trailingList | list | Button/Nav | /asset/list |
| trailingLayers | layers | Button | GET gis/layers toast P1 |
| search | search | Search | geojson ?search= |
| mapHost | map | Map | tiles + overlays |
| basemap/fit | chips | Chip/Button | local · basemap-config opt |
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
- DOMAIN-MAP-GIS: resolved · STD-ROUTE: /web-rmms-gis
- GAP SEARCH/LAYER/CORRIDOR/SC/FOCUS: cite CTX · Live reuse · no invent
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none open) · UNCLEAR-DOMAIN-MAP-GIS resolved SA · UNCLEAR-STD-ROUTE resolved

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-gis-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md
