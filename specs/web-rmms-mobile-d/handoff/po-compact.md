# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:33:30.000Z
contentHash: sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034

## Decisions
- changeScope: edit_page · packKind=list confirmed
- formPattern: Mobile full phone max-width 430 · N/A ERP Modal/Slideout · DES-GRID/LinErpListFilterBar N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-d
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Maintenance WO · cấm ERP.*
- demo: N/A · hash skip analy · cấm re-scan
- wave D: TD-06 ket-ca/ban-giao/tam-dung · TK-03 assign WO · TK-05 feedback · TK-06 petitions
- Live: PUT sessions Status · POST maintenance/work-orders
- HARD: Schema-before-form handover/pause · petition · feedback · workOrderId
- labels: useFormOptions() · cấm hardcode VN
- GPS: TD-06 none · TK-03 assign no new · TK-05 feedback no HARD · TK-06 deny/no-face · cấm fake
- petition ≠ notification/inbox
- out of D: TK-07 (E) · native · desktop Asset
- peer D: TD-05 bdtx→WO · vuot-bdtx→kien-nghi-khu
- PO stance UNCLEAR → SA (Note tạm 1 format · pause flag trên Đang tuần · schema trước form · WO link cả finding+journal · receiver Text tay · DOMAIN slug D)

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
| lat/lng · noFace | GPS TK-06 | GPS+Flag | no-face OK · cấm fake |

## Screens / zones (ids only)
- TD-06 · TK-03 (assign) · TK-05 (feedback) · TK-06
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-mobile-d
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: PUT sessions · POST work-orders · POST findings/{id}/feedback · GET|POST petitions
- AC: L-* TK-06 · S-* TD-06 · W-* assign · F-* feedback · P-* petition · D-05 · X-schema
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-HANDOVER-COL → SA Note tạm 1 format
- UNCLEAR-PAUSE-STATUS → SA flag trên Đang tuần
- UNCLEAR-PETITION-SCHEMA → SA entity trước form
- UNCLEAR-FEEDBACK-DTO → SA chốt body §B
- UNCLEAR-WO-LINK → SA finding+journal
- UNCLEAR-RECEIVER-API → Text tay + GAP
- UNCLEAR-DOMAIN-SLUG → SA DOMAIN-MAP row D

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
