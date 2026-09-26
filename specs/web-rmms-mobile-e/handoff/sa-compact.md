# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-e
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T10:40:00.000Z
taskId: task_688f41fe
contentHash: sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d
solution_confirm: approve
autoApprove: ON
be_repo_confirm: approve
ui_repo_confirm: approve

## Decisions
- changeScope: edit_page
- formPattern: Mobile full list RO (TK-07) · phone 430 · no write · N/A ERP Modal/Slideout · DES-GRID N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-e
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Integration road-routes · cấm ERP.*
- domain slug: web-rmms-mobile-e → Patrol (+ Integration cite) · DOMAIN-MAP row added
- API: GET patrol/frequency-plans (Mới) · query asOfDate/weekStart/routeCode · empty/404 OK · cấm mock
- entity Mới: PatrolFrequencyRuleEntity · rmms_patrol_frequency_rules · Schema_PatrolFrequencyRule pair trước filled
- roadClass: Live missing → migration E add RoadClass trên rmms_road_routes + DTO · until empty+GAP · cấm invent từ RouteKind
- counts: server agg từ sessions (Tuần đường/ngày · Tuần kiểm/tuần) · IsPaused không tính · FE RO only
- ruleText: từ frequency_rules theo RoadClass · cấm FE hardcode TCCS 3–9
- BFF: mobile-bff proxy · API owns join · web-bff cite
- GPS: none TK-07 · cấm fake
- out E: báo cáo tháng desktop · track GPS · native · edit quy tắc phone
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| planList | kế hoạch | List RO | GET frequency-plans |
| route | tuyến | Text RO | routeCode/Name |
| roadClass | cấp đường | Text/Chip RO | after migration E |
| ruleText | quy tắc | Text RO | from rules table |
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
- FormMode↔API: GET frequency-plans Mới · GET road-routes Live · sessions server-only
- entity: Schema_PatrolFrequencyRule + RoadClass on road-routes · migration E (TL/Dev Step 4b)
- BFF: mobile-bff/api/v1/patrol/frequency-plans · integration/road-routes
- UNCLEAR: all CLOSED
- T-*: (team_lead)

## UNCLEAR
- (none — FREQ-API · ROAD-CLASS · COUNT-SOURCE · RULE-SOURCE · DOMAIN-SLUG closed)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/STATUS.md
