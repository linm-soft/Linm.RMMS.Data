# STATUS — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| phase | `dev` |
| status | `blocked` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/ops-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ops.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/notification/inbox`** (**cấm ERP.***) |
| domain | **Notification** |
| taskId | `task_47576cf0` |
| mfeStdRoute | `/ops` |
| mfeStdUrl | `http://localhost:9304/ops` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| updatedAt | `2026-08-14T14:47:32.701Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/ops.md | **done** (LKP/FIELD/PROD/UX stamped) |
| 4 | dev | implement/ops.md | **blocked** (paused) |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (autopilot) |
| solution_confirm | **approve** (autopilot) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Field`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **approve** (autopilot) |
| autoApprove | **ON** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | ops | docs | — | done | context API Signed · form full-page |
| T-BE-01 | ops | api | T-CTX-01 | done | inbox CRUD + mark-read + overview |
| T-BE-02 | ops | migration | T-BE-01 | done | rmms_notifications |
| T-BFF-01 | ops | bff | T-BE-01 | done | proxy inbox + overview |
| T-PERM-01 | ops | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | ops | ui | T-BFF-01 | done | A–D · LAYOUT-06 · KPI |
| T-UI-FORM-01 | ops | ui | T-UI-LIST-01 | done | NotificationFormPage |
| T-UI-ACT-01 | ops | ui | T-UI-FORM-01 | done | Delete toolbar + row menu · form routes |
| T-BE-CRUD-01 | ops | api | T-BE-01 | done | verify API-01…07 |
| T-UI-MAP-FORM | ops | — | — | n/a | packKind=list |
| T-UI-LKP-01 | ops | ui | T-UI-LIST-01 | done | SearchInput master |
| T-UI-FIELD-01 | ops | ui | T-UI-FORM-01 | done | DTO/control-map |
| T-UI-PROD-01 | ops | ui | T-UI-FORM-01 | done | no Slideout / Kind D |
| T-UI-UX-01 | ops | ui | T-UI-LIST-01 | done | 4/8/16 · no filterMaxWidth |
| T-QA-01 | ops | qa | T-UI-FORM-01 | done | scenarios |
| T-QA-CRUD-01 | ops | qa | T-UI-ACT-01 | done | C/E/V/D + row actions + quality gates |

## Blockers / open questions

- GAP-P2-ACT-DELETE · GAP-TL-FORMTYPE-01 **CLOSED**
- GAP-P2-SLIDE-KIND-D · GAP-P2-LKP-SELECT · GAP-P2-UX-WIDTH **CLOSED** this turn

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/ops`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ops-list-prototype.html`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T20:25:00.000Z |
| versionGate | rechecked |

<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
