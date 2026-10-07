# Handoff compact — design

schemaVersion: 1
feature: web-rmms-cam-home
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:15:00.000Z
contentHash: sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a
taskId: task_51504d81
autoApprove: true
design_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- packKind: list · DES-GRID/LinErpListFilterBar/DES-RPT: N/A phone 430
- forms: HomePage · PatrolHubPage · WebRmmsShellLayout
- productRoute: /trang-chu · /tuan-duong · shell
- mfeStdUrl: http://localhost:9301/web-rmms-cam-home
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html
- real_view_parity: v1
- be: Linm.RMMS.WebService · Auth+Notification cite · cấm ERP.*
- bff: Mobile.Bff :5202 · cấm web-bff
- demo: N/A · hash skip · cấm re-scan (GAP-DES-DEMO-RESCAN-01)
- gridAssign → /van-de (cấm role-gate · cấm /cong-viec entry)
- gridSupervise + hub.quick.supervise chỉ QL_HAT
- hub.quick.nghiemThu: REMOVE
- hero gate tuanDuong · shell Plan #8 FIELD_ROOTS
- OUT: CamHome API · Excel · SLA 24h · Mục IV · native · tab 4

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleCaps.* | Flag RO | role-gate |
| qaPatrolPoint/New | Nav gated | iff tuanDuong |
| gridPatrolMap | Nav gated | → /tuan-duong |
| gridTuanKiem | Nav gated | → /tuan-kiem |
| gridNghiemThu | Nav gated | chỉ nghiemThu |
| gridAssign | Nav gated | QL_HAT → /van-de |
| gridSupervise | Nav gated | QL_HAT → /giam-sat |
| hub.quick.nghiemThu | — | CẤM xóa |
| hub.quick.supervise | Nav gated | chỉ QL_HAT |
| shell.tab.* | Tab | Plan #8 |
| notifyBadge | Number RO | notification |
| profileName | Text RO | auth/profile |

## Screens / zones
- CH-00 · CH-HM-00/HERO/GRID/WALLET · CH-HUB-00/QUICK · CH-SH-TAB
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html
- scenes: ?role=td|tk|nt|qlhat · ?view=hub · ?view=shell&role=tk&path=tuan-kiem
- peerStd: /trang-chu · /tuan-duong
- AC: AC-CH-HERO-* · AC-CH-TILE-* · AC-CH-SUP-* · AC-CH-HUB-NT · AC-CH-SHELL-08 · AC-CH-API
- DES-A/B/C: PASS · DES-D/GRID/RPT: N/A

## API / tasks
- GET auth/profile · notification/overview · cite patrol sessions · role-gate caps
- T-*: edit Home hero/tiles · remove hub NT · Shell FIELD_ROOTS · assign→/van-de · supervise qlHat-only
- GAP-CH-DM-01 → SA · GAP-CH-HUB-NT/SHELL/HERO → Dev · DEP-CH-ROLE

## UNCLEAR
- (none open — ASSIGN + SUPERVISE resolved PO)

## Full paths
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-home-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-home-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/STATUS.md
- next: sa · be/solution-discovery.md
