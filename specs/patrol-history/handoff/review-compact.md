# Handoff compact — review

schemaVersion: 1
feature: patrol-history
packKind: list
role: review
status: done
skillVersion: 2026.08.19.29
writtenAt: 2026-09-01T06:05:00.000Z
taskId: task_1fc7e2bc
slash: /agent-review-mobile

## Decisions
- changeScope: edit_page (re-review post cleanup_mock)
- review_confirm: approve (autoApprove=ON)
- align_confirm: approve · Must 0
- post_review: skip
- mfeStdUrl: none (native_dual)
- data: live-only · EmptyChrome · loadFail toast · **cấm** demoItems
- Step 4b: N/A — reuse GET `patrol/sessions`
- open questions: none block

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-history | Lịch sử ca | TopBar+Search | route_a from hub |
| history-search | Tìm | LinmSearchField | client filter |
| row-history-* | Session rows | LinmListRow | badge 4 · chevron · tap→detail |
| history-list-empty | Empty | EmptyChrome | GET ok empty |

## Screens / zones (ids only)
- DES-MOB-PAT-LIST / #sc-patrol-history
- reviewUrlIos=specs/patrol-history/ui/prototype/ios/index.html#sc-patrol-history
- reviewUrlAndroid=specs/patrol-history/ui/prototype/android/index.html#sc-patrol-history

## Findings (ids only)
- R-01..R-06/R-08/R-09/R-12: OK
- R-07 PrivacyInfo: Accept P2
- R-10 patrol-detail pending_confirm: Defer
- R-11 GAP-QA-P6-FOLD-SAME-01: Defer

## VERIFY GATE
- iOS/Android/BFF: prior Dev PASS (task_430bde31)
- yarn e2e-qa-mobile: prior QA ok:true (task_203672b2) — Review **không** re-run
- Step 4b: N/A

## Debt
- PrivacyInfo.xcprivacy → /review-app-submit
- Sibling patrol-detail pending_confirm · **cấm** auto start
- GAP-QA-P6-FOLD-SAME-01 DEFER

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: specs/patrol-history/review/findings.md
- REVIEW-META: specs/patrol-history/review/REVIEW-META.json
- STATUS: specs/patrol-history/STATUS.md
- prior qa: specs/patrol-history/handoff/qa-compact.md
- prior dev: specs/patrol-history/handoff/dev-compact.md
