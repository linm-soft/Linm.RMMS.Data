# Handoff compact — po

schemaVersion: 1
feature: web-rmms-supervise
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:30:00.000Z
contentHash: sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b

## Decisions
- changeScope: new_page
- formPattern: Mobile list + RO detail (phone ≤430) · N/A ERP Modal/Slideout · no POST on Giám sát
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-supervise · mfeStdRoute /web-rmms-supervise
- nativeRoutes: /supervise · /supervise/:id · alias /field/supervise*
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol attendance-logs · cấm ERP.*
- demo: N/A · cite #sc-supervise* / DES-MOB-SUPERVISE · #sc-supervise-detail only
- API: GET list + GET/{id} patrol/attendance-logs · day = client CheckInAt · cấm invent /supervise/*
- Entry: Home/Field · no new tab · no gộp attendance hub / Face-NFC / check-in POST
- labels: useFormOptions() · cấm hardcode VN form
- GPS: RO stored Lat/Lng only · cấm capture/fake/POST
- filter: live route + day · segment map → /patrol-map · cấm toast giả
- DES-GRID / LinErpListFilterBar: N/A phone list
- List AC: AC-LIST-01…08 PASS DoD
- autoApprove: ON → Design next

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
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-supervise
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET list · GET/{id} · no write P1
- real-data §A+§B: PASS (reuse analy)
- T-*: (team_lead) · W2 Home supervise

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-SUP: SA add DOMAIN-MAP row web-rmms-supervise
- UNCLEAR-STD-ROUTE: follow STATUS mfeStdRoute /web-rmms-supervise
- UNCLEAR-FROMDATE: P1 client day · cấm invent fromDate
- UNCLEAR-ORG: Note/fallback · Design
- UNCLEAR-EMPTY-COPY: live empty/[] · cấm demo SSOT

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-supervise-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-supervise-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-supervise.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/STATUS.md
