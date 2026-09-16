# Demo parity — cam-patrol

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/cam-patrol/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_0f0d1974` · `2026-08-28T21:08:48.000Z`  
**SSOT:** mobile-p1 `#sc-cam-patrol` · DA hash skip · **cấm** re-scan

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Thu thập bằng camera** | yes | yes | OK |
| Stamp **QL.1 · Km 1556+040** | yes | yes | OK |
| Stamp GPS **11.5308, 109.0082 · ±4 m · đã chốt** | yes | yes | OK |
| Row **Phát hiện** / **Ổ gà · Mặt đường** | yes | yes | OK |
| Row demo **Độ tin cậy** / **91%** | yes | yes | OK |
| Row **Hành động** / **Tạo vấn đề sau xác nhận** | yes | yes | OK |
| Primary **Xác nhận · tạo vấn đề** | yes | yes | OK |
| Secondary **Bỏ qua** | yes | yes | OK |
| Toast OK **Đã tạo vấn đề SC-2409 · định vị đã chốt** | yes | yes | OK |
| Toast Skip **Đã bỏ · nhận nhầm** | yes | yes | OK |
| Deny title **Định vị bị tắt** | yes | yes | OK |
| Deny body mobile-p1 copy | yes | yes | OK |
| Primary **Sao chép hướng dẫn** · Secondary **Để sau** | yes | yes | OK |
| `#i-chevron-left` cùng `d=` | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **field** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value/btn 16 · title 17 | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label | yes | yes | OK |
| `data-des-id` DES-MOB-CAM-PATROL / FINDER / GPS-DENY | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?ship=1` ẩn score row | dual · GAP-MOB-CAM-SCORE-01 preview | OK |
| `?deny=1` mở modal · disable Confirm | dual | OK |
| Finder FOV `.box` + stamp overlay | dual | OK |
| Skip ẩn detect card | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Tuần đường» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
