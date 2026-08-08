# STATUS — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| phase | `po` |
| status | `draft` |
| changeScope | `new_page` |
| packKind | `master` |
| demo | **N/A** (no demo — Design confirm) |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/org-unit.md` |
| contextHub | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/master.md` |
| orgSsot | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/20-ORG-STRUCTURE-DRVN.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/rmms/org-units`** (**cấm ERP.***) |
| prototype.artifact | `specs/org-unit/ui/prototype/` (Design) |
| prototype.reviewUrl | — (pending Design) |
| updatedAt | 2026-08-08T17:20:00.000Z |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | specs/_data-analy (shared catalogs) | pending |
| 1 | po | po/requirement.md | pending |
| 2.1 | design | ui/design.md + prototype + reviewUrl | pending (**UI confirm đây**) |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/org-unit.md | pending |
| 4 | dev | implement/org-unit.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | — |
| solution_confirm | — |
| be_repo_confirm | board checkbox |
| ui_repo_confirm | board checkbox · `Linm.Web.RMMS.Master` |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX | org-unit | tl | — | pending | context + SSOT DRVN |
| T-PERM | org-unit | tl | T-CTX | pending | master.shared-catalog.org-unit.* |
| T-BE | org-unit | tl | T-CTX | pending | OrgUnit entity + API |
| T-UI-LIST | org-unit | tl | T-BE | pending | Kind B + tree A–D |
| T-UI-FORM | org-unit | tl | T-UI-LIST | pending | SearchInput parent |
| T-QA | org-unit | tl | T-UI-FORM | pending | |

## Blockers / open questions

- GAP-ORG-01: Chi cục II.1 / II.6 vs DRVN VP II.2–II.5 — keep_legacy (default)
- Seed JSON path under data-analy shared-catalogs (pending write)

## Links

- hub master → org-unit → road-route / asset-type / partner-unit (sau)
- consumers: Asset / Patrol SearchInput `orgUnitCode`
