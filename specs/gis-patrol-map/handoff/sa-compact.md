# Handoff compact — sa

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T06:30:00.000Z
taskId: task_a393d3b7
contentHash: sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287
autoApprove: ON
solution_confirm: approve
formType: map
formPattern: Full page + MapPopup Modal
changeScope: edit_page

## Decisions
- be: D:/AI-QLBD/Linm.RMMS.WebService · Domain Patrol · `api/v1/patrol`
- bff: `web-bff/api/v1/patrol/*` proxy · files `web-bff/api/v1/files/*` FileService.Bff
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- PhotoLocalIds=guid · U-PHOTO-FIELD/U-GALLERY-ZONE locked
- entity: reuse PatrolSessions/CheckIns · migration=none
- BFF vs API: patrol proxy · files BFF only · cấm invent FilesController / ERP.*
- TZ=tz_required · XCO=xco_get_only · SHARE=tenant_keep
- Write P1: none (read-only map) · mobile POST check-ins cite-only
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list.personName | Họ tên | Text | API-01 |
| list.status | Trạng thái | Badge | API-01 |
| detail.history | Lịch sử | Timeline | API-02 |
| map.track | Nét tuần | MapPolyline | OSRM client |
| map.pin | Pin | MapPin | API-02 |
| inspect.photoIds | Ảnh | ImageGallery | API-03 resign |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL · FormMode View
- NAV-GIS · TAB-* · LIST-PERSON · MAP-HOST · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html`
- peerStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- devSlash=`/agent-dev-oms-map` · `/map-inspect-popup`

## API / tasks (ids only)
- FormMode↔API: View→API-01 sessions · API-02 check-ins · API-03 files resign · no PATCH P1
- entity/migration: reuse · none
- TZ/XCO/SHARE: required · get_only · tenant_keep
- T-*: (TeamLead) T-UI-MAP-01 · GAP-MAP-PATROL-PHOTO-01 · FILE-HARD

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-real-data.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-control-hint.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/handoff/design-compact.md

## Handoff next
| Role | Do |
|------|----|
| TL | T-* map pack · photo gap · OMS · deps |
| Dev | `/agent-dev-oms-map` after TL |
| QA | queued e2e — chỉ `/agent-qa*` |

## Cấm
- ERP.* · invent files API · migration/e2e/build/start:std ở SA · Write MFE · start role khác

<!-- compact schemaVersion=1 role=sa feature=gis-patrol-map taskId=task_a393d3b7 -->
