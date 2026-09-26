# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-estimate
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:45:00.000Z
taskId: task_ebc8899d
contentHash: sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile full phone ≤430 · Android 1-1 · N/A ERP Modal · DES-GRID N/A
- domain: AiVision (`ai-vision`) · Live estimates · cite Incident + Maintenance WO · DOMAIN-MAP row `web-rmms-estimate` applied
- mfeStdRoute: /web-rmms-estimate · mfeStdUrl http://localhost:9301/web-rmms-estimate · productRoute /incident/estimate/:id · peer /work/estimate/:id
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent ai-estimate/* / EstimateHub
- FormMode↔API: GET incident · init-data · POST from-incident · GET/PUT estimate · draft · confirm · POST work-orders after confirm · assign opt
- Body PUT: header + Lines[] (Id?·SortOrder·ItemCode·ItemName·Qty·Unit·UnitPrice·Note) · WO CreateWorkOrderRequest cite SCREENS
- WO-GATE=YES · confirm lock · **cấm** auto WO · STD-MOUNT ?incidentId=/?estimateId= · live incident **cấm** HostIncidentsStub FE
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions · demo N/A · **cấm** Me* · **cấm** GPS · **cấm** from-defects P1 · UnitPriceCatalog P2
- Out: Me* · invent path · web-bff · native edits · Kind B list primary
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

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
- DOMAIN-MAP/STD-MOUNT/WO-GATE/HOST-STUB: closed
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none open — DOMAIN-MAP/STD-MOUNT/WO-GATE/HOST-STUB closed · FROM-DEFECTS OUT P1)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-estimate-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/STATUS.md
