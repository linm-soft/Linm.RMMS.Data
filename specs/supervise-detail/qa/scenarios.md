# QA — Scenarios — supervise-detail (mobile · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **blocked** |
| packKind | **`screen`** |
| changeScope | `edit_page` · gap=`cleanup_mock` · qaFailFix re-QA |
| taskId | `task_4063c6a2` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:false** · iOS Maestro **PASS** · Android Maestro **FAIL** |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | iOS A3 vs demo `#sc-supervise-detail` **Aligned** · Android P6 **blocked** (`sup-empty`) |
| updatedAt | `2026-09-01T15:47:20.000Z` |

**Scope:** `#sc-supervise-detail` only. Entry via list card. Seed Id=`a0000001-2026-0810-0001-000000000001` · CompanyCode=`LINM` · CC-20260810-001.

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS Maestro iPhone 17 Pro Max | **PASS** · live detail (Nguyễn Văn A · CC-20260810-001) |
| Android Maestro | **FAIL** · `#sc-supervise` → `sup-empty` · no GET `attendance-logs` from `10.0.2.2` |
| BFF :5202 / API :5111 | **PASS** · seed list 200 via curl · iOS GET by id 200 |
| `yarn e2e-qa-mobile` | **FAIL** · ok:false · GAP-QA-STORE-03 |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| AC-D-01 | tile → list → detail | **iOS PASS** · **Android FAIL** |
| AC-F-01 | live hero+rows | **iOS PASS** · Android **FAIL** |
| AC-F-03 | GET by id live-only | **iOS PASS** |
| AC-F-06 | orgFallback | **iOS PASS** |

## Store Must

| Case | Store | Evidence | Result |
|------|-------|----------|--------|
| A11-LAUNCH | A11 | ![A11-LAUNCH](screens/A11-LAUNCH.png) | **PASS** |
| A10-BFF | A10 · P11 | — | **PASS** |
| A9-LOGIN | A9 · P10 | ![A9-LOGIN](screens/A9-LOGIN.png) | **PASS** |
| A3-CORE | A3 · A11 | ![A3-CORE](screens/A3-CORE.png) | **PASS** · visual Aligned |
| P6-CORE | P6 · P11 | ![P6-CORE](screens/P6-CORE.png) | **FAIL** · Maestro-AND · empty list (CLI adb shot ≠ harvest) |
| P6-CORE-2 | P6 | ![P6-CORE-2](screens/P6-CORE-2.png) | **FAIL** |
| A4-IPAD | A4 | DEFER Phase 1 | DEFER |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` | **PASS** |
| Android | `qa/e2e/android.yaml` | **FAIL** · assert `sup-card-a0000001-…` · GAP-QA-SUP-DET-AND-LIST-01 |

Login flaky (keyboard) **mitigated** in `android.yaml` (pressKey Enter · sibling supervise pattern). List GET still missing on BFF from emulator.

## Visual align

iOS A3 **Aligned** vs demo `#sc-supervise-detail` (hero + rows + map CTA). Android CORE **blocked**. Must open **1**.

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-QA-SUP-DET-AND-LIST-01 | Android `#sc-supervise` `sup-empty`. Logcat may show `SuperviseList: GET…` but BFF **0** GET from `10.0.2.2`. Seed OK via BFF curl. Dev ON_RESUME claim **not closed**. | **Yes** |
| GAP-QA-STORE-03 | Maestro-AND / P6 FAIL | **Yes** |

## Handoff → review

**Blocked** — queue `failed` → `qa_fail_rollback` · Dev: ensure Appear/`LaunchedEffect` emits OkHttp `GET …/attendance-logs` from emulator before re-QA.
