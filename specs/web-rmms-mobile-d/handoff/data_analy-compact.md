# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:28:04.000Z
contentHash: sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034

## Decisions
- changeScope: edit_page
- formPattern: Mobile full (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-d
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Maintenance WO · cấm ERP.*
- demo: N/A
- wave D: TD-06 ket-ca/ban-giao/tam-dung · TK-03 assign WO · TK-05 feedback · TK-06 petitions
- Live: PUT sessions Status · POST maintenance/work-orders
- HARD: Schema handover/pause · petition · feedback · workOrderId pair trước form
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation · deny blocks nút cần tọa độ · TK-06 no-face OK không fake · TD-06 no GPS
- petition ≠ notification/inbox
- out of D: TK-07 (E)
- open questions: UNCLEAR-HANDOVER-COL · UNCLEAR-PAUSE-STATUS · UNCLEAR-PETITION-SCHEMA · UNCLEAR-FEEDBACK-DTO · UNCLEAR-WO-LINK · UNCLEAR-RECEIVER-API · UNCLEAR-DOMAIN-SLUG

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| actionKind | việc TD-06 | Radio | ket-ca/ban-giao/tam-dung |
| handoverNote | bàn giao | TextArea | required if ban-giao |
| pauseReason | tạm dừng | Dropdown | 5 keys required |
| saveSession | Lưu | Button | PUT sessions Live Status |
| assignWo | giao BDTX | Button | POST WO Live · workOrderId · da-giao |
| feedback.* | phản hồi | form block | POST …/feedback → cho-kiem-tra |
| petitionList | sổ KN | List cards | GET petitions Mới |
| sender/route/km/content/kind | tạo KN | form | POST petitions |
| lat/lng | GPS TK-06 | GPS | no-face → save w/o coords |

## Screens / zones (ids only)
- TD-06 · TK-03 (assign) · TK-05 (feedback) · TK-06
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-mobile-d
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: PUT sessions · POST work-orders · POST findings/{id}/feedback · GET|POST petitions
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-HANDOVER-COL: session cols vs bảng · Note tạm format
- UNCLEAR-PAUSE-STATUS: flag vs Status riêng
- UNCLEAR-PETITION-SCHEMA: Schema_PatrolPetition chưa Live
- UNCLEAR-FEEDBACK-DTO: body feedback
- UNCLEAR-WO-LINK: workOrderId finding vs journal
- UNCLEAR-RECEIVER-API: user cùng đơn vị
- UNCLEAR-DOMAIN-SLUG: DOMAIN-MAP row web-rmms-mobile-d

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mobile-d.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
