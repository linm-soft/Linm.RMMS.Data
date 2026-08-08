# STATUS — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| phase | `sa` |
| status | `await_confirm` |
| changeScope | `new_page` |
| packKind | `master` |
| runMode | `full_pipeline` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/org-unit.md` |
| seed | `docs/context/seed/org-unit-seed.json` (60 · keep_legacy) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · proposed `api/v1/integration/org-units` |
| prototype.artifact | `specs/org-unit/ui/prototype/org-unit-list-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-unit/ui/prototype/org-unit-list-prototype.html` |
| updatedAt | 2026-08-08T17:47:00.000Z |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | org-structure + seed | **done** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype | **confirmed** (VN + SearchInput) |
| 2.2 | sa | be/solution-discovery.md | **await_confirm** |
| 3 | team-lead | task/org-unit.md | pending |
| 4 | dev | implement/org-unit.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Confirms

| Gate | Value |
|------|-------|
| gap_org_01 | **keep_legacy** |
| design_confirm | **approve** |
| domain_map | **Integration** (`D1`) |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **share_a** (Type A) |
| solution_confirm | **await** |
| be_repo_confirm | board false |
| ui_repo_confirm | board false |

## Links

- design → `ui/design.md` (confirmed)
- solution → `be/solution-discovery.md`
- reviewUrl → prototype HTML
