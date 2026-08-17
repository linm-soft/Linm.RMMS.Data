# RESUME-CONTEXT — rpt-su-co

> Compressed at stop · 2026-08-15T16:37:14.362Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_4906443c` |
| alias | `rpt-su-co` |
| title | BC Sự cố |
| source | `qldb_implement` |
| cursorAgentId | `—` |
| mfeRoot | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| beRoot | `—` |
| reason | user_stop_all |
| notes | slash=/agent-qldb-workflow · packKind=report · runMode=full_pipeline · via=scan-qlbd-form-type · load=form-type-task-pack.md · gap=none · roleOnly=data_analy · chainRole=1 · startFrom=data_analy · startSlash=/agent-data-analy · dataAnalyMode=feature_context · changeScope=new_or_edit · productRoot=D:/AI-QLBD/Linm.RMMS.Data · docsRoot=D:/AI-QLBD/Linm.RMMS.Data/docs · demoRoot=D:/AI-QLBD/Linm.RMMS.De |

## Done / next (heuristic from worker stream)

- (no live events — dùng STATUS + implement MD)

## STATUS excerpt

```markdown
# STATUS — rpt-su-co

| Field | Value |
|-------|-------|
| feature | `rpt-su-co` |
| phase | `data_analy` |
| status | `draft` |
| packKind | `report` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/rpt-su-co.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/su-co` |
| mfeStdUrl | `http://localhost:9311/bao-cao/su-co` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | 2026-08-15T14:27:51.728Z |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/rpt-su-co-control-hint.md | pending |
| 1 | po | po/requirement.md | pending |
| 2.1 | design | ui/design.md + prototype + reviewUrl | pending |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/rpt-su-co.md | pending |
| 4 | dev | implement/rpt-su-co.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|

## Blockers / open questions

-

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9311/bao-cao/su-co`
- mfeStdRoute: `/bao-cao/su-co`

```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
