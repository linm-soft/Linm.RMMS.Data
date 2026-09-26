# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-estimate
packKind: list
role: dev
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:30:00.000Z
taskId: task_035b7d8e
contentHash: sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page · formPattern: Mobile full phone ≤430 · Android 1-1 · N/A ERP Modal · DES-GRID N/A
- domain: AiVision · Live estimates · cite Incident + Maintenance WO · DOMAIN-MAP web-rmms-estimate
- mfeStdRoute: /web-rmms-estimate · mfeStdUrl http://localhost:9301/web-rmms-estimate · product /incident/estimate/:id · peer /work/estimate/:id
- BFF: Mobile.Bff :5202 catch-all · mobile-bff/api/v1 · cấm web-bff client · cấm ERP.*
- FormMode↔API: GET incident · init-data · from-incident · GET/PUT · draft · confirm · work-orders after confirm
- WO-GATE=YES · confirm lock · cấm auto WO · STD-MOUNT ?incidentId=/?estimateId= · live incident cấm HostIncidentsStub FE
- API mới / migration / Step 4b: none — cite Live only
- labels: useFormOptions · LeaveConfirmModal · no GPS · no alert
- Build: yarn build PASS · WebService dotnet build PASS
- T-FE-01..09 PASS · T-BE-01 cite PASS · T-QA-01 pending QA
- Out: Me* · invent path · web-bff · Kind B list · from-defects · UnitPriceCatalog · auto WO · e2e
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

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
- mfeStdUrl= http://localhost:9301/web-rmms-estimate
- peerStdUrl= http://localhost:9301/web-rmms-estimate
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: from-incident · GET/PUT · draft · confirm · work-orders · init-data
- T-FE-01..09 PASS · T-BE-01 cite PASS · T-QA-01 pending
- APIs: /ai-vision/estimates/** · /incident/incidents/{id} · /maintenance/work-orders
- debt: Mobile.Bff nuget private feed local · from-defects/UnitPriceCatalog OUT

## UNCLEAR
- (none open)

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/implement/web-rmms-estimate.md
- team_lead compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/handoff/team_lead-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/STATUS.md
