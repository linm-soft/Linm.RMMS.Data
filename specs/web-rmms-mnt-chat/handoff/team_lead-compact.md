# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mnt-chat
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:45:00.000Z
taskId: task_039efacf
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: confirm
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile chat/full · phone ≤430 · LinmChatThread+Composer · Android 1-1 #sc-mnt-chat · N/A ERP Modal · useFormOptions
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-mnt-chat · mfeStdUrl http://localhost:9301/web-rmms-mnt-chat · product /work/chat?id= · entry peer WORK-L #i-chat
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Maintenance messages · cấm ERP.* · cấm invent mnt-chat · Step 4b skip
- Thread P1 flat · no parentId · re-GET after POST · cấm SignalR · GPS none · cấm Me*/web-bff/toast-only
- T-01 route+shell · T-02 TopBar GET{id} · T-03 thread GET · T-04 composer POST+re-GET · T-05 entry/error/BFF/parity · T-BE N/A · T-QA queued
- cite T-W5-04 · AC-C1…C10 · demo N/A · DES-GRID N/A
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| topBarBack/Title/Subtitle | Button/Static/Text RO | T-02 |
| threadItems / bubbleMine|Theirs | ChatThread/Bubble | T-03 |
| emptyThread | EmptyState | T-03 · T-05 |
| composerInput/Send | TextArea/Button | T-04 |
| entry.chatIcon | Button/Nav peer | T-01 · T-05 |

## Screens / zones
- CH-00 · CH-01 · CH-02 · CH-03 · CH-04
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-chat
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET {id} · GET messages · POST messages · re-GET · init-data opt · no parentId
- T-01…T-05 pending · T-BE N/A · T-QA queued · devSlash=/agent-dev

## UNCLEAR
- (none blocking) · DOMAIN-MAP/PARENT-ID/POLLING CLOSED

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/task/web-rmms-mnt-chat.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/STATUS.md
