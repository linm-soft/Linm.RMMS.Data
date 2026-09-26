# Handoff compact — design

schemaVersion: 1
feature: web-rmms-ops
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:40:00.000Z
taskId: task_0a112c4e
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile inbox list/full · phone 430 · N/A ERP Modal/Slideout · no master compose · DES-LEAVE N/A
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone inbox · no filter UI P1
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-ops
- be: D:/AI-QLBD/Linm.RMMS.WebService · Notification · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- P1: inbox GET + mark-read POST + empty + chrome · row unread tap = mark-read only · no detail
- OP-06 badge = peer Home · desktop Kind B / me* / feedback / cam-view / Field deep out
- labels: useFormOptions() · GPS none on /ops · Android 1-1
- open questions: UNCLEAR-DOMAIN-MAP-OPS (SA)
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| inboxList | list | List | GET inbox p1/50 |
| rowTitle/SentAt/Unread | row | Text RO / Badge | + opt priority/type |
| markRead | action | Button/Action | POST mark-read |
| empty/title/back/refresh | chrome | Static/Button | copy keys |
| notifyBadge | peer | Number RO | overview · Home |

## Screens / zones (ids only)
- OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-05 · OP-06
- AC-L-01…08 · reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-ops
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone inbox

## API / tasks (ids only)
- FormMode↔API: inbox GET · mark-read POST · overview GET (peer)
- real-data §A+§B: PASS · T-*: (team_lead) · cite T-W2-01 · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-OPS: SA add DOMAIN-MAP row web-rmms-ops

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ops-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ops-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md
