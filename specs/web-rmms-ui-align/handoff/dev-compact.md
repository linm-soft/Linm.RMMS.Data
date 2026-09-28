# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-ui-align
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T07:45:00.000Z
taskId: task_8054742d
contentHash: sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b
autoApprove: ON
e2eQa: ON queued /agent-qa*

## Decisions
- changeScope: edit_page
- formPattern: Full/Overlay/Tab phone ≤430 · LeaveConfirm · N/A ERP Modal · DES-GRID N/A-chrome
- mfeStdRoute: /web-rmms-ui-align → Navigate /web-rmms-home · peer /web-rmms-shell · /web-rmms-home
- mfeStdUrl: http://localhost:9301/web-rmms-ui-align
- BFF: Mobile.Bff :5202 · cấm web-bff · cấm MapService browser · cấm ERP.*
- TabBar 5: Trang Chủ · Tuần đường (#i-mappin) · Vấn đề · Công việc · Tôi
- Me: profile·offline·signal·feedback·cam·ops·logout · settings=toast · peerPending feedback/cam
- Leave: LeaveConfirmModal login dirty · useAlert logout · cấm native
- API/migration/Step4b: none — Live cite Auth/Notification/Patrol/GisTiles
- build: yarn typecheck+build PASS · RMMS.Service.Bff Release PASS
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)
- e2e: cấm ở Dev · queued QA

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| tab.items | TabBar | T-FE-02 · 5 stroke |
| login.* | Text/Password | T-FE-03 · Leave |
| home.* | Static/Nav/RO | T-FE-04 |
| field.doors | Button/Nav | T-FE-05 |
| me.* | Nav/RO/toast | T-FE-06 |
| map.tiles | Map | T-FE-07 BFF peer |
| peer lists | reuse | T-FE-10 |

## Screens / zones (ids only)
- UA-00 · DES-MOB-TABBAR · LOGIN · HOME · FIELD · ME · peers · DES-LEAVE
- mfeStdUrl= http://localhost:9301/web-rmms-ui-align
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-shell · /web-rmms-home
- DES-GRID / LinErpListFilterBar: N/A-chrome

## API / tasks (ids only)
- FormMode↔API: login/refresh/profile · notify · patrol sessions · gis tiles · peers cite
- entity/migration: none
- T-FE-01..10 · T-BE-01 = done · T-QA-01 = pending

## Debt
- feedback/cam peer not mounted → me.peerPending toast
- Mobile.Bff nuget feed env (NU1101 FileService.Bff) · no FE impact
- OMS LOOKUP until seed

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/implement/web-rmms-ui-align.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/STATUS.md
