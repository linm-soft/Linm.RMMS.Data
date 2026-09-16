# QA — Scenarios — patrol-map

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| status | **confirmed** |
| e2eQa | ON · `yarn e2e-qa-mobile` |
| taskId | `task_92c6486b` |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro ON |
| iosDevice | iPhone 17 Pro Max (phase1_iphone) |
| androidDevice | Pixel_2 emulator |
| bundleId | `com.drvn.rmms` |
| packageName | `org.linmsoft.rmms` |
| writtenAt | `2026-09-16T04:39:00.000Z` |

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` + `xcodebuild` | **PASS** (prior Dev) |
| Android `assembleDebug` | **PASS** (prior Dev) |
| BFF `dotnet build` | **PASS** (prior Dev) |
| Docker API `:5101` + Mobile.Bff `:5202` + Auth RMMS | **UP** |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| AC-F-01 | Hub → `#sc-patrol-map` | **PASS** (Maestro iOS+Android) |
| AC-F-02 | Title **Ca đang chạy** | **PASS** |
| AC-F-03 | CTA **Ghim vị trí hiện tại** | **PASS** |
| AC-F-04 | Live map + next OSRM card | **PASS** |
| AC-D-04 | Cấm native alert | **PASS** |
| AC-D-06 | Safe area + tab Tuần đường | **PASS** |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` · appId `com.drvn.rmms` | **PASS** |
| Android | `qa/e2e/android.yaml` · appId `org.linmsoft.rmms` | **PASS** |

## Scope

Slug `patrol-map` only · **cấm** check-in sheet in-scope.

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`).

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| MAESTRO-IOS | A3 · A9 · A11 | **PASS** | `screens/_maestro_ios` · `A3-CORE-MAP-ios.png` |
| MAESTRO-AND | P6 | **PASS** | `screens/_maestro_android` · `A3-CORE-MAP-android.png` |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Visual align (post-CLI)

| Check | Result |
|-------|--------|
| iOS `#sc-patrol-map` vs demo | **Aligned** — title Ca đang chạy · Ghim · chips **Tiêu chuẩn/Vệ tinh** · OSRM next |
| Android `#sc-patrol-map` vs demo | **Aligned** core chrome · chip labels **Đường/Phố** ≠ demo **Tiêu chuẩn** → **DEFER** `GAP-MOB-AND-CHIP-01` (cite `handoff/dev-compact.md` Wave 4) |
| Must open (blocking) | **0** |
| Vision skipped | **no** |

## Notes

- Fixed stale e2e yaml: iOS `appId` → `com.drvn.rmms`; Android guest→login + `hideKeyboard` before `btn-login`.
- Store CORE PNGs = Maestro `A3-CORE-MAP` (not mis-harvest attendance/photo sheets).
- Hung Maestro (wrong appId) → killed **only** Maestro PID 20660 · log GAP-QA-E2E-02 recovered · **cấm** kill yarn/node worker.
