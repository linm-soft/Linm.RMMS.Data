# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T08:15:00.000Z
taskId: task_86d662d7
contentHash: sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773
autoApprove: ON
mfeStdRoute: /web-rmms-mobile-b
mfeStdUrl: http://localhost:9301/web-rmms-mobile-b

## Decisions
- changeScope: edit_page
- formPattern: Full (TD-04 list · TD-05 create/edit) · phone 430 · LeaveConfirmModal
- Kind B grid/filter/ui-schema: **WAIVE**
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- build: MFE yarn build **PASS** · BE Api+Bff **PASS** · Schema_PatrolJournalLine migration shipped
- PATH: GET sessions/{id}/journal-lines · POST/GET/PUT journal-lines/{id}
- GPS deny blocks save · kmText tay · LOOKUP_STATIC 6/9/4 keys · check-in ≠ list
- next: /agent-qa* (e2eQa queued) · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | GET sessions/{id}/journal-lines |
| at | giờ | DateTime | UTC store |
| userName | người | Text RO | auth/profile |
| lat/lng/accuracyM | GPS | GPS | HARD deny→block |
| kmText | lý trình | Text | tay |
| direction | chiều | Dropdown | Note chieu= |
| weather | thời tiết | Dropdown | 6 keys |
| kind | loại | Dropdown | 9 keys |
| narrative | diễn biến | TextArea | required |
| mediaIds | ảnh | FileMulti | files guid |
| onSiteAction/Result | xử lý tại chỗ | Toggle+Text | |
| reportedTo/At | báo tuần kiểm | Button+DateTime | no TK-03 |
| violationFlag | đề nghị BB | Button | if hanh-lang |
| status | trạng thái | Dropdown | 4 keys |

## Screens / zones (ids only)
- TD-04 · TD-05 · DES-LEAVE
- Leave: TD-04↔TD-05 · Back→TD-01 · Save→TD-04
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id}/journal-lines · POST journal-lines · GET/PUT journal-lines/{id} · GET sessions/{id} · auth · files/*
- entity/migration: PatrolJournalLineEntity + Schema_PatrolJournalLine · done
- T-*: SCHEMA/CRUD/INIT/PERM · UI-LIST/FORM/ACT/LEAVE/FIELD/PROD/UX/RESP = **done**
- WAIVE: KindB · FILTER · CFG · UISCHEMA · LKP master · HIST
- debt: RequirePermission TODO · apply migration before QA live · out D scope/WO/TD-06

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/implement/web-rmms-mobile-b.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
