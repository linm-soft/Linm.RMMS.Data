# Review — Findings — patrol-pin (Ghim vị trí hiện tại)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] → Ghim vị trí hiện tại |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_ff84d158` · autoApprove=ON) |
| packKind | **`sheet`** (CTA hub + map · DES-MOB-CI-PIN-HERE) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · align Must **0** |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS |
| prior · sa | `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** · GET sessions only |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy GET `patrol/sessions` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA `task_3a68f8d3`) |
| updatedAt | `2026-08-21T04:02:45.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolHomeView*` · `PatrolMapView*` · `GpsDenyModal` · `GetCurrentLocationUseCase` · `CoreLocationReader` · `PatrolPinCopy` · Keychain |
| Android | `PatrolHome*` · `PatrolMap*` · `GpsDenyDialog` · `AndroidLocationReader` · `PatrolPinCopy` · EncryptedSharedPreferences |
| BFF | catch-all proxy · **không** invent `api/v1/patrol-pin` |
| API | **chỉ** `GET patrol/sessions` · GPS local · **cấm** POST pin/check-ins P1 |
| QA store | `qa/store/patrol-pin/` A11/A9/A3/P6/P6-2 live PNG |
| skillVersion | agent-review-mobile **2026.08.21** |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor`) |
| GPS Info.plist `NSLocationWhenInUseUsageDescription` · Manifest `ACCESS_FINE_LOCATION` | **PASS** |
| Deny → in-app `GpsDenyModal` / `GpsDenyDialog` · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** |
| Fake lat/lng | **PASS** — `CoreLocationReader` / `AndroidLocationReader` live fix · timeout → toast |
| Invent `api/v1/patrol-pin` / POST pins / check-ins form | **PASS** — không ship |
| IDOR `{id}` | **N/A** — sheet CTA · no detail-by-id |
| Plaintext JWT | **PASS** — Keychain / Encrypted only |

## DTO parity (iOS = Android = BFF)

| Field | Disposition |
|-------|-------------|
| GET `patrol/sessions` → active Route toast | **OK** dual |
| `PatrolPinCopy.successToast` · demo `QL.1 · Km 1561+134` | **OK** dual SSOT |
| Handoff `setOpenCheckIn` / sibling stub toast only | **OK** · **cấm** form fields |
| No new BFF DTO / Step 4b | **N/A** · SA confirmed |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE hub `#btn-pin-here` · pin glyph · **Ghim vị trí hiện tại** | **PASS** (Read store) |
| P6-CORE hub same CTA + glyph | **PASS** dual |
| P6-CORE-2 map CTA + `#i-mappin` | **PASS** |
| Title Tuần đường · tab field · tab 5 | **PASS** |
| Watermark / process text | **PASS** none |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A3 1320×2868 · P6/P6-2 1080×1920 RGB | **PASS** |
| `PrivacyInfo.xcprivacy` | **Accept** P2 → `/review-app-submit` |
| A4-IPAD | **DEFER** family `1` · Phase 1 iPhone only |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · X-Company-Id · GPS plist/manifest | **OK** |
| R-02 | API | — | Chỉ GET sessions · Step 4b N/A · **cấm ERP.*** · không invent pin API | **OK** |
| R-03 | GPS | — | Live fix · deny modal in-app · timeout toast · **cấm** fake coords | **OK** |
| R-04 | Scope | — | Handoff check-in stub toast · **cấm** form/POST P1 | **OK** |
| R-05 | Align | — | A3 + P6 + P6-2 vs demo pin zone · Must **0** | **OK** |
| R-06 | DTO | — | `PatrolPinCopy` dual parity | **OK** |
| R-07 | QA | — | e2eQa ON · Maestro · store live prior QA | **OK** |
| R-08 | Store | P2 | PrivacyInfo / Data safety | **Accept** |
| R-09 | Sibling | P2 | Wire live check-in sheet when `patrol-checkin` ships | **Should** (non-block) |
| R-10 | Step 4b | — | T-BE **N/A** | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-PIN | PASS |
| T-AND-PAT-PIN | PASS |
| T-BE-PAT-PIN | **n/a** |
| T-QA | PASS (prior `task_3a68f8d3`) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_ff84d158`)

| Gate | Result |
|------|--------|
| iOS `xcodegen` + `xcodebuild` scheme **LinmRmms** dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew :app:assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| Mobile.Bff `dotnet build` | **PASS** · 0 Warning · 0 Error |
| yarn e2e-qa-mobile | **PASS** (prior QA · store PNG live) |
| Step 4b BE align | **N/A** — reuse GET sessions only |

## Verdict

Ghim vị trí hiện tại dual-native: security + DTO + UI align Must **0** · VERIFY GATE iOS/Android/BFF PASS · Step 4b N/A · sibling check-in stub Accept. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| next | — (roleOnly=review · mark queue completed) |
| queue | `yarn queue -- --queue qlbd-mobile --yes status --id task_ff84d158 --status completed` |
