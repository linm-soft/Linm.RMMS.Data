# Handoff compact — po

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:00:00.000Z
contentHash: sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d
autoApprove: ON

## Decisions
- changeScope: new_page
- packKind: list confirmed · Grid AC AC-GRID-01..05 · Create AC-CREATE-01..07 · Detail AC-DETAIL-01..03
- formPattern: Mobile full phone 430 · Android 1-1 · N/A ERP Modal/Slideout · N/A DES-GRID Kind B
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-incident · productRoute /incident|/incident/new|/incident/:id
- be: Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision(+files; Maintenance peer) · cấm ERP.*
- bff: Mobile.Bff :5202 · VITE_MOBILE_API_URL · cấm web-bff client
- demo: N/A · hash skip analy · cấm re-scan
- DoD: INC-L/N/D · GPS deny→block Create/Detect/geo · live list/create/detail/close · useFormOptions · cấm fake coords
- OUT: Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất · invent slug controller · primary WO CRUD
- open→SA/Design/Dev: DOMAIN-MAP-INC · CHK-01 · PGC-BE-01 · PEER-VIS · STD-NEST · SESS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search/filters | tìm/status/severity | Search+Chip | GET incident/incidents |
| list.card | thẻ | CardList | Title/Type/Code/Route/Km/Status/HasGps · no Lat |
| fab | tạo | FAB | /incident/new |
| assetPick | loại TS | LookupGrid | GET integration/asset-types |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local → Description |
| photos | ảnh | PhotoRow | uploads/files |
| detect | nhận diện | Button | POST detect · GPS≤30 |
| sessionStamp | ca/tuyến | Text RO | GET patrol/sessions |
| gpsLock | GPS | GPS | deny→block create |
| severity | mức | Select | LOOKUP_STATIC |
| create | tạo | Button | POST · HasGps · no Lat |
| draftOffline | nháp | Button | peer offline |
| detail.close | đóng | Button | POST close · Note optional |

## Screens / zones (ids only)
- INC-L · INC-N · INC-D · (peer INC-V · INC-C · INC-E)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-incident
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET/POST incident/incidents · GET{id} · POST close · GET patrol/sessions · GET integration/asset-types · ai-vision uploads/detect · files/*
- real-data §A+§B: PASS · T-W4-01/02/03
- Grid AC: AC-GRID-01..05 · Create AC-CREATE-01..07 · Detail AC-DETAIL-01..03

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-INC → SA
- UNCLEAR-CHK-01 → Design (local checklist)
- UNCLEAR-PGC-BE-01 → SA (HasGps only)
- UNCLEAR-PEER-VIS → Design (peer nav)
- UNCLEAR-STD-NEST → Design/Dev (nested /new /:id)
- UNCLEAR-SESS → Dev/QA (empty toast)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-incident.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
