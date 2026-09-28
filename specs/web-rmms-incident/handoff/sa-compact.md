# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:32:00.000Z
taskId: task_73c6c2b2
contentHash: sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015
solution_confirm: approve
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: edit_page · Pattern B INC-N · keep L/D · formPattern Mobile 430 · N/A ERP Modal · DES-GRID N/A
- domain: Incident (`incident`) · cite Patrol/Integration/AiVision · DOMAIN-MAP row keep · cấm invent IncidentHub
- mfeStdRoute: /van-de|/van-de/moi|/van-de/:id · mfeStdUrl http://localhost:9301/van-de/moi
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · cấm ERP.*
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · IncidentCreatePage
- DEC-PB-01: create disabled chỉ creating · validate.banner string[] · GPS deny on-submit · photos capture giữ
- Banner keys: asset→incident.pick.title · session→incident.session.empty · GPS→incident.gps.deny · offline→incident.offline
- DEC-CREATE-01 keep: CreateIncidentRequest · HasGps · no Lat · MediaIds max10 · no DTO change
- FormMode↔API: GET/POST incidents · GET{id} · POST close · sessions · asset-types · uploads/files · detect
- API Mới / entity / migration / Step 4b: **none** at SA (FE-only Delta)
- Out: disabled={!canCreate} · Me* · journal B–E · invent slug · native
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| create | Button | disabled chỉ creating · POST incidents · AC-PB-01 |
| validate.banner | Banner | string[] client · no BE · AC-PB-03/04 |
| gpsLock | GPS | deny on-submit · HasGps · cấm khóa nút |
| photos | PhotoRow | capture giữ · MediaIds |
| assetPick | LookupGrid | GET asset-types |
| sessionStamp | Text RO | GET patrol/sessions |
| list/filters/fab | Search+Chip+Card+FAB | keep INC-L |
| detail.close | Button | POST close · keep INC-D |

## Screens / zones (ids only)
- INC-L · INC-N (Delta Pattern B) · INC-D · peer INC-V/C/E
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/van-de/moi
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: incidents CRUD-close · sessions · asset-types · uploads/files · detect
- DEC-PB-01 + DEC-CREATE-01 · DOMAIN-MAP-INC keep · no MIG
- T-*: edit IncidentCreatePage Pattern B · align-mobile-to-mfe no_demo · devSlash=/agent-dev · T-BE N/A

## UNCLEAR
- UNCLEAR-PB-BANNER-01: **resolved** (PO/Design)
- UNCLEAR-SESS → Dev/QA banner · GAP-PGC-BE-01 Lat deferred (no MIG SA)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
