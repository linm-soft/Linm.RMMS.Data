# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mobile-e
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T10:17:15.018Z
contentHash: sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d

## Decisions
- changeScope: edit_page
- formPattern: Mobile full (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-e
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Integration road-routes · cấm ERP.*
- demo: N/A
- wave E: TK-07 `/field/tuan-kiem/ke-hoach` · kế hoạch tần suất **read-only**
- Live cite: GET road-routes/search · GET patrol/sessions (đếm)
- HARD: API/bảng frequency Mới · chưa có → empty · cấm hard-code số lượt
- labels: useFormOptions() · cấm hardcode VN form/list
- GPS: N/A trên TK-07 · product rule deny blocks nút cần tọa độ · cấm mẫu
- out of E: báo cáo tháng desktop · track GPS · native · edit quy tắc phone
- open questions: UNCLEAR-FREQ-API · UNCLEAR-ROAD-CLASS · UNCLEAR-COUNT-SOURCE · UNCLEAR-RULE-SOURCE · UNCLEAR-DOMAIN-SLUG

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| planList | kế hoạch | List RO | empty if no API |
| route | tuyến | Text RO | |
| roadClass | cấp đường | Text/Chip RO | GAP if missing |
| ruleText | quy tắc | Text RO | no global hardcode |
| patrolDayCount | ca TD/ngày | Number RO | |
| inspectWeekCount | đợt TK/tuần | Number RO | |
| coverageStatus | thiếu/đủ | Chip RO | thieu\|du |

## Screens / zones (ids only)
- TK-07
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-mobile-e
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET frequency/plan **Mới** · GET road-routes · GET sessions (agg)
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-FREQ-API: resource path GET kế hoạch
- UNCLEAR-ROAD-CLASS: field cấp trên road-routes
- UNCLEAR-COUNT-SOURCE: server vs client sessions
- UNCLEAR-RULE-SOURCE: ruleText bảng vs enum theo class
- UNCLEAR-DOMAIN-SLUG: DOMAIN-MAP row web-rmms-mobile-e

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-e-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-e-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mobile-e.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/STATUS.md
