# STATUS — platform-message

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| phase | `sa` |
| changeScope | `edit_page` |
| status | `in_progress` |
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
| mfeStdUrl | `http://localhost:9301/platform-message` |
| prototype.artifact | `specs/platform-message/ui/prototype/platform-message-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/platform-message/ui/prototype/platform-message-prototype.html` |
| peerStdUrl | `http://localhost:9301/platform-message` |
| real_view_parity | `v1` |
| design_confirm | **`approve`** · autopilot · `2026-08-25T17:05:00.000Z` |
| updatedAt | `2026-08-25T17:02:14.945Z` |
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
| 2.2 | sa | be/solution-discovery.md | **in_progress** |  |  |
| 3 | team-lead | task/platform-message.md | pending |  |  |
| 4 | dev | implement/platform-message.md | pending |  |  |
| 5 | qa | qa/scenarios.md | pending |  |  |
| 6 | review | review/findings.md | pending |  |  |

## Confirms

| Gate | Value |
|------|-------|
| autoApprove | **ON** |
| be_repo_confirm | approved (chat) |
| ui_repo_confirm | approved (chat) |
| change_scope | `edit_page` |
| design_confirm | **confirmed** (user Approve board) |
| version_mismatch_action | `recheck_new` · backup `specs/platform-message/_backup/20260825T152000Z` |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| `task_platform_message_20260825` | platform-message | data_analy | — | **done** | edit_page · feature_context |
| `task_0dfd8b78` | platform-message | po | analy done | **done** | `/agent-po` |
| `task_998f4da4` | platform-message | design | po done | **done** | `/agent-design` · modern chat · no DES-GRID |

## Blockers / open questions

- `platform-task` **không** start đến feature này sticky done / await_confirm.
- `rmms-task-integrate` **blocked / later**.
- RMMS `routeMap` path exact (`/cv/:id` · `/su-co/:id`) = TL `route_confirm` sau Design.

## Handoff → SA

| Field | Value |
|-------|-------|
| feature / packKind | `platform-message` / `platform` |
| phase_from / phase_to | design → sa |
| STATUS | design **done** · `design_confirm=approve` |
| design | `specs/platform-message/ui/design.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/platform-message/ui/prototype/platform-message-prototype.html` |
| zones | DES-MSG-TOP · INBOX-L/R · SEC-TAB/CHAT/CMT · LEAVE · **cấm** DES-GRID |
| controlHint | control-hint + design §4 |
| real-data | `specs/_data-analy/features/platform-message-real-data.md` |
| API | cite Medical only · parcel-only · **cấm** invent RMMS chat |
| routeMap | Design §5 prop shape · TL chốt path |
| Next AskQuestion | SA gates per skill · chain ON |

## Retry

- from: `design` · at: `2026-08-25T16:51:03.914Z` · board user Retry step · **resolved** `2026-08-25T17:05:00.000Z`


## Version meta (STATUS)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-25T17:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |

## Links prev

- data-analy → PO: control-hint + real-data abs paths
- PO → Design: `po/requirement.md`
- Design → SA: `ui/design.md` + prototype reviewUrl
- backup STATUS: `specs/platform-message/_backup/20260825T152000Z/STATUS.md`
