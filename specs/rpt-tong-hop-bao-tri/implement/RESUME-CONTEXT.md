# RESUME-CONTEXT — rpt-tong-hop-bao-tri

> Compressed at stop · 2026-08-15T16:37:14.079Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_1d312ce2` |
| alias | `rpt-tong-hop-bao-tri` |
| title | Tổng hợp bảo trì |
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
# STATUS — rpt-tong-hop-bao-tri

| Field | Value |
|-------|-------|
| feature | `rpt-tong-hop-bao-tri` |
| phase | `data_analy` |
| status | `draft` |
| packKind | `report` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/rpt-tong-hop-bao-tri.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/tong-hop-bao-tri` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tong-hop-bao-tri` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | 2026-08-15T14:27:51.839Z |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/rpt-tong-hop-bao-tri-control-hint.md | pending |
| 1 | po | po/requirement.md | pending |
| 2.1 | design | ui/design.md + prototype + reviewUrl | pending |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/rpt-tong-hop-bao-tri.md | pending |
| 4 | dev | implement/rpt-tong-hop-bao-tri.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|

## Blockers / open questions

-

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9311/bao-cao/tong-hop-bao-tri`
- mfeStdRoute: `/bao-cao/tong-hop-bao-tri`

```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
