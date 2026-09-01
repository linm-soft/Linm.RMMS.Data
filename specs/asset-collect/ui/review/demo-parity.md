# Demo parity — asset-collect

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/asset-collect/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_c6bccf74` · `2026-08-31T00:00:00.000Z`  
**SSOT:** mobile-p1 `#sc-asset-collect` · DA hash skip · **cấm** re-scan

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Thu thập thủ công** | yes | yes | OK |
| Type **Loại tài sản *** · demo options preview (Cột km…Cầu) | yes | yes | OK |
| Name **Tên / mô tả *** / **Cột Km 1556** | yes | yes | OK |
| Route **Tuyến / lý trình *** / **QL.1 · Km 1556+000** | yes | yes | OK |
| GPS **Định vị ghim tự động *** / **11.5300, 109.0040 · ±5 m** | yes | yes | OK |
| Status **Tình trạng** · default **Tốt** (`tot`) | yes | yes · **Design đóng GAP** | OK |
| Section **Ảnh** | yes | yes · **Design thêm** | OK |
| Photo camera slot `#i-camera` | yes | yes | OK |
| Primary **Thêm tài sản** | yes | yes | OK |
| Toast OK **Đã thêm tài sản · TS-20260818-021** | yes | yes | OK |
| Deny title **Định vị bị tắt** | yes | yes | OK |
| Deny body mobile-p1 copy | yes | yes | OK |
| Primary **Sao chép hướng dẫn** · Secondary **Để sau** | yes | yes | OK |
| Leave **Bỏ thay đổi?** | yes | yes | OK |
| `#i-chevron-left` · `#i-camera` cùng `d=` | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **home** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value/btn 16 · title 17 (Android title ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label | yes | yes | OK |
| `data-des-id` DES-MOB-ASSET-COLLECT / GPS-DENY / LEAVE | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?deny=1` mở modal · disable CTA | dual | OK |
| openCapture appends filled **Ảnh** | dual | OK |
| dirty back → leave modal | dual | OK |
| Status select 3 options init-data preview | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Tài sản» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |
| Button radius 12 vs 28 | platform |
| Field radius 12 vs 16 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
