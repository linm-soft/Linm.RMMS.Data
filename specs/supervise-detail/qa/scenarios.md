# QA — Scenarios — supervise-detail (mobile · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`screen`** |
| changeScope | `new_page` |
| taskId | `task_63f14363` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:true** · `2026-08-31T02:46:01.428Z` · dest **iPhone 17 Pro Max** 1320×2868 · AVD **1080×1920** |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | dual proto `#sc-supervise-detail` · live A3 ↔ P6 · **Aligned** · Must **0** |
| updatedAt | `2026-08-31T02:50:00.000Z` |

**Scope:** slug `supervise-detail` screen `#sc-supervise-detail` `DES-MOB-SUP-DETAIL` only. **Cấm** AC sibling list/filter/segment/CRUD (`#sc-supervise` · `#sc-checkin-detail`).

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` | **PASS** |
| iOS `xcodebuild` dest **iPhone 17 Pro Max** | **PASS** |
| Android `./gradlew :app:assembleDebug` | **PASS** |
| Mobile.Bff `dotnet build` / :5202 | **PASS** (docker healthy) |
| API docker :5111 | **PASS** |
| Maestro iOS + Android | **PASS** · login → tile `tile-supervise` → card `sup-card-demo-1` → `#sc-supervise-detail` |
| `yarn e2e-qa-mobile` | **PASS** · `ok:true` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| AC-D-01 | Home tile Giám sát → list → push detail | **PASS** (Maestro iOS+Android) |
| AC-D-02 | GPS deny | **N/A** (readonly display Lat/Lng · no request) |
| AC-D-03 | Leave dirty | **N/A** (no form) |
| AC-D-04 | Cấm native alert · toast only | **PASS** (offline demo toast · shots không sheet / `UIAlert`) |
| AC-D-05 | Keyboard | **N/A** (no text field on detail) |
| AC-D-06 | Safe area TopBar + scroll rows + CTA | **PASS** (A3 6.9" · P6 + P6-2 fold) |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** (detail không hero signal) |
| AC-D-09 | Bearer BFF GET `patrol/attendance-logs/{id}` | **PASS** (BFF :5202 · A10-BFF · demo id 404 → offline SSOT) |
| AC-D-10 | Tab 5 · home selected under push | **PASS** (A3/P6 tab **Trang Chủ** active) |
| AC-D-11 | Camera / push | **N/A** (thumb N/A P1) |
| AC-D-12 | Type 13 / ≥16 | **PASS** (visual + SSOT parity) |
| AC-D-13 | Dual copy VN | **PASS** (A3 ↔ P6) |
| AC-D-14 | Cấm watermark / device label | **PASS** |
| AC-F-01 | Login → `#sc-supervise-detail` hero+rows | **PASS** (Maestro iOS+Android) |
| AC-F-02 | Back `btn-sup-detail-back` → pop list | **PASS** (Maestro optional tap) |
| AC-F-03 | Appear GET by id · demo SSOT khi BFF empty/404 demo card | **PASS** (Nguyễn Văn A · CC-20260810-001 · toast loadFail) |
| AC-F-04 | 404 real id → EmptyChrome | **N/A** e2e (demo card path · code review) |
| AC-F-05 | CTA **Xem trên bản đồ** visible · scroll fold P6-2 | **PASS** (P6-CORE-2 · `btn-sup-detail-map`) |
| AC-F-06 | Org Note fallback **Tổ tuần đường · VP-IV.1** | **PASS** (A3/P6 row-org) |
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
| A4-IPAD | A4 | **DEFER** Phase 1 · family `1` | DEFER |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` | **PASS** · guest → login → `tile-supervise` → `sup-card-demo-1` → `#sc-supervise-detail` |
| Android | `qa/e2e/android.yaml` | **PASS** · guest → login → card → detail · scroll CTA fold |

## Visual align (`/review-align-ux-ios-android`)

Read `A3-CORE.png` + `P6-CORE.png` vs dual prototype `#sc-supervise-detail`:

| Zone | Demo | Live iOS | Live Android | Verdict |
|------|------|----------|--------------|---------|
| Title | Chi tiết check-in | ✓ | ✓ | **Aligned** |
| Back | Giám sát / chevron | text+chevron | icon-only | **platform-OK** |
| Hero | Nguyễn Văn A 28/24 | ✓ | ✓ | **Aligned** |
| Mã / CC-20260810-001 | ✓ | ✓ | ✓ | **Aligned** |
| Rows 6 (Tổ · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng) | text-only · no row-icon | LinmListRow text | LinmListRow text | **Aligned** |
| CTA | Xem trên bản đồ | LinmPrimaryButton | LinmPrimaryButton | **Aligned** |
| Tab shell | Trang Chủ selected | ✓ | ✓ | **Aligned** |
| Watermark / device label | cấm | none | none | **PASS** |

**Must gaps:** **0** · `ui/review/align-ux.md`

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-QA-SUP-DET-DEMO-404-01 | BFF empty DB · card id `demo-1` GET 404 → offline demo SSOT + toast (iOS/Android aligned) · real uuid 404 vẫn EmptyChrome | **No** |
| GAP-QA-SUP-DET-NAV-01 | iOS nested `navigationDestination` → sibling stack fix during QA (AppRouter) | **No** (closed) |
| GAP-QA-SUP-DET-A11Y-01 | iOS card `sup-card-*` a11y on Button (SuperviseView) | **No** (closed) |

## E2E screenshots

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`).

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |
