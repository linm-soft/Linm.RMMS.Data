# Handoff compact — qa

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: qa
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T13:22:00.000Z
taskId: task_aa684928
slash: /agent-qa-mobile
mode: feature_context
changeScope: edit_page
autoApprove: ON
e2eQa: ON
contentHash: sha256:patrol-checkin-control-hint-20260912-edit
bffContentHash: sha256:patrol-checkin-mobile-bff-20260912-edit

## Decisions
- edit_page delta QA · FileService+plan-points · e2e **ok:true**
- formPattern: sheet · `#sheet-checkin`
- mfeStdUrl: none (native_dual) · cấm start:std
- align: Aligned · Must 0 · autoApprove ON
- data: live session QL.1 · cấm demo Phước Dinh assert
- Android login: Back+scroll btn-login (fix title-tap/Enter → GAP-QA-STORE-03)
- phase_to: review (/agent-review-mobile)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sheet-checkin | Ghi điểm tuần | Sheet | A3+P6 |
| ci-match-banner | plan-BE / match | Banner | live: chưa có plan BE |
| plan/route/gps | readonly | Text | QL.1 · GPS live |
| ci-content | Nội dung | TextArea | fill e2e |
| ci-add-photo | Ảnh | PhotoRow | P6-2 |
| ci-btn-save | Ghi nhận | Primary | gated |

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- reviewUrlIos=file://…/prototype/ios/index.html#sheet-checkin
- reviewUrlAndroid=file://…/prototype/android/index.html#sheet-checkin
- store: qa/store/patrol-checkin/ · screens A11/A9/A3/P6/P6-2 · ok:true

## API / tasks (ids only)
- A10-BFF `:5202` PASS
- GET patrol/sessions · GET plan-points · POST check-ins
- T-QA-TAB-01 PASS

## Debt / next
- Next: `/agent-review-mobile` (không chạy trong task này)
- Should: GAP-QA-A11Y-SHEET-TAG-01 · GAP-QA-GPS-TIMING-01 · GAP-QA-PLAN-BE-EMPTY-01 · FileService :5018

## UNCLEAR
- none
