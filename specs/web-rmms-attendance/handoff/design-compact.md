# Handoff compact — design

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T17:05:00.000Z
taskId: task_61e25304
contentHash: sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a
design_confirm: approve
autoApprove: ON
real_view_parity: v1

## Decisions
- changeScope: edit_page · keep SA/TL/qa/review · cấm typed CRUD new_page
- formPattern: Mobile hub Pattern B · phone 430 · N/A Modal/Slideout/DES-GRID/Excel
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/cham-cong · route `/cham-cong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol attendance-logs · cấm ERP.*
- bff: Mobile.Bff :5202 mobile-bff/api/v1 · mobileApiBase only
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Delta Pattern B cite SUBMIT-VALIDATE: CTA luôn bật · disabled=saving only · thiếu auth/GPS/mạng/route → bấm mới banner · GPS modal on-submit · cấm fake · cấm Excel
- Guest CLOSED: CTA visible · click login/banner
- labels: useFormOptions() / attendance.*
- align: /align-mobile-to-mfe · no new tab/route/icon
- kit_missing_confirm: N/A
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroStatus/gpsMeta | hero | Text RO | state + fix |
| btnCheckIn * | hero | Button | Pattern B · disabled=saving only |
| btnReport | hero | Button/Nav | → report |
| validationBanner * | hero | Banner | client string[] on submit |
| dayRows | history | ListRow+Badge | GET aggregate |
| report/day/log | chain | List/Detail RO | GET · GET/{id} |
| post.route/lat/lng | form | Text/Hidden | POST · route RO ca |
| gpsCapture * | GPS | Action | deny on submit · cấm fake |
| empty | empty | Empty | [] / hero — |

## Screens / zones (ids only)
- ATT-00 · ATT-01 · ATT-02 · ATT-03 · ATT-04 · ATT-05 · ATT-06 · ATT-07 · ATT-08 · ATT-09
- DES-MOB-ATT · DES-MOB-GPS-DENY
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html
- reviewUrl deny=?deny=1 · empty=?empty=1 · checked=?checked=1 · offline=?offline=1 · guest=?guest=1
- peerStdUrl= http://localhost:9301/cham-cong
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar / Excel: N/A phone · cấm

## API / tasks (ids only)
- FormMode↔API: GET list · POST create · GET/{id} · client report/day
- real-data §A+§B: PASS · § Delta edit_page PASS
- T-DELTA-PB-01 Pattern B CTA · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- OPEN→Dev: UNCLEAR-BANNER-VS-TOAST (client banner · API toast · GPS modal OK)
- CLOSED: GUEST-SURFACE · STD-ROUTE · REPORT-API
- DEFER: Face/NFC · report API

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
