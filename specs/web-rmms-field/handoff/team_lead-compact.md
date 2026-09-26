# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-field
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:25:00.000Z
taskId: task_aa5e308d
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: approve

## Decisions
- formPattern: Mobile Field hub / full · phone ≤430 · N/A Modal · no master · DES-GRID/FilterBar N/A
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-field · mfeStdUrl http://localhost:9301/web-rmms-field · product /field*
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Patrol sessions GET badge · cấm ERP.* · cấm hub POST/PUT · Step 4b skip
- DOMAIN-MAP web-rmms-field → Patrol resolved
- FormType: T-UI-LIST→T-UI-FL-01 · FILTER/CFG/UISCHEMA/LKP/LEAVE/FORM WAIVE · GAP-TL-FORMTYPE-01 PASS
- T-*: T-BE-CRUD/INIT/PERM · T-UI-FL-01 · T-UI-ACT/FIELD/PROD/UX/RESP/HIST · T-QA-CRUD-01 · T-QA-FL-01
- HARD: hub mount doors; deep=A · GPS none · labels useFormOptions · sync→offline local queue
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| doorPatrol/Inspect | Button/Nav | T-UI-FL-01/ACT |
| syncBtn+badge | Button/Number RO | T-UI-FL-01/ACT |
| tiles×7 | Button/Nav | T-UI-FL-01/ACT |
| sessionHint | Text RO | T-UI-FL-01/FIELD · T-BE-CRUD |

## Screens / zones
- FL-00 · FL-01 · FL-02 · FL-03
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-field
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET patrol/sessions badge · nav-only writes
- entity/migration: none · T-BE reuse PatrolSessionsController
- T-* pending · devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- (none open) · DOMAIN-MAP/HUB/PORT resolved prior

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/task/web-rmms-field.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/STATUS.md
