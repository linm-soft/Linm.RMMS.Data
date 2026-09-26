# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-ops
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:45:00.000Z
taskId: task_320abfbb
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile inbox list/full · phone 430 · N/A ERP Modal/Slideout · no master compose
- domain: Notification (`notification`) · DOMAIN-MAP row `web-rmms-ops` added · UNCLEAR-DOMAIN-MAP-OPS resolved · alias `ops` kept
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-ops` · mfeStdUrl http://localhost:9301/web-rmms-ops
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · cấm ERP.* · cấm invent compose CRUD
- Live only: GET notification/inbox · POST …/inbox/{id}/mark-read · GET overview (peer Home)
- API Mới / entity / migration: **none** · Step 4b skip
- Row unread tap = mark-read only · no detail P1 · DES-GRID/filter N/A
- REMOVED: me* / feedback / cam-view / Field deep / desktop Kind B · GPS none
- labels: useFormOptions() · cấm hardcode VN
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| inboxList | List | GET notification/inbox p1/50 |
| rowTitle/SentAt/Unread | Text RO / Badge | inbox item |
| markRead | Button/Action | POST …/mark-read |
| empty/title/back/refresh | Static/Button | copy · nav · reload |
| notifyBadge | Number RO peer | GET overview · Home |

## Screens / zones
- OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-05 · OP-06
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-ops

## API / tasks
- FormMode↔API: list=GET inbox · unread tap=POST mark-read · badge=overview peer
- BFF vs API: Mobile.Bff only · no Ops controller
- T-*: (team_lead) · cite T-W2-01 · devSlash=/agent-dev

## UNCLEAR
- (none blocking) DOMAIN-MAP-OPS · STD-PORT · DESKTOP-SCOPE · DETAIL resolved

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ops-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md
