# UX-analy — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| role | `design` · lock `/edit-mobile-feature` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:10:00.000Z` |

## §1 Entry

`mnt-list` card action `#i-chat` → push `#sc-mnt-chat` (không toast). `stopPropagation` — không mở sibling progress/log.

## §2 Zones

1. TopBar — back về list · title Trao đổi công việc  
2. Subtitle WO (API/seed)  
3. Thread — cũ trên / mới dưới · scroll đáy khi gửi  
4. Composer pin đáy — IME focus, **cấm** hover-as-SSOT  

## §3 Copy

`mnt.chat.*` trong `mobile-strings.json` + `LinmCopy`. API `senderName` / `content` **không** qua `t()`.

## §4 GAP

| ID | Note |
|----|------|
| GAP-MOB-EDIT-01 | Lock packet này — **cấm** worker revert toast |
| GAP-MSG-HUB-01 | SignalR DEFER — Notification owns hub |
