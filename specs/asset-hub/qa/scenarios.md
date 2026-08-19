# QA — Scenarios — asset-hub

> Status: **done** · `/agent-qa-mobile` · e2eQa=ON · task `task_3e29163a`  
> method: `e2e runtime · yarn e2e-qa-mobile` · Maestro · sim **iPhone 17 Pro Max** + emulator **Pixel 2** · **cấm** `yarn e2e-qa` / `start:std` / GenerateImage

| | |
|--|--|
| Feature | `asset-hub` |
| Title | [Mobile] Tài sản |
| Role | `qa` |
| packKind | `hub` |
| iosPhase | `phase1_iphone` · **A4-IPAD DEFER** |
| demo | `linm-soft` / Auth docker seed |
| API / BFF | `:5101` · Mobile.Bff `:5202` |

## Device AC (slug `asset-hub` only)

| AC | Expect | Result | Evidence |
|----|--------|--------|----------|
| Launch | App mở màn login (ngoài tab) · 0 crash | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| BFF | Mobile.Bff listen `:5202` | **PASS** | A10-BFF |
| Login demo | Fill `#f-user`/`#f-pass` · CTA Đăng nhập · seed Auth | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| Hub `#sc-asset-hub` iOS | Nav **Tài sản** · wallet live · hub-grid ×3 · `#row-map` · **cấm** foot Gói · **cấm** sibling screen | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| Hub `#sc-asset-hub` Android | Cùng zone · Pixel **1080×1920** | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| Hub zone 2 Android | Quản lý + `#row-map` visible (scroll) | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |
| Sibling toast | Tap `#tile-types` → vẫn `#sc-asset-hub` · **không** push sibling | **PASS** | A3 (Maestro assert) |
| GAP-F-AHUB-01 | Wallet live **hoặc** demo · hub **không** block | **PASS** | iOS live `QL.1 · Quốc lộ 1` · Android demo `QL.1 · Khu IV` |
| GAP-F-AHUB-02 | Tile marketing «32 loại tài sản» · subtitle count live/demo | **PASS** | A3 `23 loại KCHT` · P6 `32 loại KCHT` |
| GAP-F-AHUB-03 | AI pending empty → **ẩn** section «Chờ xác nhận AI» | **PASS** | A3 / P6 (không `sec-ai`) |
| GAP-DEV-MOB-PLACEHOLDER-01 | **Cấm** watermark «Phiên bản Gói» | **PASS** | A3 / P6 |
| Dual align | Chrome kit cùng zone iOS↔Android | **PASS** | A3 ↔ P6 · **không** GAP-MOB-ALIGN-01 Must |

## Store Must × feature

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## VERIFY GATE (recheck QA)

| Gate | Result |
|------|--------|
| iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** | **PASS** |
| Android `assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** |
| `yarn e2e-qa-mobile` · cases A11,A10,A9,A3,P6,P6-2 · `ios-phase=phase1_iphone` | **PASS** · `ok: true` |

## Notes

- Maestro flows: `qa/e2e/ios.yaml` · `qa/e2e/android.yaml` — login seed → `#tile-asset` → assert `#sc-asset-hub` trước shot A3/P6 (**cấm** login-only core).
- Android: **cấm** `hideKeyboard` (BACK → launcher) — tap title + Enter như `login/qa/e2e/android.yaml`.
- iOS: **cấm** assert `#nav-back` (kit `LinmTopBar` không expose id Maestro) — assert `#sc-asset-hub` + `#wallet-asset` + `#tile-types`.
- px: iOS A3 **1320×2868** RGB · Play P6 **1080×1920** RGB.
- **Cấm** READY_TO_SUBMIT ở QA — next `/agent-review-mobile`.
- Sibling AC / form slug khác: **out of scope**.
- A4-IPAD **DEFER** Phase 1 (`GAP-SUBMIT-IMG-08`).
- Wallet dual: iOS live route/count · Android demo fallback (PO GAP-F-AHUB-01/02 **không** block hub).

## Handoff → Review

| Field | Value |
|-------|-------|
| phase_to | `review` |
| Next slash | `/agent-review-mobile` |
| store | `qa/store/asset-hub/` · CAPTURE.md |
| Chain this turn | **không** (roleOnly=`qa`) |
