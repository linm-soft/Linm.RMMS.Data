# Handoff compact — review

schemaVersion: 1
feature: ops
packKind: list
role: review
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T02:40:00.000Z
taskId: task_992292aa
slash: /agent-review-mobile

## Decisions
- changeScope: edit_page
- formPattern: N/A (list · mark-read)
- mfeStdUrl: none
- review_confirm: **approve** (autoApprove)
- post_review: **skip**
- findings: P0=0 · Must align=0 · open Should=2 DEFER
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-ops | Thông báo | ListRow+Badge / EmptyChrome | live-only |
| ops-empty | Chưa có thông báo | EmptyChrome | API 500 OK |
| R-sec/dto/align/real | gates | PASS | cleanup_mock |

## Screens / zones (ids only)
- DES-MOB-OPS / #sc-ops
- reviewUrlIos=…/prototype/ios/index.html#sc-ops
- reviewUrlAndroid=…/prototype/android/index.html#sc-ops
- PNG: qa/store/ops/{A11,A9,A3,P6,P6-2}

## API / tasks (ids only)
- GET notification/inbox · POST …/mark-read
- FormMode↔API: N/A
- T-REVIEW-*: PASS

## Findings counts
- P0: 0
- Must align open: 0
- GAP-MOB-REAL-02: CLOSED
- GAP-QA-REAL-01: CLOSED
- Should DEFER: GAP-MOB-UX-COMP-OPS-01 · GAP-BE-OPS-INBOX-500
- Store P2 Accept: PrivacyInfo / Data safety

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: specs/ops/review/findings-mobile.md
- STATUS: specs/ops/STATUS.md
- qa: specs/ops/qa/scenarios.md · ui/review/align-ux.md
