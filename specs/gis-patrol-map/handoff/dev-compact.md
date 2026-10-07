# Handoff compact — dev

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T15:40:00.000Z
taskId: task_3b6b95df
contentHash: sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247
changeScope: edit_page
formPattern: Full page + MapPopup Modal
formType: map
autoApprove: ON

## Decisions
- changeScope: edit_page
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · migration=none
- Delta PASS: REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST/BASE/CHAIN/KM-EMPTY · keep PHOTO
- build: MFE yarn build PASS · BE Api PASS
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| filter.* | VP/Tuyến | Select | FILTER-BAR |
| list.personName | Họ tên | Text | FIT fitBounds |
| list.employeeCode | Mã NV | Text | |
| list.kmFromTo | Km đoạn | Text | empty-ok |
| map.assignedSeg | Nét giao | MapPolyline | LAYER-ASSIGNED |
| map.kmPost | KM_POST | MapLayer | clamp |
| map.track | Nét tuần | MapPolyline | OSRM |
| map.pin | Pin | MapPin | xanh/đỏ |
| inspect.* | PIN-02 | Text | HARD 6dp |
| inspect.photoIds | Ảnh | ImageGallery | resign |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL
- NAV-GIS · FILTER-BAR · TAB-* · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL
- mfeStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html`

## API / tasks (ids only)
- FormMode↔API: View→sessions(scoped+AssignedSegments) · check-ins(+chainage) · gis/chainage cite · files resign · no PATCH P1
- T-*: T-BE-GIS-01 · T-PERM-01 · T-UI-MAP-01 · T-UI-MAP-FORM-01 · T-UI-UX-01 · T-UI-RESP-01 PASS
- debt: bake miss → empty assigned · RequirePermission stub Auth · FileService 404 seed

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/implement/gis-patrol-map.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/task/gis-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/handoff/team_lead-compact.md

## Handoff next
| Role | Do |
|------|----|
| QA | T-QA-MAP-01 · e2e queued · live mfeStdUrl · REAL…KM-EMPTY · PHOTO · OMS |

## Cấm
- ERP.* · e2e/start:std ở Dev · invent FilesController · start role khác

<!-- compact schemaVersion=1 role=dev feature=gis-patrol-map taskId=task_3b6b95df -->
