# Handoff compact — po

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:32:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
taskId: task_e0463d5f

## Decisions
- changeScope: new_page
- formPattern: Mobile Map / full (phone ≤430) · N/A ERP Modal/Slideout · no master form · no POST check-in/tracks P1
- DoD: map + Live sessions + tiles + toast check-in · GPS real · chrome /gis/live · Android 1-1
- Grid AC / Report AC / LinErpListFilterBar: N/A phone Map
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-patrol-map
- be: Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol GET sessions + Gis tiles · cấm ERP.*
- demo: N/A · cấm OMS/demo-json SSOT · hash-skip analy reuse
- Check-in: toast only P1 · sheet/POST = peer
- labels: useFormOptions() / patrolMap.* · cấm hardcode VN · cấm Đường/Phố/Fit
- GPS: navigator.geolocation · deny hide me/disable locate · cấm fake · map still opens
- copy: Android 1-1 · cấm sửa native · cấm invent PatrolMapController
- next: Design · reviewUrl pending
- open: UNCLEAR-DOMAIN-MAP-PATROL-MAP · UNCLEAR-OVERLAY-GEOM · UNCLEAR-STD-PORT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| nav+title+checkin | chrome | Button/Text | toast check-in only |
| mapHost+tiles | map | Map | gis/tiles · no OSM.org |
| basemap×2+locate | bar | Chip/Button | Tiêu chuẩn/Vệ tinh · GPS |
| legend×4 | isolate | Chip | track/done/next |
| nextCard | Route | Card RO | GET sessions Đang tuần |
| gpsMe+popup | me | Marker/Popup | Geolocation |

## Screens / zones (ids only)
- PM-00 · PM-01 · PM-02 · PM-03 · PM-04 · PM-05 · PM-06 · PM-07 · PM-08
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions GET · tiles GET · nav/toast writes only
- real-data §A+§B: PASS (analy)
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-PATROL-MAP: SA add DOMAIN-MAP row
- UNCLEAR-OVERLAY-GEOM: Design/SA empty vs session pins · cấm invent tracks
- UNCLEAR-STD-PORT: follow STATUS mfeStdUrl :9301

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/handoff/data_analy-compact.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
