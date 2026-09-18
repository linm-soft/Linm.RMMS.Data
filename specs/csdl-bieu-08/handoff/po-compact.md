# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-08
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c
headerFingerprint: sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f
writtenAt: 2026-09-18T05:00:00.000Z
taskId: task_c7498ca2
priorAnaly: task_774ebbde
priorTyped: task_49b1fe15
resource: traffic-safety
columns: 45
groups: 11
IdCode: AT-
formNo: 08

## Decisions
- changeScope: edit_page (T-XLS-S08 · Wave 1 · pilot with S01)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- packKind: list (PO confirm)
- Grid AC: keep + toolbar Xuất/Nhập · Leave: LeaveConfirmModal · Report AC: N/A
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu08_HeThongATGT_{yyyyMMdd}.xls · Q-XLS-TYPE: one_sheet_45
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 8 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- keep: typed 45/11 · shared+1 child · subset_by_type · Schema_CsdlBieu8+11 children
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 45/11) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | P1 import_now |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export+import** · filter unchanged
- Form Kind D Slideout keep · shared+1 child
- S-XLS-EXPORT / S-XLS-IMPORT
- reviewUrl= prior prototype (Design delta nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-08
- Leave: LeaveConfirmModal · **cấm** native alert
- controlHint cite: specs/_data-analy/features/csdl-bieu-08-control-hint.md

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=traffic-safety
- Export: GET …/csdl-records/export?resource=traffic-safety (+ filter QS)
- Import: POST …/csdl-records/import?resource=traffic-safety
- T-XLS-S08 · GAP-BIEU08-XLS-01…06 · real-data §A+§B PASS
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-real-data.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-08/ui|be (delta only)

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · wide-row · 11-sheet invent · new_page typed re-CRUD · yarn build/e2e/start:std @ PO
