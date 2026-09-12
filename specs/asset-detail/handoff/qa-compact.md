# Handoff compact — qa

schemaVersion: 1
feature: asset-detail
packKind: screen
role: qa
status: blocked
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T16:41:26.000Z
taskId: task_20e8f629
verdict: fail

## Decisions
- changeScope: new_page
- formPattern: N/A (detail GET)
- e2eQa: ON · yarn e2e-qa-mobile · ok:false
- iOS Maestro: **PASS** · live `KM-QL1-NA-461`
- Android Maestro: **FAIL** · empty list
- mfeStdUrl: — (**cấm**)
- open questions: Android list tenant/GET
- next: qa_fail_rollback · Dev Android-only · **cấm** review

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| T-QA-A3 | iOS CORE | — | PASS live KM |
| T-QA-P6 | Android CORE | — | FAIL empty |
| GAP-QA-STORE-03 | And Maestro | — | open Must |
| GAP-QA-REAL-01 | And live | — | open Android |
| GAP-QA-STORE-01 | iOS Maestro | — | closed |
| GAP-MOB-ASSET-DET-NAV-02 | iOS nav | — | closed |

## Screens / zones (ids only)
- `#sc-asset-detail` · `label-code` · `value-code` · `row-type` · `row-route-km` · `btn-pin-map`
- PNG: `qa/screens/A3-CORE.png` · `P6-CORE.png` · store `qa/store/asset-detail/`
- reviewUrl= `ui/review/align-ux.md` · peerStdUrl= —

## API / tasks (ids only)
- GET `asset/road-assets` · GET `asset/road-assets/{id}` · `X-Company-Id: LINM`
- T-QA-* e2e cases A11,A10,A9,A3,P6,P6-CORE-2

## UNCLEAR
- Android empty root: company header vs LoadFailed vs emulator net — Dev diagnose

## Full paths (Read only if needed)
- scenarios: `specs/asset-detail/qa/scenarios.md`
- bugs: `specs/asset-detail/qa/bugs/asset-detail.md`
- CAPTURE: `specs/asset-detail/qa/store/asset-detail/CAPTURE.md`
- STATUS: `specs/asset-detail/STATUS.md`
