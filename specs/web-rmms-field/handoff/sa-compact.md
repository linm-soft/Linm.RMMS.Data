# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-field
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:20:00.000Z
taskId: task_e96a2d83
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile Field hub / full · phone ≤430 · N/A Modal/Slideout · no master form
- domain: Patrol (`patrol`) · DOMAIN-MAP row `web-rmms-field` applied
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-field · /field*
- be: D:/AI-QLBD/Linm.RMMS.WebService · **cấm ERP.***
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · **cấm** web-bff client
- Live: GET mobile-bff/api/v1/patrol/sessions?pageSize=50 · badge + sessionHint only
- API Mới / entity / migration / Step 4b: none · reuse PatrolSessionsController
- FormMode↔API: hub chrome · nav-only writes · **cấm** hub POST/PUT sessions
- hub mount doors; deep=A · sync→offline · tiles→peers · GPS none on hub
- labels: useFormOptions() · DES-GRID N/A
- UNCLEAR-DOMAIN-MAP-FIELD: resolved
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| doorPatrol/Inspect | 2 cửa | Button/Nav | → peer A · optional sessions filter |
| syncBtn+badge | sync | Button/Number RO | local queue · → offline |
| tiles×7 | peer nav | Button/Nav | attendance/history/NT/cam/reflect/supervise/map |
| sessionHint | ca active | Text RO | GET patrol/sessions |

## Screens / zones (ids only)
- FL-00 · FL-01 · FL-02 · FL-03
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-field
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions GET badge · nav-only
- Live: GET patrol/sessions · API Mới=none
- T-*: (team_lead) · W3 Field hub · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-FIELD: resolved — DOMAIN-MAP row
- UNCLEAR-HUB-VS-A: resolved PO
- UNCLEAR-STD-PORT: resolved PO

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/STATUS.md
