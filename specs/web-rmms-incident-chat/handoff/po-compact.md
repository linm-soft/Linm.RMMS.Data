# Handoff compact — po

schemaVersion: 1
feature: web-rmms-incident-chat
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:40:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- packKind: list confirm · Chat AC · DES-GRID N/A (phone chat)
- formPattern: Mobile chat / full (phone max-width 430) · LinmChatThread + LinmChatComposer · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-incident-chat · productRoute /incident/:id/chat
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Incident messages · cấm ERP.*
- demo: N/A
- UNCLEAR-PARENT-ID: P1 flat — POST no parentId · reply UI P2
- UNCLEAR-POLLING: HTTP only — re-GET after POST OK · pull optional · cấm SignalR kit
- UNCLEAR-DOMAIN-MAP-CHAT: SA add DOMAIN-MAP row · Incident · cite web-rmms-incident · cấm invent controller
- API Live: GET/POST incident/incidents/{id}/messages · GET {id} header · cấm invent api/v1/incident-chat · cấm toast-only
- Out: me* · create/detail/vis/estimate · journal/kết ca · mnt-chat không gộp · GPS none
- labels: useFormOptions() / incident.chat.* · cấm hardcode VN
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| topBarBack/Title/Subtitle | chrome | Button/Static/Text RO | GET incident · back /incident |
| threadItems / bubbleMine|Theirs | thread | ChatThread/Bubble | GET messages · isMine |
| emptyThread | empty | EmptyState | copy key |
| composerInput/Send | composer | TextArea/Button | POST {content,type:message} no parentId |
| entry.chatIcon | list peer | Button/Nav | #i-chat |

## Screens / zones (ids only)
- CH-00 · CH-01 · CH-02 · CH-03 · CH-04
- reviewUrl= (Design) · prototype #sc-incident-chat
- peerStdUrl= http://localhost:9301/web-rmms-incident-chat
- DES-GRID / LinErpListFilterBar: N/A phone chat

## API / tasks (ids only)
- FormMode↔API: messages GET/POST · incident GET header · init-data opt
- AC-C1…C10 Chat · Leave §5 · DoD §8
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR → resolved / handoff
- UNCLEAR-PARENT-ID: resolved P1 flat (PO)
- UNCLEAR-POLLING: resolved HTTP re-GET (PO) · Design/Dev wire UX
- UNCLEAR-DOMAIN-MAP-CHAT: open → SA

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-chat-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-chat-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-incident-chat.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/STATUS.md
