# Handoff compact — design

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:10:00.000Z
taskId: task_8e35732f
contentHash: sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full phone 430 · Android 1-1 · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone Search+Chip
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-incident · productRoute /incident|/incident/new|/incident/:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision(+files; Maintenance peer) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- INC-L/N/D core · peer INC-V/C/E nav-only · GPS deny→block Create/Detect · HasGps only · checklist local→Description
- UNCLEAR-STD-NEST / CHK-01 / PEER-VIS: resolved Design
- kit_missing_confirm: N/A
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search/filters | tìm/status/severity | Search+Chip | GET incident/incidents |
| list.card | thẻ | CardList | Title/Type/Code/Route/Km/Status/HasGps · no Lat |
| fab | tạo | FAB | /incident/new |
| assetPick | loại TS | LookupGrid | GET integration/asset-types |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local → Description |
| photos/detect | ảnh/AI | PhotoRow/Button | uploads · detect GPS≤30 |
| sessionStamp | ca/tuyến | Text RO | GET patrol/sessions |
| gpsLock | GPS | GPS | deny→block create |
| severity/create/draft | mức/tạo/nháp | Select/Button | POST · HasGps · peer offline |
| detail.close | đóng | Button | POST close · Note optional |

## Screens / zones (ids only)
- INC-L · INC-N · INC-D · (peer INC-V · INC-C · INC-E)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- reviewUrl modes=?screen=create|detail · ?empty=1 · ?gps=deny · ?acc=45 · ?nosession=1 · ?error=1
- peerStdUrl= http://localhost:9301/web-rmms-incident
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST incident/incidents · GET{id} · POST close · GET patrol/sessions · GET integration/asset-types · ai-vision uploads/detect · files/*
- real-data §A+§B: PASS · T-W4-01/02/03 · Grid AC-GRID-01..05 · Create AC-CREATE-01..07 · Detail AC-DETAIL-01..03 · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-INC→SA add DOMAIN-MAP row web-rmms-incident
- UNCLEAR-CHK-01: resolved Design — local checklist
- UNCLEAR-PGC-BE-01→SA HasGps only
- UNCLEAR-PEER-VIS: resolved Design — peer nav
- UNCLEAR-STD-NEST: resolved Design — nested /new /:id
- UNCLEAR-SESS→Dev/QA empty toast · cấm itemsOrDemo

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
