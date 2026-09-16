# Handoff compact — review

schemaVersion: 1
feature: attendance
packKind: list
role: review
status: done
skillVersion: 2026.08.19.29
writtenAt: 2026-09-01T08:55:00.000Z
taskId: task_946698fe
slash: /agent-review-mobile

## Decisions
- review_confirm: approve (autoApprove=ON)
- align_confirm: approve · Must 0
- post_review: skip
- changeScope: edit_page · post cleanup_mock live-only
- mock: demoUser removed dual · POST lastWho() · GET empty→[]
- Step 4b: N/A · cấm ERP.* · cấm mfeStdUrl
- sibling report/day: pending_confirm · Defer
- PrivacyInfo / A4-IPAD: Accept P2 / DEFER Phase 1

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-attendance | Chấm công hub | LargeTitle+Seg+Hero+List | align PASS |
| att-segment | Tuần đường / Chấm công | Segment | idx1 active |
| att-hero | Chấm vào / Báo cáo | Hero | live check-in |
| att-day-* | day row | ListRow | live / empty OK |

## Screens / zones (ids only)
- DES-MOB-ATT / #sc-attendance
- evidence: qa/store/attendance/{A11,A9,A3,P6,P6-2}.png
- full: specs/attendance/review/findings.md

## VERIFY
- Prior Dev task_242d0372 builds PASS
- Prior QA task_b96fb3d7 e2e ok:true · visual Must 0
- Security/DTO/Align PASS · review_confirm=approve
- Next: pipeline done · edit via /edit-mobile-feature only
