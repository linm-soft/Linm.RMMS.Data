# Handoff compact — po

schemaVersion: 1
feature: web-rmms-cam-home
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:00:00.000Z
contentHash: sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a
taskId: task_316b81f9
autoApprove: true

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- packKind: list · DES-GRID/LinErpListFilterBar: N/A phone 430
- forms: HomePage · PatrolHubPage · WebRmmsShellLayout
- productRoute: /trang-chu · /tuan-duong · shell
- mfeStdUrl: http://localhost:9301/web-rmms-cam-home
- be: Linm.RMMS.WebService · Auth+Notification cite · cấm ERP.*
- bff: Mobile.Bff :5202 · cấm web-bff
- demo: N/A · hash skip analy · cấm re-scan
- UNCLEAR-CH-ASSIGN-TARGET: gridAssign → /van-de (cấm role-gate · cấm /cong-viec entry)
- UNCLEAR-CH-SUPERVISE-VIS: gridSupervise + hub.quick.supervise chỉ qlHat/QL_HAT
- QL_HAT only Giao việc · cấm MANAGER-RMMS · hub xóa NT · shell Plan #8
- OUT: CamHome API · Excel · SLA 24h · Mục IV · native · tab 4

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleCaps.* | Flag RO | role-gate |
| qaPatrolPoint/New | Nav gated | iff tuanDuong |
| gridPatrolMap | Nav gated | tuanDuong |
| gridTuanKiem | Nav gated | → /tuan-kiem |
| gridNghiemThu | Nav gated | chỉ nghiemThu |
| gridAssign | Nav gated | QL_HAT → /van-de |
| gridSupervise | Nav gated | chỉ QL_HAT → /giam-sat |
| hub.quick.nghiemThu | — | CẤM xóa |
| hub.quick.supervise | Nav gated | chỉ QL_HAT |
| shell.tab.* | Tab | highlight theo vai |
| notifyBadge | Number RO | notification |
| profileName | Text RO | auth/profile |

## Screens / zones
- CH-00 · CH-HM-* · CH-HUB-* · CH-SH-TAB
- reviewUrl= (Design next)
- peerStd: /trang-chu · /tuan-duong
- AC: AC-CH-HERO-* · AC-CH-TILE-* · AC-CH-SUP-* · AC-CH-HUB-NT · AC-CH-SHELL-08 · AC-CH-API

## API / tasks
- GET auth/profile · notification/overview · cite patrol sessions · role-gate caps
- T-*: edit Home hero/tiles · remove hub NT · Shell FIELD_ROOTS by role · assign→/van-de · supervise qlHat-only
- GAP-CH-DM-01 → SA · GAP-CH-HUB-NT/SHELL/HERO → Dev · DEP-CH-ROLE

## UNCLEAR
- (none open — ASSIGN-TARGET + SUPERVISE-VIS resolved)

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-home-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-home-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/STATUS.md
- next: design · ui/design.md
