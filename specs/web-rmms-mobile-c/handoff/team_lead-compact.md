# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T08:25:00.000Z
taskId: task_da228f5b
contentHash: sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c
route_confirm: approve
autoApprove: ON
mfeStdRoute: /phat-hien

## Decisions
- changeScope: edit_page · editTask=1 · § Delta overlay prior CRUD wave C
- formPattern: Full (TK-02 list · TK-03 form · TK-04 review · TK-05 recheck) · phone 430 · LeaveConfirmModal
- packKind list = phone Field ≠ Kind B · DES-GRID/LinErpListFilterBar/ui-schema/LKP/HIST **WAIVE**
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/phat-hien
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files · cấm ERP.*
- BFF: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff · users forward nếu thiếu
- prior T-BE-* / T-UI-* = **done** · migration=none · no new schema/API/DTO · KEEP API-01…05
- delta FE: Pattern B 3 pages · capture=environment TK-03/05 · align 430 · no new route/tab/icon
- supersede F-01/K-01 gate-disable · soft UNCLEAR-CAPTURE-PROP · UNCLEAR-FEEDBACK-SCOPE
- demo N/A · next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| saveFinding | Lưu TK-03 | Button | Pattern B · disable only saving |
| reviewSave | Lưu đối chiếu | Button | Pattern B · lech note on click |
| submitFeedback | Gửi phản hồi | Button | Pattern B if Live · no CRUD D |
| confirmDone | Xác nhận recheck | Button | Pattern B · was canConfirm |
| validationBanner | banner | Banner | string[] on-click |
| lat/lng/accuracyM | GPS | GPS | banner on submit · no pre-disable |
| mediaIds | ảnh | FileMulti | capture=environment TK-03/05 |
| findingList…fields | baseline C | List/form | KEEP prior |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · banner · DES-LEAVE
- Leave: TK-02↔03/05 · TK-04→03 prefill · Back→hub A · Save TK-03→TK-05
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/phat-hien
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET/POST findings · GET/{id} · POST recheck · PUT journal review · peers · mobileApiBase
- T-DELTA-*: PATTERN-B-01 · CAPTURE-01 · BFF-01 · ALIGN-01 (pending)
- T-QA-CRUD-01 · T-QA-FORM-01 (pending delta AC PB-01…10)
- prior T-BE-* / T-UI-* = done
- WAIVE: KindB · FILTER · CFG · UISCHEMA · LKP · HIST · QA-FILTER
- deps: PATTERN-B + CAPTURE → ALIGN → QA · BFF parallel
- devSlash: /agent-dev (PATTERN-B·CAPTURE·BFF) · ALIGN=/align-mobile-to-mfe · LEAVE prior=/implement-show-leave-confirm

## UNCLEAR
- UNCLEAR-CAPTURE-PROP → Dev
- UNCLEAR-FEEDBACK-SCOPE → Pattern B only, no CRUD D

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/task/web-rmms-mobile-c.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/design.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
