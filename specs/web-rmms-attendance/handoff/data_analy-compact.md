# Handoff compact â€” data_analy

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:35:00.000Z
contentHash: sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a
taskId: task_0da20514

## Decisions
- changeScope: edit_page Â· NEW task Â· keep PO/Design/SA artifacts Â· cáº¥m typed CRUD new_page
- formPattern: Mobile hub + RO report/day/log Â· phone 430 Â· Pattern B validate Â· N/A ERP Modal Â· no demo
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile Â· mfeStdUrl http://localhost:9301/cham-cong Â· route `/cham-cong`
- be: D:/AI-QLBD/Linm.RMMS.WebService Â· Mobile.Bff :5202 mobile-bff/api/v1 Â· Patrol attendance-logs Â· cáº¥m ERP.*
- demo: N/A Â· align-mobile-to-mfe Â· no android/ios prototype Â· no new tab/route/icon
- Delta HARD cite SUBMIT-VALIDATE: (1) bá» disabled={!canCheckIn} (2) thiáº¿u auth/GPS/máº¡ng â†’ báº¥m má»›i bÃ¡o (3) chá»‰ disabled khi saving (4) cáº¥m Excel export (5) mobileApiBase only
- API reuse: GET/POST/GET{id} patrol/attendance-logs Â· report/day = client aggregate Â· cáº¥m invent /attendance/*
- Entry: Field hub Â· no new tab Â· no gá»™p supervise/zone/Face-NFC
- labels: useFormOptions() Â· cáº¥m hardcode VN form
- GPS: navigator.geolocation Â· deny on submit Â· cáº¥m fake Â· cáº¥m khÃ³a CTA trÆ°á»›c
- route hub: RO tá»« ca Field Â· khÃ´ng báº¯t buá»™c SearchInput P1
- open questions: UNCLEAR-GUEST-SURFACE Â· UNCLEAR-BANNER-VS-TOAST Â· CLOSED-STD-ROUTE Â· CLOSED-REPORT-API

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroStatus/gpsMeta | hero | Text RO | state + fix |
| btnCheckIn * | hero | Button | Pattern B Â· POST + GPS |
| btnReport | hero | Button/Nav | â†’ report |
| dayRows | history | ListRow+Badge | GET aggregate |
| report/day/log | chain | List/Detail RO | same GET Â· GET/{id} |
| post.route/lat/lng | form | Text/Hidden | POST body Â· route RO ca |
| gpsCapture * | GPS | Action | deny on submit |
| validationBanner * | hero | Banner | client string[] |
| empty | empty | Empty | [] / hero â€” |

## Screens / zones (ids only)
- ATT-00 Â· ATT-01 Â· ATT-02 Â· ATT-03 Â· ATT-04 Â· ATT-05 Â· ATT-06 Â· ATT-07 Â· ATT-08 Â· ATT-09
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/cham-cong
- DES-GRID / LinErpListFilterBar / Excel: N/A phone

## API / tasks (ids only)
- FormModeâ†”API: GET list Â· POST create Â· GET/{id} Â· client report/day
- real-data Â§A+Â§B: PASS Â· Â§ Delta edit_page PASS
- T-*: enhance/fix_gaps (team_lead) Â· Pattern B CTA

## UNCLEAR
- UNCLEAR-GUEST-SURFACE: guest early-return vs CTA + click-to-login â€” PO
- UNCLEAR-BANNER-VS-TOAST: migrate client toasts â†’ banner Pattern B â€” Dev
- CLOSED-STD-ROUTE: `/cham-cong` paths.ts
- CLOSED-REPORT-API: client aggregate P1

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-real-data.md
- delta cite: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-attendance.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
