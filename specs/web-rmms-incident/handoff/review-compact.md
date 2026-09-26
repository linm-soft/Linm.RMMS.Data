# Handoff compact — review

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T21:22:07Z
taskId: task_bc0e1942
contentHash: sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d
review_confirm: approve
autoApprove: ON
e2eQa: ON · prior QA PASS · no re-run
changeScope: new_page
hashGate: skip · unchanged

## Decisions
- formPattern: Mobile full INC-L/N/D · phone ≤430 · N/A ERP Modal · DES-GRID N/A WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-incident · :9301
- be: Mobile.Bff mobile-bff/api/v1 · Incident+Patrol+Integration+AiVision · cấm ERP.* · cấm invent hub
- P0: none · QUERY/SEC/UI-FN/BE-FN PASS · HasGps only · GPS deny/Acc≤30 · guestGate · MediaIds≤10
- Step 4b/MIG: N/A · Lat deferred · peer INC-V/C/E OOS
- next: queue completed · GAP-PKT-ROLE-01 stop

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| guestGate | Static/Button | PASS |
| search/filters/fab | Search+Chip+FAB | PASS |
| list.card | CardList HasGps | PASS |
| assetPick | LookupGrid | PASS |
| photos/detect/gps | PhotoRow/GPS | PASS |
| sessionStamp | Text RO toast | PASS |
| detail.close | Button | PASS |

## Screens / zones (ids only)
- INC-L · INC-N · INC-D · guestGate · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-incident
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html

## API / debt (ids only)
- Live: GET/POST incidents · GET{id} · close · sessions · asset-types · uploads · detect
- debt: stock e2e port soft · Lat MIG deferred · peer OOS

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
