# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mnt-chat
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:23:32.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile chat / full (phone max-width 430) · LinmChatThread + LinmChatComposer · N/A ERP Modal/Slideout · no master form
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mnt-chat
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Maintenance messages · cấm ERP.*
- demo: N/A
- Chat: TopBar WO · thread GET · composer POST · entry #i-chat từ web-rmms-work
- API Live: GET/POST maintenance/work-orders/{id}/messages · GET {id} header · cấm invent api/v1/mnt-chat · cấm toast-only
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Out: progress / log / estimate / Field doors / journal/kết ca/tồn tại/tần suất → peers (b–e)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: none on chat · peer deep navigator.geolocation · deny blocks coords
- realtime: P1 HTTP only · cấm kit SignalR
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-CHAT · UNCLEAR-PARENT-ID · UNCLEAR-POLLING

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| topBarBack/Title/Subtitle | chrome | Button/Static/Text RO | GET WO · back /work |
| threadItems / bubbleMine|Theirs | thread | ChatThread/Bubble | GET messages · isMine |
| emptyThread | empty | EmptyState | copy key |
| composerInput/Send | composer | TextArea/Button | POST {content,type:message} |
| entry.chatIcon | list peer | Button/Nav | #i-chat |

## Screens / zones (ids only)
- CH-00 · CH-01 · CH-02 · CH-03 · CH-04
- reviewUrl= (Design) · prototype #sc-mnt-chat
- peerStdUrl= http://localhost:9301/web-rmms-mnt-chat
- DES-GRID / LinErpListFilterBar: N/A phone chat

## API / tasks (ids only)
- FormMode↔API: messages GET/POST · WO GET header · init-data opt
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-CHAT: add DOMAIN-MAP row web-rmms-mnt-chat (SA)
- UNCLEAR-PARENT-ID: P1 flat vs reply parentId (PO/Design)
- UNCLEAR-POLLING: re-GET after POST · no SignalR (Design/Dev)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-chat-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-chat-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-chat.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/STATUS.md
