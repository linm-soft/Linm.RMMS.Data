# Handoff compact — data_analy

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T05:45:00.000Z
taskId: task_fe94573e
contentHash: sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287

## Decisions
- changeScope: edit_page
- formPattern: N/A (map inspect + sidebar tabs)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol `api/v1/patrol/sessions` + `/{id}/check-ins`
- files: `web-bff/api/v1/files/*` · FileService.Bff · cấm implement-file-service
- MapGateSlash: /agent-dev-oms-map · /map-inspect-popup
- open questions: U-PHOTO-FIELD (guid vs legacy) · U-GALLERY-ZONE (popup+Chi tiết default)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list.personName | Họ tên | Text | sessions |
| list.status | Trạng thái | Badge | |
| detail.history | Lịch sử hoạt động | Timeline | check-ins |
| map.track | Nét tuần | MapPolyline | OSRM routeDrivingTrack |
| map.pin | Pin check-in | MapPin | xanh/đỏ |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | GAP-MAP-PATROL-PHOTO-01 · resign |

## Screens / zones (ids only)
- NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · LIST-PERSON · MAP-HOST · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/gis-patrol-map
- liveRoute= /gis/tuan-duong

## API / tasks (ids only)
- GET sessions · GET check-ins · GET files resign
- real-data §A+§B+§D: PASS
- Delta: leftover Dev + photo inspect + FileService HARD

## UNCLEAR
- U-PHOTO-FIELD · U-GALLERY-ZONE (defaults in control-hint)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
