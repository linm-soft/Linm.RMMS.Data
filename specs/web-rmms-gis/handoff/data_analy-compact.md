# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-gis
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:50:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile Map / full (phone max-width 430) · N/A ERP Modal/Slideout · no master form · no draw/CRUD P1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-gis
- nativeRouteCite: SCREENS /gis
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Gis (+cite Asset) · cấm ERP.*
- demo: N/A
- Map: tiles MVT · geojson all/incidents/tuyen-duong · layers cite · basemap cfg · focus GetById · GPS me-dot RO
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation me-dot · deny hide me · map vẫn mở · cấm fake · cấm POST từ map P1
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- BFF HARD: chỉ Mobile.Bff · cấm Route mobile-bff trên web-bff controllers · cấm invent api/v1/gis-map
- open questions: UNCLEAR-DOMAIN-MAP-GIS · UNCLEAR-STD-ROUTE · GAP-MOB-GIS-SEARCH/LAYER/SC/FOCUS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| title | title | Text RO | gisMap.title |
| trailing | list/layers | Button/Nav | list peer · layers toast P1 |
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
- DES-GRID / LinErpListFilterBar: N/A phone Map

## API / tasks (ids only)
- FormMode↔API: GET gis/geojson/* · gis/tiles · gis/layers · gis/basemap-config · asset/road-assets/{id}
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-GIS: add DOMAIN-MAP row web-rmms-gis (SA) · Gis + Asset cite
- UNCLEAR-STD-ROUTE: SCREENS /gis vs mfeStdRoute /web-rmms-gis — follow STATUS URL
- GAP-MOB-GIS-SEARCH-01 / LAYER-01 / SC-01 / FOCUS-01: cite gis-map CTX · no invent API

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-gis-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-gis-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-gis.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md
