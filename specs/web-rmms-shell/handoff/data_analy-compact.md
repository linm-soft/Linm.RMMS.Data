# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-shell
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T11:17:19.162Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile shell / full / sheet (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-shell
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Auth+Notification chrome · cấm ERP.*
- demo: N/A
- tabs: Home · Field · Incident · Work · **REMOVED** me / me-profile / me-settings / feedback / cam-view
- Field doors: Tuần đường (BDTX) · Tuần kiểm (Khu/VP) → peer web-rmms-mobile-a
- deep out: journal / kết ca / tồn tại / tần suất → web-rmms-mobile-b…e
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation on deep · deny blocks coords buttons · shell chrome no GPS
- copy: Android icon/tab/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-SHELL · UNCLEAR-STD-PORT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tabHome/Field/Incident/Work | tab.* | Tab/Nav | 4 only |
| loginUser/Pass | login | Text/Password | auth/login |
| profileName | tên | Text RO | auth/profile |
| notifyBadge | badge | Number RO | notification/overview |
| doorPatrol | tuần đường | Button/Nav | → tuan-duong |
| doorInspect | tuần kiểm | Button/Nav | → tuan-kiem |
| homeQuick/Grid | Home CTAs | Button/Nav | SCREENS Home |
| stackBack | back | Button | shell stack |

## Screens / zones (ids only)
- SH-00 · SH-01 · SH-02 · SH-03 · SH-04 · SH-05 · SH-06
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-shell
- DES-GRID / LinErpListFilterBar: N/A phone shell

## API / tasks (ids only)
- FormMode↔API: login POST auth/login · refresh · profile GET · session-window · overview GET
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-SHELL: add DOMAIN-MAP row web-rmms-shell (SA)
- UNCLEAR-STD-PORT: PLAN :9330 vs packet :9301 — follow STATUS URL

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-shell-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-shell-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-shell.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/STATUS.md
