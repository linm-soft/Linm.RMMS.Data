# QA — Scenarios — ops (mobile list · Thông báo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`list`** |
| taskId | `task_1f014c56` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** |
| e2e result | **ok:true** · `2026-09-01T02:26:26.540Z` · dest **iPhone 17 Pro Max** · AVD **Pixel_2** 1080×1920 · `--skip-start` (API host **:5111** · BFF **:5202**) |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | `ui/review/align-ux.md` · **Aligned** · Must **0** · empty-path live |
| harvest_fix | CLI `latestMaestroTakeScreenshotDir` lấy shot stale `~/.maestro/tests` → QA re-copy từ `_maestro_ios/ios-2` + `_maestro_android/android-3` · flatten A3 · **GAP-QA-E2E-HARVEST-01** logged |
| updatedAt | `2026-09-01T02:35:00.000Z` |

**Scope:** slug `ops` list `#sc-ops` only · live-only post `cleanup_mock` · **cấm** demo SC-2401 assert.

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS Maestro + store px 6.9" | **PASS** (A3 1320×2868 · no alpha) |
| Android Maestro + P6 1080×1920 | **PASS** |
| Mobile.Bff `dotnet build` | **PASS** (0 warn · 0 err) |
| API :5111 + BFF :5202 | **PASS** listen · inbox GET **HTTP 500** (EmptyChrome + toast loadFail — **cấm** demo fallback) |
| Maestro iOS + Android | **PASS** · guest→login→Me `row-ops` → `#sc-ops` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| AC-D-01 | Offline / empty list | **PASS** · EmptyChrome `ops-empty` (no demo rows) |
| AC-D-02 | GPS deny | **N/A** |
| AC-D-03 | Leave dirty | **N/A** |
| AC-D-04 | Toast only · cấm native alert | **PASS** · toast loadFail |
| AC-D-05 | Keyboard | **N/A** |
| AC-D-06 | Safe area TopBar + list | **PASS** (A3/P6) |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal on ops | **N/A** |
| AC-D-09 | Bearer BFF | **PASS** (:5202) |
| AC-D-10 | tabs none trên ops | **PASS** |
| AC-D-11 | Camera / push | **N/A** |
| AC-D-12 | Type 13 / ≥16 | **PASS** |
| AC-D-13 | Dual copy VN | **PASS** |
| AC-D-14 | Cấm watermark / «Đang dùng dữ liệu mẫu» | **PASS** · toast = loadFail only |
| AC-F-01 | GET inbox fail → EmptyChrome + toast | **PASS** (API 500) |
| AC-F-02 | Me `row-ops` → `#sc-ops` | **PASS** Maestro dual |
| AC-F-03 | Home `btn-notify` → `#sc-ops` | **PASS** (code · route_a) |
| AC-F-04 | Mark-read toast | **N/A** · empty inbox (no row) |
| AC-F-05 | POST fail toast | **PASS** (code) |
| AC-F-06 | A11y ids | **PASS** · yaml guest→login + `sc-ops` |
| AC-F-07 | Cấm watermark Gói | **PASS** |

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
| iOS | `qa/e2e/ios.yaml` | **PASS** · guest `sc-home` → login → Me → `row-ops` → `#sc-ops` |
| Android | `qa/e2e/android.yaml` | **PASS** |

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-MOB-UX-COMP-OPS-01 | Android TopBar trailing `MoreHoriz` · Should DEFER | **No** |
| GAP-QA-E2E-HARVEST-01 | CLI harvest ưu tiên `~/.maestro/tests` stale → wrong feature shot · QA remediated copy từ run dir | **No** (fixed this turn) |
| GAP-BE-OPS-INBOX-500 | GET `notification/inbox` → API **500** · EmptyChrome OK · BE follow-up | **No** (FE live-only OK) |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`).

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Verdict

**PASS** · device + store pack + align Must **0** · phase→`review` · **cấm** `done`.
