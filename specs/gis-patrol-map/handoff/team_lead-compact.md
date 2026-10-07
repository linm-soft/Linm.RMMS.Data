# Handoff compact — team_lead

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T16:00:00.000Z
taskId: task_31f40050
contentHash: sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247
autoApprove: ON
route_confirm: /gis/tuan-duong keep
changeScope: edit_page
formPattern: Full page + MapPopup Modal
formType: map

## Decisions
- changeScope: edit_page
- formPattern: Full page + MapPopup Modal · FormMode View read-only P1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · BFF patrol + files FileService.Bff · chainage/bake cite peer
- Delta T-*: REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST/BASE/CHAIN/KM-EMPTY · keep PHOTO · OMS-KEEP
- migration=none · TZ/XCO/SHARE locked SA · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| filter.* | VP/Tuyến/mode | Select/Tab | SCOPE |
| list.personName | Họ tên | Text | FIT fitBounds |
| list.employeeCode | Mã NV | Text | |
| list.kmFromTo | Km đoạn | Text | empty-ok |
| map.assignedSeg | Nét giao | MapPolyline | LAYER-ASSIGNED |
| map.kmPost | KM_POST | MapLayer | clamp |
| map.track | Nét tuần | MapPolyline | OSRM |
| map.pin | Pin | MapPin | xanh/đỏ |
| inspect.* | PIN-02 | Text | HARD |
| inspect.photoIds | Ảnh | ImageGallery | keep |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL
- NAV-GIS · FILTER-BAR · TAB-* · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html`
- peerStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- devSlash=`/agent-dev-oms-map` · `/map-inspect-popup`

## API / tasks (ids only)
- FormMode↔API: View→sessions(scoped) · check-ins(+chainage) · segments · bake · files resign · no PATCH P1
- T-*: T-BE-GIS-01 → T-PERM-01 → T-UI-MAP-01 → T-UI-MAP-FORM-01 · T-UI-UX-01 · T-UI-RESP-01 · T-QA-MAP-01
- AC→task: REAL/SCOPE→BE · LAYER/FIT/PIN-02/KMPOST/BASE/KM-EMPTY/PHOTO/OMS→UI-MAP · QA all
- e2eQa: ON queued `/agent-qa*` only

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/task/gis-patrol-map.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/handoff/sa-compact.md

## Handoff next
| Role | Do |
|------|----|
| Dev | `/agent-dev-oms-map` · T-BE-GIS-01→T-UI-MAP-01 · Delta REAL…KM-EMPTY · keep PHOTO |
| QA | T-QA-MAP-01 · e2e queued |

## Cấm
- ERP.* · e2e/build/start:std ở TL · migration · implement code TL · start role khác

<!-- compact schemaVersion=1 role=team_lead feature=gis-patrol-map taskId=task_31f40050 -->
