# Handoff compact — po

schemaVersion: 1
feature: job-title
packKind: master
role: po
status: done
changeScope: new_page
taskId: task_a5766ebc
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.01
rulesVersion: 2026.09.19.2
versionGate: ok
writtenAt: 2026-09-18T19:30:00.000Z
handoffTo: design
autoApprove: ON
demo: N/A
sourceContentHash: sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab

## Decisions
- changeScope: new_page · Kind B catalog Master · PO confirm packKind=master
- formPattern: Slideout (<10 fields) · list shell Full page
- gridAc: yes · reportAc: n/a · grid_standard: v1
- leave: LeaveConfirmModal · delete/block useAlert/Modal · cấm native alert/confirm
- tabs: none
- devSlash: /agent-dev
- DEM: skip (master-catalog-no-demo) · hash skip — không re-scan demo
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master · `/mas/chuc-vu`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Integration · `api/v1/integration/job-titles` · cấm ERP.*
- filter: LinErpListFilterBar · lấp hàng rồi wrap · 🔍 mép phải · không nút Tìm
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B filter |
| titleGroup | Nhóm | Dropdown | LEAD/TECH/PATROL |
| code | Mã | Text code | cấm Guid · GenerateAsync · lock edit |
| name | Tên | Text | required |
| packageHint | Package gợi ý | Dropdown/derived | LEAD→MANAGER-RMMS · TECH/PATROL→RMMS-TDTK |
| legacyAliases | Alias | Text/tags | Excel |
| isActive | Hiệu lực | Switch | |
| jobTitleCode | Chức vụ | SearchInput | consumer staff+ProfileTab · không phải form catalog |

## Screens / zones (ids only)
- List A/B/C/D Full page · Form Slideout DES-GRID-Z C/E/V
- routes: `/mas/chuc-vu` · `/tao-moi` · `/sua?id=` · `/:id` (deep-link mở Slideout)
- gridAc: toolbar FULL · row menu · config · sort/filter cột · không tree
- reviewUrl= (Design)
- mfeStdUrl= http://localhost:9318/mas/chuc-vu
- peerStdUrl: không live Kind B · clone shared-grid-example · consumer `/admin/user`

## API / tasks (ids only)
- CRUD/search/init `…/integration/job-titles`
- FormMode: Create/Edit/View ↔ POST/PUT/GET
- seed: job-title-seed.json (GAP-JOB-05)
- devSlash `/agent-dev` · T-* DEFER TL
- LeaveConfirmModal

## UNCLEAR
- none

## GAP (handoff Design/SA)
- GAP-JOB-DM-01 / BE-01 / MFE-01 / 05 P0
- GAP-JOB-01/02/04/06 P1 · GAP-JOB-03 P2

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/job-title.md
- seed: D:/AI-QLBD/Linm.RMMS.Data/docs/context/seed/job-title-seed.json
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/STATUS.md
