# Handoff compact — review

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:40:00.000Z
taskId: task_e73eaeff
contentHash: sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd
autoApprove: ON
review_confirm: approve
e2eQa: ON · prior QA PASS · cấm re-run
changeScope: edit_page
hashGate: skip · unchanged

## Decisions
- review_confirm=approve · P0=none · autoApprove=ON
- Pattern B PASS: Detect/Attach idle-on · disabled chỉ detecting/attaching · #validationBanner on click · Acc>30 no POST
- ROUTE-01: /chup-hien-truong · cấm /web-rmms-vis-capture
- QUERY/SEC/UI-FN/BE-FN: PASS · DES-GRID WAIVE · T-BE=N/A
- be: Mobile.Bff · AiVision+Incident(+Patrol) · cấm ERP.* · cấm web-bff
- hash skip · contentHash pipeline unchanged
- next: queue completed · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · **cấm** e2e/build/start:std ở role này

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos/detect | PhotoRow/Button | Pattern B · idle-on |
| rowLoc/rowAcc | ListRow RO | GPS-only + Acc≤30 handler |
| btnAttach/btnSkip | Button | Pattern B · idle-on |
| validationBanner | Banner | string[] on click |
| gpsLock/modalGps | GPS | deny→modal · 0 fake |

## Screens / zones (ids only)
- VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · #validationBanner
- mfeStdUrl= http://localhost:9301/chup-hien-truong
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html

## API / tasks (ids only)
- uploads* · detect · detections/{id} · sessions · incidents · HasGps+DetectionId
- T-01…T-06 · T-QA PASS · T-BE=N/A
- UNCLEAR: none open · SESS/VALIDATE-B/ALIGN-01 closed prior

## Debt
- GAP-QA-E2E-STOCK-PORT · GAP-PGC-BE-01 Lat · WDS soft · LG-00 soft

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
