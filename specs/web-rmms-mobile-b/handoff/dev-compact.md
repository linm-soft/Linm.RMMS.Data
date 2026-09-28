# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: dev
status: done
skillVersion: 2026.09.19.01
writtenAt: 2026-09-27T07:40:00.000Z
taskId: task_8b5d947e
contentHash: sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e
mfeStdUrl: http://localhost:9301/web-rmms-mobile-b
autoApprove: ON
e2eQa: queued /agent-qa*

## Decisions
- changeScope: edit_page · editTask=1 · § Delta Pattern B / capture / BFF / align
- formPattern: Full TD-04/05 · phone 430 · LeaveConfirmModal KEEP
- Pattern B: Lưu disable only saving/hydrating/capturing · banner string[] + inline · 0 alert.warning client · 0 disabled=!canSave
- capture: local input capture=environment + mediaApi · LinImageUpload no capture prop (no fork)
- BFF: mobileApiBase/bindMobileApiClient · UsersMobileController forward · cấm web-bff · cấm ERP.*
- align: data-phone-frame=430 · 0 new route/tab/icon
- build: MFE yarn build PASS · Api PASS · Mobile.Bff PASS · migration=none new
- demo: N/A · Kind B WAIVE
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| save | Lưu | Button | Pattern B |
| validationBanner | banner | Banner | string[] on-click |
| lat/lng/accuracyM | GPS | GPS | banner+inline |
| narrative | diễn biến | TextArea | required · banner+inline |
| mediaIds | ảnh | FileMulti | capture=environment |
| journalList | sổ dòng | List cards | KEEP |

## Screens / zones (ids only)
- TD-04 · TD-05 · banner · DES-LEAVE
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id}/journal-lines · POST/PUT journal-lines · GET/{id} · sessions/{id} · auth/profile · files/* · integration/users (BFF)
- T-DELTA-PATTERN-B-01 · CAPTURE-01 · BFF-01 · ALIGN-01 = **done**
- T-QA-CRUD-01 · T-QA-FORM-01 pending
- build PASS · debt: RequirePermission TODO · LRS KEEP · gallery LinImageUpload no capture prop

## UNCLEAR
- UNCLEAR-CAPTURE-PROP → resolved local input
- UNCLEAR-BANNER-KEYS → JOURNAL_LOOKUP_STATIC error.*
- UNCLEAR-LRS → KEEP

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/implement/web-rmms-mobile-b.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/task/web-rmms-mobile-b.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
