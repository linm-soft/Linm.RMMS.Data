# STATUS — inventory

| Field | Value |
|-------|-------|
| feature | `inventory` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/inventory-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/inventory.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/contract/inventory-items`** (**cấm ERP.***) |
| prototype.artifact | `specs/inventory/ui/prototype/inventory-list-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/inventory/ui/prototype/inventory-list-prototype.html` |
| mfeStdRoute | `/contract/inventory` |
| mfeStdUrl | `http://localhost:9312/contract/inventory` |
| taskId | `task_27ba5c23` |
| updatedAt | `2026-08-09T17:03:48.352Z` |
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
| 3 | team-lead | task/inventory.md | **done** |
| 4 | dev | implement/inventory.md | **done** |
| 5 | qa | qa/scenarios.md | **done** |
| 6 | review | review/findings.md | **confirmed** |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (autopilot) |
| solution_confirm | **approve** (autopilot) — route `/api/v1/contract/inventory-items` |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_get_only** (API-02) |
| sa_shared_table | **share_tenant** (`InventoryItemEntity`) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Contract` |
| version_mismatch_action | **recheck_new** · SSOT 2026.08.09.02 |
| prototype.reviewUrl | giữ cho Dev/QA |
| review_confirm | **approve** (autopilot · task_27ba5c23) |
| autoApprove | **ON** |

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
| T-QA-01 | qa | **done** |

## Blockers / open questions

- CommonLib / Auth NuGet — `[RequirePermission]` TODO BE
- Leaflet GPS Kind F full / Excel / Timescale / Asset sync = out of pack
- Catalog UI schema editor stub
- **cấm ERP.*** · **cấm** parent JSON string

## Links

- Design: `specs/inventory/ui/design.md`
- Solution: `specs/inventory/be/solution-discovery.md`
- Task: `specs/inventory/task/inventory.md`
- Implement: `specs/inventory/implement/inventory.md`
- Prototype: `specs/inventory/ui/prototype/inventory-list-prototype.html`
- QA: `specs/inventory/qa/scenarios.md`
- Review: `specs/inventory/review/findings.md`
