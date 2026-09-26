# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-shell
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T11:35:00.000Z
taskId: task_49940202
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile shell / full / sheet · login overlay · phone 430 · LeaveConfirmModal
- Grid/DES-GRID/LinErpListFilterBar: N/A phone shell
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-shell
- be: D:/AI-QLBD/Linm.RMMS.WebService · Notification+Auth+Contract · cite Patrol/Incident/Maintenance · cấm ERP.*
- DOMAIN-MAP: web-rmms-shell → Notification/notification · CLOSED
- BFF: mobile-bff/api/v1/** :5202 · API owns Live · web-bff cite only
- entity/migration: **none** · cấm invent shell CRUD / me*
- STD-PORT CLOSED: follow :9301
- demo: N/A · Live-only shell chrome
- gates: TZ=N/A · XCO=N/A · SHARE=tenant_keep · GPS chrome no capture
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tabHome/Field/Incident/Work | tab.* | Tab/Nav | 4 only |
| loginUser/Pass | login | Text/Password | POST auth/login |
| profileName | tên | Text RO | GET auth/profile |
| notifyBadge | badge | Number RO | GET notification/overview |
| sessionWindow | cửa sổ HĐ | gate | GET contract-accounts/session-window |
| doorPatrol | tuần đường | Button/Nav | → peer A · opt sessions |
| doorInspect | tuần kiểm | Button/Nav | → peer A |
| homeQuick/Grid | Home CTAs | Button/Nav | nav only |
| stackBack | back | Button | shell stack |

## Screens / zones (ids only)
- SH-00 · SH-01 · SH-02(login) · SH-03 · SH-04 · SH-05 · SH-06 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-shell

## API / tasks (ids only)
- FormMode↔API: POST auth/login · POST auth/refresh-token · GET auth/profile · GET session-window · GET notification/overview · opt GET patrol/sessions · cite incident/maintenance peer
- entity/migration: none
- TZ/XCO/SHARE: N/A · N/A · tenant_keep
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- none (DOMAIN-MAP-SHELL · STD-PORT CLOSED)

## Full paths (Read only if needed)
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-shell-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/STATUS.md
