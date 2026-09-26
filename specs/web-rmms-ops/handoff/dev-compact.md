# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-ops
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:55:00.000Z
taskId: task_0390e4a3
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON queued /agent-qa*

## Decisions
- changeScope: new_page
- formPattern: Mobile inbox list/full · phone 430 · no master · DES-LEAVE N/A
- Grid/DES-GRID/LinErpListFilterBar/ui-schema: N/A WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-ops · :9301
- be: Notification inbox + mark-read Live on Mobile.Bff · cấm alias mobile-bff trên Web BFF · migration none · cấm ERP.*
- Row unread tap = mark-read only · no detail P1 · no filter UI
- OP-06 empty · notifyBadge = peer Home · REMOVED me*/Kind B
- build: yarn build PASS · BFF PASS · labels useFormOptions LOOKUP_STATIC
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)
- e2e: cấm ở Dev · queued QA

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| inboxList | List | GET inbox p1/50 |
| rowTitle/SentAt/Unread | Text RO / Badge | + opt priority/type |
| markRead | Button/Action | POST mark-read |
| empty/title/back/refresh | Static/Button | LOOKUP_STATIC |
| notifyBadge | Number RO peer | overview · Home |

## Screens / zones (ids only)
- OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-05 · OP-06
- mfeStdUrl= http://localhost:9301/web-rmms-ops
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: list=GET inbox · unread tap=POST mark-read · badge=overview peer
- entity/migration: none · BFF mobile-bff inbox route align
- T-*: BE/PERM/OPS/ACT/FIELD/PROD/UX/RESP/HIST = done · T-QA-* = pending
- WAIVE: LIST→OPS · FILTER · CFG · UISCHEMA · LKP · FORM · LEAVE

## Debt
- LOOKUP_STATIC until OMS seed
- OpsTabPage.tsx leftover unused
- detail/filter = P2

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/implement/web-rmms-ops.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md
