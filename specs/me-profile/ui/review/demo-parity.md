# Demo parity — me-profile

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/me-profile/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_0e0676c6` · `2026-08-31T02:15:00.000Z`  
**SSOT:** DA controlHint + PO · hash skip · **cấm** re-scan · GAP-MOB-MEPROF-DEMO-01 closed

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Hồ sơ** | yes | yes | OK |
| Label **Họ và tên** | yes | yes | OK |
| Label **Số điện thoại** | yes | yes | OK |
| Label **Email** | yes | yes | OK |
| Label **Tên đăng nhập** | yes | yes | OK |
| Label **CCCD/CMND** (default show · `?nocitizen=1` hide) | yes | yes | OK |
| Primary **Lưu** | yes | yes | OK |
| Section **Đổi mật khẩu** | yes | yes | OK |
| Labels Secure ×3 | yes | yes | OK |
| Secondary **Đổi mật khẩu** | yes | yes | OK |
| Toast OK **Đã cập nhật hồ sơ** | yes | yes | OK |
| Toast OK **Đã đổi mật khẩu** | yes | yes | OK |
| Toast err path (`?offline=1` / `?fail=1`) | yes | yes | OK |
| Empty fullName → save disabled / validate | yes | yes | OK |
| Confirm mismatch → toast · **không** success | yes | yes | OK |
| `#i-chevron-left` cùng `d=` `M15 5l-7 7 7 7` | yes | yes | OK |
| `#i-person` cùng motif avatar + tab | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn | yes | yes | OK |
| Tab **me** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label/section 13 · value/btn 16 · title 17 (Android title ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label / «Có mạng» | yes | yes | OK |
| `data-des-id` DES-MOB-ME-PROFILE / DES-MOB-LEAVE | yes | yes | OK |
| Không avatar upload UI | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?offline=1` / `?fail=1` toast lỗi · **không** toast ok | dual | OK |
| Leave dirty modal **Rời màn?** | dual | OK |
| `?entry=1` hint Me row | dual · reviewer only | OK |
| Busy **Đang lưu…** / **Đang đổi…** | dual | OK |
| `?nocitizen=1` ẩn CCCD | dual · GAP-MOB-MEPROF-CITIZEN-01 | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Tôi» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |
| CTA radius 12 vs 24 | platform |
| Avatar 44 vs 40 | DA size OK |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
