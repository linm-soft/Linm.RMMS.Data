# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-09
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01
headerFingerprint: sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77
writtenAt: 2026-09-18T05:36:00.000Z
taskId: task_2a1b2790
priorAnaly: task_f4041b8e
priorTyped: task_cee30b17
resource: boundary-markers
columns: 17
blocks: 2
IdCode: MK-
formNo: 09

## Decisions
- changeScope: edit_page (T-XLS-S09 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- packKind: list (PO confirm)
- Grid AC: keep + toolbar Xuất/Nhập · Leave: LeaveConfirmModal · Report AC: N/A
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls · Q-XLS-KIND: respect_filter
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 9 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- keep: typed 17/2 · Schema_CsdlBieu9 · 1 sheet · cấm 2 sheet invent
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | P1 import_now |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export+import** · filter unchanged
- Form Kind D Slideout keep · 2 section markerKind
- S-XLS-EXPORT / S-XLS-IMPORT
- reviewUrl= prior prototype (Design delta nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-09
- Leave: LeaveConfirmModal · **cấm** native alert
- controlHint cite: specs/_data-analy/features/csdl-bieu-09-control-hint.md

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=boundary-markers
- Export: GET …/csdl-records/export?resource=boundary-markers (+ filter QS)
- Import: POST …/csdl-records/import?resource=boundary-markers
- T-XLS-S09 · GAP-BIEU09-XLS-01…06 · real-data §A+§B PASS
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-real-data.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-09/ui|be (delta only)

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · new_page typed re-CRUD · yarn build/e2e/start:std @ PO
