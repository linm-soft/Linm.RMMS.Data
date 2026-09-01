# Review — Findings — ops (mobile list · Thông báo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| title | [Mobile] Thông báo |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_992292aa` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e this role |
| changeScope | `edit_page` · gap=`cleanup_mock` |
| prior · qa | `task_1f014c56` · `qa/scenarios.md` · **confirmed** · e2e `ok:true` |
| prior · dev | `task_708dcc0b` · `implement/{ios,android}.md` · **confirmed** · live-only |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `notification/*` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA PASS · Review **không** re-run Maestro |
| updatedAt | `2026-09-01T02:40:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `OpsView` · `OpsViewModel` · `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` · **no** `OpsCopy.demoItems` |
| Android | `OpsScreen` · `OpsViewModel` · EncryptedSharedPreferences · live-only |
| BFF | catch-all → `notification/inbox*` · **không** invent OpsController |
| API | `GET notification/inbox` · `POST …/{id}/mark-read` · optional overview P2 |
| contentHash | `sha256:ops-mobile-cleanup-mock-20260901` |
| live re-audit | 2026-09-01 after QA `task_1f014c56` · cleanup_mock |

## Security + permission

| Check | Result |
|-------|--------|
| Token iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token Android `EncryptedSharedPreferences` | **PASS** |
| Bearer + `X-Company-Id` + `X-Timezone` | **PASS** |
| IDOR `{id}` mark-read | **PASS** — POST scoped inbox id · no demo-* path |
| Location / camera Info.plist + Manifest trên slug `ops` | **N/A** |
| `alert` / UIAlert / AlertDialog trên Ops | **PASS** — toast kit only |
| Plaintext token / fork `api/v1/ops` | **PASS** — proxy `notification/*` only |
| Foot «Phiên bản Gói» / watermark mẫu | **PASS** — none |

## DTO parity (iOS = Android = Notification)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| `id` · `title` · `subtitle` · `isUnread` | `OpsInboxItem` via Notification repo | same | **OK** |
| badge `Mới`/`Đã đọc` | `ops.badge.*` | same | **OK** |
| Demo fallback | **removed** (`OpsCopy` toast-only) | **removed** | **OK** — **GAP-MOB-REAL-02** closed |
| Use cases | `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` | same | **OK** |

## Real data (5e)

| Check | Result |
|-------|--------|
| GAP-MOB-REAL-02 `demoItems`/hardcode nguồn màn | **CLOSED** — fail→`[]`+toast loadFail · empty→EmptyChrome |
| GAP-QA-REAL-01 QA chứng BFF/DB | **CLOSED** — QA hit BFF:5202 · API inbox 500 → EmptyChrome live |
| Copy loadFail | `Không tải được danh sách thông báo.` · **cấm** «Đang dùng dữ liệu mẫu» | **PASS** |

## UI align (QA shots 2 OS · prior align)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-ops` EmptyChrome `ops-empty` | A3-CORE | P6-CORE | **PASS** — Must **0** |
| Toast loadFail · no demo rows | same | same | **PASS** |
| Kit `LinmTopBar` · list chrome | QA dual | QA dual | **PASS** |
| Tab in-screen | none | none | **PASS** |
| Must align mở | — | — | **0** → `align_confirm` **approve** (QA) |

Evidence: `qa/store/ops/` · `ui/review/align-ux.md` · bugs Must 0. Review **không** re-crawl e2e (roleOnly · VERIFY GATE).

## Store gate (note — **không** READY_TO_SUBMIT)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | thiếu app iOS | **Accept** P2 → `/review-app-submit` |
| Play Data safety | deferred | **Accept** P2 |
| Landing HTTPS | deferred | **Accept** P2 |
| family `1` · A4-IPAD | DEFER Phase 1 | **OK** |
| Store PNG QA | A11/A9/A3/P6 PASS | **OK** |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · X-Company-Id | **OK** |
| R-02 | API | — | Chỉ `notification/*` proxy · **cấm** fork ops API | **OK** |
| R-03 | DTO | — | OpsInboxItem dual · live-only | **OK** |
| R-04 | Real | — | cleanup_mock · no demoItems · GAP-MOB-REAL-02 closed | **OK** |
| R-05 | Align | — | Must 0 · EmptyChrome live | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS `task_1f014c56` | **OK** |
| R-07 | UX | Should | GAP-MOB-UX-COMP-OPS-01 Android TopBar trailing | **DEFER** non-block |
| R-08 | BE | Should | GAP-BE-OPS-INBOX-500 inbox GET 500 | **DEFER** BE follow-up · FE OK |
| R-09 | Store | P2 | PrivacyInfo / Data safety / landing | **Accept** · post_review skip |
| R-10 | Scope | — | Form create / SignalR / Command OUT P1 | **OK** |
| R-11 | Step 4b | — | T-BE / migration **N/A** | **OK** |

**P0 / Must align / GAP-MOB-REAL-02 / GAP-QA-REAL-01 / GAP-MOB-ACT-03:** none open.

## Task gate

| Task | Result |
|------|--------|
| T-IOS-OPS | PASS (Dev cleanup + Review re-audit) |
| T-AND-OPS | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_1f014c56`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must = 0 |
| T-REVIEW-REAL | PASS |

## VERIFY GATE (`task_992292aa` · roleOnly=review)

| Gate | Result |
|------|--------|
| Role artifact + STATUS | **PASS** this turn |
| yarn build / e2e / start:std | **cấm** (roleOnly review) |
| Prior QA e2e-qa-mobile | **PASS** |
| Prior BFF build | **PASS** (QA) |
| Step 4b | **N/A** · skip |

## Verdict

List Thông báo dual-native post-`cleanup_mock`: security/DTO/API PASS · live-only EmptyChrome PASS · align Must 0 · QA e2e PASS. Open Should DEFER non-block. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** (autoApprove) |
| Next | visual/Should → `/edit-mobile-feature` optional · BE inbox 500 follow-up · **cấm** re-run full pipeline |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-09-01T02:40:00.000Z |
| versionGate | rechecked |
| taskId | `task_992292aa` |
| contentHashPriorQa | `task_1f014c56` |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
