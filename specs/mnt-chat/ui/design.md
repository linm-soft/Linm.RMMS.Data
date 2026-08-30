# Design — mnt-chat (mobile screen · Trao đổi công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| title | [Mobile] [Công việc] -> Trao đổi công việc |
| this role | `design` · lock `/edit-mobile-feature` |
| changeScope | `edit_page` — thay toast bằng chat style |
| packKind | `screen` (chat) |
| stack | `native_dual` |
| status | **confirmed** · DES-MOB-MNT-CHAT |
| updatedAt | `2026-08-29T17:10:00.000Z` |

## DES-MOB-MNT-CHAT

Full screen `#sc-mnt-chat` (không bottom-sheet chrome — composer phải pin đáy).

| Zone | Control | Token / copy |
|------|---------|--------------|
| Nav | `LinmTopBar` back + title | `mnt.chat.title` · `mnt.chat.back` |
| Sub | WO title · code | API / seed — **cấm** `t()` |
| Thread | `LinmChatThread` · `LinmChatBubble` | mine = `primary`/`onPrimary` · theirs = `card`/`onSurface` · time `metaFont`/`muted` |
| Empty | | `mnt.chat.empty` |
| Composer | `LinmChatComposer` paper-plane | `mnt.chat.placeholder` · `mnt.chat.send` |
| Entry | parent `#i-chat` | `btn-mnt-chat-{id}` · **cấm** toast |

## Cấm revert

Worker **cấm** ghi lại toast-only / `session.showToast(mnt.list.toast.chat)` làm hành vi chính.
