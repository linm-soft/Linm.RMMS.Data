# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-role-gate
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T16:08:25.000Z
contentHash: sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216
taskId: task_e58600c5

## Decisions
- changeScope: edit_page · cấm new_page · cấm route public mới
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- formPattern: Mobile full 430 · profile gate + visibility · N/A ERP Modal
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-role-gate
- be: D:/AI-QLBD/Linm.RMMS.WebService · Integration job-titles + Auth profile cite · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Delta: HAT-TRUONG/HAT-PHO → packageHint QL_HAT · caps tuần đường/tuần kiểm/nghiệm thu từ chức danh · Giao việc chỉ QL_HAT · cấm MANAGER-RMMS suy giao · cấm SLA 24h · cấm tiền Mục IV · cấm iOS/Android
- OUT: Excel · invent role-gate controller · chấm 100 điểm

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| profile.jobTitleCode | chức danh | Text/Chip RO | job-titles |
| profile.packageCode | package | Chip RO | QL_HAT only HAT-* |
| roleCaps.* | caps | Flag RO | tuanDuong/tuanKiem/nghiemThu/qlHat |
| seed.packageHint | seed | Dropdown | HAT-* → QL_HAT |
| incident.btnAssign | Giao việc xử lý | Button gated | qlHat only |
| assign.dueAt | hạn | DateTime | TT41 gợi ý · editable |
| finding.btnPass/Fail | xác nhận | Button gated | tuanKiem only |
| home/hub/shell | nav | gated | theo vai |

## Screens / zones (ids only)
- RG-00 · RG-01 · RG-02 · RG-03a..d
- reviewUrl= (Design next)
- peerStdUrl= http://localhost:9301/web-rmms-role-gate
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET auth/profile · GET/PUT integration/job-titles · cite Incident assign / findings / home-shell
- real-data §A+§B: PASS
- T-*: edit profile gate + seed HAT-* + visibility peers (PO/TL)

## UNCLEAR
- UNCLEAR-RG-NT-CODE: seed chưa mã NGHIEM-THU riêng
- GAP-RG-DM-01: DOMAIN-MAP thiếu slug
- GAP-RG-PROF-01: profile DTO packageCode/roleCaps (SA)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-role-gate-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-role-gate-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-role-gate.md
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- seed: D:/AI-QLBD/Linm.RMMS.Data/docs/context/seed/job-title-seed.json
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/STATUS.md
