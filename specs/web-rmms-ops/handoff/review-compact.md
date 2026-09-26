# Handoff compact — review

schemaVersion: 1
feature: web-rmms-ops
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:10:00.000Z
taskId: task_ec7dfc02
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: approve
autoApprove: ON
e2eQa: ON · prior QA PASS · cấm re-run e2e ở Review

## Decisions
- changeScope: new_page
- formPattern: Mobile inbox list/full · phone 430 · no master · DES-LEAVE N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-ops · :9301
- be: Notification inbox + mark-read Live · mobile-bff · cấm ERP.* · migration none
- Gates: QUERY/SEC/UI-FN/BE-FN = PASS · Must 0 · Should 0
- Hash unchanged vs QA/dev → skip re-crawl
- Row unread tap = mark-read only · no detail P1 · guestGate FE
- next: chain complete · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** yarn build/e2e/start:std ở Review

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| inboxList | List | GET inbox p1/50 · OK |
| rowTitle/SentAt/Unread | Text RO / Badge | OP-03/04 · OK |
| markRead | Button/Action | POST mark-read · OK |
| empty/guestGate/title/back/refresh | Static/Button | OP-01/06 · OK |
| notifyBadge | Number RO peer | Home · not re-owned |

## Screens / zones (ids only)
- OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-05 · OP-06
- mfeStdUrl= http://localhost:9301/web-rmms-ops
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html
- qaScreens= specs/web-rmms-ops/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- FormMode↔API: list=GET inbox · unread tap=POST mark-read · badge=overview peer
- entity/migration: none · DOMAIN-MAP web-rmms-ops CLOSED
- T-*: prior QA PASS · review Must 0
- Soft debt: LOOKUP_STATIC · OpsTab leftover · Auth stub TODO · e2e stock port

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md
