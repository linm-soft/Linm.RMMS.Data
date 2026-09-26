# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T10:15:00.000Z
taskId: task_8c29a4e4
contentHash: sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034
mfeStdRoute: /web-rmms-mobile-d
mfeStdUrl: http://localhost:9301/web-rmms-mobile-d
build: PASS

## Decisions
- changeScope: edit_page
- formPattern: Full TD-06 · TK-03 assign · TK-05 feedback · TK-06 list+form · phone 430 · LeaveConfirm
- Schema_PatrolPetition + migration D BEFORE forms — done
- Pause: IsPaused on Status=Đang tuần · cấm Status Tạm dừng
- Receiver: Text tay + profile prefill · GAP-RECEIVER keep
- WO: POST maintenance/work-orders Live · assign-work-order on finding
- Petition ≠ inbox · empty list OK · code server KN-*
- DES-GRID/FilterBar/ui-schema/LKP/HIST: WAIVE phone
- e2eQa: queued QA · cấm Dev e2e/start:std
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | wire |
|----|-------------|------|
| actionKind | Radio | PUT sessions Status/IsPaused |
| handoverNote/receiver | TextArea/Text | Handover* cols |
| pauseReason | Dropdown | PauseReason |
| assignWo | Button | POST WO + assign-work-order |
| feedback.* | form | POST …/feedback → cho-kiem-tra |
| petitionList/create | cards+form | GET\|POST petitions · GPS/noFace |

## Screens / zones (ids only)
- TD-06 · TK-03 · TK-05 · TK-06 · DES-LEAVE
- mfeStdUrl= http://localhost:9301/web-rmms-mobile-d
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html

## API / tasks (ids only)
- PUT sessions · POST work-orders · POST findings/{id}/feedback · POST …/assign-work-order · GET|POST petitions
- T-BE-SCHEMA/CRUD/INIT/PERM · T-UI-FORM-01/02/03 · T-UI-LIST-01 · T-UI-ACT-01/02 · LEAVE/FIELD/PROD/UX/RESP = done
- T-QA-* = pending (queued)

## UNCLEAR
- none · GAP-RECEIVER keep

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/implement/web-rmms-mobile-d.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
