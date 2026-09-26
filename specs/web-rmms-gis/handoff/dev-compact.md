# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-gis
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:05:00.000Z
taskId: task_1db39749
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: queued

## Decisions
- changeScope: new_page · formPattern: Mobile Map / full · phone ≤430 · N/A ERP Modal · no draw/CRUD P1
- domain: Gis (`gis`) · cite Asset focus · DOMAIN-MAP row applied
- mfeStdRoute: /web-rmms-gis · mfeStdUrl http://localhost:9301/web-rmms-gis
- nativeAlias: /gis → STD
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent gis-map
- Live GET gis/geojson/all|incidents|tuyen-duong · gis/tiles/basemap · gis/layers · asset/road-assets/{id}
- Map: MapLibre CDN · clip MVT · **cấm** OSM.org · basemap/fit local · legend isolate
- GPS: geolocation me-dot RO · deny hide · **cấm** fake · **cấm** POST map P1
- API Mới / entity / migration / Step 4b: **none**
- labels: useFormOptions gisMap.* · DES-GRID N/A · Kind B WAIVE
- Build: yarn typecheck+build PASS · BE Bff PASS
- Out: me* · draw · heatmap · Twin · Field b–e · e2e (QA)
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| title | title | Text RO | gisMap.title |
| trailingList | list | Button/Nav | /web-rmms-asset-list |
| trailingLayers | layers | Button | GET gis/layers toast P1 |
| search | search | Search | geojson ?search= |
| mapHost | map | MapLibre | tiles + overlays |
| basemap/fit | chips | Chip/Button | local · clip theme |
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
- T-01…T-05 **done** · T-06 QA pending · T-07 review pending
- GAP SEARCH/LAYER/CORRIDOR/SC/FOCUS: cite CTX · Live reuse · no invent
- debt: lean clip (no abroad JSON) · layers sheet P2 · basemap-config opt unused chips

## UNCLEAR
- (none open)

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/implement/web-rmms-gis.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsGis/
