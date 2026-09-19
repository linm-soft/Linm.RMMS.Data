# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-02
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40
headerFingerprint: sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591
writtenAt: 2026-09-18T02:20:00.000Z
taskId: task_b5696c4c
saTaskId: task_5ee91442
resource: bridges
columns: 48
IdCode: BR-
team_lead_confirm: approve
route_confirm: route_a
changeScope: edit_page
formPattern: Slideout
devSlash: /agent-dev

## Decisions
- changeScope: edit_page (T-XLS-S02) · typed CRUD **KEEP** · **cấm** reopen 48-col
- route_confirm: route_a keep · hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-02`
- Q-XLS: filtered · export_only_p0 · `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · filter-all
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- Import: **DEFER P1** · UI ẩn · T-XLS-IMP OUT
- golden: Cục 16-sheet sheet Biểu 2 · 48 cols · GPS×3 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- migration: **none mới** @ XLS · entity KEEP
- Gaps: GAP-BIEU02-XLS-01..04 (UI · export · import-defer · filter-all)
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 48) | typed prior | keep | GPS×3 · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · filter-all · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT (hidden)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-02
- hub=?resource=bridges

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01 · import DEFER
- T-* KEEP: T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-BE-CRUD/UISCHEMA · T-PERM · T-QA-*
- T-XLS pending: T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 · T-XLS-IMP OUT
- deps: BE-01→BE-02→BFF→FE-01→FE-02→QA-01
- devSlash: /agent-dev (+ /dev-web-responsive · /dev-ui-review · /implement-export-import-excel)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/task/csdl-bieu-02.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/STATUS.md
- prior: handoff/sa-compact.md · design-compact.md · po-compact.md · data_analy-compact.md
