# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T08:25:00.000Z
taskId: task_3bc498b6
contentHash: sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c
mfeStdUrl: http://localhost:9301/phat-hien
mfeStdRoute: /phat-hien
autoApprove: ON
e2eQa: queued /agent-qa*

## Decisions
- changeScope: edit_page · editTask=1 · § Delta Pattern B / capture / BFF / align
- formPattern: Full TK-02…05 · phone 430 · LeaveConfirmModal KEEP
- Pattern B: CTA disable only saving/hydrating/loading/capturing · banner string[] + inline · GPS deny on submit · 0 disabled=!canSave/!canConfirm/!feedbackQty
- capture: local input capture=environment TK-03/05 · LinImageUpload no fork
- BFF: UsersMobileController KEEP forward · mobileApiBase · cấm web-bff · cấm ERP.* · migration=none · Step 4b N/A
- align: data-phone-frame=430 · 0 new route/tab/icon
- build: MFE yarn build PASS · WebService.sln PASS · Mobile.Bff PASS
- demo: N/A · Kind B WAIVE · feedback Pattern B only (no CRUD D)
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| saveFinding | Lưu TK-03 | Button | Pattern B |
| reviewSave | Lưu đối chiếu | Button | Pattern B · lech note |
| submitFeedback | Gửi phản hồi | Button | Pattern B Live |
| confirmDone | Xác nhận recheck | Button | Pattern B |
| validationBanner | banner | Banner | string[] on-click |
| lat/lng/accuracyM | GPS | GPS | banner+inline |
| mediaIds | ảnh | FileMulti | capture=environment |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · banner · DES-LEAVE
- peerStdUrl= http://localhost:9301/phat-hien
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html

## API / tasks (ids only)
- FormMode↔API: GET/POST findings · GET/{id} · POST recheck · PUT journal review · feedback · integration/users (BFF)
- T-DELTA-PATTERN-B-01 · CAPTURE-01 · BFF-01 · ALIGN-01 = **done**
- T-QA-CRUD-01 · T-QA-FORM-01 pending
- build PASS · debt: RequirePermission TODO · gallery LinImageUpload no capture prop

## UNCLEAR
- UNCLEAR-CAPTURE-PROP → resolved local input
- UNCLEAR-FEEDBACK-SCOPE → Pattern B only, no CRUD D

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/implement/web-rmms-mobile-c.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/task/web-rmms-mobile-c.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
