# Handoff compact — dev

schemaVersion: 1
feature: asset-detail
packKind: screen
role: dev
status: pending_confirm
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T16:55:00.000Z
qaFixPhase: plan
taskId: task_512c67ce
qaFailFrom: task_20e8f629

## Decisions
- changeScope: new_page · qaFailFix round 2 · **Android-only**
- formPattern: N/A (detail · GET by id)
- mfeStdUrl: — (native · **cấm**)
- build: **SKIP** plan turn · implement requires Android+BFF+iOS smoke PASS
- open questions: Android list empty root — tenant timing vs GET throw
- debt: iOS PASS freeze · GAP-MOB-E2E-VIS-01 → re-QA after Android fix
- Step 4b: N/A

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| GAP-QA-STORE-03 | And Maestro | — | **open** · empty list |
| GAP-QA-REAL-01 | And live | — | **open** Android |
| GAP-MOB-E2E-VIS-01 | visual | — | open · Android |
| GAP-QA-STORE-01 | iOS Maestro | — | **closed** |
| GAP-MOB-ASSET-DET-NAV-02 | iOS nav | — | **closed** |
| GAP-QA-REAL-01 | iOS live | — | **closed** |

## Screens / zones (ids only)
- `#sc-asset-list` · `asset-list-empty` · `row-asset-*` · `#sc-asset-detail` · `label-code` · `value-code` · `btn-pin-map`
- reviewUrl= `ui/review/align-ux.md` · peerStdUrl= —

## API / tasks (ids only)
- GET `asset/road-assets` · GET `asset/road-assets/{id}` · Bearer + `X-Company-Id: LINM`
- Plan §1–8 · implement pending board Approve
- Step 4b: N/A

## UNCLEAR
- Android: empty = GET 200 [] vs LoadFailed — diagnose step 1

## Full paths (Read only if needed)
- plan: `specs/asset-detail/implement/asset-detail-qa-fix-plan.md`
- implement: `implement/ios.md` · `implement/android.md`
- STATUS: `specs/asset-detail/STATUS.md`
