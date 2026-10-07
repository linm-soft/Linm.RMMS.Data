# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-role-gate
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T16:40:00.000Z
contentHash: sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216
taskId: task_f2510be5
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent RoleGateController
- formPattern: Mobile full ≤430 · profile RO + visibility · assign peer · N/A ERP Modal
- DES-GRID / LinErpListFilterBar: N/A phone · WAIVE Kind B T-UI-LIST/FILTER/CFG/HIST · GAP-TL-FORMTYPE-01 PASS
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-role-gate · mfeStdUrl http://localhost:9301/web-rmms-role-gate
- be: Linm.RMMS.WebService · Mobile.Bff :5202 · Integration job-titles + Auth profile · cấm ERP.*
- Seed Step 4b Dev · no Schema columns · HAT-*→QL_HAT · NGHIEM-THU
- Leave: T-UI-LEAVE-01 LeaveConfirmModal · cấm alert/confirm
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| profile.jobTitleCode/packageCode | Chip RO | T-UI-PROF-01 |
| roleCaps.* | Flag RO | T-BE-PROF-01 · T-UI-VIS-01 |
| seed.packageHint | Dropdown | T-UI-SEED-01 · T-BE-SEED-01 |
| incident.btnAssign | Button gated | T-UI-ASSIGN-01 |
| assign.dueAt | DateTime | T-UI-ASSIGN-01 |
| finding.btnPass/Fail | Button gated | T-UI-VIS-01 |
| home/hub/shell | nav gated | T-UI-VIS-01 |

## Screens / zones (ids only)
- RG-00 · RG-01 · RG-02 · RG-03a..d
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-role-gate
- DES-GRID: N/A

## API / tasks (ids only)
- FormMode↔API: API-01 enhance profile · API-02..05 job-titles · API-SEED · peers cite
- T-BE-PROF-01 · T-BE-SEED-01 · T-BE-JT-01 · T-UI-PROF-01 · T-UI-SEED-01 · T-UI-VIS-01 · T-UI-ASSIGN-01 · T-UI-LEAVE-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 · T-UI-ALIGN-01 · T-PERM-01 · T-QA-RG-01
- deps: T-BE-* → T-UI-* → T-QA-RG-01
- devSlash=/agent-dev · qaSlash=/agent-qa*
- WAIVE: T-UI-LIST/FILTER/CFG · T-QA-FILTER/CRUD Kind B

## UNCLEAR
- none open

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/task/web-rmms-role-gate.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/STATUS.md
