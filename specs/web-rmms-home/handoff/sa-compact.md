# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-home
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:20:00.000Z
taskId: task_9771aabb
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile Home / full · phone 430 · N/A ERP Modal/Slideout · no master form
- domain: Notification (`notification`) · DOMAIN-MAP row `web-rmms-home` added · UNCLEAR-DOMAIN-MAP-HOME resolved
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-home` · mfeStdUrl http://localhost:9301/web-rmms-home
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · cấm ERP.* · cấm invent Home CRUD
- Live only: GET auth/profile · GET notification/overview · all tiles nav-only
- API Mới / entity / migration: **none** · Step 4b skip
- Home owns HM-* · shell owns TabBar+login
- REMOVED: me* / feedback / cam-view · GPS none · DES-GRID N/A
- labels: useFormOptions() · cấm hardcode VN
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| guestFaq/Privacy/Login | Static/Button | nav `/login` |
| qaPatrolPoint/IncidentNew | Button/Nav | Field / incident/new |
| grid×6 | Button/Nav | SCREENS routes |
| walletAsset | Button/Nav | `/asset` |
| notifyBadge | Number RO | GET notification/overview → `/ops` |
| profileName | Text RO | GET auth/profile |

## Screens / zones
- HM-00 · HM-01 · HM-02 · HM-03 · HM-04 · HM-05 · HM-06
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-home

## API / tasks
- FormMode↔API: guest=nav · staff=profile GET + overview GET · tiles=nav
- BFF vs API: Mobile.Bff only · no Home controller
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none blocking) DOMAIN-MAP-HOME · STD-PORT · HOME-VS-SHELL resolved

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-home-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/STATUS.md
