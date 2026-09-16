# UX-analy — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| role | `design` · lock `/edit-mobile-feature` |
| status | **confirmed** |
| updatedAt | `2026-09-16T14:45:00.000Z` |

## §1 Entry

`mnt-list` card action `#i-chat` → push `#sc-mnt-chat` (không toast). `stopPropagation` — không mở sibling progress/log.

## §2 Zones

1. **Một** TopBar — `LinmTopBar` back về list · title Trao đổi công việc · ẩn system nav (`GAP-MOB-CHAT-HDR-01`)  
2. Subtitle WO (API/seed) — meta dưới bar, không phải header thứ 2  
3. Thread — cũ trên / mới dưới · scroll đáy khi gửi  
4. Composer **flush** mép trên IME khi focus (`GAP-MOB-CHAT-IME-01`) — extra = ime − tab/nav · **cấm** hover-as-SSOT  

## §3 Copy

`mnt.chat.*` trong `mobile-strings.json` + `LinmCopy`. API `senderName` / `content` **không** qua `t()`.

## §4 GAP

| ID | Note |
|----|------|
| GAP-MOB-EDIT-01 | Lock packet này — **cấm** worker revert toast |
| GAP-MOB-CHAT-HDR-01 | **1 header** = `LinmTopBar` · ẩn iOS NavigationStack back · **cấm** Scaffold TopAppBar chồng |
| GAP-MOB-CHAT-IME-01 | Composer **flush** IME · extra = `max(0, ime − consumedBottom)` · **cấm** raw `imePadding` / `safeAreaInset` (đếm trùng tab) |
| GAP-MSG-HUB-01 | SignalR DEFER — Notification owns hub |
