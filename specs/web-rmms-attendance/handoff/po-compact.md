# Handoff compact — po

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:40:00.000Z
contentHash: sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a
taskId: task_37d1cb94

## Decisions
- changeScope: edit_page · keep Design/SA/TL/qa/review · cấm typed CRUD new_page
- packKind: list · phone hub + RO report/day/log · max-width 430 · N/A DES-GRID / Excel
- formPattern: Mobile hub Pattern B validate · N/A ERP Modal · no demo
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/cham-cong · route `/cham-cong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol attendance-logs · cấm ERP.*
- Delta HARD cite SUBMIT-VALIDATE: (1) bỏ disabled={!canCheckIn} (2) thiếu auth/GPS/mạng/route → bấm mới báo (3) chỉ disabled khi saving (4) cấm Excel (5) mobileApiBase only
- API reuse: GET/POST/GET{id} patrol/attendance-logs · report/day client aggregate · cấm invent /attendance/*
- Guest: CLOSED Pattern B — CTA visible hoặc login CTA · cấm khóa trước
- Banner vs toast: Dev — client banner string[] · API toast · GPS modal OK
- Entry: Field hub · no new tab/route/icon · no Face/NFC · no gộp supervise
- labels: useFormOptions() · cấm hardcode VN
- Align: /align-mobile-to-mfe · demo_ref=no_demo · khung 430
- autoApprove: ON → design

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroStatus/gpsMeta | hero | Text RO | state + fix |
| btnCheckIn * | hero | Button | Pattern B · POST+GPS · disabled=saving only |
| btnReport | hero | Button/Nav | → report |
| validationBanner * | hero | Banner | client string[] on submit |
| dayRows | history | ListRow+Badge | GET aggregate |
| report/day/log | chain | List/Detail RO | same GET · GET/{id} |
| post.route/lat/lng | form | Text/Hidden | POST · route RO ca |
| gpsCapture * | GPS | Action | deny on submit · cấm fake |
| empty | empty | Empty | [] / hero — |

## Screens / zones (ids only)
- ATT-00 · ATT-01 · ATT-02 · ATT-03 · ATT-04 · ATT-05 · ATT-06 · ATT-07 · ATT-08 · ATT-09
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/cham-cong
- DES-GRID / LinErpListFilterBar / Excel: N/A phone · cấm

## AC ids (delta *)
- AC-HUB-01…14 · * = 02 GPS deny · 08 guest · 11 offline/route · 12 saving · 14 no Excel

## Leave / closed
- DEFER: Face/NFC · report API
- Out: supervise · desktop · native · demo · ERP · Excel · new_page
- CLOSED: GUEST-SURFACE · STD-ROUTE · REPORT-API
- OPEN→Dev: BANNER-VS-TOAST

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-real-data.md
- delta cite: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
