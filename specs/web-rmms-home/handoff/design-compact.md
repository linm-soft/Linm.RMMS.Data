# Handoff compact — design

schemaVersion: 1
feature: web-rmms-home
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:10:00.000Z
taskId: task_481730d8
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile Home / full · phone 430 · N/A ERP Modal/Slideout · no master form · DES-LEAVE N/A
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone Home tiles
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-home
- be: D:/AI-QLBD/Linm.RMMS.WebService · Auth+Notification · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Home owns HM-* · shell owns TabBar+login (UNCLEAR-HOME-VS-SHELL resolved)
- guest FAQ/privacy/login CTA · staff quick+grid6+wallet+badge+profile
- grid6: /supervise · /patrol-map · tab Work · tab Incident · /asset · /offline
- REMOVED: me* / feedback / cam-view
- labels: useFormOptions() · GPS none on Home
- open questions: UNCLEAR-DOMAIN-MAP-HOME (SA)
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| guestFaq/Privacy/Login | guest | Static/Button | → /login shell |
| qaPatrolPoint/IncidentNew | quick | Button/Nav | Field / incident/new |
| grid×6 | home.grid.* | Button/Nav | SCREENS Home |
| walletAsset | wallet | Button/Nav | → /asset |
| notifyBadge | badge | Number RO | notification/overview |
| profileName | tên | Text RO | auth/profile |

## Screens / zones (ids only)
- HM-00 · HM-01 · HM-02 · HM-03 · HM-04 · HM-05 · HM-06
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-home
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone Home

## API / tasks (ids only)
- FormMode↔API: profile GET · overview GET · login CTA nav only
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-HOME: SA add DOMAIN-MAP row web-rmms-home

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-home-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-home-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/STATUS.md
