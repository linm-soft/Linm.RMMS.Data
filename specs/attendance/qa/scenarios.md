# QA — Scenarios — attendance (mobile list · Chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`list`** (UI hub DES-MOB-ATT) |
| taskId | `task_b96fb3d7` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:true** · `2026-09-01T08:47:11.949Z` · dest **iPhone 17 Pro Max** 1320×2868 RGB · AVD **Pixel_2** 1080×1920 RGB |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | dual proto `#sc-attendance` · Must **0** (Read A3-CORE + P6-CORE-2) |
| prior | cleanup_mock `task_242d0372` · live-only · no `demoUser` |
| updatedAt | `2026-09-01T08:47:20.000Z` |

**Scope:** slug `attendance` hub `#sc-attendance` only. **Cấm** AC sibling (`attendance-report` · `attendance-day-detail`).

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` | **PASS** (prior cleanup_mock) |
| iOS `xcodebuild` dest **iPhone 17 Pro** | **PASS** (prior) |
| Android `./gradlew :app:assembleDebug` | **PASS** (prior) |
| Mobile.Bff `dotnet build` | **PASS** (prior) |
| Maestro iOS + Android | **PASS** · guest → login → `tab-field` → seg **Chấm công** → `#sc-attendance` |
| API :5111 (+BFF :5202) | **PASS** (docker · `--skip-start`) |
| `yarn e2e-qa-mobile` | **PASS** · `ok:true` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| AC-D-01 | Offline / empty GET → empty days (no demoDays) | **PASS** (live-only post cleanup_mock) |
| AC-D-02 | GPS deny → toast · no POST | **PASS** (code path) |
| AC-D-03 | Leave dirty | **N/A** |
| AC-D-04 | Cấm native alert · toast only | **PASS** |
| AC-D-05 | Keyboard | **N/A** |
| AC-D-06 | Safe area | **PASS** |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal «Có mạng» | **PASS** — không ship |
| AC-D-09 | Bearer GET/POST attendance-logs | **PASS** |
| AC-D-10 | Segment 0/1 lock | **PASS** |
| AC-D-11 | Camera | **N/A** |
| AC-D-12 | Type 13 / ≥16 | **PASS** |
| AC-F-01 | Guest → login → tab field → seg Chấm công → `#sc-attendance` | **PASS** (Maestro) |
| AC-F-02 | Title **Chấm công** · hero · 7 ngày gần đây | **PASS** |
| AC-F-03 | Báo cáo → toast **Báo cáo công** | **PASS** (optional flow) |
| AC-F-04 | Dual copy VN | **PASS** |
| AC-F-05 | Cấm watermark Gói | **PASS** |

## Store Must

| Case | Store | Evidence | Result |
|------|-------|----------|--------|
| A11-LAUNCH | A11 | ![A11-LAUNCH](screens/A11-LAUNCH.png) | **PASS** |
| A10-BFF | A10 · P11 | — | **PASS** |
| A9-LOGIN | A9 · P10 | ![A9-LOGIN](screens/A9-LOGIN.png) | **PASS** |
| A3-CORE | A3 · A11 | ![A3-CORE](screens/A3-CORE.png) | **PASS** |
| P6-CORE | P6 · P11 | ![P6-CORE](screens/P6-CORE.png) | **PASS** |
| P6-CORE-2 | P6 | ![P6-CORE-2](screens/P6-CORE-2.png) | **PASS** |
| A4-IPAD | A4 | **DEFER** Phase 1 · family `1` | DEFER |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` | **PASS** · guest → `btn-home-login` → login → `tab-field` → **Chấm công** → `#sc-attendance` · A11/A9/A3 |
| Android | `qa/e2e/android.yaml` | **PASS** · same · P6 / P6-2 |

## Visual align (`/review-align-ux-ios-android`)

| Shot | vs demo `#sc-attendance` | Must |
|------|--------------------------|------|
| A3-CORE | LargeTitle · Seg · Hero GPS+Chấm vào/Báo cáo · **7 ngày gần đây** · live day row | **0** |
| P6-CORE-2 | Same zones · empty days (live GET) | **0** |

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| — | none Must | **No** |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE-2 vs prototype — Must **0**.

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Notes

- Entry: **không** Home tile — guest home → login → tab field + patrol-home segment **Chấm công**.
- Maestro flow fixed: wait `sc-home` + `btn-home-login` (prior flow mistook guest «Đăng nhập» for login form).
- px: iOS A3 **1320×2868** RGB · Play P6 **1080×1920** RGB.
- **Cấm** `mfeStdUrl` / `yarn start:std`.
- API host Linux compose **:5111** (cấm bind :5101) · BFF **:5202**.

## Handoff → Review

| Field | Value |
|-------|-------|
| phase_to | `review` |
| Next slash | `/agent-review-mobile` |
| store | `qa/store/attendance/` · CAPTURE.md |
| Chain this turn | **không** (roleOnly=`qa`) |

## Version meta

skillId=agent-qa-mobile · skillVersion=2026.08.19.28 · workflowVersion=2026.08.25.01 · generatedAt=2026-09-01T08:47:20.000Z · taskId=task_b96fb3d7
