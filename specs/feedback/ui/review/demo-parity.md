# Demo parity — feedback

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/feedback/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_fc39397c` · `2026-08-29T06:06:00.000Z`  
**SSOT:** mobile-p1 `#sc-feedback` · DA hash skip · **cấm** re-scan

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Góp ý** | yes | yes | OK |
| Label **Nội dung góp ý** | yes | yes | OK |
| Placeholder **Mô tả tính năng cần sửa / bổ sung…** | yes | yes | OK |
| Primary **Gửi góp ý** | yes | yes | OK |
| Toast OK **Đã gửi góp ý** | yes | yes | OK |
| Toast err path (`?offline=1` / `?fail=1`) **Không gửi được · kiểm tra mạng** | yes | yes | OK |
| Empty → send disabled / validate | yes | yes | OK |
| `#i-chevron-left` cùng `d=` `M15 5l-7 7 7 7` | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **me** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value/btn 16 · title 17 (Android title ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label / «Có mạng» | yes | yes | OK |
| `data-des-id` DES-MOB-FEEDBACK / DES-MOB-LEAVE | yes | yes | OK |
| Không category pills P1 | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?offline=1` / `?fail=1` toast lỗi · **không** toast ok | dual | OK |
| Leave dirty modal **Rời màn?** | dual | OK |
| `?entry=1` hint Me row | dual · reviewer only | OK |
| Busy **Đang gửi…** | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Tôi» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |
| CTA radius 12 vs 24 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
