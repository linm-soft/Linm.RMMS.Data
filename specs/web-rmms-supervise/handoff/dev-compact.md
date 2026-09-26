# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-supervise
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:10:00.000Z
taskId: task_dd38290f
contentHash: sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b

## Decisions
- changeScope: new_page
- formPattern: Mobile list + RO detail · phone ≤430 · N/A Modal/Slideout · no POST P1
- Grid AC / DES-GRID / LinErpListFilterBar: N/A phone
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-supervise · mfeStdRoute /web-rmms-supervise · product /supervise*
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol attendance-logs · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff client
- demo: N/A · cấm demo SSOT / demoDays
- API: GET list + GET/{id} patrol/attendance-logs · day=client CheckInAt · cấm invent /supervise* · cấm invent fromDate · cấm POST
- Step4b/migration: skip (reuse)
- GPS: RO Lat/Lng only · map CTA ?lat&lng&attId · cấm capture/fake/POST
- labels: useFormOptions('web-rmms-supervise') / supervise.*
- Entry: Home/Field W2 → /web-rmms-supervise · segment → /patrol-map
- List AC: AC-LIST-01…08 · T-01…T-06 done
- build: MFE yarn build PASS · BE dotnet build PASS
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued QA

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
- T-01…T-06: done · FE src/pages/WebRmmsSupervise/*
- debt: GIS may ignore lat/lng qs · empty copy QA

## UNCLEAR
- UNCLEAR-EMPTY-COPY: carry QA · live [] wired
- UNCLEAR-STD-ROUTE: resolved Dev · mfeStdRoute /web-rmms-supervise

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/implement/web-rmms-supervise.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/STATUS.md
