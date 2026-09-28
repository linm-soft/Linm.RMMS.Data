# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.19.01
writtenAt: 2026-09-27T07:20:00.000Z
taskId: task_5e771d04
contentHash: sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e
route_confirm: approve
autoApprove: ON
mfeStdRoute: /web-rmms-mobile-b

## Decisions
- changeScope: edit_page · editTask=1 · § Delta overlay prior wave B
- formPattern: Full (TD-04 list · TD-05 create/edit) · phone 430 · LeaveConfirmModal
- packKind list = phone Field ≠ Kind B · DES-GRID/LinErpListFilterBar/ui-schema/LKP/HIST/RPT **WAIVE**
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files · cấm ERP.*
- BFF: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff · users forward nếu thiếu
- prior T-BE-* / T-UI-* = **done** · migration=none new · no new API/DTO
- delta FE: Pattern B · capture=environment · align 430 · no new route/tab/icon
- demo: N/A · out TD-06·TK-02…07·WO/scope D
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| save | Lưu | Button | Pattern B · disable only saving |
| validationBanner | banner | Banner | string[] on-click |
| lat/lng/accuracyM | GPS | GPS | banner on submit · no pre-disable |
| narrative | diễn biến | TextArea | required · banner+inline |
| mediaIds | ảnh | FileMulti | capture=environment |
| journalList | sổ dòng | List cards | KEEP prior |

## Screens / zones (ids only)
- TD-04 · TD-05 · banner · DES-LEAVE
- Leave: TD-04↔TD-05 · Back→TD-01 · Save→TD-04
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id}/journal-lines · POST/PUT journal-lines · GET/{id} · sessions/{id} · auth/profile · files/* · mobileApiBase
- T-DELTA-*: PATTERN-B-01 · CAPTURE-01 · BFF-01 · ALIGN-01 (pending)
- T-QA-CRUD-01 · T-QA-FORM-01 (pending delta AC)
- prior T-BE-* / T-UI-* = done
- WAIVE: KindB · FILTER · CFG · UISCHEMA · LKP · HIST · QA-FILTER · RPT
- deps: PATTERN-B + CAPTURE → ALIGN → QA · BFF parallel
- devSlash: /agent-dev (PATTERN-B·CAPTURE·BFF) · ALIGN=/align-mobile-to-mfe · LEAVE prior=/implement-show-leave-confirm

## UNCLEAR
- UNCLEAR-CAPTURE-PROP → Dev
- UNCLEAR-BANNER-KEYS → Dev prefer existing keys
- UNCLEAR-LRS → kmText tay KEEP

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/task/web-rmms-mobile-b.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/design.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
