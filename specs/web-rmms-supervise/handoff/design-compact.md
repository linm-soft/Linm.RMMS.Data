# Handoff compact — design

schemaVersion: 1
feature: web-rmms-supervise
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:40:00.000Z
taskId: task_db95c037
contentHash: sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile list + RO detail · phone 430 · N/A Modal/Slideout · no POST
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-supervise · productRoute /supervise*
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol attendance-logs · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01) · cấm demo SSOT
- UI 1-1 Android #sc-supervise / #sc-supervise-detail · DES-MOB-SUPERVISE / DES-MOB-SUP-DETAIL
- UNCLEAR-STD-ROUTE: follow STATUS mfeStdRoute · product /supervise*
- GPS: RO stored Lat/Lng only · cấm capture/fake/POST
- filter: sheet route GET + client day · segment map → /patrol-map · cấm toast giả
- labels: useFormOptions() / supervise.*
- kit_missing_confirm: N/A
- List AC: AC-LIST-01…08 PASS DoD
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
- reviewUrl empty=?empty=1 · filter=?filter=1 · detail=?detail=1
- peerStdUrl= http://localhost:9301/web-rmms-supervise
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET list · GET/{id} · no write P1
- real-data §A+§B: PASS · T-*: (team_lead) · W2 Home supervise · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-SUP→SA add DOMAIN-MAP row web-rmms-supervise
- UNCLEAR-FROMDATE: P1 client day · cấm invent fromDate
- UNCLEAR-ORG: Note/fallback
- UNCLEAR-EMPTY-COPY: live empty/[] · cấm demo SSOT
- UNCLEAR-STD-ROUTE: Design chốt follow STATUS

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-supervise-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-supervise-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/STATUS.md
