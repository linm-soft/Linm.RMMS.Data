# Handoff compact — po

schemaVersion: 1
feature: web-rmms-estimate
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:15:00.000Z
contentHash: sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a
autoApprove: ON

## Decisions
- changeScope: new_page
- packKind: list confirmed · Form AC AC-F-01..11 primary · Grid AC N/A phone form
- formPattern: Mobile full phone 430 · Android 1-1 · N/A ERP Modal/Slideout · N/A DES-GRID Kind B
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-estimate · productRoute /incident/estimate/:id · peer /work/estimate/:id
- be: Linm.RMMS.WebService · AiVision(+Incident/Maintenance cite) · cấm ERP.*
- bff: Mobile.Bff :5202 · VITE_MOBILE_API_URL · cấm web-bff client
- demo: N/A · hash skip analy · cấm re-scan
- DoD: EST-F(+EST-W entry) · from-incident · edit lines · draft · confirm lock · WO after confirm · useFormOptions · no GPS · no auto WO
- OUT: Me* · from-defects P1 · UnitPriceCatalog P2 · Kind B list primary · invent slug path · HostIncidentsStub FE
- PO: UNCLEAR-WO-GATE=YES · open→SA/Design/Dev: DOMAIN-MAP-EST · STD-MOUNT · HOST-STUB

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
- EST-F · EST-W
- reviewUrl= (Design) · prototype estimate form
- peerStdUrl= http://localhost:9301/web-rmms-estimate
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: from-incident · GET/PUT · draft · confirm · work-orders · assign
- real-data §A+§B: PASS
- Form AC: AC-F-01..11 · Grid AC: N/A
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-WO-GATE: YES (PO) — WO only after confirm · no auto WO
- UNCLEAR-DOMAIN-MAP-EST → SA
- UNCLEAR-STD-MOUNT → Design/Dev
- UNCLEAR-HOST-STUB → SA/Dev (live incident · cấm FE stub)
- UNCLEAR-FROM-DEFECTS → OUT P1

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-estimate-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-estimate-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-estimate.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/STATUS.md
