# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-ui-align
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T07:05:00.000Z
taskId: task_d18fcac3
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: edit_page · formPattern: Full/Overlay/Tab phone ≤430 · N/A ERP Modal · DES-GRID N/A-chrome
- mfeStdRoute: /web-rmms-ui-align · mfeStdUrl http://localhost:9301/web-rmms-ui-align
- route_confirm: confirm_existing · productRoute reuse only · cấm invent slug
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · cấm ERP.* · cấm MapService browser
- TabBar 5: Trang Chủ · Tuần đường (#i-mappin) · Vấn đề · Công việc · Tôi
- Me: profile·offline·signal·feedback·cam·ops·logout · settings=toast · peer alias or me.peerPending
- Leave: LeaveConfirmModal (login dirty) · useAlert (logout) · cấm native
- FormMode↔API: login/refresh/profile · notify · patrol sessions opt · gis tiles · peers DOMAIN-MAP cite
- API mới / migration / Step 4b: none — Dev cite Live only
- FormType: Kind B LIST/FILTER/CRUD N/A · apply T-LEAVE/UX/RESP/MAP/PROD via T-FE-*
- T-*: T-FE-01..10 · T-BE-01 cite · T-QA-01 (QA only e2e)
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tab.items | tab.* | TabBar | T-FE-02 |
| login.* | login | Text/Password | T-FE-03 · Leave |
| home.* | home | Static/Nav/RO | T-FE-04 |
| field.doors | field | Button/Nav | T-FE-05 |
| me.* | me | Nav/RO/toast | T-FE-06 |
| map.tiles | tiles | Map | T-FE-07 BFF |
| peer lists | peers | reuse | T-FE-10 |

## Screens / zones (ids only)
- UA-00 · DES-MOB-TABBAR · LOGIN · HOME · FIELD · ME · peers · DES-LEAVE
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html
- peerStdUrl: http://localhost:9301/web-rmms-shell · /web-rmms-home
- DES-GRID / LinErpListFilterBar: N/A-chrome

## API / tasks (ids only)
- FormMode↔API: API-01..06 + peer cite
- T-FE-01 mount · T-FE-02 TabBar · T-FE-03 LOGIN · T-FE-04 HOME · T-FE-05 FIELD · T-FE-06 ME · T-FE-07 tiles · T-FE-08 Leave · T-FE-09 UX/labels · T-FE-10 peers · T-BE-01 cite · T-QA-01
- devSlash=/agent-dev · qaSlash=/agent-qa

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/task/web-rmms-ui-align.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/handoff/sa-compact.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/STATUS.md
