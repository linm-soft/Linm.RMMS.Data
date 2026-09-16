# RESUME-CONTEXT — asset-ai

> Compressed at stop · 2026-08-30T20:06:02.594Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_fcd587c7` |
| alias | `asset-ai` |
| title | [Mobile] [Tài sản] -> Camera AI |
| source | `qldb_mobile_implement` |
| cursorAgentId | `—` |
| mfeRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| beRoot | `—` |
| reason | user_stop_all |
| notes | slash=/agent-qldb-workflow-mobile · packKind=sheet · runMode=full_pipeline · via=run-implement-mobile · pack=main3 · load=form-type-task-pack.md · gap=none · roleOnly=data_analy · chainRole=1 · autoApprove=0 · sibling_assign=1 · e2eQa=1 · mfeServe=std · startFrom=data_analy · startSlash=/agent-data-analy-mobile · dataAnalyMode=feature_context · changeScope=new_page · hasAnaly=0 · productRoot=/User |

## Done / next (heuristic from worker stream)

- (no live events — dùng STATUS + implement MD)

## STATUS excerpt

```markdown
# STATUS — asset-ai

| Field | Value |
|-------|-------|
| feature | `asset-ai` |
| phase | `data_analy` |
| status | `draft` |
| packKind | `sheet` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Demo/src/demo/ios/index.html |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/asset-ai.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-08-30T17:59:33.982Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/asset-ai-control-hint.md · asset-ai-bff-endpoints.md · asset-ai-real-data.md · asset-ai-action-tree.md | **pending** |
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/asset-ai.md | **pending** |
| 4 | dev | implement/ios.md · implement/android.md | **pending** |
| 5 | qa | qa/scenarios.md · qa/store/asset-ai/CAPTURE.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|

## Blockers / open questions

-

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
