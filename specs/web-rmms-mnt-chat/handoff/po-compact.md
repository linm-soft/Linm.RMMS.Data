# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mnt-chat
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:30:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile chat / full (phone max-width 430) · LinmChatThread + LinmChatComposer · N/A ERP Modal/Slideout · no master form
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mnt-chat · productRoute /work/chat
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Maintenance messages · cấm ERP.*
- demo: N/A
- Chat: TopBar WO · thread GET · composer POST · entry #i-chat từ web-rmms-work
- API Live: GET/POST …/work-orders/{id}/messages · GET {id} header · cấm invent api/v1/mnt-chat · cấm toast-only
- UNCLEAR-PARENT-ID: P1 flat — no parentId · reply P2
- UNCLEAR-POLLING: re-GET after POST · pull optional · cấm SignalR kit
- UNCLEAR-DOMAIN-MAP-CHAT: SA add DOMAIN-MAP row
- DES-GRID / LinErpListFilterBar: N/A phone chat
- labels: useFormOptions() / work.chat.* · cấm hardcode VN
- GPS: none on chat
- REMOVED: me* / feedback / cam-view · Out: progress/log/estimate/Field/journal-b…e
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| topBarBack/Title/Subtitle | chrome | Button/Static/Text RO | GET WO · back /work |
| threadItems / bubbleMine|Theirs | thread | ChatThread/Bubble | GET messages · isMine |
| emptyThread | empty | EmptyState | copy key |
| composerInput/Send | composer | TextArea/Button | POST {content,type:message} no parentId |
| entry.chatIcon | list peer | Button/Nav | #i-chat |

## Screens / zones (ids only)
- CH-00 · CH-01 · CH-02 · CH-03 · CH-04
- reviewUrl= (Design) · prototype #sc-mnt-chat
- peerStdUrl= http://localhost:9301/web-rmms-mnt-chat
- AC-C1…C10 Chat · DES-GRID N/A

## API / tasks (ids only)
- FormMode↔API: messages GET/POST · WO GET header · init-data opt
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-CHAT: SA add DOMAIN-MAP row web-rmms-mnt-chat
- UNCLEAR-POLLING: Design/Dev wire re-GET (PO decided HTTP-only)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-chat-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-chat-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-chat.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/STATUS.md
