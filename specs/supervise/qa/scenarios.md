# QA — Scenarios — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`list`** |
| taskId | `task_cf8f4bfe` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:true** · `2026-09-12T10:24:06.642Z` · dest **iPhone 17 Pro Max** 1320×2868 RGB · AVD **1080×1920** |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | dual proto `#sc-supervise` · live A3 ↔ P6 EmptyChrome + P6-2 filter sheet · **Aligned** · Must **0** |
| gap | edit_page filter sheet live + map push `#sc-patrol-map` · Android login IME (cấm eraseText) · filter assert text (sheet testTag opaque) |
| updatedAt | `2026-09-12T10:26:49.000Z` |

**Scope:** slug `supervise` list `#sc-supervise` only. Map assert push sibling `#sc-patrol-map` (nav) · **cấm** AC deep sibling map chrome.

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` / prior Dev | **PASS** (`task_a7ad9582`) |
| Android `assembleDebug` / prior Dev | **PASS** |
| Mobile.Bff `dotnet build` / prior Dev | **PASS** |
| Maestro iOS + Android | **PASS** · guest→login→`tile-supervise`→`#sc-supervise` · filter sheet · map push |
| API (host `:5111`/:5101) + BFF `:5202` | **PASS** (docker · `--skip-start`) |
| `yarn e2e-qa-mobile` | **PASS** · `ok:true` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| AC-D-01 | Home tile Giám sát → `#sc-supervise` visible | **PASS** |
| AC-D-02 | GPS deny | **N/A** |
| AC-D-03 | Leave dirty | **N/A** |
| AC-D-04 | Cấm native alert · toast only | **PASS** |
| AC-D-05 | Keyboard | **N/A** (list) |
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
| AC-F-04 | **Lọc** → sheet Tuyến+Ngày · Áp dụng / Xóa lọc · **cấm** toast fake | **PASS** (P6-CORE-2) |
| AC-F-05 | Segment **Bản đồ** → push `#sc-patrol-map` · reset seg 0 · **cấm** toast | **PASS** (Maestro) |
| AC-F-06 | Tap card → detail | **N/A** (empty tenant · no card) |
| AC-F-07 | Org empty Note → fallback | **N/A** (empty) |
| AC-F-08 | Cấm watermark / «Đang dùng dữ liệu mẫu» | **PASS** |

## Store Must

| Case | Store | Evidence | Result |
|------|-------|----------|--------|
| A11-LAUNCH | A11 | ![A11-LAUNCH](screens/A11-LAUNCH.png) | **PASS** (guest home) |
| A10-BFF | A10 · P11 | — | **PASS** |
| A9-LOGIN | A9 · P10 | ![A9-LOGIN](screens/A9-LOGIN.png) | **PASS** |
| A3-CORE | A3 · A11 | ![A3-CORE](screens/A3-CORE.png) | **PASS** |
| P6-CORE | P6 · P11 | ![P6-CORE](screens/P6-CORE.png) | **PASS** |
| P6-CORE-2 | P6 | ![P6-CORE-2](screens/P6-CORE-2.png) | **PASS** (filter sheet) |
| A4-IPAD | A4 | **DEFER** Phase 1 | DEFER |

## E2E screenshots

| Case | AC | Result | Evidence |
|------|-----|--------|----------|
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` | **PASS** · login eraseText · `#sc-supervise` · filter Áp dụng · `#sc-patrol-map` |
| Android | `qa/e2e/android.yaml` | **PASS** · IME Enter login · EmptyChrome · filter sheet · map push |

## Align UX (Read CORE vs demo)

| Shot | vs demo `#sc-supervise` / `#filter-sheet` | Verdict |
|------|------------------------------------------|---------|
| A3-CORE | TopBar + Segment + EmptyChrome title/hint · Lọc · **cấm** watermark | **Aligned** |
| P6-CORE | TopBar + Segment + empty title · dual copy | **Aligned** |
| P6-CORE-2 | Sheet Tuyến · Ngày · Áp dụng · Xóa lọc · Huỷ | **Aligned** |
| Must open | — | **0** |

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-QA-SUP-TAB-01 | Tab index parent home selected | No · Defer |
| GAP-MOB-SUP-04 | BE fromDate P2 | No · P2 |
| GAP-QA-SUP-EMPTY-AND-01 | Android EmptyChrome title-only (iOS title+hint) | No · Defer kit |

## Next

`/agent-review-mobile` · roleOnly stop this task · **cấm** start review in same task.
