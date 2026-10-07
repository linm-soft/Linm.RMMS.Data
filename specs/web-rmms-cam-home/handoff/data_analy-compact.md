# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-cam-home
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:50:00.000Z
contentHash: sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a
taskId: task_2f8d86d0

## Decisions
- changeScope: edit_page · cấm new_page · cấm route public mới (packet new_page = sai vs PLAN)
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md § enqueue #7 · Plan #2 #3 #8
- forms: HomePage · PatrolHubPage · WebRmmsShellLayout
- productRoute: /trang-chu · /tuan-duong · shell tabs (đã ship)
- mfeStdUrl alias: http://localhost:9301/web-rmms-cam-home
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · phone 430px
- be: D:/AI-QLBD/Linm.RMMS.WebService · Auth+Notification cite · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Delta: ô/tab theo vai · hub tuần đường XÓA Công tác nghiệm thu · shell không thắp Field trên /tuan-kiem|/phat-hien khi tuần kiểm
- QL_HAT = HAT-TRUONG+HAT-PHO · Giao việc ô chỉ qlHat · cấm MANAGER-RMMS · cấm SLA 24h · cấm Mục IV · cấm iOS/Android
- OUT: invent CamHome API · Excel · tab thứ tư · route mới

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| roleCaps.* | caps | Flag RO | cite role-gate |
| qaPatrolPoint/New | hero | Nav gated | tuanDuong |
| gridPatrolMap | Tuần đường | Nav gated | tuanDuong |
| gridTuanKiem | Tuần kiểm | Nav gated | → /tuan-kiem |
| gridNghiemThu | NT | Nav gated | chỉ nghiemThu |
| gridAssign | Giao việc | Nav gated | chỉ QL_HAT |
| hub.quick.nghiemThu | — | — | CẤM / xóa |
| hub.quick.* | thao tác | Nav | giữ trừ NT |
| shell.tab.* | tab | Tab | highlight theo vai |
| notifyBadge | badge | Number RO | notification |
| profileName | tên | Text RO | auth/profile |

## Screens / zones (ids only)
- CH-00 · CH-HM-* · CH-HUB-* · CH-SH-TAB
- reviewUrl= (Design next)
- peerStd deep-link= /trang-chu · /tuan-duong
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET auth/profile · notification/overview · cite patrol sessions · role-gate caps
- real-data §A+§B: PASS
- T-*: edit Home hero/tiles · remove hub NT · Shell FIELD_ROOTS by role

## UNCLEAR
- UNCLEAR-CH-ASSIGN-TARGET: gridAssign deep-link
- UNCLEAR-CH-SUPERVISE-VIS: ô Giám sát theo vai
- GAP-CH-DM-01: DOMAIN-MAP slug
- GAP-CH-HUB-NT / GAP-CH-SHELL-TAB / GAP-CH-HERO: code gaps
- DEP-CH-ROLE: web-rmms-role-gate

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-home-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-home-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-home.md
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/STATUS.md
