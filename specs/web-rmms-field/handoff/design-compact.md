# Handoff compact — design

schemaVersion: 1
feature: web-rmms-field
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:10:00.000Z
taskId: task_05d87650
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile Field hub / full · phone 430 · N/A Modal/Slideout · no master form
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone Field hub
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-field · productRoute /field*
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol sessions GET badge · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- UI 1-1 Android/iOS Field home parity · FL-00…03 · hub mount doors; deep=A
- Live: GET patrol/sessions only · cấm hub POST/PUT · cấm GPS hub · labels useFormOptions
- UNCLEAR-HUB-VS-A / UNCLEAR-STD-PORT: resolved PO
- kit_missing_confirm: N/A
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| doorPatrol/Inspect | 2 cửa | Button/Nav | → tuan-duong / tuan-kiem · peer A |
| syncBtn+badge | sync | Button/Number RO | → offline · 0=ẩn |
| tiles×7 | peer nav | Button/Nav | attendance/history/NT/cam/reflect/supervise/map |
| sessionHint | ca active | Text RO | GET patrol/sessions |

## Screens / zones (ids only)
- FL-00 · FL-01 · FL-02 · FL-03
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html
- reviewUrl modes=?badge=1 · ?sync=3 · ?empty=1 · ?error=1
- peerStdUrl= http://localhost:9301/web-rmms-field
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions GET badge · nav-only writes
- real-data §A+§B: PASS · T-*: (team_lead) · W3 Field hub · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-FIELD→SA add DOMAIN-MAP row web-rmms-field
- UNCLEAR-HUB-VS-A: resolved PO — hub mount; deep=A
- UNCLEAR-STD-PORT: resolved PO — :9301

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/STATUS.md
