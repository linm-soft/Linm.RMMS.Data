# STATUS — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| phase | `dev` |
| status | `await_confirm` |
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
| updatedAt | `2026-08-29T18:29:10.560Z` |
| taskId | `task_af84c290` |
| roleOnly | `dev` · `/agent-dev-ios` + `/agent-dev-android` · **qaFixPhase=plan** · plan written · board **`qa_fix_plan`** |

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
| 4 | dev | implement/mnt-chat-qa-fix-plan.md · (implement/ios.md · android.md sau Approve) | **await_confirm** |
| 5 | qa | qa/scenarios.md · qa/store/mnt-chat/CAPTURE.md · qa/bugs/mnt-chat.md | **blocked** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_81d1652d | mnt-chat | qa | dev | **failed** | DoR FAIL · **không** e2e · `qa_fail_rollback` Approved → Dev plan |
| task_af84c290 | mnt-chat | dev | task_81d1652d | **pending_confirm** | qaFailFix=1 · qaFixPhase=**plan** · wrote `implement/mnt-chat-qa-fix-plan.md` · **cấm** Write code · board **`qa_fix_plan`** Await Approve |
| — | mnt-chat | dev | task_af84c290 | **pending** | sau Approve → `qaFixPhase=implement` · plan §1–7 · VERIFY GATE · rồi `/agent-qa-mobile` |

## Blockers / open questions

| ID | Issue | Decision / next |
|----|-------|-----------------|
| **R-QA-01** | QA `task_81d1652d` verdict FAIL | Plan written · chờ **`qa_fix_plan`** Approve → implement → re-QA |
| **GAP-SA-ANALY-EMPTY-01** | control-hint + real-data vẫn stub draft ~309B | Implement §1 backfill · **cấm** skip |
| **GAP-SA-BFF-MISS-01** | thiếu `mnt-chat-bff-endpoints.md` · `mnt-chat-action-tree.md` | Implement §2 author |
| **GAP-QA-E2E-SKIP-UPSTREAM-01** / **STORE-01/03** | Chưa A3/P6 PNG · e2e chưa chạy sau lock | Sau implement VERIFY PASS → `/agent-qa-mobile` · `yarn e2e-qa-mobile` |
| **GAP-QA-NO-IMPLEMENT-01** | (QA-time) thiếu screen | **code PRESENT** post `/edit-mobile-feature` — implement verify only · **cấm** toast revert |
| **GAP-SA-CTX-01** | (QA-time) CTX MISSING | **CLOSED** — `docs/context/features/mnt-chat.md` present |
| **GAP-MOB-UX-01** | (QA-time) ux/proto stub | **CLOSED** — ux-analy + proto filled |
| VERIFY GATE | iOS xcodegen · Android assembleDebug · BFF dotnet build | **chưa** chạy ở plan phase · **bắt buộc** ở implement |
| **GAP-MOB-EDIT-01** | Lock chat screen | **Cấm** worker revert `#i-chat` → toast |

**Lock 2026-08-29 `/edit-mobile-feature` + `/integrate-message-service`:** `#sc-mnt-chat` chat style · kit composer/thread · GET/POST `maintenance/work-orders/{id}/messages`. **Cấm** worker revert toast-only.

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- **Next (board):** Approve `qa_fix_plan` → Dev `qaFixPhase=implement` per `implement/mnt-chat-qa-fix-plan.md`
- **Queue:** `task_af84c290` plan Done → **`pending_confirm` `qa_fix_plan`** · **cấm** implement/e2e đến khi Approve
