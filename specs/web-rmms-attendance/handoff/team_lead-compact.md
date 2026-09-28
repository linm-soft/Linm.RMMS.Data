# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T17:20:00.000Z
taskId: task_e63e7622
contentHash: sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · Pattern B delta · keep prior T-* done · cấm typed CRUD new_page
- formPattern: Mobile hub Pattern B · phone 430 · N/A Modal/DES-GRID/Excel
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/cham-cong · mfeStdUrl http://localhost:9301/cham-cong · product /field/attendance*
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Patrol attendance-logs · cấm ERP.* · invent /attendance/* · Step 4b skip · T-BE N/A
- Delta HARD cite SUBMIT-VALIDATE: bỏ disabled={!canCheckIn} · thiếu auth/GPS/mạng/route → bấm mới banner · disabled=saving only · cấm Excel · mobileApiBase only
- FormType: ATT pack keep · FILTER/CFG/LKP/LEAVE WAIVE · GAP-TL-FORMTYPE-01 PASS
- T-* pending Dev: **T-DELTA-PB-01** only · prior T-BE/UI/PERM done · T-QA-* · T-REV-01 re-queue
- Guest/STD-ROUTE/REPORT-API CLOSED · BANNER-VS-TOAST → Dev
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| btnCheckIn * | Button Pattern B | T-DELTA-PB-01 |
| validationBanner * | Banner string[] | T-DELTA-PB-01 |
| gpsCapture * | GPS on submit | T-DELTA-PB-01 |
| heroStatus/gpsMeta | Text RO | T-UI-ATT-01/02 done |
| btnReport / dayRows | Nav / ListRow | T-UI-ATT-01 done |
| report/day/log | List/Detail RO | T-UI-ATT-03 done |
| empty | Empty | T-UI-ATT-01/03 done |

## Screens / zones
- ATT-00…ATT-09 · DES-MOB-ATT · DES-MOB-GPS-DENY
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/cham-cong
- DES-GRID / Excel: N/A · cấm

## API / tasks
- FormMode↔API: GET/POST/GET{id} patrol/attendance-logs · GET auth/profile · client report/day · no BE change
- T-DELTA-PB-01 pending · devSlash=/agent-dev · qaSlash=/agent-qa* re-queue
- AC: AC-HUB-02 · 08 · 11 · 12 · 14 → T-DELTA-PB-01

## UNCLEAR
- OPEN→Dev: UNCLEAR-BANNER-VS-TOAST
- CLOSED: GUEST-SURFACE · STD-ROUTE · REPORT-API · DOMAIN-MAP-ATT

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/task/web-rmms-attendance.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/design.md
- deltaCite: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
