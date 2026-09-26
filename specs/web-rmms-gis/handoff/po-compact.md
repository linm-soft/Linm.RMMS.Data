# Handoff compact — po

schemaVersion: 1
feature: web-rmms-gis
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:05:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile Map / full (phone ≤430) · N/A ERP Modal/Slideout · no master form · no draw/CRUD P1
- packKind: list · DES-GRID / LinErpListFilterBar: N/A phone Map
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-gis · route /web-rmms-gis · cite SCREENS /gis
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Gis (+Asset focus) · cấm ERP.*
- demo: N/A · cấm re-scan · hash skip analy
- Map DoD: tiles MVT · geojson all/incidents/tuyen-duong · legend isolate · basemap+fit local · search · layers toast P1 · focus GetById · GPS me-dot RO · popup→detail
- REMOVED: me* / feedback / cam-view / draw / heatmap / Twin / Field b–e
- labels: useFormOptions() · gisMap.* · cấm hardcode VN
- GPS: geolocation me-dot · deny hide · map mở · cấm fake · cấm POST map P1
- BFF HARD: chỉ Mobile.Bff · cấm invent api/v1/gis-map · cấm web-bff base
- autoApprove: ON → Design next

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
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-gis
- Map AC: AC-MAP-01…12 · Leave: Hub / list / detail / login

## API / tasks (ids only)
- FormMode↔API: GET gis/geojson/* · gis/tiles · gis/layers · gis/basemap-config · asset/road-assets/{id}
- real-data §A+§B: PASS (reuse)
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-GIS: SA add DOMAIN-MAP row web-rmms-gis
- UNCLEAR-STD-ROUTE: /gis vs /web-rmms-gis — follow STATUS URL
- GAP-MOB-GIS-SEARCH/LAYER/CORRIDOR/SC/FOCUS: Design/SA/Dev · no invent API

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-gis-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-gis-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-gis.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md
