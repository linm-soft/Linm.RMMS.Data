# Handoff compact — qa

schemaVersion: 1
feature: ops
packKind: list
role: qa
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T02:35:00.000Z
taskId: task_1f014c56
slash: /agent-qa-mobile
e2eQa: ON

## Decisions
- changeScope: edit_page
- formPattern: N/A (list · mark-read N/A empty)
- mfeStdUrl: none
- verdict: **PASS** · phase→review · **cấm** done
- align_confirm: approve (autoApprove) · Must 0
- ios_test_phase: phase1_iphone · A4-IPAD DEFER
- store_qa: run_store
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-ops | Thông báo | ListRow+Badge / EmptyChrome | live EmptyChrome + loadFail toast |
| ops-empty | Chưa có thông báo | EmptyChrome | API inbox 500 |
| T-QA-E2E | Maestro dual | e2e-qa-mobile | ok:true + harvest remedi |

## Screens / zones (ids only)
- DES-MOB-OPS / #sc-ops
- PNG: specs/ops/qa/screens/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png
- store: specs/ops/qa/store/ops/

## API / tasks (ids only)
- GET notification/inbox → 500 · EmptyChrome OK
- T-QA-*: store A11/A10/A9/A3/P6 PASS
- FormMode↔API: N/A

## Debt
- GAP-MOB-UX-COMP-OPS-01 Android trailing DEFER
- GAP-BE-OPS-INBOX-500 BE follow-up
- GAP-QA-E2E-HARVEST-01 CLOSED (manual re-copy)

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/ops/qa/scenarios.md
- CAPTURE: specs/ops/qa/store/ops/CAPTURE.md
- align: specs/ops/ui/review/align-ux.md
- STATUS: specs/ops/STATUS.md
