# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-cam-nghiem-thu
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:45:00.000Z
contentHash: sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0
taskId: task_aaa3a7da
autoApprove: ON
changeScope: edit_page
mfeStdUrl: http://localhost:9301/web-rmms-cam-nghiem-thu

## Decisions
- changeScope: edit_page · cấm CamNghiemThu* / product slug mới
- Role: camNghiemThuAccess · nghiemThu write · TK/QL_HAT view · tuanDuong-only hidden
- Hide btnCreate non-NT · roleGateBanner · Pattern B saving|photoBusy · LeaveConfirm dirty write-only
- NT-RO-LINK: /tuan-duong · /phat-hien?status=xong (Entry forward query)
- alias /web-rmms-cam-nghiem-thu → /nghiem-thu
- Step 4b/migration/API: none · skip · Live nghiem-thu KEEP
- Build: MFE yarn build PASS · BE dotnet PASS (no BE diff)
- cấm: Giao việc · Xác nhận SC · fake GPS · ERP.* · web-bff · e2e ở Dev
- next: /agent-qa* · e2eQa queued

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | write iff nghiemThu · view else |
| gps | GPS+Banner | Pattern B |
| templateType/route/assignee/scores | Select+Search+Checklist | RO when !write |
| save | Button | disabled saving\|photoBusy |
| btnCreate | Button | hide non-NT |
| cards | List | hidden tuanDuong-only |
| linkRo | Nav RO | sessions + findings đạt |
| roleCaps | Hidden | auth/profile |
| assignCta/confirmSc | — | CẤM |

## Screens / zones (ids only)
- NT-L · NT-F · NT-RO-LINK · NT-leave · roleGateBanner
- productRoute=/nghiem-thu · /moi · /:id
- mfeStdUrl alias only
- DES-GRID: N/A phone · WAIVE Kind B LIST/FILTER/CFG/HIST

## API / tasks (ids only)
- Live: GET/POST/PUT nghiem-thu + init + files + lookups + auth/profile
- RO cite: sessions → /tuan-duong · findings status=xong → /phat-hien
- T-* Dev PASS: T-BE-PROF/CRUD · T-PERM · T-UI-* · T-UI-LEAVE/PROD/UX/RESP/ALIGN
- T-QA-FORM/CRUD: pending QA
- debt: RequirePermission TODO on NghiemThuController (peer)

## UNCLEAR
- none · CARRY verify NGHIEM-THU seed before E2E write

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/implement/web-rmms-cam-nghiem-thu.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/task/web-rmms-cam-nghiem-thu.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/STATUS.md
