# Handoff compact — design

schemaVersion: 1
feature: web-rmms-shell
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T11:30:00.000Z
taskId: task_e5bde5eb
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile shell / full / sheet · login overlay · phone 430 · LeaveConfirmModal (login dirty)
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone shell
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-shell
- be: D:/AI-QLBD/Linm.RMMS.WebService · Auth+Notification chrome · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- tabs: Home · Field · Incident · Work · REMOVED me*
- Field doors: Tuần đường · Tuần kiểm → peer web-rmms-mobile-a
- labels: useFormOptions() · GPS shell chrome no capture
- open questions: UNCLEAR-DOMAIN-MAP-SHELL (SA) · UNCLEAR-STD-PORT (follow :9301)
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tabHome/Field/Incident/Work | tab.* | Tab/Nav | 4 only |
| loginUser/Pass | login | Text/Password | auth/login |
| profileName | tên | Text RO | auth/profile |
| notifyBadge | badge | Number RO | notification/overview |
| doorPatrol | tuần đường | Button/Nav | → tuan-duong |
| doorInspect | tuần kiểm | Button/Nav | → tuan-kiem |
| homeQuick/Grid | Home CTAs | Button/Nav | SCREENS Home |
| stackBack | back | Button | shell stack |

## Screens / zones (ids only)
- SH-00 · SH-01 · SH-02(login) · SH-03 · SH-04 · SH-05 · SH-06 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-shell
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone shell

## API / tasks (ids only)
- FormMode↔API: login POST auth/login · refresh · profile GET · session-window · overview GET
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-SHELL: SA add DOMAIN-MAP row web-rmms-shell
- UNCLEAR-STD-PORT: follow STATUS :9301 (not PLAN :9330)

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-shell-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-shell-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/STATUS.md
