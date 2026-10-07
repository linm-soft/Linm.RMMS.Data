# Handoff compact — po

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T15:25:00.000Z
taskId: task_7e3aa2a7
contentHash: sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247
autoApprove: ON

## Decisions
- changeScope: edit_page
- formPattern: N/A (map inspect + sidebar tabs + filters)
- packKind: map · Grid/Report AC: N/A
- Goal Delta: ca thật · scope segment · nét giao + KM_POST clamp · fitBounds person · pin HARD · keep PHOTO/gallery
- route_confirm: /gis/tuan-duong keep
- migration: none (reuse web-rmms-patrol-map chainage/bake)
- FileGate: web-bff/api/v1/files/* · cấm implement-file-service
- basemap: attachVnClipBasemap · cấm OSM.org/Esri · cấm VietnamBoundaries embed
- MapGateSlash: /agent-dev-oms-map · /map-inspect-popup
- Leave: N/A dirty · toast/useAlert only
- U-SCOPE-API: BE filter + role · U-KM-COLS: empty ok · U-PHOTO-FIELD: guid · U-GALLERY-ZONE: popup+Chi tiết

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
| inspect.* | Tên/Mã/chainageLabel/GPS6dp/giờ | Text | PIN-02 |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | keep prior |

## Screens / zones (ids only)
- NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · FILTER-BAR · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST · MAP-POPUP-INSPECT · GALLERY-PATROL
- Pattern: Full page + MapPopup · FormMode read-only
- peerStdUrl= http://localhost:9301/gis-patrol-map
- liveRoute= /gis/tuan-duong
- reviewUrl= keep prior prototype (Design update Delta)
- devSlash= /agent-dev-oms-map

## Map AC (ids)
- REAL-01 · SCOPE-01 · LAYER-01 · FIT-01 · PIN-02 · KMPOST-01 · BASE-01 · CHAIN-01 · KM-EMPTY-01 · SNAP-01 · PIN-01 · PHOTO-01 · OMS-KEEP

## DoD (slim)
- session→no seed · scope TDTK vs Admin · fitBounds nét · pin HARD+gallery · empty km ok · OMS no regress

## Handoff → Design
- phase: po → design · STATUS confirmed (autoApprove)
- Next: /agent-design · control-map Delta · prototype + reviewUrl

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
