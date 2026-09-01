# Demo parity — me-settings

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/me-settings/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_d7095795` · `2026-08-30T20:25:00.000Z`  
**SSOT:** DA controlHint + PO · hash skip · **cấm** re-scan · GAP-MOB-MESET-DEMO-01 closed

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Cài đặt** | yes | yes | OK |
| Section **Quyền ứng dụng** | yes | yes | OK |
| Row **Vị trí** + status | yes | yes | OK |
| Row **Camera** + status | yes | yes | OK |
| Row **Thông báo hệ thống** | yes | yes | OK |
| Secondary **Mở Cài đặt hệ thống** | yes | yes | OK |
| Section **Đồng bộ** | yes | yes | OK |
| Row **Hàng đợi mất sóng** | yes | yes | OK |
| Section **Thông tin** | yes | yes | OK |
| Label **Phiên bản** + value | yes | yes | OK |
| Row **Chính sách quyền riêng tư** | yes | yes | OK |
| Toast fail (`?fail=1`) **Không mở được Cài đặt hệ thống** | yes | yes | OK |
| Status unknown (`?unknown=1`) **Không xác định** | yes | yes | OK |
| Empty version (`?emptyver=1`) **—** | yes | yes | OK |
| Privacy panel (`?privacy=1`) copy `home.privacy.*` | yes | yes | OK |
| `#i-chevron-left` cùng `d=` `M15 5l-7 7 7 7` | yes | yes | OK |
| `#i-mappin` / `#i-camera` / `#i-bell` / `#i-sync` / `#i-info` cùng motif | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn | yes | yes | OK |
| Tab **me** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label/section 13 · value/btn 16 · title 17 (Android title ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label / «Có mạng» / fake «Đã lưu» | yes | yes | OK |
| `data-des-id` DES-MOB-ME-SETTINGS | yes | yes | OK |
| Không invent prefs API / FaceID rows | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?fail=1` toast lỗi · **không** toast ok giả | dual | OK |
| `?entry=1` hint Me row | dual · reviewer only | OK |
| Privacy back → Cài đặt | dual | OK |
| Offline toast → patrol-offline reuse | dual · Dev wire nav | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Tôi» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| CTA radius 12 vs 24 | platform |
| Nav title 17 vs ~20 | platform |
| Card radius 12 vs 16 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
