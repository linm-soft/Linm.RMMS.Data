# Review — Findings — patrol-history (mobile list · Lịch sử ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| title | [Mobile] [Tuần đường] -> Lịch sử phiên |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_f42bd832` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_7ecfbf20` · `qa/scenarios.md` · **confirmed** · e2e `ok: true` |
| prior · dev | `task_c3705a2f` · `implement/{ios,android}.md` · **confirmed** |
| prior · sa | `task_46949663` · `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `GET patrol/sessions` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-08-20T05:52:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolHistoryView` · `PatrolHistoryViewModel` · `PatrolHistoryUiState` · `FetchPatrolHistoryUseCase` · `PatrolHistoryCopy.demoItems` |
| Android | `PatrolHistoryScreen` · `PatrolHistoryViewModel` · `PatrolHistoryUiState` · same use case · `historyBadgeTitle()` / `historySubtitle()` |
| BFF | `MobileApiProxyController` catch-all → `GET patrol/sessions` · **cấm** `PatrolHistoryController` |
| API | `GET patrol/sessions` Bearer · client search filter · demo fallback ≥3 rows |
| skillVersion | agent-review-mobile **2026.08.19.29** |
| live re-audit | 2026-08-20 after QA `task_7ecfbf20` · VERIFY GATE recheck `task_f42bd832` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` + `X-Timezone` (ApiClient / AuthInterceptor) | **PASS** |
| IDOR / invent permission | **N/A** — read-only sessions list · no per-record mutation |
| Location / camera Info.plist + Manifest | **N/A** — list P1 · no live GPS capture |
| `alert` / `UIAlert` / `AlertDialog` trên PatrolHistory | **PASS** — `LinmToast` / session toast only |
| Plaintext token / invent `GET patrol-history` / `PatrolHistoryController` | **PASS** — proxy `patrol/sessions` only |
| Foot «Phiên bản Gói» / WebView | **PASS** — không ship |
| Hardcode badge / watermark | **PASS** — 4 SSOT demo rows · no process text |

## DTO parity (iOS = Android = BFF)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| Session list | `PatrolRepositoryImpl` GET `patrol/sessions` | same Retrofit path | **OK** |
| Demo fallback | `PatrolHistoryCopy.demoItems` (4 rows) | same SSOT | **OK** — PAT-…0014/0009/0021/0015 |
| Badge **Hoàn thành** | `patrol.history.badge.done` | `historyBadgeTitle()` same key | **OK** — GAP-F-PAT-HIST-01 closed |
| Badge **Mất sóng** | `offlineQueued` + status map | `isHistoryOffline` + mapper | **OK** — GAP-F-PAT-HIST-03 closed |
| Client search | `PatrolHistoryUiState.filteredItems` | same filter logic | **OK** |
| Row tap | toast **Chi tiết phiên** · **cấm** detail push P1 | same | **OK** |
| Filter tap | toast Lọc | same | **OK** |
| Nav back | leading **Tuần đường** | `LinmTopBar` `leadingText` = `patrol.title` | **OK** — GAP-AND-NAV-01 closed |

## UI align (QA shots 2 OS)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-patrol-history` list | `A3-CORE` | `P6-CORE` | **PASS** — cùng zone · Must **0** |
| Title **Lịch sử ca** | same | same | **PASS** |
| Nav ← **Tuần đường** · **Lọc** | same | same | **PASS** |
| Search `history-search` | present | present | **PASS** |
| Rows 4 · `.row.no-icon` · chevron | `leadingSlot: 0` | `leading=null` · `leadingSlot=0.dp` | **PASS** — GAP-AND-ROW-01 closed |
| Badges Đang tuần · Hoàn thành · Bỏ sót · Mất sóng | same 4 | same 4 | **PASS** |
| Tab 5 field selected | Tuần đường on | Tuần đường on | **PASS** |
| Entry hub `row-quick-patrol-history` | Maestro PASS | Maestro PASS | **PASS** — route_a |
| Must align mở | — | — | **0** → `align_confirm` **approve** |

Evidence: `qa/store/patrol-history/{A3-CORE,P6-CORE,P6-CORE-2,A11-LAUNCH,A9-LOGIN}.png` · CAPTURE.md · manifest `ok: true`.

## Store gate (Review note — **không** `READY_TO_SUBMIT` ở role này)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **thiếu** file app iOS | **Accept** P2 → `post_review` / `/review-app-submit` — **không** chặn list `done` |
| Play Data safety form | deferred store submit | **Accept** P2 |
| Landing HTTPS live | deferred | **Accept** P2 |
| family `1` → **cấm** listing A4 | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** | **OK** |
| Store PNG live (QA) | A11/A9/A3/P6 **PASS** · px 1320×2868 / 1080×1920 | **OK** for Review · listing official → `/store-image-capture` |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip` (Recommended — chưa store submit).

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · read-only list scope | **OK** |
| R-02 | API | — | Chỉ `GET patrol/sessions` proxy · **cấm** `PatrolHistoryController` / invent history API | **OK** |
| R-03 | DTO | — | Session list dual parity · badge Hoàn thành/Mất sóng · demo fallback SSOT | **OK** |
| R-04 | UX | P2 | Tap row → toast **Chi tiết phiên** · filter toast · **cấm** detail push P1 | **Accept** — scope list · QA Must 0 |
| R-05 | Align | — | iOS↔Android zone kit parity · nav · search · rows · badges · tab | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · cases A11,A10,A9,A3,P6,P6-2 | **OK** |
| R-07 | Store | P2 | thiếu `PrivacyInfo.xcprivacy` + Data safety / landing | **Accept** — chặn chỉ khi `app_submit` |
| R-08 | Scope | — | `patrol-detail` form · filter sheet · GET `{id}` **OUT** P1 | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** · reuse `GET patrol/sessions` | **OK** |
| R-10 | Gap | — | GAP-MOB-ACT-06 sibling `patrol-detail` `pending_confirm` · **cấm** auto start | **Defer** — non-block |
| R-11 | Gap | — | GAP-QA-P6-FOLD-SAME-01 P6-CORE ≈ P6-CORE-2 (list ≤1 fold) | **Defer** — non-block |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-HIST | PASS (prior Dev + Review re-audit) |
| T-AND-PAT-HIST | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_7ecfbf20`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |

## VERIFY GATE (`task_f42bd832` recheck)

| Gate | Result |
|------|--------|
| iOS `xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew :app:assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| BFF `dotnet build` | **PASS** · 0 Warning(s) · 0 Error(s) |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok: true`) — Review không re-run |

## Verdict

List Lịch sử ca dual-native: security token/API scope PASS · badge Hoàn thành/Mất sóng GAP fixes **Closed** · UI align 0 Must · QA store live PASS · VERIFY GATE native+BFF PASS. P2 PrivacyInfo/sibling detail toast-only **Accept** đến `post_review`/`app_submit`. GAP-MOB-ACT-06 · GAP-QA-P6-FOLD-SAME-01 **Defer** P1. **Approve** (autopilot). Pipeline **complete**.

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
| generatedAt | 2026-08-20T05:52:00.000Z |
| versionGate | rechecked |
| taskId | `task_f42bd832` |
| contentHashPriorQa | `task_7ecfbf20` |
| dataAnalySkillVersion | 2026.08.19.27 |
| poSkillVersion | 2026.08.19.23 |
| designSkillVersion | 2026.08.19.24 |
| saSkillVersion | 2026.08.19.22 |
| teamLeadSkillVersion | 2026.08.19.22 |
| devSkillVersion | 2026.08.19.24 |
| qaSkillVersion | 2026.08.20.03 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
