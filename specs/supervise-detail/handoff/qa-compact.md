# Handoff compact — qa

schemaVersion: 1
feature: supervise-detail
packKind: screen
role: qa
status: blocked
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T03:30:00.000Z
taskId: task_02d20b55
slash: /agent-qa-mobile

## Decisions
- changeScope: edit_page · cleanup_mock re-QA
- formPattern: view-only detail
- e2eQa: ON · phase1_iphone · A4-IPAD DEFER
- verdict: FAIL · ok:false · MAESTRO-AND
- seed: a0000001-2026-0810-0001-000000000001 · CompanyCode=LINM
- open questions: none — Dev fix Android list GET

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| T-QA-E2E-01 | e2e mobile | Maestro | iOS PASS · Android FAIL |
| T-QA-A3 | A3-CORE | store | iOS live Aligned |
| T-QA-P6 | P6-CORE | store | FAIL |

## Screens / zones (ids only)
- DES-MOB-SUP-DETAIL / #sc-supervise-detail
- PNG: qa/screens/A3-CORE.png (PASS) · P6-CORE.png (FAIL)

## API / tasks (ids only)
- GET patrol/attendance-logs/{id} iOS 200
- Android list GET attendance-logs not emitted
- T-QA-*: FAIL complete

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/supervise-detail/qa/scenarios.md
- bugs: specs/supervise-detail/qa/bugs/supervise-detail.md
- align: specs/supervise-detail/ui/review/align-ux.md
