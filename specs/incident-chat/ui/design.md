# Design — incident-chat (mobile screen · Trao đổi sự cố)

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| title | [Mobile] [Vấn đề] -> Trao đổi sự cố |
| this role | `design` · lock `/edit-mobile-feature` |
| changeScope | `edit_page` — thay toast bằng chat style |
| packKind | `screen` (chat) |
| stack | `native_dual` |
| status | **confirmed** · DES-MOB-INC-CHAT |
| updatedAt | `2026-08-29T17:40:00.000Z` |

## DES-MOB-INC-CHAT

Full screen `#sc-incident-chat` (không bottom-sheet chrome — composer phải pin đáy).

| Zone | Control | Token / copy |
|------|---------|--------------|
| Nav | `LinmTopBar` back + title | `inc.chat.title` · `inc.chat.back` |
| Sub | Incident title · code | API / seed — **cấm** `t()` |
| Thread | `LinmChatThread` · `LinmChatBubble` | mine = `primary`/`onPrimary` · theirs = `card`/`onSurface` · time `metaFont`/`muted` |
| Empty | | `inc.chat.empty` |
| Composer | `LinmChatComposer` paper-plane | `inc.chat.placeholder` · `inc.chat.send` |
| Entry | parent `#i-chat` | `btn-inc-chat-{id}` · **cấm** toast |

## Cấm revert

Worker **cấm** ghi lại toast-only / `session.showToast(inc.chat.toast)` / `inc.list.toast.chat` làm hành vi chính.
