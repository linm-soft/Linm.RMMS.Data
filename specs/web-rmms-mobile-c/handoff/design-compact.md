# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: design
status: done
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T08:20:00.000Z
taskId: task_957b179c
contentHash: sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · keep zones TK-02…05 · Delta Pattern B CTA/banner + capture
- formPattern: Full phone 430 · LeaveConfirmModal · N/A ERP Modal/Slideout · no DES-GRID/export
- Pattern B: submit always-on · disabled only saving/hydrating · validationAttempted · banner string[] · API toast · GPS deny on click
- capture=environment TK-03/05 · no fork LinImageUpload
- mfeStdRoute=/phat-hien · mfeStdUrl http://localhost:9301/phat-hien
- be Patrol · cấm ERP.* · mobileApiBase only · no schema reopen
- demo N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- soft UNCLEAR-CAPTURE-PROP · UNCLEAR-FEEDBACK-SCOPE → Dev
- autoApprove ON → design_confirm approve · next /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| saveFinding | Lưu TK-03 | Button | PB · was canSave |
| reviewSave | Lưu đối chiếu | Button | PB · lech note on click |
| submitFeedback | Gửi phản hồi | Button | PB if Live |
| confirmDone | Xác nhận recheck | Button | PB · was canConfirm |
| mediaIds | ảnh | FileMulti | + capture |
| lat/lng | GPS | GPS | deny→banner on submit |
| findingList…fields | baseline C | List/form | keep bind Live |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/phat-hien
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST findings · recheck · PUT journal review · mobile-bff · users forward if missing
- real-data §A+§B+§Delta: PASS
- T-*: (team_lead) Pattern B 3 pages + capture + BFF align

## UNCLEAR
- UNCLEAR-CAPTURE-PROP: prop vs local input — Dev
- UNCLEAR-FEEDBACK-SCOPE: Pattern B only, no CRUD D

## Full paths
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-real-data.md
- po-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
