# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:28:33.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile Map / full (phone max-width 430) · N/A ERP Modal/Slideout · no master form · no POST check-in/tracks P1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-patrol-map
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol sessions GET + Gis tiles · cấm ERP.*
- demo: N/A · cấm OMS/demo-json SSOT
- Map: PM-00…08 · basemap Tiêu chuẩn|Vệ tinh · legend · next-card · me-dot · toast Ghi điểm tuần
- Live: GET patrol/sessions (Đang tuần) · GET gis/tiles · cấm invent PatrolMapController / POST tracks P1
- Entry: Home /patrol-map · Field /field/map · Supervise Bản đồ
- Out: me* · journal/kết ca/tồn tại/tần suất (mobile-b…e) · check-in sheet · Field doors deep
- labels: useFormOptions() · cấm hardcode VN · chrome copy /gis/live · cấm Đường/Phố/Fit
- GPS: navigator.geolocation · deny blocks locate/me · cấm fake
- copy: Android 1-1 · cấm sửa native
- open questions: UNCLEAR-DOMAIN-MAP-PATROL-MAP · UNCLEAR-OVERLAY-GEOM · UNCLEAR-STD-PORT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| nav+title+checkin | chrome | Button/Text | toast check-in only |
| mapHost+tiles | map | Map | gis/tiles · no OSM.org |
| basemap×2+locate | bar | Chip/Button | Tiêu chuẩn/Vệ tinh · GPS |
| legend×4 | isolate | Chip | track/done/next |
| nextCard | Route | Card RO | GET sessions |
| gpsMe+popup | me | Marker/Popup | Geolocation |

## Screens / zones (ids only)
- PM-00 · PM-01 · PM-02 · PM-03 · PM-04 · PM-05 · PM-06 · PM-07 · PM-08
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map
- DES-GRID / LinErpListFilterBar: N/A phone Map

## API / tasks (ids only)
- FormMode↔API: sessions GET · tiles GET · nav/toast writes only
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-PATROL-MAP: add DOMAIN-MAP row web-rmms-patrol-map (SA)
- UNCLEAR-OVERLAY-GEOM: P1 no tracks + demo N/A — empty vs session pins (Design/SA)
- UNCLEAR-STD-PORT: follow STATUS mfeStdUrl :9301

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-patrol-map-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-patrol-map.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
