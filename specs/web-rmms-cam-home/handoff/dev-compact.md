# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-cam-home
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T04:15:00.000Z
contentHash: sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a
taskId: task_a3101738
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · cấm CamHome* · cấm ERP.* · cấm new route/tab
- formPattern: Mobile Home+Hub+Shell ≤430 · nav-gated · Kind B WAIVE
- mfe: Linm.Web.RMMS.Mobile · product `/trang-chu` · `/tuan-duong` · shell
- mfeStdUrl: http://localhost:9301/web-rmms-cam-home (alias only)
- be: Linm.RMMS.WebService · Notification · Live profile+overview+sessions cite · Step4b skip
- Delta: hero tuanDuong · tiles caps · assign→/van-de · supervise qlHat · hub NT REMOVE · shell Plan #8
- build: MFE yarn build PASS · BE dotnet PASS
- next: /agent-qa* · e2eQa ON · GAP-PKT-ROLE-01 stop

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleCaps.* | Flag RO | auth/profile cite |
| qaPatrolPoint/New | Nav gated | iff tuanDuong |
| gridPatrolMap/TuanKiem/NghiemThu | Nav gated | caps |
| gridAssign | Nav | qlHat → /van-de |
| gridSupervise | Nav | qlHat → /giam-sat |
| hub.quick.nghiemThu | — | REMOVED |
| hub.quick.supervise | Nav gated | qlHat only |
| shell.tab.* | Tab | Plan #8 FIELD_ROOTS |
| notifyBadge/profileName | RO Live | overview · profile |

## Screens / zones (ids only)
- CH-00 · CH-HM-* · CH-HUB-* · CH-SH-TAB
- mfeStdUrl= http://localhost:9301/web-rmms-cam-home
- peerStd= /trang-chu · /tuan-duong
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html
- DES-GRID: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET auth/profile · notification/overview · patrol/sessions cite
- T-BE-* · T-UI-* · T-PERM-01 done · T-QA-* pending
- debt: e2e queued QA · GAP-CH-HUB-NT/SHELL/HERO closed

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/implement/web-rmms-cam-home.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/STATUS.md
