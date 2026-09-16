# Handoff compact — qa

schemaVersion: 1
feature: patrol-history
packKind: list
role: qa
status: done
skillVersion: 2026.08.19.29
writtenAt: 2026-09-01T05:50:00.000Z
taskId: task_203672b2
slash: /agent-qa-mobile

## Decisions
- changeScope: edit_page (re-QA post cleanup_mock dev `task_430bde31`)
- e2eQa: ON · ios_test_phase=phase1_iphone · A4-IPAD DEFER
- store_qa: run_store · autoApprove=ON
- align_confirm: approve · Must 0 · Should 1 DEFER
- verdict: **PASS** · ok:true · live-only list aligned
- mfeStdUrl: none (native_dual)
- data: live BFF GET · DB seed LINM offline row · **cấm** demoItems

## T-QA / store
| case | store | result | png |
|------|-------|--------|-----|
| A11-LAUNCH | A11 | PASS | qa/screens/A11-LAUNCH.png |
| A10-BFF | A10·P11 | PASS | — |
| A9-LOGIN | A9·P10 | PASS | qa/screens/A9-LOGIN.png |
| A3-CORE | A3·A11 | PASS | qa/screens/A3-CORE.png 1320×2868 |
| P6-CORE | P6·P11 | PASS | qa/screens/P6-CORE.png 1080×1920 |
| P6-CORE-2 | P6 | PASS | qa/screens/P6-CORE-2.png |

## Screens / zones (ids only)
- DES-MOB-PAT-LIST / #sc-patrol-history
- reviewUrlIos=specs/patrol-history/ui/prototype/ios/index.html#sc-patrol-history
- reviewUrlAndroid=specs/patrol-history/ui/prototype/android/index.html#sc-patrol-history

## VERIFY GATE
- iOS xcodegen → PASS (prior dev)
- Android assembleDebug → PASS
- BFF dotnet build → PASS
- yarn e2e-qa-mobile → ok:true · iPhone 17 Pro Max · Pixel_2

## Debt
- GAP-QA-P6-FOLD-SAME-01 — P6-CORE ≈ P6-CORE-2 · DEFER non-block

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/patrol-history/qa/scenarios.md
- store: specs/patrol-history/qa/store/patrol-history/
- align: specs/patrol-history/ui/review/align-ux.md
- bugs: specs/patrol-history/qa/bugs/patrol-history.md
