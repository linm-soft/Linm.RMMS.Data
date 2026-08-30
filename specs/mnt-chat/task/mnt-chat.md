# TL — Tasks — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| thisAction | Trao đổi công việc · `#i-chat` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:10:00.000Z` |

## Route

`mnt-list` `#i-chat` → `#sc-mnt-chat` · **cấm** toast.

## Tasks

| ID | OS | Note |
|----|-----|------|
| T-KIT-CHAT | both | `LinmChatThread` + `LinmChatComposer` · UI only |
| T-IOS-01 | iOS | `MntChatView` + VM + repo messages |
| T-AND-01 | Android | `MntChatScreen` + VM + repo messages |
| T-BE-01 | API | GET/POST `api/v1/maintenance/work-orders/{id}/messages` · Schema_WorkOrderMessages |
| T-BFF-01 | BFF | Web forward · Mobile catch-all |

## UI notes Dev

- Kit chrome · tokens · `LinmCopy.t("mnt.chat.*")`  
- **Cấm** `showToast(mnt.list.toast.chat)` làm entry  
- Demo id: local bubble fallback · live Guid: HTTP
