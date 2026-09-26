# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:55:00.000Z
contentHash: sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d

## Decisions
- changeScope: new_page
- formPattern: Mobile full (phone max-width 430) · Android 1-1 · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-incident · productRoute /incident|/incident/new|/incident/:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision(+files; Maintenance peer) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff client
- demo: N/A
- INC-L list · INC-N create · INC-D detail · peer INC-V/C/E (vis/chat/estimate)
- HARD: GPS deny → block Create/Detect/geo · live sessions/list · cấm fake coords · useFormOptions
- OUT: Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · invent slug controller
- open: UNCLEAR-DOMAIN-MAP-INC · CHK-01 · PGC-BE-01 · PEER-VIS · STD-NEST · SESS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search/filters | tìm/status/severity | Search+Chip | GET incident/incidents |
| list.card | thẻ SC | CardList | Title/Type/Code/Route/Km/Status/HasGps |
| fab | tạo | FAB | nav /incident/new |
| assetPick | loại TS | LookupGrid | GET integration/asset-types |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local · → Description |
| photos | ảnh | PhotoRow | uploads/files |
| detect | nhận diện | Button | POST ai-vision/detect · GPS≤30 |
| sessionStamp | ca/tuyến | Text RO | GET patrol/sessions |
| gpsLock | GPS | GPS | deny→block create |
| severity | mức | Select | LOOKUP_STATIC |
| create | tạo vấn đề | Button | POST incident/incidents HasGps |
| draftOffline | nháp | Button | peer offline |
| detail.close | đóng | Button | POST …/close Note optional |

## Screens / zones (ids only)
- INC-L · INC-N · INC-D · (peer INC-V · INC-C · INC-E)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-incident
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET/POST incident/incidents · GET{id} · POST close · GET patrol/sessions · GET integration/asset-types · ai-vision uploads/detect · files/*
- real-data §A+§B: PASS
- T-*: T-W4-01/02/03 (cite TASKS)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-INC: SA add DOMAIN-MAP row web-rmms-incident
- UNCLEAR-CHK-01: GAP-MOB-INC-CREATE-CHK-01 checklist local
- UNCLEAR-PGC-BE-01: Create no Lat column · HasGps only
- UNCLEAR-PEER-VIS: vis/chat/estimate peer not primary WO pack
- UNCLEAR-STD-NEST: std nested /new /:id mount
- UNCLEAR-SESS: empty sessions toast · cấm itemsOrDemo

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-incident.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- peer: incident-list · incident-create · incident-detail
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
