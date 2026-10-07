# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-cam-nghiem-thu
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:35:00.000Z
contentHash: sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0
taskId: task_5d5e31fb
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: keep

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamNghiemThu* / product slug
- DOMAIN-MAP: bind peer nghiem-thu · reuse NghiemThuController · rmms_nghiem_thu
- formPattern: Mobile list+form ≤430 · Pattern B · N/A ERP Modal
- DES-GRID / LinErpListFilterBar: N/A phone · WAIVE Kind B T-UI-LIST/FILTER/CFG/HIST · GAP-TL-FORMTYPE-01 PASS
- Delta: roleCaps.nghiemThu write+capture+Tạo · hide Tạo non-NT · LIST-VIS · NT-RO-LINK · Pattern B keep
- Role: deps web-rmms-role-gate · seed NGHIEM-THU · QL_HAT=HAT-* only · cấm MANAGER suy
- RO: /tuan-duong + /phat-hien(+đạt) · sessions/findings RO · cấm recheck/assign
- productRoute: /nghiem-thu · /moi · /:id · mfeStdUrl alias queue only
- BFF: Mobile.Bff :5202 · cấm web-bff · cấm ERP.*
- Step 4b/migration/API mới: none · skip
- cấm: Giao việc · Xác nhận SC · Mục IV · SlaHours=24 · fake GPS · Excel · iOS/Android
- Leave: T-UI-LEAVE-01 LeaveConfirmModal · cấm alert/confirm
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| photos | RouteCapture | T-UI-FORM-01 · T-PERM-01 |
| gps | GPS+Banner | T-UI-FORM-01 |
| templateType/route/assignee/scores | Select+Search+Checklist | T-UI-LKP-01 · T-UI-FIELD-01 |
| save | Button | T-UI-FORM-01 · T-PERM-01 |
| btnCreate | Button | T-UI-VIS-01 |
| cards | List | T-UI-VIS-01 · T-BE-CRUD-01 |
| linkRo | Nav RO | T-UI-RO-01 |
| roleCaps | Hidden | T-BE-PROF-01 · T-PERM-01 |
| assignCta/confirmSc | — | CẤM |

## Screens / zones (ids only)
- NT-L · NT-F · NT-RO-LINK · NT-leave · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html
- peerStd deep-link= /nghiem-thu/moi
- DES-GRID: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST/PUT nghiem-thu + files + lookups keep · profile roleCaps · sessions/findings RO
- T-BE-PROF-01 · T-BE-CRUD-01 · T-PERM-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-VIS-01 · T-UI-FORM-01 · T-UI-RO-01 · T-UI-LEAVE-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-ALIGN-01 · T-QA-FORM-01 · T-QA-CRUD-01
- WAIVE: T-UI-LIST/FILTER/CFG/HIST · T-QA-FILTER-* Kind B
- deps: T-BE-* → T-UI-* → T-QA-*
- devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- none open · all UNCLEAR-NT-* RESOLVED · CARRY verify role-gate peer before write gate

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/task/web-rmms-cam-nghiem-thu.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/STATUS.md
