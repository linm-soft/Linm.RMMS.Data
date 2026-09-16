# Demo parity — cam-view

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/cam-view/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_a3c2af87` · `2026-08-29T17:50:00.000Z`  
**SSOT:** DA/PO `#sc-cam-view` · hash skip · **cấm** re-scan

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Camera xem** | yes | yes | OK |
| Trailing **Làm mới** | yes | yes | OK |
| JPEG caption **Ảnh JPEG · iDS-TCM403** | yes | yes | OK |
| JPEG updated **Cập nhật 08:41** | yes | yes | OK |
| Section **Sự kiện** | yes | yes | OK |
| Row **Tốc độ 72 km/h** · sub **08:41 · làn 2** | yes | yes | OK · đóng GAP-MOB-CAMVIEW-DUAL-01 |
| Row **Phát hiện biển P.127** · sub **08:36** | yes | yes | OK · đóng GAP-MOB-CAMVIEW-DUAL-01 |
| Toast OK **Đã làm mới ảnh** | yes | yes | OK |
| Empty **Chưa có camera Online** (`?empty=1`) | yes | yes | OK |
| `#i-chevron-left` cùng `d=` | yes | yes | OK |
| `#i-video` cùng motif | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **me** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label/section 13 · value 16 · title 17 / ~20 · trailing 16 | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label / fake JPEG ship | yes | yes | OK |
| `data-des-id` DES-MOB-CAM-VIEW | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?empty=1` EmptyState · disable Làm mới | dual · GAP-MOB-CAMVIEW-PICK-01 | OK |
| `?fail=1` placeholder + toast lỗi | dual · **cấm** fake Base64 | OK |
| JPEG dark card + `#i-video` placeholder | dual · no AVCapture | OK |
| Back → me | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Tôi» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Nav title 17 vs ~20 | platform |
| Section-label padding 32 vs 16 | platform |
| jpeg-card radius 12 vs 16 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
