# Handoff compact — design

schemaVersion: 1
feature: web-rmms-incident-chat
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:50:00.000Z
taskId: task_03fa59aa
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile chat/full · phone 430 · LinmChatThread + LinmChatComposer · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone chat
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-incident-chat · productRoute /incident/:id/chat
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident messages · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Chat: TopBar incident · thread GET · composer POST · entry peer #i-chat
- Thread P1 flat · no parentId · reply P2
- Realtime: re-GET after POST · pull optional · cấm SignalR
- labels: useFormOptions() / incident.chat.* · cấm hardcode · cấm Me*
- GPS: none on chat
- Android 1-1 · cấm sửa iOS/Android
- open: UNCLEAR-DOMAIN-MAP-CHAT → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| topBarBack/Title/Subtitle | chrome | Button/Static/Text RO | GET incident · back /incident |
| threadItems / bubbleMine|Theirs | thread | ChatThread/Bubble | GET messages · isMine |
| emptyThread | empty | EmptyState | incident.chat.empty |
| composerInput/Send | composer | TextArea/Button | POST {content,type:message} no parentId |
| entry.chatIcon | list peer | Button/Nav | #i-chat |

## Screens / zones (ids only)
- CH-00 · CH-01 · CH-02 · CH-03 · CH-04
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html
- reviewUrl empty= …/index.html?empty=1
- reviewUrl error= …/index.html?error=1
- peerStdUrl= http://localhost:9301/web-rmms-incident
- prototype zone: #sc-incident-chat
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: messages GET/POST · incident GET header · init-data opt
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-CHAT: SA add DOMAIN-MAP row web-rmms-incident-chat
- (PARENT-ID / POLLING closed by PO — Design wired)

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-chat-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-chat-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/STATUS.md
