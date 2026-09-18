# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-01
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085
headerFingerprint: sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2
writtenAt: 2026-09-18T01:26:00.000Z
taskId: task_742f5820
tlTaskId: task_56b657af
resource: pavement-sections
columns: 38
IdCode: MD-
changeScope: edit_page
formPattern: Slideout
yarnBuild: PASS
dotnetBuild: PASS
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-01

## Decisions
- changeScope: edit_page (T-XLS-S01) · typed CRUD KEEP · **cấm** reopen 38-col
- export: OOXML sheet Biểu 1 · filtered QS · filename `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` · empty=headers-only+toast
- import: import_now upsert by code · skipBridge · sheet Biểu 1 → shell+typed
- toolbar: catalogToolbar Xuất/Nhập on CsdlBieu01Page · **cấm** filter-bar export
- migration: none @ XLS · BFF QS+binary KEEP+ms-excel
- Gaps closed: GAP-BIEU01-XLS-EXP-01 · IMP-01 · UI-01
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 38) | typed prior | keep | KEEP |
| exportExcel | Xuất Excel | ToolbarButton | filtered · OOXML |
| importExcel | Nhập Excel | ToolbarButton+file | import_now |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT · S-FORM-* KEEP
- mfeStdUrl hub · alias /csdl-bieu-01 · hub=?resource=pavement-sections

## API / tasks (ids only)
- API-XLS-01/02/03 · T-XLS-BE-01..03 · BFF-01 · FE-01..02 **done**
- T-XLS-QA-01 queued `/agent-qa*`
- T-* KEEP CRUD

## UNCLEAR
- none

## Debt
- getBlob strips CD → FE fallback filename=PO lock
- BIFF .xls read unsupported (OOXML OK)
- Auth DEFER · GAP-QA-E2E-PW-01 P2

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/implement/csdl-bieu-01.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/STATUS.md
- prior: handoff/team_lead-compact.md
