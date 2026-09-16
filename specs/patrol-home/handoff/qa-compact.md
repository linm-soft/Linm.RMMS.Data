# Handoff compact — qa → review
schemaVersion: 1
feature: patrol-home
role: qa
taskId: task_56abf022
packKind: hub
changeScope: edit_page
stack: native_dual
status: PASS
generatedAt: 2026-09-12T15:26:00.000Z
skillVersion: 2026.08.19.23
contentHash: sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a
bffContentHash: sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0

## Decisions
- changeScope: edit_page
- formPattern: N/A (hub · FormMode=none)
- packKind: hub
- verdict: **PASS** · e2e ok:true · align **Aligned** Must 0
- ios_test_phase: phase1_iphone · A4-IPAD DEFER
- store_qa: run_store
- align_confirm: approve (autoApprove ON)
- mfeStdUrl: — (cấm · native_dual)
- method: e2e runtime · yarn e2e-qa-mobile
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroActive | Ca đang chạy | LinmHeroCard | live A3/P6 |
| emptyActive | Chưa có ca | LinmHeroCard | N/A active seed |
| btn-open-session | Mở ca | LinmPrimaryButton | N/A active seed |
| pinHere | Ghim | LinmPrimaryButton | PASS |
| todayRows | Hôm nay | LinmListRow | PASS |
| kpiStrip | KPI 3 | LinmKpiStrip | PASS |

## Screens / zones (ids only)
- `#sc-patrol-home` · A3-CORE · P6-CORE · P6-CORE-2
- PNG: `qa/screens/{A11,A9,A3,P6,P6-CORE-2}.png` · store `qa/store/patrol-home/`

## API / tasks (ids only)
- T-QA-*: A11/A10/A9/A3/P6/P6-2 **PASS**
- FormMode↔API: none↔GET/POST/PUT patrol/sessions (A10-BFF)
- Gaps: GAP-QA-A11Y-TAB-FIELD-01 DEFER non-block
- Next: /agent-review-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/patrol-home/qa/scenarios.md
- CAPTURE: specs/patrol-home/qa/store/patrol-home/CAPTURE.md
- manifest: specs/patrol-home/qa/store/patrol-home/manifest.json
- align: specs/patrol-home/ui/review/align-ux.md
- bugs: specs/patrol-home/qa/bugs/patrol-home.md
- STATUS: specs/patrol-home/STATUS.md
