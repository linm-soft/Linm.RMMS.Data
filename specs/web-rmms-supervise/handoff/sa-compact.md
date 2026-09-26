# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-supervise
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:45:00.000Z
taskId: task_f721839a
contentHash: sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile list + RO detail · phone ≤430 · N/A Modal/Slideout · no POST P1
- Grid AC / DES-GRID / LinErpListFilterBar: N/A phone
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-supervise · mfeStdRoute /web-rmms-supervise · product /supervise*
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol attendance-logs · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff client
- demo: N/A · cấm demo SSOT / demoDays
- DOMAIN-MAP: supervise + web-rmms-supervise → Patrol (applied)
- API: Live GET list + GET/{id} patrol/attendance-logs · day=client CheckInAt · cấm invent /supervise* · cấm invent fromDate · cấm POST
- entity/migration/Step4b: none/skip at SA
- GPS: RO Lat/Lng only · cấm capture/fake/POST
- labels: useFormOptions() / supervise.*
- Entry: Home/Field · no gộp attendance hub / Face-NFC
- List AC: AC-LIST-01…08 · W2 Home supervise
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| filterRoute/day | filter sheet | Select/Date | live GET + client day |
| segmentMap | segment | Nav | → /patrol-map |
| cardRows | list | ListRow+Badge | GET attendance-logs |
| detail RO | /:id | Detail RO | GET/{id} |
| btnMap | detail | Button/Nav | pass Lat/Lng |
| empty | empty | Empty | [] |

## Screens / zones (ids only)
- SUP-00 · SUP-01 · SUP-02 · SUP-03 · SUP-04 · SUP-05 · SUP-06 · SUP-07 · SUP-08
- DES-MOB-SUPERVISE · DES-MOB-SUP-DETAIL · DES-MOB-SUP-FILTER
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-supervise
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET list · GET/{id} · no write P1
- BFF: mobile-bff/api/v1/patrol/attendance-logs[+/{id}]
- real-data §A+§B: PASS · T-*: (team_lead) · W2 Home supervise · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-SUP: resolved (DOMAIN-MAP rows applied)
- UNCLEAR-FROMDATE: resolved P1 client day · cấm invent
- UNCLEAR-ORG: resolved P1 Note/fallback
- UNCLEAR-EMPTY-COPY: carry Dev/QA · live []
- UNCLEAR-STD-ROUTE: carry Dev · follow STATUS mfeStdRoute

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-supervise-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/STATUS.md
