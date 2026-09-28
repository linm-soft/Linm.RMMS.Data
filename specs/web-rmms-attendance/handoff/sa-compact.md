# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T17:15:00.000Z
contentHash: sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a
taskId: task_8c3ee347
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · keep Live API/entity · cấm typed CRUD new_page · cấm invent /attendance/*
- formPattern: Mobile hub Pattern B · phone 430 · N/A Modal/Slideout/DES-GRID/Excel
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/cham-cong · route `/cham-cong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol attendance-logs · cấm ERP.*
- bff: Mobile.Bff :5202 mobile-bff/api/v1 · mobileApiBase only · cấm web-bff client
- API reuse: GET/POST/GET{id} patrol/attendance-logs · report/day client aggregate · API Mới=none · migration=none · Step 4b=skip
- Delta Pattern B cite SUBMIT-VALIDATE: CTA luôn bật · disabled=saving only · thiếu auth/GPS/mạng/route → bấm mới banner · GPS on-submit · cấm fake · cấm Excel
- Guest CLOSED Pattern B · STD-ROUTE CLOSED `/cham-cong` · REPORT-API CLOSED client aggregate
- labels: useFormOptions() / attendance.*
- demo: N/A · cấm Write MFE/native ở SA
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroStatus/gpsMeta | hero | Text RO | state + fix |
| btnCheckIn * | hero | Button | Pattern B · POST+GPS · disabled=saving only |
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
- peerStdUrl= http://localhost:9301/cham-cong
- DES-GRID / LinErpListFilterBar / Excel: N/A phone · cấm

## FormMode↔API
| Mode | API | Notes |
|------|-----|-------|
| hub browse | GET list | hero · dayRows · report/day aggregate |
| check-in write | POST create | GPS+auth+route on submit · Pattern B |
| log RO | GET/{id} | detail |
| auth | GET auth/profile | userName → POST · guest click login |

## UNCLEAR
- OPEN→Dev: UNCLEAR-BANNER-VS-TOAST
- CLOSED: GUEST-SURFACE · STD-ROUTE · REPORT-API · DOMAIN-MAP-ATT
- DEFER: Face/NFC · report API

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-real-data.md
- deltaCite: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
