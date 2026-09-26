# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:50:00.000Z
taskId: task_fdf2d091
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile Map / full · phone ≤430 · N/A ERP Modal · no POST check-in/tracks P1
- domain: Patrol (`patrol`) · cite Gis tiles · DOMAIN-MAP row `web-rmms-patrol-map` applied
- mfeStdRoute: /web-rmms-patrol-map · mfeStdUrl http://localhost:9301/web-rmms-patrol-map
- nativeCite: SCREENS /patrol-map · /field/map
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff client · **cấm** ERP.* · **cấm** invent PatrolMapController
- Live GET patrol/sessions · GET gis/tiles/{layer}/{z}/{x}/{y}.pbf
- Overlay P1: empty tracks · no next-pin (DTO no lat/lng) · next-card = Route text · **cấm** OMS SSOT
- GPS: geolocation me-dot RO · deny hide · map mở · **cấm** fake · toast check-in only
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions patrolMap.* · DES-GRID N/A
- Out: Fit/Đường/Phố · me* · check-in sheet · tracks POST · Field deep
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Home/Field/Supervise |
| title | title | Text RO | patrolMap.title |
| trailingCheckin | checkin | Button | toast P1 · no POST |
| mapHost | map | Map | gis/tiles |
| basemap×2+locate | bar | Chip/Button | no Fit |
| legend×4 | isolate | Chip | track geom empty |
| nextCard | Route | Card RO | GET sessions |
| gpsMe+popup | me | Marker/Popup | Geolocation |

## Screens / zones (ids only)
- PM-00 · PM-01 · PM-02 · PM-03 · PM-04 · PM-05 · PM-06 · PM-07 · PM-08
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map
- DES-GRID / LinErpListFilterBar: N/A phone Map

## API / tasks (ids only)
- FormMode↔API: GET sessions + GET tiles · nav/toast writes only
- DOMAIN-MAP-PATROL-MAP: resolved · OVERLAY-GEOM: empty+Route · STD-PORT: :9301
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none open) · UNCLEAR-DOMAIN-MAP-PATROL-MAP · OVERLAY-GEOM · STD-PORT resolved SA

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
