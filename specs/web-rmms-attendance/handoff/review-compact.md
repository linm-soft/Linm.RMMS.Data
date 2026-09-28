# Handoff compact — review

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T17:10:00.000Z
taskId: task_5255729d
contentHash: sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a
autoApprove: ON
changeScope: edit_page
review_confirm: approve

## Decisions
- changeScope: edit_page · Pattern B delta review · keep prior Live CRUD
- formPattern: Mobile hub Pattern B · phone 430 · N/A Modal/DES-GRID/Excel
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/cham-cong · mfeStdUrl http://localhost:9301/cham-cong
- be: Mobile.Bff :5202 · Patrol attendance-logs · cấm ERP.* · T-BE N/A · Step 4b skip
- QUERY/SEC/UI-FN/BE-FN **PASS** · Must P0=0 · hash skip yes
- Pattern B: disabled={saving} only · validationBanner on submit · GPS on-submit · QA S1 disabled=false
- UNCLEAR CLOSED: GUEST-SURFACE · BANNER-VS-TOAST · STD-ROUTE · REPORT-API
- review **cấm** yarn build/e2e/start:std · roleOnly stop (GAP-PKT-ROLE-01)
- phase=done · chain complete

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| btnCheckIn * | Button Pattern B | disabled=saving only · PASS |
| validationBanner * | Banner string[] | on submit · PASS |
| gpsCapture * | GPS on submit | deny modal · cấm fake |
| guestGate / CTA | Guest Pattern B | S0 PASS |
| report/day/log | List/Detail RO | keep |
| empty | Empty | keep |

## Screens / zones
- ATT-00…ATT-09 · DES-MOB-ATT · LG-00
- PNG: specs/web-rmms-attendance/qa/screens/{S0,S1,QA-20}.png
- peerStdUrl= http://localhost:9301/cham-cong
- DES-GRID / Excel: N/A · cấm

## API / tasks
- FormMode↔API: GET/POST patrol/attendance-logs · GET auth/profile · client report/day
- T-REV-01 **done** · T-QA-* done · T-DELTA-PB-01 done
- AC: AC-HUB-02 · 08 · 11 · 12 · 14 Pattern B PASS

## UNCLEAR
- CLOSED: BANNER-VS-TOAST · GUEST-SURFACE · STD-ROUTE · REPORT-API
- DEFER: Face/NFC · report API · soft stock e2e

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
- next: phase=done · no next role
