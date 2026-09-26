# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:30:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile hub + RO report/day/log (phone max-width 430) · N/A ERP Modal/Slideout · master no demo · /erp-form-context labels
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-attendance
- nativeRoutes: /field/attendance · /report · /day/:key · /log/:id · DES-MOB-ATT 1-1
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol attendance-logs · cấm ERP.*
- demo: N/A · cite #sc-attendance* only · cấm demoDays/demoHero
- API reuse: GET/POST/GET{id} patrol/attendance-logs · report/day = client aggregate · cấm invent /attendance/*
- Entry: Field hub · no new tab · no gộp supervise/zone/Face-NFC
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation bắt buộc Chấm vào · deny = no POST · cấm fake
- copy: Android/DES-MOB-ATT parity · cấm sửa iOS/Android · cấm MFE desktop Field
- open questions: UNCLEAR-DOMAIN-MAP-ATT · UNCLEAR-STD-ROUTE · UNCLEAR-REPORT-API · UNCLEAR-EMPTY-COPY

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroStatus/gpsMeta | hero | Text RO | state + fix |
| btnCheckIn | hero | Button | POST + GPS |
| btnReport | hero | Button/Nav | → report |
| dayRows | history | ListRow+Badge | GET aggregate |
| report/day/log | chain | List/Detail RO | same GET · GET/{id} |
| post.route/lat/lng | form | Text/Hidden | POST body |
| gpsCapture | GPS | Action | deny = disable |
| empty | empty | Empty | [] / hero — |

## Screens / zones (ids only)
- ATT-00 · ATT-01 · ATT-02 · ATT-03 · ATT-04 · ATT-05 · ATT-06 · ATT-07 · ATT-08 · ATT-09
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-attendance
- DES-GRID / LinErpListFilterBar: N/A phone hub

## API / tasks (ids only)
- FormMode↔API: GET list · POST create · GET/{id} · client report/day
- real-data §A+§B: PASS
- T-*: (team_lead) · W3 Field attendance

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ATT: add DOMAIN-MAP row web-rmms-attendance (SA) · slug attendance exists
- UNCLEAR-STD-ROUTE: SCREENS /field/attendance* vs mfeStdRoute /web-rmms-attendance — follow STATUS
- UNCLEAR-REPORT-API: BE report/zones MISSING — P1 client aggregate · cấm invent
- UNCLEAR-EMPTY-COPY: live empty/[] · cấm demoDays (peer mobile legacy)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-attendance.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- peer: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/attendance.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
