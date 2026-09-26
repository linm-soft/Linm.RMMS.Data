# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:20:00.000Z
taskId: task_b1cd136a
contentHash: sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d
solution_confirm: approve
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page · formPattern: Mobile full INC-L/N/D · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Incident (`incident`) · cite Patrol sessions · Integration asset-types · AiVision(+files) · DOMAIN-MAP row applied
- mfeStdRoute: /web-rmms-incident · mfeStdUrl http://localhost:9301/web-rmms-incident · product /incident|/incident/new|/:id
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent IncidentHub path
- FormMode↔API: GET/POST incidents · GET{id} · POST close · sessions · asset-types · uploads/files · detect
- DEC-CREATE-01: CreateIncidentRequest · HasGps=true · no Lat col (PGC-BE-01) · MediaIds guids max10 · checklist→Description · DetectionId opt
- HARD: GPS deny block · sessions live-only · checklist local · useFormOptions · nested /new /:id
- API Mới / entity / migration / Step 4b: **none** at SA
- Out: Me/feedback/cam-view · journal B–E · WO CRUD primary · native edits
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search/filters | tìm/status/severity | Search+Chip | GET incident/incidents |
| list.card | thẻ | CardList | HasGps · no Lat |
| fab | tạo | FAB | /incident/new |
| assetPick | loại TS | LookupGrid | GET integration/asset-types |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local → Description |
| photos/detect | ảnh/AI | PhotoRow/Button | MediaIds · detect GPS≤30 |
| sessionStamp | ca/tuyến | Text RO | GET patrol/sessions |
| gpsLock | GPS | GPS | deny→block · HasGps |
| severity/create/draft | mức/tạo/nháp | Select/Button | POST · peer offline |
| detail.close | đóng | Button | POST close · Note opt |

## Screens / zones (ids only)
- INC-L · INC-N · INC-D · (peer INC-V · INC-C · INC-E)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-incident
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: incidents CRUD-close · sessions · asset-types · uploads/files · detect
- DOMAIN-MAP-INC + PGC-BE-01: resolved SA · CHK/PEER/STD: Design
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none SA) DOMAIN-MAP-INC + PGC-BE-01 resolved · UNCLEAR-SESS→Dev/QA · GAP-PGC-BE-01 Lat deferred (no MIG SA)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
