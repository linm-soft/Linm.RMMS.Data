# Handoff compact — qa

schemaVersion: 1
feature: asset
packKind: list
role: qa
status: blocked
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T16:22:00.000Z
taskId: task_0aaf071e

## Decisions
- changeScope: edit_page
- formPattern: N/A (list)
- e2eQa: ON · yarn e2e-qa-mobile --skip-start
- verdict: **FAIL** · ok:false · GAP-QA-STORE-03
- open questions: none
- qa_fail_rollback: Dev Android Appear→load→OkHttp (fix `task_fa241430` chưa đóng runtime) · rồi QA re-run

## Inventory (slim)
| id | label | result |
|----|-------|--------|
| A10-BFF | BFF :5202 | PASS |
| A11-LAUNCH | cold start | PASS |
| A9-LOGIN | demo login | PASS |
| A3-CORE | iOS list | PASS · live rows · Aligned |
| P6-CORE | Android list | FAIL visual empty |
| MAESTRO-AND | row-asset-0 | FAIL |

## Screens / zones (ids only)
- `#sc-asset-list` · DES-MOB-ASSET-LIST
- PNG: `qa/screens/{A11,A9,A3,P6-CORE,P6-CORE-2}.png` · `qa/store/asset/`

## API / tasks (ids only)
- GET `mobile-bff/api/v1/asset/road-assets` — iOS OK · Android **0 call** `10.0.2.2`
- T-QA-01: **fail** · Review pending blocked

## VERIFY
- e2e-qa-mobile: **FAIL** (GAP-QA-STORE-03)
- align Must: Android empty vs iOS rows
- iOS/Android/BFF compile: prior Dev PASS (không re-claim)

## Debt
- GAP-MOB-ASSET-AND-FETCH-01 · GAP-MOB-UX-DUAL-01
- profile 500 web-bff rewrite (note)

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/asset/qa/scenarios.md
- CAPTURE: specs/asset/qa/store/asset/CAPTURE.md
- bugs: specs/asset/qa/bugs/task_0aaf071e.md
- align: specs/asset/ui/review/align-ux.md
- STATUS: specs/asset/STATUS.md
