# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-supervise
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:50:00.000Z
taskId: task_1bf814c7
contentHash: sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b
route_confirm: keep

## Decisions
- changeScope: new_page
- formPattern: Mobile list + RO detail · phone ≤430 · N/A Modal/Slideout · no POST P1
- Grid AC / DES-GRID / LinErpListFilterBar: N/A phone
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-supervise · mfeStdRoute /web-rmms-supervise · product /supervise*
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol attendance-logs · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff client
- demo: N/A · cấm demo SSOT / demoDays
- DOMAIN-MAP: supervise + web-rmms-supervise → Patrol (SA)
- API: GET list + GET/{id} patrol/attendance-logs · day=client CheckInAt · cấm invent /supervise* · cấm invent fromDate · cấm POST
- Step4b/migration: skip
- GPS: RO Lat/Lng only · cấm capture/fake/POST
- labels: useFormOptions() / supervise.*
- Entry: Home/Field W2 · segment → /patrol-map · no hub/Face-NFC
- List AC: AC-LIST-01…08 · T-01…T-06 assigned /agent-dev
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued QA

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
- T-01 routes/shell · T-02 filter · T-03 list GET · T-04 detail+map · T-05 segment+Home W2 · T-06 i18n/AC
- real-data §A+§B: PASS · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-SUP: resolved (SA)
- UNCLEAR-FROMDATE: resolved P1 client day
- UNCLEAR-ORG: resolved P1 Note/fallback
- UNCLEAR-EMPTY-COPY: carry Dev/QA · live []
- UNCLEAR-STD-ROUTE: carry Dev · follow STATUS mfeStdRoute

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/task/web-rmms-supervise.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/STATUS.md
