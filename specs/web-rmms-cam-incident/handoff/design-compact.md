# Handoff compact — design

schemaVersion: 1
feature: web-rmms-cam-incident
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:45:00.000Z
contentHash: sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1
taskId: task_3b488130
design_confirm: approve
autoApprove: ON
real_view_parity: v1

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- forms: IncidentCaptureSheet (INC-CAP) · IncidentCreatePage (INC-N) · IncidentDetailPage (INC-D) · IncidentListPage (INC-L)
- productRoute: /van-de · /van-de/moi · /van-de/:id
- mfeStdUrl: alias only · cấm invent product slug
- Role: tuần đường create+capture · QL_HAT mọi list + Giao việc · TK+NT RO no giao
- PO+Design: ẩn close QL_HAT/TK/NT · tuần đường giữ close peer
- Pattern B GPS · leaveConfirm dirty INC-CAP/N · disabled=creating|saving only
- DES-GRID / LinErpListFilterBar: N/A phone
- Form giao đầy đủ = peer web-rmms-giao-viec-ql-hat · slug này = CTA + scope
- cấm: Giao việc ngoài QL_HAT · SLA 24h · Mục IV · Excel · ERP.* · web-bff · native · CamIncident* · fake GPS
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html
- modes: ?screen=list|create|capture|detail · ?role=tuan|qlhat|tk|nt · ?gps=deny · ?leave=1

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | tuần đường write · detail view |
| gps | GPS+Banner | Pattern B · cấm fake |
| title/type/sev | Input+Select | LOOKUP_STATIC · required title |
| create | Button | tuần đường · creating lock |
| fabCreate | FAB | ẩn non-tuần-đường |
| cards | List | GET scope by role |
| assignCta | Button | QL_HAT only · paths.workFor |
| close | Button | ẩn QL_HAT/TK/NT |
| roleCaps | Hidden | cite role-gate |

## Screens / zones (ids only)
- INC-CAP · INC-N · INC-D · INC-L · DES-LEAVE · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html
- peerStd deep-link= /van-de/moi
- real_view_parity= v1

## API / tasks (ids only)
- FormMode↔API: GET/POST incidents · GET{id} · close · sessions · asset-types · files cite
- T-*: edit Incident* role-gate + assign CTA (PLAN-3-VAI #4)
- handoff SA: UNCLEAR-INC-DOMAIN-ROW · ROLE-SOURCE · LIST-FILTER · CLOSE-VS-ASSIGN (Design ẩn close QL_HAT)

## UNCLEAR
- UNCLEAR-INC-DOMAIN-ROW: SA DOMAIN-MAP slug hoặc bind peer incident
- UNCLEAR-INC-ROLE-SOURCE: deps web-rmms-role-gate caps
- UNCLEAR-INC-LIST-FILTER: SA reporter filter vs client
- UNCLEAR-INC-CLOSE-VS-ASSIGN: Design ẩn close QL_HAT/TK/NT — SA/BE policy nếu cần

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-incident-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-incident-real-data.md
- prior-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/STATUS.md
