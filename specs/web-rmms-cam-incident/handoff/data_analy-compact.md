# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-cam-incident
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T00:00:00.000Z
contentHash: sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1
taskId: task_770ceabe

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md § enqueue #4
- forms: IncidentCaptureSheet (INC-CAP) · IncidentCreatePage (INC-N) · IncidentDetailPage (INC-D) · IncidentListPage (INC-L)
- productRoute: /van-de · /van-de/moi · /van-de/:id
- mfeStdUrl alias: http://localhost:9301/web-rmms-cam-incident (không invent product route)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · phone 430px
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Role: tuần đường tạo sự cố+ảnh · QL_HAT xem mọi + nút Giao việc xử lý · TK xem không giao · NT chỉ xem
- QL_HAT = HAT-TRUONG + HAT-PHO · cấm suy từ MANAGER-RMMS
- cấm: Giao việc ngoài QL_HAT · SLA 24h · Mục IV tiền · iOS/Android
- Pattern B GPS: banner on Create/Lưu · cấm fake
- Form giao đầy đủ (hạn TT41) = peer web-rmms-giao-viec-ql-hat · slug này = CTA + scope
- OUT: Excel · invent CamIncidentController · web-bff

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | RouteCaptureControl | tuần đường write · detail view |
| gps | định vị | GPS + Banner | Pattern B |
| title/type/sev | meta | Input+Select | LOOKUP_STATIC |
| create | Tạo | Button | role tuần đường |
| fabCreate | FAB | Button | ẩn non-tuần-đường |
| cards | list | List | GET incidents · scope by role |
| assignCta | Giao việc xử lý | Button | QL_HAT only · paths.workFor |
| close | Đóng | Button | peer · SA confirm vs QL_HAT |
| roleCaps | quyền | Hidden | cite role-gate |

## Screens / zones (ids only)
- INC-CAP · INC-N · INC-D · INC-L
- reviewUrl= (Design) prototype keep list/form/sheet
- peerStd deep-link= /van-de/moi
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET/POST incidents · GET{id} · close · sessions · asset-types · files cite
- real-data §A+§B: PASS
- T-*: edit Incident* role-gate + assign CTA (cite PLAN-3-VAI #4)

## UNCLEAR
- UNCLEAR-INC-DOMAIN-ROW: SA add DOMAIN-MAP slug hoặc bind peer web-rmms-incident
- UNCLEAR-INC-ROLE-SOURCE: deps web-rmms-role-gate packageCode/roleCaps
- UNCLEAR-INC-LIST-FILTER: SA confirm reporter filter vs client
- UNCLEAR-INC-CLOSE-VS-ASSIGN: ẩn close với QL_HAT?

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-incident-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-incident-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-incident.md
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsIncident/IncidentCaptureSheet.tsx
- code2: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsIncident/IncidentDetailPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/STATUS.md
