# Capture — asset-detail

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| MAESTRO-IOS | A3 · A9 · A11 | **PASS** | live `KM-QL1-NA-461` |
| MAESTRO-AND | P6 | **FAIL** | empty list · GAP-QA-STORE-03 |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](A3-CORE.png) · visual Aligned live KM |
| P6-CORE | P6 · P11 | **PASS** CLI / **FAIL** visual | ![P6-CORE](P6-CORE.png) · empty list |
| P6-CORE-2 | P6 | **PASS** CLI / **FAIL** visual | ![P6-CORE-2](P6-CORE-2.png) |

iOS device: iPhone 17 Pro Max  
iPad device: DEFER Phase 1  
method: e2e runtime · yarn e2e-qa-mobile · Maestro ON  
capturedAt: `2026-09-01T16:40:13.914Z`

CLI PASS = capture+px only. Visual = `/review-align-ux-ios-android` Read CORE vs demo HTML.

Listing official → `/store-image-capture` confirm file live (cấm AI vẽ).
