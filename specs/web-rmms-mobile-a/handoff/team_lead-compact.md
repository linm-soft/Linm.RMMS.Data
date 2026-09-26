# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T07:30:00.000Z
taskId: task_0169a610
contentHash: sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e
route_confirm: approve
autoApprove: ON
mfeStdRoute: /web-rmms-mobile-a

## Decisions
- changeScope: new_page
- formPattern: Full (TD-00/01/02/07·TK-00/01) · Sheet (TD-03) · phone 430 · LeaveConfirmModal
- packKind list = phone Field hub ≠ Kind B grid · DES-GRID/LinErpListFilterBar/ui-schema **WAIVE**
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration+Auth+Files · cấm ERP.*
- BFF: mobile-bff/api/v1/patrol/** · Live · migration none A
- Note-encode / plan-point: CLOSED (SA)
- demo: N/A · wave A Live-only · out TD-04/05/06·TK-02…07
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | road-routes/search |
| direction | chiều | Dropdown | Note chieu= · useFormOptions |
| userName | người | Text RO | auth/profile |
| plannedDate | ngày | Date | PlannedDate |
| kmFrom/kmTo | km | Number | Note TK-01 |
| inspectMode | hình thức | Dropdown | Note mode= |
| inspectReason | lý do | Text | if dot-xuat |
| planPointLabel | điểm KH | Text | empty OK |
| lat/lng/accuracyM | GPS | GPS | TD-03 HARD deny→block |
| content | nội dung | Text | check-in |
| photoLocalIds | ảnh | FileMulti | files/* |
| historyCards | lịch sử | List cards | GET sessions |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02(Full) · TD-03(Sheet) · TD-07 · TK-00 · TK-01(Full) · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET/POST sessions · GET/{id} · POST/GET check-ins · GET plan-points · road-routes/search · auth/profile · files/*
- T-*: T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-HUB-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01 · T-QA-FORM-01
- WAIVE: T-UI-LIST-01 KindB · T-UI-FILTER-01 · T-UI-CFG-01 · T-BE-UISCHEMA-01 · T-QA-FILTER-01/02
- deps: T-BE-* → T-UI-* → T-QA-*
- devSlash: /agent-dev (all T-UI) · T-UI-RESP-01=/dev-web-responsive

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/task/web-rmms-mobile-a.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
