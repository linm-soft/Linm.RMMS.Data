# Handoff compact — qa

schemaVersion: 1
feature: mnt-list
packKind: list
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T05:00:00.000Z
taskId: task_c9ac27ea
slash: /agent-qa-mobile

## Decisions
- changeScope: edit_page (re-QA post cleanup_mock dev)
- e2eQa: ON · yarn e2e-qa-mobile · ios_test_phase=phase1_iphone · A4-IPAD DEFER
- store_qa: run_store · autoApprove=ON
- align_confirm: approve · Must 0 · Aligned
- verdict: **PASS** · ok:true
- API: host :5111 macOS · BFF :5202 · `--skip-start`
- data: live-only · DB seed LINM tenant 2 rows · **cấm** in-app mock
- maestro: status assert `Tình trạng xử lý: {label}` (post GAP-MOB-EDIT-STATUS-01)
- open questions: none

## VERIFY GATE
- iOS xcodegen: PASS
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

Paths: `specs/mnt-list/qa/screens/{caseId}.png` · `qa/store/mnt-list/`

## Align
- verdict: **Aligned** · Must **0**
- zone: `#sc-mnt-list` · status bar text matches proto `.rc-status`
- Should: GAP-MOB-COPY-SEARCH-01 (kit search placeholder)

## Gaps
| ID | Block? |
|----|--------|
| GAP-MOB-COPY-SEARCH-01 | no (Should) |

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/mnt-list/qa/scenarios.md
- align: specs/mnt-list/ui/review/align-ux.md
- bugs: specs/mnt-list/qa/bugs/mnt-list.md
- implement: specs/mnt-list/implement/ios.md · android.md
