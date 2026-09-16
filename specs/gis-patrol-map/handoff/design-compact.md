# Handoff compact — design

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T06:20:00.000Z
taskId: task_33939515
priorTaskId: task_138c4ae2
contentHash: sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287
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
- Keep shell tabs/list/track/pins/animate · delta NEW = GALLERY-PATROL
- Control = controlHint (ImageGallery FileService resign)
- U-PHOTO-FIELD=guid · U-GALLERY-ZONE=popup+Chi tiết parity (PO locked)
- files: web-bff/api/v1/files/* · cấm implement-file-service
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- MapGateSlash: /agent-dev-oms-map · /map-inspect-popup
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list.personName | Họ tên | Text | sessions |
| list.status | Trạng thái | Badge | |
| detail.history | Lịch sử hoạt động | Timeline | → gallery |
| map.track | Nét tuần | MapPolyline | OSRM |
| map.pin | Pin check-in | MapPin | xanh/đỏ |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | resign |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL
- NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · LIST-PERSON · MAP-HOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html`
- peerStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- real_view_parity=`v1`
- devSlash=`/agent-dev-oms-map`

## API / bind (ids only)
- GET sessions · GET check-ins · GET files resign
- FormMode: read-only map · no PATCH/POST files on page P1

## UNCLEAR
- none

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
| SA | FileService + PhotoLocalIds=guid confirm |
| TL/Dev | Tasks GAP PHOTO + leftover · OMS nếu paint |
| QA | After Dev · e2e queued |

## Cấm
- ERP.* · re-scan demo · Dev/BE/e2e/start:std ở Design · invent FilesController · start role khác trong task này

<!-- compact schemaVersion=1 role=design feature=gis-patrol-map taskId=task_33939515 -->
