# STATUS — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| phase | `done` |
| status | `done` |
| packKind | `sheet` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-chat/ui/prototype/ios/index.html |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/mnt-chat.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T09:43:54.031Z` |
| taskId | `task_ae161e19` |
| roleOnly | `review` · `/agent-review-mobile` · DoR PASS · review_confirm **done** |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/mnt-chat-control-hint.md · mnt-chat-bff-endpoints.md · mnt-chat-real-data.md · mnt-chat-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios · prototype/android | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/mnt-chat.md | **confirmed** |
| 4 | dev | implement/ios.md · android.md · mnt-chat-qa-fix-plan.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/mnt-chat/CAPTURE.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_81d1652d | mnt-chat | qa | dev | **failed** | prior FAIL · qa_fail_rollback → plan |
| task_af84c290 | mnt-chat | dev | task_81d1652d | **done** | qaFixPhase=plan · `mnt-chat-qa-fix-plan.md` · autoApprove |
| task_e0e94a4c | mnt-chat | dev | task_af84c290 | **done** | qaFixPhase=implement · §1–7 PASS · VERIFY GATE PASS |
| task_d743848b | mnt-chat | qa | task_e0e94a4c | **done** | `/agent-qa-mobile` · e2e PASS · visual Aligned · Must 0 |
| task_ae161e19 | mnt-chat | review | task_d743848b | **done** | `/agent-review-mobile` · review_confirm **done** · Must 0 |

## Blockers / open questions

| ID | Issue | Decision / next |
|----|-------|-----------------|
| **R-QA-01** | QA prior FAIL | **CLOSED** · re-QA PASS |
| **GAP-SA-ANALY-EMPTY-01** | control-hint + real-data stub | **CLOSED** |
| **GAP-SA-BFF-MISS-01** | thiếu bff-endpoints · action-tree | **CLOSED** |
| **GAP-QA-E2E-SKIP-UPSTREAM-01** / **STORE-01/03** | A3/P6 PNG · e2e | **CLOSED** · `2026-09-01T09:37Z` |
| **GAP-QA-NO-IMPLEMENT-01** | thiếu screen | **CLOSED** |
| **GAP-SA-CTX-01** | CTX MISSING | **CLOSED** |
| **GAP-MOB-UX-01** | ux/proto stub | **CLOSED** |
| VERIFY GATE | iOS · Android · BFF | **PASS** `2026-09-01T09:30Z` |
| **GAP-MOB-EDIT-01** | Lock chat screen | **Cấm** worker revert `#i-chat` → toast · **CLOSED** (review) |
| **GAP-MSG-HUB-01** | SignalR | **DEFER** · Notification owns hub · non-block |

**Lock 2026-08-29 `/edit-mobile-feature` + `/integrate-message-service`:** `#sc-mnt-chat` chat style · kit composer/thread · GET/POST `maintenance/work-orders/{id}/messages`. **Cấm** worker revert toast-only.

## Links

- data-analy → po → ui → be → task → implement → qa → review **complete**
- native: e2eQa ON → prior `yarn e2e-qa-mobile` PASS — **cấm** mfeStdUrl
- **Next:** none · pipeline **done**
- **Queue:** `task_ae161e19` review **done** → completed
