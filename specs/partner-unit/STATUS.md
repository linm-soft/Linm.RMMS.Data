# STATUS — partner-unit

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| phase | `review` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `master` |
| runMode | `full_pipeline` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/partner-unit.md` |
| seed | `docs/context/seed/partner-unit-seed.json` (13) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/partner-units` |
| domain | **Integration** |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/partner-unit/ui/prototype/partner-unit-list-prototype.html` |
| updatedAt | 2026-08-08T12:50:00.000Z |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | INVESTIGATE-CUC2 §2 | **done** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/partner-unit.md | **confirmed** |
| 4 | dev | implement/partner-unit.md | **done** |
| 5 | qa | qa/scenarios.md | **done** (scenarios · manual pending) |
| 6 | review | review/findings.md | **done** |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (Autopilot · run packet) |
| domain_map | Integration |
| sa_tz_gate | tz_na |
| sa_xco_gate | xco_na |
| sa_shared_table | share_a |
| solution_confirm | **approve** (Autopilot · run packet) |
| be_repo_confirm | **approve** (run packet BE=`Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (run packet UI=`MFE-Source/Linm.Web.RMMS.Master`) |
| review_confirm | **approve** |

## Tasks

| id | page | role | deps | status |
|----|------|------|------|--------|
| T-CTX-01 | partner-unit | dev | — | **done** |
| T-BE-01 | partner-unit | dev | T-CTX-01 | **done** |
| T-BE-02 | partner-unit | dev | T-BE-01 | **done** |
| T-SEED-01 | partner-unit | dev | T-BE-02 | **done** |
| T-BFF-01 | partner-unit | dev | T-BE-01 | **done** |
| T-PERM-01 | partner-unit | dev | T-BE-01 | **done** |
| T-UI-LIST-01 | partner-unit | dev | T-BFF-01 | **done** |
| T-UI-FORM-01 | partner-unit | dev | T-UI-LIST-01 | **done** |
| T-QA-01 | partner-unit | qa | T-UI-FORM-01 | **done** |

## Blockers

— none —

## Links

- implement → `implement/partner-unit.md`
- qa → `qa/scenarios.md`
- review → `review/findings.md`

## Verify

| Gate | Result |
|------|--------|
| BE API `dotnet build` | **PASS** |
| BE BFF `dotnet build` | **PASS** |
| FE `yarn typecheck` | **PASS** |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | **PASS** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T12:50:00.000Z |
| versionGate | ok |
