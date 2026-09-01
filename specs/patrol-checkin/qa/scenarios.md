# QA — Scenarios — patrol-checkin (mobile sheet · Ghi điểm tuần)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`sheet`** |
| taskId | `task_753d9648` |
| changeScope | `edit_page` · cleanup_mock recheck |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:true** · dest **iPhone 17 Pro Max** 1320×2868 · AVD **1080×1920** |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · live session QL.1 · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | dual proto `#sheet-checkin` · live A3 ↔ P6 · **Aligned** · Must **0** |
| updatedAt | `2026-09-01T07:15:30.000Z` |

**Scope:** slug `patrol-checkin` sheet `#sheet-checkin` `DES-MOB-PAT-CHECKIN-SHEET`. Live-only post cleanup_mock (cấm demo Phước Dinh).

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS build (e2e install) | **PASS** |
| Android assembleDebug (e2e install) | **PASS** |
| Mobile.Bff docker `:5202` | **PASS** |
| API host **5111** (+ local `:5101` proxy) · BFF→api | **PASS** (`--skip-start`) |
| Maestro iOS + Android | **PASS** |
| `yarn e2e-qa-mobile` | **PASS** · `ok:true` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| AC-D-01 | Hub CTA **Ghi điểm tuần** → sheet | **PASS** |
| AC-D-02 | Prefill Điểm KH / Tuyến từ live session | **PASS** (`QL.1` / `QL.1`) |
| AC-D-03 | GPS + match banner | **PASS** Android green Đúng điểm · iOS orange loading at A3 timing (Should) |
| AC-D-04 | matchOk gates Lưu | **PASS** (disabled while loading · enabled when Đúng điểm) |
| AC-D-05 | PhotoRow camera | **PASS** A3 + P6-CORE-2 |
| AC-D-06 | Fill Nội dung · primary CTA | **PASS** iOS fill · Android CORE + fold2 CTA |
| AC-D-08 | Cấm native alert · watermark | **PASS** |
| AC-D-09 | Bearer BFF | **PASS** A10-BFF `:5202` |
| AC-D-10 | Tab shell dưới sheet | **PASS** |
| AC-D-12 | Dual copy VN | **PASS** |

## Store Must

| Case | Store | Evidence | Result |
|------|-------|----------|--------|
| A11-LAUNCH | A11 | ![A11-LAUNCH](screens/A11-LAUNCH.png) | **PASS** |
| A10-BFF | A10 · P11 | — | **PASS** |
| A9-LOGIN | A9 · P10 | ![A9-LOGIN](screens/A9-LOGIN.png) | **PASS** |
| A3-CORE | A3 · A11 | ![A3-CORE](screens/A3-CORE.png) | **PASS** |
| P6-CORE | P6 · P11 | ![P6-CORE](screens/P6-CORE.png) | **PASS** |
| P6-CORE-2 | P6 | ![P6-CORE-2](screens/P6-CORE-2.png) | **PASS** |
| A4-IPAD | A4 | **DEFER** Phase 1 | DEFER |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` | **PASS** |
| Android | `qa/e2e/android.yaml` | **PASS** · live assert · CORE shot trước fill · cấm hideKeyboard |

## Visual align

`/review-align-ux-ios-android` Read A3+P6 vs demo `#sheet-checkin` → **Aligned** · Must **0**.

## Bugs / Should

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-A11Y-SHEET-TAG-01 | Should | Android ModalBottomSheet testTag → resource-id |
| GAP-QA-GPS-TIMING-01 | Should | iOS A3 shot còn banner loading GPS (Android đã Đúng điểm) |
| Photo upload | P2 | capture/upload deferred |

## Handoff

Next role: `/agent-review-mobile` · **cấm** start trong task này (roleOnly=qa).
