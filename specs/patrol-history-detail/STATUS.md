# STATUS — patrol-history-detail

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| phase | `po` |
| status | `blocked` |
| packKind | `sheet` |
| changeScope | `new_page` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · entry `#sc-patrol-history` · target `#sc-patrol-detail` · `DES-MOB-PAT-DETAIL` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol-history-detail.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions/{id}` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol — **cấm ERP.*** |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| lastRole | `data_analy` · `/agent-data-analy-mobile` · **PASS** · DoR confirmed |
| taskId | `task_b2fb1a98` |
| autoApprove | `ON` |
| dataAnaly | `specs/_data-analy/patrol-history-detail-control-hint.md` · `patrol-history-detail-bff-endpoints.md` · `patrol-history-detail-real-data.md` · `patrol-history-detail-action-tree.md` |
| contentHash | `sha256:patrol-history-detail-control-hint-20260831` |
| realDataHash | `sha256:patrol-history-detail-real-data-20260831` |
| bffContentHash | `sha256:patrol-sessions-getbyid-passthrough` |
| actionTreeHash | `sha256:patrol-history-detail-action-tree-20260831` |
| skillVersion | `2026.08.31.2` (agent-data-analy-mobile) |
| schemaVersion | `2` |
| workflowVersion | `2026.08.31.2` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `rechecked` |
| verifyGate | roleOnly=data_analy · 4 artifacts + ctx **PASS** · **cấm** yarn build/e2e/start:std · Step 4b **N/A** |
| updatedAt | `2026-08-31T03:20:27.530Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (data_analy done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/patrol-history-detail-control-hint.md · patrol-history-detail-bff-endpoints.md · patrol-history-detail-real-data.md · patrol-history-detail-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **blocked** (failed) |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | pending |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/patrol-history-detail.md | pending |
| 4 | dev | implement/ios.md · implement/android.md | pending |
| 5 | qa | qa/scenarios.md · qa/store/patrol-history-detail/CAPTURE.md | pending |
| 6 | review | review/findings.md | pending |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| `task_b2fb1a98` | patrol-history-detail | data_analy | patrol-history ship | **done** | DoR PASS · handoff PO |

## Blockers / open questions

- GAP-MOB-PAT-HIST-DET-TIMELINE-01: không GET check-ins list — timeline demo SSOT P1 · PO/SA chốt P2
- GAP-MOB-PAT-HIST-DET-PACK-01: packKind `sheet` vs demo full screen — PO/Design chốt

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- parent: `patrol-history` · DEAD-BUTTONS `task_b2fb1a98`
