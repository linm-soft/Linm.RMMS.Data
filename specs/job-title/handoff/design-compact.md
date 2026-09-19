# Handoff compact — design

schemaVersion: 1
feature: job-title
packKind: master
role: design
status: done
changeScope: new_page
taskId: task_a6e54864
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.01
rulesVersion: 2026.09.19.2
versionGate: ok
writtenAt: 2026-09-19T02:30:00.000Z
handoffTo: sa
autoApprove: ON
design_confirm: approve
sourceContentHash: sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab
real_view_parity: v1
shared_grid_example: v1

## Decisions
- changeScope: new_page · Kind B catalog Master · DEM N/A
- formPattern: Slideout · data-form-cols=2 · footer Hủy/Lưu
- list: DES-GRID-A…D · F · H · Z · LeaveConfirmModal
- filter: LinErpListFilterBar · search + titleGroup · 🔍 phải · cấm nút Tìm
- grid_standard: v1 · reportAc: n/a · tabs: none
- mfe: Master `/mas/chuc-vu` · be: Integration `job-titles` · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | C1 filter |
| titleGroup | Nhóm | Dropdown | LEAD/TECH/PATROL |
| code | Mã | Text code | lock edit · cấm Guid |
| name | Tên | Text | required |
| packageHint | Package gợi ý | Dropdown/derived | LEAD→MANAGER-RMMS |
| legacyAliases | Alias | Text/tags | Excel |
| isActive | Hiệu lực | Switch | |
| jobTitleCode | Chức vụ | SearchInput | consumer only |

## Screens / zones (ids only)
- S-LIST Full · DES-GRID-A B C0 C1 C2 C2a C3 D F H
- S-FORM Slideout DES-GRID-Z · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html
- peerStdUrl= file:///D:/AI-Rules/Linm.Development.Rules/common/skill/agent-design/example/shared-grid-example.html
- mfeStdUrl= http://localhost:9318/mas/chuc-vu

## API / tasks (ids only)
- CRUD/search/init …/integration/job-titles
- FormMode C/E/V ↔ POST/PUT/GET
- GenerateAsync · seed GAP-JOB-05
- T-* DEFER TL · devSlash=/agent-dev

## UNCLEAR
- none

## GAP (handoff SA)
- GAP-JOB-DM-01 / BE-01 / MFE-01 / 05 P0
- GAP-JOB-01/02/04/06 P1 · GAP-JOB-03 P2

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-real-data.md
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/STATUS.md
