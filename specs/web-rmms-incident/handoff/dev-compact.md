# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:40:00.000Z
taskId: task_74641ae2
contentHash: sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015
dev_confirm: approve
autoApprove: ON
changeScope: edit_page
build: PASS
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile full INC-N · phone 430 · Pattern B SUBMIT-VALIDATE · N/A ERP Modal/DES-GRID
- mfeStdRoute: /van-de|/van-de/moi|/van-de/:id · mfeStdUrl http://localhost:9301/van-de/moi · product /incident*
- be: Mobile.Bff :5202 · Live keep · Step 4b skip · T-BE N/A · cấm ERP.*
- HARD: create disabled chỉ creating · banner string[] · GPS deny on-submit · photos PGC capture giữ
- Banner keys: asset→incident.pick.title · session→incident.session.empty · GPS→incident.gps.deny · offline→incident.offline
- Align: SSOT IncidentCreatePage · cấm tab/route/icon mới · cấm android/ios proto · no_demo
- yarn build PASS · chunk van-de · dotnet build PASS · next /agent-qa · roleOnly stop

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| create | Button Pattern B | POST incident/incidents · disabled=creating |
| validate.banner | Banner string[] | client · AC-PB-03/04 |
| gpsLock | GPS | deny on-submit · HasGps |
| gps.deny.modal | Modal | deny.title/body on submit |
| photos | PhotoRow | PGC capture · MediaIds |
| assetPick | LookupGrid | GET asset-types · miss→banner |
| sessionStamp | Text RO | GET sessions · empty→banner |
| list/filters/fab | Search+Chip+Card+FAB | keep INC-L |
| detail.close | Button | keep INC-D |

## Screens / zones
- INC-L · INC-N (Pattern B) · INC-D · peer INC-V/C/E
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- modes=?gps=deny · ?nosession=1 · ?miss=1 · ?acc=45
- peerStdUrl= http://localhost:9301/van-de/moi
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: incidents CRUD-close · sessions · asset-types · uploads · detect — Live keep
- T-UI-VAL-B-01 · T-UI-ACC-01 · T-UI-GPS-B-01 · T-UI-ALIGN-01 = done
- T-QA-VAL-B-01 queued
- debt: Lat MIG deferred · capture=PGC

## UNCLEAR
- (none) · UNCLEAR-SESS → banner done · GAP-PGC-BE-01 deferred · QA AC pending

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/implement/web-rmms-incident.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/task/web-rmms-incident.md
