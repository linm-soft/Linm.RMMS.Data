# Capture — asset

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| MAESTRO-AND | P6 | **FAIL** | `row-asset-0` · GAP-QA-STORE-03 |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** (px) | ![P6-CORE](P6-CORE.png) · visual EmptyChrome |
| P6-CORE-2 | P6 | **PASS** (px) | ![P6-CORE-2](P6-CORE-2.png) |

iOS device: iPhone 17 Pro Max  
iPad device: DEFER Phase 1  
method: e2e runtime · yarn e2e-qa-mobile · Maestro ON · task `task_4ec34586`

CLI PASS = capture+px only. Visual = `/review-align-ux-ios-android` Read CORE vs demo HTML.  
Android: BFF live data OK · app **không** GET `road-assets` → EmptyChrome false-negative.

Listing official → `/store-image-capture` confirm file live (cấm AI vẽ).
