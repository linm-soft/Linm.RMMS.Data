# Demo parity — incident-create

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/incident-create/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_706e535d` · `2026-08-29T00:45:00.000Z`  
**SSOT:** mobile-p1 `#sc-inc-form` · DA hash skip · **cấm** re-scan

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Ghi sự cố** | yes | yes | OK |
| Wallet **TÀI SẢN ĐÃ CHỌN** · **Cầu** · **BRIDGE · Kết cấu** | yes | yes | OK |
| Kind pills **Hư** / **Mất** / **Hỏng** · default Hư | yes | yes | OK |
| Section **Loại ghi nhận** · **Checklist theo loại** · **Ảnh hiện trường** | yes | yes | OK |
| BRIDGE chk: Khe co giãn · Lan can · Gối / dầm · Thoát nước mặt cầu | yes | yes | OK |
| Photo camera slot `#i-camera` | yes | yes | OK |
| Row **Nhận diện từ ảnh** / **Chưa có ảnh — chụp để phân loại** | yes | yes | OK |
| Loc **Vị trí đã chốt *** / **QL.1 · Km 1556+080 · định vị ±5 m** | yes | yes | OK |
| Severity **Mức độ** · default **Cao** · 4 options | yes | yes | OK |
| Desc **Mô tả** · placeholder **Mô tả hiện trường…** | yes | yes | OK |
| Primary **Tạo vấn đề** | yes | yes | OK |
| Secondary **Thu thập bằng camera** · **Giao việc xử lý** · **Lưu nháp mất sóng** | yes | yes | OK |
| Toast OK **Đã tạo vấn đề SC-2418 · gắn tài sản đã chọn** | yes | yes | OK |
| Toast draft **Nháp mất sóng** | yes | yes | OK |
| Toast pick **Chọn loại tài sản để ghi sự cố** (`?pick=1`) | yes | yes | OK |
| Deny title **Định vị bị tắt** | yes | yes | OK |
| Deny body mobile-p1 copy | yes | yes | OK |
| Primary **Sao chép hướng dẫn** · Secondary **Để sau** | yes | yes | OK |
| `#i-chevron-left` · `#i-camera` cùng `d=` | yes | yes | OK |
| Pick `.ak32-ico` 36 pict QCVN (`LinmAssetKchtPict`) · 3 cột stretch | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **home** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value/btn 16 · title 17 (Android title ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome / `#sheet-incident` | yes | yes | OK |
| Không watermark / device label | yes | yes | OK |
| `data-des-id` DES-MOB-INC-FORM / INC-KIND / GPS-DENY | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?deny=1` mở modal · disable Create | dual | OK |
| `?pick=1` toast pick | dual | OK |
| Kind pill single select | dual | OK |
| Checklist ids `ak32-chk-inc-ios` / `ak32-chk-inc-and` | platform id OK | OK |
| openCapture appends filled **Ảnh** | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Thông tin tài sản» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |
| Pill radius 10 vs 20 | platform |
| Button radius 12 vs 28 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
