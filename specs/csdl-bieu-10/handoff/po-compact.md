# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-10
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302
headerFingerprint: sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598
writtenAt: 2026-09-18T06:14:00.000Z
taskId: task_f96b7dc8
priorAnaly: task_0fb02546
priorTyped: task_faf3807e
resource: retaining-walls
columns: 21
blocks: 2
IdCode: KE-
formNo: 10
peerSoTs: so-ts-retaining

## Decisions
- changeScope: edit_page (T-XLS-S10 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- packKind: list (PO confirm)
- Grid AC: keep + toolbar Xuất/Nhập · Leave: LeaveConfirmModal · Report AC: N/A
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu10_KeTuongChan_{yyyyMMdd}.xls · Q-XLS-HEIGHT: height_alias
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 10 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 21 · crest* cùng hàng · **cấm** 2 sheet invent
- map: heightM↔WidthM giữ SA typed
- keep: typed 21/2 · Schema_CsdlBieu10 · peer deep-link
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 21/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | P1 import_now |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export+import** · filter unchanged
- Form Kind D Slideout keep · 2 section tường + rãnh đỉnh
- S-XLS-EXPORT / S-XLS-IMPORT
- reviewUrl= prior prototype (Design delta nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-10
- Leave: LeaveConfirmModal · **cấm** native alert
- controlHint cite: specs/_data-analy/features/csdl-bieu-10-control-hint.md

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=retaining-walls
- Export: GET …/csdl-records/export?resource=retaining-walls (+ filter QS)
- Import: POST …/csdl-records/import?resource=retaining-walls
- T-XLS-S10 · GAP-BIEU10-XLS-01…07 · real-data §A+§B PASS
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-real-data.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-10/ui|be (delta only)

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · new_page typed re-CRUD · yarn build/e2e/start:std @ PO
