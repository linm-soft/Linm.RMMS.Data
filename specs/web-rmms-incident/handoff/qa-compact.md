# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:25:00.000Z
taskId: task_4fa91ea6
contentHash: sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile full INC-L/N/D · phone 430 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE · Chip filters on INC-L
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-incident · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest Create gate · S1 INC-L Live · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_incident.mjs`
- Live S1: GET incidents → CardList HasGps · INC-N assetPick Live
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestGate | Static/Button | S0 PASS · /new |
| search/filters/fab | Search+Chip+FAB | S1 PASS · Live |
| list.card | CardList | S1 PASS · HasGps |
| assetPick | LookupGrid | INC-N dump PASS · Live |
| sessionStamp/gpsLock | Text RO/GPS | Dev contract · Acc=12 mock |

## Screens / zones (ids only)
- INC-L · INC-N · INC-D · SH-02 · guestGate
- mfeStdUrl= http://localhost:9301/web-rmms-incident
- screens= specs/web-rmms-incident/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET incidents · GET asset-types · guest no Create Live
- T-QA-CRUD-01 · T-QA-GRID-01 · T-QA-CREATE-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none · Lat MIG deferred

## Debt
- stock e2e port gate · WDS deep-link fulfill · playwright junction
- UNCLEAR: none · peer INC-V/C/E OOS

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
