# Handoff compact — qa

schemaVersion: 1
feature: incident-detail
packKind: screen
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T04:40:00.000Z
taskId: task_f0f56b29
slash: /agent-qa-mobile

## Decisions
- changeScope: edit_page (post dev cleanup-mock task_53a77d94)
- e2eQa: ON · yarn e2e-qa-mobile · ios_test_phase=phase1_iphone · A4-IPAD DEFER
- store_qa: run_store · autoApprove=ON
- align_confirm: approve · Must 0 · Aligned
- verdict: **PASS** · ok:true
- API: host :5111 macOS · BFF :5202 · `--skip-start --skip-build`
- re-run context: post cleanup-mock live-only · cấm demo SSOT / card-inc-demo-inc-1
- open questions: none

## VERIFY GATE
- iOS xcodegen + xcodebuild: PASS (prior Dev · skip-build)
- Android assembleDebug: PASS (prior Dev · skip-build)
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

Paths: `specs/incident-detail/qa/screens/{caseId}.png` · `qa/store/incident-detail/`

## Align
- zone: `#sc-incident-detail` · DES-MOB-INC-DETAIL
- live vs demo: A3-CORE + P6-CORE vs prototype ios/android
- Must: 0 · live seed VD-20260829-0001 (≠ demo SC-2401) · Nguồn omit when empty OK

## Gaps (non-block)
- GAP-MOB-A11Y-INC-DETAIL-01 · iOS list btn a11y merge · Maestro point fallback
- GAP-QA-SEED-COMPANY-01 · seed requires X-Company-Id: LINM

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/incident-detail/qa/scenarios.md
- capture: specs/incident-detail/qa/store/incident-detail/CAPTURE.md
- align: specs/incident-detail/ui/review/align-ux.md
- bugs: specs/incident-detail/qa/bugs/incident-detail.md
- STATUS: specs/incident-detail/STATUS.md
