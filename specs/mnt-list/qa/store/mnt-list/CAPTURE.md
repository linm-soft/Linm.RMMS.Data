# Capture — mnt-list

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](P6-CORE-2.png) |

iOS device: iPhone 17 Pro Max · 1320×2868 RGB  
iPad device: DEFER Phase 1  
Android: Pixel 2 · wm **1080×1920**  
method: e2e runtime · yarn e2e-qa-mobile · Maestro ON  
feature zone: `#sc-mnt-list` · **Danh sách công việc** (cấm login-only CORE)

CLI PASS = capture+px only. Visual = `/review-align-ux-ios-android` Read CORE vs demo HTML → **Aligned** Must 0.

Listing official → `/store-image-capture` confirm file live (cấm AI vẽ).
