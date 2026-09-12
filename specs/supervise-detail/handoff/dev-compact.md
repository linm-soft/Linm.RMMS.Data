# Handoff compact — dev

schemaVersion: 1
feature: supervise-detail
packKind: screen
role: dev
status: completed
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T15:25:00.000Z
qaFixPhase: implement
taskId: task_112638ae
qaFailFrom: task_02d20b55

## Decisions
- changeScope: edit_page · qaFailFix Android list GET (Plan §1–6)
- formPattern: view-only detail · entry list TapItem
- mfeStdUrl: — (native · **cấm**)
- build PASS: iOS xcodegen+LinmRmms iPhone 17 Pro · Android assembleDebug · BFF dotnet
- open questions: none · re-QA Plan §7
- debt: none code · blockers await QA close
- Step 4b: N/A · cấm OfflineDemo / invent / ERP.*

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| GAP-QA-SUP-DET-AND-LIST-01 | Android list GET | — | **fixed emit** ON_RESUME Appear · claim Dev · re-QA |
| GAP-QA-STORE-03 | Maestro P6 | — | **unblocked** by list · re-QA |
| sc-supervise-detail | Chi tiết check-in | TopBar+hero+rows | iOS verify-only · Android live path |

## Screens / zones (ids only)
- `#sc-supervise` · `sup-empty` · `sup-card-*` · `#sc-supervise-detail` · `btn-sup-detail-back`
- reviewUrl= `ui/review/align-ux.md` · peerStdUrl= —

## API / tasks (ids only)
- GET `patrol/attendance-logs` · GET `patrol/attendance-logs/{id}` · Bearer + `X-Company-Id: LINM`
- seed `a0000001-2026-0810-0001-000000000001`
- Android: SuperviseScreen ON_RESUME · Home/PatrolHome SideEffect · UC cancel-safe
- Step 4b: N/A
- next: `/agent-qa-mobile` · e2eQa ON · **cấm** start:std

## UNCLEAR
- none

## Full paths (Read only if needed)
- plan: `specs/supervise-detail/implement/supervise-detail-qa-fix-plan.md`
- implement: `implement/ios.md` · `implement/android.md`
- STATUS: `specs/supervise-detail/STATUS.md`
