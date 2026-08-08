# STATUS — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| phase | `dev` |
| status | `in_progress` |
| changeScope | `edit_page` |
| packKind | `list` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/asset.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** (**cấm ERP.***) |
| prototype.artifact | `specs/asset/ui/prototype/asset-list-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset/ui/prototype/asset-list-prototype.html` |
| taskId | `task_c30a9a02` |
| updatedAt | 2026-08-08T17:40:00.000Z |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | confirmed |
| 2.1 | design | ui/design.md + prototype + reviewUrl | confirmed |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/asset.md | **confirmed** |
| 4 | dev | implement/asset.md | **in_progress** (T-CTX/BE/BFF done · UI next) |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | approve (2026-08-08) |
| solution_confirm | **approve** (2026-08-08) — route `/api/v1/asset/road-assets` |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_get_only** (API-02) |
| sa_shared_table | **share_tenant** (`RoadAssetEntity`) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| version_mismatch_action | **recheck_new** (2026-08-08) |
| prototype.reviewUrl | giữ cho Dev/QA |

## Tasks (summary)

| id | layer | status |
|----|-------|--------|
| T-CTX-01 | docs | **done** |
| T-BE-01 | api | **done** |
| T-BE-02 | migration | **done** (pair · pending DB apply) |
| T-BFF-01 | bff | **done** |
| T-PERM-01 | ui+api | pending (Auth stub) |
| T-UI-LIST-01 | ui | pending (BASE fixed) |
| T-UI-FORM-01 | ui | pending |
| T-QA-01 | qa | pending |

## Blockers / open questions

- CommonLib / Auth NuGet chưa mount — RequirePermission TODO
- UI Slideout parity còn lại
- **cấm ERP.*** · **cấm** parent JSON string

## Links

- Design: `specs/asset/ui/design.md`
- Solution: `specs/asset/be/solution-discovery.md`
- Task: `specs/asset/task/asset.md`
- Implement: `specs/asset/implement/asset.md`
- Prototype: `specs/asset/ui/prototype/asset-list-prototype.html`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.17 |
| rulesVersion | 2026.08.08.17 |
| generatedAt | 2026-08-08T17:40:00.000Z |
| versionGate | rechecked |
