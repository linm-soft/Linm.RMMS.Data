# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-field
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:00:48.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile Field hub / full (phone max-width 430) · N/A ERP Modal/Slideout · no master form
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-field
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol sessions GET · cấm ERP.*
- demo: N/A
- Hub: FL-00…03 · 2 cửa TD/TK · sync offline · tiles peer (attendance/history/NT/cam/reflect/supervise/map)
- Live hub API: GET patrol/sessions badge only · cấm POST/PUT từ hub
- Deep CRUD → peers (mobile-a…e · attendance · nghiem-thu · cam-patrol · field-reflect · offline · supervise · patrol-map)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: none on hub · peer deep geolocation · deny blocks coords
- copy: Android/iOS Field home parity · cấm sửa native
- open questions: UNCLEAR-DOMAIN-MAP-FIELD · UNCLEAR-HUB-VS-A · UNCLEAR-STD-PORT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| doorPatrol/Inspect | 2 cửa | Button/Nav | → tuan-duong / tuan-kiem · peer A |
| syncBtn+badge | sync | Button/Number RO | → offline · local queue |
| tiles×7 | peer nav | Button/Nav | SCREENS Field children |
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
- UNCLEAR-DOMAIN-MAP-FIELD: add DOMAIN-MAP row web-rmms-field (SA)
- UNCLEAR-HUB-VS-A: FL-01 vs TD-00 ownership — hub mount doors; deep=A (PO/Design)
- UNCLEAR-STD-PORT: PLAN :9330 vs packet :9301 — follow STATUS URL

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-field.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/STATUS.md
