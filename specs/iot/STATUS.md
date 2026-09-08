# STATUS — iot

| Field | Value |
|-------|-------|
| feature | `iot` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/iot.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` |
| mfeStdRoute | `/iot` |
| mfeStdUrl | `http://localhost:9309/iot` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| taskId | `task_4940556f` |
| updatedAt | `2026-09-05T04:52:18.053Z` |
| contentHash | `sha256:review-pass-iot-qa-sha256:qa-pass-iot-e2e` |
| skillVersion | `2026.08.19.04` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/prototype/index.html` |
| prototype.artifact | `specs/iot/ui/prototype/` |
| peerStdUrl | `http://localhost:9309/iot` |
| real_view_parity | `v1` |
| solution_confirm | `approve` |
| route_confirm | `route_a` `/iot` (autoApprove) |
| be_repo_confirm | `Linm.RMMS.WebService` (autoApprove) |
| ui_repo_confirm | `Linm.Web.RMMS.Iot` (autoApprove) |
| review_confirm | `done` (autoApprove) |
| build.mfe | `PASS` yarn build |
| build.api | `PASS` docker rebuild · devices 200 |
| e2e.qa | `PASS` S0/S1/QA-20 · chrome channel |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/iot-control-hint.md · iot-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/iot.md · handoff/team_lead-compact.md · ui/iot-filter-bar.md | **confirmed** |
| 4 | dev | implement/iot.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md · qa/screens | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_2f176635 | iot | data_analy | — | **done** | roleOnly · feature_context · new_page |
| task_80e6c63f | iot | po | data_analy | **done** | roleOnly · autoApprove · Q-IOT-* chốt · GAP-IOT-02→SA |
| task_6ee25171 | iot | design | po | **done** | roleOnly · autoApprove · reviewUrl · DES-GRID A–D · Full 5col |
| task_5c19e499 | iot | sa | design | **done** | roleOnly · autoApprove · devices CRUD plan · IOT- · gates |
| task_903b7df2 | iot | team_lead | sa | **done** | roleOnly · autoApprove · route `/iot` · T-* list pack · compact |
| task_9e4e0bb1 | iot | dev | team_lead | **done** | roleOnly · BE+FE devices · build PASS |
| task_b2f79652 | iot | qa | dev | **done** | `/agent-qa` · e2e S0/S1/QA-20 PASS · compact · → Review |
| task_4940556f | iot | review | qa | **done** | `/agent-review` · PASS · `review_confirm=done` · compact |

## Blockers / open questions

- Auth `[RequirePermission]` stub debt (parity Camera) — accepted P2
- GAP-QA-IOT-TSC-01 typecheck drift (P2)
- GAP-QA-E2E-02 yarn e2e-qa playwright install (P2 · chrome fallback PASS)
- REV-UI form route SearchInput testid forward (P2)

## Links

- data-analy → po → ui → be → task → implement → qa → review **done**
- mfeStdUrl: `http://localhost:9309/iot`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/prototype/index.html`
- compact: `specs/iot/handoff/review-compact.md`
- findings: `specs/iot/review/findings.md`
- prior: `specs/iot/handoff/qa-compact.md`
