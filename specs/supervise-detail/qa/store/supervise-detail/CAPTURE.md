# Capture — supervise-detail

| Case | Scenario | Expect | Actual | Result | Evidence |
|------|----------|--------|--------|--------|----------|
| A10-BFF | App gọi BFF khi mở supervise-detail | BFF listen; dữ liệu thật — không mock in-app | :5202 listen · list card live · detail mã CC-DEMO-202609-001 | **PASS** | — |
| A11-LAUNCH | Cán bộ mở app trên iPhone | Thấy màn khách/home, title đọc được, không màn đen | Khách · thẻ Đăng nhập · 1320×2868 | **PASS** | ![A11-LAUNCH](A11-LAUNCH.png) |
| A9-LOGIN | Cán bộ đăng nhập | Form tiếng Việt, vào được Trang chủ | Form RMMS · linm-soft · nút Đăng nhập · 1320×2868 | **PASS** | ![A9-LOGIN](A9-LOGIN.png) |
| A3-CORE | Cán bộ vào màn supervise-detail trên iPhone | Title và việc chính khớp prototype | Chi tiết check-in · Nguyễn Văn A · 6 hàng · Xem trên bản đồ · 1320×2868 | **PASS** | ![A3-CORE](A3-CORE.png) |
| P6-CORE | Cán bộ vào màn supervise-detail trên Android | Title và việc chính khớp prototype | Cùng title/hero/hàng · 1080×1920 | **PASS** | ![P6-CORE](P6-CORE.png) |
| P6-CORE-2 | Cán bộ xem phần còn lại của màn trên Android | Fold tiếp theo, không màn đen | CTA Xem trên bản đồ · hash khác P6-CORE | **PASS** | ![P6-CORE-2](P6-CORE-2.png) |

iOS device: iPhone 17 Pro Max
iPad device: DEFER Phase 1
method: e2e runtime · yarn e2e-qa-mobile · Maestro ON

CLI PASS = Maestro + PNG không đen + px + không trùng ảnh. Visual Read CORE = Aligned · Must 0.
