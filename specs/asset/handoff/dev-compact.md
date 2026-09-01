# Handoff compact — dev

schemaVersion: 1
feature: asset
packKind: list
role: dev
status: await_confirm
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T09:58:56.000Z
taskId: task_7e0b31e2

## Decisions
- changeScope: edit_page
- formPattern: N/A (list)
- mode: qaFixPhase=plan · **cấm** Write code
- mfeStdUrl: **cấm** mobile AC
- open questions: none
- qa_fail_rollback: board Approve `qa_fix_plan` rồi implement
- root-cause: Android `LaunchedEffect(onBack,onOpenDetail)` cancel Appear → 0 GET

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| plan | asset-qa-fix-plan | — | await_confirm |
| appear | Appear/fetch | List | fix LaunchedEffect(Unit) |
| rows | live rows | ListRow | after Approve |

## Screens / zones (ids only)
- `#sc-asset-list` · DES-MOB-ASSET-LIST
- GAP: STORE-03 · AND-FETCH-01 · UX-DUAL-01

## API / tasks (ids only)
- GET `mobile-bff/api/v1/asset/road-assets` — iOS OK · Android 0 call (bug)
- T-QA-01 failed · task_7e0b31e2 plan done
- Step 4b: N/A

## VERIFY
- plan-only DoR: PASS
- builds / e2e: **cấm** ở phase plan · re-run ở implement

## Debt
- auth/profile Android → web-bff 500 (note · non-block)
- P2 filter toolbar · Review Should badge/search-ph

## UNCLEAR
- none

## Full paths (Read only if needed)
- plan: specs/asset/implement/asset-qa-fix-plan.md
- QA: specs/asset/qa/scenarios.md · bugs/task_4ec34586.md
- STATUS: specs/asset/STATUS.md
