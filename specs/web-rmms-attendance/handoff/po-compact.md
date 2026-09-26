# Handoff compact — po

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:33:29.847Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- packKind: list · phone hub + RO report/day/log · N/A ERP Modal/Slideout · N/A DES-GRID
- formPattern: Mobile hub max-width 430 · Android/DES-MOB-ATT 1-1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-attendance
- nativeRoutes: /field/attendance · /report · /day/:key · /log/:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol attendance-logs · cấm ERP.*
- API: GET/POST/GET{id} patrol/attendance-logs · report/day = client aggregate · cấm invent /attendance/*
- GPS: navigator.geolocation bắt buộc Chấm vào · deny = no POST · cấm fake
- Entry: Field hub · no new tab · no gộp supervise/zone/Face-NFC
- labels: useFormOptions() · cấm hardcode VN form
- demo: N/A · live empty/[] · cấm demoDays
- autoApprove: ON → Design
- Leave: Face/NFC DEFER · report API DEFER · desktop Field Out · native Out · ERP Out
- open: UNCLEAR-DOMAIN-MAP-ATT (SA) · UNCLEAR-STD-ROUTE (Design/Dev follow STATUS) · UNCLEAR-REPORT-API · UNCLEAR-EMPTY-COPY

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
- AC-HUB-01…10 (GPS · empty · POST · report chain · phone 430 · labels)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-attendance
- DES-GRID / LinErpListFilterBar: N/A phone hub

## API / tasks (ids only)
- FormMode↔API: GET list · POST create · GET/{id} · client report/day
- real-data §A+§B: PASS · analy hash skip
- T-*: (team_lead) · W3 Field attendance

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ATT: SA add DOMAIN-MAP row web-rmms-attendance
- UNCLEAR-STD-ROUTE: SCREENS /field/attendance* vs mfeStdRoute — follow STATUS
- UNCLEAR-REPORT-API: P1 client aggregate · cấm invent
- UNCLEAR-EMPTY-COPY: live empty/[] · cấm demoDays

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-attendance.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
