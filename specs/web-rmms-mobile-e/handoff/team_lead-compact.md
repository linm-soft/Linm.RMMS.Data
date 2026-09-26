# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-e
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T10:45:00.000Z
taskId: task_6473fa66
contentHash: sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page
- formPattern: Mobile full list RO (TK-07) · phone 430 · no write · Leave N/A · DES-GRID N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-mobile-e · mfeStdUrl http://localhost:9301/web-rmms-mobile-e
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Integration road-routes · cấm ERP.*
- BFF: mobile-bff/api/v1/patrol/frequency-plans · integration/road-routes · API owns join
- demo: N/A · wave E · cấm fake counts/GPS/mock plan
- HARD: Schema_PatrolFrequencyRule + RoadClass migration E trước filled · empty/404 EmptyState
- migration order: RoadClass → FrequencyRule → controller frequency-plans
- counts/coverageStatus: server-only · IsPaused không tính · FE RO bind
- GPS: none TK-07
- route_confirm: approve /web-rmms-mobile-e
- FormType: T-UI-LIST-01 phone cards · WAIVE filter/cfg/form/leave/act/hist · KEEP BE+FIELD+UX+RESP+PROD+QA
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued /agent-qa*

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| planList | kế hoạch | List RO | GET frequency-plans |
| route | tuyến | Text RO | |
| roadClass | cấp đường | Text/Chip RO | after migration E |
| ruleText | quy tắc | Text RO | from rules |
| patrolDayCount | ca TD/ngày | Number RO | server |
| inspectWeekCount | đợt TK/tuần | Number RO | server |
| coverageStatus | thiếu/đủ | Chip RO | thieu\|du |
| emptyHint | chưa có KH | EmptyState | 404/no schema |
| refresh | reload | Button | optional |
| backHub | về hub | Button | TK-00 |

## Screens / zones (ids only)
- TK-07 · emptyHint · planList · refresh · backHub
- Leave: N/A (RO) · Back→TK-00
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-e
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET frequency-plans Mới · road-routes Live · sessions server-only
- T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01
- T-UI-LIST-01 · T-UI-FIELD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01
- T-QA-LIST-01 · T-QA-EMPTY-01 (queued)
- UNCLEAR: none
- Step 4b: Dev only

## UNCLEAR
- (none — SA CLOSED)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/task/web-rmms-mobile-e.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/handoff/sa-compact.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/be/solution-discovery.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/STATUS.md
