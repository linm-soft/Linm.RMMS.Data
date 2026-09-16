# UX-analy — incident-chat

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| role | `design` · lock `/edit-mobile-feature` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:40:00.000Z` |

## §1 Entry

`incident-list` card action `#i-chat` → push `#sc-incident-chat` (không toast). `stopPropagation` — không mở sibling assign/detail/map.

## §2 Zones

1. **Một** TopBar — `LinmTopBar` back về list · title Trao đổi sự cố · ẩn system nav (`GAP-MOB-CHAT-HDR-01`)  
2. Subtitle incident (API/seed) — không phải header thứ 2  
3. Thread — cũ trên / mới dưới · scroll đáy khi gửi  
4. Composer pin đáy **và trên IME** (`GAP-MOB-CHAT-IME-01`) — **cấm** hover-as-SSOT  

## §3 Copy

`inc.chat.*` trong `mobile-strings.json` + `LinmCopy`. API `senderName` / `content` **không** qua `t()`.

## §4 GAP

| ID | Note |
|----|------|
| GAP-MOB-EDIT-01 | Lock packet này — **cấm** worker revert toast |
| GAP-MOB-CHAT-HDR-01 | **1 header** = `LinmTopBar` · ẩn iOS NavigationStack back |
| GAP-MOB-CHAT-IME-01 | Composer **trên** IME · Android `imePadding` · iOS `safeAreaInset` |
| GAP-MSG-HUB-01 | SignalR DEFER — Notification owns hub |
