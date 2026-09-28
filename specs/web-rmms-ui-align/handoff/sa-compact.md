# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-ui-align
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T07:00:00.000Z

## Decisions
- changeScope: edit_page
- formPattern: Full / Overlay / Tab (phone chrome · ≠ ERP Modal/Slideout)
- Grid AC: N/A-chrome · Report AC: N/A · filterBar: N/A (peers keep)
- entity/migration: none
- BFF: Mobile.Bff :5202 · API :5111 · cấm ERP.* / Web BFF client / MapService browser
- TabBar 5: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi
- Me: profile·offline·signal·feedback·cam·ops·logout · settings=toast · peer alias or me.peerPending
- solution_confirm: approve (autoApprove)
- gates: tz_na · xco_na · tenant_keep
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tab.items | tab.* | TabBar | LOOKUP_STATIC |
| login.* | login | Text/Password | API-01 |
| home.* | home | Static/Nav/RO | API-03/04 |
| field.doors | field | Button/Nav | API-05 opt |
| me.* | me | Nav/RO/toast | profile · peer alias |
| map.tiles | tiles | Map | API-06 BFF |
| peer lists | peers | reuse | DOMAIN-MAP |

## Screens / zones (ids only)
- UA-00 · DES-MOB-TABBAR · LOGIN · HOME · FIELD · ME · peers · DES-LEAVE
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html
- mfeStdUrl: http://localhost:9301/web-rmms-ui-align
- peerStdUrl: http://localhost:9301/web-rmms-shell · /web-rmms-home

## API / tasks (ids only)
- FormMode↔API: LOGIN→API-01..03 · badge API-04/05 · tiles API-06 · peers cite
- entity/migration: none · TZ/XCO/SHARE: n/a·n/a·tenant_keep
- Next: TL → Dev `/agent-dev`

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/design.md
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ui-align-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ui-align-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/STATUS.md
