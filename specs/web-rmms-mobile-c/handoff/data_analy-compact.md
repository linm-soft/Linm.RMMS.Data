# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: data_analy
status: done
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T08:00:00.000Z
taskId: task_fce3705f
contentHash: sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c

## Decisions
- changeScope: edit_page · NEW task · keep PO/Design artifacts · analy § Delta only
- Delta SSOT: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · Pattern B submit always on
- formPattern: Mobile full phone 430 · N/A ERP Modal/Slideout · no Excel export · no new_page
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/phat-hien · mfeStdUrl http://localhost:9301/phat-hien
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- demo: N/A
- pages edit: FindingFormPage · JournalReviewPage · FindingDetailPage
- Current→New: bỏ disabled=!canSave/!canConfirm/!feedbackQty · banner string[] + validationAttempted · GPS deny on click · capture=environment
- last: /align-mobile-to-mfe · no android/ios prototype · no new tab/route/icon · mobileApiBase only · users BFF forward if missing
- prior CRUD/schema: review PASS — không reopen schema

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| saveFinding | Lưu TK-03 | Button | Pattern B · was canSave |
| reviewSave | Lưu đối chiếu | Button | Pattern B · lech note on click |
| submitFeedback | Gửi phản hồi | Button | Pattern B · was !feedbackQty |
| confirmDone | Xác nhận recheck | Button | Pattern B · was canConfirm |
| mediaIds | ảnh | FileMulti | + capture |
| lat/lng | GPS | GPS | deny→banner on submit |
| findingList…fields | baseline C | List/form | giữ bind Live |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/phat-hien
- DES-GRID / export: N/A

## API / tasks (ids only)
- FormMode↔API: giữ GET/POST findings · recheck · PUT journal review · mobile-bff
- real-data §A+§B+§Delta: PASS
- T-*: (team_lead) UI Pattern B + capture + BFF align

## UNCLEAR
- UNCLEAR-CAPTURE-PROP: LinImageUpload capture forward vs local input
- UNCLEAR-FEEDBACK-SCOPE: feedback/assign Live vs CTX out-D — Pattern B only, no CRUD expand

## Full paths
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mobile-c.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
