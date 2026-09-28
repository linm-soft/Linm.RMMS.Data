# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:35:00.000Z
taskId: task_c4b41ce0
contentHash: sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: keep
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: edit_page · Pattern B SUBMIT-VALIDATE INC-N · giữ prior T-01…T-06 PASS · cấm typed new_page
- formPattern: Mobile full 430 · Pattern B · N/A Modal/DES-GRID/FilterBar
- mfeStdRoute: /van-de|/van-de/moi|/van-de/:id · mfeStdUrl http://localhost:9301/van-de/moi · product /incident|/new|/:id · route_confirm keep
- be: Incident+Patrol+Integration+AiVision(+files) · Mobile.Bff :5202 · cấm ERP.* · cấm invent hub · Step4b skip · T-BE N/A
- DEC-PB-01: create disabled chỉ creating · banner string[] · GPS deny on-submit · photos capture giữ
- Banner keys: asset→incident.pick.title · session→incident.session.empty · GPS→incident.gps.deny · offline→incident.offline
- NEW T-*: T-UI-VAL-B-01 · T-UI-ACC-01 · T-UI-GPS-B-01 · T-UI-ALIGN-01 · T-QA-VAL-B-01
- Align cuối: /align-mobile-to-mfe · SSOT IncidentCreatePage · cấm tab/route/icon mới · cấm native · no_demo
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| create | Button Pattern B | T-UI-VAL-B-01 |
| validate.banner | Banner string[] | T-UI-VAL-B-01 · T-UI-ACC-01 |
| gpsLock | GPS deny on-submit | T-UI-GPS-B-01 |
| photos | PhotoRow capture giữ | T-UI-VAL-B-01 · T-UI-ALIGN-01 |
| asset/session | miss→banner | T-UI-VAL-B-01 |
| list/detail prior | keep PASS | T-01…T-06 |

## Screens / zones
- INC-L · INC-N (Delta Pattern B) · INC-D · peer INC-V/C/E
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- modes=?gps=deny · ?nosession=1 · ?empty=1 · ?error=1
- peerStdUrl= http://localhost:9301/van-de/moi
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET/POST incidents · GET{id} · POST close · sessions · asset-types · uploads/files · detect — Live keep · no DTO
- entity/migration: none · T-BE N/A
- T-UI-* pending · T-01…T-06 PASS · devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- (none blocking) · UNCLEAR-PB-BANNER-01 resolved · UNCLEAR-SESS→Dev/QA · GAP-PGC-BE-01 deferred

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/task/web-rmms-incident.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
