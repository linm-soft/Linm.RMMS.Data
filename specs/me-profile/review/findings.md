# Review — Findings — me-profile (mobile · Hồ sơ)

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| title | [Mobile] [Tôi] -> Hồ sơ |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_b5e30af4` · autoApprove=ON) |
| changeScope | `new_page` |
| packKind | **`sheet`** (surface full screen `#sc-me-profile` · **cấm** bottom-sheet) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e/build ở role này |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** · `task_b53c3814` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · `task_bd696c31` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · Auth rewrite · Step 4b n/a · `task_99a8707a` |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| prior · tl | `task/me-profile.md` · **confirmed** · T-IOS-ME/MP + T-AND-ME/MP · `task_1e652028` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · Auth NuGet + rewrite · **cấm** MeProfileController |
| backend | Auth via Mobile.Bff · **cấm ERP.*** · **cấm** invent RMMS `users/me` |
| domain | **Auth** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA done · **cấm** re-run e2e/build/start:std ở role review |
| updatedAt | `2026-08-30T20:06:30.000Z` |
| taskId | `task_b5e30af4` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `Presentation/Features/MeProfile/*` · `UpdateProfileUseCase` · `ChangePasswordUseCase` · Keychain · leave modal · toast |
| Android | `presentation/feature/meprofile/*` · same use cases · EncryptedSharedPreferences · leave modal |
| BFF | Auth rewrite · GET/PUT `auth/profile` · POST `auth/change-password` · **cấm** invent controller |
| API | Auth Identity profile / change-password · **DONE** · Step 4b n/a |
| QA store | `qa/store/me-profile/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must **0** · `qa/bugs` CLOSED |
| skillVersion | agent-review-mobile **2026.08.29.1** |
| contentHash | `sha256:me-profile-control-hint-20260830` · unchanged |
| realDataHash | `sha256:me-profile-real-data-20260830` · unchanged |
| bffContentHash | `sha256:me-profile-bff-20260830` · unchanged |
| reviewHash | `sha256:me-profile-review-20260831` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` (+ timezone) | **PASS** (`ApiClient` / `AuthInterceptor`) |
| IDOR `{id}` | **N/A** — self Auth `users/me` via BFF · no path `{id}` UI |
| Location Info.plist / Manifest | **N/A** — không GPS trên `#sc-me-profile` |
| Camera plist / Manifest | **N/A P1** — avatar display only · **cấm** upload |
| Deny / leave in-app · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** — leave modal dual · toast only |
| Invent `api/v1/me-profile` / RMMS `users/me` / BFF MeProfileController | **PASS** — paths Auth only |
| Fake HTTP 200 khi PUT/POST fail | **PASS** — toast err · **cấm** toast ok on fail |
| Confirm password on wire | **PASS** — local only · body 2 field |
| Plaintext JWT / UserDefaults | **PASS** — Keychain / Encrypted only |
| Watermark / process text / `mfeStdUrl` | **PASS** — không ship |
| Tenant CompanyCode | **PASS** — client header + JWT claims |

## DTO parity (iOS = Android = BFF overlay)

| Field | Disposition |
|-------|-------------|
| GET `UserProfile` · `id` · `fullName` · `phoneNumber` · `email?` · `userName?` · `citizenId?` | **OK** dual entity + DTO + mapper |
| PUT `UpdateProfileRequestDto` · `fullName` · `phoneNumber` · `email` | **OK** dual = `MobileAuthProfileUpdateRequest` flat |
| POST `ChangePasswordRequestDto` · `currentPassword` · `newPassword` | **OK** dual · confirm **not** on wire |
| Parent JSON | **none** — flat scalars |
| citizenId PUT | **none** · display-only nếu GET (`GAP-MOB-MEPROF-CITIZEN-01`) |
| Tab invent / GAP-TAB-01 | **OK** · pack `tabs: none` · shell Tab 5 · **me** active |
| Typo GAP-TYP-01 label 13 · value/btn 16 · title 17/~20 | **OK** dual kit |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE (1320×2868) vs demo `#sc-me-profile` | **PASS** — title **Hồ sơ** · back **Tôi**+chevron · avatar `#i-person` · fullName/phone/email/userName · CTA **Lưu** · tab me · no watermark |
| P6-CORE / P6-CORE-2 (1080×1920) vs demo | **PASS** — same zones · Android icon-only back (GAP-MOB-ALIGN-01 OK) · section **Đổi mật khẩu** + Secure×3 + secondary visible (P6-2) · kit `…` overflow Observe |
| Email empty | **PASS** — EMAIL-01 OK |
| citizenId hidden | **PASS** — GET thiếu · CITIZEN-01 OK |
| Watermark / device label | **PASS** none |
| IME chrome (iOS keyboard / Android Gboard float) | OS · **không** Must (align-ux) |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |
| GAP-MOB-E2E-VIS-01 | **none** — CORE PNG **Read** done this review |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 1320×2868 · P6/P6-2 1080×1920 | **PASS** (`CAPTURE.md` · `manifest.json` `ok:true`) |
| Landing / BffBase store listing HTTPS | **Accept** — Release HTTPS · Debug localhost OK |
| `PrivacyInfo.xcprivacy` · Play Data safety | **Accept** P2 → `/review-app-submit` (account/password claim app-level) |
| A4-IPAD | **DEFER** Phase 1 · family `1` · `GAP-SUBMIT-IMG-08` N/A |
| Signup / delete account | **N/A** — profile form · not signup |
| READY_TO_SUBMIT | **không** (Review) |

## Clickables / crawl (Step 5d)

| Check | Result |
|-------|--------|
| `/run-mobile-e2e --crawl` | **SKIP** — roleOnly=`review` VERIFY GATE · **cấm** yarn e2e (packet HARD) |
| Evidence | prior QA Maestro `#sc-me-profile` · entry `#row-profile` · A3/P6 CORE live |
| `qa/e2e/CLICKABLES.md` | **written** · action-tree + QA · **no** new sibling |
| GAP-MOB-ACT-03 | **none** — Lưu / Đổi MK / confirm = same-slug submit/chrome (`GAP-MOB-ACT-07`) · no dead hub CTA |
| Sibling enqueue | **none** · `me-settings` / logout **OUT** (`GAP-MOB-ACT-06`) |

## Real data (Step 5e)

| Check | Result |
|-------|--------|
| `demoItems` / hardcode form source | **none** — GET `auth/profile` · fallback lastWho only on fail |
| Fake toast ok | **none** — catch → toast err |
| GAP-MOB-REAL-02 | **closed** |
| GAP-QA-REAL-01 | **closed** — QA A10-BFF + Maestro slug · BFF `:5202` healthy · Auth seed bind |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · no plaintext JWT | **OK** |
| R-02 | API | — | GET/PUT `auth/profile` · POST `auth/change-password` · Auth rewrite · **cấm ERP.*** · no invent | **OK** |
| R-03 | DTO | — | Dual UserProfile + Update/ChangePassword request = BFF overlay · confirm local | **OK** |
| R-04 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · vision Read | **OK** |
| R-05 | Scope | — | Sibling settings/logout/admin users **OUT** · avatar upload OUT P1 | **OK** |
| R-06 | QA | — | e2eQa ON · Maestro · store live · prior PASS | **OK** |
| R-07 | Store | P2 | PrivacyInfo / Data safety account+password claim | **Accept** |
| R-08 | Crawl | — | e2e `--crawl` SKIP role review · CLICKABLES from analy+QA · ACT-03 none | **OK** |
| R-09 | Step 4b | — | n/a · Auth DONE · review **skip** re-run | **OK** |
| R-10 | Observe | — | Android TopBar `…` · Gboard float · iOS keyboard fold pwd | **Accept** (non-Must) |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-ME-01 · T-IOS-MP-01 | PASS (prior Dev) |
| T-AND-ME-01 · T-AND-MP-01 | PASS (prior Dev) |
| T-BE-API · T-BE-MIG | n/a |
| T-BFF-01 | reuse · prior QA BFF build PASS |
| T-QA-TAB-01 · T-QA-ME-PROFILE | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_b5e30af4` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Mobile sheet→screen `#sc-me-profile` dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · Auth profile/change-password live · no invent path · no open P0 / REAL / ACT-03. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | PrivacyInfo account/password claim tại `/review-app-submit` · avatar upload P2 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T20:06:30.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| taskId | `task_b5e30af4` |
| contentHash | sha256:me-profile-control-hint-20260830 |
| realDataHash | sha256:me-profile-real-data-20260830 |
| bffContentHash | sha256:me-profile-bff-20260830 |
| reviewHash | sha256:me-profile-review-20260831 |
| priorQaTaskId | `task_b53c3814` |
| priorDevTaskId | `task_bd696c31` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked reviewHash=sha256:me-profile-review-20260831 -->
