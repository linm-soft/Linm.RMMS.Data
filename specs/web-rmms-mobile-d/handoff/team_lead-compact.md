# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:50:00.000Z
taskId: task_6f250538
contentHash: sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034
route_confirm: approve
autoApprove: ON
mfeStdRoute: /web-rmms-mobile-d

## Decisions
- changeScope: edit_page
- formPattern: Full (TD-06 · TK-03 assign · TK-05 feedback · TK-06 list+form) · phone 430 · LeaveConfirmModal
- packKind list = phone Field list+form ≠ Kind B grid · DES-GRID/LinErpListFilterBar/ui-schema/LKP/HIST **WAIVE**
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-d
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Maintenance WO · cấm ERP.*
- BFF: mobile-bff/api/v1/patrol/** · maintenance/**
- HARD: Schema_PatrolPetition + entity + migration D (session handover/pause · finding feedback/WO · journal WO) **trước** TK-06 / scalar TD-06
- Note tạm 1 format D1|handover|… · D1|pause|… · pause=IsPaused trên Đang tuần · receiver Text tay + GAP keep
- GPS: TK-06 deny+no-face · TD-06 none · cấm fake · petition ≠ inbox
- out D: TK-07 (E) · next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

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
- Leave: dirty TD-06 / TK-06 create · Back→hub A · Save PUT · assign→da-giao · feedback→cho-kiem-tra
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-d
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: PUT sessions · POST work-orders · POST findings/{id}/feedback · GET|POST petitions
- T-*: T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-FORM-01 · T-UI-ACT-02 · T-UI-FORM-02 · T-UI-LIST-01 · T-UI-FORM-03 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-QA-CRUD-01 · T-QA-FORM-01
- WAIVE: KindB · FILTER · CFG · UISCHEMA · LKP · HIST · QA-FILTER
- deps: T-BE-SCHEMA → T-BE-CRUD → T-UI-* → T-QA-*
- devSlash: /agent-dev (all T-UI) · T-UI-RESP-01=/dev-web-responsive

## UNCLEAR
- none (SA closed all · GAP-RECEIVER keep non-blocking)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/task/web-rmms-mobile-d.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
