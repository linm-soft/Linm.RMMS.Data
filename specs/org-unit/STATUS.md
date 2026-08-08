# STATUS — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| phase | `review` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `master` |
| runMode | `full_pipeline` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/org-unit.md` |
| seed | `docs/context/seed/org-unit-seed.json` (60 · keep_legacy) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/org-units` |
| domain | **Integration** |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-unit/ui/prototype/org-unit-list-prototype.html` |
| updatedAt | 2026-08-08T18:15:00.000Z |

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
| 3 | team-lead | task/org-unit.md | **confirmed** |
| 4 | dev | implement/org-unit.md | **done** |
| 5 | qa | qa/scenarios.md | **done** (scenarios written · manual run pending) |
| 6 | review | review/findings.md | **done** |

## Confirms

| Gate | Value |
|------|-------|
| gap_org_01 | keep_legacy |
| design_confirm | approve |
| domain_map | Integration (D1) |
| sa_tz_gate | tz_na |
| sa_xco_gate | xco_na |
| sa_shared_table | share_a |
| solution_confirm | **approve** |
| be_repo_confirm | **approve** (chat A) |
| ui_repo_confirm | **approve** (chat A) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | org-unit | dev | — | **done** | Integration route in context |
| T-BE-01 | org-unit | dev | T-CTX-01 | **done** | OrgUnit API shared A |
| T-BE-02 | org-unit | dev | T-BE-01 | **done** | Schema_RmmsOrgUnits |
| T-SEED-01 | org-unit | dev | T-BE-02 | **done** | Seed 60 keep_legacy |
| T-BFF-01 | org-unit | dev | T-BE-01 | **done** | proxy |
| T-PERM-01 | org-unit | dev | T-BE-01 | **done** | codes stub |
| T-UI-LIST-01 | org-unit | dev | T-BFF-01 | **done** | tree A–D |
| T-UI-FORM-01 | org-unit | dev | T-UI-LIST-01 | **done** | Modal + SearchInput |
| T-QA-01 | org-unit | qa | T-UI-FORM-01 | **done** | scenarios.md |

## Blockers

— none —

## Links

- implement → `implement/org-unit.md`
- qa → `qa/scenarios.md`
- review → `review/findings.md`
