# STATUS — home

| Field | Value |
|-------|-------|
| feature | `home` |
| phase | `po` |
| status | `in_progress` |
| changeScope | `new_page` |
| packKind | `hub` |
| stack | `native_dual` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-home` · pack `specs/home/ui/prototype/` |
| context | `docs/context/features/home.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/auth/profile` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/home-control-hint.md` · `home-bff-endpoints.md` · `home-action-tree.md` |
| taskId | `task_46fb294c` |
| skillVersion | `2026.08.19.17` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.20` |
| rulesVersion | `2026.08.19.23` |
| versionGate | `rechecked` |
| contentHash | `sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed` |
| bffContentHash | `sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581` |
| verifyGate | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** **PASS** · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** · roleOnly=`data_analy` · **cấm** mfeStdUrl |
| updatedAt | `2026-08-19T05:28:15.797Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after data_analy `task_46fb294c` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/home-control-hint.md · home-bff-endpoints.md · home-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **in_progress** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | pending |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/home.md | pending |
| 4 | dev | implement/ios.md · implement/android.md | pending |
| 5 | qa | qa/scenarios.md · qa/store/home/CAPTURE.md | pending |
| 6 | review | review/findings.md | pending |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` |
| packKind | **`hub`** (data-analy đề xuất) |
| stack_confirm | `native_dual` |
| autoApprove | **ON** |
| e2eQa | **ON** |
| sibling_assign | 6 × `pending_confirm` (chờ Approve · **cấm** auto start) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_46fb294c | home | data_analy | — | **completed** | `/agent-data-analy-mobile` · roleOnly · autoApprove=ON |
| task_26954659 | patrol-home | data_analy | home | pending_confirm | sibling_assign |
| task_5f9013dd | incident-create | data_analy | home | pending_confirm | sibling_assign |
| task_e8ad42d2 | supervise | data_analy | home | pending_confirm | sibling_assign |
| task_659bf5c2 | mnt-list | data_analy | home | pending_confirm | sibling_assign |
| task_246a6ce0 | incident-list | data_analy | home | pending_confirm | sibling_assign |
| task_56d16d11 | asset-hub | data_analy | home | pending_confirm | sibling_assign |

## Blockers / open questions

- GAP-F-HOME-01: role/wallet live — **không invent** API · PO/SA
- Sibling **không** start đến khi board Approve (`GAP-MOB-ACT-06`)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- Handoff → `/agent-po-mobile` (roleOnly turn này **không** chạy PO)

## Retry

- from: `data_analy` · at: `2026-08-19T05:20:19.977Z` · board user Retry step · **resolved** data_analy done
