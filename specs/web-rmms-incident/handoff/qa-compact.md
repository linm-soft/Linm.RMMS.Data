# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:48:31.287Z
taskId: task_e56fa3bd
contentHash: sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015
qa_confirm: approve
autoApprove: ON
changeScope: edit_page
e2eQa: ON · PASS
phase: review (cấm done)

## Decisions
- changeScope: edit_page · Pattern B INC-N · e2e runtime PASS
- formPattern: Mobile 430 · Pattern B · N/A ERP Modal/DES-GRID
- mfeStdRoute: /van-de|/van-de/moi|/van-de/:id · mfeStdUrl http://localhost:9301/m/van-de/moi
- be: Mobile.Bff :5202 · API :5111 · docker PASS · cấm ERP.*
- HARD: create disabled chỉ creating · banner string[] · GPS deny on-submit · auth gate LG-00
- cases: S0/S1/QA-20/PB-01/PB-GPS PASS · PNG distinct · 0 P0
- stock yarn e2e-qa FAIL soft (port 5101/5201) · capture workaround PASS
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | QA |
|----|-------------|-----|
| create | Button Pattern B | PB-01 createAlwaysOn |
| validate.banner | Banner string[] | PB-01 session.empty |
| gpsLock | GPS | PB-GPS Acc=12 · deny on-submit |
| gps.deny.modal | Modal | PB-GPS PASS |
| assetPick | LookupGrid | PB-01 pick PAVEMENT |
| sessionStamp | Text RO | banner empty session |
| list/filters/fab | Search+Chip+Card+FAB | S1 PASS |
| auth.gate | LoginPage LG-00 | S0/QA-20 PASS |

## Screens / zones
- INC-L · INC-N (Pattern B) · LG-00 · peer INC-D OOS smoke
- screens: qa/screens/{S0,S1,QA-20,PB-01,PB-GPS}.png
- modes=?gps=deny · ?miss=1
- peerStdUrl= http://localhost:9301/m/van-de/moi
- DES-GRID / LinErpListFilterBar: N/A · WAIVE

## API / tasks
- FormMode↔API: incidents Live · sessions · asset-types — Live keep
- T-QA-VAL-B-01 PASS · T-QA-CRUD/GRID/CREATE/GPS PASS
- debt: GAP-QA-E2E-STOCK-PORT soft · Lat MIG deferred

## UNCLEAR
- (none)

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/qa/scenarios.md
- result: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/qa/screens/_capture_incident.result.json
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
- prior-dev: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/handoff/dev-compact.md
