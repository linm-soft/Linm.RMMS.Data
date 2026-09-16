# Handoff compact — po

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T06:05:00.000Z
taskId: task_138c4ae2
contentHash: sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287

## Decisions
- changeScope: edit_page
- formPattern: Full page (map) + MapPopup Modal inspect
- packKind: map (confirm)
- Grid AC: N/A · Report AC: N/A
- Leave: N/A dirty (read-only) · toast/useAlert · cấm native alert
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol sessions + check-ins
- files: web-bff/api/v1/files/* · FileService.Bff · cấm implement-file-service
- devSlash: /agent-dev-oms-map
- Delta: leftover + GAP-MAP-PATROL-PHOTO-01 gallery + FILE-HARD
- U-PHOTO-FIELD: guid FileService (autoApprove)
- U-GALLERY-ZONE: popup + Chi tiết parity (autoApprove)
- open questions: none (defaults locked)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list.personName | Họ tên | Text | sessions |
| list.status | Trạng thái | Badge | |
| detail.history | Lịch sử hoạt động | Timeline | check-ins |
| map.track | Nét tuần | MapPolyline | OSRM routeDrivingTrack |
| map.pin | Pin check-in | MapPin | xanh/đỏ |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | resign FileService |

## Screens / zones (ids only)
- Pattern: Full page + MapPopup Modal
- NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · LIST-PERSON · MAP-HOST · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/gis-patrol-map
- liveRoute= /gis/tuan-duong
- Leave: N/A dirty · useAlert toast

## API / tasks (ids only)
- GET sessions · GET check-ins · GET files resign
- FormMode: read-only map · no PATCH on page P1
- T-*: (TeamLead)

## UNCLEAR
- none (U-PHOTO-FIELD · U-GALLERY-ZONE confirmed defaults)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/handoff/data_analy-compact.md
