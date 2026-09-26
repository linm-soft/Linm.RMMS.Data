# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:45:00.000Z
taskId: task_7b320485
contentHash: sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4
mfeStdRoute: /web-rmms-mobile-c
mfeStdUrl: http://localhost:9301/web-rmms-mobile-c
build: PASS (yarn build · dotnet build)
autoApprove: ON
e2eQa: queued

## Decisions
- changeScope: edit_page
- formPattern: Full TK-02…05 · phone 430 · LeaveConfirm · KindB/FILTER/UISCHEMA WAIVE
- mfe: Linm.Web.RMMS.Mobile · be: Linm.RMMS.WebService Patrol · cấm ERP.*
- Schema_PatrolFinding + journal review cols Live · code TK-{yyyyMMdd}-{seq:D3} server
- GPS HARD TK-03/05 · BFF mobile catch-all · web-bff findings+review proxy
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa ON

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| findingList | List cards | GET findings?sessionId&status&route |
| filter.status/route | Chip/Select | query |
| source…mediaIds | form fields | POST findings |
| review/reviewNote | Radio+Text | PUT journal-lines/{id}/review |
| createFromLech | Button | → TK-03 prefill |
| recheckResult/confirmDone | Radio+Button | POST findings/{id}/recheck |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · DES-LEAVE
- routes: /web-rmms-mobile-c · :sessionId · /moi · /review/:lineId · /:findingId
- peerStdUrl= http://localhost:9301/web-rmms-mobile-c

## API / tasks (ids only)
- GET/POST findings · GET findings/{id} · POST …/recheck · PUT journal-lines/{id}/review
- T-BE-SCHEMA/CRUD/INIT/PERM · T-UI-LIST/FORM-01..03/ACT/LEAVE/FIELD/PROD/UX/RESP = done
- WAIVE: KindB · FILTER · CFG · UISCHEMA · LKP · HIST
- debt: no PUT findings edit · RequirePermission stub TODO · QA e2e pending

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/implement/web-rmms-mobile-c.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
