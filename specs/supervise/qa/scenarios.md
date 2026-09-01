# QA — Scenarios — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`list`** |
| taskId | `task_16b5d063` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:true** · `2026-09-01T02:51:48.064Z` · dest **iPhone 17 Pro Max** 1320×2868 RGB · AVD **1080×1920** |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | dual proto `#sc-supervise` · live A3 ↔ P6 EmptyChrome · **Aligned** · Must **0** |
| gap | post-`cleanup_mock` live-only · EmptyChrome OK · harvest prefer `_maestro_*/{ios,android}-N` |
| updatedAt | `2026-09-01T02:55:00.000Z` |

**Scope:** slug `supervise` list `#sc-supervise` only. **Cấm** AC sibling screens (`patrol-map` · `checkin-detail`).

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` / prior Dev | **PASS** (`task_65931a17`) |
| Android `assembleDebug` / prior Dev | **PASS** |
| Mobile.Bff `dotnet build` / prior Dev | **PASS** |
| Maestro iOS + Android | **PASS** · guest home → login → `tile-supervise` → `#sc-supervise` |
| API (host `:5111` · compose) + BFF `:5202` | **PASS** (docker · `--skip-start`) |
| `yarn e2e-qa-mobile` | **PASS** · `ok:true` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| AC-D-01 | Home tile Giám sát → `#sc-supervise` visible | **PASS** |
| AC-D-02 | GPS deny | **N/A** |
| AC-D-03 | Leave dirty | **N/A** |
| AC-D-04 | Cấm native alert · toast only | **PASS** |
| AC-D-05 | Keyboard | **N/A** |
| AC-D-06 | Safe area TopBar + scroll/empty | **PASS** (A3 6.9" · P6) |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** |
| AC-D-09 | Bearer BFF GET `patrol/attendance-logs` | **PASS** (A10-BFF :5202) |
| AC-D-10 | Tab 5 · home selected on parent | **PASS** (Defer GAP-QA-SUP-TAB-01) |
| AC-D-11 | Camera / push | **N/A** |
| AC-D-12 | Type 13 / ≥16 | **PASS** |
| AC-D-13 | Dual copy VN | **PASS** (A3 ↔ P6) |
| AC-D-14 | Cấm watermark / device label | **PASS** |
| AC-F-01 | Login → tile → `#sc-supervise` | **PASS** |
| AC-F-02 | Back → pop `#sc-home` | **PASS** (optional back) |
| AC-F-03 | Live list **hoặc** EmptyChrome `sup-empty` | **PASS** (**Chưa có check-in** · live-only) |
| AC-F-04 | **Lọc** → toast **Lọc tuyến · ngày** | **PASS** (P6-CORE-2) |
| AC-F-05 | Segment list · Bản đồ toast · cấm push map | **PASS** |
| AC-F-06 | Tap card → detail toast | **N/A** (empty tenant · no card) |
| AC-F-07 | Org empty Note → fallback | **N/A** (empty) |
| AC-F-08 | Cấm watermark / «Đang dùng dữ liệu mẫu» | **PASS** (không banner mock) |

## Store Must

| Case | Store | Evidence | Result |
|------|-------|----------|--------|
| A11-LAUNCH | A11 | ![A11-LAUNCH](screens/A11-LAUNCH.png) | **PASS** (guest home) |
| A10-BFF | A10 · P11 | — | **PASS** |
| A9-LOGIN | A9 · P10 | ![A9-LOGIN](screens/A9-LOGIN.png) | **PASS** |
| A3-CORE | A3 · A11 | ![A3-CORE](screens/A3-CORE.png) | **PASS** |
| P6-CORE | P6 · P11 | ![P6-CORE](screens/P6-CORE.png) | **PASS** |
| P6-CORE-2 | P6 | ![P6-CORE-2](screens/P6-CORE-2.png) | **PASS** (toast Lọc) |
| A4-IPAD | A4 | **DEFER** Phase 1 | DEFER |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` | **PASS** · guest→login eraseText → `#sc-supervise` · EmptyChrome |
| Android | `qa/e2e/android.yaml` | **PASS** · guest→`btn-home-login` → EmptyChrome · toast Lọc |

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-QA-A11Y-SUP-FILTER-01 | iOS trailing `btn-sup-filter` không expose XCUITest · tap text **Lọc** | **No** |
| GAP-QA-SUP-TAB-01 | Push `#sc-supervise` vẫn Tab 5 · Should Review | **No** |
| GAP-QA-HARVEST-01 | e2e harvest ưu tiên debug `_maestro_*` trước `~/.maestro/tests` (fix AI-AutoCode) | **No** |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`).

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Visual align (`/review-align-ux-ios-android`)

| Zone | Demo | Live A3/P6 | Verdict |
|------|------|------------|---------|
| TopBar title | Giám sát tuần đường | same | **Aligned** |
| Lọc | btn-sup-filter | text Lọc · toast | **Aligned** |
| Segment | Danh sách / Bản đồ | same | **Aligned** |
| Body | rich-card demo | EmptyChrome live-only (tenant rỗng) | **Aligned** (runMode cleanup_mock) |
| Mock banner | — | **absent** | **PASS** · Must **0** |

## Notes

- Login flow: guest `#sc-home` → `btn-home-login` → eraseText (fix flaky optional tap).
- Host API compose `:5111` (Linux) · BFF docker net → `linm-rmms-api:8080` · e2e `--skip-start`.
- **Cấm** READY_TO_SUBMIT ở QA — next `/agent-review-mobile`.
- Step 4b **N/A**.

## Handoff → Review

| Field | Value |
|-------|-------|
| phase_to | `review` |
| Next slash | `/agent-review-mobile` |
| store | `qa/store/supervise/` · CAPTURE.md |
| align | live A3 ↔ P6 EmptyChrome · Must **0** |
| Chain this turn | **không** (roleOnly=`qa`) |

## Version meta

skillId=agent-qa-mobile · skillVersion=2026.08.19.26 · workflowVersion=2026.08.31.2 · generatedAt=2026-09-01T02:55:00.000Z · taskId=task_16b5d063
