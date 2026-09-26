# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:45:00.000Z
taskId: task_32cbc24f
contentHash: sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d
dev_confirm: approve
autoApprove: ON
changeScope: new_page
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile full INC-L/N/D · phone ≤430 · nested /new /:id · N/A ERP Modal
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-incident · mfeStdUrl http://localhost:9301/web-rmms-incident
- product: /incident · /incident/new · /incident/:id aliases
- be: Mobile.Bff mobile-bff/api/v1 · Incident+Patrol+Integration+AiVision · cấm ERP.* · cấm invent hub
- Step 4b / T-BE: **N/A** · cite IncidentsController GET/POST/close · no MIG
- HARD: GPS deny block · Acc≤30 detect · HasGps only no Lat · MediaIds≤10 · checklist→Description · sessions live toast · cấm itemsOrDemo
- build: yarn build PASS · dotnet build PASS
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | done |
|----|-------------|------|
| search/filters | Search+Chip | T-02 ✓ |
| list.card | CardList | T-02 ✓ |
| fab | FAB | T-02 ✓ |
| assetPick | LookupGrid | T-03 ✓ |
| kind | Segment | T-03 ✓ |
| checklist | CheckboxGroup | T-03 ✓ |
| photos/detect | PhotoRow/Button | T-03·T-04 ✓ |
| sessionStamp | Text RO | T-03·T-06 ✓ |
| gpsLock | GPS | T-03·T-04 ✓ |
| severity/create/draft | Select/Button | T-03·T-04 ✓ |
| detail.close | Button | T-05 ✓ |

## Screens / zones
- INC-L · INC-N · INC-D · peer INC-V/C/E nav-only
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- mfeStdUrl= http://localhost:9301/web-rmms-incident

## API / debt
- FormMode↔API: GET/POST incidents · GET{id} · POST close · sessions · asset-types · uploads · detect
- debt: Lat MIG deferred · peer full screens OOS · E2E queued QA

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/implement/web-rmms-incident.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
