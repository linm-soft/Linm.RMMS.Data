# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-cam-home
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:45:00.000Z
contentHash: sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a
taskId: task_0b8c6a40
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamHome* / product slug
- DOMAIN-MAP: Notification · bind peer web-rmms-home + web-rmms-shell · GAP-CH-DM-01 CLOSED
- formPattern: Mobile Home+Hub+Shell ≤430 · nav-gated · N/A ERP Modal
- DES-GRID / LinErpListFilterBar: N/A phone · WAIVE Kind B LIST/FILTER/CFG/HIST/FORM/LEAVE/LKP · GAP-TL-FORMTYPE-01 PASS
- Delta: hero tuanDuong · tiles roleCaps · assign→/van-de · supervise qlHat · hub NT REMOVE · shell Plan #8
- Role: deps web-rmms-role-gate · QL_HAT=HAT-* only · cấm MANAGER suy
- productRoute: /trang-chu · /tuan-duong · shell · mfeStdUrl alias queue only
- BFF: Mobile.Bff :5202 · cấm web-bff · cấm ERP.*
- Step 4b/migration/API mới: none · skip · Live profile+overview+sessions cite
- cấm: CamHome API · Excel · SLA 24h · Mục IV · native · tab 4 · /cong-viec assign
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| roleCaps.* | Flag RO | T-BE-PROF-01 · T-PERM-01 |
| qaPatrolPoint/New | Nav gated | T-UI-HERO-01 |
| gridPatrolMap/TuanKiem/NghiemThu | Nav gated | T-UI-TILE-01 |
| gridAssign | Nav → /van-de | T-UI-TILE-01 · T-PERM-01 |
| gridSupervise | Nav → /giam-sat | T-UI-TILE-01 · T-PERM-01 |
| hub.quick.nghiemThu | — | CẤM · T-UI-HUB-01 |
| hub.quick.supervise | Nav gated | T-UI-HUB-01 |
| shell.tab.* | Tab Plan #8 | T-UI-SHELL-01 |
| notifyBadge/profileName | RO Live | T-BE-API-01 · T-BE-PROF-01 |

## Screens / zones (ids only)
- CH-00 · CH-HM-* · CH-HUB-* · CH-SH-TAB
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html
- peerStd deep-link= /trang-chu · /tuan-duong
- DES-GRID: N/A

## API / tasks (ids only)
- FormMode↔API: GET auth/profile · notification/overview · patrol/sessions cite · roleCaps
- T-BE-PROF-01 · T-BE-API-01 · T-PERM-01 · T-UI-HERO-01 · T-UI-TILE-01 · T-UI-HUB-01 · T-UI-SHELL-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-ALIGN-01 · T-QA-HOME-01 · T-QA-CRUD-01
- WAIVE: T-UI-LIST/FILTER/CFG/HIST/FORM/LEAVE/LKP · T-QA-FILTER-* Kind B
- deps: T-BE-* → T-UI-* → T-QA-*
- devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- none open · ASSIGN/SUPERVISE/DM resolved · CARRY GAP-CH-HUB-NT/SHELL/HERO + DEP-CH-ROLE → Dev

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/task/web-rmms-cam-home.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/STATUS.md
