# Handoff compact — dev

schemaVersion: 1
feature: supervise-detail
packKind: screen
role: dev
status: await_confirm
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T09:56:24.000Z
qaFixPhase: plan
taskId: task_dcfaf100
qaFailFrom: task_02d20b55

## Decisions
- changeScope: edit_page (prior cleanup_mock shipped) · this turn = **qa-fix-plan only**
- formPattern: view-only detail · entry list TapItem
- mfeStdUrl: — (native · **cấm**)
- build PASS: N/A plan-only · implement phải VERIFY iOS xcodegen+iPhone 17 Pro · Android assembleDebug · BFF dotnet
- open questions: none · board **`qa_fix_plan`** required (**cấm** autoApprove skip)
- debt: GAP-QA-SUP-DET-AND-LIST-01 · GAP-QA-STORE-03 — Android list no GET → empty blocks detail
- Step 4b: N/A · cấm OfflineDemo / invent path / ERP.*

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| GAP-QA-SUP-DET-AND-LIST-01 | Android list no GET | — | Appear/load · BFF 0 GET · fix after Approve |
| GAP-QA-STORE-03 | Maestro P6 FAIL | — | depends list card + detail live |
| sc-supervise-detail | Chi tiết check-in | TopBar+hero+rows | iOS A3 PASS · Android blocked |

## Screens / zones (ids only)
- `#sc-supervise` · `sup-empty` · `sup-card-*` · `#sc-supervise-detail` · `btn-sup-detail-back`
- reviewUrl= `ui/review/align-ux.md` · peerStdUrl= —

## API / tasks (ids only)
- GET `patrol/attendance-logs` · GET `patrol/attendance-logs/{id}` · Bearer + `X-Company-Id: LINM`
- seed `a0000001-2026-0810-0001-000000000001`
- implement = Plan §1–6 · re-QA = Plan §7
- Step 4b: N/A

## UNCLEAR
- none — hypothesis: Android Appear/load không emit GET (primary) · LoadFailed/empty 200 secondary

## Full paths (Read only if needed)
- plan: `specs/supervise-detail/implement/supervise-detail-qa-fix-plan.md`
- qa: `specs/supervise-detail/qa/scenarios.md` · `qa/bugs/supervise-detail.md`
- implement prior: `implement/ios.md` · `implement/android.md`
- STATUS: `specs/supervise-detail/STATUS.md`
