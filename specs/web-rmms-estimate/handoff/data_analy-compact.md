# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-estimate
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:04:52.000Z
contentHash: sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a

## Decisions
- changeScope: new_page
- formPattern: Mobile full (phone max-width 430) · Android 1-1 · N/A ERP Modal/Slideout Kind D desktop primary
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-estimate
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · AiVision estimates · cấm ERP.*
- demo: N/A
- Title: Ước lượng sự cố · entry incident detail + work hub peer
- API Live: ai-vision/estimates from-incident/GET/PUT/draft/confirm · incident GET · maintenance work-orders · assign
- Canonical: api/v1/ai-vision/estimates · cấm invent ai-estimate/* · cấm invent web-rmms-estimate controller
- HARD: confirm rồi WO · cấm auto WO · labels useFormOptions · no GPS
- Out: Me* · from-defects primary · UnitPriceCatalog UI P2 · desktop Kind B list primary
- open questions: UNCLEAR-DOMAIN-MAP-EST · UNCLEAR-STD-MOUNT · UNCLEAR-WO-GATE · UNCLEAR-HOST-STUB

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| header.incident/* | SC header | Text RO | GET incident/{id} |
| action.open | mở dự toán | Button | POST from-incident |
| lines.qty/unitPrice | dòng | Number/Money | PUT Lines[] |
| totalAmount | tổng | LabelMoney RO | TotalAmount |
| action.draft/confirm | nháp/xác nhận | Button | draft · confirm |
| action.wo | giao việc | Button | POST work-orders after confirm |

## Screens / zones (ids only)
- EST-F · EST-W
- reviewUrl= (Design) · prototype estimate form
- peerStdUrl= http://localhost:9301/web-rmms-estimate
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: from-incident · GET/PUT · draft · confirm · work-orders · assign
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-EST: add DOMAIN-MAP row web-rmms-estimate (SA)
- UNCLEAR-STD-MOUNT: std deep id vs query (Design/Dev)
- UNCLEAR-WO-GATE: WO only after confirm — default YES (PO)
- UNCLEAR-HOST-STUB: BE HostIncidentsStub — cite live incident (SA/Dev)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-estimate-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-estimate-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-estimate.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/STATUS.md
