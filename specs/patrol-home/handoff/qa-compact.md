# Handoff compact — qa

schemaVersion: 1
feature: patrol-home
packKind: hub
role: qa
status: done
skillVersion: 2026.08.19.28
writtenAt: 2026-09-01T05:25:00.000Z
taskId: task_2fbe1ca6
slash: /agent-qa-mobile

## Decisions
- changeScope: edit_page (re-QA post cleanup_mock dev `task_22fa5cba`)
- e2eQa: ON · ios_test_phase=phase1_iphone · A4-IPAD DEFER
- store_qa: run_store · autoApprove=ON
- align_confirm: approve · Must 0 · Should 1 DEFER
- verdict: **PASS** · ok:true · live-only hub aligned
- mfeStdUrl: none (native_dual)

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
- DES-MOB-PAT-HOME / #sc-patrol-home
- reviewUrlIos=specs/patrol-home/ui/prototype/ios/index.html#sc-patrol-home
- reviewUrlAndroid=specs/patrol-home/ui/prototype/android/index.html#sc-patrol-home

## VERIFY GATE
- iOS xcodegen → PASS
- Android assembleDebug → PASS
- BFF dotnet build → PASS
- yarn e2e-qa-mobile → ok:true · iPhone 17 Pro Max · Pixel_2

## Debt
- GAP-QA-A11Y-TAB-FIELD-01 — iOS tab-field Maestro · DEFER non-block

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/patrol-home/qa/scenarios.md
- store: specs/patrol-home/qa/store/patrol-home/
- align: specs/patrol-home/ui/review/align-ux.md
- bugs: specs/patrol-home/qa/bugs/patrol-home.md
