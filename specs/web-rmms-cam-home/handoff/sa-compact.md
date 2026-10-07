# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-cam-home
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:30:00.000Z
contentHash: sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a
taskId: task_e81e73fa
autoApprove: true
solution_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới · cấm CamHome* API
- packKind: list · DES-GRID/LinErpListFilterBar: N/A phone 430
- forms: HomePage · PatrolHubPage · WebRmmsShellLayout
- productRoute: /trang-chu · /tuan-duong · shell
- mfeStdUrl: http://localhost:9301/web-rmms-cam-home (alias only)
- domain: Notification · kebab notification · bind peer web-rmms-home + web-rmms-shell
- DOMAIN-MAP: web-rmms-cam-home → Notification (GAP-CH-DM-01 CLOSED)
- be: Linm.RMMS.WebService · Auth+Notification cite · cấm ERP.*
- bff: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff
- entity/migration/Step4b: none · skip
- FormMode↔API: GET auth/profile · GET notification/overview · GET patrol/sessions cite · caps role-gate
- gridAssign → /van-de · supervise qlHat-only · hub NT REMOVE · shell Plan #8
- OUT: invent API · Excel · SLA · Mục IV · native · tab 4 · MANAGER→Giao việc
- demo: N/A · cấm rescan

## Inventory (slim)
| id | controlHint | API / notes |
|----|-------------|-------------|
| profileName | Text RO | GET auth/profile |
| notifyBadge | Number RO | GET notification/overview |
| roleCaps.* | Flag RO | profile/role-gate cite |
| qaPatrolPoint/New | Nav gated | iff tuanDuong |
| gridPatrolMap | Nav gated | → /tuan-duong |
| gridTuanKiem | Nav gated | → /tuan-kiem |
| gridNghiemThu | Nav gated | chỉ nghiemThu |
| gridAssign | Nav gated | QL_HAT → /van-de |
| gridSupervise | Nav gated | QL_HAT → /giam-sat |
| hub.quick.nghiemThu | — | CẤM xóa |
| hub.quick.supervise | Nav gated | chỉ QL_HAT |
| hub.todaySession | Card RO | GET patrol/sessions cite |
| shell.tab.* | Tab | Plan #8 FIELD_ROOTS |

## Screens / zones
- CH-00 · CH-HM-* · CH-HUB-* · CH-SH-TAB
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html
- peerStd: /trang-chu · /tuan-duong
- AC: AC-CH-HERO-* · AC-CH-TILE-* · AC-CH-SUP-* · AC-CH-HUB-NT · AC-CH-SHELL-08 · AC-CH-API

## API / tasks
- Live KEEP only · API mới=0 · migration=0
- T-*: edit Home hero/tiles · remove hub NT · Shell FIELD_ROOTS · assign→/van-de · supervise qlHat
- GAP-CH-HUB-NT/SHELL/HERO → Dev · DEP-CH-ROLE open

## UNCLEAR
- (none — DM-01 closed · ASSIGN/SUPERVISE resolved prior)

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/design.md
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/po/requirement.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/STATUS.md
- next: team_lead · task/web-rmms-cam-home.md
