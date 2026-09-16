# Handoff compact — dev

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T06:25:00.000Z
taskId: task_a6435708
contentHash: sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287
changeScope: edit_page
formPattern: Full page + MapPopup Modal
formType: map

## Decisions
- changeScope: edit_page
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · migration=none
- GALLERY-PATROL: FileService resign · PhotoLocalIds=guid · popup+Chi tiết
- build: MFE yarn build PASS · BE Api PASS
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list.personName | Họ tên | Text | API-01 |
| list.status | Trạng thái | Badge | API-01 |
| detail.history | Lịch sử | Timeline | → gallery |
| map.track | Nét tuần | MapPolyline | OSRM |
| map.pin | Pin | MapPin | onSelect inspect |
| inspect.photoIds | Ảnh | ImageGallery | resign |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL
- NAV-GIS · TAB-* · LIST-PERSON · MAP-HOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL
- mfeStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html`

## API / tasks (ids only)
- FormMode↔API: View→sessions · check-ins · files/{id}/object · no PATCH P1
- T-*: T-BE-GIS-01 · T-PERM-01 · T-UI-MAP-01 · T-UI-MAP-FORM-01 · T-UI-UX-01 · T-UI-RESP-01 PASS
- debt: FileService seed blobs may 404 · RequirePermission stub Auth

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
| QA | T-QA-MAP-01 · e2e queued · live mfeStdUrl · gallery resign |

## Cấm
- ERP.* · e2e/start:std ở Dev · invent FilesController · start role khác

<!-- compact schemaVersion=1 role=dev feature=gis-patrol-map taskId=task_a6435708 -->
