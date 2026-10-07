# Handoff compact — sa

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T15:50:00.000Z
taskId: task_1bd936ce
contentHash: sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247
autoApprove: ON
solution_confirm: approve
formType: map
formPattern: Full page + MapPopup Modal
changeScope: edit_page

## Decisions
- be: D:/AI-QLBD/Linm.RMMS.WebService · Domain Patrol · `api/v1/patrol` · peer cite `web-rmms-patrol-map`
- bff: `web-bff/api/v1/patrol/*` proxy · files `web-bff/api/v1/files/*` FileService.Bff
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · `/gis/tuan-duong`
- SCOPE: TDTK→own `rmms_user_route_segments` · Admin/MANAGER-RMMS→company · BE filter · cấm client bypass
- REAL: cấm seed khi đã có session
- CHAIN/KMPOST: reuse `GET gis/chainage` + bake `GisRouteGeoms` · KM_POST clamp · migration=none
- PhotoLocalIds=guid · U-PHOTO/U-GALLERY locked · PIN-02 HARD fields
- entity: reuse PatrolSessions/CheckIns · segments · GisRouteGeoms · migration=none
- BFF vs API: patrol proxy · files BFF · gis/segments cite · cấm invent PatrolMapController/FilesController/ERP.*
- TZ=tz_required · XCO=xco_get_only · SHARE=tenant_keep
- Write P1: none · basemap=attachVnClipBasemap
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| filter.* | VP/Tuyến/mode | Select/Tab | API-01 |
| list.personName | Họ tên | Text | FIT fitBounds |
| list.employeeCode | Mã NV | Text | |
| list.kmFromTo | Km đoạn | Text | empty-ok |
| map.assignedSeg | Nét giao | MapPolyline | API-04+bake |
| map.kmPost | KM_POST | MapLayer | API-05 clamp |
| map.track | Nét tuần | MapPolyline | OSRM |
| map.pin | Pin | MapPin | API-02 |
| inspect.* | PIN-02 | Text | chainage+GPS6dp |
| inspect.photoIds | Ảnh | ImageGallery | API-03 |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL · FormMode View
- NAV-GIS · FILTER-BAR · TAB-* · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST · MAP-POPUP-INSPECT · GALLERY-PATROL
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html`
- peerStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- devSlash=`/agent-dev-oms-map` · `/map-inspect-popup`

## API / tasks (ids only)
- FormMode↔API: View→API-01 sessions(scoped) · API-02 check-ins(+chainage) · API-03 files · API-04 segments cite · API-05 chainage/bake cite · no PATCH P1
- entity/migration: reuse · none
- TZ/XCO/SHARE: required · get_only · tenant_keep
- Map AC: REAL-01 · SCOPE-01 · LAYER-01 · FIT-01 · PIN-02 · KMPOST-01 · BASE-01 · CHAIN-01 · KM-EMPTY-01 · PHOTO · OMS-KEEP
- T-*: (TeamLead) Delta gaps + PHOTO/FILE-HARD + OMS

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
| TL | T-* Delta REAL…KM-EMPTY · PHOTO · OMS · deps |
| Dev | `/agent-dev-oms-map` after TL |
| QA | queued e2e — chỉ `/agent-qa*` |

## Cấm
- ERP.* · invent files/PatrolMap API · migration/e2e/build/start:std ở SA · Write MFE · start role khác

<!-- compact schemaVersion=1 role=sa feature=gis-patrol-map taskId=task_1bd936ce -->
