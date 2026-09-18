# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-03
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9
headerFingerprint: sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8
writtenAt: 2026-09-18T02:50:00.000Z
taskId: task_310ad88c
tlTaskId: task_28ddf784
resource: road-tunnels
columns: 42
IdCode: TN-
changeScope: edit_page
formPattern: Slideout
yarnBuild: PASS
dotnetBuild: PASS
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-03

## Decisions
- changeScope: edit_page (T-XLS-S03) · typed CRUD KEEP · **cấm** reopen 42-col
- export: OOXML sheet Biểu 3 · 42 cols · GPS×3 · XLS-TUBE 1row/ống · filtered QS · filter-all · `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · empty=headers-only
- Import: DEFER P1 · UI ẩn · T-OUT-01
- toolbar: catalogToolbar Xuất only · **cấm** filter-bar export (GAP-FILTER-BAR-08)
- migration: none @ XLS · BFF binary KEEP
- Gaps closed: GAP-BIEU03-XLS-01 · 02 · 04 · 05 · 03 deferred
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 42) | typed prior | keep | GPS×3 · tube · KEEP |
| exportExcel | Xuất Excel | ToolbarButton | filtered · filter-all · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT (hidden)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-03
- hub=?resource=road-tunnels

## API / tasks (ids only)
- API-XLS-01 GET …/csdl-records/export?resource=road-tunnels (+ filter QS · tunnelClass · tubeCount)
- T-XLS-BE-01/02 · BFF-01 · FE-01/02 **done** · T-XLS-QA-01 pending QA
- debt: getBlob strips Content-Disposition · Auth DEFER · Import P1

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/implement/csdl-bieu-03.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/STATUS.md
- prior: handoff/team_lead-compact.md
