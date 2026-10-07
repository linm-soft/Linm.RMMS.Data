# Handoff compact — design

schemaVersion: 1
feature: web-rmms-role-gate
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T16:21:00.000Z
contentHash: sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216
taskId: task_1c2a1e71
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · cấm new_page · cấm route public mới
- formPattern: Mobile full · phone 430 · profile RO + visibility · assign peer sheet · N/A ERP Modal
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone gate
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-role-gate
- be: D:/AI-QLBD/Linm.RMMS.WebService · Integration job-titles + Auth profile · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Delta: HAT-* → QL_HAT · CTA Giao việc chỉ qlHat · dueAt TT41 editable · cấm SLA 24h · cấm Mục IV money · cấm MANAGER→Giao việc
- Leave: RG-02/RG-03c LeaveConfirmModal · cấm native alert/confirm
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)
- autoApprove: ON · e2eQa queued QA · devSlash=/agent-dev

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| profile.jobTitleCode | chức danh | Text/Chip RO | job-titles |
| profile.packageCode | package | Chip RO | QL_HAT only HAT-* |
| roleCaps.* | caps | Flag RO | tuanDuong/tuanKiem/nghiemThu/qlHat |
| seed.packageHint | seed | Dropdown | HAT-* → QL_HAT |
| incident.btnAssign | Giao việc xử lý | Button gated | qlHat only |
| assign.dueAt | hạn | DateTime | TT41 · editable |
| finding.btnPass/Fail | xác nhận | Button gated | tuanKiem only |
| home/hub/shell | nav | gated | theo vai |

## Screens / zones (ids only)
- RG-00 · RG-01 · RG-02 · RG-03a · RG-03b · RG-03c · RG-03d
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-role-gate
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone
- controlHint cite: specs/_data-analy/features/web-rmms-role-gate-control-hint.md

## API / tasks (ids only)
- FormMode↔API: GET auth/profile · GET/PUT integration/job-titles · cite Incident assign / findings / home-shell
- real-data §A+§B: PASS
- T-*: (team_lead) · edit profile gate + seed HAT-* + visibility peers

## UNCLEAR
- UNCLEAR-RG-NT-CODE: resolved (PO → seed NGHIEM-THU · SA)
- GAP-RG-DM-01 · GAP-RG-PROF-01 · GAP-RG-SEED-01 → SA/Dev

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-role-gate-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-role-gate-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/STATUS.md
