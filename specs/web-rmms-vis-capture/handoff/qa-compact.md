# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T21:48:18.844Z
taskId: task_4500fe8d
contentHash: sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile full VIS · phone 430 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-vis-capture · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest · S1 #sc-vis-capture Live · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_vis.mjs`
- Live S1: session QL.1-LANGSON · Acc±12 · TITLE-01 · DUAL-01 section+Skip
- modes PASS: ?gps=deny · ?acc=45 · ?nophoto=1 · ?nosession=1 (SESS)
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| visGuestGate | Static/Button | S0 PASS |
| photos/detect | PhotoRow/Button | S1 PASS · detect off no photo |
| rowLoc/rowAcc | ListRow RO | Live session + Acc |
| btnAttach/btnSkip | Button | DUAL-01 PASS |
| gpsLock/modalGps | GPS | MODE-gps-deny/acc PASS |

## Screens / zones (ids only)
- VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · DES-MOB-GPS-DENY · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-vis-capture
- screens= specs/web-rmms-vis-capture/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET patrol/sessions (staff) · guest gate no Live
- T-QA-CRUD-01 · T-QA-VIS-01/GPS/SESS = PASS · T-QA-FILTER = WAIVE
- entity/migration: none

## Debt
- stock e2e port gate · WDS deep-link fulfill · playwright junction
- UNCLEAR: none · SESS closed QA

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
