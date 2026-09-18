# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-02
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40
headerFingerprint: sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591
writtenAt: 2026-09-18T02:05:52.000Z
taskId: task_a201197f
tlTaskId: task_b5696c4c
resource: bridges
columns: 48
IdCode: BR-
changeScope: edit_page
formPattern: Slideout
yarnBuild: PASS
dotnetBuild: PASS
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-02

## Decisions
- changeScope: edit_page (T-XLS-S02) · typed CRUD KEEP · **cấm** reopen 48-col
- export: OOXML sheet Biểu 2 · 48 cols · GPS×3 · filtered QS · filter-all · `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · empty=headers-only+toast
- Import: DEFER P1 · UI ẩn · T-XLS-IMP OUT
- toolbar: catalogToolbar Xuất only · **cấm** filter-bar export (GAP-FILTER-BAR-08)
- migration: none @ XLS · BFF binary KEEP
- Gaps closed: GAP-BIEU02-XLS-01 · 02 · 04 · 03 deferred
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 48) | typed prior | keep | GPS×3 · KEEP |
| exportExcel | Xuất Excel | ToolbarButton | filtered · filter-all · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT (hidden)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-02
- hub=?resource=bridges

## API / tasks (ids only)
- API-XLS-01 GET …/csdl-records/export?resource=bridges (+ filter QS · beamType)
- T-XLS-BE-01/02 · BFF-01 · FE-01/02 **done** · T-XLS-QA-01 pending QA
- debt: getBlob strips Content-Disposition · Auth DEFER · Import P1

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/implement/csdl-bieu-02.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/STATUS.md
- prior: handoff/team_lead-compact.md
