# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:40:00.000Z
taskId: task_d6793a26
contentHash: sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page
- formPattern: Full (TD-06 · TK-03 assign · TK-05 feedback · TK-06 list+form) · phone 430 · LeaveConfirmModal · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-d
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Maintenance WO · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- wave D: TD-06 ket-ca/ban-giao/tam-dung · TK-03 assignWo · TK-05 feedback · TK-06 petitions ≠ inbox
- Live: PUT sessions Status · POST maintenance/work-orders
- HARD: Schema-before-form handover/pause · petition · feedback · workOrderId
- labels: useFormOptions() · GPS TK-06 deny+no-face OK · TD-06 no GPS · cấm fake
- out of D: TK-07 (E)
- open questions: UNCLEAR-HANDOVER-COL · UNCLEAR-PAUSE-STATUS · UNCLEAR-PETITION-SCHEMA · UNCLEAR-FEEDBACK-DTO · UNCLEAR-WO-LINK · UNCLEAR-RECEIVER-API · UNCLEAR-DOMAIN-SLUG → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
- TD-06 · TK-03 (assign) · TK-05 (feedback) · TK-06 · DES-LEAVE
- Leave: dirty TD-06 / TK-06 create · Back→hub A · Save TD-06 PUT · assign→WO · feedback→cho-kiem-tra
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-d
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: PUT sessions · POST work-orders · POST findings/{id}/feedback · GET|POST petitions
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-HANDOVER-COL: Note tạm 1 format → SA
- UNCLEAR-PAUSE-STATUS: flag trên Đang tuần → SA
- UNCLEAR-PETITION-SCHEMA: Schema_PatrolPetition trước form → SA
- UNCLEAR-FEEDBACK-DTO: body §B → SA
- UNCLEAR-WO-LINK: finding+journal → SA
- UNCLEAR-RECEIVER-API: Text tay + GAP → SA
- UNCLEAR-DOMAIN-SLUG: DOMAIN-MAP row D → SA

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
