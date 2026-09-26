# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-home
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:00:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile Home / full (phone max-width 430) · N/A ERP Modal/Slideout · no master form
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-home
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Auth+Notification · cấm ERP.*
- demo: N/A
- Home: guest FAQ/privacy/login · staff quick + grid 6 + wallet + badge + profile
- grid6: supervise · patrol-map · work tab · incident tab · asset · offline
- wallet → /asset · notify → /ops · profile GET auth/profile
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: none on Home · peer deep navigator.geolocation · deny blocks coords
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-HOME · UNCLEAR-STD-PORT · UNCLEAR-HOME-VS-SHELL

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| guestFaq/Privacy/Login | guest | Static/Button | → /login |
| qaPatrolPoint/IncidentNew | quick | Button/Nav | Field / incident/new |
| grid×6 | home.grid.* | Button/Nav | SCREENS Home |
| walletAsset | wallet | Button/Nav | → /asset |
| notifyBadge | badge | Number RO | notification/overview |
| profileName | tên | Text RO | auth/profile |

## Screens / zones (ids only)
- HM-00 · HM-01 · HM-02 · HM-03 · HM-04 · HM-05 · HM-06
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-home
- DES-GRID / LinErpListFilterBar: N/A phone Home

## API / tasks (ids only)
- FormMode↔API: profile GET · overview GET · login CTA nav only
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-HOME: add DOMAIN-MAP row web-rmms-home (SA)
- UNCLEAR-STD-PORT: PLAN :9330 vs packet :9301 — follow STATUS URL
- UNCLEAR-HOME-VS-SHELL: HM-* vs shell SH-03 ownership (PO/Design)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-home-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-home-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-home.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/STATUS.md
