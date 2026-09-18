# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-01
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085
headerFingerprint: sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2
writtenAt: 2026-09-17T17:55:00.000Z
taskId: task_3e372741
resource: pavement-sections
columns: 38
IdCode: MD-

## Decisions
- changeScope: edit_page (T-XLS-S01 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- packKind: list (PO confirm)
- Grid AC: keep + toolbar Xuất/Nhập · Leave: LeaveConfirmModal
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 1 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 38) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | P1 import_now |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export+import** · filter unchanged
- Form Kind D Slideout keep
- S-XLS-EXPORT / S-XLS-IMPORT
- reviewUrl= prior prototype (Design delta nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-01
- Leave: LeaveConfirmModal · **cấm** native alert
- controlHint cite: specs/_data-analy/features/csdl-bieu-01-control-hint.md

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=pavement-sections
- Export: GET …/csdl-records/export?resource=pavement-sections (+ filter QS)
- Import: POST …/csdl-records/import?resource=pavement-sections
- T-XLS-S01 · skip-bridge · real-data §A+§B PASS
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-real-data.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-01/ui|be (delta only)
