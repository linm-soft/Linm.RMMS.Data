# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T22:25:00.000Z
taskId: task_ef3e5c98
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout · Android NghiemThu* 1-1 · useFormOptions / nghiemThu.*
- domain: Patrol (patrol) · DOMAIN-MAP row web-rmms-nghiem-thu · alias nghiem-thu
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-nghiem-thu · mfeStdUrl http://localhost:9301/web-rmms-nghiem-thu
- nativeRouteCite: SCREENS /field/nghiem-thu · /new · /:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · cấm ERP.*
- FormMode: list+create+detail · reuse GET/POST/PUT patrol/nghiem-thu · init-data · files/* ≤10 · no entity/migration · Step 4b skip · DELETE OUT
- FILTER P1: search only · GPS geolocation → FieldInfo/ZoneOrgCode · deny=no fake · list no GPS gate
- mau-01…10 = MAU-10/init-data · ResultCode pass/fail/deduct · Status draft on Lưu nháp
- Entry: Field hub quick action · DES-LEAVE in-app · cấm native confirm
- route_confirm: approve · STATUS URL canonical + SCREENS alias
- T-01…T-05 /agent-dev · T-06 /agent-qa · T-07 /agent-review · cite T-W3-08
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Static | GET · search P1 |
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
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET list · GET init-data · POST create · GET/{id} · PUT/{id} · files/*
- API mới: none · migration: none · entity: none · DELETE: OUT
- T-01 route/list · T-02 form fields · T-03 GPS · T-04 media+DES-LEAVE · T-05 POST/PUT/detail · T-06 QA · T-07 review
- devSlash=/agent-dev · implement=specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md

## UNCLEAR
- (none blocking) DOMAIN-MAP-NT · BFF-PROXY · FILTER · DELETE · STD-ROUTE resolved

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/task/web-rmms-nghiem-thu.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/handoff/sa-compact.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
