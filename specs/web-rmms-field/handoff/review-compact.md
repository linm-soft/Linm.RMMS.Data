# Handoff compact — review

schemaVersion: 1
feature: web-rmms-field
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:05:00.000Z
taskId: task_14ae1b73
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: done
autoApprove: ON
e2eQa: ON · prior QA PASS · **cấm** re-e2e ở review

## Decisions
- changeScope: new_page
- formPattern: Mobile Field hub / full · phone 430 · DES-GRID/FilterBar N/A
- Gates QUERY/SEC/UI-FN/BE-FN: **PASS** · fix_gaps=none
- Live: GET mobile-bff/api/v1/patrol/sessions?pageSize=50 · badge + sessionHint · cấm hub POST/PUT · cấm ERP.* · GPS none
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-field · :9301
- be: Mobile.Bff :5202 · reuse PatrolSessionsController · Step4b skip
- hash unchanged → skip demo rescan
- next: roleOnly stop (GAP-PKT-ROLE-01) · chain complete for review

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| guestGate | Static/Button | SEC PASS · FL-00 |
| doorPatrol/Inspect | Button/Nav | UI-FN PASS · Live badge |
| syncBtn+badge | Button/Number RO | UI-FN PASS · local queue |
| tiles×7 | Button/Nav | UI-FN PASS |
| sessionHint | Text RO | QUERY PASS · GET sessions |

## Screens / zones (ids only)
- FL-00 · FL-01 · FL-02 · FL-03 · SH-02 (QA)
- mfeStdUrl= http://localhost:9301/web-rmms-field
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html

## API / tasks (ids only)
- Live GET patrol/sessions · FormMode↔API nav-only
- T-BE-* · T-PERM · T-UI-* · T-QA-CRUD/FL = done · T-QA-FILTER WAIVE

## Debt
- stock e2e port soft · peer tiles reflect/supervise/map · SH-04 doors chrome
- UNCLEAR: none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/STATUS.md
