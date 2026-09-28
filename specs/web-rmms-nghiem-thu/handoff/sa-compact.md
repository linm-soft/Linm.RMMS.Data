# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T15:15:00.000Z
taskId: task_ed889e6d
contentHash: sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4
changeScope: edit_page
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · keep prior Patrol/nghiem-thu/entity · Delta Pattern B + SearchInput · cấm new_page typed CRUD
- formPattern: Mobile list+create/detail ≤430 · Pattern B · N/A ERP Modal · useFormOptions / nghiemThu.*
- domain: Patrol (`patrol`) · DOMAIN-MAP keep · cấm invent NT path/controller · cấm ERP.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/nghiem-thu/moi · mfeStdUrl http://localhost:9301/nghiem-thu/moi
- nativeRouteCite: /field/nghiem-thu* alias → /nghiem-thu* · cấm sửa iOS/Android
- be: Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff base
- Live keep: GET/POST/PUT patrol/nghiem-thu · init-data · files/* ≤10 · DELETE OUT P1
- Delta API: road-routes/search (Live) · integration/users (WS Live · BFF forward required)
- API Mới / entity / migration: **none** · Step 4b skip · reuse rmms_nghiem_thu · tenant_keep
- FormMode↔API: list=GET · create=POST+init · detail=GET/{id}+PUT · files/* · SearchInput route+users
- Pattern B: CTA always-on except saving · banner string[] · cấm disabled={!canSave} · cấm alert.warning
- Gates: sa_tz=N/A · sa_xco=N/A · sa_shared_table=tenant_keep · autoApprove
- DES-GRID / LinErpListFilterBar: N/A phone · FILTER search P1
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| list/search/empty | List/Search/Static | GET patrol/nghiem-thu · ?search= |
| rowIcon/status/result | Icon/Badge | item Status/ResultCode |
| btnCreate | Button/Nav | → /moi |
| templateType | Select | init-data TemplateTypes |
| route * | SearchInput | integration/road-routes/search · no seed |
| assignee * | SearchInput | integration/users?search= · BFF forward |
| fieldInfo/km | Text/Number | POST/PUT |
| resultCode/scores | Select/Checklist | ResultCode · Scores[] |
| mediaIds * | PhotoRow | files/* ≤10 · capture |
| validationBanner * | Banner | Pattern B string[] |
| saveCreate/saveEdit * | Button | POST · PUT · always-on |
| gpsCapture | Action | geolocation · deny=no fake |

## Screens / zones
- NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-07 · NT-08 · NT-09 · NT-10 · NT-11
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/nghiem-thu/moi

## API / tasks
- FormMode↔API: list=GET · create=POST+init · detail=GET/{id}+PUT · files/* · road-routes · users
- BFF vs API: Mobile.Bff only · reuse NghiemThuController + Integration users/routes
- entity/migration: none · TZ/XCO N/A · SHARE tenant_keep
- T-*: (team_lead) · cite T-W3-08 + SUBMIT-VALIDATE · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-USERS-BFF: **resolved** — BFF forward integration/users · Dev verify 200
- UNCLEAR-ROUTE-SEED: Dev remove ROAD_ROUTE_SEED/filterSeed/QL.22
- UNCLEAR-SEARCHINPUT-PKG: Dev MFE SearchInput · cấm ERP nguyên
- RESOLVED keep: DOMAIN-MAP · BFF-PROXY · FILTER · DELETE · STD-ROUTE /nghiem-thu/moi

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
