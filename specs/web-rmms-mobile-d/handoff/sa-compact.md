# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:45:00.000Z
taskId: task_5b248a11
contentHash: sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034
solution_confirm: approve
autoApprove: ON
be_repo_confirm: approve
ui_repo_confirm: approve

## Decisions
- changeScope: edit_page
- formPattern: Full TD-06 · TK-03 assign · TK-05 feedback · TK-06 · phone 430 · LeaveConfirm · N/A ERP Modal/Slideout · DES-GRID N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-d
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Maintenance WO · cấm ERP.*
- domain slug: web-rmms-mobile-d → Patrol (+ Maintenance cite) · DOMAIN-MAP row added
- entity Mới: PatrolPetitionEntity · rmms_patrol_petitions · Schema_PatrolPetition pair trước form
- session: migration D HandoverNote · HandoverOpenLineIds · ReceiverName · PauseReason · IsPaused
- Note tạm 1 format: D1|handover|{receiver}|{openIds}|{note} · D1|pause|{reason}|{note?} · đến khi cols Live
- pause: flag IsPaused trên Status=Đang tuần · cấm Status Tạm dừng riêng
- feedback body: qtyDone · quality · at · mediaIds · note · POST findings/{id}/feedback → cho-kiem-tra
- WO link: WorkOrderId trên finding + journal · POST maintenance/work-orders Live
- receiver: Text tay + profile prefill · GAP-RECEIVER keep · cấm invent roster API
- BFF: mobile-bff proxy · API owns · web-bff cite
- GPS: TK-06 deny+no-face · TD-06 none · cấm fake
- out D: TK-07 (E)
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| actionKind | việc TD-06 | Radio | ket-ca/ban-giao/tam-dung |
| handoverNote | bàn giao | TextArea | required if ban-giao |
| pauseReason | tạm dừng | Dropdown | 5 keys required |
| saveSession | Lưu | Button | PUT sessions Live+D |
| assignWo | giao BDTX | Button | POST WO Live · workOrderId · da-giao |
| feedback.* | phản hồi | form block | POST …/feedback → cho-kiem-tra |
| petitionList | sổ KN | List cards | GET petitions Mới |
| sender/route/km/content/kind | tạo KN | form | POST petitions |
| lat/lng · noFace | GPS TK-06 | GPS+Flag | no-face OK · cấm fake |

## Screens / zones (ids only)
- TD-06 · TK-03 (assign) · TK-05 (feedback) · TK-06 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-d
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: PUT sessions · POST work-orders · POST findings/{id}/feedback · GET|POST petitions
- entity: Schema_PatrolPetition + session/finding/journal WO cols · migration D (TL/Dev Step 4b)
- BFF: mobile-bff/api/v1/patrol/** · maintenance/**
- UNCLEAR: all CLOSED
- T-*: (team_lead)

## UNCLEAR
- (none — HANDOVER-COL · PAUSE-STATUS · PETITION-SCHEMA · FEEDBACK-DTO · WO-LINK · RECEIVER-API · DOMAIN-SLUG closed)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
