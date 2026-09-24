# Handoff compact — dev

schemaVersion: 1
feature: supervise-detail
packKind: screen
role: dev
status: await_confirm
skillVersion: 2026.08.19.26
writtenAt: 2026-09-20T00:22:25.000Z
qaFixPhase: plan
taskId: task_1fd8b207
qaFailFrom: task_4063c6a2

## Decisions
- changeScope: edit_page
- formPattern: view-only detail
- mfeStdUrl: —
- build PASS: SKIP (plan-only · no native/BFF write) · implement must xcodegen + iPhone 17 Pro Max + assembleDebug + BFF dotnet
- open questions: none
- debt: GAP-QA-SUP-DET-AND-LIST-01 OPEN · GAP-QA-STORE-03 OPEN · round-1 ON_RESUME log ≠ OkHttp
- Step 4b: N/A

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| GAP-QA-SUP-DET-AND-LIST-01 | Android list GET | — | OPEN · prove OkHttp + BFF 10.0.2.2 |
| GAP-QA-STORE-03 | Maestro P6 | — | OPEN · blocked by empty list |
| sc-supervise-detail | Chi tiết check-in | TopBar+hero+rows | iOS A3 PASS freeze |

## Screens / zones (ids only)
- `#sc-supervise` · `sup-empty` · `sup-card-a0000001-2026-0810-0001-000000000001` · `#sc-supervise-detail`
- reviewUrl= specs/supervise-detail/ui/review/align-ux.md · peerStdUrl= —

## API / tasks (ids only)
- GET patrol/attendance-logs?page=1&pageSize=50 · GET patrol/attendance-logs/{id}
- seed a0000001-2026-0810-0001-000000000001 · X-Company-Id LINM
- Plan §1–8 in implement/supervise-detail-qa-fix-plan.md
- next: board qa_fix_plan Approve → implement · **cấm** e2e ở Dev

## UNCLEAR
- none (gap = swallowed exception / no proceed; 200-empty only if OkHttp code 200)

## Full paths (Read only if needed)
- plan: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise-detail/implement/supervise-detail-qa-fix-plan.md
- qa: specs/supervise-detail/qa/scenarios.md · qa/bugs/supervise-detail.md
- prior compact missing on disk — STATUS confirmed: specs/_data-analy/supervise-detail-control-hint.md · supervise-detail-real-data.md · po/requirement.md · ui/design.md · be/solution-discovery.md · task/supervise-detail.md
