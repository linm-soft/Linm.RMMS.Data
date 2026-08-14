# STATUS — contract

| Field | Value |
|-------|-------|
| feature | `contract` |
| phase | `qa` |
| status | `blocked` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `formtype_quality` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/contract-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/contract.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/contract/contracts`** (**cấm ERP.***) |
| prototype.artifact | `specs/contract/ui/prototype/contract-list-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/contract/ui/prototype/contract-list-prototype.html` |
| mfeStdRoute | `/contract` |
| mfeStdUrl | `http://localhost:9312/contract` |
| taskId | `task_7573a7b2` |
| updatedAt | `2026-08-14T21:45:00.000Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/contract.md | **done** (FormType ACT+CRUD stamped) |
| 4 | dev | implement/contract.md | **done** |
| 5 | qa | qa/scenarios.md | **blocked** (paused) |
| 6 | review | review/findings.md | pending |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (autopilot) |
| solution_confirm | **approve** (autopilot) — route `/api/v1/contract/contracts` |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_get_only** (API-02) |
| sa_shared_table | **share_tenant** (`ContractEntity`) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Contract` |
| version_mismatch_action | **recheck_new** · SSOT 2026.08.09.02 |
| prototype.reviewUrl | giữ cho Dev/QA |
| review_confirm | — |
| autoApprove | **OFF** |

## Tasks (summary)

| id | layer | status |
|----|-------|--------|
| T-CTX-01 | docs | **done** |
| T-BE-01 | api | **done** |
| T-BE-02 | migration | **done** |
| T-BFF-01 | bff | **done** |
| T-PERM-01 | ui+api | **done** |
| T-UI-LIST-01 | ui | **done** |
| T-UI-FORM-01 | ui | **done** |
| T-UI-ACT-01 | ui | **done** |
| T-BE-CRUD-01 | api | **done** (verify) |
| T-UI-LKP-01 | ui | **done** |
| T-UI-FIELD-01 | ui | **done** |
| T-UI-PROD-01 | ui | **done** |
| T-UI-UX-01 | ui | **done** (≤2 field/hàng · GAP-P2-FORM-GRID-01) |
| T-UI-MAP-FORM | — | **n/a** |
| T-QA-01 | qa | pending |
| T-QA-CRUD-01 | qa | pending |

## Blockers / open questions

- CommonLib / Auth NuGet — `[RequirePermission]` TODO BE
- Excel / quyết toán full / inventory CRUD / dedicated sign+kpi APIs = out of pack
- History API stub empty
- **cấm ERP.*** · **cấm** parent JSON string

## Links

- Design: `specs/contract/ui/design.md`
- Solution: `specs/contract/be/solution-discovery.md`
- Task: `specs/contract/task/contract.md`
- Implement: `specs/contract/implement/contract.md`
- Prototype: `specs/contract/ui/prototype/contract-list-prototype.html`
- QA: `specs/contract/qa/scenarios.md`
- Review: `specs/contract/review/findings.md`
