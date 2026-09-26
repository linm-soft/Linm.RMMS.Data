# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-incident-chat
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T09:50:00.000Z
taskId: task_113464eb
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: confirm
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile chat/full · phone ≤430 · LinmChatThread+Composer · N/A ERP Modal · useFormOptions / incident.chat.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-incident-chat · mfeStdUrl http://localhost:9301/web-rmms-incident-chat · product /incident/:id/chat
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Incident messages · cấm ERP.* · cấm invent ChatController/incident-chat · Step 4b skip
- T-01 route+shell · T-02 TopBar GET{id} · T-03 thread GET messages · T-04 composer POST+re-GET no parentId · T-05 peer #i-chat · T-06 BFF+labels+parity · T-BE N/A · T-QA queued
- HARD: P1 flat · HTTP re-GET · cấm SignalR · GPS none · cấm toast-only/Me*/mnt-chat gộp · Android 1-1
- DES-GRID: N/A phone chat · demo N/A · AC-C1…C10 · zones CH-00…CH-04
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| topBarBack/Title/Subtitle | Button/Static/Text RO | T-02 |
| threadItems / bubbleMine|Theirs | ChatThread/Bubble | T-03 |
| emptyThread | EmptyState | T-03 |
| composerInput/Send | TextArea/Button | T-04 |
| entry.chatIcon | Button/Nav | T-05 |

## Screens / zones
- CH-00 · CH-01 · CH-02 · CH-03 · CH-04
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-incident
- prototype zone: #sc-incident-chat
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET{id} · GET/POST messages · init-data opt · re-GET after POST
- T-01…T-06 pending · T-BE N/A · T-QA queued · devSlash=/agent-dev

## UNCLEAR
- (none open — DOMAIN-MAP/PARENT-ID/POLLING closed)

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/task/web-rmms-incident-chat.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/STATUS.md
