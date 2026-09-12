# Review — Findings — patrol-offline (mobile list · apply-checkins)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng — apply check-ins |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_0e218573` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e ở role này |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| prior · qa | `task_53265cb6` · e2e `ok:true` · apply-checkins · Must 0 · **confirmed** |
| prior · dev | `task_8bf4b63c` · T-IOS/T-AND-PAT-OFF-APPLY · VERIFY PASS · **confirmed** |
| prior · sa | Step 4b **N/A** · primary `POST patrol/sessions/{id}/check-ins` · optional offline-batch receipt |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy check-ins + offline-batch |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro / build |
| contentHash | `sha256:patrol-offline-delta-apply-checkins-20260912` |
| bffContentHash | `sha256:patrol-offline-bff-apply-checkins-20260912` |
| updatedAt | `2026-09-12T14:55:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `OfflineQueueRepositoryImpl.syncPending` · enqueue `sessionId`+`CreatePatrolCheckInBody` · replay POST check-ins · remove only 2xx · optional `syncOfflineBatch` |
| Android | same DoD · Moshi store v2 · `OfflineSyncException` on all-fail |
| BFF | proxy live · **không** invent queue GET / controller |
| API | primary `POST patrol/sessions/{sessionId}/check-ins` · optional `POST integration/sync/offline-batch` receipt · **cấm** GET queue · **cấm** ERP.* |
| skillVersion | agent-review-mobile **2026.08.19.29** |
| live re-audit | 2026-09-12 after QA `task_53265cb6` · gap=`offline_sync_apply_checkins` |

## Pipeline consistency

| Role | Compact | Hash | Verdict |
|------|---------|------|---------|
| data_analy → po → design → sa → team_lead → dev → qa | all **confirmed** · UNCLEAR none | `…-apply-checkins-20260912` dual | **PASS** — Sync DoD aligned chain-wide |
| UI keep `#sc-patrol-offline` | design/po | — | **PASS** |
| Step 4b | N/A all roles | — | **PASS** |

## Security + permission

| Check | Result |
|-------|--------|
| Token iOS Keychain · **cấm** UserDefaults JWT | **PASS** (prior + unchanged) |
| Token Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + company/timezone headers | **PASS** |
| Local queue only · **cấm** server GET queue | **PASS** |
| Remove queue item only on apply 2xx · partial keep | **PASS** (dual `syncPending`) |
| offline-batch = receipt only · **không** apply DB | **PASS** |
| clear-all / invent permission | **PASS** — absent |
| System alert trên PatrolOffline | **PASS** — toast / EmptyChrome |
| Demo seed / hardcode «3 bản ghi» | **PASS** — live EmptyChrome QA |

## DTO parity (iOS = Android = apply payload)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| display queue fields | Codable | Moshi JSON v2 | **OK** |
| `sessionId` + `checkInBody` enqueue | dual persist | dual persist | **OK** |
| Sync apply | `patrol.submitCheckIn` | same | **OK** |
| Receipt | `syncOfflineBatch(recordCount:)` | same | **OK** |
| Legacy no-payload | skip keep | skip keep | **OK** |
| Incident apply | P2 keep | P2 keep | **OK** |

## UI align (QA shots 2 OS · post apply-checkins)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-patrol-offline` EmptyChrome | A3-CORE | P6-CORE / P6-CORE-2 | **PASS** — live empty · Must **0** |
| Nav TopBar «Trang Chủ» + «Đồng bộ» `#btn-sync` | text kit | text kit | **PASS** |
| Segment Điểm tuần / Sự cố | present | present | **PASS** |
| Hardcode «3 bản ghi» / demo cards | absent | absent | **PASS** |
| Must align mở | — | — | **0** → `align_confirm` **approve** |

Evidence: `qa/store/patrol-offline/` · CAPTURE.md · manifest `ok:true` · task `53265cb6`.

## Store gate (Review note — **không** `READY_TO_SUBMIT`)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | thiếu | **Accept** P2 → `/review-app-submit` |
| Play Data safety | deferred | **Accept** P2 |
| family `1` · A4-IPAD | DEFER Phase 1 | **OK** |
| Store PNG live | A11/A9/A3/P6 **PASS** | **OK** for Review |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · local queue | **OK** |
| R-02 | API | — | Primary check-ins apply · optional offline-batch receipt · cấm GET queue · cấm ERP.* | **OK** |
| R-03 | Sync DoD | — | Replay checkIn · remove only 2xx · partial keep · dual enqueue payload | **OK** |
| R-04 | Data | — | live EmptyChrome · no hardcode count · no demo cards | **OK** |
| R-05 | Align | — | dual chrome Aligned · Must 0 | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · A11/A10/A9/A3/P6/P6-2 · `task_53265cb6` | **OK** |
| R-07 | Store | P2 | PrivacyInfo + Data safety | **Accept** |
| R-08 | UX | P2 | Android mappin / EmptyChrome hint optional | **Accept** |
| R-09 | Step 4b | — | T-BE / migration **N/A** | **OK** |
| R-10 | Gap | — | GAP-MOB-ACT-PAT-OFFLINE-01 patrol-home «Đồng bộ» wire | **Defer** |
| R-11 | Scope | P2 | Incident sync apply keep pending | **Accept** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-OFF-APPLY | PASS (`task_8bf4b63c`) |
| T-AND-PAT-OFF-APPLY | PASS |
| T-BE-* / T-BFF / T-KIT | **n/a** |
| T-QA-PAT-OFFLINE | PASS (`task_53265cb6`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must = 0 |
| T-REVIEW-LIVE | PASS · apply-checkins DoD |

## VERIFY GATE (`task_0e218573` · roleOnly=review)

| Gate | Result |
|------|--------|
| Artifact findings + REVIEW-META + review-compact | **PASS** (this write) |
| STATUS review_confirm | **PASS** → approve |
| Native build / e2e | **skipped** (roleOnly=review · cấm) · prior Dev VERIFY + QA `ok:true` |
| Step 4b BE align | **N/A** |

## Verdict

Delta `offline_sync_apply_checkins`: dual enqueue + replay POST check-ins · remove only 2xx · optional offline-batch receipt · UI keep · QA store live PASS · Must align 0 · hashes chain-aligned. P2 PrivacyInfo/mappin/incident **Accept**. GAP-MOB-ACT-PAT-OFFLINE-01 **Defer**. **Approve** (autopilot). Pipeline **complete**.

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
| generatedAt | 2026-09-12T14:55:00.000Z |
| versionGate | rechecked |
| taskId | `task_0e218573` |
| contentHash | sha256:patrol-offline-delta-apply-checkins-20260912 |
| bffContentHash | sha256:patrol-offline-bff-apply-checkins-20260912 |
| priorQaTaskId | `task_53265cb6` |
| priorDevTaskId | `task_8bf4b63c` |
| dataAnalySkillVersion | 2026.08.19.29 |
| poSkillVersion | 2026.08.19.29 |
| designSkillVersion | 2026.08.19.29 |
| saSkillVersion | 2026.08.19.29 |
| teamLeadSkillVersion | 2026.08.19.29 |
| devSkillVersion | 2026.08.19.29 |
| qaSkillVersion | 2026.08.19.29 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
