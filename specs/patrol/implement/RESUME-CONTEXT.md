# RESUME-CONTEXT — patrol

> Compressed at stop · 2026-08-08T19:01:49.077Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_760475f2` |
| alias | `patrol` |
| title | Tuần đường / tuần kiểm |
| source | `qldb_implement` |
| cursorAgentId | `—` |
| mfeRoot | `D:\AI-QLBD` |
| beRoot | `—` |
| reason | user_stop_all |
| notes | slash=/agent-qldb-workflow · packKind=list · runMode=full_pipeline · via=scan-qlbd-form-type · productRoot=D:/AI-QLBD/Linm.RMMS.Data · docsRoot=D:/AI-QLBD/Linm.RMMS.Data/docs · demoRoot=D:/AI-QLBD/Linm.RMMS.Demo/src/demo · demo=D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/patrol-demo.html · mfeSource=D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field · status=D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/STATUS.m |

## Done / next (heuristic from worker stream)

- (no live events — dùng STATUS + implement MD)

## STATUS excerpt

```markdown
# STATUS — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| phase | `po` |
| status | `draft` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/patrol-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | 2026-08-08T18:20:04.285Z |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | pending |
| 2.1 | design | ui/design.md + prototype + reviewUrl | pending |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/patrol.md | pending |
| 4 | dev | implement/patrol.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|

## Blockers / open questions

-

## Links

- po → ui → be → task → implement → qa → review

```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
