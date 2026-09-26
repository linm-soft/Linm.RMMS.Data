# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-estimate
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:35:00.000Z
taskId: task_266bfa76
contentHash: sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile EST-F phone 430 · Android 1-1 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-estimate · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest EST-EMPTY · S1 staff ?incidentId= EST-OPEN+header · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port/playwright → `_capture_estimate.mjs`
- Live: GET incident · EST-OPEN action.open · WO-GATE cite Dev · DES-LEAVE
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| header.incident/* | Text RO | S1 PASS Live INC-DEMO |
| action.open | Button | S1 EST-OPEN PASS |
| lines.qty/unitPrice | Number/Money | after open · soft (smoke EST-OPEN) |
| action.draft/confirm | Button | after open · soft |
| action.wo | Button | WO-GATE after confirm · soft |

## Screens / zones (ids only)
- EST-00 · EST-F · EST-EMPTY · EST-OPEN · header.incident · DES-LEAVE · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-estimate
- screens= specs/web-rmms-estimate/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- FormMode↔API: from-incident · GET incident · draft/confirm/WO cite Dev
- T-QA-01 PASS · T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER WAIVE
- P0: none

## UNCLEAR
- (none open)

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/handoff/dev-compact.md
