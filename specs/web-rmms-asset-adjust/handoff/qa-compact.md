# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-asset-adjust
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:45:00.000Z
taskId: task_54a0eee2
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-asset-adjust
mfeStdRoute: /web-rmms-asset-adjust

## Decisions
- formPattern: Mobile list + confirm · phone 430 · no ERP Modal · no PUT P1
- Smoke S0/S1/QA-20 **PASS** · capture_aadjust · std :9301 existing · no kill worker
- Soft-delete AA-08 **WAIVE** smoke (destructive) · edit AA-07 present · Live GET 50 rows
- stock e2e-qa **FAIL soft** :5101 vs :5111 · workaround capture + junction
- DES-GRID / filter: WAIVE phone · labels assetAdjust.*
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01) · **cấm** phase=done
- P0: none

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub |
| pageTitle | Text RO | assetAdjust.title |
| search | Text/Search | GET ?search |
| listRow | ListRow | GET road-assets · no LatLng |
| remove | Button+Dialog | DELETE soft · AA-08 WAIVE smoke |
| edit | Button/Nav | peer list ?id= · no PUT |
| tileAdjust | Hub tile | → Adjust (QA-20) |

## Screens / zones
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-06 · AA-07 · (AA-05/08 WAIVE smoke)
- S0/S1/QA-20 PNG: specs/web-rmms-asset-adjust/qa/screens/
- peerStdUrl= http://localhost:9301/web-rmms-asset-adjust
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html

## API / tasks
- FormMode↔API: GET road-assets · DELETE soft · edit=nav peer
- T-QA-LIST/SEARCH/EDIT/NAV/VI-ENC PASS · T-QA-SOFTDEL/EMPTY/FILTER WAIVE
- T-06 qa done · T-07 review pending

## UNCLEAR
- (none blocking) · GAP-QA-E2E-STOCK-PORT soft

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/STATUS.md
