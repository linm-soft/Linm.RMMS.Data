# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mnt-chat
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:40:00.000Z
taskId: task_24d0429a
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile chat/full · phone ≤430 · LinmChatThread+Composer · N/A ERP Modal · DES-GRID N/A
- domain: Maintenance (`maintenance`) · Live work-orders messages · DOMAIN-MAP row `web-rmms-mnt-chat` applied
- mfeStdRoute: /web-rmms-mnt-chat · mfeStdUrl http://localhost:9301/web-rmms-mnt-chat · productRoute /work/chat?id=
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent ChatController/mnt-chat
- FormMode↔API: GET {id} · GET messages?type=message · POST messages · init-data opt · re-GET after POST
- Body: `{ content, type:"message" }` · **no** parentId P1 · reply P2
- Realtime: HTTP re-GET · **cấm** SignalR · GPS none
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions / work.chat.* · demo N/A · **cấm** Me* · **cấm** toast-only
- Out: Me* · progress/log/estimate · Field/journal-b…e · invent path · web-bff · native edits
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| topBarBack/Title/Subtitle | chrome | Button/Static/Text RO | GET WO · back /work |
| threadItems / bubbleMine|Theirs | thread | ChatThread/Bubble | GET messages · isMine |
| emptyThread | empty | EmptyState | work.chat.empty |
| composerInput/Send | composer | TextArea/Button | POST {content,type:message} no parentId |
| entry.chatIcon | list peer | Button/Nav | #i-chat |

## Screens / zones (ids only)
- CH-00 · CH-01 · CH-02 · CH-03 · CH-04
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-chat
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST messages · GET WO · init-data opt · re-GET
- DOMAIN-MAP: applied · PARENT-ID/POLLING: closed
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none open — DOMAIN-MAP/PARENT-ID/POLLING closed)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-chat-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/STATUS.md
