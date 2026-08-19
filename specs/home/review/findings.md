# Review — Findings — home

| Field | Value |
|-------|-------|
| feature | `home` |
| title | [Mobile] Trang Chủ |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_29b1f560` · autoApprove=ON) |
| packKind | **`hub`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_dfb8f4a1` · `qa/scenarios.md` · **confirmed** · e2e `ok: true` |
| prior · dev | `task_8a2d59d6` · `implement/{ios,android}.md` · **confirmed** |
| prior · sa | `task_15a962de` · `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `GET auth/profile` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-08-19T06:30:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `HomeView` · `HomeViewModel` · `FetchProfileUseCase` · Keychain |
| Android | `HomeScreen` · `HomeViewModel` · EncryptedSharedPreferences |
| BFF | Auth prefix rewrite · **không** HomeController |
| API | `GET mobile-bff/api/v1/auth/profile` only |
| skillVersion | agent-review-mobile **2026.08.19.20** |
| live re-audit | 2026-08-19 after QA `task_dfb8f4a1` · VERIFY GATE recheck |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` + timezone (ApiClient / AuthInterceptor) | **PASS** |
| IDOR `{id}` trên hub | **N/A** — không GET/{id} catalog · profile = current user |
| Location / camera Info.plist + Manifest copy trên slug `home` | **N/A** — hub không GPS/camera (sibling) · Manifest chỉ INTERNET / NETWORK_STATE / POST_NOTIFICATIONS |
| `alert` / `UIAlert` / `AlertDialog` trên Home | **PASS** — toast kit only |
| Plaintext token / fork API `api/v1/home` / inbox trên home | **PASS** — chỉ `auth/profile` · `notifyCount=0` · **cấm** GET inbox (`GAP-F-HOME-02`) |
| Role live / wallet invent | **PASS** — role **ẩn** · wallet static demo (`GAP-F-HOME-01`) |
| Foot «Phiên bản Gói» | **PASS** — không ship (`GAP-F-HOME-03`) |

## DTO parity (iOS = Android = Auth)

| Field | iOS `UserProfileDto` | Android `UserProfileDto` | Disposition |
|-------|----------------------|--------------------------|-------------|
| `id` · `fullName` · `phoneNumber` · `citizenId` · wrap `data` | same | same | **OK** |
| Domain `UserProfile` + `FetchProfileUseCase` | reuse | reuse | **OK** — **cấm** fork DTO |

## UI align (QA shots 2 OS)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| Hero tools · signal · `.who` · quick 2 | `A3-CORE` | `P6-CORE` | **PASS** — cùng zone · **không** GAP-MOB-ALIGN-* |
| Grid 3×2 · wallet · tab Trang Chủ | `A3-CORE` | `P6-CORE` / `P6-CORE-2` | **PASS** |
| Kit chrome `LinmTabBar` dual | QA dual align | QA dual align | **PASS** — **cấm** TabView/M3 fork |
| Must align mở | — | — | **0** → `align_confirm` **N/A** |

Evidence: `qa/store/home/{A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE.md · manifest `ok: true`.

## Store gate (Review note — **không** `READY_TO_SUBMIT` ở role này)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **thiếu** file app iOS | **Accept** P2 → `post_review` / `/review-app-submit` (A7) — **không** chặn hub `done` |
| Play Data safety form | deferred store submit | **Accept** P2 |
| Landing HTTPS live | deferred | **Accept** P2 · **cấm** localhost listing |
| Signup → xóa TK | **N/A** hub · no account create | **OK** |
| family `1` → **cấm** listing A4 | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** | **OK** (`GAP-SUBMIT-IMG-08`) |
| Store PNG live (QA) | A11/A9/A3/P6 **PASS** · px 1320×2868 / 1080×1920 | **OK** for Review · listing official → `/store-image-capture` |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip` (Recommended — chưa store submit).

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · X-Company-Id | **OK** |
| R-02 | API | — | Chỉ `GET auth/profile` · không fork / inbox / home API | **OK** |
| R-03 | DTO | — | UserProfileDto dual parity | **OK** |
| R-04 | UX gap | — | GAP-F-HOME-01/02/03 verified live shot | **OK** |
| R-05 | Align | — | iOS↔Android zone kit parity · 0 GAP-MOB-ALIGN | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · cases A11,A10,A9,A3,P6,P6-2 | **OK** |
| R-07 | Store | P2 | thiếu `PrivacyInfo.xcprivacy` + Data safety / landing | **Accept** — chặn chỉ khi `app_submit` |
| R-08 | Scope | — | Sibling 6 × `pending_confirm` · **cấm** auto start (`GAP-MOB-ACT-06`) | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** · reuse Auth | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-HOME | PASS (prior Dev + Review re-audit) |
| T-AND-HOME | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_dfb8f4a1`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |

## VERIFY GATE (`task_29b1f560` recheck)

| Gate | Result |
|------|--------|
| iOS `xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| BFF `dotnet build` | **PASS** · 0 Warning(s) · 0 Error(s) |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok: true`) — Review không re-run |

## Verdict

Hub Trang Chủ dual-native: security token/DTO/API scope PASS · UI align 0 Must · QA store live PASS · VERIFY GATE native+BFF PASS. P2 PrivacyInfo/Data safety **Accept** đến `post_review`/`app_submit`. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** (autoApprove) |
| Next | sibling `pending_confirm` chờ board Approve — **cấm** chain implement |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T06:30:00.000Z |
| versionGate | rechecked |
| taskId | `task_29b1f560` |
| contentHashPriorQa | `task_dfb8f4a1` |
| dataAnalySkillVersion | 2026.08.19.17 |
| poSkillVersion | 2026.08.19.15 |
| designSkillVersion | 2026.08.19.07 |
| saSkillVersion | 2026.08.19.10 |
| teamLeadSkillVersion | 2026.08.19.15 |
| devSkillVersion | 2026.08.19.13 / 2026.08.19.12 |
| qaSkillVersion | 2026.08.19.20 |
