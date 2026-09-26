# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:45:00.000Z
taskId: task_f677df1b
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout · Android NghiemThu* 1-1 · useFormOptions / nghiemThu.*
- domain: Patrol (`patrol`) · DOMAIN-MAP row `web-rmms-nghiem-thu` added · UNCLEAR-DOMAIN-MAP-NT resolved · alias `nghiem-thu` kept
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-nghiem-thu` · mfeStdUrl http://localhost:9301/web-rmms-nghiem-thu
- nativeRouteCite: SCREENS /field/nghiem-thu · /new · /:id
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` catch-all · cấm ERP.* · cấm invent path
- Live: GET/POST/PUT patrol/nghiem-thu · init-data · files/* MediaIds≤10 · DELETE OUT P1
- BFF: MobileApiProxyController proxy Live · UNCLEAR-BFF-PROXY resolved · cấm NT BFF controller · cấm web-bff base
- API Mới / entity / migration: **none** · Step 4b skip · reuse rmms_nghiem_thu
- FILTER P1 search only · GPS geolocation FieldInfo/ZoneOrgCode · deny=no fake
- mau-01…10 = MAU-10/init-data · ResultCode pass/fail/deduct · Status draft on Lưu nháp
- Entry: Field hub quick action · no tab · no gộp tuần đường/tuần kiểm/mnt
- DES-GRID / LinErpListFilterBar: N/A · DES-LEAVE in-app
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| list/search/empty | List/Search/Static | GET patrol/nghiem-thu · ?search= |
| rowIcon/status/result | Icon/Badge | item Status/ResultCode · Check |
| btnCreate | Button/Nav | → new |
| templateType | Select | init-data TemplateTypes |
| route/fieldInfo/km | Text/Number | POST/PUT fields |
| resultCode/scores | Select/Checklist | ResultCode · Scores[] |
| mediaIds | PhotoRow | files/* ≤10 |
| gpsCapture | Action | geolocation → FieldInfo/ZoneOrgCode |
| saveCreate/saveEdit | Button | POST · PUT |

## Screens / zones
- NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-07 · NT-08 · NT-09 · NT-10 · NT-11
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-nghiem-thu

## API / tasks
- FormMode↔API: list=GET · create=POST+init · detail=GET/{id}+PUT · files/*
- BFF vs API: Mobile.Bff only · reuse NghiemThuController
- T-*: (team_lead) · cite T-W3-08 · devSlash=/agent-dev

## UNCLEAR
- (none blocking) DOMAIN-MAP-NT · BFF-PROXY · FILTER · DELETE · STD-ROUTE resolved

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
