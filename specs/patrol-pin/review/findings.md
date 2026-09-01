# Review — Findings — patrol-pin (Ghim vị trí hiện tại)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] → Ghim vị trí hiện tại |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_08d8cb4b` · autoApprove=ON) |
| packKind | **`sheet`** (CTA hub + map · DES-MOB-CI-PIN-HERE) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / yarn e2e (role này) |
| prior · qa | `qa-compact.md` · **confirmed** · e2eQa ON · A11/A10/A9/A3/P6/P6-2 **PASS** · align Must **0** · `task_c5415843` |
| prior · dev | `dev-compact.md` · **confirmed** · cleanup_mock · live-only pin toast · builds PASS · `task_c9fd5cec` |
| prior · sa | STATUS **confirmed** · Step 4b **N/A** · GET sessions only |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy GET `patrol/sessions` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA `task_c5415843` · queued only — **cấm** re-run e2e ở review) |
| updatedAt | `2026-09-01T07:46:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolHomeView*` · `PatrolMapView*` · `GpsDenyModal` · `GetCurrentLocationUseCase` · `CoreLocationReader` · `PatrolPinModels` · Keychain |
| Android | `PatrolHome*` · `PatrolMap*` · `GpsDenyDialog` · `AndroidLocationReader` · `PatrolPinCopy` · EncryptedSharedPreferences |
| BFF | catch-all proxy · **không** invent `api/v1/patrol-pin` |
| API | **chỉ** `GET patrol/sessions` · GPS local · **cấm** POST pin/check-ins P1 |
| QA store | `qa/store/patrol-pin/` · capturedAt `2026-09-01T07:41:09.032Z` · ok=true |
| cleanup_mock | GAP-MOB-EDIT-DEMO-01 **closed** · **cấm** `demoRoute` / `itemsOrDemo` / `nextDemoTitle` on pin path |
| skillVersion | agent-review-mobile **2026.08.25.01** · pack `review/sheet@session` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** (prior + no regression) |
| Interceptor Bearer + `X-Company-Id` | **PASS** |
| GPS Info.plist `NSLocationWhenInUseUsageDescription` · Manifest `ACCESS_FINE_LOCATION` | **PASS** |
| Deny → in-app `GpsDenyModal` / `GpsDenyDialog` · **cấm** system alert | **PASS** |
| Fake lat/lng | **PASS** — live fix · timeout toast |
| Invent pin API / POST pins | **PASS** — không ship |
| IDOR `{id}` | **N/A** — sheet CTA |
| Plaintext JWT | **PASS** |
| Demo route invent on pin toast | **PASS** — live `activeSession` only · empty = `patrol.empty.active.route` |

## DTO parity (iOS = Android = BFF)

| Field | Disposition |
|-------|-------------|
| GET `patrol/sessions` → active Route toast | **OK** dual live-only |
| `PatrolPinCopy` / `PatrolPinModels` · **no** `demoRoute` | **OK** dual after cleanup_mock |
| Handoff check-in stub toast only | **OK** · **cấm** form fields |
| No new BFF DTO / Step 4b | **N/A** · SA confirmed |

## UI align (vision · prior QA `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE hub `#btn-pin-here` · pin glyph · **Ghim vị trí hiện tại** | **PASS** |
| P6-CORE hub same CTA + glyph | **PASS** |
| P6-CORE-2 map CTA + `#i-mappin` | **PASS** |
| Title Tuần đường · tab field · tab 5 | **PASS** |
| Watermark / process text | **PASS** none |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A3 1320×2868 · P6/P6-2 1080×1920 · manifest ok=true | **PASS** |
| Bugs `qa/bugs/patrol-pin.md` | **CLOSED** Must 0 |
| `PrivacyInfo.xcprivacy` | **Accept** P2 → `/review-app-submit` |
| A4-IPAD | **DEFER** Phase 1 iPhone only |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · X-Company-Id · GPS plist/manifest | **OK** |
| R-02 | API | — | Chỉ GET sessions · Step 4b N/A · **cấm ERP.*** · không invent pin API | **OK** |
| R-03 | GPS | — | Live fix · deny modal in-app · timeout toast · **cấm** fake coords | **OK** |
| R-04 | Scope | — | Handoff check-in stub toast · **cấm** form/POST P1 | **OK** |
| R-05 | Align | — | A3 + P6 + P6-2 vs demo pin zone · Must **0** · QA `task_c5415843` | **OK** |
| R-06 | DTO | — | Live-only pin toast dual · **no** demoRoute | **OK** |
| R-07 | QA | — | e2eQa ON · Maestro · store live · yaml guest→login | **OK** |
| R-08 | cleanup_mock | — | GAP-MOB-EDIT-DEMO-01 closed · pin path **cấm** itemsOrDemo/nextDemoTitle | **OK** |
| R-09 | Store | P2 | PrivacyInfo / Data safety | **Accept** |
| R-10 | Sibling | P2 | `nextDemoTitle` leftover in PatrolMapModels (unused pin path · gis-map owns) | **Accept** |
| R-11 | Sibling | P2 | Wire live check-in sheet when `patrol-checkin` ships | **Should** (non-block) |
| R-12 | Step 4b | — | T-BE **N/A** | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-PIN | PASS |
| T-AND-PAT-PIN | PASS |
| T-BE-PAT-PIN | **n/a** |
| T-QA | PASS (`task_c5415843`) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_08d8cb4b` · roleOnly=review)

| Gate | Result |
|------|--------|
| Artifact `review/findings.md` + STATUS review | **PASS** (this write) |
| yarn build / e2e / start:std | **SKIP** — roleOnly=review · **cấm** |
| Step 4b / migration | **N/A** |
| Prior Dev VERIFY iOS/Android/BFF | **PASS** (carry · `task_c9fd5cec` / prior) |
| Prior QA e2e `yarn e2e-qa-mobile` | **PASS** · ok=true · `task_c5415843` |

## Verdict

Ghim vị trí hiện tại dual-native post-cleanup_mock: security + DTO live-only + UI align Must **0** · QA e2e PASS · Step 4b N/A · sibling leftovers Accept. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| next | — (roleOnly=review · mark queue completed) |
| queue | `yarn queue -- --queue qlbd-mobile --yes status --id task_08d8cb4b --status completed` |
