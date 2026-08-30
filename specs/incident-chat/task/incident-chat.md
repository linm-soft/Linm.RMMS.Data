# TL — Tasks — incident-chat

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| thisAction | Trao đổi sự cố · `#i-chat` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:40:00.000Z` |

## Route

`incident-list` `#i-chat` → `#sc-incident-chat` · **cấm** toast.

## Tasks

| ID | OS | Note |
|----|-----|------|
| T-KIT-CHAT | both | Reuse `LinmChatThread` + `LinmChatComposer` · UI only |
| T-IOS-01 | iOS | `IncidentChatView` + VM + repo messages |
| T-AND-01 | Android | `IncidentChatScreen` + VM + repo messages |
| T-BE-01 | API | GET/POST `api/v1/incident/incidents/{id}/messages` · Schema_IncidentMessages |
| T-BFF-01 | BFF | Web forward · Mobile catch-all |

## UI notes Dev

- Kit chrome · tokens · `LinmCopy.t("inc.chat.*")`  
- **Cấm** `showToast(inc.chat.toast)` / `inc.list.toast.chat` làm entry  
- Demo id: local bubble fallback · live Guid: HTTP
