# Review — Findings — patrol-home (mobile hub · Tuần đường · edit_page SESSION/HERO)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Mobile] Tuần đường |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_8c4882de` · autoApprove=ON) |
| post_review | **skip** |
| packKind | **`hub`** |
| changeScope | `edit_page` |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e re-run |
| prior · qa | `task_56abf022` · **confirmed** · e2e `ok:true` · align Must **0** |
| prior · dev | `task_523eaa0e` · **confirmed** · SESSION-01/02 · HERO-01 |
| prior · sa | `task_57e24d09` · **confirmed** · FormMode↔GET/POST/PUT · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy GET/POST/PUT `patrol/sessions` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA PASS · Review **không** re-run Maestro / crawl |
| updatedAt | `2026-09-12T15:29:34.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolHomeView` · `PatrolHomeViewModel` · `CreatePatrolSessionUseCase` · `EndPatrolSessionUseCase` · `PatrolRepositoryImpl` · `PatrolHistoryDetailViewModel` |
| Android | `PatrolHomeScreen` · `PatrolHomeViewModel` · same use cases / repo |
| BFF | catch-all proxy · **cấm** `PatrolHomeController` |
| API | GET/POST `patrol/sessions` · GET/PUT `patrol/sessions/{id}` · Bearer + `X-Company-Id` |
| skillVersion | agent-review **2026.09.05.03** (SSOT `agent-review` · mobile slash) |
| live re-audit | 2026-09-12 after SESSION/HERO `task_523eaa0e` + QA `task_56abf022` |
| prior REVIEW-META | `task_262a3fa6` cleanup_mock — **không** skip (scope + prior task đổi) |

## Security + permission

| Check | Result |
|-------|--------|
| Token iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` + timezone | **PASS** |
| Offline badge local queue count · **cấm** invent queue API | **PASS** |
| IDOR `{id}` PUT endSession | **PASS** — id từ detail nav (list live) · GET-then-PUT same id · header tenant · empty id → toast fail |
| Location / camera Info.plist + Manifest | **N/A** hub P1 pin toast · no live GPS capture on open |
| `alert` / `UIAlert` / `AlertDialog` trên PatrolHome | **PASS** — toast hub only |
| Plaintext token / invent hub aggregate API | **PASS** |
| POST create body | userName từ `auth.lastWho()` · defaults route/type · **cấm** hardcode demo person |

## DTO parity (iOS = Android = BFF)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| GET sessions | `PatrolRepositoryImpl` | Retrofit same path | **OK** |
| POST create | `createSession` → `patrol/sessions` | same | **OK** — SESSION-01 |
| PUT end | GET by id → PUT Status=Hoàn thành · `isActive=false` | same | **OK** — SESSION-02 |
| Active filter | `PatrolDtoMapper.active` «Đang tuần» | same | **OK** |
| Live-only hub | fail/empty → `emptyActive` + toast · **cấm** bind `demoActive`/`demoToday` | same | **OK** — HERO-01 · GAP-MOB-REAL-02 **closed** |
| `demoActive`/`itemsOrDemo` SSOT | còn trong Domain (siblings) | same | **Defer** — hub VM **không** gọi |
| KPI / hero fields | checkIn · remaining · coverage | same | **OK** · empty=`—`/0 |

## UI align (prior QA · Must 0)

| Zone | Evidence | Result |
|------|----------|--------|
| `#sc-patrol-home` | A3-CORE · P6-CORE · align-ux **Aligned** | **PASS** · Must **0** |
| emptyActive / btn-open-session | N/A active seed · path coded dual | **PASS** (seed N/A) |
| Hero live fields | PAT-…0014 · QL.1 · 67% live | **PASS** · no sample fallback |
| Pin · KPI · today · quick · tab | CAPTURE + align-ux | **PASS** |
| PNG Read tool | blocked env · rely QA vision + CAPTURE | **OK** — no GAP-MOB-E2E-VIS-01 (QA did Read) |
| bugs | `qa/bugs/patrol-home.md` CLOSED Must 0 | **OK** |

## Store gate (Review note — **không** READY_TO_SUBMIT)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **present** (`Linm.RMMS.Mobile.iOS/PrivacyInfo.xcprivacy`) | **OK** (prior P2 missing → closed) |
| Play Data safety / landing HTTPS | deferred store submit | **Accept** P2 → `/review-app-submit` |
| family `1` · A4-IPAD | Phase1 DEFER | **OK** |
| Store PNG live | A11/A9/A3/P6 PASS · px OK | **OK** for Review |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · X-Company-Id | **OK** |
| R-02 | API | — | Proxy GET/POST/PUT `patrol/sessions` · **cấm** PatrolHomeController | **OK** |
| R-03 | DTO | — | Dual create/end + live-only hub + emptyActive | **OK** |
| R-14 | Session | — | SESSION-01 POST open · SESSION-02 PUT end detail | **OK** — closed |
| R-15 | Hero | — | HERO-01 · emptyActive `—` · **cấm** QL.1 sample bind | **OK** — closed |
| R-04 | UX | P2 | Sibling CTA toast-only P1 | **Accept** |
| R-05 | Align | — | Must 0 · align_confirm approve (QA) | **OK** |
| R-06 | QA | — | e2e A11/A10/A9/A3/P6/P6-2 PASS · A10-BFF | **OK** · GAP-QA-REAL-01 **closed** |
| R-07 | Store | P2 | Play Data safety / landing HTTPS | **Accept** — app_submit |
| R-08 | Scope | — | map/check-in/attendance live OUT P1 | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** | **OK** |
| R-10 | Gap | — | GAP-MOB-ACT-06 sibling `pending_confirm` | **Defer** |
| R-11 | Gap | — | GAP-QA-A11Y-TAB-FIELD-01 | **Defer** |
| R-16 | Crawl | — | `CLICKABLES.md` absent · Review **cấm** `--crawl` e2e | **OK** — prior QA Maestro · no open GAP-MOB-ACT-03 |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-HOME-SESSION | PASS (prior Dev) |
| T-AND-PAT-HOME-SESSION | PASS |
| T-BE-* | **n/a** |
| T-QA | PASS (`task_56abf022`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must = 0 |

## VERIFY GATE (prior PASS — Review không re-run build/e2e)

| Gate | Result |
|------|--------|
| iOS / Android / BFF build | **PASS** prior Dev `task_523eaa0e` |
| Step 4b | **N/A** |
| `yarn e2e-qa-mobile` | **PASS** prior QA · Review **cấm** re-run |
| roleOnly review · **cấm** start:std / migration | **PASS** |

## Verdict

Hub Tuần đường edit_page SESSION/HERO: security + DTO dual POST/PUT PASS · live-only hub / HERO-01 PASS · QA e2e+align Must 0 PASS · PrivacyInfo present · P2 store/sibling **Accept** · GAP-MOB-ACT-06 / A11Y **Defer**. **Approve**. Pipeline **complete**.

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
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-12T15:29:34.000Z |
| versionGate | rechecked |
| taskId | `task_8c4882de` |
| contentHash | `sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a` |
| bffContentHash | `sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0` |
| priorQaTaskId | `task_56abf022` |
| priorDevTaskId | `task_523eaa0e` |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=rechecked -->
