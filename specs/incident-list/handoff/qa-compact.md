# Handoff compact — qa

schemaVersion: 1
feature: incident-list
packKind: list
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T04:25:00.000Z
taskId: task_f70a425c
slash: /agent-qa-mobile

## Decisions
- changeScope: new_page
- e2eQa: ON · yarn e2e-qa-mobile · ios_test_phase=phase1_iphone · A4-IPAD DEFER
- store_qa: run_store · autoApprove=ON
- align_confirm: approve · Must 0 · Aligned
- verdict: **PASS** · ok:true
- API: host :5111 macOS · BFF :5202 · `--skip-start`
- re-run context: post `/edit-mobile-feature` task_3a718e5d (status bar + action row)
- open questions: none

## VERIFY GATE
- iOS xcodegen + xcodebuild: PASS
- Android assembleDebug: PASS
- BFF dotnet build: PASS
- yarn e2e-qa-mobile: PASS ok:true

## Store / PNG (e2e)
| caseId | px | result |
|--------|-----|--------|
| A11-LAUNCH | 1320×2868 | PASS |
| A9-LOGIN | 1320×2868 | PASS |
| A3-CORE | 1320×2868 | PASS |
| P6-CORE | 1080×1920 | PASS |
| P6-CORE-2 | 1080×1920 | PASS |
| A10-BFF | — | PASS |

Paths: `specs/incident-list/qa/screens/{caseId}.png` · `qa/store/incident-list/`

## Align
- zone: `#sc-incident-list` · DES-MOB-INC-LIST
- live vs demo: A3-CORE + P6-CORE vs prototype ios/android
- Must: 0 · Should: GAP-MOB-COPY-SEARCH-01 · GAP-MOB-A11Y-FAB-01

## Gaps (non-block)
- GAP-MOB-COPY-SEARCH-01 · GAP-MOB-A11Y-FAB-01

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/incident-list/qa/scenarios.md
- capture: specs/incident-list/qa/store/incident-list/CAPTURE.md
- align: specs/incident-list/ui/review/align-ux.md
- bugs: specs/incident-list/qa/bugs/incident-list.md
- STATUS: specs/incident-list/STATUS.md
