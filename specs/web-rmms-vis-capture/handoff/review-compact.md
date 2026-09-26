# Handoff compact — review

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:50:31.318Z
taskId: task_8a5cc868
contentHash: sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97
review_confirm: approve
autoApprove: ON
e2eQa: ON · prior QA PASS · no re-run
changeScope: new_page
hashGate: skip · unchanged

## Decisions
- formPattern: Mobile full VIS · phone ≤430 · N/A ERP Modal · DES-GRID N/A WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-vis-capture · :9301 · alias /incident/vis
- be: Mobile.Bff mobile-bff/api/v1 · AiVision+Incident(+Patrol) · cấm ERP.* · cấm invent VisCapture
- P0: none · QUERY/SEC/UI-FN/BE-FN PASS · Engine=P1 · HasGps+DetectionId · GPS deny/Acc≤30 · guestGate · TITLE-01 · DUAL-01
- Step 4b/MIG: N/A · Lat deferred PGC-BE-01
- next: queue completed · GAP-PKT-ROLE-01 stop

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| guestGate | Static/Button | PASS |
| photos/detect | PhotoRow/Button | PASS |
| rowLoc/rowAcc | ListRow RO | PASS |
| rowClass/rowSev | ListRow+Badge | PASS |
| btnAttach/btnSkip | Button | PASS |
| gpsLock/modalGps | GPS | PASS |

## Screens / zones (ids only)
- VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · DES-MOB-GPS-DENY · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-vis-capture
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html

## API / debt (ids only)
- Live: uploads* · detect P1 · detections/{id} · sessions · incidents HasGps
- debt: stock e2e port soft · Lat MIG deferred · WDS/playwright soft

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
