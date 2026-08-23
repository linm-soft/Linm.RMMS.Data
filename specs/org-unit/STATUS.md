# STATUS — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `master` |
| runMode | `full_pipeline` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/org-unit.md` |
| seed | `docs/context/seed/org-unit-seed.json` (60 · keep_legacy) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/open-api/org-units` |
| domain | **Integration** |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-unit/ui/prototype/org-unit-list-prototype.html` |
| mfeStdRoute | `/mas/co-cau-tc` |
| mfeStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| updatedAt | `2026-08-10T15:45:00.000Z` |
| task | `task_2250b015` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | seed + org-structure | **done** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/org-unit.md | **done** |
| 4 | dev | implement/org-unit.md | **done** |
| 5 | qa | qa/scenarios.md | **done** |
| 6 | review | review/findings.md | **done** |

## Confirms

| Gate | Value |
|------|-------|
| gap_org_01 | keep_legacy |
| design_confirm | **approve** (Autopilot · run packet) |
| domain_map | Integration (D1) |
| sa_tz_gate | tz_na |
| sa_xco_gate | xco_na |
| sa_shared_table | share_a |
| solution_confirm | **approve** (Autopilot · run packet) |
| be_repo_confirm | **approve** (run packet BE=`Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (run packet UI=`MFE-Source/Linm.Web.RMMS.Master`) |
| review_confirm | **approve** (Autopilot · task_2250b015) |
| version_mismatch_action | **recheck_new** (Autopilot · skill 2026.08.10.1 · rules 2026.08.10.2) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | org-unit | dev | — | **done** | Integration route in context |
| T-BE-CRUD-01 | org-unit | dev | T-CTX-01 | **done** | (= prior T-BE-01) OrgUnit API shared A |
| T-BE-INIT-01 | org-unit | dev | T-BE-CRUD-01 | **done** | GET `/init-data` kinds |
| T-BE-02 | org-unit | dev | T-BE-CRUD-01 | **done** | Schema_RmmsOrgUnits |
| T-SEED-01 | org-unit | dev | T-BE-02 | **done** | Seed 60 keep_legacy |
| T-BFF-01 | org-unit | dev | T-BE-CRUD-01 | **done** | proxy |
| T-PERM-01 | org-unit | dev | T-BE-CRUD-01 | **done** | codes stub |
| T-UI-LIST-01 | org-unit | dev | T-BFF-01 | **done** | tree A–D · LinCatalogDataGrid |
| T-UI-FORM-01 | org-unit | dev | T-UI-LIST-01 | **done** | Modal + SearchInput · init-data kinds |
| T-UI-ACT-01 | org-unit | dev | T-UI-FORM-01 | **done** | action inventory → form/API |
| T-QA-CRUD-01 | org-unit | qa | T-UI-ACT-01 | **done** | scenarios.md Create→Edit→View→Delete |

## Blockers

— none —

## Links
- mfeStdUrl: `http://localhost:9318/mas/co-cau-tc`
- mfeStdRoute: `/mas/co-cau-tc`

- implement → `implement/org-unit.md`
- qa → `qa/scenarios.md`
- review → `review/findings.md`
- mfeStdUrl → `http://localhost:9318/mas/co-cau-tc`

## Retry

- from: `team_lead` · at: `2026-08-10T15:15:24.866Z` · gap=`crud_formtype` · changeScope=`edit_page`
- task: `task_2250b015` · FormType pack stamped · SSOT re-review pass · VERIFY pending→PASS

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.10.1 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.1 |
| rulesVersion | 2026.08.10.2 |
| generatedAt | 2026-08-10T15:45:00.000Z |
| versionGate | rechecked |
