# Handoff compact — qa

schemaVersion: 1
feature: supervise-detail
packKind: screen
role: qa
status: blocked
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T15:47:20.000Z
taskId: task_4063c6a2
slash: /agent-qa-mobile
qaFailFrom: task_02d20b55

## Decisions
- changeScope: edit_page · cleanup_mock · qaFailFix re-QA
- formPattern: view-only detail
- e2eQa: ON · phase1_iphone · A4-IPAD DEFER
- verdict: FAIL · ok:false · MAESTRO-AND · P6 FAIL
- seed: a0000001-2026-0810-0001-000000000001 · CompanyCode=LINM · BFF curl list 200
- open questions: none — Dev must emit OkHttp GET list from 10.0.2.2

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| T-QA-E2E-01 | e2e mobile | Maestro | iOS PASS · Android FAIL |
| T-QA-A3 | A3-CORE | store | iOS live Aligned |
| T-QA-P6 | P6-CORE | store | FAIL · empty list |
| GAP-QA-SUP-DET-AND-LIST-01 | Android list GET | — | OPEN · BFF 0 from emulator |
| GAP-QA-STORE-03 | Maestro P6 | — | OPEN |

## Screens / zones (ids only)
- DES-MOB-SUP-DETAIL / #sc-supervise-detail
- PNG: qa/screens/A3-CORE.png (PASS Aligned) · P6-CORE.png (FAIL)

## API / tasks (ids only)
- GET patrol/attendance-logs/{id} iOS 200
- Android list GET attendance-logs not on BFF from 10.0.2.2
- next: qa_fail_rollback → Dev · **cấm** OfflineDemo

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/supervise-detail/qa/scenarios.md
- bugs: specs/supervise-detail/qa/bugs/supervise-detail.md
- align: specs/supervise-detail/ui/review/align-ux.md
- CAPTURE: specs/supervise-detail/qa/store/supervise-detail/CAPTURE.md
