# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-shell
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T18:50:00.000Z
taskId: task_e89dfe96
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON queued /agent-qa*

## Decisions
- changeScope: new_page
- formPattern: Mobile shell / full / sheet · login overlay · phone 430 · LeaveConfirmModal
- Grid/DES-GRID/LinErpListFilterBar/ui-schema: N/A WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-shell · :9301
- be: Auth+Notification+session-window Live · migration none · dual Route overview BFF · cấm ERP.*
- tabs: Home·Field·Incident·Work only · Field doors → peer A
- GPS: shell chrome no capture
- build: yarn build PASS · typecheck PASS · BFF Release PASS
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)
- e2e: cấm ở Dev · queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tabHome/Field/Incident/Work | tab.* | Tab/Nav | 4 only |
| loginUser/Pass | login | Text/Password | POST auth/login |
| profileName | tên | Text RO | profile lite |
| notifyBadge | badge | Number RO | GET overview |
| sessionWindow | cửa sổ HĐ | gate | GET session-window |
| doorPatrol/Inspect | tuần đường/kiểm | Button/Nav | → peer A |
| homeQuick/Grid | Home CTAs | Button/Nav | SCREENS Home |
| stackBack | back | Button | shell stack |

## Screens / zones (ids only)
- SH-00 · SH-01 · SH-02(login) · SH-03 · SH-04 · SH-05 · SH-06 · DES-LEAVE
- mfeStdUrl= http://localhost:9301/web-rmms-shell
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html

## API / tasks (ids only)
- FormMode↔API: POST auth/login · refresh · GET profile · session-window · overview · opt sessions
- entity/migration: none
- T-*: BE/PERM/SHELL/FORM/ACT/LEAVE/FIELD/PROD/UX/RESP/HIST = done · T-QA-* = pending
- WAIVE: LIST/FILTER/CFG/UISCHEMA/LKP

## Debt
- Incident/Work cite-only peer nav
- LOOKUP_STATIC fallback until OMS keys seeded
- multi key token probe

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/implement/web-rmms-shell.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/STATUS.md
