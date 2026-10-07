# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-giao-viec-ql-hat
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:40:00.000Z
contentHash: sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7
taskId: task_98c06ee2
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent giao-viec controller/route
- formPattern: Mobile full ≤430 · DES-MOB-INC-DETAIL · GV-F · LeaveConfirmModal · N/A ERP Modal
- DES-GRID / LinErpListFilterBar: N/A phone · WAIVE Kind B T-UI-LIST/FILTER/CFG/HIST · GAP-TL-FORMTYPE-01 PASS
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-giao-viec-ql-hat · mfeStdUrl http://localhost:9301/web-rmms-giao-viec-ql-hat
- be: Linm.RMMS.WebService · Mobile.Bff :5202 · Maintenance POST work-orders · Incident · Patrol · users · auth/profile · cấm ERP.*
- DueAt absolute · SlaHours omit/null (SA-DEC-01) · hangMuc client TT41 · CTA iff roleCaps.qlHat
- Step 4b/migration: skip · route_confirm keep
- Leave: T-UI-LEAVE-01 LeaveConfirmModal · cấm alert/confirm
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| assignCta | Button gated | T-GV-01 · T-PERM-01 |
| assignee | SearchInput | T-GV-02 |
| team | SearchInput | T-GV-02 |
| hangMuc | Dropdown | T-GV-02 |
| dueAt | DateTime | T-GV-02 |
| note | TextArea | T-GV-02 |
| submitAssign | Button | T-GV-02 · T-GV-05 |
| list.* | CardList | T-GV-03 |
| leave | LeaveConfirmModal | T-GV-04 · T-UI-LEAVE-01 |

## Screens / zones (ids only)
- GV-00 · GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W · DES-LEAVE · TOAST
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-giao-viec-ql-hat
- DES-GRID: N/A

## API / tasks (ids only)
- FormMode↔API: GET incidents · patrol · POST work-orders · opt assign · users · auth/profile
- T-GV-01..05 · T-UI-LEAVE/UX/RESP/PROD/ALIGN · T-PERM-01 · T-QA-GV-01 · T-BE N/A
- deps: T-GV-01→02→04/05 · T-GV-03 parallel · T-QA after FE
- devSlash=/agent-dev · qaSlash=/agent-qa*
- WAIVE: T-UI-LIST/FILTER/CFG · T-QA-FILTER/CRUD Kind B · T-BE-CRUD

## UNCLEAR
- none open

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/task/web-rmms-giao-viec-ql-hat.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/STATUS.md
