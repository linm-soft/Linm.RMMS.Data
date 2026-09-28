# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:50:00.000Z
taskId: task_714f7885
contentHash: sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a
autoApprove: ON
changeScope: edit_page
dev_confirm: approve

## Decisions
- changeScope: edit_page · Pattern B delta only · keep prior Live CRUD/UI
- formPattern: Mobile hub Pattern B · phone 430 · N/A Modal/DES-GRID/Excel
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/cham-cong · mfeStdUrl http://localhost:9301/cham-cong
- be: Mobile.Bff :5202 · Patrol attendance-logs · cấm ERP.* · Step 4b skip · T-BE N/A
- T-DELTA-PB-01 PASS: bỏ disabled={!canCheckIn} · disabled=saving only · thiếu mạng/GPS/route → banner string[] on submit · GPS capture on-submit + modal · API toast
- UNCLEAR-BANNER-VS-TOAST CLOSED (Dev)
- Build: yarn build PASS · dotnet build Api PASS
- e2eQa: queued QA · cấm Dev e2e
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| btnCheckIn * | Button Pattern B | disabled=saving only |
| validationBanner * | Banner string[] | client on submit |
| gpsCapture * | GPS on submit | modal deny · cấm fake |
| heroStatus/gpsMeta | Text RO | keep |
| btnReport / dayRows | Nav / ListRow | keep |
| report/day/log | List/Detail RO | keep |
| empty | Empty | keep |

## Screens / zones
- ATT-00…ATT-09 · DES-MOB-ATT · DES-MOB-GPS-DENY
- peerStdUrl= http://localhost:9301/cham-cong
- DES-GRID / Excel: N/A · cấm

## API / tasks
- FormMode↔API: GET/POST/GET{id} patrol/attendance-logs · GET auth/profile · client report/day · no BE change
- T-DELTA-PB-01 done · T-QA-* · T-REV-01 pending
- AC: AC-HUB-02 · 08 · 11 · 12 · 14 → Pattern B

## UNCLEAR
- CLOSED: BANNER-VS-TOAST · GUEST-SURFACE · STD-ROUTE · REPORT-API
- DEFER: Face/NFC · report API

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/implement/web-rmms-attendance.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/task/web-rmms-attendance.md
- deltaCite: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
