# Demo parity — nghiem-thu-create

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/nghiem-thu-create/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_b6b0bafc` · `2026-09-19T17:10:00.000Z`  
**SSOT:** DA `#sc-nghiem-thu-create` · hash skip · **cấm** re-scan

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Tạo nghiệm thu** | yes | yes | OK |
| Leading **Hủy** (iOS text) / chevron-only (Android) | Hủy | `#i-chevron-left` | OK |
| Trailing **Lưu** | yes | yes | OK |
| Row **Mẫu** / value **Mẫu nghiệm thu 03** | yes | yes | OK |
| Row **Vị trí** / **Khu I · GPS hiện trường** | yes | yes | OK |
| Row / Photo **Đính kèm** · camera `#i-camera` | yes | yes | OK |
| Toast OK **Đã lưu nháp · NT-20260919-0001** | yes | yes | OK |
| Toast fail **Không lưu được phiếu nghiệm thu** (`?fail=1`) | yes | yes | OK |
| Deny title **Định vị bị tắt** · body SSOT | yes | yes | OK |
| Deny CTA **Mở Cài đặt** · **Để sau** | yes | yes | OK |
| Leave **Huỷ thay đổi?** (`?dirty=1`) | yes | yes | OK |
| Picker **Chọn mẫu nghiệm thu** · mau-01…10 | yes | yes | OK |
| `#i-chevron-left` · `#i-chevron-right` · `#i-camera` · `#i-mappin` cùng `d=` | yes | yes | OK |
| Shell Tab 5 · nhãn VN · tab **field** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value ≥16 · title 17 (Android ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full sheet→screen · không bottom-sheet pack chrome | yes | yes | OK |
| Không watermark / device label / «Có mạng» | yes | yes | OK |
| `data-des-id` DES-MOB-NGHIEM-THU-CREATE / GPS-DENY / LEAVE | yes | yes | OK |
| **Cấm** invent «Mặt đường» làm value SSOT | Label init | same | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?deny=1` mở GPS modal · chặn Lưu | dual | OK |
| `?fail=1` toast fail on Lưu | dual | OK |
| `?dirty=1` Hủy → leave modal | dual | OK |
| Attach append filled slot | dual | OK |
| Picker sets mau + Label | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Leading Hủy text vs icon-only | HIG vs Material |
| Toast blur vs Material surface | platform |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
