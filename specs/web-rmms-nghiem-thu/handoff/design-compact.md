# Handoff compact — design

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:20:00.000Z
taskId: task_a6360175
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / nghiemThu.* · cấm hardcode VN
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone list
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-nghiem-thu
- mfeStdRoute: /web-rmms-nghiem-thu · nativeRouteCite SCREENS /field/nghiem-thu · /new · /:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol nghiem-thu · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- FILTER P1: search only · status/route/date/templateType OUT
- DELETE: OUT P1
- Form: mau MAU-10/init-data · route · GPS FieldInfo/ZoneOrgCode · scores · media≤10 · POST draft / PUT
- GPS: geolocation · deny = no fake · list không bắt GPS
- DES-LEAVE: in-app discard · cấm native confirm
- Entry: Field hub quick action · no tab · no gộp tuần đường/tuần kiểm/mnt
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Static | GET list · search P1 |
| rowIcon/status/result | row | Icon/Badge | Check success |
| btnCreate | chrome | Button/Nav | → new |
| templateType | mau | Select | MAU-10 / init-data |
| route/fieldInfo/km | form | Text/Number | create* |
| resultCode/scores | result | Select/Checklist | pass/fail/deduct |
| mediaIds | media | PhotoRow | files/* ≤10 |
| gpsCapture | GPS | Action | FieldInfo/ZoneOrgCode |
| saveCreate/saveEdit | CTA | Button | POST / PUT |

## Screens / zones (ids only)
- NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-07 · NT-08 · NT-09 · NT-10 · NT-11
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-nghiem-thu
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET list · GET init-data · POST create · GET/{id} · PUT/{id} · files/*
- real-data §A+§B: PASS · T-*: (team_lead) · cite T-W3-08 · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-NT: SA add DOMAIN-MAP row web-rmms-nghiem-thu — open
- UNCLEAR-BFF-PROXY: SA confirm Mobile.Bff proxy — open
- UNCLEAR-FILTER-UI: RESOLVED → search only P1
- UNCLEAR-DELETE: RESOLVED → OUT P1
- UNCLEAR-STD-ROUTE: RESOLVED → mfeStdRoute=/web-rmms-nghiem-thu + SCREENS /field/nghiem-thu*

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
