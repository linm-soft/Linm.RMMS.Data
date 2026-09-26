# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-e
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T10:30:00.000Z
taskId: task_751be4a2
contentHash: sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page
- formPattern: Mobile full list RO (TK-07) · phone 430 · N/A ERP Modal/Slideout · no write form
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-e
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration road-routes · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- wave E: TK-07 `/field/tuan-kiem/ke-hoach` · kế hoạch tần suất RO
- Live cite: GET road-routes/search · GET patrol/sessions (agg)
- HARD: empty-no-hardcode · Schema trước filled · cấm fake counts/GPS
- labels: useFormOptions() · coverageStatus thieu|du
- out of E: báo cáo tháng desktop · track GPS · native · edit quy tắc phone
- open questions: UNCLEAR-FREQ-API · UNCLEAR-ROAD-CLASS · UNCLEAR-COUNT-SOURCE · UNCLEAR-RULE-SOURCE · UNCLEAR-DOMAIN-SLUG → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| planList | kế hoạch | List RO | cards · empty if no API |
| route | tuyến | Text RO | |
| roadClass | cấp đường | Text/Chip RO | GAP if missing |
| ruleText | quy tắc | Text RO | no global hardcode |
| patrolDayCount | ca TD/ngày | Number RO | |
| inspectWeekCount | đợt TK/tuần | Number RO | |
| coverageStatus | thiếu/đủ | Chip RO | thieu\|du |
| emptyHint | chưa có KH | EmptyState | no fake rows |
| refresh | reload | Button | optional |
| backHub | về hub | Button | TK-00 |

## Screens / zones (ids only)
- TK-07 · emptyHint · planList · refresh · backHub
- Leave: N/A (RO) · Back→TK-00
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-e
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET frequency/plan **Mới** · GET road-routes · GET sessions (agg)
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-FREQ-API: resource path GET kế hoạch → SA
- UNCLEAR-ROAD-CLASS: field cấp trên road-routes → SA
- UNCLEAR-COUNT-SOURCE: server vs client sessions → SA
- UNCLEAR-RULE-SOURCE: ruleText bảng vs enum theo class → SA
- UNCLEAR-DOMAIN-SLUG: DOMAIN-MAP row web-rmms-mobile-e → SA

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-e-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-e-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/STATUS.md
