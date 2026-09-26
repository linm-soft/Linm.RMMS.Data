# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:15:00.000Z
taskId: task_eeebef9d
contentHash: sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4
route_confirm: approve
autoApprove: ON
mfeStdRoute: /web-rmms-mobile-c

## Decisions
- changeScope: edit_page
- formPattern: Full (TK-02 list · TK-03 form · TK-04 review · TK-05 recheck) · phone 430 · LeaveConfirmModal
- packKind list = phone Field list+form ≠ Kind B grid · DES-GRID/LinErpListFilterBar/ui-schema/LKP/HIST **WAIVE**
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-c
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files · cấm ERP.*
- BFF: mobile-bff/api/v1/patrol/** · findings + recheck + journal review
- HARD: Schema_PatrolFinding + entity + migration C (findings + Review cols) **trước** TK-03
- code: TK-{yyyyMMdd}-{seq:D3} server-only · GPS deny blocks TK-03/05 · TK-04 prefill journal GPS
- hangMuc PO slugs · labels useFormOptions · demo N/A · out TK-06/07·WO·feedback D
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| findingList | danh mục | List cards | GET findings?sessionId&status&route |
| filter.status/route | lọc | Chip/Select | phone · no ERP filter bar |
| source | nguồn | Dropdown | 5 keys · journal if tuan-duong |
| findingKind | loại | Dropdown | 7 keys |
| kmFrom/kmTo | km | Text | |
| side | vị trí | Dropdown | 5 keys |
| hangMuc | hạng mục | Dropdown | PO slugs |
| description | mô tả | TextArea | required |
| scope | phạm vi | Radio | bdtx/vuot-bdtx |
| lat/lng/accuracyM | GPS | GPS | TK-03/05 HARD |
| dueAt | hạn | Date | if bdtx |
| mediaIds | ảnh | FileMulti | files/* |
| review/reviewNote | khớp/lệch | Radio+Text | PUT review · lech note |
| createFromLech | lập phiếu | Button | → TK-03 prefill |
| recheckResult | kết luận | Radio | dat→xong · chua→da-giao |
| confirmDone | xác nhận | Button | only if dat |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · DES-LEAVE
- Leave: TK-02↔03/05 · TK-04→03 prefill · Back→hub A · Save TK-03→TK-05
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-c
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET/POST findings · GET findings/{id} · POST …/recheck · PUT journal-lines/{id}/review · peer journal-lines · parent sessions · files/*
- T-*: T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-LIST-01 · T-UI-FORM-01 · T-UI-FORM-02 · T-UI-FORM-03 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-QA-CRUD-01 · T-QA-FORM-01
- WAIVE: KindB · FILTER · CFG · UISCHEMA · LKP · HIST · QA-FILTER
- deps: T-BE-SCHEMA → T-BE-CRUD → T-UI-* → T-QA-*
- devSlash: /agent-dev (all T-UI) · T-UI-RESP-01=/dev-web-responsive

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/task/web-rmms-mobile-c.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
