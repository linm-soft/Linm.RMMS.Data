# Handoff compact — design

schemaVersion: 1
feature: web-rmms-ui-align
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:55:00.000Z

## Decisions
- changeScope: edit_page
- formPattern: Full / Overlay / Tab (phone chrome · ≠ ERP Modal/Slideout)
- Grid AC: N/A-chrome · Report AC: N/A · shared_grid_example: N/A
- real_view_parity: v1
- Leave: LeaveConfirmModal (login dirty) · useAlert (logout) · cấm native
- TabBar 5: Trang Chủ · Tuần đường (#i-mappin) · Vấn đề · Công việc · Tôi
- Me: profile·offline·signal·feedback·cam·ops·logout · settings=toast
- GAP-ME/TAB CLOSED · cấm invent route/API · cấm re-scan demo
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · ≤430
- be: Linm.RMMS.WebService + Mobile.Bff :5202 · cấm ERP.*
- design_confirm: approve (autoApprove)
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tab.items | tab.* | TabBar | 5 · stroke |
| login.* | login | Text/Password | Leave dirty |
| home.* | home | Static/Nav/RO | guest+staff |
| field.doors | field | Button/Nav | sessions badge |
| me.* | me rows | Nav/RO/toast | settings toast |
| map.tiles | tiles | Map | BFF only |
| peer lists | incident/work/… | reuse peer | live BFF |

## Screens / zones (ids only)
- UA-00 · DES-MOB-TABBAR · LOGIN · HOME · PAT-HOME · INC-LIST · MNT-LIST · ME · OPS · OFFLINE · FEEDBACK · CAM-VIEW · UA-12 deep · DES-LEAVE
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html
- peerStdUrl: http://localhost:9301/web-rmms-shell · /web-rmms-home
- mfeStdUrl: http://localhost:9301/web-rmms-ui-align
- real_view_parity: v1

## API / tasks (ids only)
- Auth login/refresh/profile · Notification overview · optional patrol/sessions
- Tiles: mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf
- Peer CRUD: DOMAIN-MAP cite only
- Next: SA → TL → Dev `/agent-dev`

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ui-align-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ui-align-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/STATUS.md
