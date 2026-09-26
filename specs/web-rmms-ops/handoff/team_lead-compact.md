# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-ops
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:05:00.000Z
taskId: task_133133c0
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile inbox list/full · phone 430 · no master compose · DES-LEAVE N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · WAIVE T-UI-LIST-01→T-UI-OPS-01 · FILTER/CFG/UISCHEMA/LKP/FORM/LEAVE WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-ops · :9301
- be: Notification inbox + mark-read · mobile-bff :5202 · cấm ERP.* · migration/Step4b none
- DOMAIN-MAP: web-rmms-ops → Notification/notification · CLOSED · alias ops kept
- Row unread tap = mark-read only · no detail P1 · no filter UI
- OP-06 badge = peer Home overview · REMOVED me*/feedback/cam-view/Field deep/desktop Kind B
- GPS none · labels useFormOptions · Android 1-1 · cite T-W2-01
- GAP-TL-FORMTYPE-01: PASS
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)
- e2eQa: ON queued /agent-qa* · cấm e2e ở TL/dev

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| inboxList | List | GET inbox p1/50 |
| rowTitle/SentAt/Unread | Text RO / Badge | + opt priority/type |
| markRead | Button/Action | POST mark-read |
| empty/title/back/refresh | Static/Button | copy keys |
| notifyBadge | Number RO peer | overview · Home |

## Screens / zones (ids only)
- OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-05 · OP-06
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-ops
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: list=GET inbox · unread tap=POST mark-read · badge=overview peer
- entity/migration: none
- T-*: T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-OPS-01 · T-UI-ACT-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01 · T-QA-OPS-01
- WAIVE: T-UI-LIST-01(→OPS) · FILTER · CFG · UISCHEMA · LKP · FORM · LEAVE · QA-FILTER
- devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/task/web-rmms-ops.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md
