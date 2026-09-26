# Handoff compact — po

schemaVersion: 1
feature: web-rmms-home
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T11:55:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
changeScope: new_page

## Decisions
- formPattern: Mobile Home / full · phone max-width 430 · N/A ERP Modal/Slideout · no master form
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-home
- be: Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Auth+Notification · cấm ERP.*
- demo: N/A · cấm demo/mock SSOT
- Home: guest FAQ/privacy/login · staff quick + grid6 + wallet + badge + profile
- grid6: /supervise · /patrol-map · tab Work · tab Incident · /asset · /offline
- wallet→/asset · notify→/ops · profile GET auth/profile · login CTA→/login
- REMOVED: me* / feedback / cam-view · Field deep / journal… → shell / a…e
- DES-GRID / LinErpListFilterBar: N/A phone Home tiles
- labels: useFormOptions() · cấm hardcode VN form
- GPS: none on Home
- UNCLEAR-HOME-VS-SHELL: Home owns HM-* · shell owns TabBar+login overlay
- UNCLEAR-STD-PORT: follow :9301 (STATUS) · PLAN :9330 = drift
- UNCLEAR-DOMAIN-MAP-HOME: SA add DOMAIN-MAP row (not PO block)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestFaq/Privacy/Login | Static/Button | → /login |
| qaPatrolPoint/IncidentNew | Button/Nav | Field / incident/new |
| grid×6 | Button/Nav | SCREENS Home |
| walletAsset | Button/Nav | → /asset |
| notifyBadge | Number RO | notification/overview |
| profileName | Text RO | auth/profile |

## Screens / zones
- HM-00 · HM-01 · HM-02 · HM-03 · HM-04 · HM-05 · HM-06
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-home

## API / DoD
- Live: GET auth/profile · GET notification/overview · login nav only
- DoD: guest/staff · grid6 · wallet · badge · no me · phone 430 · Android 1-1
- T-*: (team_lead)

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-home-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-home-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/STATUS.md
