# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-incident-chat
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T10:05:00.000Z
taskId: task_ae3eb9e3
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
changeScope: new_page
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile chat/full · phone ≤430 · LinmChatThread+Composer (in-feature) · #sc-incident-chat · N/A ERP Modal
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-incident-chat · mfeStdUrl http://localhost:9301/web-rmms-incident-chat · product /incident/:id/chat alias
- be: Mobile.Bff · incident/incidents/{id}/messages GET/POST · GET {id} · T-BE N/A · cấm ERP.* · cấm invent ChatController · cấm gộp mnt-chat
- Thread P1 flat · no parentId · re-GET after POST · cấm SignalR · GPS none · cấm Me*/web-bff/toast-only
- T-01…T-06 PASS · build FE+BE PASS · next /agent-qa* only

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| topBarBack/Title/Subtitle | Button/Static/Text RO | T-02 |
| threadItems / bubbleMine|Theirs | ChatThread/Bubble | T-03 |
| emptyThread | EmptyState | T-03 |
| composerInput/Send | TextArea/Button | T-04 |
| entry.chatIcon | Button/Nav peer #i-chat / btn-inc-chat-{id} | T-05 |

## Screens / zones
- CH-00 · CH-01 · CH-02 · CH-03 · CH-04
- mfeStdUrl= http://localhost:9301/web-rmms-incident-chat
- peerStdUrl= http://localhost:9301/web-rmms-incident
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html
- prototype zone: #sc-incident-chat
- DES-GRID: N/A

## API / tasks
- FormMode↔API: GET {id} · GET messages?type=message · POST {content,type:message} · re-GET
- T-01…T-06 PASS · T-BE N/A · T-QA queued
- VERIFY: yarn build PASS · dotnet build PASS

## UNCLEAR
- (none)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/implement/web-rmms-incident-chat.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/task/web-rmms-incident-chat.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/STATUS.md
