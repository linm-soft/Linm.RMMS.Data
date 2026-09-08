# STATUS — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| phase | `qa` |
| status | `await_confirm` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` + upload media (W4-1 W4-2) |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/patrol-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/patrol/sessions`** (**cấm ERP.***) |
| domain | **Patrol** |
| taskId | `task_9f864414` |
| mfeStdRoute | `/patrol` |
| mfeStdUrl | `http://localhost:9304/patrol` |
| dataAnaly | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/patrol-control-hint.md` · real-data · handoff compact |
| po.requirement | `specs/patrol/po/requirement.md` |
| design.artifact | `specs/patrol/ui/design.md` |
| sa.artifact | `specs/patrol/be/solution-discovery.md` · handoff `sa-compact.md` |
| tl.artifact | `specs/patrol/task/patrol.md` · handoff `team_lead-compact.md` |
| implement.artifact | `specs/patrol/implement/patrol.md` · handoff `dev-compact.md` |
| qa.artifact | `specs/patrol/qa/scenarios.md` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| dataAnalySkillVersion | `2026.09.05.03` |
| dataAnalyWorkflowVersion | `2026.09.05.03` |
| dataAnalyRulesVersion | `2026.09.06.1` |
| dataAnalyContentHash | `sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7` |
| designSkillVersion | `2026.08.14.5` |
| designWorkflowVersion | `2026.08.14.5` |
| designRulesVersion | `2026.08.14.9` |
| saSkillVersion | `2026.08.14.5` |
| saWorkflowVersion | `2026.08.14.5` |
| saRulesVersion | `2026.08.14.9` |
| tlSkillVersion | `2026.08.14.5` |
| tlWorkflowVersion | `2026.08.14.5` |
| tlRulesVersion | `2026.08.14.9` |
| qaSkillVersion | `2026.08.14.5` |
| qaWorkflowVersion | `2026.08.14.5` |
| qaRulesVersion | `2026.08.14.9` |
| reviewSkillVersion | `2026.08.14.5` |
| reviewWorkflowVersion | `2026.08.14.5` |
| reviewRulesVersion | `2026.08.14.9` |
| updatedAt | `2026-09-06T18:30:24.630Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | `_data-analy/features/patrol-control-hint.md` + real-data + compact | **done** |
| 1 | po | po/requirement.md + handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl + design-compact | **confirmed** |
| 2.2 | sa | be/solution-discovery.md + handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/patrol.md + handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/patrol.md + handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md + handoff/qa-compact.md | **blocked** |
| 6 | review | review/findings.md | **pending** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Field`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **confirmed** (user Approve board) |
| autoApprove | **ON** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-DA-01 | patrol | data_analy | — | **done** | controlHint SearchInput road-route |
| T-DA-02 | patrol | data_analy | — | **done** | `task_53b3bcbb` · § Delta leftover + upload media · FileService |
| T-CTX-01 | patrol | docs | T-DA-01 | **done** | verify |
| T-BE-01 | patrol | api | T-CTX-01 | **done** | CRUD sessions |
| T-BE-02 | patrol | migration | T-BE-01 | **done** | rmms_patrol_sessions · **không** schema mới |
| T-PERM-01 | patrol | ui+api | T-BE-01 | **done** | FE gate · BE stub |
| T-UI-ACT-01 | patrol | ui | T-UI-FORM-01 | **done** | inventory P1 · delta filter → LIST |
| T-BE-CRUD-01 | patrol | api | T-BE-01 | **done** | C/U/D verify |
| T-UI-MAP-FORM | patrol | — | — | n/a | packKind=list |
| T-BE-Q-01 | patrol | api | T-BE-01 | **done** | `?route=` exact |
| T-BE-VAL-01 | patrol | api | T-BE-Q-01 | **done** | Route ∈ 38 · enum VN |
| T-BFF-01 | patrol | bff | T-BE-Q-01 | **done** | `QueryString` passthrough |
| T-FE-API-01 | patrol | ui | T-BFF-01 | **done** | getList `route` |
| T-UI-LKP-01 | patrol | ui | T-PERM-01 | **done** | SearchInput road-route form+filter |
| T-UI-FIELD-01 | patrol | ui | T-UI-LKP-01 | **done** | controlHint ↔ DTO |
| T-UI-PROD-01 | patrol | ui | T-UI-LKP-01 | **done** | seed QL.1/HCM · cấm Slideout |
| T-UI-LIST-01 | patrol | ui | T-FE-API-01 · T-UI-LKP-01 | **done** | A–D KEEP · filter route |
| T-UI-FORM-01 | patrol | ui | T-UI-LKP-01 | **done** | SearchInput route · footer-only |
| T-UI-UX-01 | patrol | ui | T-UI-LIST-01 | **done** | constitution · footer-only |
| T-QA-01 | patrol | qa | T-UI-FORM-01 | **done** | A–D + smoke · `task_8178afb0` |
| T-QA-CRUD-01 | patrol | qa | T-UI-ACT-01 | **done** | C/E/V/Copy/D + LKP/VAL · P0 none |
| T-UD-BUG-01 | patrol | docs | — | **done** | confirmed `/run-user-doc` 2026-08-29 · GAP-P2-FORM-GRID-05 · capture=08-td-tk-tao-moi.png |
| T-UD-BUG-02 | patrol | docs | — | **done** | confirmed `/run-user-doc` 2026-08-29 · PLAT-TB-06 · capture=08-td-tk-tao-moi.png |
| T-UD-BUG-03 | patrol | docs | — | **done** | confirmed `/run-user-doc` 2026-08-29 · PLAT-TB-07 · capture=08-td-tk-tao-moi.png |
| T-UD-BUG-04 | patrol | docs | — | **done** | confirmed `/run-user-doc` 2026-08-29 · GAP-P2-BTN-SSOT-01 · capture=08-td-tk-tao-moi.png |
| T-MIG-MEDIA | patrol | migration | T-BE-02 | **done** | `Schema_RmmsPatrolSessions_MediaIds` varchar(2000) |
| T-BE-FILE-01 | patrol | api | T-MIG-MEDIA | **done** | DTO mediaIds[] · replace-all · no cascade |
| T-BFF-FILE-01 | patrol | bff | T-BE-FILE-01 | **done** | sessions mediaIds passthrough · files/* reuse |
| T-FE-FILE-01 | patrol | ui | T-BFF-FILE-01 | **done** | FileService wire · MIME FE · guid only |
| T-UI-FORM-MEDIA | patrol | ui | T-FE-FILE-01 | **done** | FileMulti upload zone · LinImageUpload |
| T-UI-VIEW-GALLERY | patrol | ui | T-FE-FILE-01 | **done** | View resign gallery |
| T-UI-COPY-MEDIA | patrol | ui | T-UI-FORM-MEDIA | **done** | clone guid[] |
| T-QA-MEDIA | patrol | qa | T-UI-FORM-MEDIA | **failed** | `task_9f864414` · live `/td-tk` media PASS · packet `/patrol` 404 · GAP-QA-PAT-STD-01 |

## Blockers / open questions

- Pack `task_9f864414` · QA **failed** · GAP-QA-PAT-STD-01 **P0** · `mfeStdUrl=/patrol` 404 · live `/td-tk` · qa_fail_rollback
- T-QA-MEDIA live VN upload PASS · packet e2e S0/S1/QA-20 FAIL · GAP-QA-E2E-02 P2 (npx playwright install)
- GAP-SA-PAT-FILE-01 **CLOSED** · GAP-DES-PAT-MEDIA-UI **CLOSED** · MIME PO-chốt FE+FileService
- Prior GAP-PO-PAT-01..07 + GAP-SA-PAT-Q01/LKP/VAL/ENUM + GAP-TL-PAT-* **KEEP CLOSED**
- Kind E+F map/tracks **P2** · child table media **P2** · GAP-QA-PAT-CODE-DISABLED **P2** · SD-AUTH **P2**

## Links

- data-analy → po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/patrol`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html`
- solution: `specs/patrol/be/solution-discovery.md`
- task: `specs/patrol/task/patrol.md`
- implement: `specs/patrol/implement/patrol.md`
- qa: `specs/patrol/qa/scenarios.md`

## Retry

- from: `data_analy` · at: `2026-08-14T17:50:00.000Z` · board user Retry step · **closed** `task_36ea7fa2`
- completed role: `po` · `task_af761fcc` · at: `2026-08-14T18:00:00.000Z`
- completed role: `design` · `task_5e7961be` · at: `2026-08-14T18:10:00.000Z`
- completed role: `sa` · `task_91df2c14` · at: `2026-08-14T18:20:00.000Z`
- completed role: `team_lead` · `task_a4508318` · at: `2026-08-14T18:40:00.000Z`
- completed role: `dev` · `task_4f8ea737` · at: `2026-08-14T18:20:00.000Z`
- completed role: `qa` · `task_8178afb0` · at: `2026-08-15T01:20:00.000Z`
- completed role: `review` · `task_d496cfeb` · at: `2026-08-15T01:25:00.000Z`

## Resume / closeout

- closeout QA: `task_9f864414` · roleOnly=`qa` · `/agent-qa` · verdict **FAIL** · GAP-QA-PAT-STD-01 P0 · e2e packet `/patrol` 404 · live `/td-tk`+media PASS · yarn typecheck+build PASS · qa-compact · queue **failed** · qa_fail_rollback · **cấm** phase=done · at: `2026-09-06T18:30:00.000Z`
- closeout Dev: `task_12280943` · roleOnly=`dev` · `/agent-dev` · T-MIG/BE/FE/UI-MEDIA + yarn/dotnet PASS · implement + dev-compact · QA **pending** chain · autoApprove **ON** · e2eQa queued · at: `2026-09-06T18:10:00.000Z`
- closeout Team-lead: `task_62694861` · roleOnly=`team_lead` · `/agent-team-lead` · T-MIG/BE/FE/UI-MEDIA + compact · Dev **done** chain · autoApprove **ON** · e2eQa queued · at: `2026-09-07T00:55:57.818Z`
- closeout SA: `task_8072f549` · roleOnly=`sa` · `/agent-sa` · FILE-01 MediaIds CSV + FormMode↔API + FileService reuse · solution **confirmed** · sa-compact · TL **done** chain · autoApprove **ON** · at: `2026-09-06T17:55:00.000Z`
- closeout Design: `task_a57d8389` · roleOnly=`design` · `/agent-design` · upload zone FileMulti + View gallery · reviewUrl prototype · design-compact · `design_confirm=approve` · SA **pending** chain · autoApprove **ON** · at: `2026-09-07T00:49:00.000Z`
- closeout PO: `task_54394ae1` · roleOnly=`po` · `/agent-po` · § Delta leftover+upload · GAP-PO-PAT-MEDIA-* · po-compact · Design **pending** chain · autoApprove **ON** · at: `2026-09-06T17:50:00.000Z`
- closeout Data-analy: `task_53b3bcbb` · roleOnly=`data_analy` · controlHint+real-data+compact · hash `f2761b7dc5…` · FileService media · PO **done** chain · at: `2026-09-06T17:45:00.000Z`
- closeout Data-analy (prior): `task_36ea7fa2` · controlHint · hash `1d25897d8f…` · at: `2026-08-14T17:50:00.000Z`
- closeout PO: `task_af761fcc` · roleOnly=`po` · `/agent-po` · GAP-PO-PAT-01..07 chốt · Design **pending** chain · at: `2026-08-14T18:00:00.000Z`
- closeout Design: `task_5e7961be` · roleOnly=`design` · `/agent-design` · full-page + SearchInput `road-route` · reviewUrl prototype · `design_confirm=approve` · SA **pending** chain · autoApprove **ON** · at: `2026-08-14T18:10:00.000Z`
- closeout SA: `task_91df2c14` · roleOnly=`sa` · `/agent-sa` · solution **confirmed** · LKP-01 Integration `road-routes/search` · API-01 `?route=` · validate catalog · enum VN · TL **pending** chain · autoApprove **ON** · at: `2026-08-14T18:20:00.000Z`
- closeout Team-lead: `task_a4508318` · roleOnly=`team_lead` · `/agent-team-lead` · T-BE-Q-01/VAL/LKP/LIST-ext/FORM-ext · Dev **pending** chain · autoApprove **ON** · at: `2026-08-14T18:40:00.000Z`
- closeout Dev: `task_4f8ea737` · roleOnly=`dev` · `/agent-dev` · GAP-SA-PAT-* + GAP-TL-PAT-* đóng · yarn/dotnet build PASS · QA **pending** chain · autoApprove **ON** · at: `2026-08-14T18:20:00.000Z`
- closeout QA: `task_8178afb0` · roleOnly=`qa` · `/agent-qa` · T-QA-01/CRUD PASS · P0 none · yarn typecheck+build PASS · Review **pending** chain · autoApprove **ON** · at: `2026-08-15T01:20:00.000Z`
- closeout Review: `task_d496cfeb` · roleOnly=`review` · `/agent-review` · live re-audit PASS · P0 none · yarn typecheck+build PASS · `review_confirm=approve` · pipeline **complete** · autoApprove **ON** · at: `2026-08-15T01:25:00.000Z`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-09-06T18:10:00.000Z |
| versionGate | rechecked |
| dataAnalySkillVersion | 2026.09.05.03 |
| dataAnalyWorkflowVersion | 2026.09.05.03 |
| dataAnalyRulesVersion | 2026.09.06.1 |
| poSkillVersion | 2026.08.14.5 |
| poWorkflowVersion | 2026.08.14.5 |
| poRulesVersion | 2026.08.14.9 |
| designSkillVersion | 2026.08.14.5 |
| designWorkflowVersion | 2026.08.14.5 |
| designRulesVersion | 2026.08.14.9 |
| saSkillVersion | 2026.08.14.5 |
| saWorkflowVersion | 2026.08.14.5 |
| saRulesVersion | 2026.08.14.9 |
| tlSkillVersion | 2026.08.14.5 |
| tlWorkflowVersion | 2026.08.14.5 |
| tlRulesVersion | 2026.08.14.9 |
| qaSkillVersion | 2026.08.14.5 |
| qaWorkflowVersion | 2026.08.14.5 |
| qaRulesVersion | 2026.08.14.9 |
