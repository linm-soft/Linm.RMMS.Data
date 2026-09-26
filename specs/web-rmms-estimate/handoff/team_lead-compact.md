# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-estimate
packKind: list
role: team_lead
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:00:00.000Z
taskId: task_3ca4ae28
contentHash: sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page · formPattern: Mobile full phone ≤430 · Android 1-1 · N/A ERP Modal · DES-GRID N/A
- domain: AiVision · Live estimates · cite Incident + Maintenance WO · DOMAIN-MAP row web-rmms-estimate
- mfeStdRoute: /web-rmms-estimate · mfeStdUrl http://localhost:9301/web-rmms-estimate · productRoute /incident/estimate/:id · peer /work/estimate/:id
- route_confirm: confirm_existing (STATUS already has route)
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · cấm ERP.* · cấm invent ai-estimate/*
- FormMode↔API: GET incident · init-data · POST from-incident · GET/PUT estimate · draft · confirm · POST work-orders after confirm · assign opt
- WO-GATE=YES · confirm lock · cấm auto WO · STD-MOUNT ?incidentId=/?estimateId= · live incident cấm HostIncidentsStub FE
- API mới / migration / Step 4b: none — Dev cite Live only
- labels: useFormOptions · demo N/A · cấm Me* · cấm GPS · from-defects OUT P1 · UnitPriceCatalog OUT P2
- T-*: T-FE-01..09 · T-BE-01 cite · T-QA-01 (QA only e2e)
- Out: Me* · invent path · web-bff · native edits · Kind B list primary · auto WO
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| header.incident/* | SC header | Text RO | GET incident/{id} live |
| action.open | mở dự toán | Button | POST from-incident |
| lines.qty/unitPrice | dòng | Number/Money | PUT Lines[] |
| totalAmount | tổng | LabelMoney RO | TotalAmount |
| action.draft/confirm | nháp/xác nhận | Button | draft · confirm lock |
| action.wo | giao việc | Button | POST work-orders after confirm |

## Screens / zones (ids only)
- EST-00 · EST-F · EST-W · EST-EMPTY · EST-OPEN · EST-EDIT · EST-LOCK · EST-WO · DES-LEAVE · TOAST
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-estimate
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: from-incident · GET/PUT · draft · confirm · work-orders · assign · init-data
- T-FE-01 mount · T-FE-02 peer work · T-FE-03 header · T-FE-04 open · T-FE-05 lines · T-FE-06 draft/confirm · T-FE-07 WO · T-FE-08 leave/labels · T-FE-09 init-data · T-BE-01 cite · T-QA-01 scenarios
- DOMAIN-MAP/STD-MOUNT/WO-GATE/HOST-STUB: closed
- devSlash=/agent-dev · qaSlash=/agent-qa

## UNCLEAR
- (none open)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/task/web-rmms-estimate.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/handoff/sa-compact.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/STATUS.md
