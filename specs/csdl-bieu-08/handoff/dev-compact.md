# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-08
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c
headerFingerprint: sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f
writtenAt: 2026-09-18T05:35:00.000Z
taskId: task_ed6e77ce
tlTaskId: task_21f9b30c
resource: traffic-safety
columns: 45
groups: 11
IdCode: AT-
formNo: 08
changeScope: edit_page
formPattern: Slideout
route_confirm: route_a
yarnBuild: PASS
dotnetBuild: PASS
migration: none
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubDeepLink: /so-ts/csdl-so-sach?resource=traffic-safety

## Decisions
- changeScope: edit_page (T-XLS-S08) · typed CRUD 45/11 **KEEP** · **cấm** reopen
- export: OOXML sheet Biểu 8 · filtered QS (+type) · `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · one_sheet_45 · empty=headers-only+toast
- import: import_now upsert by code · sheet Biểu 8 → shell+parent+1 child · skipBridge
- toolbar: catalogToolbar Xuất/Nhập on CsdlBieu08Page · **cấm** filter-bar export
- BFF: binary + multipart proxy KEEP · no new migration · **cấm ERP.***
- Gaps closed: GAP-BIEU08-XLS-01…06
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 45/11) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · OOXML · 45 |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · typed+child |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · toolbar +export+import
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* KEEP · LeaveConfirmModal
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-08
- hub=?resource=traffic-safety

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP
- export↔API-XLS-01 · import↔API-XLS-02/03
- T-XLS-BE-01..03 · BFF-01 · FE-01..02 **done**
- T-XLS-QA-01 **queued** `/agent-qa*`
- debt: getBlob strips Content-Disposition → FE fallback filename

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/implement/csdl-bieu-08.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/task/csdl-bieu-08.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/STATUS.md
- prior: handoff/team_lead-compact.md · sa-compact.md

## Cấm (compact)
ERP.* · filter-bar export · 12+8 · wide-row · reopen typed · e2e/start:std @ Dev
