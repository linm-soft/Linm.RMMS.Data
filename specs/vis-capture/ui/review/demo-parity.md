# Demo parity — vis-capture

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/vis-capture/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_27b1bf39` · `2026-08-29T09:00:00.000Z`  
**SSOT:** mobile-p1 `#sc-vis-capture` · DA hash skip · **cấm** re-scan

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Nhận diện mặt đường** | yes | yes | OK |
| Section **Ảnh hiện trường** | yes | yes | OK · đóng GAP-MOB-VIS-DUAL-01 |
| PhotoRow filled **Ảnh** + `#i-camera` | yes | yes | OK |
| Row **Vị trí đã chốt** / **QL.1 · Km 1556+050** | yes | yes | OK |
| Row **Sai số định vị** / **±4 m** | yes | yes | OK |
| Row **Phân loại** / **Nứt dọc** | yes | yes | OK |
| Row **Mức** / **Cao** + badge orange | yes | yes | OK |
| Primary **Gắn sự cố** | yes | yes | OK |
| Secondary **Bỏ qua** | yes | yes | OK · đóng GAP-MOB-VIS-DUAL-01 |
| Toast OK **Đã gắn sự cố** | yes | yes | OK |
| Deny title **Định vị bị tắt** | yes | yes | OK |
| Deny body mobile-p1 copy | yes | yes | OK |
| Primary **Sao chép hướng dẫn** · Secondary **Để sau** | yes | yes | OK |
| `#i-chevron-left` cùng `d=` | yes | yes | OK |
| `#i-camera` cùng motif | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **incident** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label/section 13 · value/btn 16 · title 17 / ~20 | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label / tên thuật toán | yes | yes | OK |
| `data-des-id` DES-MOB-VIS-CAPTURE / GPS-DENY | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?deny=1` mở modal · disable Gắn | dual | OK |
| `?acc=35` toastGpsBlock · clear Class/Sev | dual · GAP-MOB-VIS-GPS-01 | OK |
| PhotoRow still (không finder continuous) | dual | OK |
| Skip → back incident-list toast | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Vấn đề» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |
| Section-label padding 32 vs 16 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
