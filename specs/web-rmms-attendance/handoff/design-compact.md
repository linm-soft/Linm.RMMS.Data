# Handoff compact — design

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:36:00.000Z
taskId: task_4768c43c
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile hub + RO report/day/log · phone 430 · N/A Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC / DES-RPT: N/A · client aggregate GET list
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-attendance · productRoute /field/attendance*
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol attendance-logs · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01) · cấm demoDays
- UI 1-1 Android #sc-attendance · DES-MOB-ATT · hero green · 7d rows
- UNCLEAR-STD-ROUTE: follow STATUS mfeStdRoute · product /field/attendance*
- GPS: navigator.geolocation bắt buộc Chấm vào · deny = DES-MOB-GPS-DENY · cấm fake
- labels: useFormOptions() / attendance.*
- kit_missing_confirm: N/A
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroStatus/gpsMeta | hero | Text RO | state + fix |
| btnCheckIn | hero | Button | POST + GPS |
| btnReport | hero | Button/Nav | → report |
| dayRows | history | ListRow+Badge | GET aggregate |
| report/day/log | chain | List/Detail RO | GET · GET/{id} |
| post.route/lat/lng | form | Text/Hidden | POST body |
| gpsCapture | GPS | Action | deny = disable |
| empty | empty | Empty | [] / hero — |

## Screens / zones (ids only)
- ATT-00 · ATT-01 · ATT-02 · ATT-03 · ATT-04 · ATT-05 · ATT-06 · ATT-07 · ATT-08 · ATT-09
- DES-MOB-ATT · DES-MOB-GPS-DENY
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html
- reviewUrl deny=?deny=1 · empty=?empty=1 · checked=?checked=1 · offline=?offline=1
- peerStdUrl= http://localhost:9301/web-rmms-attendance
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET list · POST create · GET/{id} · client report/day
- real-data §A+§B: PASS · T-*: (team_lead) · W3 Field attendance · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ATT→SA add DOMAIN-MAP row web-rmms-attendance
- UNCLEAR-REPORT-API: P1 client aggregate · cấm invent
- UNCLEAR-EMPTY-COPY: live empty/[] · cấm demoDays
- UNCLEAR-STD-ROUTE: Design chốt follow STATUS

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
