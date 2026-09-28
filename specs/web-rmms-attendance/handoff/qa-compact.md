# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T17:05:00.000Z
taskId: task_230b5f05
contentHash: sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a
autoApprove: ON
changeScope: edit_page
e2eQa: ON
qa_confirm: approve

## Decisions
- changeScope: edit_page · Pattern B delta re-QA · keep prior Live CRUD
- formPattern: Mobile hub Pattern B · phone 430 · N/A Modal/DES-GRID/Excel
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/cham-cong · mfeStdUrl http://localhost:9301/cham-cong
- be: Mobile.Bff :5202 · docker api :5111 · cấm ERP.* · T-BE N/A
- E2E S0/S1/QA-20 **PASS** · `_capture_att.mjs` · LoginPage `/dang-nhap` (#f-user/#f-pass/#btn-login)
- Pattern B: S1 patternB.disabled=false · btnCheckIn not pre-gated
- Build yarn build PASS · docker up PASS · start:std reuse :9301 · **cấm** kill worker
- stock yarn e2e-qa FAIL soft (API port 5101 / blank deep-link) · feature capture authoritative
- **cấm** phase=done · next /agent-review · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| btnCheckIn * | Button Pattern B | S1 disabled=false |
| validationBanner * | Banner string[] | code Dev · not headed-forced |
| gpsCapture * | GPS Acc=12 | S1 hero ±12 m |
| guestGate / CTA | Guest Pattern B | S0 PASS |
| login page | LG-00 | QA-20 #f-user |
| report/day/log | List/Detail RO | keep prior |

## Screens / zones
- ATT-00…ATT-09 · DES-MOB-ATT · LG-00
- PNG: specs/web-rmms-attendance/qa/screens/{S0,S1,QA-20}.png
- peerStdUrl= http://localhost:9301/cham-cong
- DES-GRID / Excel: N/A · cấm

## API / tasks
- FormMode↔API: GET/POST patrol/attendance-logs · GET auth/profile · client report/day
- T-QA-CRUD-01 · T-QA-ATT-01 · T-QA-DELTA-PB-01 **PASS** · T-REV-01 pending
- AC: AC-HUB-02 · 08 · 11 · 12 · 14 Pattern B smoke OK

## UNCLEAR
- CLOSED: BANNER-VS-TOAST · GUEST-SURFACE · STD-ROUTE · REPORT-API
- DEFER: Face/NFC · report API · GPS deny headed

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/qa/scenarios.md
- capture: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/qa/screens/_capture_att.result.json
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
- next: /agent-review*
