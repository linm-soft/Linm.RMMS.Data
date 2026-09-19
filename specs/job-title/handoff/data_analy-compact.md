# Handoff compact — data_analy

schemaVersion: 1
feature: job-title
packKind: master
role: data_analy
status: done
changeScope: new_page
taskId: task_fe86d194
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.01
rulesVersion: 2026.09.19.2
contentHash: sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab
writtenAt: 2026-09-18T18:45:00.000Z
handoffTo: po
autoApprove: ON
demo: N/A

## Decisions
- changeScope: new_page · Kind B catalog Master
- formPattern: Slideout (<10 fields)
- DEM: skip (master-catalog-no-demo)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master · `/mas/chuc-vu`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Integration · `api/v1/integration/job-titles` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: none (Autopilot) · GAPs listed

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| titleGroup | Nhóm | Dropdown | LEAD/TECH/PATROL · filter+form |
| code | Mã | Text code | cấm Guid · GenerateAsync |
| name | Tên | Text | canonical |
| packageHint | Package gợi ý | Dropdown/derived | LEAD→MANAGER-RMMS · TECH/PATROL→RMMS-TDTK |
| legacyAliases | Alias | Text/tags | Excel |
| isActive | Hiệu lực | Switch | |
| jobTitleCode | Chức vụ | SearchInput | consumer staff+ProfileTab |

## Screens / zones (ids only)
- List A/B/C/D · Form Slideout C/E/V
- reviewUrl= (Design)
- mfeStdUrl= http://localhost:9318/mas/chuc-vu
- peer: users `/admin/user` · Auth ProfileTab

## API / tasks (ids only)
- CRUD/search/init `…/integration/job-titles`
- seed: job-title-seed.json (~19) → DB (GAP-JOB-05)
- T-* DEFER TL

## UNCLEAR
- none

## GAP (handoff PO)
- GAP-JOB-DM-01 / BE-01 / MFE-01 / 05 P0
- GAP-JOB-01/02/04/06 P1 · GAP-JOB-03 P2

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/job-title.md
- seed: D:/AI-QLBD/Linm.RMMS.Data/docs/context/seed/job-title-seed.json
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/STATUS.md
