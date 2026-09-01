# Review — Findings — patrol-offline (mobile list · Hàng đợi mất sóng)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_94929183` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e ở role này |
| changeScope | `edit_page` · gap=`cleanup_mock_offline_storage` (live pendingCount) |
| prior · qa | `task_fcc96865` · e2e `ok:true` · EmptyChrome live · **confirmed** |
| prior · dev | `task_4fae30f8` · gỡ hardcode «3 bản ghi» · live `pendingCount` · **confirmed** |
| prior · sa | Step 4b **N/A** · reuse `POST integration/sync/offline-batch` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `integration/sync/offline-batch` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro / build |
| updatedAt | `2026-09-01T11:52:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolOfflineView` · `EmptyChromeView` · `OfflineQueueStore.ensureLiveOnly` · Keychain · `syncOfflineBatch` · live `offlineSubFmt` |
| Android | `PatrolOfflineScreen` · `EmptyChrome` · `OfflineQueueStore.ensureLiveOnly` · EncryptedSharedPreferences · live count |
| BFF | catch-all proxy → `integration/sync/offline-batch` · **không** invent controller |
| API | `POST integration/sync/offline-batch` · **cấm** GET queue |
| skillVersion | agent-review-mobile **2026.08.19.29** |
| live re-audit | 2026-09-01 after QA `task_fcc96865` · cleanup_mock_offline_storage |

## Security + permission

| Check | Result |
|-------|--------|
| Token iOS Keychain · **cấm** UserDefaults JWT | **PASS** |
| Token Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + company/timezone headers | **PASS** |
| Local queue only · **cấm** server GET queue | **PASS** |
| IDOR / invent permission | **N/A** — batch sync Integration |
| Location / camera trên slug | **N/A** — list no GPS/camera |
| System `alert` / `AlertDialog` trên PatrolOffline | **PASS** — toast / EmptyChrome |
| Plaintext token / invent BFF queue API | **PASS** |
| Demo seed / hardcode «3 bản ghi» | **PASS** — purged · `offlineSub` empty copy · fmt live |

## DTO parity (iOS = Android = local queue)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| `id` · `kind` · `title` · `location` · `content` · `timestamp` · `isPending` | Codable JSON | pipe SharedPrefs | **OK** |
| `statusLabel` «Chờ gửi» | LinmCopy | LinmCopy | **OK** |
| Demo seed / hardcode count | **removed** · `ensureLiveOnly` · live `pendingCount` | same | **OK** |
| Sync body | `OfflineBatchRequestDto` PascalCase | Retrofit same | **OK** |
| Me badge | ẩn khi 0 · subtitle empty copy | same | **OK** |

## UI align (QA shots 2 OS · post cleanup_mock_offline_storage)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-patrol-offline` EmptyChrome | `A3-CORE` 1320×2868 · title+hint | `P6-CORE` 1080×1920 · title | **PASS** — live empty · Must **0** |
| Nav `LinmTopBar` «Trang Chủ» + «Đồng bộ» | text kit | text kit | **PASS** |
| Segment Điểm tuần / Sự cố | present idx0 | present idx0 | **PASS** |
| Banner weak khi pending | N/A empty | N/A empty | **OK** |
| Hardcode «3 bản ghi» | absent | absent | **PASS** |
| Must align mở | — | — | **0** → `align_confirm` **approve** |

Evidence: `qa/store/patrol-offline/{A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE.md · manifest `ok:true` · task `fcc96865`.

## Store gate (Review note — **không** `READY_TO_SUBMIT`)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | thiếu | **Accept** P2 → `/review-app-submit` |
| Play Data safety / landing HTTPS | deferred | **Accept** P2 |
| family `1` · A4-IPAD | DEFER Phase 1 | **OK** |
| Store PNG live | A11/A9/A3/P6 **PASS** | **OK** for Review |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · local queue | **OK** |
| R-02 | API | — | Chỉ `POST integration/sync/offline-batch` · cấm GET queue | **OK** |
| R-03 | Data | — | cleanup_mock_offline_storage · no hardcode «3 bản ghi» · live pendingCount · EmptyChrome | **OK** |
| R-04 | UX | P2 | Android mappin icon parity (empty list N/A) | **Accept** |
| R-05 | Align | — | dual EmptyChrome chrome Aligned · Must 0 | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · A11/A10/A9/A3/P6/P6-2 · `task_fcc96865` | **OK** |
| R-07 | Store | P2 | PrivacyInfo + Data safety | **Accept** |
| R-08 | Scope | — | sibling enqueue / conflict UI OUT P1 | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** | **OK** |
| R-10 | Gap | — | GAP-MOB-ACT-PAT-OFFLINE-01 patrol-home «Đồng bộ» wire | **Defer** |
| R-11 | Hint | P2 | Android EmptyChrome hint parity optional | **Accept** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-OFFLINE | PASS (cleanup_mock_offline_storage + prior) |
| T-AND-PAT-OFFLINE | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_fcc96865`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must = 0 |
| T-REVIEW-LIVE | PASS · no demo / no hardcode count |

## VERIFY GATE (`task_94929183` · roleOnly=review)

| Gate | Result |
|------|--------|
| Artifact findings + REVIEW-META | **PASS** (this write) |
| STATUS review_confirm | **PASS** → approve |
| Native build / e2e | **skipped** (roleOnly=review · cấm) · prior Dev VERIFY + QA `ok:true` |
| Step 4b BE align | **N/A** |

## Verdict

Post–cleanup_mock_offline_storage: live pendingCount · EmptyChrome dual · hardcode «3 bản ghi» gone · security/API scope PASS · QA store live PASS · Must align 0. P2 PrivacyInfo/mappin/hint **Accept**. GAP-MOB-ACT-PAT-OFFLINE-01 **Defer**. **Approve** (autopilot). Pipeline **complete**.

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
| generatedAt | 2026-09-01T11:52:00.000Z |
| versionGate | rechecked |
| taskId | `task_94929183` |
| contentHashPriorQa | `task_fcc96865` |
| dataAnalySkillVersion | 2026.08.19.27 |
| poSkillVersion | 2026.08.19.23 |
| designSkillVersion | 2026.08.19.24 |
| saSkillVersion | 2026.08.19.22 |
| teamLeadSkillVersion | 2026.08.19.22 |
| devSkillVersion | 2026.08.19.24 |
| qaSkillVersion | 2026.08.19.29 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
