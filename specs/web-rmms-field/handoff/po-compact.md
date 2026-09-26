# Handoff compact — po

schemaVersion: 1
feature: web-rmms-field
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T19:03:20.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile Field hub / full (phone ≤430) · N/A ERP Modal/Slideout · no master form
- packKind: list (hub chrome — DES-GRID / LinErpListFilterBar N/A)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-field
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol GET sessions badge · cấm ERP.*
- demo: N/A
- DoD: FL-00…03 · 2 cửa + sync + tiles×7 · Live GET sessions only · cấm hub CRUD/POST-PUT · cấm GPS hub · labels useFormOptions
- UNCLEAR-HUB-VS-A: chốt hub mount doors; deep=A · cấm duplicate CRUD
- UNCLEAR-STD-PORT: chốt :9301 STATUS URL
- UNCLEAR-DOMAIN-MAP-FIELD: handoff SA (không block PO)
- autoApprove: ON → Design

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| doorPatrol/Inspect | 2 cửa | Button/Nav | → tuan-duong / tuan-kiem · peer A |
| syncBtn+badge | sync | Button/Number RO | → offline · local queue |
| tiles×7 | peer nav | Button/Nav | attendance/history/NT/cam/reflect/supervise/map |
| sessionHint | ca active | Text RO | GET patrol/sessions |

## Screens / zones (ids only)
- FL-00 · FL-01 · FL-02 · FL-03
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-field
- DES-GRID / LinErpListFilterBar: N/A phone Field hub

## API / tasks (ids only)
- FormMode↔API: sessions GET badge · nav-only writes
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-FIELD: SA add DOMAIN-MAP row (open)
- UNCLEAR-HUB-VS-A: resolved PO — hub mount; deep=A
- UNCLEAR-STD-PORT: resolved PO — :9301

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-field.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/STATUS.md
