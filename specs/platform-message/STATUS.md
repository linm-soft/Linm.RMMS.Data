# STATUS — platform-message

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| phase | `qa` |
| changeScope | `edit_page` |
| status | `await_confirm` |
| demo | `N/A` (packKind=platform · **cấm** `task.html` mock SSOT · đọc live `Linm.Web.Message`) |
| packKind | `platform` (PO confirm) |
| context | `docs/context/features/platform-message.md` · hub `docs/context/26-MESSAGE-PARCEL.md` |
| plan | `{RulesRoot}/docs/plan/linm-message-service/README.md` |
| mfe | `D:\MFE-CORE\Linm.Web.Message` (`@linm/message`) |
| backend | parcel-only · cite Medical `MessagesController` · **cấm** RMMS.WebService chat · Task messages → TaskService (sau `platform-task`) |
| be_repo_confirm | `approved` · parcel-only · via=chat · `2026-08-25T15:15:00.000Z` |
| ui_repo_confirm | `approved` · `D:\MFE-CORE\Linm.Web.Message` · via=chat · `2026-08-25T15:15:00.000Z` |
| runMode | `full_pipeline` |
| editTask | `1` |
| hasAnaly | `1` |
| skill | `/implement-message-service` · `/integrate-message-service` · `/review-message-service` |
| workflowVersion | `2026.08.25.02` |
| mfeStdRoute | `/platform-message` (TL draft · route_confirm=route_a) |
| mfeStdUrl | `http://localhost:9301/platform-message` |
| prototype.artifact | `specs/platform-message/ui/prototype/platform-message-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/platform-message/ui/prototype/platform-message-prototype.html` |
| peerStdUrl | `http://localhost:9301/platform-message` |
| real_view_parity | `v1` |
| design_confirm | **`approve`** · autopilot · `2026-08-25T17:05:00.000Z` |
| solution_confirm | **`approve`** · autopilot · `2026-08-25T17:20:00.000Z` |
| route_confirm | **`route_a`** · autopilot · peer `/platform-message` · routeMap `task=/cv/:id` · `incident=/su-co/:id` · `ticket=/tickets/:id` · `2026-08-26T00:24:00.000Z` |
| msg_kind | **`parcel_only`** |
| qa_verdict | **FAIL** · `GAP-QA-E2E-02` · `GAP-QA-E2E-01` · `2026-08-25T17:56:00.000Z` |
| updatedAt | `2026-08-25T18:00:39.445Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status | skillVer | versionGate |
|------|-------|----------|--------|----------|-------------|
| 0 | data-analy | `_data-analy/features/platform-message-control-hint.md` + `platform-message-real-data.md` | **done** | 2026.08.25.01 | rechecked |
| 1 | po | po/requirement.md | **done** | 2026.08.25.02 | rechecked |
| 2.1 | design | ui/design.md + ui/prototype/platform-message-prototype.html | **done** | 2026.08.25.02 | rechecked |
| 2.2 | sa | be/solution-discovery.md | **done** | 2026.08.24.01 | rechecked |
| 3 | team-lead | task/platform-message.md | **done** | 2026.08.19.04 | ok |
| 4 | dev | implement/platform-message.md | **done** | 2026.08.25.02 | ok |
| 5 | qa | qa/scenarios.md | **blocked** · FAIL e2e | 2026.08.25.02 | ok |
| 6 | review | review/findings.md | pending |  |  |

## Confirms

| Gate | Value |
|------|-------|
| autoApprove | **ON** |
| be_repo_confirm | approved (chat) |
| ui_repo_confirm | approved (chat) |
| change_scope | `edit_page` |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| route_confirm | **confirmed** · `route_a` · autopilot |
| msg_kind | `parcel_only` |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_na` |
| sa_shared_table | `share_na` |
| version_mismatch_action | `recheck_new` · backup `specs/platform-message/_backup/20260825T152000Z` |
| build_verify | FE `yarn build` **PASS** · Step 4b **N/A** · QA e2e **FAIL** · `2026-08-25T17:56:00.000Z` |
| qa_fail_rollback | **pending_confirm** (board) · **cấm** autoApprove skip |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| `task_platform_message_20260825` | platform-message | data_analy | — | **done** | edit_page · feature_context |
| `task_0dfd8b78` | platform-message | po | analy done | **done** | `/agent-po` |
| `task_998f4da4` | platform-message | design | po done | **done** | `/agent-design` · modern chat · no DES-GRID |
| `task_8aceb84c` | platform-message | sa | design confirmed | **done** | `/agent-sa` · solution_confirm approve · parcel_only · Step 4b N/A |
| `task_8b762097` | platform-message | team_lead | sa confirmed | **done** | `/agent-team-lead` · task pack · route_confirm route_a · **cấm** e2e |
| `task_992a4353` | platform-message | dev | TL done | **done** | `/agent-dev` · `/implement-message-service` · ChatSectionParcel · common bump · yarn build PASS |
| `task_abf2c4eb` | platform-message | qa | Dev done | **failed** | `/agent-qa` · e2eQa ON · GAP-QA-E2E-02/01 · **cấm** completed |

## Blockers / open questions

- **QA blocked:** GAP-QA-E2E-02 — thiếu `yarn start:std` + `src/standalone/*` · API `:5101` không listen (Linux `:5111`).
- GAP-QA-E2E-01 — **0** PNG S0/S1/QA-20.
- `platform-task` **không** start đến feature này sticky done / await_confirm.
- `rmms-task-integrate` **blocked / later**.
- RMMS `routeMap` path exact (`/cv/:id` · `/su-co/:id`) = **LOCKED** TL `route_confirm=route_a`.
- GAP-PT-INBOX-01 **DEFER** (federate inbox · **cấm** Message.Api P1).

## Handoff → Dev (qa_fail_rollback)

| Field | Value |
|-------|-------|
| feature / packKind | `platform-message` / `platform` |
| phase | **qa blocked** · review **pending** |
| STATUS | qa **FAIL** · `route_confirm=route_a` · `msg_kind=parcel_only` · FE build PASS · e2e FAIL |
| scenarios | `specs/platform-message/qa/scenarios.md` |
| gaps | GAP-QA-E2E-02 · GAP-QA-E2E-01 |
| Next | board Approve **`qa_fail_rollback`** → Dev plan `implement/platform-message-qa-fix-plan.md` |
| **Cấm** | QA completed · phase=done · tự sửa MFE · chain Review |

## Retry

- from: `design` · at: `2026-08-25T16:51:03.914Z` · board user Retry step · **resolved** `2026-08-25T17:05:00.000Z`

## Version meta (STATUS)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-25T17:56:00.000Z |
| versionGate | ok |
| contentHash | sha256:daf1ced022aff63ddd233216495bd4da48b1f99e61948d1f62fd9d1c0482b27b |
| taskArtifact | `specs/platform-message/qa/scenarios.md` |
| qaSkill | agent-qa · 2026.08.25.02 |

## Links prev

- data-analy → PO: control-hint + real-data abs paths
- PO → Design: `po/requirement.md`
- Design → SA: `ui/design.md` + prototype reviewUrl
- SA → TL: `be/solution-discovery.md` · solution_confirm approve · parcel_only
- TL → Dev: `task/platform-message.md` · route_confirm route_a · `/implement-message-service`
- Dev → QA: `implement/platform-message.md` · build PASS · ChatSectionParcel export
- QA → Dev (fail): `qa/scenarios.md` · qa_fail_rollback
- backup STATUS: `specs/platform-message/_backup/20260825T152000Z/STATUS.md`
