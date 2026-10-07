# Handoff compact — design

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: design
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T15:40:00.000Z
taskId: task_7fb86e87
priorTaskId: task_7e3aa2a7
contentHash: sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247
autoApprove: ON
design_confirm: approve
formPattern: Full page + MapPopup Modal
real_view_parity: v1
Grid AC: N/A
Report AC: N/A
Leave: N/A dirty · toast/useAlert
analyReuse: hash skip · cấm re-scan demo

## Decisions
- changeScope: edit_page
- Keep shell/tabs/track/pins/PHOTO · Delta NEW = REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST/BASE/CHAIN/KM-EMPTY
- Control = controlHint (filters · assignedSeg · kmPost · pin HARD fields)
- U-SCOPE-API=BE · U-KM-COLS=empty ok · U-PHOTO-FIELD=guid · U-GALLERY-ZONE=popup+Chi tiết
- files: web-bff/api/v1/files/* · cấm implement-file-service
- basemap: attachVnClipBasemap · cấm OSM.org/Esri · cấm VietnamBoundaries embed
- migration: none (reuse web-rmms-patrol-map chainage/bake)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- MapGateSlash: /agent-dev-oms-map · /map-inspect-popup
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| filter.office | Văn phòng | Select | FILTER-BAR |
| filter.route | Tuyến | Select | |
| filter.mode | Tuần đường/kiểm | Tab/Chip | |
| list.personName | Họ tên | Text | click→fit nét |
| list.employeeCode | Mã NV | Text | |
| list.kmFromTo | Km đoạn | Text | empty ok |
| map.assignedSeg | Nét đoạn giao | MapPolyline | LAYER-ASSIGNED |
| map.kmPost | KM_POST | MapLayer | LAYER-KMPOST clamp |
| map.track | Nét tuần | MapPolyline | OSRM |
| map.pin | Pin check-in | MapPin | xanh/đỏ |
| inspect.* | Tên/Mã/chainage/GPS6dp/giờ | Text | PIN-02 |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | keep |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL
- NAV-GIS · FILTER-BAR · TAB-ROAD · TAB-CHECK · TAB-DETAIL · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html`
- peerStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- real_view_parity=`v1`
- devSlash=`/agent-dev-oms-map`

## Map AC (ids)
- REAL-01 · SCOPE-01 · LAYER-01 · FIT-01 · PIN-02 · KMPOST-01 · BASE-01 · CHAIN-01 · KM-EMPTY-01 · SNAP-01 · PIN-01 · PHOTO-01 · OMS-KEEP

## API / bind (ids only)
- GET sessions (scoped) · GET check-ins · segments · gis/chainage+bake · files resign
- FormMode: read-only map · no PATCH/POST files on page P1

## UNCLEAR
- none (U-* inherit PO)

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/po/requirement.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md

## Handoff next
| Role | Do |
|------|----|
| SA | Scope BE + chainage/bake reuse · migration=none · FileService guid |
| TL/Dev | Tasks Delta REAL…KM-EMPTY · keep PHOTO · OMS `/agent-dev-oms-map` |
| QA | After Dev · e2e queued |

## Cấm
- ERP.* · re-scan demo · Dev/BE/e2e/start:std ở Design · invent FilesController · start role khác trong task này

<!-- compact schemaVersion=1 role=design feature=gis-patrol-map taskId=task_7fb86e87 -->
