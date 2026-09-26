# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:25:00.000Z
taskId: task_7553d7f3
contentHash: sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: confirm
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile full INC-L/N/D · phone ≤430 · Android 1-1 · N/A ERP Modal · useFormOptions
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-incident · mfeStdUrl http://localhost:9301/web-rmms-incident · product /incident|/new|/:id nested
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Incident+Patrol+Integration+AiVision(+files) · cấm ERP.* · cấm invent hub · Step 4b skip
- T-01 route+nested · T-02 INC-L grid · T-03 INC-N form · T-04 detect+POST HasGps · T-05 INC-D close · T-06 BFF+SESS toast · T-BE N/A · T-QA queued
- HARD: GPS deny block · Acc≤30 detect · HasGps only no Lat · MediaIds≤10 · checklist→Description · sessions live · cấm fake coords/itemsOrDemo
- DES-GRID: N/A phone · demo N/A · cite T-W4-01/02/03 · AC-GRID/CREATE/DETAIL
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| search/filters | Search+Chip | T-02 |
| list.card | CardList | T-02 |
| fab | FAB | T-02 |
| assetPick | LookupGrid | T-03 |
| kind | Segment | T-03 |
| checklist | CheckboxGroup | T-03 |
| photos/detect | PhotoRow/Button | T-03·T-04 |
| sessionStamp | Text RO | T-03·T-06 |
| gpsLock | GPS | T-03·T-04 |
| severity/create/draft | Select/Button | T-03·T-04 |
| detail.close | Button | T-05 |

## Screens / zones
- INC-L · INC-N · INC-D · (peer INC-V · INC-C · INC-E)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-incident
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET/POST incidents · GET{id} · POST close · sessions · asset-types · uploads/files · detect
- T-01…T-06 pending · T-BE N/A · T-QA queued · devSlash=/agent-dev

## UNCLEAR
- (none blocking) · UNCLEAR-SESS→Dev/QA empty toast · cấm itemsOrDemo

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/task/web-rmms-incident.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
