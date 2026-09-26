# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T08:35:00.000Z
taskId: task_273bea89
contentHash: sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773
route_confirm: approve
autoApprove: ON
mfeStdRoute: /web-rmms-mobile-b

## Decisions
- changeScope: edit_page
- formPattern: Full (TD-04 list · TD-05 create/edit) · phone 430 · LeaveConfirmModal
- packKind list = phone Field list+form ≠ Kind B grid · DES-GRID/LinErpListFilterBar/ui-schema/LKP/HIST **WAIVE**
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files · cấm ERP.*
- BFF: mobile-bff/api/v1/patrol/** · PATH CLOSED nested GET + top-level POST/GET/PUT
- HARD: Schema_PatrolJournalLine + entity + migration **trước** TD-05
- GPS deny blocks save · check-in ≠ journal · labels useFormOptions
- demo: N/A · wave B · out TD-06·TK-02…07·WO/scope D
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | GET sessions/{id}/journal-lines |
| at | giờ | DateTime | |
| userName | người | Text RO | auth/profile |
| lat/lng/accuracyM | GPS | GPS | TD-05 HARD deny→block |
| kmText | lý trình | Text | tay · GAP-TD-LRS-01 |
| direction | chiều | Dropdown | default ca Note chieu= |
| weather | thời tiết | Dropdown | 6 keys LOOKUP_STATIC |
| kind | loại | Radio/Dropdown | 9 keys |
| narrative | diễn biến | TextArea | required |
| mediaIds | ảnh | FileMulti | files/* |
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
- FormMode↔API: GET sessions/{id}/journal-lines · POST journal-lines · GET/PUT journal-lines/{id} · GET sessions/{id} · auth/profile · files/*
- T-*: T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-QA-CRUD-01 · T-QA-FORM-01
- WAIVE: T-UI-LIST-01 KindB · T-UI-FILTER-01 · T-UI-CFG-01 · T-BE-UISCHEMA-01 · T-UI-LKP-01 · T-UI-HIST-01 · T-QA-FILTER-01/02
- deps: T-BE-SCHEMA → T-BE-CRUD → T-UI-* → T-QA-*
- devSlash: /agent-dev (all T-UI) · T-UI-RESP-01=/dev-web-responsive

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/task/web-rmms-mobile-b.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
