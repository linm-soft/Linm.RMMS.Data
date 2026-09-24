# Handoff compact — dev

schemaVersion: 1
feature: asset
packKind: list
role: dev
status: pending_confirm
skillVersion: 2026.08.29.1
writtenAt: 2026-09-20T04:15:00.000Z
taskId: task_ad15226f

## Decisions
- changeScope: edit_page
- formPattern: N/A (list)
- mode: qaFixPhase=**plan** · qa_fail_rollback từ `task_0aaf071e`
- autoApprove: **OFF** trên `qa_fix_plan` (cấm skip)
- mfeStdUrl: **cấm** mobile AC
- open questions: none
- root-cause hyp: Appear fix `task_fa241430` chưa đóng runtime · disk `LaunchedEffect(typeFilter)` + `isLoading=false` default → EmptyChrome / 0 GET `road-assets`
- Step 4b: N/A · reuse GET road-assets
- code this turn: **none**

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| plan | qa-fix-plan | List | pending_confirm |
| and-fetch | 0 GET road-assets | List | GAP-MOB-ASSET-AND-FETCH-01 |
| store | row-asset-0 | List | GAP-QA-STORE-03 |
| dual | iOS rows / And empty | List | GAP-MOB-UX-DUAL-01 |

## Screens / zones (ids only)
- `#sc-asset-list` · DES-MOB-ASSET-LIST
- open: STORE-03 · AND-FETCH-01 · UX-DUAL-01

## API / tasks (ids only)
- GET `mobile-bff/api/v1/asset/road-assets` — iOS OK · And **0** call
- T-AND-LIST-01 qa-fix **plan** · T-QA-01 fail blocked
- task_0aaf071e FAIL · task_ad15226f plan

## VERIFY
- builds: **cấm** claim plan turn · re-run ở implement
- e2e: **cấm** Dev · sau implement → `/agent-qa-mobile`

## Debt
- auth/profile Android → web-bff 500 (note · non-block)
- P2 filter toolbar · Review Should badge/search-ph

## UNCLEAR
- none

## Full paths (Read only if needed)
- plan: specs/asset/implement/asset-qa-fix-plan.md
- bugs: specs/asset/qa/bugs/task_0aaf071e.md
- scenarios: specs/asset/qa/scenarios.md
- STATUS: specs/asset/STATUS.md
