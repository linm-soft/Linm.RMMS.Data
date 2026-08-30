# STATUS — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO+Design+SA+TL+Dev+QA+Review chốt · form send · surface **screen** `#sc-feedback` · GAP-MOB-FB-PACK-01 **closed**) · ≠ web `list` |
| gap | — |
| mode | `feature_context` · enhance native stub → `#sc-feedback` |
| runMode | `full_pipeline` |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| demo | `specs/feedback/ui/prototype/{ios,android}/index.html` `#sc-feedback` · `DES-MOB-FEEDBACK` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/feedback.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/feedbacks`** · DOMAIN-MAP Integration · **cấm ERP.*** |
| domain | **Integration** |
| taskId | `task_de25913a` |
| lastRole | `review` · `/agent-review-mobile` · **PASS** · `review_confirm=done` |
| autoApprove | `ON` |
| e2eQa | ON · prior QA `ok:true` · Maestro · store-px · Review **cấm** re-run e2e |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-mobile-workflow-skill-v1` |
| workflowVersion | `2026.08.25.01` |
| updatedAt | `2026-08-29T00:25:18.028Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/feedback-control-hint.md` · `feedback-bff-endpoints.md` · `feedback-real-data.md` · `feedback-action-tree.md` | **confirmed** |
| 1 | po | po/requirement.md (mobile § Current vs New) | **confirmed** |
| 2.1 | design | ui/design.md + ux-analy + dual prototype + demo-parity | **confirmed** |
| 2.2 | sa | be/solution-discovery.md (mobile) · be/solution-discovery-web.md (giữ) | **confirmed** |
| 3 | team-lead | task/feedback.md (mobile) · task/feedback-web.md (giữ) | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/feedback · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md (mobile) · findings-web.md (giữ) | **done** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (packet `Linm.RMMS.WebService`) |
| ios_repo_confirm | **approve** |
| android_repo_confirm | **approve** |
| route_confirm | **route_a** (autoApprove · Me → push `#sc-feedback`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **confirmed** (user Approve board) |
| kit_missing_confirm | **N/A** (kit mapped) |
| ios_test_phase | **phase1_iphone** (autoApprove · A4-IPAD DEFER) |
| store_qa | **run_store** |
| align_confirm | **approve** (autoApprove · Must 0) |
| post_review | **skip** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_be769223 | feedback | data_analy | — | **completed** | roleOnly · `/agent-data-analy-mobile` |
| task_fddeb2c5 | feedback | po | data_analy | **completed** | roleOnly · `/agent-po-mobile` |
| task_fc39397c | feedback | design | po | **completed** | roleOnly · `/agent-design-mobile` |
| task_69588f17 | feedback | sa | design | **completed** | roleOnly · `/agent-sa-mobile` |
| task_dc436294 | feedback | team_lead | sa | **completed** | roleOnly · `/agent-tl-mobile` |
| task_f834eb68 | feedback | dev | team_lead | **completed** | roleOnly · `/agent-dev-ios` + `/agent-dev-android` |
| task_bee5e97e | feedback | qa | dev | **completed** | roleOnly · `/agent-qa-mobile` · e2eQa ok:true · visual Aligned |
| task_de25913a | feedback | review | qa | **completed** | roleOnly · `/agent-review-mobile` · review_confirm=done · Must 0 |
| *(prior web)* | feedback | po→review | — | **completed** | web Kind B — **giữ** · `review/findings-web.md` |

### Mobile TL emit (task/feedback.md)

| id | status | notes |
|----|--------|-------|
| T-CTX-01 | **done** | CTX path align → `integration/feedbacks` |
| T-BE-01 | **n/a verify** | Create live PASS |
| T-BE-02 | **n/a** | schema Signed |
| T-BFF-01 | **n/a verify** | catch-all · `dotnet build` PASS |
| T-PERM-01 | **done** | FE create gate stub |
| T-IOS-ME-01 | **done** | Me → push |
| T-IOS-FB-01 | **done** | `#sc-feedback` + Create |
| T-AND-ME-01 | **done** | Me entry Android |
| T-AND-FB-01 | **done** | Compose parity |
| T-QA-TAB-01 | **done** | Me tab · no invent segment |
| T-QA-FB-01 | **done** | e2eQa · Maestro · store · align |
| T-REVIEW-SEC | **done** | Keychain / Encrypted · X-Company-Id · no invent API |
| T-REVIEW-DTO | **done** | dual = BE CreateAppFeedbackRequest |
| T-REVIEW-ALIGN | **done** | Must 0 · vision Read A3+P6 |

### Mobile gaps

| id | status | notes |
|----|--------|-------|
| GAP-MOB-FB-NAV-01 | **closed** | Me → push `#sc-feedback` |
| GAP-MOB-FB-SCR-01 | **closed** | Screen DES-MOB-FEEDBACK IN P1 |
| GAP-MOB-FB-BODY-01 | **closed** | Textarea bind SSOT |
| GAP-MOB-FB-SEND-01 | **closed** | POST create + toast |
| GAP-MOB-FB-DATA-01 | **closed** | BFF `integration/feedbacks` |
| GAP-MOB-FB-PACK-01 | **closed** | packKind `sheet` · surface screen |
| GAP-MOB-FB-CAT-01 | **closed (P1)** | default `de-xuat` · no pill UI |
| GAP-MOB-FB-CTX-PATH-01 | **closed** | T-CTX-01 done |
| GAP-DES-DEMO-RESCAN-01 | **closed** | hash skip |

## Blockers / open questions

- Mobile pipeline **complete** · Review PASS.
- Email/notify + media attach = P2 (không block).
- Auth `[RequirePermission]` = debt P1 (Accept Review).
- **Cấm** ERP.* · **cấm** mfeStdUrl trên lane mobile.

## Links

- Review: `specs/feedback/review/findings.md` · `REVIEW-META.json` · `findings-web.md` (Kind B giữ)
- QA: `specs/feedback/qa/scenarios.md` · `qa/store/feedback/` · `ui/review/align-ux.md`
- Dev: `specs/feedback/implement/ios.md` · `implement/android.md`
- Prototype dual: `specs/feedback/ui/prototype/{ios,android}/index.html`

## Handoff → done

| Field | Value |
|-------|-------|
| feature | `feedback` |
| lane | `mobile` |
| from | `review` · PASS · task `task_de25913a` |
| phase | `done` |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| changeScope | `edit_page` |
| packKind | **`sheet`** (surface screen) |
| autoApprove | ON |
| e2eQa | ON · done · **cấm** start:std / mfeStdUrl |
| review_confirm | **done** |
| align | Must **0** · Aligned |
| post_review | **skip** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T00:22:10.000Z |
| versionGate | rechecked |
| contentHash | sha256:feedback-mobile-review-status-20260829 |
| reviewHash | sha256:feedback-mobile-review-20260829 |
| taskId | `task_de25913a` |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
