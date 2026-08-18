# QA — Scenarios — login (mobile)

| Field | Value |
|-------|-------|
| feature | `login` |
| title | [Mobile] Đăng nhập |
| this role | `qa` · `/agent-qa-mobile` |
| status | `in_progress` |
| packKind | **`shell`** |
| stack | `native_dual` |
| changeScope | `new_page` |
| taskId | `task_4d1e2f3a` |
| prior · dev | **confirmed** · `implement/ios.md` · `implement/android.md` · `implement/bff.md` · `task_1e440396` |
| autoApprove | **ON** |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| method | e2e runtime · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| updatedAt | `2026-08-18T19:57:00.000Z` |

**Scope:** slug `login` only (`#sc-login` · CTA **Đăng nhập**). **Cấm** AC sibling `login-forgot` / `login-logout` as in-scope.

## VERIFY GATE (pre-E2E)

| Gate | Result |
|------|--------|
| iOS `xcodegen` | **PASS** |
| iOS `xcodebuild` dest **iPhone 17 Pro Max** | **PASS** |
| Android `./gradlew :app:assembleDebug` | **PASS** |
| Mobile.Bff `dotnet build` | **PASS** |
| Maestro CLI (mobile.dev) | **PASS** (`~/.maestro/bin` · brew tap) |
| AVD / sim | **iPhone 17 Pro Max** booted · emulator adb device · AVD `Pixel_8` present · **A4 DEFER** |

## Device AC (PO §9)

| ID | Behavior | Expect | Result |
|----|----------|--------|--------|
| AC-D-01 | Offline | Submit chặn · toast in-app · **cấm** queue login | runtime E2E + code review |
| AC-D-02 | GPS deny | **N/A** | SKIP |
| AC-D-03 | Leave dirty | **N/A** | SKIP |
| AC-D-04 | Native alert | **Cấm** UIAlert / AlertDialog — `LinmToast` only | runtime |
| AC-D-05 | Keyboard | Không đè `#f-user` / `#f-pass` · content-type username/password | runtime |
| AC-D-06 | Safe area | Brand + form + meta không đè notch / home indicator | shot A3/P6 |
| AC-D-07 | Biometric | **Ẩn Gói 1** | code / shot |
| AC-D-08 | Signal | Copy **Tốt / Trung bình / Yếu** · **cấm** «Có mạng» | shot |
| AC-D-09 | Token | Keychain / Encrypted store · app chỉ BFF prefix | code review Dev |
| AC-D-10 | Tab / swipe | Auth **không** UITabBar 5 · không swipe-back Home chưa login | shot A11 |
| AC-D-11 | Camera / push | **N/A** | SKIP |

## Happy path / negative (slug `login`)

| # | Step | Expect | Store | Result |
|---|------|--------|-------|--------|
| H1 | Cold start no token | Full-page Login `#sc-login` · logo 192 · tagline title · user+pass kit · CTA · forgot link · signal | A11 · A3 · P6 | E2E |
| H2 | Online submit valid | Fill `#f-user`=`linm-soft` · `#f-pass`=`Linm@2026` (Auth docker seed) · POST `auth/login` `{ id, password }` · omit company · toast **Đăng nhập thành công** → Home | A9 · A3 · P6 | E2E |
| H3 | After login | GET `contract-accounts/session-window?authUserId=` · `allowed` → Home | A9 · A10 | E2E |
| N1 | Wrong password | Toast in-app · stay Login · **cấm** system alert | A11 | E2E / code |
| N2 | Offline submit | **Không** POST · toast **Không có mạng** | — | code AC-D-01 |
| N3 | Window closed | 403 / `allowed=false` · clear token · toast · stay Login | A9 | code + BFF |
| N4 | Forgot tap | Toast **Quên mật khẩu → hệ thống xác thực** · **không** BFF | — | chrome only |
| N5 | Watermark | **Cấm** «bản Gói 1» on production UI | A3 · P6 | shot |
| N6 | Kit | `LinmSecureTextField` dual · **cấm** raw SecureField / OutlinedTextField | — | Dev confirm |
| N7 | Path | App `auth/refresh-token` · **cấm** `auth/refresh` · **cấm** ERP.* | A10 | code |
| N8 | Demo Home **Đăng xuất** | `#btn-logout` · toast **Đã đăng xuất** · về `#sc-login` · **không** POST `auth/logout` · **không** AC slug `login-logout` | — | chrome retest |

## Store Must (`/review-app-submit` × feature)

| Case | Store | Evidence | Result |
|------|-------|----------|--------|
| A11-LAUNCH | A11 | Launch Login no crash | E2E |
| A10-BFF | A10 · P11 | Mobile.Bff `:5202` listen | E2E |
| A9-LOGIN | A9 · P10 | Demo login flow | E2E |
| A3-CORE | A3 · A11 | Core UX Login · px 6.9" | E2E |
| P6-CORE | P6 · P11 | Android phone core job | E2E |
| P6-CORE-2 | P6 | Second Play phone shot | E2E |
| A4-IPAD | A4 | **DEFER** Phase 1 (`ios_test_phase=phase1_iphone`) | DEFER |

## Kit / placeholder

| Check | Result |
|-------|--------|
| Chrome = map (`LinmTextField` + lead · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmNetSignalMark`) | Dev confirmed · QA shot |
| Watermark / process text on shot | fail → `GAP-DEV-MOB-PLACEHOLDER-01` |
| Kit mismatch | fail → `GAP-MOB-KITUSE-01` |

## Out of scope (cấm AC)

- `login-forgot` BFF path · `login-logout` · tab 5 Home hub · switch-company · đổi MK · biometric · mã đơn vị

## Notes

- Privacy/support URL (A5/A6 · P7) — ghi thiếu nếu thiếu; **cấm** QA mark `READY_TO_SUBMIT`.
- Listing official → `/store-image-capture` confirm live files (cấm AI vẽ).
