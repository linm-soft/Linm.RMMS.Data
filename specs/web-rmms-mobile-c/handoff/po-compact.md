# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: po
status: done
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T08:10:00.000Z
taskId: task_1ea5ccc8
contentHash: sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c

## Decisions
- packKind=list confirmed · DES-GRID/export N/A phone · no new_page
- changeScope=edit_page · NEW task Pattern B + capture · keep prior CRUD AC L/F/R/K
- Delta SSOT: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- PB: submit always-on · disabled only saving · validationAttempted · banner string[] · API toast · GPS deny on click
- capture=environment TK-03/05 · no fork LinImageUpload
- mfeStdRoute=/phat-hien · mfeStdUrl http://localhost:9301/phat-hien · phone 430
- be Patrol · cấm ERP.* · mobileApiBase only · no schema reopen
- supersede F-01/K-01 gate-disable · soft UNCLEAR-CAPTURE-PROP · UNCLEAR-FEEDBACK-SCOPE
- autoApprove ON → Design next

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| saveFinding | Lưu TK-03 | Button | PB-01..06 |
| reviewSave | Lưu đối chiếu | Button | PB + R-01 |
| submitFeedback | Gửi phản hồi | Button | PB-09 if Live |
| confirmDone | Xác nhận recheck | Button | PB-07 |
| mediaIds | ảnh | FileMulti | + capture |
| lat/lng | GPS | GPS | deny→banner on submit |
| findingList…fields | baseline C | List/form | keep bind Live |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/phat-hien
- AC: L-01..07 · F-02..08 · R-01..03 · K-02..04 · PB-01..10

## API / tasks (ids only)
- findings GET/POST · recheck · journal review · mobile-bff · users forward if missing
- T-*: (team_lead) Pattern B 3 pages + capture + BFF align

## UNCLEAR
- UNCLEAR-CAPTURE-PROP: prop vs local input — Dev
- UNCLEAR-FEEDBACK-SCOPE: Pattern B only, no CRUD D

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
