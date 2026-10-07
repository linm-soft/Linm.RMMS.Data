# Handoff compact — po

schemaVersion: 1
feature: web-rmms-role-gate
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T16:25:00.000Z
contentHash: sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216
taskId: task_86f650f4

## Decisions
- changeScope: edit_page · cấm new_page · cấm route public mới
- formPattern: Mobile full 430 · profile gate + visibility · N/A ERP Modal
- Grid AC Kind B: N/A phone · Report AC: N/A · Leave: LeaveConfirmModal (Master/assign dirty)
- packKind confirm: list (phone gate ≠ desktop Kind B)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-role-gate
- be: D:/AI-QLBD/Linm.RMMS.WebService · Integration job-titles + Auth profile · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip analy · cấm rescan (GAP-PO-DEMO-RESCAN-01)
- Delta: HAT-* → packageHint QL_HAT · CTA Giao việc chỉ qlHat · dueAt TT41 editable · cấm SLA 24h · cấm Mục IV money
- UNCLEAR-RG-NT-CODE: **resolved** — SA seed code NGHIEM-THU (ACCEPT / RMMS-TDTK) · FE chỉ bind roleCaps
- OUT: Excel · invent role-gate controller · chấm 100 · iOS/Android · MANAGER→Giao việc
- next: /agent-design · roleOnly stop (GAP-PKT-ROLE-01)
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
- RG-00 · RG-01 · RG-02 · RG-03a..d
- reviewUrl= (Design next)
- peerStdUrl= http://localhost:9301/web-rmms-role-gate
- DES-GRID / LinErpListFilterBar: N/A phone
- controlHint cite: specs/_data-analy/features/web-rmms-role-gate-control-hint.md

## AC (ids)
- Grid Kind B: N/A · AC-GRID-01…03 phone visibility
- Role: AC-RG-01…10

## API / tasks (ids only)
- FormMode↔API: GET auth/profile · GET/PUT integration/job-titles · cite Incident assign / findings / home-shell
- real-data §A+§B: PASS
- T-*: (team_lead) · edit profile gate + seed HAT-* + visibility peers

## UNCLEAR
- UNCLEAR-RG-NT-CODE: **resolved** (seed NGHIEM-THU → SA)
- GAP-RG-DM-01 · GAP-RG-PROF-01 · GAP-RG-SEED-01 → SA/Dev

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-role-gate-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-role-gate-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/STATUS.md
