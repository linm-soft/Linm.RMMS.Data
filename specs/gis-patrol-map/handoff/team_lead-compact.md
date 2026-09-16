# Handoff compact — team_lead

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T06:45:00.000Z
taskId: task_ed7b6ec1
contentHash: sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287
autoApprove: ON
route_confirm: /gis/tuan-duong keep
changeScope: edit_page
formPattern: Full page + MapPopup Modal
formType: map

## Decisions
- changeScope: edit_page
- formPattern: Full page + MapPopup Modal · FormMode View read-only P1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · BFF patrol + files FileService.Bff
- PhotoLocalIds=guid · GALLERY-PATROL popup+Chi tiết · GAP-MAP-PATROL-PHOTO-01
- migration=none · TZ/XCO/SHARE locked SA · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list.personName | Họ tên | Text | API-01 |
| list.status | Trạng thái | Badge | API-01 |
| detail.history | Lịch sử | Timeline | API-02→gallery |
| map.track | Nét tuần | MapPolyline | OSRM |
| map.pin | Pin | MapPin | xanh/đỏ |
| inspect.photoIds | Ảnh | ImageGallery | resign |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL
- NAV-GIS · TAB-* · LIST-PERSON · MAP-HOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html`
- peerStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- devSlash=`/agent-dev-oms-map` · `/map-inspect-popup`

## API / tasks (ids only)
- FormMode↔API: View→sessions · check-ins · files resign · no PATCH P1
- T-*: T-BE-GIS-01 → T-PERM-01 → T-UI-MAP-01 → T-UI-MAP-FORM-01(N/A dirty) · T-UI-UX-01 · T-UI-RESP-01 · T-QA-MAP-01
- deps: T-BE before T-UI · QA after Dev
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
| Dev | `/agent-dev-oms-map` · T-BE-GIS-01→T-UI-MAP-01 · photo gap |
| QA | T-QA-MAP-01 · e2e queued |

## Cấm
- ERP.* · e2e/build/start:std ở TL · migration · implement code TL · start role khác

<!-- compact schemaVersion=1 role=team_lead feature=gis-patrol-map taskId=task_ed7b6ec1 -->
