# Demo parity — nghiem-thu-detail

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/nghiem-thu-detail/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_69705146` · `2026-09-19T19:45:00.000Z`  
**SSOT:** DA `#sc-nghiem-thu-detail` · hash skip · **cấm** re-scan · GAP-MOB-NT-DETAIL-01 Design gen

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **NT-20260906-0001** | yes | yes | OK |
| View leading **Đóng** (iOS text) / chevron-only (Android) | Đóng | `#i-chevron-left` | OK |
| View trailing **Sửa** | yes | yes | OK |
| Edit leading **Hủy** / chevron (`?edit=1`) | Hủy | chevron | OK |
| Edit trailing **Lưu** | yes | yes | OK |
| Row **Mẫu** / **Vệ sinh / vá ổ gà mặt đường** | yes | yes | OK |
| Row **Kết quả** / **Đạt** | yes | yes | OK |
| **Ghi chú kết quả** | yes | yes | OK |
| Checklist 2.1.1 · 2.1.2 · 2.1.vs · **Không áp dụng** | yes | yes | OK |
| **Tuyến** QL.1 · **Km** · **Hiện trường** | yes | yes | OK |
| **Trạng thái** / **Đang NT** | yes | yes | OK |
| **Thời gian việc** · **Ghi chú** | yes | yes | OK |
| **Đính kèm** · `#i-camera` | yes | yes | OK |
| Toast OK **Đã lưu · NT-20260906-0001** | yes | yes | OK |
| Toast fail **Không lưu được phiếu nghiệm thu** (`?fail=1`) | yes | yes | OK |
| Toast 404 **Phiếu không tồn tại** (`?missing=1`) | yes | yes | OK |
| Deny title **Định vị bị tắt** · CTA **Mở Cài đặt** · **Để sau** | yes | yes | OK |
| Leave **Huỷ thay đổi?** (`?dirty=1`) · Thoát về View | yes | yes | OK |
| `#i-chevron-left` · `#i-chevron-right` · `#i-camera` · `#i-mappin` cùng `d=` | yes | yes | OK |
| Shell Tab 5 · nhãn VN · tab **field** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value ≥16 · title 17 (Android ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full sheet→screen · không bottom-sheet pack chrome | yes | yes | OK |
| Không watermark / device label / «Có mạng» | yes | yes | OK |
| `data-des-id` DES-MOB-NGHIEM-THU-DETAIL / GPS-DENY / LEAVE | yes | yes | OK |
| **Cấm** «Mẫu nghiệm thu NN» · «Mẫu 03» làm value | MAU-10 | same | OK |
| DELETE không có trên surface | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?edit=1` đổi chrome Sửa→Lưu | dual | OK |
| `?deny=1` mở GPS · chặn Lưu | dual | OK |
| `?fail=1` toast fail on Lưu | dual | OK |
| `?dirty=1` Hủy → leave · Thoát về View | dual | OK |
| `?missing=1` toast 404 | dual | OK |
| Picker MAU-10 · ResultCodes · Statuses | dual | OK |
| Đổi mẫu reload tiêu chí catalog | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Leading text vs icon-only | HIG vs Material |
| Toast blur vs Material surface | platform |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
