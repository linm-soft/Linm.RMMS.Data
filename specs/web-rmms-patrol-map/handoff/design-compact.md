# Handoff compact — design

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:40:00.000Z
taskId: task_5013ac7a
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile Map / full · phone 430 · N/A ERP Modal/Slideout · no master form · no POST check-in/tracks P1 · DES-LEAVE N/A
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone Map
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-patrol-map
- mfeStdRoute: /web-rmms-patrol-map · nativeRouteCite SCREENS /patrol-map · /field/map
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol (+Gis tiles) · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Map: tiles MVT · basemap Tiêu chuẩn|Vệ tinh · locate · legend isolate · next-card Route · GPS me-dot · locate popup · toast check-in
- Overlay P1: empty tracks · next-pin only if session Live has coords · else Route text · cấm invent tracks/OMS
- REMOVED: Fit/Đường/Phố · me* · feedback · cam-view · check-in sheet · invent PatrolMapController
- labels: useFormOptions() · patrolMap.* · GPS real · cấm fake
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Home/Field/Supervise |
| title | title | Text RO | patrolMap.title |
| trailingCheckin | checkin | Button | toast P1 |
| mapHost | map | Map | gis/tiles |
| basemap×2+locate | bar | Chip/Button | no Fit |
| legend×4 | isolate | Chip | track geom empty P1 |
| nextCard | Route | Card RO | GET sessions |
| gpsMe+popup | me | Marker/Popup | Geolocation |

## Screens / zones (ids only)
- PM-00 · PM-01 · PM-02 · PM-03 · PM-04 · PM-05 · PM-06 · PM-07 · PM-08
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone Map

## API / tasks (ids only)
- FormMode↔API: GET patrol/sessions · GET gis/tiles · nav/toast writes only
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-PATROL-MAP: SA add DOMAIN-MAP row web-rmms-patrol-map
- UNCLEAR-OVERLAY-GEOM: Design chốt empty tracks + next-pin if coords · SA confirm DTO
- UNCLEAR-STD-PORT: follow STATUS mfeStdUrl :9301

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
