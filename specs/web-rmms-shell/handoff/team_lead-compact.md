# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-shell
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T11:40:00.000Z
taskId: task_fc43f334
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile shell / full / sheet · login overlay · phone 430 · LeaveConfirmModal
- Grid/DES-GRID/LinErpListFilterBar: N/A · WAIVE T-UI-LIST-01→T-UI-SHELL-01 · FILTER/CFG/UISCHEMA/LKP WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-shell · :9301
- be: Auth+Notification+session-window · mobile-bff :5202 · cấm ERP.* · migration none
- DOMAIN-MAP: web-rmms-shell → Notification/notification · CLOSED
- tabs: Home·Field·Incident·Work only · REMOVED me*
- Field doors → peer web-rmms-mobile-a · deep out B…E
- GPS: shell chrome no capture
- GAP-TL-FORMTYPE-01: PASS
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)
- e2eQa: ON queued /agent-qa* · cấm e2e ở TL/dev

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tabHome/Field/Incident/Work | tab.* | Tab/Nav | 4 only |
| loginUser/Pass | login | Text/Password | POST auth/login |
| profileName | tên | Text RO | GET auth/profile |
| notifyBadge | badge | Number RO | GET notification/overview |
| sessionWindow | cửa sổ HĐ | gate | GET session-window |
| doorPatrol/Inspect | tuần đường/kiểm | Button/Nav | → peer A |
| homeQuick/Grid | Home CTAs | Button/Nav | SCREENS Home |
| stackBack | back | Button | shell stack |

## Screens / zones (ids only)
- SH-00 · SH-01 · SH-02(login) · SH-03 · SH-04 · SH-05 · SH-06 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-shell
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: POST auth/login · refresh · GET profile · session-window · overview
- entity/migration: none
- T-*: T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-SHELL-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01 · T-QA-FORM-01
- WAIVE: T-UI-LIST-01(→SHELL) · FILTER · CFG · UISCHEMA · LKP · QA-FILTER
- devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/task/web-rmms-shell.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/STATUS.md
