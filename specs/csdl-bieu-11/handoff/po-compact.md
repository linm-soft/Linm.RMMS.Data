# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-11
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62
headerFingerprint: sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a
writtenAt: 2026-09-18T06:47:00.000Z
taskId: task_b2950eab
priorAnaly: task_55dac8de
priorTyped: task_20e43f26
resource: lighting-systems
columns: 24
blocks: 2
IdCode: LT-
formNo: 11
peerSoTs: so-ts-lighting

## Decisions
- changeScope: edit_page (T-XLS-S11 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- packKind: list (PO confirm)
- Grid AC: keep + toolbar Xuất/Nhập · Leave: LeaveConfirmModal · Report AC: N/A
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu11_ChieuSang_{yyyyMMdd}.xls · Q-XLS-SHEET: one_sheet
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 11 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 24 · LED+NLMT cùng hàng · **cấm** 2 sheet invent
- peer: qty bucket · **cấm** dump điểm so-ts-lighting
- keep: typed 24/2 · Schema_CsdlBieu11 · peer deep-link
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 24/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | P1 import_now |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export+import** · filter unchanged
- Form Kind D Slideout keep · 2 section lưới + NLMT
- S-XLS-EXPORT / S-XLS-IMPORT
- reviewUrl= prior prototype (Design delta nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-11
- Leave: LeaveConfirmModal · **cấm** native alert
- controlHint cite: specs/_data-analy/features/csdl-bieu-11-control-hint.md

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=lighting-systems
- Export: GET …/csdl-records/export?resource=lighting-systems (+ filter QS)
- Import: POST …/csdl-records/import?resource=lighting-systems
- T-XLS-S11 · GAP-BIEU11-XLS-01…07 · real-data §A+§B PASS
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-real-data.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-11/ui|be (delta only)

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · dump điểm Sổ TS · new_page typed re-CRUD · yarn build/e2e/start:std @ PO
