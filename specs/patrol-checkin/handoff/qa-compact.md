# Handoff compact — qa

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T07:15:30.000Z
taskId: task_753d9648
slash: /agent-qa-mobile
gap: cleanup_mock re-e2e · ok:true

## Decisions
- changeScope: edit_page (cleanup_mock)
- formPattern: sheet · `#sheet-checkin`
- mfeStdUrl: none (native_dual)
- e2eQa: ON · yarn e2e-qa-mobile · ok:true · A11/A10/A9/A3/P6/P6-2 PASS
- align: Aligned · Must 0 · autoApprove ON
- data: live session QL.1 · cấm demo Phước Dinh assert
- open questions: none block · Should GAP-QA-A11Y-SHEET-TAG-01 · GAP-QA-GPS-TIMING-01

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sheet-checkin | Ghi điểm tuần | Sheet | A3+P6 |
| ci-match-banner | Đúng/Sai điểm | Banner | Android green match |
| plan/route/gps | readonly | Text | live QL.1 |
| ci-content | Nội dung | TextArea | fill e2e |
| ci-add-photo | Ảnh | PhotoRow | P6-2 |
| ci-btn-save | Ghi nhận | Primary | fold2 |

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- reviewUrlIos=file://…/prototype/ios/index.html#sheet-checkin
- reviewUrlAndroid=file://…/prototype/android/index.html#sheet-checkin
- peerStdUrl=—
- store: qa/store/patrol-checkin/ · screens A11/A9/A3/P6/P6-2

## API / tasks (ids only)
- A10-BFF `:5202` PASS
- GET patrol/sessions · POST check-ins (prior T-BE)

## Debt / next
- Next: `/agent-review-mobile` (không chạy trong task này)
- debt: GAP-QA-A11Y-SHEET-TAG-01 Should · GAP-QA-GPS-TIMING-01 Should · Photo P2
