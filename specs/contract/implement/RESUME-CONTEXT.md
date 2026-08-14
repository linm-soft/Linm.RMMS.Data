# RESUME-CONTEXT — contract

> Compressed at stop · 2026-08-14T14:47:32.537Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_ebb1d832` |
| alias | `contract` |
| title | [QA] Hợp đồng và ngân sách |
| source | `qldb_implement` |
| cursorAgentId | `—` |
| mfeRoot | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| beRoot | `—` |
| reason | user_stop_all |
| notes | slash=/agent-qldb-workflow · roleOnly=qa · chainRole=1 · startFrom=qa · startSlash=/agent-qa · autoApprove=0 · productRoot=D:/AI-QLBD/Linm.RMMS.Data · mfeSource=D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract · status=D:/AI-QLBD/Linm.RMMS.Data/specs/contract/STATUS.md · demo=D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/contract-demo.html |

## Done / next (heuristic from worker stream)

- (no live events — dùng STATUS + implement MD)

## STATUS excerpt

```markdown
# STATUS — contract

| Field | Value |
|-------|-------|
| feature | `contract` |
| phase | `qa` |
| status | `pending` |
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
| updatedAt | `2026-08-14T21:40:00.000Z`
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
| 5 | qa | qa/scenarios.md | pending |
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
| T-UI-UX-01 | ui | **done** |
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

```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
