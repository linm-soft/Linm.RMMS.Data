# Handoff compact — design

schemaVersion: 1
feature: web-rmms-estimate
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:30:00.000Z
taskId: task_c88a6dfe
contentHash: sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full phone 430 · Android 1-1 · N/A ERP Modal/Slideout Kind D
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone form
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-estimate · productRoute /incident/estimate/:id · peer /work/estimate/:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · AiVision(+Incident/Maintenance cite) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- STD-MOUNT: product :id=incidentId · std ?incidentId= · optional ?estimateId= · thiếu → EST-EMPTY
- WO-GATE=YES · confirm lock · cấm auto WO · WO disable trước confirm
- useFormOptions · no GPS · LeaveConfirmModal · no alert
- kit_missing_confirm: N/A
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| header.incident/* | SC header | Text RO | GET incident/{id} |
| action.open | mở dự toán | Button | POST from-incident |
| lines.qty/unitPrice | dòng | Number/Money | PUT Lines[] |
| totalAmount | tổng | LabelMoney RO | TotalAmount |
| action.draft/confirm | nháp/xác nhận | Button | draft · confirm lock |
| action.wo | giao việc | Button | POST work-orders after confirm |

## Screens / zones (ids only)
- EST-00 · EST-F · EST-W · EST-EMPTY · EST-OPEN · EST-EDIT · EST-LOCK · EST-WO · DES-LEAVE · TOAST
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/prototype/index.html
- reviewUrl modes=?screen=empty|open|edit|confirmed|work · ?leave=1 · ?woBlocked=1
- peerStdUrl= http://localhost:9301/web-rmms-estimate
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: from-incident · GET/PUT · draft · confirm · work-orders · assign
- real-data §A+§B: PASS · Form AC-F-01..11 · Grid AC N/A · A–D PASS · DES-RPT N/A
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-STD-MOUNT: resolved Design — ?incidentId= / ?estimateId= · product :id=incidentId
- UNCLEAR-WO-GATE: YES (PO) — Design copy WO disabled until confirmed
- UNCLEAR-DOMAIN-MAP-EST → SA
- UNCLEAR-HOST-STUB → SA/Dev (live incident · cấm FE stub)
- UNCLEAR-FROM-DEFECTS → OUT P1

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-estimate-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-estimate-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/STATUS.md
