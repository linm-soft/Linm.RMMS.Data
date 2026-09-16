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
| updatedAt | `2026-09-16T14:45:00.000Z` |

## DES-MOB-MNT-CHAT

Full screen `#sc-mnt-chat` (không bottom-sheet chrome — composer phải pin đáy).

| Zone | Control | Token / copy |
|------|---------|--------------|
| Nav | **1** `LinmTopBar` back + title | `mnt.chat.title` · `mnt.chat.back` · **cấm** system `NavigationStack` / Scaffold `TopAppBar` chồng (`GAP-MOB-CHAT-HDR-01`) |
| Sub | WO title · code | API / seed — **cấm** `t()` · **không** đếm là header thứ 2 |
| Thread | `LinmChatThread` · `LinmChatBubble` | mine = `primary`/`onPrimary` · theirs = `card`/`onSurface` · time `metaFont`/`muted` |
| Empty | | `mnt.chat.empty` |
| Composer | `LinmChatComposer` paper-plane | `mnt.chat.placeholder` · `mnt.chat.send` · **flush IME** (`GAP-MOB-CHAT-IME-01`) — extra = `max(0, ime − consumedBottom)` (tab/nav đã trừ) · Android `linmChatImeFlush` · iOS `linmChatImeFlush` · **cấm** raw `imePadding` / `safeAreaInset` đếm trùng tab |
| Entry | parent `#i-chat` | `btn-mnt-chat-{id}` · **cấm** toast |

## Cấm revert

Worker **cấm** ghi lại toast-only / `session.showToast(mnt.list.toast.chat)` làm hành vi chính.  
Worker **cấm** hiện 2 header (system back + `LinmTopBar`) — iOS `.toolbar(.hidden, for: .navigationBar)` + `.navigationBarBackButtonHidden(true)` · Android **không** `topBar` trên Scaffold cha.  
Worker **cấm** để composer chìm dưới bàn phím **hoặc** cách IME một khoảng tab bar (`GAP-MOB-CHAT-IME-01`).
