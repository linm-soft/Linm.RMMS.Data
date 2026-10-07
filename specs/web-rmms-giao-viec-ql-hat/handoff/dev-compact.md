# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-giao-viec-ql-hat
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T04:10:00.000Z
contentHash: sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7
taskId: task_d0cb541d
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · cấm giao-viec controller · cấm ERP.* · cấm web-bff
- formPattern: Mobile ≤430 · GV-F AssignFormPage · LeaveConfirmModal · N/A ERP Modal
- DES-GRID / LinErpListFilterBar: N/A WAIVE Kind B
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-giao-viec-ql-hat → /cong-viec · mfeStdUrl http://localhost:9301/web-rmms-giao-viec-ql-hat
- be: Linm.RMMS.WebService · Mobile.Bff :5202 · POST work-orders · opt incident assign · Step 4b skip
- DueAt absolute · SlaHours omit · hangMuc TT41 client · CTA iff roleCaps.qlHat
- build: MFE yarn build PASS · BE sln PASS
- next: /agent-qa* · e2eQa ON · GAP-PKT-ROLE-01 stop

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| assignCta | Button gated | qlHat · INC/RPT/HUB |
| assignee | SearchInput | integration users |
| team | SearchInput | free-text required |
| hangMuc | Dropdown | TT41 static |
| dueAt | DateTime | hint · editable · no SlaHours |
| note | TextArea | optional |
| submitAssign | Button | POST WO (+opt assign) |
| list.* | CardList | unscoped qlHat |
| leave | LeaveConfirmModal | dirty GV-F |

## Screens / zones (ids only)
- GV-00 · GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W · DES-LEAVE · TOAST
- mfeStdUrl= http://localhost:9301/web-rmms-giao-viec-ql-hat
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html
- DES-GRID: N/A

## API / tasks (ids only)
- FormMode↔API: GET incidents · patrol · POST work-orders · opt assign · users · auth/profile
- T-GV-01..05 · T-UI-LEAVE/UX/RESP/PROD/ALIGN · T-PERM-01 done · T-QA-GV-01 pending
- debt: team free-text · e2e queued QA

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/implement/web-rmms-giao-viec-ql-hat.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/STATUS.md
