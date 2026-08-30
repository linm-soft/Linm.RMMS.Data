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

1. TopBar — back về list · title Trao đổi sự cố  
2. Subtitle incident (API/seed)  
3. Thread — cũ trên / mới dưới · scroll đáy khi gửi  
4. Composer pin đáy — IME focus, **cấm** hover-as-SSOT  

## §3 Copy

`inc.chat.*` trong `mobile-strings.json` + `LinmCopy`. API `senderName` / `content` **không** qua `t()`.

## §4 GAP

| ID | Note |
|----|------|
| GAP-MOB-EDIT-01 | Lock packet này — **cấm** worker revert toast |
| GAP-MSG-HUB-01 | SignalR DEFER — Notification owns hub |
