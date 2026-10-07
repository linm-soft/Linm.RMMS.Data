# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-role-gate
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T17:00:00.000Z
contentHash: sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216
taskId: task_b93ec9fc
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · cấm RoleGateController · cấm ERP.*
- formPattern: Mobile full ≤430 · profile RO + visibility · assign peer · LeaveConfirmModal
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-role-gate · mfeStdUrl http://localhost:9301/web-rmms-role-gate
- be: Linm.RMMS.WebService · Mobile.Bff AuthProfileEnrichMiddleware · Seed_JobTitleQlHatNghiemThu applied
- build: MFE yarn build PASS · API+BFF dotnet PASS · EF seed PASS
- next: /agent-qa* · e2eQa ON · GAP-PKT-ROLE-01 stop

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| profile.jobTitleCode/packageCode | Chip RO | auth/profile enrich |
| roleCaps.* | Flag RO | BE derive · FE bind |
| seed.packageHint | Dropdown | init-data +QL_HAT |
| incident.btnAssign | Button gated | qlHat only |
| assign.dueAt | DateTime | TT41 hint · editable |
| finding Pass/Fail | Button gated | tuanKiem |

## Screens / zones (ids only)
- RG-00 · RG-01 · RG-02 · RG-03a..d
- mfeStdUrl= http://localhost:9301/web-rmms-role-gate
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html
- DES-GRID: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET auth/profile(+roleCaps) · GET users/me · job-titles init-data/PUT · Seed applied
- T-BE-* · T-UI-* done · T-QA-RG-01 pending
- debt: live smoke + e2e queued QA

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/implement/web-rmms-role-gate.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/STATUS.md
