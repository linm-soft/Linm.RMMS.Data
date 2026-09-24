# Capture — nghiem-thu

| Case | Scenario | Expect | Actual | Result | Evidence |
|------|----------|--------|--------|--------|----------|
| A10-BFF | App gọi BFF khi mở nghiem-thu | BFF listen; dữ liệu thật — không mock in-app | Mobile.Bff listen :5202; list live empty, không hàng mẫu | **PASS** | — |
| A11-LAUNCH | Cán bộ mở app trên iPhone | Thấy màn khách/home, title đọc được, không màn đen | Title Khách, nút Đăng nhập · 1320×2868 | **PASS** | ![A11-LAUNCH](A11-LAUNCH.png) |
| A9-LOGIN | Cán bộ đăng nhập | Form tiếng Việt, vào được Trang chủ | Form QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ, linm-soft, nút Đăng nhập | **PASS** | ![A9-LOGIN](A9-LOGIN.png) |
| A3-CORE | Cán bộ vào màn nghiem-thu trên iPhone | Title và việc chính khớp prototype | Title Công tác nghiệm thu, Back Tuần đường, Tạo, ô tìm, empty | **PASS** | ![A3-CORE](A3-CORE.png) |
| P6-CORE | Cán bộ vào màn nghiem-thu trên Android | Title và việc chính khớp prototype | Cùng title, Back icon, Tạo, ô tìm, empty · 1080×1920 | **PASS** | ![P6-CORE](P6-CORE.png) |
| P6-CORE-2 | Cán bộ gõ tìm trên Android | Fold tìm khác ảnh list | Ô tìm hiện NT; hash khác P6-CORE | **PASS** | ![P6-CORE-2](P6-CORE-2.png) |

iOS device: iPhone 17 Pro Max
iPad device: DEFER Phase 1
Android: emulator 1080×1920
method: e2e runtime · yarn e2e-qa-mobile · Maestro ON
visual: Read A3/P6/P6-2 vs `#sc-nghiem-thu` · **Aligned** · Must 0

Listing official → `/store-image-capture` confirm file live (cấm AI vẽ).
