# Review — Findings — patrol-home (mobile hub · Tuần đường)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Mobile] Tuần đường |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_929e803f` · autoApprove=ON) |
| packKind | **`hub`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_c882b8bd` · `qa/scenarios.md` · **confirmed** · e2e `ok: true` |
| prior · dev | `task_488d0e96` · `implement/{ios,android}.md` · **confirmed** |
| prior · sa | `task_874f3421` · `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `GET patrol/sessions` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-08-19T15:00:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolHomeView` · `PatrolHomeViewModel` · `PatrolHomeNavBar` · `PatrolRepositoryImpl` · `FetchPatrolSessionsUseCase` · `FetchOfflineQueueCountUseCase` |
| Android | `PatrolHomeScreen` · `PatrolHomeViewModel` · `PatrolRepositoryImpl` · same use cases |
| BFF | `MobileApiProxyController` catch-all → `GET patrol/sessions` · **cấm** `PatrolHomeController` |
| API | `GET patrol/sessions` Bearer · client filter «Đang tuần» · demo fallback |
| skillVersion | agent-review-mobile **2026.08.19.29** |
| live re-audit | 2026-08-19 after QA `task_c882b8bd` · VERIFY GATE recheck `task_929e803f` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` + `X-Timezone` (ApiClient / AuthInterceptor) | **PASS** |
| Offline badge local `FetchOfflineQueueCountUseCase` · **cấm** GET queue API | **PASS** |
| IDOR / invent permission | **N/A** — read-only sessions list · no per-record mutation on hub |
| Location / camera Info.plist + Manifest | **N/A** — hub P1 toast pin · no live GPS capture |
| `alert` / `UIAlert` / `AlertDialog` trên PatrolHome | **PASS** — `LinmToast` / session toast only |
| Plaintext token / invent `GET patrol-home` / `PatrolHomeController` | **PASS** — proxy `patrol/sessions` only |
| Foot «Phiên bản Gói» / WebView | **PASS** — không ship |
| Hardcode notify badge `3` | **PASS** — badge **0 ẩn** · bell toast only |

## DTO parity (iOS = Android = BFF)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| Session list | `PatrolRepositoryImpl` GET `patrol/sessions` | same Retrofit path | **OK** |
| Active filter | `PatrolDtoMapper.active(from:)` | `PatrolDtoMapper.active()` | **OK** — «Đang tuần» |
| Demo fallback | `PatrolHomeCopy.demoActive` · `demoToday` | same SSOT | **OK** — Km 1556+000 · PAT-…0014 |
| Hero/KPI fields | `checkInCount` · `remainingCount` · `coveragePercent` | same | **OK** |
| Offline count | `FetchOfflineQueueCountUseCase` local store | same | **OK** — badge ẩn khi 0 |
| Quick actions | `PatrolHomeCopy.quickActions` 6 rows | same | **OK** — Lưu trữ last |
| Segment toast | idx 1 → toast Chấm công · reset 0 | same | **OK** |

## UI align (QA shots 2 OS)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-patrol-home` hub · segment · hero | `A3-CORE` | `P6-CORE` | **PASS** — cùng zone · Must **0** |
| Title **Tuần đường** · segment idx 0 | same | same | **PASS** |
| Hero Ca đang chạy · Tốt · PAT-…0014 · 67% | same zones | same | **PASS** |
| Pin CTA **Ghim vị trí hiện tại** | `LinmPrimaryButton` `btn-pin-here` | same testTag | **PASS** |
| KPI 2 / 1 / 67% | `LinmKpiStrip` | same | **PASS** |
| Today PAT-…0014 **Đang tuần** · PAT-…0009 **Xong** | same | same (P6 fold) | **PASS** |
| Quick 6 rows · Lưu trữ scroll | A3 above-fold | P6-CORE-2 `row-quick-patrol-offline` | **PASS** |
| Tab 5 field selected | same | same | **PASS** |
| Nav sync / notify | `btn-sync` · `btn-notify` | kit slots | **PASS** |
| Entry Home `tile-patrol` / tab field | Maestro PASS | Maestro PASS | **PASS** — route_a |
| Must align mở | — | — | **0** → `align_confirm` **approve** |

Evidence: `qa/store/patrol-home/{A3-CORE,P6-CORE,P6-CORE-2,A11-LAUNCH,A9-LOGIN}.png` · CAPTURE.md · manifest `ok: true`.

## Store gate (Review note — **không** `READY_TO_SUBMIT` ở role này)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **thiếu** file app iOS | **Accept** P2 → `post_review` / `/review-app-submit` — **không** chặn hub `done` |
| Play Data safety form | deferred store submit | **Accept** P2 |
| Landing HTTPS live | deferred | **Accept** P2 |
| family `1` → **cấm** listing A4 | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** | **OK** |
| Store PNG live (QA) | A11/A9/A3/P6 **PASS** · px 1320×2868 / 1080×1920 | **OK** for Review · listing official → `/store-image-capture` |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip` (Recommended — chưa store submit).

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · local offline count only | **OK** |
| R-02 | API | — | Chỉ `GET patrol/sessions` proxy · **cấm** `PatrolHomeController` / hub aggregate | **OK** |
| R-03 | DTO | — | Session list dual parity · active filter · demo fallback SSOT | **OK** |
| R-04 | UX | P2 | Sibling CTA (map · check-in · attendance) toast-only P1 | **Accept** — scope hub · QA Must 0 |
| R-05 | Align | — | iOS↔Android zone kit parity · segment · hero · KPI · quick · tab | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · cases A11,A10,A9,A3,P6,P6-2 | **OK** |
| R-07 | Store | P2 | thiếu `PrivacyInfo.xcprivacy` + Data safety / landing | **Accept** — chặn chỉ khi `app_submit` |
| R-08 | Scope | — | check-in live · map · attendance implement · 6 sibling screens **OUT** P1 | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** · reuse `GET patrol/sessions` | **OK** |
| R-10 | Gap | — | GAP-MOB-ACT-06 sibling `pending_confirm` · **cấm** auto start | **Defer** — non-block |
| R-11 | Gap | — | GAP-QA-A11Y-TAB-FIELD-01 iOS tab Maestro inherit `tab-bar` | **Defer** — kit follow-up · non-block |
| R-12 | Nav | — | GAP-MOB-ACT-PAT-OFFLINE-01 sync + Lưu trữ wire `patrol-offline` | **Closed** — nav sync + row wire shipped |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-HOME | PASS (prior Dev + Review re-audit) |
| T-AND-PAT-HOME | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_c882b8bd`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |

## VERIFY GATE (`task_929e803f` recheck)

| Gate | Result |
|------|--------|
| iOS `xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew :app:assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| BFF `dotnet build` | **PASS** · 0 Warning(s) · 0 Error(s) |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok: true`) — Review không re-run |

## Verdict

Hub Tuần đường dual-native: security token/local-store/API scope PASS · GAP-MOB-ACT-PAT-OFFLINE-01 nav wire **Closed** · UI align 0 Must · QA store live PASS · VERIFY GATE native+BFF PASS. P2 PrivacyInfo/sibling toast-only **Accept** đến `post_review`/`app_submit`. GAP-MOB-ACT-06 · GAP-QA-A11Y-TAB-FIELD-01 **Defer** P1. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** (autoApprove) |
| Next | visual sau done → `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T15:00:00.000Z |
| versionGate | rechecked |
| taskId | `task_929e803f` |
| contentHashPriorQa | `task_c882b8bd` |
| dataAnalySkillVersion | 2026.08.19.27 |
| poSkillVersion | 2026.08.19.23 |
| designSkillVersion | 2026.08.19.24 |
| saSkillVersion | 2026.08.19.22 |
| teamLeadSkillVersion | 2026.08.19.22 |
| devSkillVersion | 2026.08.19.24 |
| qaSkillVersion | 2026.08.19.28 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
