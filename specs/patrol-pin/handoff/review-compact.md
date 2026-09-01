# Handoff compact — review

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: review
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T07:46:00.000Z
taskId: task_08d8cb4b
slash: /agent-review-mobile
gap: none

## Decisions
- changeScope: edit_page (pin CTA hub+map · GpsDeny · cleanup_mock live-only)
- review_confirm: approve (autoApprove=ON)
- align_confirm: approve · Must **0** (prior QA)
- post_review: skip · pipeline complete
- mfeStdUrl: none · cấm e2e/build ở role này
- API: GET `patrol/sessions` only · Step 4b N/A · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí | Primary+mappin | hub+map CTA |
| DES-MOB-GPS-DENY | GPS deny | Modal | in-app |
| toast-pin-ok | Pin success | LinmToast | live Route±m |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · #btn-pin-here · DES-MOB-CI-PIN-HERE
- store: qa/store/patrol-pin/ · align: ui/review/align-ux.md
- reviewUrlIos=file://…/prototype/ios/index.html
- reviewUrlAndroid=file://…/prototype/android/index.html

## API / tasks (ids only)
- GET mobile-bff/api/v1/patrol/sessions
- T-IOS/T-AND PASS · T-BE n/a · T-QA PASS · T-REVIEW PASS

## Debt / next
- Next: — (done)
- debt: PrivacyInfo P2 Accept · nextDemoTitle leftover unused pin path · check-in sheet sibling Should
- verify: findings PASS · prior Dev builds + QA e2e carry · role SKIP yarn build/e2e
