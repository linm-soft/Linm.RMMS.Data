# Handoff compact — data_analy

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T15:15:00.000Z
taskId: task_6ed3e65f
contentHash: sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247

## Decisions
- changeScope: edit_page
- formPattern: N/A (map inspect + sidebar tabs + filters)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol `api/v1/patrol/sessions` + check-ins · cite Gis chainage/bake · `rmms_user_route_segments`
- files: `web-bff/api/v1/files/*` · FileService.Bff · cấm implement-file-service
- MapGateSlash: /agent-dev-oms-map · /map-inspect-popup
- basemap: attachVnClipBasemap MapService · cấm OSM.org/Esri · cấm VietnamBoundaries embed
- migration: none nếu chainage/bake pair (`web-rmms-patrol-map`) đã có
- open questions: U-SCOPE-API · U-KM-COLS · U-PHOTO-FIELD · U-GALLERY-ZONE

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| filter.office | Văn phòng | Select | |
| filter.route | Tuyến | Select | |
| filter.mode | Tuần đường/kiểm | Tab/Chip | |
| list.personName | Họ tên | Text | click→fit nét |
| list.employeeCode | Mã NV | Text | |
| list.kmFromTo | Km đoạn | Text | empty ok · cấm bịa |
| map.assignedSeg | Nét đoạn giao | MapPolyline | segments+bake |
| map.kmPost | KM_POST | MapLayer | clamp km đoạn chọn |
| map.track | Nét tuần | MapPolyline | routeDrivingTrack |
| map.pin | Pin check-in | MapPin | xanh/đỏ |
| inspect.* | Tên/Mã/chainageLabel/GPS6dp/giờ | Text | GAP-MAP-PATROL-PIN-02 |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | keep prior |

## Screens / zones (ids only)
- NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · FILTER-BAR · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl= (Design keep prior path)
- peerStdUrl= http://localhost:9301/gis-patrol-map
- liveRoute= /gis/tuan-duong

## API / tasks (ids only)
- GET sessions (scoped ROLE) · GET check-ins · segments `rmms_user_route_segments` · gis/chainage + bake · files resign
- real-data §A+§B+§D: PASS
- Delta: REAL-01 · SCOPE-01 · LAYER-01 · FIT-01 · PIN-02 · KMPOST-01 · BASE-01 · CHAIN-01 · KM-EMPTY-01

## UNCLEAR
- U-SCOPE-API · U-KM-COLS · U-PHOTO-FIELD · U-GALLERY-ZONE (defaults in control-hint)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
